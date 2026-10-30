const crypto = require("crypto");

// Temporary passwords that an administrator sets are stored encrypted so they
// can be exported. Normal passwords are only ever stored as bcrypt hashes.
function getKey() {
    const secret = process.env.ENCRYPTION_KEY || process.env.JWT_SECRET;

    if (!secret) {
        throw new Error("ENCRYPTION_KEY or JWT_SECRET must be configured");
    }

    return crypto.createHash("sha256").update(secret).digest();
}

function encrypt(plainText) {
    const iv = crypto.randomBytes(12);
    const cipher = crypto.createCipheriv("aes-256-gcm", getKey(), iv);
    const encrypted = Buffer.concat([cipher.update(plainText, "utf8"), cipher.final()]);
    const tag = cipher.getAuthTag();

    return [iv, tag, encrypted].map((part) => part.toString("base64")).join(":");
}

function decrypt(payload) {
    const [iv, tag, data] = payload.split(":").map((part) => Buffer.from(part, "base64"));
    const decipher = crypto.createDecipheriv("aes-256-gcm", getKey(), iv);

    decipher.setAuthTag(tag);

    return Buffer.concat([decipher.update(data), decipher.final()]).toString("utf8");
}

module.exports = { encrypt, decrypt };

const crypto = require("crypto");

// Look-alike characters (0/O, 1/l/I) are left out so the password is easy to read and type.
const CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789";

function generatePassword(length = 12) {
    let password = "";

    // Keep generating until the password has an upper case letter, a lower case letter and a digit.
    do {
        password = "";
        for (let i = 0; i < length; i++) {
            password += CHARS[crypto.randomInt(CHARS.length)];
        }
    } while (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password));

    return password;
}

module.exports = generatePassword;

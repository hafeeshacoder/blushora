// api.js
// Reusable localStorage functions

export function getData(key, defaultValue = null) {
    const data = localStorage.getItem(key);

    if (data === null) {
        return defaultValue;
    }

    try {
        return JSON.parse(data);
    } catch (error) {
        console.error("Storage error:", error);
        return defaultValue;
    }
}

export function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

export function removeData(key) {
    localStorage.removeItem(key);
}
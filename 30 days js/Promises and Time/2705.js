/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
    // Nếu không phải object (số, string, boolean...) → trả về luôn
    if (obj === null || typeof obj !== 'object') return obj;

    // Nếu là mảng
    if (Array.isArray(obj)) {
        return obj
            .filter(Boolean)                        // loại falsy
            .map(item => compactObject(item));      // đệ quy vào từng phần tử
    }

    // Nếu là object
    const result = {};
    for (const key in obj) {
        const value = compactObject(obj[key]);      // đệ quy vào value
        if (Boolean(value)) {                       // chỉ giữ truthy
            result[key] = value;
        }
    }
    return result;
};
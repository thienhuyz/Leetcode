/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const sn = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0, right = sn.length - 1;

    while (left < right) {
        if (sn[left] !== sn[right]) return false;

        left++;
        right--;
    }
    return true;
};
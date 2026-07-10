/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    const set = new Set(nums);
    let longest = 0;

    for (const num of set) {
        if (!set.has(num - 1)) {
            let len = 1;
            while (set.has(num + len)) len++;
            longest = Math.max(longest, len);
        }
    }
    return longest;
};
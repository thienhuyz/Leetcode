/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let left = 0, right = height.length - 1;
    let maxLeft = 0, maxRight = 0;
    let water = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            maxLeft = Math.max(height[left], maxLeft);
            water += maxLeft - height[left];
            left++;
        } else {
            maxRight = Math.max(height[right], maxRight);
            water += maxRight - height[right];
            right--;
        }
    }
    return water;
};
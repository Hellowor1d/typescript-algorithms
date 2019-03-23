/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums : number[], k : number) : void {
    while(k > 0) {
        const last = nums.pop()
        if (last) {
            nums.unshift(last)
        }
        k--
    }
};

const nums = [1,2,3,4,5,6]
rotate(nums,4)
console.log(nums)
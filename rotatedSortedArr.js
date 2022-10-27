/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//[4,5,6,7,0,1,2]
function search(nums, target) {
  if (target == nums[0]) {
    return 0;
  }
  if (target < nums[0]) {
    for (i = nums.length - 1; nums[i] >= target; i--) {
      if (nums[i] === target) {
        return i;
      }
    }
  } else if (target > nums[0]) {
    for (i = 0; nums[i] <= target; i++) {
      if (nums[i] === target) {
        return i;
      }
    }
  }
  return -1;
}

nums = [4, 5, 6, 7, 0, 1, 2];
target = 1;

console.log(search(nums, target));

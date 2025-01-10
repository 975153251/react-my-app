var search = function (nums, target) {
  if (nums.length === 0) return -1;
  let left = 0;
  let right = nums.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.round((right + left) / 2);
    console.log('mid: ', mid, nums[mid]);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[left] <= nums[mid]) {
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};

const input = [4, 5, 6, 7, 0, 1, 2];
const result = search(input, 0);
console.log(result);

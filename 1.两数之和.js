/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const nums = [2, 7, 11, 15],
    target = 9;
const twoSum = function(nums, target) {
  const ret = [];
  const exist = {};
  for(let i = 0; i < nums.length; i++){
    if(typeof(exist[target - nums[i]]) !== 'undefined'){
        ret.push(exist[target - nums[i]]);
        ret.push(i);
        return ret;
    }
    exist[nums[i]] = i;
  }
};

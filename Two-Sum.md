## Two-Sum

给定一个整数数组，给定一个目标值，返回数组里面相加值为目标值的数字的索引。你得假设每个目标值都会有一个解决方案。

解决方案：
```js
var nums = [2, 7, 11, 15];
var target = 9;
var twoSum = function(nums, target) {
    var length = nums.length;
    var num = [];
    for(var i = 0; i < length-1;i++){
        for(var j = i+1; j< length; j++){
            if(nums[i]+ nums[j] === target){
                num.push(i , j);
            }
        }
    }
    return num;
};
twoSum (nums, target);
```

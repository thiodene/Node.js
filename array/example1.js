/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    //var min_nums = nums.sort();
    //var max_nums = nums.reverse();
    nums.sort();

    let min = nums[0];
    let max = nums[nums.length - 1];
    let num2 = 0

    for (var i = max - 1 ; i >= min; i--)
    {
        if (nums.includes(i))
            if (num2 == 0)
                num2 = i;

    }
    return num2;
    //return min;

}

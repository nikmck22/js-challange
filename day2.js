

function addTwoDigits(num)  {
  //  write code here.
  const nums = num.toString().split('');

  return parseInt(nums[0]) + parseInt(nums[1]);
}


return addTwoDigits(29)
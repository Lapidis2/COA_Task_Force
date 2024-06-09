function checkSubarray(arr, targetSum) {
  if (targetSum === 0) return arr.includes(0);

  let sum = 0;
  let initial = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    while (sum > targetSum&& initial<=i) {
      sum -= arr[initial];
      initial++;
    }

    if (sum === targetSum) {
      return true;
    }
  }

  return false;
}
module.exports={checkSubarray}
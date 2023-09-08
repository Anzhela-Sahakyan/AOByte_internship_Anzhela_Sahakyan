export default function CalculateMedian(arr) {
  const sortedArr = arr.slice().sort((a, b) => a - b);
  const middle = Math.floor(sortedArr.length / 2);

  if (sortedArr.length % 2 === 0) {
    const median1 = sortedArr[middle - 1];
    const median2 = sortedArr[middle];
    return (median1 + median2) / 2;
  } else {
    return sortedArr[middle];
  }
}

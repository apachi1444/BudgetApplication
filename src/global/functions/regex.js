export function checkForNums(input) {
  let result = /^\d+$/.test(input);
  console.log(result);
}
export const checkNumsExpression = /^\d+$/;

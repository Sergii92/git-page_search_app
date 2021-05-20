export const setSerchItemsHelper = (array: string[], value: string) => {
  let result = [];

  result = [...array, value];
  if (result.length > 5) {
    result.shift();
  }

  return result;
};

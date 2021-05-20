export const setSerchItemsHelper = (
  searchArray: string[],
  searchValue: string
) => {
  let result = [];

  result = [...searchArray, searchValue];
  if (result.length > 5) {
    result.shift();
  }

  return result;
};

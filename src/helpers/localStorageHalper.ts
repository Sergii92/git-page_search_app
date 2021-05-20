export const setAllToLocalStorage = (searchArr: string[]) => {
  localStorage.setItem("SerchParam", JSON.stringify(searchArr));
};

export const getAllFromLocalStorage = (): string[] => {
  const searchResalt = localStorage.getItem("SerchParam") || "[]";
  return JSON.parse(searchResalt);
};

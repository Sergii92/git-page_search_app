export const setAllToLocalStorage = (searchArr) => {
  localStorage.setItem("SerchParam", JSON.stringify(searchArr));
};

export const getAllFromLocalStorage = () => {
  const searchResalt = localStorage.getItem("SerchParam") || "[]";
  return JSON.parse(searchResalt);
};

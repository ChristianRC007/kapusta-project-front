export const setActive = array => {
  if (array.length === 0) return [];
  const newArr = array.map(el => {
    return {
      ...el,
      isActive: false,
    };
  });

  return [{ ...newArr[0], isActive: true }, ...newArr.slice(1)];
};

export const setActive = array => {
  const newArr = array.map(el => {
    return {
      ...el,
      isActive: false,
    };
  });

  return [{ ...newArr[0], isActive: true }, ...newArr.slice(1)];
};

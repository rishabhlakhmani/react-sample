type ID = {
  id: string;
};

export const updateItem = <T extends ID>(arr: T[], newItem: T): T[] => {
  const newArr = [...arr];
  newArr.splice(
    newArr.findIndex((item) => item.id === newItem.id),
    1,
    newItem
  );

  return newArr;
};

//I use this approach for mapping all the state and updating values
//that way code is leaner
export const updateObject = (oldObject, updatedValues) => {
  return {
    ...oldObject,
    ...updatedValues,
  };
};

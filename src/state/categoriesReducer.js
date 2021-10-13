export default function categoriesReducer(state, action) {
  switch (action.type) {
    case "SET_CATEGORIES":
      return setCategories(action);
    default:
      throw new Error(`No action type found ${action.type}`);
  }
}

function setCategories(action) {
  const { payload } = action;

  return payload;
}

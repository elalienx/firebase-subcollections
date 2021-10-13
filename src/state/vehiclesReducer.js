export default function candidatesReducer(state, action) {
  switch (action.type) {
    case "SET_VEHICLES":
      return setVehicles(action);
    default:
      throw new Error(`No action type found ${action.type}`);
  }
}

function setVehicles(action) {
  const { payload } = action;

  return payload;
}

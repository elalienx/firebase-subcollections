export default function vehicleReducer(state, action) {
  switch (action.type) {
    case "SET_VEHICLE":
      return setVehicle(action);
    default:
      throw new Error(`No action type found ${action.type}`);
  }
}

function setVehicle(action) {
  const { payload } = action;

  return payload;
}

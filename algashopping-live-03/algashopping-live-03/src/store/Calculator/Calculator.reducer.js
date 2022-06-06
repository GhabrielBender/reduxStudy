export default function (state = 30, action) {
  switch (action.type) {
    case "SUM":
      return action.payload[0] + action.payload[1];

    case "SUBTACT":
      return action.payload[0] - action.payloadp[1];

    default:
      return state;
  }
}

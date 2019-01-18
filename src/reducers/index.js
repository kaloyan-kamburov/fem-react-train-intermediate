import { combineReducers } from "redux";
import location from "./location";
import animal from "./animal";
import breed from "./breed";
import breeds from "./breeds";

export default combineReducers({
  location,
  animal,
  breed,
  breeds
});

// test("locationReducer", () => {
//   expect(
//     locationReducer("Seattle, WA", {
//       type: "SET_LOCATION",
//       payload: "San Francisco, CA"
//     }).toBe("San Francisco")
//   );
// });

import { combineReducers } from "redux";

import CounterReducer from "./CounterReducer";
import EmployeeReducer from "./EmployeeReducer"

const rootReducer = combineReducers({counter:CounterReducer,employees:EmployeeReducer})

export default rootReducer
import { combineReducers } from "redux";
import alertasReducer from "./alertasReducer";
import productosReducer from "./productosReducer";

export default combineReducers({
  productos: productosReducer,
  alerta: alertasReducer,
});

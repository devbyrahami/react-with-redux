import { all, call } from "redux-saga/effects";
import { watchUpButton, watchDownButton } from "./saga";

export default function* rootSaga() {
  yield all([call(watchUpButton), call(watchDownButton)]);
}

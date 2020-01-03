import { put, takeLatest, delay } from "redux-saga/effects";

//the purpose is to wrap the action into a new function and release to the reducer..
function* ageUpAsync() {
  yield delay(1000);
  //put = means it will release the new action function back into the redux eco-system
  yield put({ type: "AGE_UP_NEW", value: 2 });
}

//the purpose is to catch the action and pass into another new function,it sits in the middleware to listens for action
export function* watchUpButton() {
  yield takeLatest("AGE_UP", ageUpAsync);
}

function* ageDownSync() {
  yield put({ type: "AGE_DOWN_NEW", value: 10 });
}

export function* watchDownButton() {
  yield takeLatest("AGE_DOWN", ageDownSync);
}

/*

We have to use NEW TYPE NAME for the new actions we have wrapped within the saga functions.
Else,it will go on an infinet loop of triggering the same action until it web slows down..
*/

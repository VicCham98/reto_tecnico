import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { getDivisionesSuccess } from "./actions";
import { types } from "../actions";
import { apiCall } from "../../config/callWrapper";

function* getDivisiones({ payload }) {
  try {
    const { page, pageSize } = payload;
    const response = yield call(apiCall, "POST", "div/divisiones?page=1", {
      page,
      pageSize,
    });
    yield put(getDivisionesSuccess(response));
  } catch (err) {
    console.log(err);
  }
}

export function* watchGetDivisiones() {
  yield takeEvery(types.division.getDivisiones, getDivisiones);
}

export default function* rootSaga() {
  yield all([fork(watchGetDivisiones)]);
}

import { all } from 'redux-saga/effects';
import DivisionesSaga from './Division/saga';

export default function* rootSaga() {
  yield all([DivisionesSaga()]);
}

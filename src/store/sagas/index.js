import { all, call } from 'redux-saga/effects';
import storeSaga from './store-saga';

export default function* rootSaga() {
	yield all([call(storeSaga)]);
}

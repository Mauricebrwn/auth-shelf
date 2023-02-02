import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* deleteItem(action) {
   const id = action.payload
   console.log(id)
  try {
    const response = yield axios.delete(`/api/shelf/${id}`);
    yield put({ type: 'FETCH_SHELF'})
  } catch (error) {
    console.log('delete request failed', error);
  }
}

export default function* deleteSaga() {
  yield takeLatest('DELETE_ITEM', deleteItem);
}
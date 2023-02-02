import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* itemFormSaga(action){
    const item = action.payload
    console.log('this is item', item);
    const itemSent = yield axios({
        method: 'POST',
        url:'/api/shelf',
        data: item
    })
    yield put({
        type:'FETCH_SHELF'
    })   

}

function* sagaForm() {
    yield takeLatest('NEW_ITEM_TO_POST', itemFormSaga)
}


export default sagaForm; 
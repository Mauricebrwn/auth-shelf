import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* itemFormSaga(){
    const itemSent = yield axios({
        method: 'POST',
        url:'/api/shelf'
    })
    yield put({
        type:'NEW_ITEM_TO_POST',
        payload: itemSent
    })   

}

export default itemFormSaga; 
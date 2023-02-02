//this is to hold state for the itemForm
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import axios from 'axios';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';


// itemForm state.
const itemFormObject = (state= [], action)=>{
    switch(action.type){
        case 'ITEM_FORM_OBJECT':
            return action.payload;
            default:
                return state; 
    }
}


export default itemFormObject; 
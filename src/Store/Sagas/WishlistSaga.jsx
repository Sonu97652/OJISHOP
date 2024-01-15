import {takeEvery,put} from "redux-saga/effects"
import { createWishlistAPI, deleteWishlistAPI, getWishlistAPI, updateWishlistAPI } from "../Service"
import { ADD_WISHLIST, ADD_WISHLIST_RED, DELETE_WISHLIST, DELETE_WISHLIST_RED, GET_WISHLIST, GET_WISHLIST_RED, UPDATE_WISHLIST, UPDATE_WISHLIST_RED } from "../Constants"


function* createWishlistSaga(action){
    var response = yield createWishlistAPI(action.payload)
    yield put({type:ADD_WISHLIST_RED,data:response})
}
function* getWishlistSaga(){
    var response = yield getWishlistAPI()
    yield put({type:GET_WISHLIST_RED,data:response})
}
function* deleteWishlistSaga(action){
    yield deleteWishlistAPI(action.payload)
    // console.log("reduser",action)
    yield put({type:DELETE_WISHLIST_RED,data:action.payload})
}
function* updateWishlistSaga(action){
    yield updateWishlistAPI(action.payload)
    yield put({type:UPDATE_WISHLIST_RED,data:action.payload})
}
export function* wishlistSaga(){
    yield takeEvery(ADD_WISHLIST,createWishlistSaga)
    yield takeEvery(GET_WISHLIST,getWishlistSaga)
    yield takeEvery(DELETE_WISHLIST,deleteWishlistSaga)
    yield takeEvery(UPDATE_WISHLIST,updateWishlistSaga)
}
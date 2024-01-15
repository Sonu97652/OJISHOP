import {takeEvery,put} from "redux-saga/effects"
import { createCategoryAPI, deleteCategoryAPI, getCategoryAPI, updateCategoryAPI } from "../Service"
import { ADD_CATEGORY, ADD_CATEGORY_RED, DELETE_CATEGORY, DELETE_CATEGORY_RED, GET_CATEGORY, GET_CATEGORY_RED, UPDATE_CATEGORY, UPDATE_CATEGORY_RED } from "../Constants"


function* createCategorySaga(action){
    var response = yield createCategoryAPI(action.payload)
    yield put({type:ADD_CATEGORY_RED,data:response})
}
function* getCategorySaga(){
    var response = yield getCategoryAPI()
    yield put({type:GET_CATEGORY_RED,data:response})
}
function* deleteCategorySaga(action){
    yield deleteCategoryAPI(action.payload)
    // console.log("reduser",action)
    yield put({type:DELETE_CATEGORY_RED,data:action.payload})
}
function* updateCategorySaga(action){
    yield updateCategoryAPI(action.payload)
    yield put({type:UPDATE_CATEGORY_RED,data:action.payload})
}
export function* categorySaga(){
    yield takeEvery(ADD_CATEGORY,createCategorySaga)
    yield takeEvery(GET_CATEGORY,getCategorySaga)
    yield takeEvery(DELETE_CATEGORY,deleteCategorySaga)
    yield takeEvery(UPDATE_CATEGORY,updateCategorySaga)
}
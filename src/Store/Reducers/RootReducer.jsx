import {combineReducers} from "redux"

import {CategoryReducer} from "./CategoryReducer"
import {SubcategoryReducer} from "./SubcategoryReducer"
import { BrandReducer } from "./BrandReducer"
import {ProductReducer} from "./ProductReducer"
import {UserReducer} from "./UserReducer"
import { WishlistReducer } from "./WishlistReducer"
import {CartReducer} from "./CartReducer"
import { CheckoutReducer } from "./CheckoutReducer"
import { ContactReducer } from "./ContactReducer"
import {NewslatterReducer } from "./NewslatterReducer"
export default  combineReducers({
    CategoryStateData : CategoryReducer,
    SubcategoryStateData :SubcategoryReducer,
    BrandStateData: BrandReducer,
    ProductStateData:ProductReducer,
    UserStateData:UserReducer,
    WishlistStateData:WishlistReducer,
    CartStateData:CartReducer,
    CheckoutStateData:CheckoutReducer,
    ContactStateData:ContactReducer,
    NewslatterStateDAta:NewslatterReducer,

})
import {all} from "redux-saga/effects"


import { categorySaga } from "./CategorySaga"
import { subcategorySaga } from "./SubcategorySaga"
import { brandSaga } from "./BrandSaga"
import { productSaga } from "./ProductSaga"
import {userSaga} from "./UserSaga"
import { wishlistSaga } from "./WishlistSaga"
import { cartSaga } from "./CartSaga"
import {checkoutSaga} from "./CheckoutSaga"
import { contactSaga } from "./ContactSaga"
import { newslatterSaga } from "./NewslatterSaga"


export default function* RootSage(){
    yield all([categorySaga(),subcategorySaga(),brandSaga(),productSaga(),userSaga(),wishlistSaga(),cartSaga(),checkoutSaga(),contactSaga(),newslatterSaga()])
}


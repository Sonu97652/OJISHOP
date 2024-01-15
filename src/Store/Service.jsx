//category

export async function createCategoryAPI(data){
    var response =await fetch("/category",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)

    })
    return await response.json()
}

export async function getCategoryAPI(){
    var response =await fetch("/category",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}
export async function updateCategoryAPI(data){
    var response =await fetch("/category/"+data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}
export async function deleteCategoryAPI(data){
    var response =await fetch("/category/"+data.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}


//SUBCATEGORY
export async function createSubcategoryAPI(data){
    var response =await fetch("/subcategory",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)

    })
    return await response.json()
}

export async function getSubcategoryAPI(){
    var response =await fetch("/subcategory",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}
export async function updateSubcategoryAPI(data){
    var response =await fetch("/subcategory/"+data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}
export async function deleteSubcategoryAPI(data){
    var response =await fetch("/subcategory/"+data.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}


//BRAND

export async function createBrandAPI(data){
    var response =await fetch("/brand",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)

    })
    return await response.json()
}

export async function getBrandAPI(){
    var response =await fetch("/brand",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}
export async function updateBrandAPI(data){
    var response =await fetch("/brand/"+data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}
export async function deleteBrandAPI(data){
    var response =await fetch("/brand/"+data.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}


//PRODUCT
export async function createProductAPI(data){
    var response =await fetch("/product",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)

    })
    return await response.json()
}

export async function getProductAPI(){
    var response =await fetch("/product",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}
export async function updateProductAPI(data){
    var response =await fetch("/product/"+data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}
export async function deleteProductAPI(data){
    var response =await fetch("/product/"+data.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}


//User
export async function createUserAPI(data){
    var response =await fetch("/user",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)

    })
    return await response.json()
}

export async function getUserAPI(){
    var response =await fetch("/user",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}
export async function updateUserAPI(data){
    var response =await fetch("/user/"+data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}
export async function deleteUserAPI(data){
    var response =await fetch("/user/"+data.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}


//Cart
export async function createCartAPI(data){
    var response =await fetch("/cart",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)

    })
    return await response.json()
}

export async function getCartAPI(){
    var response =await fetch("/cart",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}
export async function updateCartAPI(data){
    var response =await fetch("/cart/"+data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}
export async function deleteCartAPI(data){
    var response =await fetch("/cart/"+data.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}

//Wishlist
export async function createWishlistAPI(data){
    var response =await fetch("/wishlist",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)

    })
    return await response.json()
}

export async function getWishlistAPI(){
    var response =await fetch("/wishlist",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}
export async function updateWishlistAPI(data){
    var response =await fetch("/wishlist/"+data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}
export async function deleteWishlistAPI(data){
    var response =await fetch("/wishlist/"+data.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}


//Checkout
export async function createCheckoutAPI(data){
    var response =await fetch("/checkout",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)

    })
    return await response.json()
}

export async function getCheckoutAPI(){
    var response =await fetch("/checkout",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}
export async function updateCheckoutAPI(data){
    var response =await fetch("/checkout/"+data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}
export async function deleteCheckoutAPI(data){
    var response =await fetch("/checkout/"+data.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}

//Contact
export async function createContactAPI(data){
    var response =await fetch("/Contact",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)

    })
    return await response.json()
}

export async function getContactAPI(){
    var response =await fetch("/Contact",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}
export async function updateContactAPI(data){
    var response =await fetch("/Contact/"+data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}
export async function deleteContactAPI(data){
    var response =await fetch("/Contact/"+data.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}

//Newslatter

export async function createNewslatterAPI(data){
    var response =await fetch("/Newslatter",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)

    })
    return await response.json()
}

export async function getNewslatterAPI(){
    var response =await fetch("/Newslatter",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}
export async function updateNewslatterAPI(data){
    var response =await fetch("/Newslatter/"+data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}
export async function deleteNewslatterAPI(data){
    var response =await fetch("/Newslatter/"+data.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}
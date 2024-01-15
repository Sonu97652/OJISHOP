import React, { useState,useEffect } from "react";
import LeftNav from "./LeftNav";
// import { Link } from 'react-router-dom'
import {updateProduct,getProduct} from "../../Store/ActionCreators/ProductActionCreators"
import {getCategory} from "../../Store/ActionCreators/CategoryActionCreators"
import {getSubcategory} from "../../Store/ActionCreators/SubcategoryActionCreators"
import {getBrand} from "../../Store/ActionCreators/BrandActionCreators"


import { useNavigate,useParams } from 'react-router-dom'
import { useSelector,useDispatch} from "react-redux";

export default function AdminUpdateProduct() {
  // var [name,SetName]=useState("")
  // var {id} =useParams()

  // // console.log("name",name)
  // var product =useSelector((state)=>state.ProductStateData)
  // var navigate =useNavigate()
  // var dispatch = useDispatch()
  // function getData(e){
  //   SetName(e.target.value)
  // }
  // function postData(e){
  //   // console.log("Post Data")
  //   e.preventDefault()
  //   // alert("Name :"+name)
  //   var item = product.find((item)=>item.name===name)
  //   if(item)
  //   alert("Product Name is Already Exist")
  //   else{
  //     dispatch(updateProduct({id:id,name:name}))
  //     navigate("/admin-product")
  //   }


    
  // }
  var [data,setdata]=useState({
    name:" ",
    category:" ",
    subcategory:" ",
    brand:" ",
    color:" ",
    size:" ",
    baseprice:0,
    discount:0,
    finalprice:0,
    stock:"In Stock",
    description:"This is Sample Product",
    pic1:"",
    pic2:"",
    pic3:" ",
    pic4:"",
  })
  // console.log("name",name)
  var{id} =useParams()
  var product =useSelector((state)=>state.ProductStateData)
  var category =useSelector((state)=>state.CategoryStateData)
  var subcategory =useSelector((state)=>state.SubcategoryStateData)
  var brand =useSelector((state)=>state.BrandStateData)
  var navigate =useNavigate()
  var dispatch = useDispatch()
  function getData(e) {
    var name = e.target.name;
    var value = e.target.value;
    setdata((old) => {
      return {
        ...old,
        [name]: value,
      };
    });
  }
  function getFile(e){
    var name=e.target.name
    var value=e.target.files[0].name
    setdata((old)=>{
      return{
        ...old,
        [name]:value
      }
    })
  }
  function postData(e){
    e.preventDefault()
    // console.log("Post Data")
    var bp=Number(data.baseprice)
    var d =Number(data.discount)
    var fp=parseInt(bp-bp*d/100)
    var c =data.category
    var sc =data.subcategory
    var br =data.brand
    if(c==="")
    c=category[1].name
    if(sc==="")
    sc=subcategory[1].name
    if(br==="")
    br=brand[1].name
    

    
    // alert("Name :"+name)
    var item={
      id:id,
      name:data.name,
      category:c,
      subcategory:sc,
      brand:br,
      color:data.color,
      size:data.size,
      baseprice:bp,
      discount:d,
      finalprice:fp,
      stock:data.stock,
      description:data.description,
      pic1:data.pic1,
      pic2:data.pic2,
      pic3:data.pic3,
      pic4:data.pic4

    }
    dispatch(updateProduct(item))
    navigate("/admin-product")

    // var item = product.find((item)=>item.name===name)
    // if(item)
    // alert("Product Name is Already Exist")
    // else{
    //   dispatch(addProduct({name:name}))
    //   navigate("/admin-product")
    // }


    
  }
   useEffect(()=>{
    dispatch(getProduct())
    dispatch(getCategory())
    dispatch(getSubcategory())
    dispatch(getBrand())
    // var item =product.find((item)=>item.id===Number(id))
    setdata(product.find((item)=>item.id===Number(id)))
   },[])

  return (
    <>
      <div className="contain-fluid my-5">
        <div className="row">
          <div className="col-lg-2 col-12">
            <LeftNav />
          </div>
          <div className="col-lg-10 col-12">
            <h5 className="bg-secondary text-center text-light p-1">
              Product
            </h5>
            <from className="p-3">
              <div className="mb-3">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Subcategory Name :"
                  className="form-control"
                  onChange={getData}
                />
              </div>
              <div className="row mb-3">
                <div className="col-lg-3 col-md-6 col-12 ">
                  <label htmlFor="category">Category</label>
                  <select
                    name="category"
                    id="category"
                    onChange={getData}
                    className="form-control"
                   >
                    {category.map((item, index) => {
                      return (
                        <option key={index} value={item.name} >
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="col-lg-3 col-md-6 col-12 ">
                  <label htmlFor="subcategory">Subcategory</label>
                  <select
                    name="subcategory"
                    id="subcategory"
                    onChange={getData}
                    className="form-control"
                  >
                    {subcategory.map((item, index) => {
                      return (
                        <option key={index} value={item.name}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="col-lg-3 col-md-6 col-12 ">
                  <label htmlFor="brand">Brand</label>
                  <select
                    name="brand"
                    id="brand"
                    onChange={getData}
                    className="form-control"
                  >
                    {brand.map((item, index) => {
                      return (
                        <option key={index} value={item.name}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="col-lg-3 col-md-6 col-12 ">
                  <label htmlFor="brand">Stock</label>
                  <select
                    name="stock"
                    id="stock"
                    onChange={getData}
                    className="form-control"
                  >
                    <option value="In Stock">In Stock</option>
                    <option value="Out Of Stock">Out Of Stock</option>
                  </select>
                </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6 col-12">
                    <label htmlFor="color">Color</label>
                    <input type="text" name="color" id="color" placeholder="Enter Color" onChange={getData} className="form-control"/>
                  </div>
                {/* </div> */}
                {/* <div className="row mb-3"> */}
                  <div className="col-md-6 col-12">
                    <label htmlFor="size">Size</label>
                    <input type="text" name="size" id="size" placeholder="Enter Size" onChange={getData} className="form-control"/>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6 col-12">
                    <label htmlFor="baseprice">Base Price</label>
                    <input type="number" name="baseprice" id="baseprice" placeholder="Enter Base Price" onChange={getData} className="form-control"/>
                  </div>
                {/* </div> */}
                {/* <div className="row mb-3"> */}
                  <div className="col-md-6 col-12">
                    <label htmlFor="discount">Discount</label>
                    <input type="number" name="discount" id="discount" placeholder="Enter Discount" onChange={getData} className="form-control"/>
                  </div>
                </div>
              <div className="mb-3">
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" rows="3" onclick={getData} className="form-control"></textarea>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6 col-12">
                    <label htmlFor="pic1">Pic1</label>
                    <input type="file" name="pic1" id="pic1" onChange={getFile} className="form-control" />
                    </div>
                    <div className="col-md-6 col-12">
                    <label htmlFor="pic2">Pic2</label>
                    <input type="file" name="pic2" id="pic2" onChange={getFile} className="form-control" />
                    </div>
                    </div>
                    <div className="row mb-3">
                  <div className="col-md-6 col-12">
                    <label htmlFor="pic3">Pic3</label>
                    <input type="file" name="pic3" id="pic3" onChange={getFile} className="form-control" />
                    </div>
                    <div className="col-md-6 col-12">
                    <label htmlFor="pic4">Pic4</label>
                    <input type="file" name="pic4" id="pic4" onChange={getFile} className="form-control" />
                    </div>
                    </div>   

              <div className="mb-3">
                <button
                  type="submit"
                  className="btn btn-secondary w-100"
                  onClick={postData}
                >
                  Update
                </button>
              </div>
            </from>
          </div>
        </div>
      </div>
    </>
  );
}

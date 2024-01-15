import React, { useState,useEffect } from "react";
import LeftNav from "./LeftNav";
// import { Link } from 'react-router-dom'
import {addCategory,getCategory} from "../../Store/ActionCreators/CategoryActionCreators"


import { useNavigate } from 'react-router-dom'
import { useSelector,useDispatch} from "react-redux";

export default function AdminAddCategory() {
  var [name,SetName]=useState("")
  console.log("name",name)
  var category =useSelector((state)=>state.CategoryStateData)
  var navigate =useNavigate()
  var dispatch = useDispatch()
  function getData(e){
    SetName(e.target.value)
  }
  function postData(e){
    // console.log("Post Data")
    e.preventDefault()
    // alert("Name :"+name)
    var item = category.find((item)=>item.name===name)
    if(item)
    alert("Category Name is Already Exist")
    else{
      dispatch(addCategory({name:name}))
      navigate("/admin-category")
    }


    
  }
   useEffect(()=>{
    dispatch(getCategory())
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
              Category
            </h5>
            <from className="p-3" >
              <div className="mb-3">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Category Name :"
                  className="form-control" onChange={getData}
                />
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-secondary w-100" onClick={postData}>
                  Add
                </button>
              </div>
            </from>
          </div>
        </div>
      </div>
    </>
  )
}

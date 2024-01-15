import React, { useState,useEffect } from "react";
import LeftNav from "./LeftNav";
// import { Link } from 'react-router-dom'
import {updateSubcategory,getSubcategory} from "../../Store/ActionCreators/SubcategoryActionCreators"


import { useNavigate,useParams } from 'react-router-dom'
import { useSelector,useDispatch} from "react-redux";

export default function AdminUpdateSubcategory() {
  var [name,SetName]=useState("")
  var {id} =useParams()

  // console.log("name",name)
  var subcategory =useSelector((state)=>state.SubcategoryStateData)
  var navigate =useNavigate()
  var dispatch = useDispatch()
  function getData(e){
    SetName(e.target.value)
  }
  function postData(e){
    // console.log("Post Data")
    e.preventDefault()
    // alert("Name :"+name)
    var item = subcategory.find((item)=>item.name===name)
    if(item)
    alert("Subcategory Name is Already Exist")
    else{
      dispatch(updateSubcategory({id:id,name:name}))
      navigate("/admin-subcategory")
    }


    
  }
   useEffect(()=>{
    dispatch(getSubcategory())
    var item =subcategory.find((item)=>item.id===Number(id))
    SetName(item.name)
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
              Subcategory
            </h5>
            <from className="p-3"  onClick={postData}>
              <div className="mb-3">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Subcategory Name :"
                  className="form-control" onChange={getData} value={name}
                />
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-secondary w-100">
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

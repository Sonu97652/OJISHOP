import React,{useState,useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {getUser,addUser} from "../Store/ActionCreators/UserActionCreators"
import { useSelector,useDispatch } from 'react-redux'

export default function Signup() {
    var [data,SetData] = useState({
      name:"",  
      username:"",
      email:"",
      phone:"",
      password:"",
      confirmPassword:""
    })
    var users= useSelector((state)=>state.UserStateData)
    var dispatch = useDispatch()
    var navigate = useNavigate()

    function getData(e){
        
        var name =e.target.name
        var value =e.target.value 
        SetData((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }
    function postData(e){
        e.preventDefault()
        if(data.password===data.confirmPassword){
    //       alert(  
    //         `Name    :${data.name}
    //         Username :${data.username}
    //         Email    :${data.email}
    //         Phone    :${data.phone}
    //         Password :${data.password}
    //         `
    // )
        var d = users.find((item)=>item.username===data.username)
        if(d)
        alert("UserName Already Taken!!!")
        else{
          var item={
            name:data.name,
            username:data.username,
            email:data.email,
            phone:data.phone,
            password:data.password,
            addressline1:" ",
            addressline2:" ",
            addressline3:" ",
            pin:" ",
            city:" ",
            state:" ",
            pic:" ",
            role:"User",

          }
          dispatch(addUser(item))
          navigate("/Login")
        }
        }
        else
        alert("Password and Confirm Password Doesn't Matched!!!!")
    }
    useEffect(()=>{
      dispatch(getUser())
    },[])

  return (
    <>
      <div
        className="hero-wrap hero-bread"
        style={{ backgroundImage: "url('assets/images/bg_6.jpg')" }}
      >
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9  text-center">
              <p className="breadcrumbs">
                <span className="mr-2">{/* <Link to="/">Home</Link> */}</span>{" "}
                {/* <span>Contact</span> */}
              </p>
              <div className="container-fluid w-100 my-5">
                <div className="m-auto w-100">
                  <form onSubmit={postData}>
                    <div className="mb-3 mt-5">
                      <h5 className="text-center bg-secondary p-1 text-light">
                        Signup Section
                      </h5>
                      {/* <label htmlFor="username" className='text-left text-dark'>Username</label> */}
                      <div className="row mb-3">
                        <div className="col-md-6 col-12">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            onChange={getData}
                            placeholder="Enter Full Name : "
                            className="form-control"
                          />
                        </div>
                        <div className="col-md-6 col-12">
                          <input
                            type="text"
                            name="username"
                            id="username"
                            onChange={getData}
                            placeholder="Enter User Name : "
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-md-6 col-12">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            onChange={getData}
                            placeholder="Enter Email Address : "
                            className="form-control"
                          />
                        </div>
                        <div className="col-md-6 col-12">
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            onChange={getData}
                            placeholder="Enter Phone Number : "
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-md-6 col-12">
                          <input
                            type="password"
                            name="password"
                            id="password"
                            onChange={getData}
                            placeholder="Enter Password : "
                            className="form-control"
                          />
                        </div>
                        <div className="col-md-6 col-12">
                          <input
                            type="confirmPassword"
                            name="confirmPassword"
                            id="confirmPassword"
                            onChange={getData}
                            placeholder="Enter Confirm Password : "
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <button
                          className="btn btn-secondary w-100 btn-lg"
                          type="submit"
                        >
                          Signup
                        </button>
                      </div>
                    </div>
                  </form>
                  <div className="d-flex justify-content-between">
                    <Link className="text-dark" to="/Login">
                      Already User? Login to Your Account
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



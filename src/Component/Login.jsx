import React,{useState,useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {getUser,addUser} from "../Store/ActionCreators/UserActionCreators"
import { useSelector,useDispatch } from 'react-redux'

export default function Login() {
    var [data,SetData] = useState({
        username:"",
        password:""
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
        var user =users.find((item)=>item.username===data.username && item.password===data.password)
        if(user){
          localStorage.setItem("login",true)
          localStorage.setItem("name",user.name)
          localStorage.setItem("username",user.username)
          localStorage.setItem("userid",user.id)
          localStorage.setItem("role",user.role)
          navigate("/profile")
        }
        else{
          alert("Invalid Username or Password!!!")
        }
        // alert(
        //         `Username :${data.username}
        //         Password :${data.password}
        //         `
        // )

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
                <span className="mr-2">
                  {/* <Link to="/">Home</Link> */}
                </span>{" "}
                {/* <span>Contact</span> */}
              </p>
              <div className="container-fluid w-100 my-5">
                <div className="m-auto w-100" >
                  <form onSubmit={postData}>
                    <div className="mb-3 mt-5">
                      <h5 className="text-center bg-secondary p-2 text-light">
                        Login Section
                      </h5>
                      {/* <label htmlFor="username" className='text-left text-dark'>Username</label> */}
                      <div className='mb-2'><input
                        type="text"
                        name="username"
                        id="username"
                        onChange={getData}
                        placeholder="Enter Username : "
                        className="form-control"
                      /></div>
                      <div className='mb-2'>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={getData}
                        placeholder="Enter Password : "
                        className="form-control"
                      />
                      </div>
                      <div className="mb-3">
                        <button className='btn btn-secondary w-100 btn-lg' type='submit'>Login</button>
                      </div>
                    </div>
                  </form>
                  <div className='d-flex justify-content-between'>
                    <Link className='text-dark' to ="#">Forget Password</Link>
                    <Link className='text-dark' to ="/Signup">New User? Create a Free Account</Link>
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


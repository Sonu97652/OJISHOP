import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {getUser, updateUser} from "../Store/ActionCreators/UserActionCreators"
import { useSelector,useDispatch } from 'react-redux'

export default function Updateprofile() {
    var [data,setdata] = useState({
      name:"",  
      pic:"",
      email:"",
      phone:"",
      addressline1:"",
      addressline2:"",
      addressline3:"",
      pin:"",
      city:"",
      state:""
    })
    var users= useSelector((state)=>state.UserStateData)
    var dispatch = useDispatch()
    var navigate = useNavigate()

    function getData(e){
        
        var name =e.target.name
        var value =e.target.value 
        setdata((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }
    function getFile(e){
        
      var name =e.target.name
      var value =e.target.files[0].name 
      setdata((old)=>{
          return{
              ...old,
              [name]:value
          }
      })
  }
    function postData(e) {
      e.preventDefault();

      
        var item = {
          id:localStorage.getItem("userid"),
          name: data.name,
          username: data.username,
          email: data.email,
          phone: data.phone,
          password: data.password,
          addressline1: data.addressline1,
          addressline2: data.addressline2,
          addressline3: data.addressline3,
          pin: data.pin,
          city: data.city,
          state: data.state,
          pic: data.pic,
          role: data.role,
        }
        dispatch(updateUser(item))
        navigate("/profile")
      
    }
    useEffect(() => {
      dispatch(getUser());
      var d = users.find((item) => item.id === Number(localStorage.getItem("userid")))
      
      if (d) 
      setdata(d)
    }, []);

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
                        Profile Update Section
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
                            value={data.name}
                          />
                        </div>
                        <div className="col-md-6 col-12">
                          <input
                            type="file"
                            name="pic"
                            id="pic"
                            onChange={getFile}
                            // placeholder="Enter User Name : "
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
                            value={data.email}
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
                            value={data.phone}
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-md-6 col-12">
                          <input
                            type="text"
                            name="addressline1"
                            id="addressline1"
                            onChange={getData}
                            placeholder="Enter House,Floor or Building Number : "
                            className="form-control"
                            value={data.addressline1}
                          />
                        </div>
                        <div className="col-md-6 col-12">
                          <input
                            type="text"
                            name="addressline2"
                            id="addressline2"
                            onChange={getData}
                            placeholder="Enter Street Number or Near By : "
                            className="form-control"
                            value={data.addressline2}
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-md-6 col-12">
                          <input
                            type="text"
                            name="addressline3"
                            id="addressline3"
                            onChange={getData}
                            placeholder="Enter Village or Locality : "
                            className="form-control"
                            value={data.addressline3}
                          />
                        </div>
                        <div className="col-md-6 col-12">
                          <input
                            type="text"
                            name="pin"
                            id="pin"
                            onChange={getData}
                            placeholder="Enter Pin : "
                            className="form-control"
                            value={data.pin}
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-md-6 col-12">
                          <input
                            type="text"
                            name="city"
                            id="city"
                            onChange={getData}
                            placeholder="Enter City : "
                            className="form-control"
                            value={data.city}
                          />
                        </div>
                        <div className="col-md-6 col-12">
                          <input
                            type="text"
                            name="state"
                            id="state"
                            onChange={getData}
                            placeholder="Enter State : "
                            className="form-control"
                            value={data.state}
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <button
                          className="btn btn-secondary w-100 btn-lg"
                          type="submit"
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </form>
                  <div className="d-flex justify-content-between">
                    {/* <Link className="text-dark" to="/Login">
                      Already User? Login to Your Account
                    </Link> */}
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



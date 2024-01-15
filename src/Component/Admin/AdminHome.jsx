import React from 'react'
import LeftNav from './LeftNav'
import { Link } from 'react-router-dom'

export default function AdminHome() {
  return (
    <>
      <div className="contain-fluid my-5">
        <div className="row">
          <div className="col-lg-2 col-12">
            <LeftNav />
          </div>
          <div className="col-lg-10 col-12">
            <div className="row">
              <div className="col-md-5">
                <img src="/assets/images/image_3.jpg" height="390px" alt="" />
              </div>
              <div className="col-md-7">
                <h5 className="btn-secondary text-light text-center">
                  Admin Home
                </h5>
                <div className="d-flex">
                  <div className="border  p-3 w-50">Name</div>
                  <div className="border  p-3 w-50">Sonu Singh</div>
                </div>
                <div className="d-flex">
                  <div className="border  p-3 w-50">User Name</div>
                  <div className="border  p-3 w-50">admin</div>
                </div>
                <div className="d-flex">
                  <div className="border  p-3 w-50">Email</div>
                  <div className="border  p-3 w-50">admin@ojishop.com</div>
                </div>
                <div className="d-flex">
                  <div className="border  p-3 w-50">Phone</div>
                  <div className="border  p-3 w-50">+91 9142875785</div>
                </div>
                <div className="d-flex">
                  <div className="border  p-3 w-50">Role</div>
                  <div className="border  p-3 w-50">Admin</div>
                </div>
                <div className="mt-3">
                  <Link
                    to="/update-profile"
                    className="btn btn-secondary w-100"
                  >
                    Update Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

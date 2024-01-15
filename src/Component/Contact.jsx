import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import {addContact} from "../Store/ActionCreators/ContactActionCreators"

export default function Contact() {
  var dispatch = useDispatch();
  var [show, setshow] = useState(false);
  var [data, setdata] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

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

  function postData(e) {
    e.preventDefault();
    var item = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
      status: "Active",
      time: new Date(),
    };
    dispatch(addContact(item));
    setshow(true);
  }
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
                  <Link to="/">Home</Link>
                </span>{" "}
                <span>Contact</span>
              </p>
              <h1 className="mb-0 bread">Contact Us</h1>
            </div>
          </div>
        </div>
      </div>

      <section className="ftco-section contact-section bg-light">
        <div className="container">
          <div className="row d-flex mb-5 contact-info">
            <div className="w-100"></div>
            <div className="col-md-3 d-flex">
              <div className="info bg-white p-4">
                <p>
                  <span>Address:</span> 198 West 21th Street, Suite 721 New York
                  NY 10016
                </p>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="info bg-white p-4">
                <p>
                  <span>Phone:</span>{" "}
                  <Link to="tel://1234567920">+91 9142875785</Link>
                </p>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="info bg-white p-4">
                <p>
                  <span>Email:</span>{" "}
                  <Link to="mailto:info@yoursite.com">
                    sonu91428singh@gmail.com
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="info bg-white p-4">
                <p>
                  <span>Website</span> <Link to="#">yoursite.com</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="row block-9">
            <div className="col-md-6 order-md-last">
              {show ? (
                <div
                  class="alert alert-success text-center alert-dismissible fade show"
                  role="alert"
                >
                  Thanks to Share Your Query With US!!! Our Team Will Contact
                  You Soon!!!
                  <button
                    type="button"
                    class="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              ) : (
                ""
              )}
              <form onSubmit={postData} className="bg-white p-5 contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    onChange={getData}
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    onChange={getData}
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    onChange={getData}
                    placeholder="Phone"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    onChange={getData}
                    placeholder="Subject"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    // name=""
                    // id=""
                    // cols="30"
                    rows="7"
                    className="form-control"
                    name="message"
                    onChange={getData}
                    placeholder="Enter Message"
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Send Message"
                    className="btn btn-secondary w-100"
                  />
                </div>
              </form>
            </div>

            <div className="col-md-6">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    title="Location Map"
                    width="100%"
                    height="500px"
                    src="https://maps.google.com/maps?q=Bal%20Sager%20school%20noida%20sector%2053%20up%20201301&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-gallery">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 heading-section text-center mb-4 ">
              <h2 className="mb-4">Follow Us On Instagram</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid px-0">
          <div className="row no-gutters">
            <div className="col-md-4 col-lg-2 ">
              <Link
                to="assets/images/gallery-1.jpg"
                className="gallery image-popup img d-flex align-items-center"
                style={{
                  backgroundImage: "url('assets/images/gallery-1.jpg')",
                }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram"></span>
                </div>
              </Link>
            </div>
            <div className="col-md-4 col-lg-2 ">
              <Link
                to="assets/images/gallery-2.jpg"
                className="gallery image-popup img d-flex align-items-center"
                style={{
                  backgroundImage: "url('assets/images/gallery-2.jpg')",
                }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram"></span>
                </div>
              </Link>
            </div>
            <div className="col-md-4 col-lg-2 ">
              <Link
                to="assets/images/gallery-3.jpg"
                className="gallery image-popup img d-flex align-items-center"
                style={{
                  backgroundImage: "url('assets/images/gallery-3.jpg')",
                }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram"></span>
                </div>
              </Link>
            </div>
            <div className="col-md-4 col-lg-2 ">
              <Link
                to="assets/images/gallery-4.jpg"
                className="gallery image-popup img d-flex align-items-center"
                style={{
                  backgroundImage: "url('assets/images/gallery-4.jpg')",
                }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram"></span>
                </div>
              </Link>
            </div>
            <div className="col-md-4 col-lg-2 ">
              <Link
                to="assets/images/gallery-5.jpg"
                className="gallery image-popup img d-flex align-items-center"
                style={{
                  backgroundImage: "url('assets/images/gallery-5.jpg')",
                }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram"></span>
                </div>
              </Link>
            </div>
            <div className="col-md-4 col-lg-2 ">
              <Link
                to="assets/images/gallery-6.jpg"
                className="gallery image-popup img d-flex align-items-center"
                style={{
                  backgroundImage: "url('assets/images/gallery-6.jpg')",
                }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram"></span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

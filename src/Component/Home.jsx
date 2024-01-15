import React,{useEffect} from "react"
import { Link } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux";
import {getProduct} from "../Store/ActionCreators/ProductActionCreators"
import Newslatter from "./Newslatter";

export default function Home() {
  var product = useSelector((state) => state.ProductStateData)
  product.sort((x,y)=>y.id-x.id)
  product= product.slice(0,8)
  var dispatch =useDispatch()
  function getAPIData(){
    dispatch(getProduct())
  }
  useEffect(() =>{
    getAPIData()
  },[])
  return (
    <>
      <section id="home-section" className="hero myslider">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="assets/images/bg_1.png"
                height="600px"
                className="d-block w-100"
                alt=""
              />
            </div>
            <div className="carousel-item">
              <img
                src="assets/images/bg_2.png"
                height="600px"
                className="d-block w-100"
                alt=""
              />
            </div>
            <div className="carousel-item">
              <img
                src="assets/images/image_5.jpg"
                height="600px"
                className="d-block w-100"
                alt=""
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-target="#carouselExampleControls"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-target="#carouselExampleControls"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </button>
        </div>
      </section>

      <section className="ftco-section ftco-no-pt ftco-no-pb">
        <div className="container">
          <div className="row no-gutters ftco-services">
            <div className="col-lg-4 text-center d-flex align-self-stretch ">
              <div className="media block-6 services p-2 py-md-2">
                <div className="icon d-flex justify-content-center align-items-center mb-4">
                  <span className="flaticon-bag"></span>
                </div>
                <div className="media-body">
                  <h3 className="heading">Free Shipping</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-center d-flex align-self-stretch ">
              <div className="media block-6 services p-2 py-md-2">
                <div className="icon d-flex justify-content-center align-items-center mb-4">
                  <span className="flaticon-customer-service"></span>
                </div>
                <div className="media-body">
                  <h3 className="heading">Support Customer</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-center d-flex align-self-stretch ">
              <div className="media block-6 services p-2 py-md-2">
                <div className="icon d-flex justify-content-center align-items-center mb-4">
                  <span className="flaticon-payment-security"></span>
                </div>
                <div className="media-body">
                  <h3 className="heading">Secure Payments</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section bg-light p-1">
        <div className="container">
          <div className="row justify-content-center mb-1 pb-1">
            <div className="col-md-12 heading-section text-center ">
              <h2 className="mb-1">Latest Products</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {
              product.map((item,index)=>{
                return <div key={index} className="col-sm-12 col-md-6 col-lg-3  d-flex">
                <div className="product d-flex flex-column">
                  <a target="_blank"   href={`/assets/images/${item.pic1}`} className="img-prod">
                    <img
                      className="img-fluid"
                      src={`assets/images/${item.pic1}`} style={{height:"200px", width:"100%"}}
                      alt=""
                    />
                    <span className="status">{item.discount}% Off</span>
                    <div className="overlay"></div>
                  </a>
                  <div className="text py-3 pb-4 px-3">
                    <div className="d-flex">
                      <div className="cat">
                        <span>Lifestyle</span>
                      </div>
                      
                    </div>
                    <h3>
                      <Link to={`/single-product/${item.id}`}>{item.name}</Link>
                    </h3>
                    <div className="pricing">
                      <p className="price">
                        <span className="mr-2 price-dc">&#8377;{item.baseprice}</span>
                        <span className="price-sale">&#8377;{item.finalprice}</span>
                      </p>
                    </div>
                    <p className="bottom-area d-flex px-3">
                      <Link to= {`/single-product/${item.id}`} className="add-to-cart text-center py-2 mr-1">
                        <span>
                          Add to cart <i className="ion-ios-add ml-1"></i>
                        </span>
                      </Link>
                      {/* <Link to="#" className="buy-now text-center py-2">
                        Buy now
                        <span>
                          <i className="ion-ios-cart ml-1"></i>
                        </span>
                      </Link> */}
                    </p>
                  </div>
                </div>
              </div>
              })
            }
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-choose ftco-no-pb ftco-no-pt p-1">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-4">
              <div
                className="choose-wrap divider-one img p-5 d-flex align-items-end"
                style={{ backgroundImage: "url('assets/images/choose-1.jpg')" }}
              >
                <div className="text text-center text-white px-2">
                  {/* <span className="subheading">Men's Shoes</span> */}
                  <h2>Men's Collection</h2>
                  {/* <p>
                    Separated they live in Bookmarksgrove right at the coast of
                    the Semantics, a large language ocean.
                  </p> */}
                  <p>
                    <Link to="/shop/Male" className="btn btn-black px-3 py-2">
                      Shop now
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row no-gutters choose-wrap divider-two align-items-stretch">
                <div className="col-md-12">
                  <div
                    className="choose-wrap full-wrap img align-self-stretch d-flex align-item-center justify-content-end"
                    style={{
                      backgroundImage: "url('assets/images/choose-2.jpg')",
                    }}
                  >
                    <div className="col-md-7 d-flex align-items-center">
                      <div className="text text-white px-5">
                        {/* <span className="subheading">Women's Shoes</span> */}
                        <h2>Women's Collection</h2>
                        {/* <p>
                          Separated they live in Bookmarksgrove right at the
                          coast of the Semantics, a large language ocean.
                        </p> */}
                        <p>
                          <Link to="/shop/Female" className="btn btn-black px-3 py-2">
                            Shop now
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="row no-gutters">
                    <div className="col-md-6">
                      <div className="choose-wrap wrap img align-self-stretch bg-light d-flex align-items-center">
                        <div className="text text-center px-5">
                          <span className="subheading">Summer Sale</span>
                          <h2>Extra 80% Off</h2>
                          {/* <p>
                            Separated they live in Bookmarksgrove right at the
                            coast of the Semantics, a large language ocean.
                          </p> */}
                          <p>
                            <Link to="shop/All" className="btn btn-black px-3 py-2">
                              Shop now
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="choose-wrap wrap img align-self-stretch d-flex align-items-center"
                        style={{
                          backgroundImage: "url('assets/images/image_3.jpg')",
                        }}
                      >
                        <div className="text text-center text-white mt-5 px-5">
                          {/* <span className="subheading">Kids Collection</span> */}
                          <h2>Kids Collection</h2>
                          {/* <p>
                            Separated they live in Bookmarksgrove right at the
                            coast of the Semantics, a large language ocean.
                          </p> */}
                          <p>
                            <Link to="/shop/Kids" className="btn btn-black px-3 py-2">
                              Shop now
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="ftco-section ftco-deal bg-primary p-2">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="images/prod-1.png" className="img-fluid" alt="" />
            </div>
            <div className="col-md-6">
              <div className="heading-section heading-section-white">
                <span className="subheading">Deal of the month</span>
                <h2 className="mb-3">Deal of the month</h2>
              </div>
              <div id="timer" className="d-flex mb-4">
                <div className="time" id="days"></div>
                <div className="time pl-4" id="hours"></div>
                <div className="time pl-4" id="minutes"></div>
                <div className="time pl-4" id="seconds"></div>
              </div>
              <div className="text-deal">
                <h2>
                  <Link to="#">Nike Free RN 2019 iD</Link>
                </h2>
                <p className="price">
                  <span className="mr-2 price-dc">$120.00</span>
                  <span className="price-sale">$80.00</span>
                </p>
                <ul className="thumb-deal d-flex mt-4">
                  <li
                    className="img"
                    style={{
                      backgroundImage: "url('assets/images/product-6.png')",
                    }}
                  ></li>
                  <li
                    className="img"
                    style={{
                      backgroundImage: "url('assets/images/product-2.png')",
                    }}
                  ></li>
                  <li
                    className="img"
                    style={{
                      backgroundImage: "url('assets/images/product-4.png')",
                    }}
                  ></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="ftco-section testimony-section p-2">
        <div className="container">
          <div className="services-flow row">
            <div className="row">
              <div className="services-2 p-4 d-flex col-lg-3 col-md-6 col-12">
                <div className="icon">
                  <span className="flaticon-bag"></span>
                </div>
                <div className="text">
                  <h3>Free Shipping</h3>
                  <p className="mb-0">
                    Separated they live in. A small river named Duden flows
                  </p>
                </div>
              </div>
              <div className="services-2 p-4 d-flex col-lg-3 col-md-6 col-12 ">
                <div className="icon">
                  <span className="flaticon-heart-box"></span>
                </div>
                <div className="text">
                  <h3>Valuable Gifts</h3>
                  <p className="mb-0">
                    Separated they live in. A small river named Duden flows
                  </p>
                </div>
              </div>
              <div className="services-2 p-4 d-flex col-lg-3 col-md-6 col-12 ">
                <div className="icon">
                  <span className="flaticon-payment-security"></span>
                </div>
                <div className="text">
                  <h3>All Day Support</h3>
                  <p className="mb-0">
                    Separated they live in. A small river named Duden flows
                  </p>
                </div>
              </div>
              <div className="services-2 p-4 d-flex col-lg-3 col-md-6 col-12 ">
                <div className="icon">
                  <span className="flaticon-customer-service"></span>
                </div>
                <div className="text">
                  <h3>All Day Support</h3>
                  <p className="mb-0">
                    Separated they live in. A small river named Duden flows
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* <Newslatter/> */}

      <section className="ftco-gallery">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 heading-section text-center mb-4 ">
              <h3 className="mb-4">Follow Us On Instagram</h3>
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
                to="images/gallery-1.jpg"
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
                to="images/gallery-2.jpg"
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
            <div className="col-md-4 col-lg-2">
              <Link
                to="images/gallery-3.jpg"
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
                to="images/gallery-4.jpg"
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
                to="images/gallery-5.jpg"
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
                to="images/gallery-6.jpg"
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

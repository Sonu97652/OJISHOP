import React,{useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import LeftNav from "./LeftNav";



import { DataGrid } from "@mui/x-data-grid";
import { useSelector,useDispatch } from "react-redux";
import {deleteProduct, getProduct} from "../../Store/ActionCreators/ProductActionCreators"
import Button from '@material-ui/core/Button';

// Your component code here



export default function AdminProduct() {
  var product = useSelector((state)=>state.ProductStateData)
  
  var dispatch =useDispatch()
  var navigate=useNavigate()
  // console.log(Brand);
  var columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "category", headerName: "Category", width: 100 },
    { field: "subcategory", headerName: "Subcategory", width: 100 },
    { field: "brand", headerName: "Brand", width: 100 },
    { field: "color", headerName: "Color", width: 100 },
    { field: "size", headerName: "Size", width: 70 },
    // { field: "baseprice", headerName: "Baseprice", width: 130 },
    {field:'baseprice',headerName:'Base Price', width: 100,renderCell:({row})=><p>&#8377;{row.baseprice}</p>},
    {field:'discount',headerName:'Discount', width: 100,renderCell:({row})=><p>{row.discount}%</p>},
    {field:'finalprice',headerName:'Final Price', width: 100,renderCell:({row})=><p>&#8377;{row.finalprice}</p>},
    // { field: "discount", headerName: "Discount", width: 70 },
    // { field: "finalprice", headerName: "Finalprice", width: 100 },
    { field: "stock", headerName: "Stock", width: 80 },
    {field:'pic1',headerName:'Pic1',width:70,renderCell:({row})=>
    <img src={`/assets/images/${row.pic1}`} height="50px" width="100%"
    className='rounded' alt=''/>},
    {field:'pic2',headerName:'Pic2',width:70,renderCell:({row})=>
    <img src={`/assets/images/${row.pic2}`} height="50px" width="100%"
    className='rounded' alt=''/>},
    {field:'pic3',headerName:'Pic3',width:70,renderCell:({row})=>
    <img src={`/assets/images/${row.pic3}`} height="50px" width="100%"
    className='rounded' alt=''/>},
    {field:'pic4',headerName:'Pic4',width:70,renderCell:({row})=>
    <img src={`/assets/images/${row.pic4}`} height="50px" width="100%"
    className='rounded' alt=''/>},
    

    {
      field:"edit",
      headerName:"Edit",
      sortable:false,
      renderCell:({row})=>
      <Button onClick={()=>{
        navigate("/admin-update-product/" + row.id)
        }}> <span className="material-symbols-outlined">edit</span></Button>
    },
    {
      field:"delete",
      headerName:"Delete",
      sortable:false,
      renderCell:({row})=><Button onClick={()=>{dispatch(deleteProduct({id: row.id}))
      }}>
        <span className="material-symbols-outlined">delete_forever</span>
      </Button>
    }
  ];
  
 var rows = []
  for(let item of product){
    rows.push(item)
  }
  function getAPIData(){
    dispatch(getProduct())
  }
  
  // console.log(Brand);
  useEffect(()=>{
    getAPIData()
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
              <Link to="/admin-add-product" className="float-right">
                <span class="material-symbols-outlined">add</span>
              </Link>
            </h5>
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                //  pageSize={5 }
                //  rowsPerPageOptions={[5]} 
              },
                }}
                pageSizeOptions={[5, 10]}
                // checkboxSelection
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

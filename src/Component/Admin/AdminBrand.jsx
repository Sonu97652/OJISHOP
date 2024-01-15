import React,{useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import LeftNav from "./LeftNav";



import { DataGrid } from "@mui/x-data-grid";
import { useSelector,useDispatch } from "react-redux";
import {deleteBrand, getBrand} from "../../Store/ActionCreators/BrandActionCreators"
import Button from '@material-ui/core/Button';

// Your component code here



export default function AdminBrand() {
  var brand = useSelector((state)=>state.BrandStateData)
  
  var dispatch =useDispatch()
  var navigate=useNavigate()
  // console.log(Brand);
  var columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 130 },
    {
      field:"edit",
      headerName:"Edit",
      sortable:false,
      renderCell:({row})=>
      <Button onClick={()=>{
        navigate("/admin-update-brand/" + row.id)
        }}> <span className="material-symbols-outlined">edit</span></Button>
    },
    {
      field:"delete",
      headerName:"Delete",
      sortable:false,
      renderCell:({row})=><Button onClick={()=>{dispatch(deleteBrand({id: row.id}))
      }}>
        <span className="material-symbols-outlined">delete_forever</span>
      </Button>
    }
  ];
  
 var rows = []
  for(let item of brand){
    rows.push(item)
  }
  function getAPIData(){
    dispatch(getBrand())
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
              Brand
              <Link to="/admin-add-brand" className="float-right">
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

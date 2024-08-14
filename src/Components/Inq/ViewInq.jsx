import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PathofCrumb from "../Navigate/PathofCrumb";
import { CiEdit } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';
import axios from 'axios';
import { deleteInqList } from '../../Utils/InqSlice';

const ViewInq = () => {

  let data = useSelector((state)=> state.inq.inqList.data)
  const token = useSelector((state) => state.register.adminLoginToken)
  // console.log(token,'token');
  const [inqData,setinqData] = useState(data)
const dispatch = useDispatch()


  const onDeleteInq = (id)=>{
    axios
      .get(`http://localhost:3000/inquiry/inquiry_delete/${id}`, {
        headers: {
          authorization: token
        },
      })
      .then((response) => {
        console.log(response.data);
        let deleteInq = inqData.filter((item)=> item._id !== response.data._id)
        // console.log(deleteInq,"deleteInq");
        setinqData(deleteInq)
        dispatch(deleteInqList(response.data))
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  return (
    <>
       <div className="dashboard">
      <div>
        <PathofCrumb name="View Inqiery" crumb="View Inqiery" />
      </div>
      <div className="adduser d-flex justify-content-center align-items-center w-100">
        <div className="view-card w-100 border-0">
          <div className="addusercard-title text-center fw-bold">
            View Inqiery
          </div>
          <div className="addcourse-card-body">
            <div className="view-card-body  my-4">
              <table className="table table-sm  text-center  table-Light table-bordered table-striped text-center table table-hover">
                <thead>
                  <tr>
                    <th className='table-text' scope="col">No</th>
                    <th className='table-text' scope="col">Name</th>
                    <th className='table-text' scope="col">Contact</th>
                    <th className='table-text' scope="col">Reference</th>
                    <th className='table-text' scope="col">Status</th>
                    {/* <th scope="col">Branch</th> */}
                    <th className='table-text' scope="col">Status-Date</th>
                    <th className='table-text' scope="col">Join-Date</th>
                    <th className='table-text' scope="col">Inqiery-Date</th>
                    <th className='table-text' scope="col">Action</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  {inqData?.map((item, index) => (
                    <tr key={index}>
                      <th>{index + 1}</th>
                      <td className="fw-semibold text-uppercase table-text">
                        {item?.name}
                      </td>
                      <td className="fw-semibold text-uppercase table-text">
                        {item?.contact}
                      </td>
                      <td className="fw-semibold text-uppercase table-text">
                        {item?.reference.name}
                      </td>
                      <td className="fw-semibold text-uppercase table-text">
                        {item?.status.name}
                      </td>
                      {/* <td className="fw-semibold text-uppercase">
                        {item?.course}
                      </td> */}
                      <td className="fw-semibold text-uppercase table-text">
                        {item?.status_date}
                      </td>
                      <td className="fw-semibold text-uppercase table-text">
                        {item?.joindate}
                      </td>
                      <td className="fw-semibold text-uppercase table-text">
                        {item?.inquiry_date}
                      </td>   
                      <td>
                        <div className="d-flex align-items-center justify-content-center gap-3">
                          <button
                            className="btn btn-primary"
                          >
                            <CiEdit />
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={()=> onDeleteInq(item._id)}
                          >
                            <MdDelete />
                          </button>
                        </div>
                      </td>                  
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    
    </div>
    </>
  )
}

export default ViewInq

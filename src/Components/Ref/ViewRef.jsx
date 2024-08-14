import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PathofCrumb from "../Navigate/PathofCrumb";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { deleteRefList , updateRefList } from '../../Utils/RefSlice'
import axios from 'axios';
import RefEditPopup from './RefEditPopup';
const ViewRef = () => {

  const data = useSelector((state) => state.reference.RefList.data)
  // console.log(data, 'data');
  const token = useSelector((state) => state.register.adminLoginToken)
  const dispatch = useDispatch()
  let [refData, setRefData] = useState(data)
  let [popup,setPopup] = useState(false)
  let [refList,setRefList] = useState(null)

  const onDeleteRef = (id) => {
    axios
      .get(`http://localhost:3000/ref/reference_delete/${id}`, {
        headers: {
          authorization: `${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        let deleteref = refData.filter((item) => item._id !== response.data._id)
        setRefData(deleteref)
        dispatch(deleteRefList(response.data))
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const onEditRef  = (index) => {
    console.log(index,'++');
    setRefList(index)   
    setPopup(true)
  }

  const onupdateRefList = (id,newName) => {
    console.log(id,'+++');
    axios
    .post(
      `http://localhost:3000/ref/reference_update/${id}`,
      { name: newName },
      {
        headers: {
          authorization: `${token}`,
        },
      }
    )
    .then((response) => {
      console.log(response.data);
      let updateRef = refData.map((item)=> item._id === id ? {...item,name:newName}:item)
      // console.log(updateRef,'updateRef');
      setRefData(updateRef)
      dispatch(updateRefList(response.data))
      setPopup(false);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <>
      <div className="dashboard">
        <div>
          <PathofCrumb name="View Role" crumb="View Role" />
        </div>
        <div className="adduser d-flex justify-content-center align-items-center w-100">
          <div className="view-card border-0">
            <div className="addusercard-title text-center fw-bold">
              User Category
            </div>
            <div className="addcourse-card-body">
              <div className="view-card-body my-4">
                <table className="table table-sm text-center">
                  <thead>
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Reference</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                    {
                      refData?.map((item, index) => {
                        return (
                          <>
                            <tr key={index}>
                              <th>{index + 1}</th>
                              <td className="fw-semibold text-uppercase">
                                {item?.name}
                              </td>
                              <td>
                                <div className="d-flex align-items-center justify-content-center gap-3">
                                  <button
                                    className="btn btn-primary" 
                                    onClick={()=> onEditRef(item)}
                                  >
                                    <CiEdit />
                                  </button>
                                  <button
                                    className="btn btn-danger"
                                    onClick={() => onDeleteRef(item._id)}
                                  >
                                    <MdDelete />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          </>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {popup && (
        <RefEditPopup
          refNew={refList}
          onClose={() => setPopup(false)}
          onUpdate={(editRole) => onupdateRefList(refList._id, editRole)}
        />
      )}
      </div>
    </>
  )
}

export default ViewRef

import React, { useEffect, useState } from 'react';
import PathofCrumb from "../Navigate/PathofCrumb";
import './inq.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addInqList } from '../../Utils/InqSlice';

const Inq = () => {
    const branchData = useSelector((state) => state.branch.branchList.data);
    const refData = useSelector((state) => state.reference.RefList.data);
    const statusData = useSelector((state) => state.status.statusList.data);
    let token = useSelector((state) => state.register.adminLoginToken);
// console.log(branchData[0]._id,'refData');
    let [selectBranch, setSelcteBranch] = useState('');
    let [name, setName] = useState('');
    let [contact, setContact] = useState('');
    let [joinDate, setJoinDate] = useState('');
    let [ref, setRef] = useState('');
    let [inqBy, setInqBy] = useState('');
    let [refBy, setRefBy] = useState('');
    let [status, setStatus] = useState('');
    let [statusDate, setStatusDate] = useState('');
    let [inqDate, setInqDate] = useState('');
const dispatch = useDispatch()
    const [inqData, setInqData] = useState([]);
    // console.log(ref,status,'+*+*+*+*');

    useEffect(()=>{
        onViewInq()
    },[])


    const data = {
        // bracnh: selectBranch,
        name: name,
        contact: contact,
        joindate: joinDate,
        reference: ref,
        status: status,
        status_date: statusDate,
        inquiry_date: inqDate
    };

    const onAddInq = () => {
        axios
        .post("http://localhost:3000/inquiry/inquiry", data, {
            headers: { authorization: `${token}` },
        })
        .then((response) => {
            console.log(response.data.data, "***");
            onViewInq()
            setName('')
            setRef('')
            setContact('')
            setInqDate('')
            setJoinDate('')
            setStatusDate('')
            setStatus('')
        })
        .catch((error) => {
            console.log(error);
        });
    };
    
  const onViewInq = () => {
    axios
      .get("http://localhost:3000/inquiry/view_inquiry", {
        headers: { authorization: `${token}` },
      })
      .then((response) => {
        console.log(response.data, "///");
        dispatch(addInqList(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

    return (
        <>
            <div className="dashboard">
                <div>
                    <PathofCrumb name="Add Inquiry" crumb="addinquiry" />
                </div>
                <div className="adduser d-flex justify-content-center align-items-center w-100">
                    <div className="adduser-card inq border-0">
                        <div className="addusercard-title text-center fw-bold">
                            Add Inquiry
                        </div>
                        <div className="addcourse-card-body">
                            <div className="mb-3">
                                <label htmlFor="branch" className="form-label fw-semibold">
                                    Select Branch
                                </label>
                                <select name="branch"  className='form-control' value={selectBranch} onChange={(e) => setSelcteBranch(e.target.value)}>
                                    <option value="" disabled>Select Branch</option>
                                    {branchData?.map((item, index) => (
                                        <option key={index} value={item._id}>{item.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label fw-semibold">
                                    Name
                                </label>
                                <input type="text" id="name" className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="contact" className="form-label fw-semibold">
                                    Contact
                                </label>
                                <input type="tel" id="contact" className='form-control' value={contact} onChange={(e) => setContact(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="reference" className="form-label fw-semibold">
                                    Reference
                                </label>
                                <select name="reference" className='form-control' value={ref} onChange={(e) => setRef(e.target.value)
                                        
                                    }>
                                    <option value="" disabled>Select Reference</option>
                                    {refData?.map((item, index) => (
                                        <option key={index} value={item._id}>{item.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="status" className="form-label fw-semibold">
                                    Status
                                </label>
                                <select name="status"  className='form-control' value={status} onChange={(e) => setStatus(e.target.value)}>
                                    <option value="" disabled>Add Status</option>
                                    {statusData?.map((item, index) => (
                                        <option key={index} value={item._id}>{item.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="statusDate" className="form-label fw-semibold">
                                    Status Date
                                </label>
                                <input type="date" id="statusDate" className='form-control' value={statusDate} onChange={(e) => setStatusDate(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="joinDate" className="form-label fw-semibold">
                                    Join Date
                                </label>
                                <input type="date" id="joinDate" className='form-control' value={joinDate} onChange={(e) => setJoinDate(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inqDate" className="form-label fw-semibold">
                                    Inquiry Date
                                </label>
                                <input type="date" id="inqDate" className='form-control' value={inqDate} onChange={(e) => setInqDate(e.target.value)} />
                            </div>
                            <div className="d-flex justify-content-center">
                                <button className="user-btn" onClick={onAddInq}>
                                    Add Inquiry
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Inq;

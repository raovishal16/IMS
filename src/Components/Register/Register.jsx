import React, { useEffect, useState } from 'react'
import './register.css'
const Register = () => {
  let [adminName,setAdminName] = useState('')
  let [adminEmail,setAdminEmail] = useState('')
  let [adminPass,setAdminPass] = useState('')
  let [adminContact,setAdminContact] = useState('')
  let [isShow,setIsShow] = useState(false)

  useEffect(() => {
    showPassword()
  }, [])
  const onAddAdmin = () => {

  }

  const  showPassword = () => {
    setIsShow(true)
    console.log(isShow,'+++');
  }

  return (
    <>
         <div className="dashboard">
        <div className="adduser d-flex justify-content-center align-items-center w-100">
          <div className="login-card  border-0 my-5">
            <div className="card-header">
              <div className="login-card-title fs-4 fw-semibold">Register</div>
            </div>
            <div className="login-card-body">
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name..."
                  value={adminName}
                  onChange={(e)=> setAdminName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">
                  E-mail
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email..."
                  value={adminEmail}
                  onChange={(e)=> setAdminEmail(e.target.value)}

                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="form-label fw-semibold">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password..."
                  value={adminPass}
                  onChange={(e)=> setAdminPass(e.target.value)}

                />
                <div className="show-psw mt-2 px-1" >
                  <input type="checkbox" name="" value={isShow} id="" onChange={(e)=>setIsShow(e.target.checked)} /> <label htmlFor="" className='show-psw-label'>Show Password</label>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="number" className="form-label fw-semibold">
                 Contact-Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Enter Contact-Number..."
                  inputMode='numeric'
                  value={adminContact}
                  onChange={(e)=> setAdminContact(e.target.value)}

                />
              </div>
              <div className="mt-3">
                <button className="user-btn" onClick={onAddAdmin()}>Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
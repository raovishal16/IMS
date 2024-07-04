import React from 'react'

const Register = () => {
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
                />
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
                />
              </div>
              <div className="mt-3">
                <button className="user-btn">Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
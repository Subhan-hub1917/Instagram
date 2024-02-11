import React, { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  <link rel="stylesheet" href="https://fonts.google.com/specimen/Lobster?query=lobster&sort=popularity" />


  return (
    <div className="container-lg container-fluid">
      <div className="row height-100vh justify-content-center text-center">
        <div className="col-lg-4 col-md-6 col-8 p-1 height-100vh text d-flex flex-column ">
          <div className="h2 mt-5 fw-bold"  style={{ fontFamily: 'Pacifico, cursive' , fontWeight: 900 }}>Instagram</div>
          {/* /////////////////////////////////////////////////// */}
          <div className="d-flex flex-column p-3 border border-2">
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>

              <div className="form-floating mb-3">
                <div className="input-group align-item-center">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                <div  className="input-group-text"
                  style={{ cursor: 'pointer' }}
                  onClick={togglePasswordVisibility}
                >
                  <i
                    className={`h5 bi ${
                      showPassword === false
                        ? 'bi-eye-fill'
                        : 'bi-eye-slash-fill'
                    }`}
                  ></i>
                </div>
              </div>
            </div>
            
            <div className="form-floating mb-3">
              <input type="submit" className="col-12 btn btn-primary" value="Login" />
            </div>

          </div>
          {/* ////////////////////////////////////////////////////// */}
          <div className="text-center my-3">
              <span className="text-muted">----------------</span>
              <span className="mx-2">OR</span>
              <span className="text-muted">----------------</span>
            </div>
            {/* //////////////////////////////////////////////////// */}
          
          <div className="row my-2 px-3 btn btn-light border border-2 ">
              <div className="col-12 d-flex justify-content-center mt-1 py-2">
              <i className="text-primary me-2 bi bi-facebook"></i>
              <p>Login with Facebook</p>
              </div>
          </div>
                  {/* //////////////////////////////////////////////// */}
          <div className="row my-3 border border-2">
            <div className="d-flex justify-content-center">
              <p>Don't have an Account?</p>
              <a href="/" className="ms-2">Signin</a>
            </div>
          </div>
          {/* /////////////////////////////////////////////////////////// */}
        </div>
      </div>
    </div>
  );
};

export default Login;

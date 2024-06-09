import React from 'react';
import { Link } from 'react-router-dom';
import './LoginSection.css';

function Login() {
  return (
    <section className="vh-100 bg-image" style={{ backgroundImage: "url('https://unsplash.com/photos/AQLcksctP9M/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjB8fGd1bnVuZyUyMG1lcmFwaXxlbnwwfHx8fDE3MTc5MTg5MjV8MA&force=true&w=1920')" }}>
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card">
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">Login Here</h2>
                  <form>
                    <div className="form-outline mb-4">
                      <input type="email" id="form3Example3cg" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                    </div>
                    <div className="form-outline mb-4">
                      <input type="password" id="form3Example4cg" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example4cg">Password</label>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Login</button>
                    </div>
                    <p className="text-center text-muted mt-5 mb-0">Don't have an account? <Link to="/regist" className="fw-bold text-body"><u>Register here</u></Link></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;

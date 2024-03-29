import { useFormik } from 'formik';
import React from 'react'
import Swal from "sweetalert2";
import app_config from '../../config';
import "./login.css"
import { useNavigate } from 'react-router-dom';


const StartupSignin = () => {
  
  const url = app_config.apiurl;
  const navigate = useNavigate();

  const fields = [
    'name',
  'nature',
  'email',
  'password',
  'industry',
  'sector',
  'inCorpNum',
  'description',
  'timeline',
  'funding',
  'coverimage',
  'contact',
  'officeAddress',
  'created_at'
  ]

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {

     
      const response = await fetch(url+'/startup/auth', {
      method: 'POST',
      body : JSON.stringify(values),
      headers : {
        'Content-Type' : 'application/json'
      }
    });
    // 200 status code means success
    // 400 status code means error on client
    // 500 status code means error on server
    console.log(response.status);
    if(response.status === 201){

      Swal.fire({
        icon : "success",
        title : "Nice🎉",
        text : "logged in successfully"
      });
      const data = await response.json();
      sessionStorage.setItem('startup', JSON.stringify(data.result));
      navigate('/startup/profile');
      
    }else{
      Swal.fire({
        icon : "error",
        title : "Oops🤔",
        text : "Something went wrong"
      })
    }
    },
  });


  return (
    <section className="vh-100 signin-page" >
    <div className="container py-5 h-100">
      <div className="row d-flex align-items-center justify-content-center h-100">
        <div className="col-md-8 col-lg-7 col-xl-6">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            className="img-fluid"
            alt="Phone image"
          />
        </div>
        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
          <form onSubmit={formik.handleSubmit}>
            {/* Email input */}
            <div className=" mb-4">
              <label className="form-label" htmlFor="form1Example13">
                Email address
              </label>
              <input
                type="email"
                id="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                className="form-control form-control-lg"
              />
            </div>
            {/* Password input */}
            <div className=" mb-4">
              <label className="form-label" htmlFor="form1Example23">
                Password
              </label>
              <input
                type="password"
                id="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                className="form-control form-control-lg"
              />
            </div>
            <div className="d-flex justify-content-around align-items-center mb-4">
              {/* Checkbox */}
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="form1Example3"
                  defaultChecked=""
                />
                <label className="form-check-label" htmlFor="form1Example3">
                  {" "}
                  Remember me{" "}
                </label>
              </div>
              <a href="#!">Forgot password?</a>
            </div>
            {/* Submit button */}
            <button type="submit" className="btn btn-dark btn-lg btn-block">
              Sign in
            </button>
            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
            </div>
            <a
              className="btn btn-primary btn-lg btn-block"
              style={{ backgroundColor: "#3b5998" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-facebook-f me-2" />
              Continue with Facebook
            </a>
            <a
              className="btn btn-primary btn-lg btn-block"
              style={{ backgroundColor: "#55acee" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-twitter me-2" />
              Continue with Twitter
            </a>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}


export default StartupSignin;
import React, { useState } from "react";
import { useFormik } from "formik";
import app_config from "../../config";
import Swal from "sweetalert2";

const Signup = () => {

  const addStartupEntry = async (id) => {
    const response = await fetch(url+'/startup/add', {
      method: 'POST',
      body : JSON.stringify({
        representative : id,
        director: [id],
        created_at: new Date()
      }),
      headers : {
        'Content-Type' : 'application/json'
      }
    });
    console.log(response.status);
  };

  const addInvestorsEntry = async (id) => {
    const response = await fetch(url+'/investor/add', {
      method: 'POST',
      body : JSON.stringify({
        investors : id,
        director: [id],
        created_at: new Date()
      }),
      headers : {
        'Content-Type' : 'application/json'
      }
    });
    console.log(response.status);
  };

  const url = app_config.apiurl;

  const [role, setRole] = useState('');

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      created_at: new Date(),
      updated_at: new Date(),
    },
    onSubmit: async (values) => {

      if(!role) {
        Swal.fire({
          icon : 'error',
          title : 'Error',
          text : 'You need to select role first'
        })
        return;
      }
      console.log(role);
      // return;
      const response = await fetch(url+'/user/add', {
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
      if(role === 'startup'){
        const userdata = (await response.json()).result;
        console.log(userdata);
        addStartupEntry(userdata._id);
      }

      Swal.fire({
        icon : "success",
        title : "Nice🎉",
        text : "You are registered"
      })
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
    <>
      {/* Section: Design Block */}
      <section className="text-center text-lg-start">
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    .cascading-right {\n      margin-right: -50px;\n    }\n\n    @media (max-width: 991.98px) {\n      .cascading-right {\n        margin-right: 0;\n      }\n    }\n  ",
          }}
        />
        {/* Jumbotron */}
        <div className="container py-4">
          <div className="row g-0 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div
                className="card cascading-right"
                style={{
                  background: "hsla(0, 0%, 100%, 0.55)",
                  backdropFilter: "blur(30px)",
                }}
              >
                <div className="card-body p-5 shadow-5 text-center">
                  <h2 className="fw-bold mb-5">Sign up now</h2>
                  <form onSubmit={formik.handleSubmit}>
                    {/* 2 column grid layout with text inputs for the first and last names */}
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            name="name"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="form3Example1">
                            Full Name
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            name="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="form3Example2">
                            Email Address
                          </label>
                        </div>
                      </div>
                    </div>
                    {/* Email input */}
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        name="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form3Example3">
                        Password
                      </label>
                    </div>
                    
                    {/* Checkbox */}
                    <div className="form-check d-flex justify-content-center mb-4">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        defaultValue=""
                        id="form2Example33"
                        defaultChecked=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="form2Example33"
                      >
                        Subscribe to our newsletter
                      </label>
                    </div>

                    <div className="d-flex justify-content-center">
  {/* Default radio */}
  <div className="form-check">
    <input
      className="form-check-input"
      type="radio"
      name="role"
      onChange={e => {if(e.target.value === 'on') setRole('startup')}}
    />
    <label className="form-check-label" htmlFor="flexRadioDefault1">
      Startup
    </label>
  </div>
  {/* Default checked radio */}
  <div className="form-check">
    <input
      className="form-check-input"
      type="radio"
      name="role"
      onChange={e => {if(e.target.value === 'on') setRole('investor')}}
    />
    <label className="form-check-label" htmlFor="flexRadioDefault2">
      Investor
    </label>
  </div>
</div> 

                    {/* Submit button */}
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-4"
                    >
                      Sign up
                    </button>
                    {/* Register buttons */}
                    <div className="text-center">
                      <p>or sign up with:</p>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-facebook-f" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-google" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-twitter" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-github" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0">
              <img
                src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
                className="w-100 rounded-4 shadow-4"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* Jumbotron */}
      </section>
      {/* Section: Design Block */}
    </>
  );
};

export default Signup;

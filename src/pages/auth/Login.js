import React from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { login } from "../../features/userSlice";
import { useDispatch } from "react-redux";
import Lottie from "react-lottie";
import animationData from "../../images/login.json";
import loader from "../../images/loader.json";

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const UserLogin = (data) => {
    dispatch(
      login({
        username: data.username,
        password: data.password,
      })
    );
    console.log(data);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const loaderIcon = {
    loop: true,
    autoplay: true,
    animationData: loader,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="container">
      <div className="login">
        <div className="login_left">
          {/* <img src='' alt='POS' /> */}
          <h2>POS</h2>
          <h3>Sign In </h3>

          <p>Please login with your account</p>

          <form onSubmit={handleSubmit(UserLogin)}>
            <div className="form-group">
              <div className="form-control">
                <label> Username</label>
                <input
                  name="username"
                  type="text"
                  {...register("username", { required: true })}
                />
                {errors.username && (
                  <span className="input__errors">Username is required</span>
                )}
              </div>
            </div>
            <div className="form-group">
              <div className="form-control">
                <label> Password</label>
                <input
                  name="password"
                  type="password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="input__errors">Password is required</span>
                )}
              </div>
            </div>

            <div className="forgot-pin">
              <a href="#"> Forgot Password ?</a>
            </div>

            <input type="submit" className="login_register_btn" value="Login" />
          </form>
          {/* <p className='donot_have_account'>Don't have an account? <a href ='#' className='signup'>Sign up</a></p>  */}
        </div>
        <div className="login_right">
          {/* <img src={ require('../../images/login_tablet.png') } className='login_image' alt='Login Image' /> */}
          <Lottie
            className="lottie"
            options={defaultOptions}
            height={440}
            width={440}
          />
        </div>
      </div>

      {/* <div className='login_right'>
         
             <Lottie  
              className='lottie'
              options={loaderIcon}
                height={440}
                width={440}
              />
       </div> */}
    </div>
  );
}

export default Login;

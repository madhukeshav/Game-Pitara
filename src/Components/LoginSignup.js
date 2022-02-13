import React, { useEffect, useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import facebook from "./Assets/img/facebook.png";
import google from "./Assets/img/google.png";
// import flag from "./Assets/img/flag.png";
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import Days from "./Days";
import FbGoogle2ndStep from './FbGoogle2ndStep';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import eyeView from "../Components/Assets/img/view.png"
import hideEyeView from "../Components/Assets/img/hide.png"


const LoginSignup = (props) => {
  let history = useHistory();
  const [user, setUser] = useState({});
  const [email, setEmail] = useState({});
  const [phone, setPhone] = useState({});
  const [cpassword, setCpassword] = useState({});
  // const [SocialId, setSocial] = useState(1);
  // const [RegBy, setRegBy] = useState("manual");
  //const [fb2nd, setFb2nd] = useState("");
  // const [RegId, setRegId] = useState(1);
  const [CountryCode, setCountryCode] = useState();
  const [invalid, setInvalid] = useState()
  const [password, setPassword] = useState({});
  const [day, setDay] = useState({})
  const [month, setMonth] = useState({})
  const [year, setYear] = useState({})
  const [already, setAlready] = useState("");
  const [isRegistrationMessage, setRegistrationMessage] = useState("")
  let dobs = `${year.year}-${month.month}-${day.day}`;
  const users = { user: { username: user.UserName, password: password.Password } }
  const register = { user: { username: user.UserName, password: password.Password, password_confirmation: password.Password, email: email.email, date_of_birth: "10-jan-2000" } }



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isPasswordType, setIsPasswordType] = useState(true)
  const [isConformationPasswordType, setIsConformationPasswordType] = useState(true)
  const [isLoginPasswordType, setIsLoginPasswordType] = useState(true)

  //Login
  const handleLogin = (e) => {
    fetch("https://api.gamepitara.com/api/v1/users/login", {
      method: "POST",
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
        "Sender": "155145",
      },
      body: JSON.stringify(users)
    }).then((result) => {
      if (result.status === 200) {
        result.json().then(res => {
          localStorage.setItem("auth", res.auth_token)
          history.push("/home")
        })
      } else {
        setInvalid("Invalid userName or Password")
      }
    })
    e.preventDefault()
  };

  //register
  const handleRegister = (e) => {
    let url;
    if (password.Password === cpassword.cpassword) {
      url = "https://api.gamepitara.com/api/v1/users/register";
      setRegistrationMessage("")

      fetch(url, {
        method: "POST",
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          "Content-type": "application/json",
          "Accept": "application/json",
          "Sender": "155145"
        },
        body: JSON.stringify(register)

      }).then((result) => {
        if (result.status === 200 || result.status === 201) {
          history.push('/home')
        } else {
          result.json().then(result => {
            setRegistrationMessage(result?.full_messages[0] ? result.full_messages[0] : "Somthing went wrong! Please Try again")
          })
        }
      })
      e.preventDefault()
    } else {
      url = null;
      setRegistrationMessage("password and confirm passowrd does not match");
    }
  }

  useEffect(() => {
    if (invalid !== undefined) {
      setTimeout(() => {
        setInvalid()
      }, 3000);
    };

  })
  // use effect for api calling

  //facebook login
  // const responseFacebook = (response) => {
  //   if (response.accessToken) {
  //     // history.push("/home")
  //     // console.log(response);
  //     // localStorage.setItem("auth", response.id)
  //     // localStorage.setItem("name", response.name)

  //   }
  // }
  // const componentClicked = (data) => {
  //   console.log(data);
  //   setRegBy("Facebook")
  //   setFb2nd("show2nd")
  // }

  //google login
  // const responseGoogle = (response) => {
  //   console.log(response);
  //   setRegBy("Google")
  //   console.log(RegBy);
  //   if (response.accessToken) {
  //     history.push("/home")
  //     localStorage.setItem("auth", response.googleId)
  //     localStorage.setItem("name", response.profileObj.name)
  //   }
  // }
  return (
    <div className="mainBody">
      {props.sign ? (
        <>
          <div className="loginBody">
            <form action="">
              <div className="form-group">
                <label htmlFor="UserName">Username/Email *</label>
                <input
                  type="text"
                  name="UserName"
                  onChange={(e) => {
                    setUser({ [e.target.name]: e.target.value });
                  }}
                  onBlur={(e) => { localStorage.setItem("name", e.target.value) }}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password *</label>
                <input
                  type={isLoginPasswordType ? "password" : "text"}
                  name="Password"
                  onChange={(e) => {
                    setPassword({ [e.target.name]: e.target.value });
                  }}
                  required
                />
                <img className="loginEye" src={!isLoginPasswordType ? eyeView : hideEyeView} alt="eye view" onClick={() => setIsLoginPasswordType(isLoginPasswordType ? false : true)} />
                <p>{invalid}</p>
              </div>
              <div className="form-group">
                <button type="submit" onClick={handleLogin}>
                  log in
                </button>
              </div>
              <div className="remember">
                <div className="rememberme">
                  <p>
                    <input type="checkbox" /> <span>remember me</span>
                  </p>
                </div>
                <Link to="">forgot your password?</Link>
              </div>
            </form>
          </div>
          <div className="loginwith">
            <div className="heading">
              <h3>
                <span>or log in with</span>
              </h3>
            </div>
            {/* <div className="images">
              <div class="fb-login-button" data-width="100px" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false">
                <img src={facebook} alt="" />
              </div>
              <FacebookLogin
                appId="451496726209512"
                autoLoad={false}
                fields="name,email,picture"
              // onClick={componentClicked}
              // callback={responseFacebook} 
              />
              <img src={google} alt="" />
              <GoogleLogin
                clientId="687002067674-ese70qh4fmckv9aghjlb19dv7ttd892b.apps.googleusercontent.com"
                buttonText="Login With Google"
                // onSuccess={responseGoogle}
                // onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
              />
            </div> */}
            <div className="images">
              <img src={facebook} alt="" />
              <img src={google} alt="" />
            </div>
          </div>
          <div className="accout">
            <img src={user} alt="" />
            <p>no account yet?</p>
            <Link to="" >create an account</Link>
          </div>
        </>
      ) : props.signup ? (
        <>
          <div className="loginBody">
            <form action="">
              <div className="form-group">
                <label htmlFor="username">Username *</label>
                <input type="text" name="UserName" onChange={(e) => { setUser({ [e.target.name]: e.target.value }) }} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" name="email" onChange={(e) => { setEmail({ [e.target.name]: e.target.value }) }} required />

              </div>

              <div className="form-group">
                <label htmlFor="dob">DOB *</label>

                <div className="dob">
                  <select id="" name="day" onChange={e => setDay({ [e.target.name]: e.target.value })}>
                    <option value="">DD</option>
                    <Days />
                  </select>
                  <select id="" name="month" onChange={e => setMonth({ [e.target.name]: e.target.value })} >
                    <option value="">MM</option>
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </select>
                  <input type="text" name="year" placeholder="YYYY" onChange={e => setYear({ [e.target.name]: e.target.value })} />
                </div>
                <div className="dob">
                  <p>Hit Sign Up Only if you are over 18</p>
                </div>

              </div>

              <div className="form-group" style={{ display: "none" }}>
                <label htmlFor="phone">Phone *</label>
                <div className="phone">
                  <div className="sel">
                    <PhoneInput
                      country={'de'}
                      regions={['europe', 'asia']}
                      value={CountryCode}
                      onChange={phoneCode => setCountryCode(phoneCode)}
                      className="countryCode"
                    />
                  </div>
                  <input type="text" name="phone" onChange={(e) => { setPhone({ [e.target.name]: e.target.value }) }} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password *</label>
                <input type={isPasswordType ? "password" : "text"} name="Password" onChange={(e) => { setPassword({ [e.target.name]: e.target.value }) }} required />
                <img className="loginEye" src={!isPasswordType ? eyeView : hideEyeView} alt="eye view" onClick={() => setIsPasswordType(isPasswordType ? false : true)} />
              </div>
              <div className="form-group">
                <label htmlFor="cpassword">Confirm Password *</label>
                <input type={isConformationPasswordType ? "password" : "text"} name="cpassword" onChange={(e) => { setCpassword({ [e.target.name]: e.target.value }) }} required />
                <img className="loginEye" src={!isConformationPasswordType ? eyeView : hideEyeView} alt="eye view" onClick={() => setIsConformationPasswordType(isConformationPasswordType ? false : true)} />
                <p>{already !== "Success" ? already : <span className="success">{already}</span>}</p>
                <p>{isRegistrationMessage}</p>
              </div>
              <div className="form-group">
                <button type="submit" onClick={handleRegister}>
                  sign up
                </button>
              </div>
              <div className="remember">
                <div className="rememberme">
                  <p>
                    <input type="checkbox" /> <span>remember me</span>
                  </p>
                </div>
                <Link to="">forgot your password?</Link>
              </div>
            </form>
          </div>
          <div className="loginwith">
            <div className="heading">
              <h3>
                <span>or sign up with</span>
              </h3>
            </div>
            <div className="images">
              <img src={facebook} alt="" />
              <img src={google} alt="" />
            </div>
          </div>
          <div className="accout">
            <img src={user} alt="" />
            <p>already an account?</p>
            <Link to="">sign in</Link>
          </div>
        </>
      ) : ""
      }
    </div>
  );
};

export default LoginSignup;

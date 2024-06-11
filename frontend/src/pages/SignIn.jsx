import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function SignIn() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const email = useRef();
  const password = useRef();
  const handleChange = () => {
    // axios
    //   .post("http://127.0.0.1:8000/admin/login/?next=/admin/", {
    //     email: email.current.value,
    //     password: password.current.value,
    //   })
    //   .then(function (response) {
    //     console.log(response.data);
    //     window.location.replace("/");
    //     // localStorage.setItem("token", response.data.token);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    // console.log(email.current.value, password.current.value);
    window.location.replace("/");
  };

  // axios
  //   .post("http://127.0.0.1:8000/polls")
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  const styles = {
    container: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    howItWorks: {
      color: "#4262FF",
      fontFamily: "Ubuntu",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "25px",
      lineHeight: "23px",
      texTransform: "uppercase",
      paddingLeft: "1600px",
      paddingTop: "50px",
    },
    body: {
      height: "500px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
    },
    nevtreh: {
      fontFamily: "Ubuntu",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "32px",
      lineHeight: "37px",
      textAlign: "center",

      color: "#4262FF",
    },
    input: {
      boxSizing: "border-box",
      width: "381px",
      height: "44px",
      background: "#FFFFFF",
      border: "1px solid #F0F0F0",
      boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.16)",
      borderRadius: "100px",

      paddingLeft: "50px",
      fontfamily: "Ubuntu",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "23px",
      color: "#000000",
      opacity: 0.2,
    },
    container1: {
      width: "400px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    checkbox: { border: "1px solid #02B589" },
    namaigsana: {
      paddingRight: "130px",
      fontFamily: "Ubuntu",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "18px",
      color: "#4262FF",
    },
    nevtreh1: {
      fontFamily: "Ubuntu",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "20px",
      lineHeight: "23px",
      textTransform: "uppercase",
      color: "#FFFFFF",

      width: "383px",
      height: "43px",
      backgroundColor: "#4262FF",
      border: "0px #4262FF",
      borderRadius: "100px",
    },
    link1: {
      fontFamily: "Ubuntu",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "18px",
      textDecorationLine: "underline",
      color: "#333333",
      border: "0px solid",
      backgroundColor: "#fff",
    },
    link2: {
      fontFamily: "Ubuntu",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "18px",
      textDecorationLine: "underline",
      color: "#4262FF",
      border: "0px solid",
      backgroundColor: "#fff",
    },
  };
  return (
    <div style={styles.container}>
      <div style={styles.body}>
        <div style={styles.nevtreh}>Sign In</div>
        <div>
          <div>Email</div>
          <input
            style={styles.input}
            placeholder="name@mail.domain"
            type="email"
            ref={email}
          />
        </div>
        <div>
          <div>Password</div>
          <input
            style={styles.input}
            placeholder="••••••••••"
            type={passwordShown ? "text" : "password"}
            ref={password}
          />
        </div>
        <div style={styles.container1}>
          <input type="checkbox" style={styles.checkbox} />
          <div style={styles.namaigsana}>Remember me</div>
          <button style={styles.link2} onClick={togglePassword}>
            Show password
          </button>
          <Link style={styles.link1}>Forgot password?</Link>
        </div>
        <button style={styles.nevtreh1} onClick={handleChange}>
          Sign In
        </button>
        <Link style={styles.link2} to="/signup">
          Don't have an account
        </Link>
      </div>
    </div>
  );
}
export default SignIn;

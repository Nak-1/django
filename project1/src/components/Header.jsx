import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const styles = {
    container: {
      position: "fixed",
      width: "100vw",
      height: "10vh",
      display: "flex",
      justifyContent: "space-around",
      backgroundColor: "white",
    },
    button1: {
      display: "inline-block",
      padding: "10px 20px",
      backgroundColor: "#fff",
      color: "black",
      fontSize: "16px",
      border: 0,
      borderRadius: "10px",
      cursor: "pointer",
      textAlign: "center",
      textDecoration: 0,
    },
    button2: {
      display: "inline-block",
      padding: "10px 20px",
      backgroundColor: "#4262FF",
      color: "#fff",
      fontSize: "16px",
      border: 0,
      borderRadius: "10px",
      cursor: "pointer",
      textAlign: "center",
      textDecoration: 0,
    },
  };
  return (
    <div style={styles.container}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          width: "30vw",
        }}
      >
        <Link
          to="/"
          style={{ fontSize: "30px", fontWeight: "bold", textDecoration: 0 }}
        >
          MIRO
        </Link>
        <button style={styles.button1}>Product</button>
        <button style={styles.button1}>Solutions</button>
        <button style={styles.button1}>Resources</button>
        <button style={styles.button1}>Enterprise</button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          width: "10vw",
        }}
      >
        <Link to="/signin" style={styles.button1}>
          Login
        </Link>
        <Link to="/signup" style={styles.button2}>
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Header;

import React from "react";

const Card = () => {
  return (
    <div>
      <h3>Product</h3>
      <p>Online whiteboard</p>
      <p>Templates</p>
      <p>Microwaves</p>
      <p>changelog</p>
      <p>Online whiteboard</p>
      <p>Templates</p>
      <p>Microwaves</p>
      <p>changelog</p>
    </div>
  );
};

const Footer = () => {
  const styles = {
    container: {
      width: "100vw",
      height: "55vh",
      display: "flex",
      flexDirection: "column",
      //   justifyContent: "space-around",
      justifyContent: "center",
      backgroundColor: "#050038",
      color: "white",
    },
  };
  return (
    <div style={styles.container}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          padding: "30px",
          justifyContent: "space-around",
        }}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <div>
          <p>Online whiteboard</p>
          <p>Templates</p>
          <p>Microwaves</p>
          <p>changelog</p>
          <input
            placeholder="Email"
            style={{
              borderRadius: "20px",
              borderWidth: 1,
              height: 30,
              width: 200,
            }}
          />
        </div>
      </div>
      <div
        style={{
          marginLeft: "10vw",
          width: "80vw",
          color: "white",
          backgroundColor: "white",
          height: "1px",
        }}
      ></div>
    </div>
  );
};

export default Footer;

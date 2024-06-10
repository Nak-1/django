import React from "react";
import img1 from "../imgs/div.png";
import img2 from "../imgs/M3_integrations_all_integrations.png.png";
import img3 from "../imgs/Brainstormwithoutshadow.jpg.png";

const Home = () => {
  const arr = [
    { name: "Brainstorming" },
    { name: "Diagramming" },
    { name: "Meetings" },
    { name: "Mapping" },
    { name: "Scrum Events" },
    { name: "Research" },
    { name: "Design" },
  ];
  const styles = {
    container: {
      height: "100%",
      width: "100vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    button1: {
      display: "inline-block",
      padding: "10px 20px",
      backgroundColor: "#f1f1f1",
      color: "black",
      fontSize: "16px",
      border: 0,
      borderRadius: "30px",
      cursor: "pointer",
      textAlign: "center",
      textDecoration: 0,
    },
    button2: {
      height: "50px",
      display: "inline-block",
      padding: "10px 20px",
      backgroundColor: "#4262FF",
      color: "#fff",
      fontSize: "16px",
      border: 0,
      borderRadius: "40px",
      cursor: "pointer",
      textAlign: "center",
      textDecoration: 0,
    },
  };
  return (
    <div style={styles.container}>
      <div
        style={{
          // width: "100vw",
          height: "70vh",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          gap: "4vw",
        }}
      >
        <div
          style={{
            width: "20vw",
            gap: "8px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p style={{ fontSize: "60px", fontWeight: "bold" }}>
            Take ideas from better to best
          </p>
          <p>
            Miro's your team's visual platform to connect, collaborate, and
            create - together
          </p>
          <input
            placeholder="Enter your work email"
            style={{
              height: "40px",
              width: "97%",
              borderRadius: "40px",
              borderWidth: 1,
              paddingLeft: "20px",
            }}
          />
          <button style={styles.button2}>SIGN UP FREE</button>
        </div>
        <img alt="" src={img1} style={{ marginTop: "20px" }} />
      </div>
      <div
        style={{
          // width: "100vw",
          height: "80vh",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          gap: "4vw",
        }}
      >
        <img alt="" src={img2} style={{ height: "500px", width: "500px" }} />
        <div
          style={{
            width: "20vw",
            gap: "8px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p style={{ fontSize: "60px", fontWeight: "bold" }}>
            Connect your tools, close your tables
          </p>
          <p>
            Whether you want to edit your Google Docs, resolve Jira issues, or
            collaborate over Zoom, Miro has 100+ integrations with tools you
            already use and love.
          </p>
          <button
            style={{
              borderWidth: 0,
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              color: "#4262FF",
            }}
          >
            Learn more
          </button>
        </div>
      </div>
      <div
        style={{
          // width: "100vw",
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          // gap: "4vw",
        }}
      >
        <p
          style={{
            fontSize: "60px",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          Built for the way you work
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            overflow: "scroll",
            height: "50px",
            width: "60vw",
          }}
        >
          {arr.map(function (data) {
            return <button style={styles.button1}>{data.name}</button>;
          })}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "20vw" }}>
            <p style={{ fontSize: "20px", fontWeight: "bolder" }}>
              Brainstorming
            </p>
            <p>
              Unleash creative ideas and build on them with the help of sticky
              notes, images, mind maps, videos, drawing capabilities — the list
              goes on.
            </p>
            <button
              style={{
                borderWidth: 0,
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                color: "#4262FF",
              }}
            >
              Learn more
            </button>
          </div>
          <img alt="" src={img3} style={{ width: "40vw", height: "60vh" }} />
        </div>
      </div>
    </div>
  );
};

export default Home;

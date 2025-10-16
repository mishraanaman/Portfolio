import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Tilt from "react-parallax-tilt";

function Certificates() {
  // List of badge IDs
  const badgeIds = [
    "7069d0e9-6d59-4d6c-8d1b-9587d0388683",
    "944f013f-3e1d-42b1-b3e4-1bec7cd80dd9",
    "6bcb6790-4035-4727-ac15-8b0b9d5f2b13",
    "9fc26ecb-f729-4d9b-86a8-2987a93407cc",
    "5e3348ff-e150-46e4-8971-8dd4a92cb5ae",
  ];

  useEffect(() => {
    // Add Credly script dynamically
    const script = document.createElement("script");
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const boxStyle = {
    width: "100%",
    maxWidth: "700px", // wider than before
    minHeight: "270px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    background: "linear-gradient(280deg, rgba(130, 57, 150, 0.4), rgba(199, 164, 208, 0.8)", 
    borderRadius: "20px",
    boxShadow: "0 5px 10px rgba(197, 115, 230, 0.7)",
    color: "#fff",
  };
 
  const badgeDivStyle = {
    width: "100%",      // take full width of the box
    height: "270px",    // keep height consistent
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Container
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        justifyContent: "center",
        gap: "30px",
      }}
    >
      {badgeIds.map((id, idx) => (
        <Tilt tiltReverse={true} scale={1.15} key={idx}>
          <div style={boxStyle}>
            <div
              style={badgeDivStyle}
              data-iframe-width="100%"
              data-iframe-height="270"
              data-share-badge-id={id}
              data-share-badge-host="https://www.credly.com"
            ></div>
          </div>
        </Tilt>
      ))}
    </Container>
  );
}

export default Certificates;

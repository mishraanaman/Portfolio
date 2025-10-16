import React from "react";
import { Container } from "react-bootstrap";
import { FaAws } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import Tilt from "react-parallax-tilt";


function Toolstack() {
    const techItems = [
        { icon: <FaAws size={70} color="#FF9900" />, text: "AWS Certified Solutions Architect – Associate" },
        { icon: <SiMongodb size={70} color="#023430" />, text: "MongoDB Associate Developer" },
        { icon: <SiMongodb size={70} color="#023430" />, text: "MongoDB Associate Database Administrator" },
        { icon: <SiMongodb size={70} color="#023430" />, text: "MongoDB Associate Data Modeller" },
        { icon: <SiMongodb size={70} color="#023430" />, text: "MongoDB Associate Atlas Administrator" },
    ];

    const boxStyle = {
        width: "450px",
        height: "250px",
        display: "flex",
        alignItems: "center",
        padding: "20px 30px", // extra horizontal padding
        backgroundColor: "rgba(255,255,255,0.05)",
        borderRadius: "20px",
        gap: "20px", // space between icon and text
        color: "#fff", // text color
        boxShadow: "0 5px 10px rgba(197, 115, 230, 0.6)"
    };

    const textStyle = {
        fontSize: "1.2rem",
        fontWeight: "400",
        textAlign: "left", // align text to the left

    };

    return (
        <Container
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                justifyContent: "center",
                gap: "20px",
            }}
        >
            {techItems.map((item, idx) => (
                <Tilt tiltReverse={true} scale={1.15}>
                    <div key={idx} style={boxStyle}>
                        {item.icon}
                        <div style={textStyle}>{item.text}</div>
                    </div>   </Tilt>
            ))}

        </Container>
    );
}

export default Toolstack;

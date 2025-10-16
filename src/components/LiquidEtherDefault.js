import React from "react";
import LiquidEther from "./LiquidEther"; // adjust path if needed

const LiquidEtherDefault = (props) => {
  return (
   <div
      style={{
        position: "absolute",  // make it float behind
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,             // behind all  content
        pointerEvents: "auto", // allow clicks through
      }}
    >
    <LiquidEther
      colors={['#5227FF', '#FF9FFC', '#B19EEF']}
      mouseForce={20}
      cursorSize={100}
      isViscous={true}
      viscous={30}
      iterationsViscous={40}
      iterationsPoisson={40}
      resolution={0.5}
      isBounce={true}
      autoDemo={true}
      autoSpeed={0.2}
      autoIntensity={2.2}
      takeoverDuration={0.25}
      autoResumeDelay={300}
      autoRampDuration={0.6}
      {...props} // allow overrides if needed
    />
    </div>
  );
};

export default LiquidEtherDefault;

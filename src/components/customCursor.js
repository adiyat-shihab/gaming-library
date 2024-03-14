"use client";
import dynamic from "next/dynamic";
const CustomCursor = ({ children }) => {
  const AnimatedCursor = dynamic(() => import("react-animated-cursor"));
  return (
    <div>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "#F6571E",
        }}
        outerStyle={{
          border: "3px solid #F6571E",
        }}
      />
      {children}
    </div>
  );
};

export default CustomCursor;

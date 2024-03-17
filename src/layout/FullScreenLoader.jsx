import React from "react"; 
import TopBarProgress from "react-topbar-progress-indicator";
TopBarProgress.config({
  barColors: {
    0: "#17B978",
    0.5: "#17B978",
    1: "#191D2B",
  },
  shadowBlur: 20,
});

const FullScreenLoader = () => {
  return (
    <div>
      <TopBarProgress />
    </div>
  );
};

export default FullScreenLoader;

import React from "react";
import { Bars } from "react-loader-spinner";

const Loader = () => {
  return (
    <div style={styles.loaderContainer}>
      <Bars
        height="80"
        width="80"
        color="#ffff"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

const styles = {
  loaderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Adjust this value if you need different behavior
  },
};

export default Loader;

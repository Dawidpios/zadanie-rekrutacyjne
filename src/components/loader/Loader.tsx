import React from "react";
import styles from '../main/Main.module.scss'
import { Blocks } from "react-loader-spinner";

const Loader = () => {
  return ( 
      <div className={styles.main}>
        <Blocks
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          visible={true}
        />
      </div>
    );
}
 
export default Loader;
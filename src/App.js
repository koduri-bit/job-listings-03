
import classes from './App.module.css';
import Header from "./components/Layout/Header";
import Joblist from "./components/JobList/Joblist";
import React from "react";


function App() {


  const styles = classes['app'] + ' ' + classes['app-contianer']

  return (
    <div className={styles}>
        <Header/>
        <Joblist/>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import styles from "./tasks.module.css";
import axios from 'axios'
const Tasks = () => {
  const [data,setData]=useState([])
  // NOTE: do not delete `data-testid` key value pair
  useEffect(()=>{
     axios.get('http://localhost:8081/todos').then((e)=>{
        setData(e.data)
     })
  },[])
  console.log(data)
  return (
    <>
      <ul data-testid="tasks" className={styles.tasks}>
        {/* Task List */}
      </ul>
      <div data-testid="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;

import axios from "axios";
import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = () => {
  const [data,setData]=useState('');
  // NOTE: do not delete `data-testid` key value pair
  const handleChange=((e)=>{
     
    setData(e.target.value)
  })
  const handleSubmit=(()=>{
    var datas={
        text:data,
        done:false,
        counter:1

    }
    if(data==''){
      return alert('please give something')
    }
    axios.post('http://localhost:8080/todos',datas).then((e)=>{
      alert('Added')
    })
    console.log(data)
  })
  return (
    <div className={styles.todoForm}>
      <input data-testid="add-task-input"  type="text" onChange={handleChange} />
      <button data-testid="add-task-button" onClick={handleSubmit}>Add task</button>
    </div>
  );
};

export default AddTask;

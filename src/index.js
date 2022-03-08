import { render } from '@testing-library/react';
import { tab } from '@testing-library/user-event/dist/tab';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import style from './index.css';

function Hour(){
  const [hour, setHour]  = useState(new Date().toLocaleTimeString("BR"));
  
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  setInterval(() => setHour(new Date().toLocaleTimeString("BR")));

  return(
<div>
   <p className={style.p}>{hour}</p>
   <h1>Current date is {date}</h1>
   </div>
  )
}


function NewHour(){
  return (
  <div>
    <Hour />
    </div>
  )
}


ReactDOM.render(
  <>
  <pp>It's Currently:</pp>
  <NewHour />
  </>

, document.getElementById('root'))





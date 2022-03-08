import { render } from '@testing-library/react';
import { tab } from '@testing-library/user-event/dist/tab';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import style from './index.css';

function Hour(){
  const [hour, setHour]  = useState(new Date().toLocaleTimeString("BR"));
  
  const current = new Date();

  const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

  const dayNames = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado", "Domingo"];


  

  const year = `${current.getMonth}`
  const date = `${current.getDate()}/${monthNames[current.getMonth()]}/${current.getFullYear()}`;
  const day = `${dayNames[current.getDay()]}`;
  setInterval(() => setHour(new Date().toLocaleTimeString("BR")));

  return(
<div className={style}>
   <p>{hour}</p>
   <p id='date'>{day} | {date}</p>
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





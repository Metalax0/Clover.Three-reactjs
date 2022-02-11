import { isDisabled } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react'
import classes from '../Index.module.css'

function TicTacToeLeft() {
    const [val,setval]=useState('');
    const [val2,setval2]=useState('');
    const [val3,setval3]=useState('');
    const [val4,setval4]=useState('');
    const [val5,setval5]=useState('');
    const [val6,setval6]=useState('');
    const [val7,setval7]=useState('');
    const [val8,setval8]=useState('');
    const [val9,setval9]=useState('');
    const [game,setgame]=useState('TIC-TAC-TOE');
    const [bool,setbool]=useState(true);
    const [disable, setDisable] = React.useState(false);
    const change = ()=>{
        if(bool===true){
            setval('X');
            setbool(false)
        }
        if(bool!==true){
            setval('O');
            setbool(true)
        }
        gameover()
    }
    const change2 = ()=>{
        if(bool===true){
            setval2('X');
            setbool(false)
        }
        if(bool!==true){
            setval2('O');
            setbool(true)
        }
        gameover()
    }
    const change3 = ()=>{
        if(bool===true){
            setval3('X');
            setbool(false)
        }
        if(bool!==true){
            setval3('O');
            setbool(true)
        }
        gameover()
    }
    const change4 = ()=>{
        if(bool===true){
            setval4('X');
            setbool(false)
        }
        if(bool!==true){
            setval4('O');
            setbool(true)
        }
        gameover()
    }
    const change5 = ()=>{
        if(bool===true){
            setval5('X');
            setbool(false)
        }
        if(bool!==true){
            setval5('O');
            setbool(true)
        }
        gameover()
    }
    const change6 = ()=>{
        if(bool===true){
            setval6('X');
            setbool(false)
        }
        if(bool!==true){
            setval6('O');
            setbool(true)
        }
        gameover()
    }
    const change7 = ()=>{
        if(bool===true){
            setval7('X');
            setbool(false)
        }
        if(bool!==true){
            setval7('O');
            setbool(true)
        }
        gameover()
    }
    const change8 = ()=>{
        if(bool===true){
            setval8('X');
            setbool(false)
        }
        if(bool!==true){
            setval8('O');
            setbool(true)
        }
        gameover()
    }
    const change9 = ()=>{
        if(bool===true){
            setval9('X');
            setbool(false)
        }
        if(bool!==true){
            setval9('O');
            setbool(true)
        }
        gameover()
    }

    const gameover = () =>{
      if(val==='X' && val2==='X' && val3==='X' || val==='O' && val2==='O' && val3==='O') {
          setgame('Game-Over')
          document.getElementById("p1").style.background = "red";
          document.getElementById("p2").style.background = "red";
          document.getElementById("p3").style.background = "red";
        setDisable(true);
        alert('Game-Over')
      } 
      if(val==='X' && val4==='X' && val7==='X' ||val==='O' && val4==='O' && val7==='O') {
        setgame('Game-Over')
        document.getElementById("p1").style.background = "red";
        document.getElementById("p4").style.background = "red";
        document.getElementById("p7").style.background = "red";
        setDisable(true);
        alert('Game-Over')
    }
    if(val==='X' && val5==='X' && val9==='X' || val==='O' && val5==='O' && val9==='O') {
        setgame('Game-Over')
        document.getElementById("p1").style.background = "red";
        document.getElementById("p5").style.background = "red";
        document.getElementById("p9").style.background = "red";
        setDisable(true);
        alert('Game-Over')
    }
    if(val2==='X' && val5==='X' && val8==='X' || val==='O' && val5==='O' && val8==='O') {
        setgame('Game-Over')
        document.getElementById("p2").style.background = "red";
        document.getElementById("p5").style.background = "red";
        document.getElementById("p8").style.background = "red";
        setDisable(true);
        alert('Game-Over')
    }
    if(val3==='X' && val6==='X' && val9==='X' || val3==='O' && val6==='O' && val9==='O') {
        setgame('Game-Over')
        document.getElementById("p3").style.background = "red";
        document.getElementById("p6").style.background = "red";
        document.getElementById("p9").style.background = "red";
        setDisable(true);
        alert('Game-Over')
    }
    if(val3==='X' && val5==='X' && val7==='X' || val3==='O' && val5==='O' && val7==='O') {
        setgame('Game-Over')
        document.getElementById("p3").style.background = "red";
        document.getElementById("p5").style.background = "red";
        document.getElementById("p7").style.background = "red";
        setDisable(true);
        alert('Game-Over')
    }
    if(val4==='X' && val5==='X' && val6==='X' || val4==='O' && val5==='O' && val6==='O') {
        setgame('Game-Over')
        document.getElementById("p4").style.background = "red";
        document.getElementById("p5").style.background = "red";
        document.getElementById("p6").style.background = "red";
        setDisable(true);
        alert('Game-Over')
    }
    if(val7==='X' && val8==='X' && val9==='X' || val7==='O' && val8==='O' && val9==='O') {
        setgame('Game-Over')
        document.getElementById("p7").style.background = "red";
        document.getElementById("p8").style.background = "red";
        document.getElementById("p9").style.background = "red";
        setDisable(true);
        alert('Game-Over')
    }
    }
 
    
  return (
    
         <div className="column-left">
            {/* <!-- <img src="..\resources\1.jpg"> --> */} 
            <div className={classes.maingrid}>
             <div className={classes.grid} id="grid" >
                <button id="p1" disabled={disable} className={classes.game} onClick={change}>{val}</button>
                <button id="p2" disabled={disable} className={classes.game} onClick={change2}>{val2}</button>
                <button id="p3" disabled={disable} className={classes.game} onClick={change3}>{val3}</button>
                <button id="p4" disabled={disable} className={classes.game} onClick={change4}>{val4}</button>
                <button id="p5" disabled={disable} className={classes.game} onClick={change5}>{val5}</button>
                <button id="p6" disabled={disable} className={classes.game} onClick={change6}>{val6}</button>
                <button id="p7" disabled={disable} className={classes.game} onClick={change7}>{val7}</button>
                <button id="p8" disabled={disable} className={classes.game} onClick={change8}>{val8}</button>
                <button id="p9" disabled={disable} className={classes.game} onClick={change9}>{val9}</button>


            </div>
            </div>
            <div className={classes.output}>
                <p id="p10" className={classes.result}>{game}
                </p>
            </div>


        </div>
       


  )
}

export default TicTacToeLeft
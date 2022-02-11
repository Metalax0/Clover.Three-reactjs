import React,{useState} from 'react'

function CalculatorRight() {
    const [number,setnumber] = useState();
    const [change,setchange] = useState();
    const [operator,changeoperator] = useState();
    const storenum= (em)=>{
      const id = em.target.id
      const number = document.getElementById('text').value
      if(id==='one'){
      setnumber(number + 1)
      }
      if(id==='two'){
        setnumber(number + 2)
      }
      if(id==='three'){
        setnumber(number + 3)
      }
      if(id==='four'){
        setnumber(number + 4)
      }
      if(id==='five'){
        setnumber(number + 5)
      }
      if(id==='six'){
        setnumber(number + 6)
      }
      if(id==='seven'){
        setnumber(number + 7)
      }
      if(id==='eight'){
        setnumber(number + 8)
      }
      if(id==='nine'){
        setnumber(number + 9)
      }
      if(id==='dot'){
        setnumber("")
      }
      if(id==='zero'){
        setnumber(number+0)
      }
    }
  
    
    const addnum = (e)=>{
      setchange(document.getElementById('text').value)
      setnumber('')
      changeoperator(1);
    }
  
    const subnum = ()=>{
      setchange(document.getElementById('text').value)
      setnumber('')
      changeoperator(2)
    }
  
    const mulnum = ()=>{
      setchange(document.getElementById('text').value)
      setnumber('')
      changeoperator(3)
    }
  
    const divnum = ()=>{
      setchange(document.getElementById('text').value)
      setnumber('')
      changeoperator(4)
    }
    const result = ()=>{
      const res = document.getElementById('text').value
      if(Object.keys(res).length === 0){
        console.log("isempty")
      }
      else{
      switch(operator){
        case 1:
          setnumber(parseInt(change) + parseInt(res))
           break;
        case 2:
          setnumber(parseInt(change) - parseInt(res))
          break;
        case 3:
          setnumber(parseInt(change) * parseInt(res))
          break;
        case 4:
            setnumber(parseInt(change) / parseInt(res))
            break;
      }
    }
      
    }
    return (
    <div className='column-right'>
    <div className=" flex justify-center ">
          <div className="bg-green-400 h-full mt-10 w-2/3 text-center rounded-2xl">
    <h1>CALCULATOR</h1>
    <textarea id="text" className="flex w-full right-80 h-12" value={number}></textarea>
    <div className="grid grid-cols-3 grid-rows-5 gap-7 w-80 pl-16 pt-8">
    <button id="one" onClick={storenum}>1</button>
    <button id="two" onClick={storenum}>2</button>
    <button id="three" onClick={storenum}>3</button>
    <button id="four" onClick={storenum}>4</button>
    <button id="five" onClick={storenum}>5</button>
    <button id="six" onClick={storenum}>6</button>
    <button id="seven" onClick={storenum}>7</button>
    <button id="eight" onClick={storenum}>8</button>
    <button id="nine" onClick={storenum}>9</button>
    <button id="add" className=" border-solid border-2" onClick={addnum}>+</button>
    <button id="zero" onClick={storenum}>0</button>
    <button className=" border-solid border-2 " onClick={subnum}>-</button>
    <button className=" border-solid border-2 " onClick={divnum}>/</button>
    <button className=" border-solid border-2 " onClick={storenum}>AC</button>
    <button className=" border-solid border-2 " onClick={mulnum}>*</button>
    <button className=" border-solid border-2 w-32 ml-16" id="dot" onClick={result}>=</button>
    </div>
      </div>
      
    </div>
    </div>);
}

export default CalculatorRight
import React from 'react'
import TicTacToeLeft from '../TicTacToeLeft/Index'
import MainContainer from '../../../Sampanna/MainContainer'
import TicTacToeRight from '../TicTacToeRight/Index'
import CalculatorRight from '../CalculatorRight/Index'
import CalculatorLeft from '../CalculatorLeft/Index'

function XrinContent() {
  return (
    <>
        <MainContainer left_content = {<TicTacToeLeft/>} right_content = {<TicTacToeRight/>} /> 
        <MainContainer left_content = {<CalculatorLeft/>} right_content = {<CalculatorRight/>} /> 
        {/* <TicTacToeRight/> */}
    </>
  )
}

export default XrinContent
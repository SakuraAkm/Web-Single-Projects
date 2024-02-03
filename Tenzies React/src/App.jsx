import { useEffect, useState } from 'react'
import Confetti from 'react-confetti'
import Dice from "./Dice.jsx"

function App() {

  const [dice, setDice] = useState(firstRoll)
  const [tenzies, setTenzies] = useState(false)

  useEffect(() => {
    const selected = dice.every(die => die.selected)
    const firstDice = dice[0].diceNum
    const sameNum = dice.every(die => die.diceNum == firstDice)
    if(selected && sameNum){ 
      setTenzies(true) 
    }
  }, [dice])

  function firstRoll() {
    let arrNum = []
    for(let i = 0; i < 10; i++){
      let objNum = {}
      const randNum = Math.ceil(Math.random()*6)
      objNum = {id: i, diceNum: randNum, selected: false}
      arrNum.push(objNum)
    }
    return arrNum
  }

  function rollNum() {
    let arrNum = dice.map(die => {
      if(die.selected){
        return die
      } else {
        return {...die, diceNum: Math.ceil(Math.random()*6)}
      }
    })
    return setDice(arrNum)
  }

  function greenBg(id){
    const diceUpdated = dice.map(obj => {
        if(obj.id == id){
          console.log(obj)
          return {...obj, selected: !obj.selected }
        } else {
          return obj
        }
      })
      setDice(diceUpdated)
  }

  function newGame(){
    setDice(firstRoll())
    setTenzies(false)
  }

  let arrDice = dice.map(obj => {
    return <Dice 
      key = {obj.id}
      number = {obj.diceNum}
      selected = {obj.selected}
      greenBg = {() => greenBg(obj.id)}
    />
  })

  console.log(dice)

  return (
    <main className='vh-100 d-flex justify-content-center align-items-center'>
      {tenzies && <Confetti />}

      <div className='tenzies text-center d-flex justify-content-center align-items-center'>
        <div>

          <h1>Tenzies</h1>
          <p>Click every Card till they have all the same value then you win</p>

          <div className='dice-container container2 mx-auto text-center'>
            {arrDice}
          </div>
          
          <button onClick={tenzies ? newGame : rollNum}>{tenzies ? "You Won!" : "Roll"}</button>
        
        </div>
      </div>
        

      
    </main>
  )
}

export default App

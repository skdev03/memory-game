import React, { useState, useEffect } from 'react';
import './App.css';
import Grid from './models/grid'
import createCards from './deck'

export default function App() {
  const [cards, setCards] = useState([]) // Getter and Setter for array of cards
  // Getter and Setter for array of flipped cards. Contains the card ids of the currently flipped cards.
  const [flippedCards, setFlippedCards] = useState([])
  // Contains the document dimension
  const [dimension, setDimension] = useState(500)
  // Getter and Setter for array of all the solved cards. Contains the card ids of the all the solved cards.
  const [solvedCards, setSolvedCards] = useState([])
  // Boolean for disabling the click action on the cards in certain cases
  const [disabled, setDisabled] = useState(false)
  // Contains the card ids of the all the solved cards that needs to be removed.
  const [hiddenCards, setHiddenCards] = useState([])
  const totalCards = 24

  // Used for initially creating all the cards in the grid
  useEffect(() => {
    resizeGrid()
    setCards(createCards())
  }, [])

  // Checks for the completion of the game and resets the grid to start a new game
  useEffect(() => {
    if(solvedCards.length === totalCards) {
      setTimeout(() => {
        alert("You win!")
        resetGrid()
      }, 1000)
    }
  }, [solvedCards])

  const resetGrid = () => {
    setSolvedCards([])
  }

  const handleClick = (id) => {
    setDisabled(true)
    if(flippedCards.length === 0) {
      setFlippedCards([id])
      setDisabled(false)
    } else {
      if(sameCardClicked(id)) return

      setFlippedCards([flippedCards[0], id])

      if(isMatch(id)) { // if both the flipped cards match
        // appends the solvedCards array with the flipped cards
        setSolvedCards([...solvedCards, flippedCards[0], id])
        // after a timeout hides the matched cards
        setTimeout(() => {
          setHiddenCards([...hiddenCards, flippedCards[0], id])
          resetCards()
        }, 500)
      } else { // if the flipped cards did not match
        setTimeout(resetCards, 1500)
      }
    }
  }

  const sameCardClicked = (id) => flippedCards.includes(id)

  const isMatch = (id) => {
    const clickedCard = cards.find((card) => card.id === id)
    const flippedCard = cards.find((card) => flippedCards[0] === card.id)
    return clickedCard.name === flippedCard.name
  }

  const resetCards = () => {
    setFlippedCards([])
    setDisabled(false)
  }

  // Listens for the window resize event and resizes the grid
  useEffect(() => {
    const resizeListener = window.addEventListener('resize', resizeGrid)
    return () => window.removeEventListener('resize', resizeListener)
  })

  const resizeGrid = () => {
    setDimension(
      Math.min(
        document.documentElement.clientWidth,
        document.documentElement.clientHeight,
      ),
    )
  }

  return (
    <div>
      <div className='App-header'>
        <h1>Test Your Memory</h1>
      </div>
        <Grid dimension={dimension} cards={cards} flipped={flippedCards} handleClick={handleClick} disabled={disabled} solved={solvedCards} hide={hiddenCards} />
    </div>
  )
}

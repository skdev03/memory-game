import React from 'react'
import PropTypes from 'prop-types'
import Card from '../card'
import './styles.css'

export default function Grid ({
  dimension,
  cards,
  flipped,
  handleClick,
  disabled,
  solved,
  hide }) {
  return <div className='grid'>
    {cards.map((card) => (
      <Card
        key={card.id}
        id={card.id}
        name={card.name}
        width={solved.includes(card.id) && hide.includes(card.id) ? 0 : dimension / 4.5 }
        height={solved.includes(card.id) && hide.includes(card.id) ? 0 : dimension / 3.0}
        flipped={flipped.includes(card.id)}
        handleClick={handleClick}
        disabled={disabled || solved.includes(card.id) }
        solved={solved.includes(card.id)}
      />
    ))}
    </div>
}

Grid.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handleClick: PropTypes.func.isRequired,
  dimension: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired,
  hide: PropTypes.bool.isRequired,
  flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
  solved: PropTypes.arrayOf(PropTypes.number).isRequired,
}

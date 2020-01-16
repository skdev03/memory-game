import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

export default function Card({
  handleClick,
  id,
  name,
  flipped,
  width,
  height,
  disabled,
  solved }) {
  return <div
      className={`flip-card ${flipped ? 'flipped' : ''}`}
      style={{
        width,
        height,
      }}
      onClick={() => disabled ? null : handleClick(id)}
      >
        <div className='flip'>
          <img
            style={{
              width,
              height,
            }}
            className={flipped ? 'front': 'back'}
            src={flipped || solved ? `/img/${name}.jpg`: '/img/questionmark.jpeg'}
            alt=''
            />
        </div>
      </div>
}

Card.propTypes = {
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  flipped: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  solved: PropTypes.bool.isRequired,
}

import React, { useState } from 'react'
import './GameStyles.css'
import cardsData from '../cardsData.js'

const Game = () => {
  const [cardsList, setCardsList] = useState(cardsData.sort(() => Math.random() - 0.5))
  const [prevIndexCard, setPrevIndexCard] = useState(-1)

  const selectCard = (i) => {
    cardsList[i].status = 'selected'
    setCardsList([...cardsList])
    if (prevIndexCard === -1) {
      setPrevIndexCard(i)
    } else {
      validateCards(i)
    }
  }

  const validateCards = (iNew) => {
    setTimeout(() => {
      const prev = cardsList[prevIndexCard]
      const current = cardsList[iNew]
      if (prev.icon === current.icon) {
        prev.status = 'up'
        current.status = 'up'
      } else {
        prev.status = 'down'
        current.status = 'down'
      }
      setCardsList([...cardsList])
      setPrevIndexCard(-1)
    }, 1000)
  }

  return (
    <div className='game-container'>
      {
                cardsList.map((card, i) => (
                  <div
                    className={`game-container__card ${card.status}`}
                    key={card.id}
                    onClick={() => selectCard(i)}
                  >
                    {
                            card.status !== 'down' && (
                              <i className={card.icon} />
                            )
                        }
                  </div>
                ))
            }
    </div>
  )
}

export default Game

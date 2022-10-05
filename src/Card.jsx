import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';

function Card({ card }) {
  return (
    <div className="card card1" style={{ width: "16rem" }}>
      <img src={card.image} className="card-img-top image1" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{card.title}</h5>
        <p class="card-text"><b>Discount Price</b> - <FontAwesomeIcon icon={faIndianRupee} /> {card.discount}</p>
        <p class="card-text"><b>Price</b> - <FontAwesomeIcon icon={faIndianRupee} /> <span className='price'>{card.price}</span></p>
        <p class="card-text"><b>Rating</b> - {card.rating}</p>
      </div>
    </div>
  )
}

export default Card
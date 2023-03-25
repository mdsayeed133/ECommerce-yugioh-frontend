import React, { useState } from "react";
import "./StorePage.css";

const StorePage = ({ cards }) => {
    let displayNum= 12;
  const [selectedCard, setSelectedCard] = useState(null);
  const [pageStart, setPageStart] = useState(0);
  const [pageEnd, setPageEnd] = useState(displayNum);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleNextPage = () => {
    if (pageEnd < cards.length) {
      setPageStart(pageStart + displayNum);
      setPageEnd(pageEnd + displayNum);
    }
  };

  const handleLastPage = () => {
    if (pageStart > 0) {
      setPageStart(pageStart - displayNum);
      setPageEnd(pageEnd - displayNum);
    }
  };

  return (
    <div className="store-page">
      <div className="card-details">
        {selectedCard && (
          <>
            <h2>{selectedCard.name}</h2>
            <img src={selectedCard.image} alt={selectedCard.name}></img>
            <p>{selectedCard.description}</p>
            <p>
              Type: <strong>{selectedCard.type.typeName}</strong>
            </p>
            <p>
              Price: <strong>${selectedCard.price.toFixed(2)}</strong>
            </p>
          </>
        )}
      </div>
      <div className="card-gallery">
        {cards.slice(pageStart, pageEnd).map((card) => (
          <img
            key={card.id}
            src={card.image}
            alt={card.name}
            className="card-image"
            onClick={() => handleCardClick(card)}
          />
        ))}
    
      </div>
      <div className="card-page-buttons">
        <button onClick={handleLastPage}>Last Page</button>
        <button onClick={handleNextPage}>Next Page</button>
      </div>
    </div>
  );
};

export default StorePage;

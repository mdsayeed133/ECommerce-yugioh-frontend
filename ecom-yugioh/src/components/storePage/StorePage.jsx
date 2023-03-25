import React, { useState } from "react";
import "./StorePage.css";

const StorePage = ({ cardAll }) => {
  let displayNum = 12;
  const [cards, setCards] = useState(cardAll);
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

  const handleAllCards = () => {
    setPageStart(0);
    setPageEnd(displayNum);
    setCards(cardAll);
  };

  const handleMonsters = () => {
    setPageStart(0);
    setPageEnd(displayNum);
    const filteredCards = cardAll.filter(
      (card) => card.type.typeId === parseInt(1)
    );
    setCards(filteredCards);
  };

  const handleSpells = () => {
    setPageStart(0);
    setPageEnd(displayNum);
    const filteredCards = cardAll.filter(
      (card) => card.type.typeId === parseInt(2)
    );
    setCards(filteredCards);
  };

  const handleTraps = () => {
    setPageStart(0);
    setPageEnd(displayNum);
    const filteredCards = cardAll.filter(
      (card) => card.type.typeId === parseInt(3)
    );
    setCards(filteredCards);
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
        <button onClick={handleAllCards}>All Cards</button>
        <button onClick={handleMonsters}>Monsters</button>
        <button onClick={handleSpells}>Spells</button>
        <button onClick={handleTraps}>Traps</button>
      </div>
    </div>
  );
};

export default StorePage;

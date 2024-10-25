"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ModulePath from './ModulePath';
import { globalState } from '../globalState'; // Importing globalState

const cardsData = [
  { id: 1, type: 'fact', content: { kn: 'ಶುದ್ಧ ಕುಡಿಯುವ ನೀರು ಜ್ವರದಂತಹ ರೋಗಗಳನ್ನು ತಡೆಹಿಡಿಯುತ್ತದೆ.', en: 'Clean drinking water prevents diseases like diarrhea.' }, pairId: 1 },
  { id: 2, type: 'image', content: '/game3/water-filter.jpeg', pairId: 1 },
  { id: 3, type: 'fact', content: { kn: 'ಇದು ಸೋಂಕು ಮತ್ತು ಖಾಯಿಲೆಗಳಿಂದ ಕಾದು ತಡೆಗಟ್ಟುತ್ತದೆ.', en: 'It can reduce the spread of germs and illnesses.' }, pairId: 2 },
  { id: 4, type: 'image', content: '/game3/washing-hands.jpg', pairId: 2 },
  { id: 5, type: 'fact', content: { kn: 'ಇದು ನಿಮ್ಮ ದೇಹವನ್ನು ದೃಢವಾಗಿರಿಸಲು ಮತ್ತು ರೋಗಗಳನ್ನು ತಡೆಯಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.', en: 'Eating this helps the body stay strong and fight off diseases.' }, pairId: 3 },
  { id: 6, type: 'image', content: '/game3/Healthy-Food.jpg', pairId: 3 },
  { id: 7, type: 'fact', content: { kn: 'ಆಹಾರವನ್ನು ಕೊಡುವುದು ರೋಗಗಳನ್ನು ಹರಿಯುವದನ್ನು ತಡೆಗಟ್ಟುತ್ತದೆ.', en: 'Access to medicine given by him prevents the spread of diseases.' }, pairId: 4 },
  { id: 8, type: 'image', content: '/game3/doctor.jpeg', pairId: 4 },
  { id: 9, type: 'fact', content: { kn: 'ಜಾಲಗಳನ್ನು ಬಳಸುವುದು ಮಾಳೇರಿಯಾ ಸೇರಿದಂತೆ ಕಾಯಿಲೆಗಳನ್ನು ತಡೆಯಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.', en: 'Using nets can help prevent diseases like malaria.' }, pairId: 5 },
  { id: 10, type: 'image', content: '/game3/mosquitoes.jpg', pairId: 5 },
  { id: 11, type: 'fact', content: { kn: 'ನಿಯಮಿತ ಚಟುವಟಿಕೆ ಉತ್ತಮ ಆರೋಗ್ಯವನ್ನು ಕಾಯ್ದುಕೊಳ್ಳಲು ಪ್ರಮುಖವಾಗಿದೆ.', en: 'Regular activity is important for maintaining good health.' }, pairId: 6 },
  { id: 12, type: 'image', content: '/game3/exercise.jpg', pairId: 6 },
  { id: 13, type: 'fact', content: { kn: 'ಇದು ಲ್ಯಾವೆಂನನ್ನು ತಡೆಗಟ್ಟಲು ನೆರವಾಗುತ್ತದೆ.', en: 'Injecting this can protect people from dangerous diseases like measles and the flu.' }, pairId: 7 },
  { id: 14, type: 'image', content: '/game3/vaccination.png', pairId: 7 },
  { id: 15, type: 'fact', content: { kn: 'ಶುದ್ಧ ಆರೋಗ್ಯ ಸೇವೆಗೆ ಪ್ರವೇಶವು ಸೋಂಕು ಹಾರುವ ಸಾಧ್ಯತೆಯನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ.', en: 'Access to clean healthcare facilities reduces the risk of infection.' }, pairId: 8 },
  { id: 16, type: 'image', content: '/game3/hospital.jpg', pairId: 8 }
];

export default function Home() {
  const [cards, setCards] = useState([...cardsData]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [isGameWon, setIsGameWon] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);

  // Set language variable based on global state
  const language = globalState.language === 'kn' ? 'kn-IN' : 'en-US';

  useEffect(() => {
    setCards(shuffleArray([...cardsData]));
  }, []);

  useEffect(() => {
    if (matchedCards.length === cardsData.length / 2) {
      setIsGameWon(true);
    }
  }, [matchedCards]);

  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  const handleCardClick = (card) => {
    if (!isGameStarted || flippedCards.length === 2) return;
    if (flippedCards.find((flipped) => flipped.id === card.id)) return;

    const newFlippedCards = [...flippedCards, card];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      if (newFlippedCards[0].pairId === newFlippedCards[1].pairId) {
        setMatchedCards([...matchedCards, newFlippedCards[0].pairId]);
      }
      setTimeout(() => setFlippedCards([]), 1000); // flip cards back after 1s
    }
  };

  const handleCloseModal = () => {
    setIsGameWon(false);
    <ModulePath />
  };

  const handleStartGame = () => {
    setIsGameStarted(true);
  };

  return (
    <div className="container">
      <h1>{language === 'kn-IN' ? 'ಕಾರ್ಡ್ ಮೆಚ್ಚು ಆಟ' : 'Match the Cards Game'}</h1>
      <div className="grid">
        {cards.map((card) => {
          const isFlipped = flippedCards.find((flipped) => flipped.id === card.id) || matchedCards.includes(card.pairId);
          const isMatched = matchedCards.includes(card.pairId);
          return (
            <div
              key={card.id}
              className={`card ${isFlipped ? 'flipped' : ''} ${isMatched ? 'matched' : ''}`}
              onClick={() => handleCardClick(card)}
            >
              <div className="card-inner">
                <div className="card-front"></div>
                <div className="card-back">
                  {card.type === 'image' ? (
                    <div className="image-container">
                      <Image src={card.content} alt="card image" layout="fill" objectFit="cover" />
                    </div>
                  ) : (
                    <p>{language === 'kn-IN' ? card.content.kn : card.content.en}</p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Start Game Modal */}
      {!isGameStarted && (
        <div className="modal">
          <div className="modal-content text-black">
            <h2>{language === 'kn-IN' ? 'ಕಾರ್ಡ್ ಮೆಚ್ಚು ಆಟಕ್ಕೆ ಸ್ವಾಗತ!' : 'Welcome to the Match the Cards Game!'}</h2>
            <button onClick={handleStartGame} className="start-game-btn">
              {language === 'kn-IN' ? 'ಆಟವನ್ನು ಆರಂಭಿಸಿ' : 'Start Game'}
            </button>
          </div>
        </div>
      )}

      {/* Game Won Modal */}
      {isGameWon && (
        <div className="modal">
          <div className="modal-content">
            <h2>{language === 'kn-IN' ? 'ನೀವು ಗೆಲ್ಲಿದ್ದೀರಿ!' : 'You Won!'}</h2>
            <p>{language === 'kn-IN' ? 'ನೀವು ಎಲ್ಲಾ ಕಾರ್ಡ್‌ಗಳನ್ನು ಮೆಚ್ಚಿದ್ದೀರಿ!' : 'Congratulations on matching all the cards!'}</p>
            <button onClick={handleCloseModal} className="play-again-btn">{language === 'kn-IN' ? 'ಮರು ಆಟವಾಡಿ' : 'Play Again'}</button>
          </div>
        </div>
      )}

      <style jsx>{`
        .container {
          text-align: center;
          padding: 20px;
        }
        h1 {
          font-size: 36px;
          font-weight: bold;
          margin-bottom: 20px;
          color: black;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(4, 150px);
          gap: 20px;
          justify-content: center;
        }
        .card {
          width: 150px;
          height: 150px;
          perspective: 1000px;
          cursor: pointer;
        }
        .card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.6s;
        }
        .card.flipped .card-inner {
          transform: rotateY(180deg);
        }
        .card-front, .card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 14px;
          padding: 10px;
          border: 1px solid #ddd;
        }
          .card-back {
          background: #fff;
          color: #333;
          transform: rotateY(180deg);
        }
        .card-front {
          background: green;
        }
        .image-container {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .modal-content {
          background: white;
          padding: 20px;
          border-radius: 8px;
          text-align: center;
        }
        /* Button Styling */
        .play-again-btn, .start-game-btn {
          margin-top: 10px;
          padding: 10px 20px;
          font-size: 16px;
          color: white;
          background-color: blue;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .play-again-btn:hover, .start-game-btn:hover {
          background-color: darkblue; /* Darker green on hover */
        }
      `}</style>
    </div>
  );
}

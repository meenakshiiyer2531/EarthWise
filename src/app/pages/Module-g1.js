"use client"; // Ensure this component is a client component
import { useEffect, useRef } from 'react';
import { useState } from 'react';

const clues = [
  { clue: "Individuals living below the _____ line struggle to meet their basic needs.", answer: "Poverty", positions:[{ row: 4, col: 10 },{ row: 4, col: 11},{ row: 4, col: 12},{ row: 4, col: 13},{ row: 4, col: 14 },{ row: 4, col: 15 },{ row: 4, col: 16 }] },
  { clue: "A _____ wage is the minimum income required to maintain a decent standard of living.", answer: "Living",positions:[{ row: 11, col: 7},{ row: 11, col: 8},{ row: 11, col: 9},{row:11,col:10}, { row: 11, col: 11},{ row: 11, col: 12 }] },
  { clue: "Financial aid programs designed to assist individuals in difficult circumstances are often referred to as _____ programs.", answer: "Welfare",positions:[{ row: 4, col: 18},{ row: 5, col: 18},{ row: 6, col: 18},{ row: 7, col: 18 },{ row: 8, col: 18},{ row: 9, col: 18},{ row: 10, col: 18 } ] },
  { clue: "The income threshold below which a person or family is considered to be in poverty is known as the _____ line.", answer: "Poverty",positions:[{ row: 1, col: 13},{ row: 2, col: 13},{ row: 3, col: 13},{ row: 4, col: 13},{ row: 5, col: 13},{ row: 6, col: 13},{ row: 7, col: 13}] },
  { clue: "Empowering individuals and communities to take charge of their own development is a key principle of _____ development.", answer: "Sustainable",positions:[{ row: 1, col: 15},{ row: 2, col: 15},{ row: 3, col: 15},{ row: 4, col: 15},{ row: 5, col: 15},{ row: 6, col: 15},{ row: 7, col: 15},{ row: 8, col: 15},{ row: 9, col: 15},{ row: 10, col: 15},{ row: 11, col: 15}] },
  { clue: "The United Nations program focused on poverty eradication and sustainable development is abbreviated as _____.", answer: "UNDP",positions:[{ row: 13, col: 9},{ row: 13, col: 10},{ row: 13, col: 11 },{ row: 13, col: 12 }] },
  { clue: "The condition where people lack sufficient resources for food, water, and shelter is known as material _____.", answer: "Deprivation",positions:[{ row: 0, col: 4},{ row: 1, col: 4},{ row: 2, col: 4},{ row: 3, col: 4},{ row: 4, col: 4},{ row: 5, col: 4 },{ row: 6, col: 4 },{ row: 7, col: 4},{ row: 8, col: 4},{ row: 9, col: 4},{ row: 10, col: 4}] },
  { clue: "Small loans provided to entrepreneurs to help them start or grow their businesses are called _____ finance.", answer: "Micro" ,positions:[{ row: 6, col: 6,},{ row: 6, col: 7},{ row: 6, col: 8},{ row: 6, col: 9},{ row: 6, col: 10 },]},
  { clue: "Ensuring everyone has consistent access to enough nutritious food is referred to as _____ security.", answer: "Food",positions:[{ row: 0, col: 1},{ row: 0, col: 2},{ row: 0, col: 3},{ row: 0, col: 4}] },
  { clue: "Groups often left behind in economic progress, facing discrimination and exclusion, are termed _____ populations.", answer: "Marginalized" ,positions:[{ row: 8, col: 0},{ row: 8, col: 1},{ row: 8, col: 2},{ row: 8, col: 3},{ row: 8, col: 4 },{ row: 8, col: 5},{ row: 8, col: 6 },{ row: 8, col: 7 },{ row: 8, col: 8},{ row: 8, col: 9, answer: 'Z' },{ row: 8, col: 10}, { row: 8, col: 11}]},
  { clue: "An economic system that seeks to benefit all members of society, especially the disadvantaged, is termed an _____ economy.", answer: "Inclusive",positions:[{ row: 6, col: 15},{ row: 6, col: 16},{ row: 6, col: 17},{ row: 6, col: 18 },{ row: 6, col: 19 },{ row: 6, col: 20 },{ row: 6, col: 21 },{ row: 6, col: 22},{ row: 6, col: 23 }] },
  { clue: "The ethical responsibility to ensure equitable treatment and opportunities for all is known as _____ justice.", answer: "Social" ,positions:[{ row: 3, col: 7},{ row: 4, col: 7},{ row: 5, col: 7},{ row: 6, col: 7},{ row: 7, col: 7},{ row: 8, col: 7 }]},
  { clue: "Comprehensive support systems that include education, healthcare, and financial assistance are called social _____.", answer: "Protection",positions:[{ row: 4, col: 10 },{ row: 5, col: 10 },{ row: 6, col: 10 }, { row: 7, col: 10 },{ row: 9, col: 10},{ row: 10, col: 10},{ row: 11, col: 10  },{ row: 12, col: 10},{ row: 13, col: 10 }] },
  { clue: "Financial services designed to assist low-income individuals by providing small loans are often called micro_.", answer: "Credit",positions:[{ row: 7, col: 2},{ row: 8, col: 2}, { row: 9, col: 2 },{ row: 10, col: 2},{ row: 11, col: 2 },{ row: 12, col: 2}] },
  { clue: "Community initiatives aimed at improving living standards while preserving the environment are examples of _____ development.", answer: "Sustainable" ,positions:[{ row: 1, col: 21},{ row: 2, col: 21},{ row: 3, col: 21 },{ row: 4, col: 21},{ row: 5, col: 21},{ row: 6, col: 21},{ row: 7, col: 21},{ row: 8, col: 21 },{ row: 9, col: 21},{ row: 10, col: 21},{ row: 11, col: 21}]},
];

// Set the grid size
const gridRows = 14;
const gridCols = 24;

// Define the positions of letters in the grid, including number assignments
const letterPositions = [
  { row: 0, col: 1, answer: 'F' , number:1,isPreFilled: true},
  { row: 0, col: 2, answer: 'O' },
  { row: 0, col: 3, answer: 'O' },
  { row: 0, col: 4, answer: 'D' ,number:8,isPreFilled: true},
  { row: 1, col: 4, answer: 'E' },
  { row: 2, col: 4, answer: 'P' },
  { row: 3, col: 4, answer: 'R' },
  { row: 4, col: 4, answer: 'I'},
  { row: 5, col: 4, answer: 'V' },
  { row: 6, col: 4, answer: 'A' },
  { row: 7, col: 4, answer: 'T' },
  { row: 8, col: 4, answer: 'I',isPreFilled: true  },
  { row: 9, col: 4, answer: 'O' },
  { row: 10, col: 4, answer: 'N' },
  { row: 8, col: 0, answer: 'M',number:2 ,isPreFilled: true},
  { row: 8, col: 1, answer: 'A' },
  { row: 8, col: 2, answer: 'R' },
  { row: 8, col: 3, answer: 'G' },
  { row: 8, col: 5, answer: 'N' },
  { row: 8, col: 6, answer: 'A' },
  { row: 8, col: 7, answer: 'L' },
  { row: 8, col: 8, answer: 'I' },
  { row: 8, col: 9, answer: 'Z' },
  { row: 8, col: 10, answer: 'E' ,isPreFilled: true },
  { row: 8, col: 11, answer: 'D' },
  { row: 6, col: 6, answer: 'M',number:3 ,isPreFilled: true},
  { row: 6, col: 7, answer: 'I' },
  { row: 6, col: 8, answer: 'C' },
  { row: 6, col: 9, answer: 'R' },
  { row: 6, col: 10, answer: 'O' },
  { row: 3, col: 7, answer: 'S',number:10,isPreFilled: true },
  { row: 4, col: 7, answer: 'O' },
  { row: 5, col: 7, answer: 'C' },
  { row: 7, col: 7, answer: 'A' },
  { row: 4, col: 10, answer: 'P',number:11,isPreFilled: true },
  { row: 5, col: 10, answer: 'R' },
  { row: 7, col: 10, answer: 'T' },
  { row: 9, col: 10, answer: 'C' },
  { row: 10, col: 10, answer: 'T' },
  { row: 11, col: 10, answer: 'I',isPreFilled: true  },
  { row: 12, col: 10, answer: 'O' },
  { row: 13, col: 10, answer: 'N' },
  { row: 13, col: 9, answer: 'U',number:5,isPreFilled: true },
  { row: 13, col: 11, answer: 'D' },
  { row: 13, col: 12, answer: 'P' },
  { row: 4, col: 11, answer: 'O' },
  { row: 4, col: 12, answer: 'V' },
  { row: 4, col: 13, answer: 'E',isPreFilled: true  },
  { row: 4, col: 14, answer: 'R' },
  { row: 4, col: 15, answer: 'T' ,isPreFilled: true },
  { row: 4, col: 16, answer: 'Y' },
  { row: 1, col: 13, answer: 'P',number:11 ,isPreFilled: true},
  { row: 2, col: 13, answer: 'O' },
  { row: 3, col: 13, answer: 'V' },
  { row: 5, col: 13, answer: 'R' },
  { row: 6, col: 13, answer: 'T' },
  { row: 7, col: 13, answer: 'Y' },
  { row: 1, col: 15, answer: 'S',number:12 ,isPreFilled: true},
  { row: 2, col: 15, answer: 'U' },
  { row: 3, col: 15, answer: 'S' },
  { row: 5, col: 15, answer: 'A' },
  { row: 6, col: 15, answer: 'I',number:7,isPreFilled: true },
  { row: 7, col: 15, answer: 'N' },
  { row: 8, col: 15, answer: 'A' },
  { row: 9, col: 15, answer: 'B' },
  { row: 10, col: 15, answer: 'L',},
  { row: 11, col: 15, answer: 'E' },
  { row: 11, col: 7, answer: 'L',number:4 ,isPreFilled: true},
  { row: 11, col: 8, answer: 'I' },
  { row: 11, col: 9, answer: 'V' },
  { row: 11, col: 11, answer: 'N' },
  { row: 11, col: 12, answer: 'G' },
  { row: 1, col: 21, answer: 'S',number:14,isPreFilled: true },
  { row: 2, col: 21, answer: 'U' },
  { row: 3, col: 21, answer: 'S' },
  { row: 4, col: 21, answer: 'T' },
  { row: 5, col: 21, answer: 'A' },
  { row: 7, col: 21, answer: 'N' },
  { row: 8, col: 21, answer: 'A' },
  { row: 9, col: 21, answer: 'B' },
  { row: 10, col: 21, answer: 'L' },
  { row: 11, col: 21, answer: 'E' },
  { row: 6, col: 16, answer: 'N' },
  { row: 6, col: 17, answer: 'C' },
  { row: 6, col: 18, answer: 'L' },
  { row: 6, col: 19, answer: 'U' },
  { row: 6, col: 20, answer: 'S' },
  { row: 6, col: 21, answer: 'I' ,isPreFilled: true },
  { row: 6, col: 22, answer: 'V' },
  { row: 6, col: 23, answer: 'E' },
  { row: 7, col: 2, answer: 'C',number:9 ,isPreFilled: true},
  { row: 9, col: 2, answer: 'E' },
  { row: 10, col: 2, answer: 'D' },
  { row: 11, col: 2, answer: 'I' },
  { row: 12, col: 2, answer: 'T' },
  { row: 4, col: 18, answer: 'W' ,number:13,isPreFilled: true},
  { row: 5, col: 18, answer: 'E' },
  { row: 7, col: 18, answer: 'F' },
  { row: 8, col: 18, answer: 'A' },
  { row: 9, col: 18, answer: 'R' ,isPreFilled: true },
  { row: 10, col: 18, answer: 'E' }, 
];


const Crossword = () => {
  const [answers, setAnswers] = useState(Array.from({ length: gridRows }, () => Array(gridCols).fill("")));
  const [correctWords, setCorrectWords] = useState([]); // Keep track of correct words
  const inputRefs = useRef(Array.from({ length: gridRows }, () => Array(gridCols).fill(null))); // References to input fields

  const handleChange = (row, col, value) => {
    if (row >= 0 && row < gridRows && col >= 0 && col < gridCols) {
      const newAnswers = answers.map((r) => [...r]); // Clone the answers array
      newAnswers[row][col] = value.toUpperCase(); // Store answers in uppercase
      setAnswers(newAnswers);
   
// Check if the word is correct for each clue
clues.forEach((clue) => {
  const isWordCorrect = clue.positions.every(
    (pos) => newAnswers[pos.row][pos.col] === letterPositions.find(p => p.row === pos.row && p.col === pos.col)?.answer
  );

  if (isWordCorrect && !correctWords.includes(clue.answer)) {
    setCorrectWords([...correctWords, clue.answer]); // Add correct word to the list
  }
});
}
};



  
  const handleKeyDown = (e, row, col) => {
    switch (e.key) {
      case "ArrowLeft":
        if (row > 0) {
          inputRefs.current[row - 1][col]?.focus();
        }
        break;
      case "ArrowRight":
        if (row < gridRows - 1) {
          inputRefs.current[row + 1][col]?.focus();
        }
        break;
      case "ArrowUp":
        if (col > 0) {
          inputRefs.current[row][col - 1]?.focus();
        }
        break;
      case "ArrowDown":
        if (col < gridCols - 1) {
          inputRefs.current[row][col + 1]?.focus();
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    // Optional: Set focus on the first input field when the component mounts
    if (inputRefs.current[0][0]) {
      inputRefs.current[0][0].focus();
    }
  }, []);

  return (
    <div style={{ backgroundColor: "#e0f7df", padding: "0px 200px", minHeight: "160vh" }}>
      <h1 className="title">Crossword Puzzle</h1>
      <div className="crossword-grid">
        {Array.from({ length: gridRows }).map((_, row) => (
          <div key={row} className="crossword-row">
            {Array.from({ length: gridCols }).map((_, col) => {
              const cell = letterPositions.find((pos) => pos.row === row && pos.col === col);
              return cell ? (
                <div key={col} className="crossword-cell">
                  {cell.number && <span className="cell-number">{cell.number}</span>}
                  <input
                    type="text"
                    maxLength={1}
                    value={cell.isPreFilled ? cell.answer : answers[row][col]} // Pre-fill letter if specified
                    onChange={(e) => handleChange(row, col, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, row, col)} // Handle keyboard arrow navigation
                    disabled={cell.isPreFilled} // Disable input if pre-filled
                    ref={(el) => (inputRefs.current[row][col] = el)} // Store the input ref
                    className="crossword-input"
                  />
                </div>
              ) : (
                <div key={col} className="crossword-blackout"></div>
              );
            })}
          </div>
        ))}
      </div>
      {/* Clue Section */}
      <div className="clues">
        <h1>Clues</h1>
        <h3>Across</h3>
        <ol>
          <li>1. Ensuring everyone has consistent access to enough nutritious food is referred to as <strong>_____</strong> security.</li>
          <li>2. Groups often left behind in economic progress, facing discrimination and exclusion, are termed <strong>_____</strong> populations.</li>
          <li>3. Small loans provided to entrepreneurs to help them start or grow their businesses are called <strong>_____</strong> finance.</li>
          <li>4. A <strong>_____</strong> wage is the minimum income required to maintain a decent standard of living.</li>
          <li>5. The United Nations program focused on poverty eradication and sustainable development is abbreviated as <strong>_____</strong>.</li>
          <li>6. Individuals living below the <strong>_____</strong> line struggle to meet their basic needs.</li>
          <li>7. An economic system that seeks to benefit all members of society, especially the disadvantaged, is termed an <strong>_____</strong> economy.</li>
        </ol>
        
        <h3>Down</h3>
        <ol>
          <li>6. Comprehensive support systems that include education, healthcare, and financial assistance are called social <strong>_____</strong>.</li>
          <li>8. The condition where people lack sufficient resources for food, water, and shelter is known as material <strong>_____</strong>.</li>
          <li>9. Financial services designed to assist low-income individuals by providing small loans are often called micro<strong>_____</strong>.</li>
          <li>10. The ethical responsibility to ensure equitable treatment and opportunities for all is known as <strong>_____</strong> justice.</li>
          <li>11. The income threshold below which a person or family is considered to be in poverty is known as the <strong>_____</strong> line.</li>
          <li>12. Empowering individuals and communities to take charge of their own development is a key principle of <strong>_____</strong> development.</li>
          <li>13. Financial aid programs designed to assist individuals in difficult circumstances are often referred to as <strong>_____</strong> programs.</li>
          <li>14. Community initiatives aimed at improving living standards while preserving the environment are examples of <strong>_____</strong> development.</li>
        </ol>
      </div>
        
       
      {/* Add CSS styles for grid and input elements */}
      <style jsx>{`
      .crossword-input {
          transition: all 0.3s ease;
        }
          .animate {
          background-color: #a3e635;
          animation: bounce 0.6s ease;
        }
          @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-15px);
          }
            60% {
            transform: translateY(-7px);
          }
        }
          .correct .crossword-input {
          background-color: #d3f9d8;
        }
        .title {
          font-size: 36px;
          font-weight: bold;
          text-align: center;
          margin-bottom: 20px;
          color: black; 
        }
        .crossword-grid {
          display: grid;
          grid-template-columns: repeat(${gridCols}, 40px);
          grid-template-rows: repeat(${gridRows}, 40px);
          
        }
        .crossword-cell {
          position: relative;
    border: 0; /* Remove default border */
    outline: 2px solid black; /* Outer outline for visual effect */
    outline-offset: -1px; /* Overlap the outline */
    overflow: hidden; /* Prevent inner borders from overflowing */
    color: black; 
        }
        .cell-number {
          position: absolute;
          top: 2px;
          left: 4px;
          font-size: 12px;
          color: #333;
        }
        .crossword-input {
          width: 40px;
          height: 40px;
          text-align: center;
          font-size: 17px;
          font-style: bold;
          border: 3px black;
          color: black; 
        }
        .crossword-input[disabled] {
          background-color: lightgray; /* Pre-filled cells will have a distinct background */
          color: black;
          border: 3px black;
        }
        .crossword-blackout {
          width: 40px;
          height: 40px;
          border: 3px black;
          background-color: #4CAF50;
        }
        .clues {
        position: absolute;
      top: 300; /* Adjust as needed */
      left: 3000;
      background-color: rgba(255, 255, 255, 0.8);
      margin-right: 200;
          color: black; 
          padding: 20px;
          border-radius: 5px;
        }
        .clues h2, .clues h3 {
          margin: 0;
          padding: 0;
          font-weight: bold;
          font-size: 20px;
          color: black;  
        }
          .clues h1{
          margin: 0;
          padding: 0;
          font-weight: bold;
          font-size: 25px; 
          text-align: center; 
          color: black; 
  
          }
        .clues ol {
          padding-left: 20px; /* Indent the list */
        }
          .clues-container {
    margin-top: 20px; /* Adjust the value as needed */
}

      `}</style>
    </div>
  );
};

export default Crossword;
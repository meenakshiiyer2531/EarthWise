

"use client"; // This line makes the component a Client Component

import { useState, useEffect } from "react"; // Ensure useEffect is imported
import ModulePath from "./ModulePath"; // Importing ModulePath if needed
import { globalState } from '../globalState'; // Import the global state

const Storyline = () => {
   
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [cluesCollected, setCluesCollected] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showModulePath, setShowModulePath] = useState(false);

  const handleShowModulePath = () => {
    setShowModulePath(true);
  };

  // Effect for scoring based on selected option
  useEffect(() => {
    if (selectedOption) {
      if (selectedOption.startsWith("A")) {
        setScore((prevScore) => prevScore + 1);
      }
    }
  }, [selectedOption]);

  // Effect to update global state when quiz is complete
  useEffect(() => {
    if (showScore) {
      globalState.points += score; // Ensure globalState is correctly defined
    }
  }, [showScore, score]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      } else {
        setShowScore(true);
        setShowPopup(true);
      }
      setSelectedOption(null);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, [currentQuestionIndex]);

  if (showModulePath) {
    return <ModulePath />; // Render ModulePath if the state is true
  }

  return (
    <div style={{ padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "8px", marginBottom: "20px", color: "black" }}>
      <h2>Storyline</h2>
      <p>
        Shinchan and his friends have noticed that things are a bit unfair in their neighborhood. Boys are hogging the best games, while girls are not getting enough turns to shine. So, they decide to put on their detective hats (and maybe a silly mustache or two) and gather clues that will lead them to “The Secret of Equality!” They’ll need your help to solve goofy riddles and questions along the way!
      </p>

      <h3>Characters:</h3>
      <ul>
        <li><strong>Shinchan:</strong> The mischievous boy who loves snacks and making funny faces.</li>
        <li><strong>Doraemon:</strong> The futuristic cat with a bunch of quirky gadgets.</li>
        <li><strong>Kazama:</strong> The smart, serious friend who tries to keep Shinchan in check.</li>
        <li><strong>Nene:</strong> The bubbly girl who loves to draw and always has a funny comment.</li>
        <li><strong>Bo-chan:</strong> The shy but clever kid who has a knack for inventions.</li>
      </ul>
    </div>
  );
};
const questions = [
  {
    scenario: "Doraemon opens his gadget drawer and discovers that only boys are invited to help build his newest invention—a robot that dances like Shinchan! Nene is ready to join the fun but is told to just draw.",
    question: "What’s the best way to make sure everyone can join the gadget fun?",
    options: [
      "A: Let everyone, regardless of gender, join in and create a dancing robot together!",
      "B: Only boys can tinker with gadgets because they have 'more experience' (according to them!).",
      "C: Make a contest to see who dances better—girls or boys!",
      "D: Only let Shinchan sing while everyone else watches."
    ],
    clue: "Dancing robots are better when everyone joins the party!",
  },
  {
    scenario: "The talent show is here! Nene wants to perform a magic show, but the teachers say only boys can do 'cool' acts. Kazama rolls his eyes and says, 'That’s so old-fashioned!'",
    question: "How can we make the talent show a blast for everyone?",
    options: [
      "A: Let both girls and boys show off their wildest talents—like Shinchan’s funny faces and Nene’s magic tricks!",
      "B: Only boys should do the macho dance because girls might break a nail!",
      "C: Have everyone write their talents down instead of performing.",
      "D: Only allow Shinchan to juggle (even if he’s terrible at it)."
    ],
    clue: "More talents mean more fun at the show!",
  },
  {
    scenario: "Kazama is training for the school soccer team, but he forgot to invite Nene and Bo-chan! They decide to show him how to score big points.",
    question: "What’s the best way to score big points in teamwork?",
    options: [
      "A: Let both girls and boys kick the ball—everyone deserves a shot!",
      "B: Only boys should be the star players because they run faster (or so they claim!).",
      "C: Let girls cheer while boys play (and ignore the rules!).",
      "D: Make girls serve snacks instead of playing."
    ],
    clue: "Teamwork makes the dream work—especially when everyone plays!",
  },
  {
    scenario: "The invention contest is coming, and Doraemon only invites boys to showcase their 'super cool' gadgets. Nene bursts in with her latest creation—a snack dispenser that doubles as a dance floor!",
    question: "How can we ensure every genius gets a chance to invent?",
    options: [
      "A: Encourage everyone to showcase their inventions—like Nene’s snack-dancing robot!",
      "B: Only let boys invent because they watch more action movies.",
      "C: Create a special category for girls: 'Best Drawing' (so they can doodle).",
      "D: Just let Shinchan invent because he’s hilarious."
    ],
    clue: "Every inventor deserves a spotlight—no matter what!",
  },
  {
    scenario: "In class, Shinchan sees that only boys are talking about superheroes. Kazama raises his hand and says, 'What about girl superheroes?' Nene adds, 'Yeah, I want to talk about Wonder Woman!'",
    question: "What’s the best way to make sure all voices are heard?",
    options: [
      "A: Give both girls and boys equal time to share their favorite heroes—like Doraemon, the coolest cat in town!",
      "B: Only boys can share superhero stories because girls don’t like action (what?!).",
      "C: Make everyone write their favorite superhero on paper instead.",
      "D: Let Shinchan talk the whole time (for better or worse!)."
    ],
    clue: "Sharing is caring—especially when it’s about heroes!",
  },
  {
    scenario: "At the school festival, Nene realizes all the games are run by boys. She rallies the girls to create their own booth for face painting and fun!",
    question: "How can the festival be fun for everyone?",
    options: [
      "A: Make sure both girls and boys help run the games (everyone loves cotton candy!).",
      "B: Only boys should organize the exciting activities (like who can eat the most snacks!).",
      "C: Let girls plan the arts and crafts booth only.",
      "D: Have Shinchan lead the games, even if he just wants to eat."
    ],
    clue: "Festivals are better when everyone pitches in!",
  },
  {
    scenario: "Shinchan is organizing a movie night but insists on only showing boy superhero movies. Nene wants to watch a romantic comedy where everyone gets covered in silly pies!",
    question: "How can movie nights be more inclusive and fun?",
    options: [
      "A: Feature movies with awesome girl superheroes, too (everyone loves a good plot twist!).",
      "B: Only show movies with boys saving the world (yawn!).",
      "C: Let everyone vote on which movie to watch, but only boys can pick.",
      "D: Just let Shinchan choose a movie where he eats snacks."
    ],
    clue: "Everyone enjoys a good story, no matter the hero!",
  },
  {
    scenario: "The Science Fair rolls around, and all the winners are boys. Nene, dressed as a scientist, says, 'Let’s show them girls can invent too!'",
    question: "How can we make future science fairs more exciting and fair?",
    options: [
      "A: Ensure that both girls and boys can compete equally (like a contest for the best slime!).",
      "B: Only let boys submit projects because they have 'more fun' ideas.",
      "C: Create special awards for girls, like 'Best Pink Project.'",
      "D: Have everyone make a project about how to eat Shinchan’s snacks."
    ],
    clue: "Every genius deserves a fair chance at recognition!",
  },
  {
    scenario: "During the school council election, only boys are running for president. Nene and Bo-chan decide to team up and run as a duo: 'The Dynamic Duo of Equality!'",
    question: "What’s the best way to ensure all voices are represented?",
    options: [
      "A: Encourage girls to run for president, too (maybe even with a fun slogan!).",
      "B: Only let boys lead because they’re 'naturally' better at talking.",
      "C: Have teachers choose the president (boring!).",
      "D: Just let Shinchan take charge because he’s good at making everyone laugh."
    ],
    clue: "Everyone’s voice matters in leadership!",
  }
];


const Page = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [cluesCollected, setCluesCollected] = useState([]);
    const [showPopup, setShowPopup] = useState(false); // State to control the popup visibility
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleOptionSelect = (option) => {
      setSelectedOption(option);
      if (option.startsWith("A")) {
        setCluesCollected([...cluesCollected, questions[currentQuestionIndex].clue]);
        setScore((prevScore) => prevScore + 1); // Increment score
      }
      setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
          setShowScore(true);
          setShowPopup(true);
          globalState.incrementPoints(); // Increment points in global state
        }
        setSelectedOption(null);
      }, 2000);
    };
    const handleNextClick = () => {
        <ModulePath />
        setShowPopup(false); // Replace with the actual path to ModulePath
    };

    
    

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <Storyline />
          <div style={{ margin: "20px", border: "1px solid #2196f3", borderRadius: "8px", padding: "20px", color: "black" }}>
            <h3>{questions[currentQuestionIndex].scenario}</h3>
            <h4>{questions[currentQuestionIndex].question}</h4>
            <ul>
              {questions[currentQuestionIndex].options.map((option, index) => (
                <li key={index} style={{ listStyleType: "none", marginBottom: "10px" }}>
                  <button 
                    onClick={() => handleOptionSelect(option)} 
                    disabled={selectedOption !== null}
                    style={{ 
                      backgroundColor: selectedOption === option ? "#90caf9" : "#2196f3",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      padding: "10px",
                      cursor: "pointer"
                    }}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
            {selectedOption && (
              <div style={{ marginTop: "10px" }}>
                <p>{selectedOption.startsWith("A") ? "Correct! 🎉" : "Oops! Try again!"}</p>
                {selectedOption.startsWith("A") && (
                  <p>Clue collected: {questions[currentQuestionIndex].clue}</p>
                )}
              </div>
            )}
          </div>

         {/* Popup Component */}
{showPopup && (
    <div style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#b2ffb2",
        border: "1px solid #2196f3",
        borderRadius: "8px",
        padding: "20px",
        zIndex: 1000,
        textAlign: "center",
        color: "black",
        width: "900px",   // Increased width
        height: "500px",  // Increased height
        display: "flex",   // Center contents
        flexDirection: "column", // Stack items vertically
        alignItems: "center" // Center items horizontally
    }}>
        <h2 style={{
            paddingTop: "150px",
            fontSize: "50px", // Increased font size
            color: "black" // Set color to golden
        }}>
            Congratulations!
        </h2>
        <p style={{
            fontSize: "20px", // Optional: increase font size for the score
            color: "black", // Ensure score is black
            paddingBottom: "10px"
        }}>
            Your score: {score} out of {questions.length}
        </p>
        <button onClick={handleNextClick} style={{
            backgroundColor: "black",
            color: "white",
            border: "none",
            borderRadius: "10px",
            padding: "15px",
            cursor: "pointer"
        }}>
            NEXT
        </button>
            </div>
          )}
        </div>
    );
};

export default Page;



let flashcards = [
    {
        question: "What is the name of the capital city of Australia?",
        answer: "Canberra"
    },
    {
        question: "What do we call a person who studies rocks and minerals?",
        answer: "Geologist"
    },
    {
        question: "What is the term for the money people pay to the government to support public services?",
        answer: "Tax"
    },
    {
        question: "Which of the following is not a real form of transportation: hoverboard, submarine, or spaceship?",
        answer: "Hoverboard"
    },
    {
        question: "How many sides does a hexagon have?",
        answer: "Six"
    },
    {
        question: "What do you call a doctor who specializes in treating children?",
        answer: "Pediatrician"
    },
    {
        question: "What is the name of a person who acts in a play or movie?",
        answer: "Actor/Actress"
    },
    {
        question: "If the temperature is rising, is it increasing or decreasing?",
        answer: "Increasing"
    },
    {
        question: "What is the name of the punctuation mark that shows the end of a question?",
        answer: "Question mark"
    },
    {
        question: "Is solar energy or coal a renewable energy source?",
        answer: "Solar energy"
    },
    {
        question: "What is the term for two babies born from the same mother at the same time?",
        answer: "Twins"
    },
    {
        question: "What is the opposite of fast?",
        answer: "Slow"
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        answer: "Mars"
    },
    {
        question: "How many strings does a violin have?",
        answer: "Four"
    },
    {
        question: "In what household appliance do you cook food using hot air circulation?",
        answer: "Oven"
    },
    {
        question: "What do you call a person who studies the weather?",
        answer: "Meteorologist"
    },
    {
        question: "What is the opposite of hot?",
        answer: "Cold"
    },
    {
        question: "Which type of building allows astronomers to observe celestial objects?",
        answer: "Observatory"
    },
    {
        question: "What do we call a person who writes books or stories?",
        answer: "Author"
    },
    {
        question: "What do you call a doctor who specializes in treating the heart?",
        answer: "Cardiologist"
    },
    {
        question: "Which form of transportation uses tracks and is commonly found in cities?",
        answer: "Train"
    },
    {
        question: "What is the name for the study of the Earth’s atmosphere and weather?",
        answer: "Meteorology"
    },
    {
        question: "How many continents are there on Earth?",
        answer: "Seven"
    },
    {
        question: "What is the name of the device used to measure temperature?",
        answer: "Thermometer"
    },
    {
        question: "What do we call the person who leads an orchestra?",
        answer: "Conductor"
    },
    {
        question: "Which animal is known as the 'king of the jungle'?",
        answer: "Lion"
    },
    {
        question: "What is the main gas that humans breathe?",
        answer: "Oxygen"
    },
    {
        question: "What is the term for the political line that separates countries?",
        answer: "Border"
    },
    {
        question: "What do you call a person who travels to space?",
        answer: "Astronaut"
    },
    {
        question: "What is the name of the organ responsible for pumping blood in the human body?",
        answer: "Heart"
    },
    {
        question: "If the Moon blocks the light from the Sun, what do we call this event?",
        answer: "Solar eclipse"
    },
    {
        question: "What is the main gas that makes up the Earth’s atmosphere?",
        answer: "Nitrogen"
    },
    {
        question: "What do we call the document that gives a person the right to vote?",
        answer: "Ballot"
    },
    {
        question: "What do we call a set of instructions on how to cook a dish?",
        answer: "Recipe"
    },
    {
        question: "Which one is a form of renewable energy, wind or coal?",
        answer: "Wind"
    },
    {
        question: "What is the name of the large ocean between North America and Europe?",
        answer: "Atlantic Ocean"
    },
    {
        question: "What do we call the person who takes care of teeth and oral health?",
        answer: "Dentist"
    },
    {
        question: "How many wheels does a tricycle have?",
        answer: "Three"
    },
    {
        question: "What do you call the center of an atom?",
        answer: "Nucleus"
    },
    {
        question: "What is the name of the large, extinct animal that lived during prehistoric times?",
        answer: "Dinosaur"
    },
    {
        question: "What do we call the person who operates on patients in a hospital?",
        answer: "Surgeon"
    },
    {
        question: "How many days are there in a leap year?",
        answer: "366"
    },
    {
        question: "What is the name of the punctuation mark that shows excitement or emphasis?",
        answer: "Exclamation mark"
    },
    {
        question: "Which part of the body do we use for smelling?",
        answer: "Nose"
    },
    {
        question: "What do you call a building where plays and performances are shown?",
        answer: "Theater"
    },
    {
        question: "Which instrument is used to measure temperature, a thermometer or a barometer?",
        answer: "Thermometer"
    },
    {
        question: "What is the name of the green pigment in plants that helps in photosynthesis?",
        answer: "Chlorophyll"
    },
    {
        question: "How many players are there on a basketball team?",
        answer: "Five"
    },
    {
        question: "What do you call a doctor who specializes in treating the eyes?",
        answer: "Ophthalmologist"
    },
    {
        question: "What is the name of the musical instrument with six strings often played with a pick?",
        answer: "Guitar"
    }
];
let currentFlashcard = 0;
let quizStarted = false;

function startQuiz() {
    if (!quizStarted) {
        quizStarted = true;
        document.getElementById('prevButton').disabled = false;
        document.getElementById('nextButton').disabled = false;
        updateFlashcard();
        document.getElementById('flashcard').onclick = rotateCard;
    }
}

function updateFlashcard() {
    document.getElementById('question').innerText = flashcards[currentFlashcard].question;
    document.getElementById('answer').innerText = flashcards[currentFlashcard].answer;
    document.getElementById('counter').innerText = `${currentFlashcard + 1} out of ${flashcards.length}`;
    document.getElementById('flashcard').classList.remove('rotate');
}

function rotateCard() {
    document.getElementById('flashcard').classList.toggle('rotate');
}

function nextFlashcard() {
    currentFlashcard = (currentFlashcard + 1) % flashcards.length;
    updateFlashcard();
}

function previousFlashcard() {
    currentFlashcard = (currentFlashcard - 1 + flashcards.length) % flashcards.length;
    updateFlashcard();
}

// Initial setup
document.getElementById('counter').innerText = "";

import React, { useState } from "react";
import "./Questions.css";

const questions = {
    11: [
      {
        id:111,
        question: 'What is the capital of France?',
        options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
      },
      {
        id:112,
        question: 'Which is the largest planet in our solar system?',
        options: ['Mars', 'Jupiter', 'Venus', 'Saturn'],
      },
    ],
    12: [
      {id:121,
        question: 'What is the main ingredient in guacamole?',
        options: ['Tomato', 'Onion', 'Avocado', 'Cilantro'],
      },
      {
        id:122,
        question: 'Who wrote "Romeo and Juliet"?',
        options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
      },
    ],
    // Add more IDs and their associated questions as needed
  };

  function Questions(selectedSubContent) {
    const [selectedOptions, setSelectedOptions] = useState({});
  
    const handleOptionSelect = (questionId, option) => {
      setSelectedOptions((prevSelectedOptions) => ({
        ...prevSelectedOptions,
        [questionId]: option,
      }));

      
    };

    const handlesubmit=(e)=>
    {
       e.preventDefault();
     Object.keys(selectedOptions).map((i)=>{

      if(localStorage.getItem(i))
        {
            let data=JSON.parse(localStorage.getItem(i));
            localStorage.setItem(i,JSON.stringify([...data,selectedOptions[i]]));
        }
        else
        {
            localStorage.setItem(i,JSON.stringify([selectedOptions[i]]));
        }
     
     })
        

    }
  
    // const handleQuestionClick = (questionId) => {
    //   // Unselect the option if it was already selected, or select the first option
    //   const currentOption = selectedOptions[questionId];
    //   const newOption = currentOption ? null : questions[questionId][0].options[0];
    //   handleOptionSelect(questionId, newOption);
    // };
  
    return (
      <div className="App">
        <form>
          {Object.values(selectedSubContent).map((item) => {
            const id = item.id;
            if (questions[id]) {
              return questions[id].map((question) => (
                <div key={question.id} className="question">
                  <p>{question.question}</p>
                  {question.options.map((option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        value={option}
                        checked={selectedOptions[question.id] === option}
                        onChange={() => handleOptionSelect(question.id, option)}
                        
                            
                      />
                      {option}
                    </label>
                  ))}
                </div>
              ));
            }
            return null;
          })}
          <button onClick={handlesubmit} type="submit">Submit</button>
        </form>
      </div>
    );
  }

export default Questions;

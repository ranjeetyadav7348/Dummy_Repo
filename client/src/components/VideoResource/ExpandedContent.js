
import React, { useEffect, useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import Questions from "./Questions";

const ExpandedContent = ({
  selectedContent,
  selectedSubContent,
  onSubContentClick,

}) => {

  let arr=[];
  const [selectedOptions, setSelectedOptions] = useState({});
  const [isWatched, setIsWatched] = useState
  (
    
      
     [ 
      {
        id:11,
        isActive:false
      },
      {
        id:12,
        isActive:false
      },
      {
        id:13,
        isActive:false
      },
      {
        id:14,
        isActive:false
      },
    ]
    
  );


  
  const handlesubmit = (e) => {
    e.preventDefault();

   
    Object.keys(selectedOptions).map((i) => {

      // console.log(i," 0" ,selectedOptions[i]);
     // arr.push(i);
      
     // console.log(arr)
      if (localStorage.getItem("ansId")) {
        let data = JSON.parse(localStorage.getItem("ansId"));

        localStorage.setItem("ansId", JSON.stringify([...data, i]));
      }
      else {
        localStorage.setItem("ansId", JSON.stringify([i]));
      }

    })
   // localStorage.setItem("ansId",JSON.stringify(arr));
   setIsWatched((prevIsWatched) =>
   prevIsWatched.map((content) =>
     content.id === selectedSubContent.id ? { ...content, isActive: true } : content
   )
 );
   

  }
  
 // console.log("unfuijk",localStorage.getItem("ansId"));

  const watched1 = () => {
    const selectedQuestionIds = Object.keys(selectedOptions);

   // console.log("fd ",selectedQuestionIds);
    if (localStorage.getItem("ansId")) {
      const storedQuestionIds = JSON.parse(localStorage.getItem("ansId"));
      console.log("selectedQesId: ",selectedQuestionIds,"storeId: :",storedQuestionIds);
      return selectedQuestionIds.every((id) => storedQuestionIds.includes(id));
    }

    return false;
  };


  // useEffect(() => {
  //  // console.log("unfuijk",localStorage.getItem("ansId"));
   
  //   // console.log("returnvalue",returndata);
  //    setIsWatched( watched1());
  // }, [handlesubmit]);

  if (!selectedContent) {
    return <div>Select a content to view details</div>;
  }



  const handleOptionSelect = (questionId, option) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [questionId]: option,
    }));


  };





  const watched = (vid) => {
    if (localStorage.getItem("videoID")) {
      if (JSON.stringify(localStorage.getItem("videoID")).includes(vid)) {
        return true;
      }
    }
    return false;
  }



  const questionTrack = isWatched.find((item) => item.id === selectedSubContent?.id );


  console.log("bhai ye wala question track hai: ",questionTrack);


console.log(isWatched)
console.log(selectedSubContent) 

  return (
    <div className="expanded-content" style={{ borderRadius: '7px' }}>
      <h2>{selectedContent.title}</h2>
      <p>{selectedContent.description}</p>
      <div className="sub-content-list">
        {selectedContent.subContents.map((subContent) => {
        
         {/* const questionTrack=isWatched.map((item)=>{
              if(item.id==subContent.id)
              {
                return item.isActive;
              }
         }) */}

       

      
        return (
          <div
            key={subContent.id}
            onClick={() => onSubContentClick(subContent)}
            className={`sub-content-item ${selectedSubContent === subContent ? "selected" : ""}`}
          >
            {subContent.title}
            {watched(subContent.videoUrl)&&  questionTrack?.isActive && <GiCheckMark style={{ textAlign: 'right', marginLeft: '16px' }} />}
          </div>
          
        )})}
      </div>
      
      {selectedSubContent && (
        <div className="sub-content-details">
          <h3>{selectedSubContent.title}</h3>
          <p>
            <form>
              { selectedSubContent.questions.map((question) => (


                <div key={question.id} className="question">
                  <h5>{question.question}</h5>
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
              ))}
              <button onClick={handlesubmit} type="submit">Submit</button>
            </form>
          </p>
        </div>
      )}
    </div>
  );
};

export default ExpandedContent;

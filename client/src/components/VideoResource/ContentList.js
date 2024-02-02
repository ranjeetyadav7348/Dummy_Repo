// ContentList.js
import React, { useState } from "react";
import './VideoModal.css'

const ContentList = ({
  selectedContent,
  onContentClick,
  selectedSubContent,
}) => {
  // Dummy content data
  const [val,setVal]=useState(0);
  const contentData = [
    {
      id: 1,
      title: "Content 1",
      description: "Description for Content 1",
      subContents: [
        {
          id: 11,
          title: "SubContent 1.1",
          videoUrl: "https://youtu.be/boALQYYMbTI?si=Tn35iPwLK1uJ8pXS",
          questions:[
          { id: 12,
            question: 'Which is the largest planet in our solar system?',
            options: ['Mars', 'Jupiter', 'Venus', 'Saturn'],
           
          },
          {id: 13,
            question: 'Which is the largest planet in our solar system?',
            options: ['Mars', 'Jupiter', 'Venus', 'Saturn'],
           
          }
        ]
          
         
         
        },
        {
          id: 14,
          title: "SubContent 1.2",
          videoUrl: "https://www.youtube.com/watch?v=6z1U-kJ3xJE",
          questions:[
            
            {id:15,
              question: 'What is the capital of Virat?',
              options: ['Berlin', 'Madrid', 'Paris', 'Rome']},

              
            ]
        },
      ],
    },
    {
      id: 2,
      title: "Content 2",
      description: "Description for Content 2",
      subContents: [
        {
          id: 16,
          title: "SubContent 2.1",
          videoUrl: "https://www.youtube.com/watch?v=zFvLoiq58Nk",
          questions:[
            
              {id:17,
                question: 'Which is the largest planet in our colar system?',
              options: ['Mars', 'Jupiter', 'Venus', 'Saturn']},
              {id:18,
                question: 'Which is the largest planet in our solar system?',
              options: ['Mars', 'Jupiter', 'Venus', 'Saturn'],}
             
            ]
        },
        {
          id: 22,
          title: "SubContent 2.2",
          videoUrl: "https://www.youtube.com/watch?v=BWffRhi-EZs",
          questions:[
            {
              id:19,
              question: 'Which is the largest planet in our solar system?',
              options: ['Mars', 'Jupiter', 'Venus', 'Saturn']},
             {id:20,
              question: 'What is the capital of Falane?',
              options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
             }
            ]
        },
      ],
    },
   
  ];
 // console.log(selectedContent);
  return (
    <div className="content-list"  >
      {contentData.map((content) => (
        <div
          key={content.id}
          onClick={() => (onContentClick(content),setVal(content.id))}
         
          className={`content-item ${
            (val==content.id) ? "selected" : ""
          }`}  style={{borderRadius:'7px' }}
        >
        {/* {console.log(selectedContent)} */}
         {content.title}
        </div>
      ))}
    </div>
  );
};

export default ContentList;

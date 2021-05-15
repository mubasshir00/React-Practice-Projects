import { useState } from 'react';
import './App.css';
import questions from './data'
import Questioncomp from './Questioncomp';
function App() {
  // console.log(questions[0].info[1])
  const [Questions, setQuestions] = useState(questions)
  return (
    <>
     <div className="contentcontainer">
       <div className="contentwrapper">
          <h2>Frequently Asked Questions</h2>
          {
            Questions.map((question) => {
              return (
                <Questioncomp key={question.id} {...question} />
              )
            })
          }
       </div>
     </div>
    </>
  );
}

export default App;

/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
// import axios from 'axios';
import Question from './questions/question.jsx';
import { useProductsContext } from '../Context.jsx';

function QA({ setCurrentForm }) {
  const [input, setInput] = useState('');
  const [moreQuestions, setMoreQuestions] = useState(false);
  const handleMoreQuestions = () => {
    setMoreQuestions(!moreQuestions);
  };
  const handleSearch = () => {
    console.log(`You tried to search for ${input}`);
  };
  const handleAsk = () => {
    setCurrentForm('new question');
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  const { questionsData, loading } = useProductsContext();
  if (loading) {
    return <span />;
  }

  return (
    <div>
      <h3>Questions & Answers</h3>
      <input
        type="text"
        placeholder="Does this make me a better software engineer?"
        size="75"
        onChange={(e) => { setInput(e.target.value); }}
        onKeyDown={(e) => { handleKeyDown(e); }}
      />
      <button type="submit" onClick={handleSearch}>Search</button>

      <ul>
        { !moreQuestions ? (
          questionsData.results.slice(0, 1)
            .map((each) => (<Question data={each} key={each.question_id} />))
        ) : (
          questionsData.results.map((each) => (<Question data={each} key={each.question_id} />))
        )}

      </ul>
      <button type="submit" onClick={handleMoreQuestions}>
        { moreQuestions ? (<span>Collapse</span>)
          : (<span>See More Questions</span>) }
      </button>
      <button type="submit" onClick={handleAsk} width="50">Ask A Question</button>
    </div>
  );
}

export default QA;

import React, { useState } from 'react';

const FlamesCalculator = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [relationshipStatus, setRelationshipStatus] = useState('');
  
  const calculateRelationship = () => {
    const str1 = input1.toLowerCase();
    const str2 = input2.toLowerCase();

    if (!str1 || !str2) {
      setRelationshipStatus('Please Enter valid input');
      return;
    }

    let commonChars = 0;
    let remainingStr1 = '';
    let remainingStr2 = '';

    for (const char of str1) {
      if (str2.includes(char)) {
        commonChars++;
        str2.replace(char, '');
      } else {
        remainingStr1 += char;
      }
    }

    remainingStr2 = str2;

    const result = (remainingStr1.length + remainingStr2.length) % 6;

    switch (result) {
      case 1:
        setRelationshipStatus('Friends');
        break;
      case 2:
        setRelationshipStatus('Love');
        break;
      case 3:
        setRelationshipStatus('Affection');
        break;
      case 4:
        setRelationshipStatus('Marriage');
        break;
      case 5:
        setRelationshipStatus('Enemy');
        break;
      case 0:
        setRelationshipStatus('Siblings');
        break;
      default:
        setRelationshipStatus('Please Enter valid input');
    }
  };

  const clearInputs = () => {
    setInput1('');
    setInput2('');
    setRelationshipStatus('');
  };

  return (
    <>
   
    <div>
      <input
        type="text"
        name="name1"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
        data-testid="input1"
        placeholder="Enter First Name"
      />
      <input
        type="text"
        name="name2"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
        data-testid="input2"
        placeholder="Enter Second Name"
      />
      <button onClick={calculateRelationship} data-testid="calculate_relationship">
        Calculate Relationship Future
      </button>
      <button onClick={clearInputs} data-testid="clear">
        Clear
      </button>
    </div>
      <h3 data-testid="answer">{relationshipStatus}</h3>
      </>
  );
};

export default FlamesCalculator;

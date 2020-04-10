import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import InputField from './InputField';
import DropdownList from './DropdownList';

import MOCK_DATA from '../../MOCK_DATA.json';

const Container = styled.div`
  position: relative;
`;

const ContactSelection = () => {
  const [inputFocused, setInputFocused] = useState(false);
  const [input, setInput] = useState('');
  const [listExceedsHeight, setListExceedsHeight] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const inputElem = useRef(null);
  const listElem = useRef(null);

  const sortAndGetNames = people => {
    return people
      .filter(person => person.name)
      .map(person => person.name)
      .sort((a, b) => (a < b ? -1 : 1));
  };

  const names = sortAndGetNames(MOCK_DATA);

  const [currentNames, setCurrentNames] = useState(names);

  useEffect(() => {
    if (!input) {
      setCurrentNames(names);
    } else {
      const filteredNames = names.filter(name =>
        name.toLowerCase().includes(input.toLowerCase())
      );
      setCurrentNames(filteredNames);
    }
  }, [input]);

  const keyHandler = event => {
    console.log(event.key);
    switch (event.key.toLowerCase()) {
      case 'escape':
        inputElem.current.blur();
        break;
      case 'arrowdown':
        listElem.current.children[selectedIndex].style.background = '#f7f7f7';
        listElem.current.children[selectedIndex].style.color = '#4a4a4a';
        listElem.current.children[selectedIndex].focus();
        if (selectedIndex > 0) {
          listElem.current.children[selectedIndex - 1].style.background = '';
          listElem.current.children[selectedIndex - 1].style.color = '';
        }
        console.log(selectedIndex);
        setSelectedIndex(prevState => prevState + 1);
        console.log(selectedIndex);
        break;
      case 'arrowup':
        if (selectedIndex === 0) {
          setSelectedIndex(currentNames.length - 2);
        } else {
          setSelectedIndex(prevState => prevState - 1);
        }
        console.log(selectedIndex);

        listElem.current.children[selectedIndex].style.background = '#f7f7f7';
        listElem.current.children[selectedIndex].style.color = '#4a4a4a';

        if (selectedIndex < currentNames.length - 1) {
          listElem.current.children[selectedIndex + 1].style.background = '';
          listElem.current.children[selectedIndex + 1].style.color = '';
        }

        console.log(selectedIndex);

        break;
      default:
        break;
    }
  };

  // Check if dropdown list overflows the screen
  useEffect(() => {
    if (inputFocused) {
      const bottomPositionOfList =
        listElem.current.getBoundingClientRect().top + window.scrollX + 280;

      if (bottomPositionOfList > window.innerHeight) {
        setListExceedsHeight(true);
      }
    } else {
      setListExceedsHeight(false);
      setSelectedIndex(0);
    }
  }, [inputFocused]);

  return (
    <Container>
      <InputField
        ref={inputElem}
        inputFocused={inputFocused}
        setInputFocused={setInputFocused}
        input={input}
        setInput={setInput}
        onKeyDown={keyHandler}
      />
      <DropdownList
        ref={listElem}
        data={currentNames}
        setInput={setInput}
        reversed={listExceedsHeight}
        display={inputFocused}
      />
    </Container>
  );
};

export default ContactSelection;

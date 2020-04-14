import React, { useRef } from 'react';
import styled from 'styled-components';

import searchIcon from '../assets/research.png';
import arrowIcon from '../assets/down-arrow.png';

const Container = styled.div`
  width: ${props => props.theme.sizes.inputWidth};
  height: ${props => props.theme.sizes.inputHeight};
  color: ${props => props.theme.appearance.color};
  position: relative;
  margin: ${props => props.theme.sizes.inputMargin};
`;

const Input = styled.input.attrs(props => ({
  placeholder: props.focused ? 'Type or search...' : '',
  type: 'text',
}))`
  box-sizing: border-box;
  border: ${props => props.theme.appearance.border};
  border-radius: ${props => props.theme.appearance.borderRadius};
  width: ${props => props.theme.sizes.inputWidth};
  height: ${props => props.theme.sizes.inputHeight};
  font-size: ${props => props.theme.font.size};
  padding: 0 ${props => (props.focused ? '50px' : '20px')};
  transition: ${props => props.theme.appearance.transition};

  &:hover {
    border: ${props => props.theme.appearance.borderOnHover};
  }

  &:focus {
    outline: none;
    outline-offset: 0;
    border: ${props => props.theme.appearance.borderOnHover};
  }
`;

const Placeholder = styled.span`
  position: absolute;
  top: ${props => (props.input || props.focused ? '-20px' : '20px')};
  left: ${props => (props.input || props.focused ? '5px' : '30px')};
  font-family: ${props => props.theme.font.family};
  font-size: ${props =>
    props.input || props.focused ? '1rem' : props.theme.font.size};
  transition: ${props => props.theme.appearance.transition};
`;

const SearchIcon = styled.img.attrs(props => ({
  src: searchIcon,
  alt: 'Search icon',
}))`
  position: absolute;
  top: 22px;
  left: 20px;
  width: 20px;
  height: 20px;
  opacity: 0.8;
`;

const ArrowIcon = styled.img.attrs(props => ({
  src: arrowIcon,
  alt: 'Arrow icon',
}))`
  position: absolute;
  top: 25px;
  right: 20px;
  width: 20px;
  height: 20px;
  opacity: 0.5;
  cursor: pointer;
`;

const InputField = React.forwardRef(
  ({ inputFocused, setInputFocused, input, setInput, ...props }, ref) => {
    const inputElem = ref ? ref : useRef(null);

    return (
      <Container {...props}>
        {inputFocused && <SearchIcon />}
        <Input
          ref={inputElem}
          value={input}
          onFocus={() => setInputFocused(true)}
          // setTimeout to make the list disappear after setting the input
          onBlur={() => setTimeout(() => setInputFocused(false), 100)}
          focused={inputFocused}
          onChange={event => setInput(event.target.value)}
        />
        <Placeholder focused={inputFocused} input={input}>
          Contact
        </Placeholder>
        {!inputFocused && (
          <ArrowIcon
            onClick={() => {
              // setInputFocused to fix a bug causing the list appear
              // outside the screen for a moment
              setInputFocused(true);
              inputElem.current.focus();
            }}
          />
        )}
      </Container>
    );
  }
);

export default InputField;

// Icons made by <a href="https://www.flaticon.com/authors/google" title="Google">Google</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

// Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

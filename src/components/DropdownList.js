import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: ${props => (props.reversed ? '-350px' : '')};
  width: 410px;
  height: 280px;
  border: 1px solid #bfc5cd;
  border-radius: 5px;
  box-shadow: 0 5px 15px 0 rgba(74, 74, 74, 0.15);
  background: #ffffff;
  padding: 20px 0;
  overflow: scroll;
  z-index: 100;
`;

const List = styled.ul`
  list-style: none;
  color: #798697;
  font-family: sans-serif;
  font-size: 1.4rem;
  line-height: 30px;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

const ListItem = styled.li`
  padding: 10px 0 10px 20px;

  &:hover {
    color: #4a4a4a;
    background: #f7f7f7;
  }
`;

const DropdownList = React.forwardRef(
  ({ data, setInput, display, reversed }, ref) => {
    return (
      display && (
        <Container reversed={reversed}>
          <List ref={ref}>
            {data.map((item, index) => (
              <ListItem key={index} onClick={() => setInput(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Container>
      )
    );
  }
);

export default DropdownList;

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: ${props => (props.reversed ? '-350px' : '')};
  width: ${props => props.theme.sizes.listWidth};
  height: ${props => props.theme.sizes.listHeight};
  border: ${props => props.theme.appearance.border};
  border-radius: ${props => props.theme.appearance.borderRadius};
  box-shadow: ${props => props.theme.appearance.shadow};
  background: ${props => props.theme.appearance.backgroundColor};
  padding: ${props => props.theme.sizes.listPadding};
  overflow: scroll;
  z-index: 100;
`;

const List = styled.ul`
  list-style: ${props => props.theme.appearance.listStyle};
  color: ${props => props.theme.appearance.color};
  font-family: ${props => props.theme.font.family};
  font-size: ${props => props.theme.font.size};
  line-height: ${props => props.theme.font.lineHeight};
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

const ListItem = styled.li`
  padding: 10px 0 10px 20px;

  &:hover {
    color: ${props => props.theme.appearance.colorOnHover};
    background: ${props => props.theme.appearance.backgroundOnHover};
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

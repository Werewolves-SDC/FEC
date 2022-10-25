import styled from 'styled-components';

export const GridSpan = styled.span`
  grid-area: ${(props) => props.area};
  justify-self: ${(props) => (props.justify ? props.justify : 'center')};
  white-space: nowrap;
  overflow: visible;
`;
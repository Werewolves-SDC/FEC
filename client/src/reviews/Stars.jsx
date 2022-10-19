import React from 'react';
import styled from 'styled-components';

export default function Stars() {
  return (
    <StyledStars />
  );
}

const StyledStars = styled.div`
  --percent: calc(var(--rating) / 5 * 100%);
  display: inline-block;
  font-size: var(--star-size);
  font-family: Times;
  line-height: 1;

  &::before {
    content: '★★★★★';
    letter-spacing: 3px;
    background: linear-gradient(90deg, #fc0 var(--percent), rgba(180, 180, 180) var(--percent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
import React from 'react';
import { TitleStyled } from './styles';

const Title: React.FC = ({ children }) => {
  return <TitleStyled>{children}</TitleStyled>;
};

export default Title;

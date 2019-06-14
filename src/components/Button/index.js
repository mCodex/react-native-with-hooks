import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
  margin: 10px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.colors.textColor};
  border: 2px solid ${props => props.theme.colors.buttonColor};
`;

export default Button;

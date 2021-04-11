import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';


const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {

  const height = size === "small" ? 24 : 36;
  return <Wrapper width={width} height={height}>
    <IconWrapper>
      <Icon id={icon} size={height - 8} strokeWidth={size === "small" ? 1 : 2}></Icon>
      <VisuallyHidden>
        {label}
      </VisuallyHidden>
    </IconWrapper>
    <Input placeholder={placeholder} size={size}></Input>

  </Wrapper>;
};

const Wrapper = styled.div`
  position: relative;
  width: ${p => p.width}px;
  padding-left: ${p => p.height + 12}px;
  padding-top: ${p => (p.height - 12) / 3 - 2}px;
  height: ${p => p.height}px;
  border: 2px solid transparent;
  border-radius: 2px;
  border-bottom: 1px solid ${COLORS.black};

  &:focus-within {
    border: 2px solid #4374CB;
    border-radius: 2px;
  }
`;

const Input = styled.input`
  width: 100%;
  border: none;
  font-size: ${p => (p.size === "small" ? 14 : 18) / 16 + "rem"};
  font-weight: 700;
  color: ${COLORS.gray700};

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    border: none;
    outline: none;
  }
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 4px;
`

export default IconInput;

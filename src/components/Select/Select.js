import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <StyledSelect value={value} onChange={onChange}>
      {children}
    </StyledSelect>
  );
};

const StyledSelect = styled.select`
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  border: none;
  -webkit-appearance: none;

  &:hover {
    color: ${COLORS.black};
  }
`

export default Select;

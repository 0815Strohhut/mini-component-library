/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';


const SIZES = {
  small: {
    "--bar": "8px"
  },
  medium: {
    "--bar": "12px"
  },
  large: {
    "--bar": "24px",
    "--barPadding": "4px"
  }
}

const ProgressBar = ({ value, size }) => {
  const boundedValue = Math.max(0, Math.min(100, value));
  const styles = SIZES[size];
  return <Wrapper style={styles}>
    <BarContainer>
      <CurrentBar value={boundedValue} aria-valuenow={boundedValue} aria-valuemin="0" aria-valuemax="100">
        <VisuallyHidden>
          Current Progress
        </VisuallyHidden>
      </CurrentBar>
    </BarContainer>
  </Wrapper>;
};

const BarContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
`

const CurrentBar = styled.div`
  width: ${p => p.value}%;
  height: 100%;
  background-color: ${COLORS.primary};
`;

const Wrapper = styled.div`
  width: 150px;
  height: var(--bar);
  padding: var(--barPadding);
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35)
`;


export default ProgressBar;

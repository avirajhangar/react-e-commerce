import React from 'react';

import { CustomButtomDiv } from './custom-button.styles';

const CustomBtn = ({ children, ...otherProps }) => (
  <CustomButtomDiv {...otherProps}>
    {children}
  </CustomButtomDiv>
)

export default CustomBtn;
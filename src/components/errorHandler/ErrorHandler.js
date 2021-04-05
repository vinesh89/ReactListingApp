import React from 'react';
import { ErrorMessageForErrorStatus } from '../../utils/constants';
import { ListItem } from '../UIComponents/list';
import Styled from 'styled-components';

const ErrorContainer = Styled(ListItem)`
  margin: auto;
  width: 60%;
  @media (max-width: 700px) {
    width: 90%;
  }
`


const ErrorHandler = (props) => {
    const { errorStatus } = props;
    const errorMessage = ErrorMessageForErrorStatus(errorStatus);

    return(
        <ErrorContainer>
            <h2>{errorMessage.title}</h2>
            <h4>{errorMessage.body}</h4>
        </ErrorContainer>
    )
}

export default ErrorHandler;
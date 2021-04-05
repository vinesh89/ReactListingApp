import React, { useState } from 'react';
import { ListItem } from '../components/UIComponents/list';
import Styled from 'styled-components';
import { ErrorMessageForErrorStatus } from '../utils/constants';

const ErrorCardItem = Styled(ListItem)`
    margin: auto; 
    width: 60%;
    @media (max-width: 800px) {
        width: 100%;
    }
`

const withErrorHandler = (WrappedComponent) => {
  return props => {

    const [errorResponse, setErrorResponse] = useState();
    const [errorMessage, setErrorMessage] = useState({});

    const handleError = (error) => {
        setErrorResponse(error);
        setErrorMessage(ErrorMessageForErrorStatus(error.response.status));
    } 

    return (
        <div>
            {errorResponse &&
                <ErrorCardItem>
                    <h2>{errorMessage.title}</h2>
                    <h4>{errorMessage.body}</h4>
                </ErrorCardItem>
            }
            <WrappedComponent handleErrorResponse={(error) => handleError(error)} {...props} />
        </div>
    );
  };
};

export default withErrorHandler;

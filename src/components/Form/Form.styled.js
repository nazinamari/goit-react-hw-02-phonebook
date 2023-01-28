import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormError = ({ name }) => {
    return (
        <ErrorMessage
            name={name}
            render={message => <ErrorText>{message}</ErrorText>}
        />
    );
};

export const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Input = styled(Field)`
    font-size: 30px;
    `;

export const ErrorText = styled.p`
color: red;
`;

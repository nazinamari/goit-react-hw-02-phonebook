// import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Form, Input, Label } from './Filter.styled';

export const Filter = ({ onChange, value }) => {
    const filterInputId = nanoid();

    return (
        <Form>
            <Label htmlFor={filterInputId}>Find contacts by name
                <Input
                    type="text"
                    onChange={onChange}
                    Value={value}
                />
            </Label>
        </Form>
    )
}
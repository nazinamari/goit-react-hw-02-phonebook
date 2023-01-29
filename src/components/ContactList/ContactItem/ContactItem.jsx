import PropTypes from 'prop-types';
import { ContactWrapper } from './ContatcItem.styled';

export const Contact = ({ name, number, id, onClickDelete }) => {
    return (
        <ContactWrapper>
            {name}: {number}
            <button type="button" onClick={() => onClickDelete(id)}>Delete</button>
        </ContactWrapper>
    );
};

Contact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onClickDelete: PropTypes.func.isRequired,
}.isRequired;

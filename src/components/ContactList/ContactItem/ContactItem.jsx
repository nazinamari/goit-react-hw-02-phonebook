import PropTypes from 'prop-types';
import { ContactItemStyle } from './ContatcItem.styled';

export const ContactItem = ({ name, number, id, onClickDelete }) => {
    return (
        <ContactItemStyle>
            {name}: {number}
            <button type="button" onClick={() => onClickDelete(id)}>Delete</button>
        </ContactItemStyle>
    );
};

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onClickDelete: PropTypes.func.isRequired,
}.isRequired;

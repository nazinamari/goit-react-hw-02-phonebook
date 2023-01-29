import PropTypes from 'prop-types';
import { ItemWrap, ItemContact } from './ContatcItem.styled';

export const ContactItem = ({ name, number, id, onClickDelete }) => {
    return (
        <ItemWrap>
            <ItemContact>
                {name}: {number}
            </ItemContact>
            <button type="button" onClick={() => onClickDelete(id)}>Delete</button>
        </ItemWrap>
    );
};

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onClickDelete: PropTypes.func.isRequired,
}.isRequired;

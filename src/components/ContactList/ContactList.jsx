import PropTypes from 'prop-types';
import { ContactItem  } from './ContactItem/ContactItem';
import { ContactListStyle, ContactListItem } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
    return (
        <ContactListStyle>
            {contacts.map(({ id, name, number }) => (
                <ContactListItem key={id}>
                    <ContactItem
                        id={id}
                        name={name}
                        number={number}
                        onClickDelete={onDelete}
                    />
                </ContactListItem>
            ))}
        </ContactListStyle>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,
    onClickDelete: PropTypes.func.isRequired,
}.isRequired;
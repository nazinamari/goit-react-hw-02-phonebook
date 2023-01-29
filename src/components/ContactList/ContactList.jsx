import PropTypes from 'prop-types';
import { ContactItem  } from './ContactItem/ContactItem';
import { List, ListItem } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
    return (
        <List>
            {contacts.map(({ id, name, number }) => (
                <ListItem key={id}>
                    <ContactItem
                        id={id}
                        name={name}
                        number={number}
                        onClickDelete={onDelete}
                    />
                </ListItem>
            ))}
        </List>
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
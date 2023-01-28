// import PropTypes from 'prop-types';
// import { Box } from '../utils/Box';
import { ContactItem  } from './ContactItem/ContactItem';


export const ContactList = ({ contacts, onDelete }) => {
    return (
        <ul>
            {contacts.map(({ id, name, number }) => (
                <li key={id}>
                    <ContactItem
                        id={id}
                        name={name}
                        number={number}
                        onClickDelete={onDelete}
                    />
                </li>
            ))}
        </ul>
    );
};
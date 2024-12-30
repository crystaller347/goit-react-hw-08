import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice.js';
import Contact from "../Contact/Contact.jsx";

export default function ContactList() {
    const filteredContacts = useSelector(selectFilteredContacts);

    return (
        <ul className={css.list}>
            {filteredContacts.map((contact) => (
                <li className={css.item} key={contact.id}>
                    <Contact data={contact}></Contact>
                </li>
            ))}
        </ul>
    )
}
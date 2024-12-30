import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps.js';
import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

export default function Contact({ data: { id, name, number } }) {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(id));

    return (
        <div className={css.container}>
            <div>
                <p className={css.text}><FaUser className={css.icon} size="14" />{name}</p>
                <p className={css.text}><FaPhone className={css.icon} size="14" />{number}</p>
            </div>
            <button className={css.button} type='button' onClick={handleDelete}>Delete</button>
        </div>
    )
}
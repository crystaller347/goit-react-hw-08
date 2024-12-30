import css from './ContactForm.module.css';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps.js';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function ContactForm() {
    const nameId = useId()
    const numberId = useId()
    const dispatch = useDispatch();

    const initialValues = {
        name: "",
        number: "",
    }

    const handleSubmit = (values, actions) => {
        dispatch(
            addContact({
                name: values.name.trim(),
                number: values.number.trim(),
            })
        );
        actions.resetForm();
    }

    const validationScheme = Yup.object().shape({
        name: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required"),
        number: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required"),
    })

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationScheme}>
            <Form className={css.container}>
                <div className={css.textContainer}>
                    <label htmlFor={nameId}>Name</label>
                    <Field type="text" name="name" id={nameId}></Field>
                    <ErrorMessage name='name' component="span"></ErrorMessage>
                </div>
                <div className={css.textContainer}>
                    <label htmlFor={numberId}>Number</label>
                    <Field type="text" name="number" id={numberId}></Field>
                    <ErrorMessage name="number" component="span"></ErrorMessage>
                </div>
                <button className={css.button} type='submit'>Add contact</button>
            </Form>
        </Formik>
    )
}
import { useState } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { FormEl } from './ContactForm.styled';

export default function ContactForm({ onSubmit }) {
  const [name] = useState('');
  const [number] = useState('');

  const value = { name, number };

  const schema = () => {
    return yup.object().shape({
      name: yup.string().min(4).max(32).required(),
      number: yup.string().min(6).max(16).required(),
    });
  };

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const newState = {
      name,
      number,
    };
    onSubmit(newState);

    resetForm();
  };

  return (
    <Formik
      initialValues={value}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormEl>
        <label htmlFor="nameId">Name</label>
        <Field
          type="text"
          name="name"
          placeholder="Rosie Simpson"
          id="nameId"
        />
        <ErrorMessage name="name" />
        <label htmlFor="numId">Number</label>
        <Field
          type="tel"
          name="number"
          placeholder="066-459-12-56"
          id="numId"
        />
        <ErrorMessage name="number" />

        <button type="submit">Add contact</button>
      </FormEl>
    </Formik>
  );
}

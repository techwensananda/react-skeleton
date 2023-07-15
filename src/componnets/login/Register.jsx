import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const RegisterForm = () => {
  const initialValues = {
    email: '',
    password: '',
    fullName: '',
    lastName: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .required('Required')
      .min(8, 'Password must be at least 8 characters'),
    fullName: Yup.string().required('Required').test('no-leading-space', 'First name cannot start with a space', (value) => {
        return value.trim().length > 0;
      }).matches(/^[a-zA-Z]+(?: [a-zA-Z]+)?$/, 'First name can only contain letters')
      .required('Required')
  });
  const handleKeyPress = (event, value) => {
    if (event.key === ' ' && value.trim() === '') {
      event.preventDefault();
    }
  };

  const handleSubmit = (values) => {
    console.log(values);
    // Perform your registration logic here
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="email">Email</label>
          <Field type="text" id="email" name="email" />
          <ErrorMessage name="email" component="div" className="error" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage name="password" component="div" className="error" />
        </div>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <Field type="text" id="fullName" name="fullName"    onKeyPress={(event) => handleKeyPress(event, event.target.value)} />
          <ErrorMessage name="fullName" component="div" className="error" />
        </div>
     
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;

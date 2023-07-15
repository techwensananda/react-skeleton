import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
  });

  const handleSubmit = (values) => {
    console.log(values);
    // Perform your login logic here
  };
  const handleKeyPress = (event) => {
    if (event.key === ' ') {
      event.preventDefault();
    }
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
          <Field type="text" id="email" name="email"   onKeyPress={handleKeyPress}/>
          <ErrorMessage name="email" component="div" className="error" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field type="password" id="password" name="password"  onKeyPress={handleKeyPress} />
          <ErrorMessage name="password" component="div" className="error" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;

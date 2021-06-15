import { Button, TextField } from '@material-ui/core';
import { CheckBox } from '@material-ui/icons';
import { Field, Form, Formik } from "formik";
import React from 'react';

const App: React.FC = () => {
  return (
    <div>
      <Formik
        initialValues={
          {
            firstName: "",
            lastName: "",
            isTall: false,
            cookies: []
          }
        }
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          // Make async call
          console.log('submit:', data);
          setSubmitting(false);
        }}
      >
        {(
          {
            values,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit
          }
        ) => (
          <Form>
            <div>
              <Field
                placeholder="first name"
                name="firstName"
                type="input"
                as={TextField}
              />
            </div>
            <div>
              <Field
                placeholder="last name"
                name="lastName"
                type="input"
                as={TextField}
              />
            </div>
            <Field
              name="isTall"
              type="checkbox"
              as={CheckBox}
            />
            <div>Cookies:</div>
            <Field
              name="cookies"
              type="checkbox"
              value="chocolate chip"
              as={CheckBox}
            />
            <Field
              name="cookies"
              type="checkbox"
              value="snickerdoodle"
              as={CheckBox}
            />
            <Field
              name="cookies"
              type="checkbox"
              value="sugar"
              as={CheckBox}
            />
            <div>
              <Button
                disabled={isSubmitting}
                type="submit"
              >
                submit
              </Button>
            </div>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;

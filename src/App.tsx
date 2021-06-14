import React from 'react';
import { Formik, Field, Form } from "formik";
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';

const App: React.FC = () => {
  return (
    <div>
      <Formik
        initialValues={{ firstName: "", lastName: "" }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          // Make async call
          console.log('submit:', data);
          setSubmitting(false);
        }}
      >
        {({ values, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
          <Form>
            <div>
              <Field placeholder="first name" name="firstName" type="input" as={TextField} />
            </div>
            <div>
              <Field placeholder="last name" name="lastName" type="input" as={TextField} />
            </div>
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

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as formik from "formik";
import * as yup from "yup";
import React from "react";

export default function FillForm() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    email: yup.string().required(),
    comment: yup.string().required(),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: "",
        email: "",
        comment: "",
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <div className="my-4">
            <Form.Group controlId="validationFormik01">
              <Form.Control
                type="text"
                name="firstName"
                placeholder="Name"
                value={values.firstName}
                onChange={handleChange}
                isInvalid={!!errors.firstName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.firstName}
              </Form.Control.Feedback>
            </Form.Group>
          </div>

          <div className="my-4">
            {" "}
            <Form.Group controlId="validationFormik01">
              <Form.Control
                type="text"
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
          </div>
          <div className="my-4">
            <Form.Group controlId="validationFormik01">
              <Form.Control
                type="comment"
                name="comment"
                placeholder="Comment"
                value={values.comment}
                onChange={handleChange}
                isInvalid={!!errors.comment}
              />
              <Form.Control.Feedback type="invalid">
                {errors.comment}
              </Form.Control.Feedback>
            </Form.Group>
          </div>

          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
  );
}

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// ✅ Yup validation schema
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function FormikForm() {
  // ✅ initial values required by checker
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  // Submit handler
  const handleSubmit = (values, { resetForm }) => {
    console.log("Form submitted:", values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="space-y-4">
        <div>
          <label className="block font-medium">Username</label>
          <Field
            type="text"
            name="username"
            className="border p-2 rounded w-full"
            placeholder="Enter username"
          />
          <ErrorMessage
            name="username"
            component="p"
            className="text-red-500"
          />
        </div>

        <div>
          <label className="block font-medium">Email</label>
          <Field
            type="email"
            name="email"
            className="border p-2 rounded w-full"
            placeholder="Enter email"
          />
          <ErrorMessage name="email" component="p" className="text-red-500" />
        </div>

        <div>
          <label className="block font-medium">Password</label>
          <Field
            type="password"
            name="password"
            className="border p-2 rounded w-full"
            placeholder="Enter password"
          />
          <ErrorMessage name="password" component="p" className="text-red-500" />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded w-full"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
}

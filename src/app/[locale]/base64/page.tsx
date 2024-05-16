"use client";
import InputField from "components/CustomFields/InputField";
import { Button } from "components/ui/button";
import { Field, Form, Formik } from "formik";
import { useState } from "react";

enum mode {
  decode = 0,
  encode = 1,
}

const Base64Page = () => {
  const [decodeMode, setDecodeMode] = useState(mode.decode);

  return (
    <div className="component:Base64Page">
      <Formik initialValues={{ input: "" }} onSubmit={() => {}}>
        {() => {
          return (
            <Form className="flex flex-col gap-3">
              <Field
                component={InputField}
                name="input"
                label="Input"
                placeholder="Type or paste here..."
                className="h-40"
                isTextArea
              />

              <Button type="submit">Decode</Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Base64Page;

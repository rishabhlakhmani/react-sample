import React, { ChangeEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./note-form.component.scss";
import { Note } from "../../../../models/note.interface";

interface Props {
  formData?: Note;
  handleSave: (values: Note) => void;
}

const defaultFormValue: Note = {
  id: "",
  content: "",
};

export default function NoteForm({ formData, handleSave }: Props): JSX.Element {
  const [formValues, setFormvalues] = useState(formData || defaultFormValue);

  const onChnage = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setFormvalues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Form className="w-100">
      <Form.Group className="mb-3" controlId="noteContent">
        <Form.Label>Note Text</Form.Label>
        <Form.Control
          type="text"
          name="content"
          value={formValues.content}
          onChange={onChnage}
          placeholder="Enter Note Text"
          required
        />
      </Form.Group>

      <Button
        onClick={() => handleSave(formValues)}
        disabled={!formValues.content}
        type="submit"
      >
        Save
      </Button>
    </Form>
  );
}

import React from "react";
import { Button, Table } from "react-bootstrap";
import { Note } from "../../../../models/note.interface";

interface Props {
  notes: Note[];
  editNote: (noteId: string) => void;
}

export default function NoteList({
  notes,
  editNote,
}: Props): JSX.Element {
  return (
    <Table striped bordered hover responsive className="w-100">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>-</th>
        </tr>
      </thead>
      <tbody>
        {notes.map((note: Note, index) => (
          <tr key={note.id}>
            <td>{index + 1}</td>
            <td>{note.content}</td>
            <td>
              <Button
                variant="secondary"
                onClick={() => editNote(note.id)}
              >
                Edit
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

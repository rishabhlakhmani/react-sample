import React from "react";
import { Note } from "../../../../models/note.interface";
import PageLayout from "../../../../shared/components/page-layout/page-layout.component";
import { useGoBack } from "../../../../shared/hooks/navigate-back.hook";
import NoteForm from "../../components/note-form/note-form.component";
import { noteHooks } from "../../hooks/note.hook";

export default function AddNote(): JSX.Element {
  const goBack = useGoBack();
  const addNewNote = noteHooks.useAddNote();
  const navigateToNotesList = noteHooks.useNavigateToNotesList();

  const handleSave = (note: Note) => {
    addNewNote(note).then(() => {
      navigateToNotesList();
    });
  };

  return (
    <PageLayout
      title="Add Note"
      content={<NoteForm handleSave={handleSave} />}
      leftButtonText="Back"
      onLeftBtnClick={goBack}
    />
  );
}

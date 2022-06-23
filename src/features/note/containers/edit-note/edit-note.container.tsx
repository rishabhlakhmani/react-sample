import React from "react";
import { useParams } from "react-router-dom";
import { Note } from "../../../../models/note.interface";
import PageLayout from "../../../../shared/components/page-layout/page-layout.component";
import { useGoBack } from "../../../../shared/hooks/navigate-back.hook";
import NoteForm from "../../components/note-form/note-form.component";
import { noteHooks } from "../../hooks/note.hook";

export default function AddNote(): JSX.Element {
  const goBack = useGoBack();
  let { id } = useParams();
  const editNote = noteHooks.useEditNote();
  const note = noteHooks.useGetNoteById(id || "");
  const navigateToNotesList = noteHooks.useNavigateToNotesList();

  const handleSave = (note: Note) => {
    editNote(note).then(() => {
      navigateToNotesList();
    });

    // Approach 2:  Without API Call
    // editNote(note);
    // navigateToNotesList();
  };

  if (!note)
    return (
      <PageLayout
        title="Error"
        content={<h4>Invalid URL</h4>}
        leftButtonText="Back"
        onLeftBtnClick={goBack}
      />
    );

  return (
    <PageLayout
      title="Edit Note"
      content={<NoteForm formData={note} handleSave={handleSave} />}
      leftButtonText="Back"
      onLeftBtnClick={goBack}
    />
  );
}

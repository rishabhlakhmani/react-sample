import React, { useEffect } from "react";
import PageLayout from "../../../../shared/components/page-layout/page-layout.component";
import { useGoBack } from "../../../../shared/hooks/navigate-back.hook";
import NoteList from "../../components/note-list/note-list.container";

import { noteHooks } from "../../hooks/note.hook";

export default function Notes(): JSX.Element {
  const notes = noteHooks.useGetNotes();
  const fetchNotes = noteHooks.useFetchNotes();
  const navigateToAddNewPage = noteHooks.useNavigateToAddNote();
  const navigateToEditPage = noteHooks.useNavigateToEditNote();
  const goBack = useGoBack();

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  return (
    <PageLayout
      title="Note List"
      content={
        notes.length ? (
          <NoteList notes={notes} editNote={navigateToEditPage} />
        ) : (
          <div> No Notes available. </div>
        )
      }
      leftButtonText="Back"
      rightButtonText="Add New"
      onRightBtnClick={navigateToAddNewPage}
      onLeftBtnClick={goBack}
    />
  );
}

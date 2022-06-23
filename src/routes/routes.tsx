import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Notes = React.lazy(
  () => import("../features/note/containers/notes/notes.container")
);

const AddNote = React.lazy(
  () => import("../features/note/containers/add-note/add-note.container")
);

const EditNote = React.lazy(
  () => import("../features/note/containers/edit-note/edit-note.container")
);

export default function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/notes" />} />
      <Route
        path="/notes"
        element={
          <React.Suspense fallback={<>Loading...</>}>
            <Notes />
          </React.Suspense>
        }
      />
      <Route
        path="/note/add"
        element={
          <React.Suspense fallback={<>Loading...</>}>
            <AddNote />
          </React.Suspense>
        }
      />

      <Route
        path="/note/edit/:id"
        element={
          <React.Suspense fallback={<>Loading...</>}>
            <EditNote />
          </React.Suspense>
        }
      />
    </Routes>
  );
}

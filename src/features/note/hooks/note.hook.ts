import { unwrapResult } from "@reduxjs/toolkit";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Note } from "../../../models/note.interface";
import { useAppDispatch } from "../../../store";
import { noteSelectors } from "../../../store/note/note.selector";
import { noteActions } from "../../../store/note/note.slice";
import {
  addNewNote,
  editNote,
  fetchNotes,
} from "../../../store/note/note.thunk";

const useGetNotes = (): Note[] => useSelector(noteSelectors.getAllNotes);

const useGetNoteById = (id: string): Note | null =>
  useSelector(noteSelectors.getNoteById(id));

const useFetchNotes = (): (() => void) => {
  const dispatch = useAppDispatch();

  return useCallback(() => dispatch(fetchNotes()), [dispatch]);
};

const useAddNote = (): ((note: Note) => Promise<any>) => {
  const dispatch = useAppDispatch();

  return useCallback(
    (note) => dispatch(addNewNote(note)).then(unwrapResult),
    [dispatch]
  );
};

const useEditNote = (): ((Note: Note) => Promise<any>) => {
  const dispatch = useAppDispatch();

  return useCallback(
    (Note) => dispatch(editNote(Note)).then(unwrapResult),
    [dispatch]
  );
};

// Approach 2:  Without API Call
// const useEditNote = (): ((note: Note) => void) => {
//   const dispatch = useDispatch();

//   return useCallback(
//     (note) => dispatch(noteActions.editNote({ note })),
//     [dispatch]
//   );
// };


const useNavigateToAddNote = (): (() => void) => {
  const navigate = useNavigate();

  return useCallback(() => navigate("/note/add"), [navigate]);
};

const useNavigateToEditNote = (): ((id: string) => void) => {
  const navigate = useNavigate();

  return useCallback((id: string) => navigate(`/note/edit/${id}`), [navigate]);
};

const useNavigateToNotesList = (): (() => void) => {
  const navigate = useNavigate();

  return useCallback(() => navigate("/notes"), [navigate]);
};

export const noteHooks = {
  useGetNotes,
  useGetNoteById,
  useEditNote,
  useFetchNotes,
  useNavigateToAddNote,
  useAddNote,
  useNavigateToEditNote,
  useNavigateToNotesList,
};

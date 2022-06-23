import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";
import { NoteState } from "./note.slice";

const getNoteState = (state: RootState): NoteState => state.note;

const getAllNotes = createSelector(
  getNoteState,
  (state) => state.notes
);

const getNoteById = (id:string) => createSelector(
  getNoteState,
  (state) => state.notes.find((item) => item.id === id) || null
);

export const noteSelectors = {
  getAllNotes,
  getNoteById,
};

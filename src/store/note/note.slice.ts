import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mockResponse } from "../../mocks/notes.mock";
import { Note } from "../../models/note.interface";
import { updateItem } from "../../shared/helpers/update-item.helper";
import { addNewNote, editNote, fetchNotes } from "./note.thunk";

export interface NoteState {
  notes: Note[];
}

const initialState: NoteState = {
  notes: mockResponse.notes,
};

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    //Approach 2: (Will only update state without api call)
    editNote(state, action: PayloadAction<{ note: Note }>): void {
      state.notes = updateItem(state.notes, action.payload.note);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchNotes.fulfilled, (state, action) => {
        state.notes = [...action.payload];
      })
      .addCase(addNewNote.fulfilled, (state, action) => {
        state.notes = [...state.notes, action.payload];
      })
      .addCase(editNote.fulfilled, (state, action) => {
        state.notes = updateItem(state.notes, action.payload);
      });
  },
});

export const noteActions = noteSlice.actions;
export default noteSlice.reducer;

import { createAsyncThunk } from "@reduxjs/toolkit";
import { v1 as uuid } from 'uuid';
import { noteHooks } from "../../features/note/hooks/note.hook";

import { Note } from "../../models/note.interface";
import { apiUrl } from "../../shared/constants/api.constant";

export const fetchNotes = createAsyncThunk(
  "note/fetchNotes",
  async () => {
    // const response = await axios.get(`${apiUrl}/note/all`);
    // return response.data;
    return noteHooks.useGetNotes();
  }
);

export const editNote = createAsyncThunk(
  "note/editNote",
  async (note: Note) => {
    // const response = await axios.put(`${apiUrl}/note/${note.id}`, note);
    // return response.data;
    return note
  }
);

export const addNewNote = createAsyncThunk(
  "note/addNewNote",
  async (note: Note) => {
    // const response = await axios.post(`${apiUrl}/note`, note);
    // return response.data;
    return {
      id: uuid() as string,
      content: note.content as string
    };
  }
);

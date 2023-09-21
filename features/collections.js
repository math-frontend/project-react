import { createSlice } from '@reduxjs/toolkit'

import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from '../plugins/firebase'

const initialState = {
  userCurrent: 0
}

export const collectionSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    view: () => {},
    add: async (state, actions) => {
      try {
        const docRef = await addDoc(collection(db, "users"), {
          first: "Alan",
          middle: "Mathison",
          last: "Turing",
          born: 1912
        });

        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
    edit: (state, actions) => {
      console.log('edit', state, actions)
    },
    att: (state, actions) => {
      console.log('att', state, actions)
    },
    remove: (state, actions) => {
      console.log('remove', state, actions)
    }
  },
})

export const { add, edit, att, remove } = collectionSlice.actions
export default collectionSlice.reducer
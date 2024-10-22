import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Comment } from '../interfaces/interfaces'

export interface commentsState {
  value: string,
  comments: Comment[]
}

const initialState: commentsState = {
  value: '',
  comments: []
}

export const comments = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setComments: (state, action: PayloadAction<Comment[]>) => {
      state.comments = [...state.comments, ...action.payload]
    },
    addComment: (state, action: PayloadAction<string>) => {
      state.comments = []
    }
  },
})

export const { setComments, addComment } = comments.actions

export default comments.reducer
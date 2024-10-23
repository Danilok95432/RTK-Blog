import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Comment } from '../interfaces/interfaces'

export interface commentsState {
  id: number,
  comments: Comment[]
}

const initialState: commentsState = {
  id: JSON.parse(localStorage.getItem('id') ?? '1000'),
  comments: JSON.parse(localStorage.getItem('comments') ?? '[]')
}

export const comments = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setComments: (state, action: PayloadAction<Comment[]>) => {
      const existingComments = new Set(state.comments.map(comment => comment.id))
      const newComments = action.payload.filter(comment => !existingComments.has(comment.id));
      if (newComments.length > 0) {
        state.comments.push(...newComments); // Добавляем только новые комментарии
        localStorage.setItem('comments', JSON.stringify(state.comments)); // Сохраняем в localStorage
      }
    },
    addComment: (state, action: PayloadAction<Comment>) => {
      let currentId = JSON.parse(localStorage.getItem('id') ?? '1000');
      action.payload.id = currentId;
      state.comments.push(action.payload);
      localStorage.setItem('comments', JSON.stringify(state.comments));
      let nextId = currentId + 1;
      localStorage.setItem('id', String(nextId));
      console.log('Current ID:', currentId, 'Next ID:', nextId);
    },
  },
})

export const { setComments, addComment } = comments.actions

export default comments.reducer
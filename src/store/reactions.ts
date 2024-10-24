import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Reaction, AddReactionPayload } from "../interfaces/interfaces";

export interface reactionsState {
  reactions: Reaction[];
}

const initialState: reactionsState = {
  reactions: [],
};

export const reactions = createSlice({
  name: "reactions",
  initialState,
  reducers: {
    addReaction: (state, action: PayloadAction<AddReactionPayload>) => {
      const { postId, commentId, reactionType } = action.payload;
      const existingReactionIndex = state.reactions.findIndex(
        (reaction) =>
          (reaction.postId === postId && reaction.commentId === null) ||
          (reaction.commentId === commentId && reaction.postId === null)
      );

      if (existingReactionIndex !== -1) {
        const existingReaction = state.reactions[existingReactionIndex];
        if (
          (reactionType === "like" && existingReaction.like) ||
          (reactionType === "dislike" && existingReaction.dislike)
        ) {
          state.reactions.splice(existingReactionIndex, 1);
        } else {
          state.reactions[existingReactionIndex] = {
            like: reactionType === "like",
            dislike: reactionType === "dislike",
            postId: existingReaction.postId,
            commentId: existingReaction.commentId,
          };
        }
      } else {
        state.reactions.push({
          like: reactionType === "like",
          dislike: reactionType === "dislike",
          postId: postId || null,
          commentId: commentId || null,
        });
      }
    },
    removeReaction: (state, action: PayloadAction<AddReactionPayload>) => {
      const { postId, commentId } = action.payload;
      state.reactions = state.reactions.filter(
        (reaction) =>
          !(reaction.postId === postId && reaction.commentId === null) &&
          !(reaction.commentId === commentId && reaction.postId === null)
      );
    },
  },
});

export const { addReaction, removeReaction } = reactions.actions;

export default reactions.reducer;

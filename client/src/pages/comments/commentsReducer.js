import { createReducer } from '../../utils/reducerUtil';
import { CREATE_COMMENT, LOAD_COMMENTS } from './commentsConstants';

const initialState = []

export const loadComments = (state, payload) => {
  return payload.comments
};

export const createComment = (state, payload) => {
  return [
    ...state.filter(comment => comment.id !== payload.comment),
    Object.assign({}, payload.comment)
  ]
};

export default createReducer(initialState, {
  [CREATE_COMMENT]: createComment,
  [LOAD_COMMENTS]: loadComments
});
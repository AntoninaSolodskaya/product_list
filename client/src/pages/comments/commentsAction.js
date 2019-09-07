import { CREATE_COMMENT, LOAD_COMMENTS } from './commentsConstants';
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../../async/asyncActions';
import instance from '../../utils/api';

export const fetchComments = comments => {
    return {
      type: LOAD_COMMENTS,
      payload: {
        comments
      }
    }
  };

export const postComment = comment => {
    return {
      type: CREATE_COMMENT,
      payload: {
        comment
      }
    }
  };

  export const createComment = comment => {
    return (dispatch) => {
      instance.post(`/comments`, comment )
        .then((newComment) => {
          dispatch(postComment(newComment))
        })
        .catch(error => {
          if (error.status === 400) {
            return false;
          }
          return true;
        });
    }
  };

  export const loadAllComments = () => {
    return async dispatch => {
      try {
        dispatch(asyncActionStart())
        await instance.get(`/comments`)
          .then(comments => {
            dispatch(fetchComments(comments))
          })
        dispatch(asyncActionFinish())
      } catch (error) {
        dispatch(asyncActionError());
      }
    }
  };
import fetchProcess from '../apiFunctions';

const REQUEST_MESSAGE = 'REQUEST_MESSAGE';
const LOAD_MESSAGE = 'LOAD_MESSAGE';
const FAILED_MESSAGE = 'FAILED_MESSAGE';

const initialState = {
  greeting: '',
  error: '',
  pending: false,
};

export const fetchMessage = () => (dispatch) => {
  dispatch({ type: REQUEST_MESSAGE, payload: true });
  fetchProcess().then((result) => dispatch({ type: LOAD_MESSAGE, payload: result }))
    .catch((error) => dispatch({ type: FAILED_MESSAGE, payload: error }));
};

const greetingReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case REQUEST_MESSAGE:
      return { ...state, pending: action.payload };
    case LOAD_MESSAGE:
      return { ...state, greeting: action.payload, pending: false };
    case FAILED_MESSAGE:
      return { ...state, error: action.payload, pending: false };
    default:
      return state;
  }
};

export default greetingReducer;

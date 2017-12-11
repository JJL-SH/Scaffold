import { INCREMENT, DECREMENT } from '../action';

const counter = (state = 0, action) => {
  switch (action) {
    case INCREMENT:
      return state + action.index;
    break;

    case DECREMENT:
      return state - action.index;
    break;

    default:
      return state;
    break;
  }
}

export default counter;
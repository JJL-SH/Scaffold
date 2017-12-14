import { INCREMENT, DECREMENT } from 'Action/counter';

const counter = (state = 0, action) => {
  switch (action.type) {
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
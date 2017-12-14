export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export function incrementCount(number) {
  return {
    type: INCREMENT,
    index: number
  }
}
export function decrementCount(number) {
  return {
    type: DECREMENT,
    index: number
  }
}
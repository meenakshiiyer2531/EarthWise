// globalState.js
export const globalState = {
  email: '', // Global variable to store the email
  points: 0,
  incrementPoints: () => {
    globalState.points += 1;
  },
};

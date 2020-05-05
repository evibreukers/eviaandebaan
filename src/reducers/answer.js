// REDUCER --> takes care of all actions

const answerReducer = (state = "yes", action) => {
  switch (action.type) {
    case "ANSWERYES":
      return "yes";
    case "ANSWERYNO":
      return "no";
    default:
      return state;
  }
};

export default answerReducer;

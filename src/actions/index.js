// ACTION --> function that returns an object

export const increment = function () {
  return { type: "INCREMENT" };
};

export const decrement = function () {
  return { type: "DECREMENT" };
};

export const answeryes = function () {
  return { type: "ANSWERYES" };
};

export const answerno = function () {
  return { type: "ANSWERNO" };
};

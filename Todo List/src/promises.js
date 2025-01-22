const todolist = require("./todolist");

//Define a function that gets all the todos from the
// todolist array declared asynchronously after 2 seconds
getAllTodos = (todolist) => {
  return new Promise((resolve, reject) => {
    const err = false;
    setTimeout(() => {
      if (err) {
        reject("Error");
      }

      resolve(todolist);
    }, 2000);
  });
};
// Define a function to add a todo to the todolist array
createTodo = (todo) => {
  return new Promise((resolve, reject) => {
    if (todo === undefined || todo === null) {
      reject("No data to be added");
    }
    function addTodo() {
      todolist.push(todo);
      resolve(todolist);
    }
    return addTodo();
  });
};
module.exports = {
  createTodo,
  getAllTodos,
};

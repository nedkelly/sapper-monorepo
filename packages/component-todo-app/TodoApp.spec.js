import TodoApp from './TodoApp.svelte';

const todoData = {
  todos: [
    { id: 1, done: false, description: 'write some docs' },
    { id: 2, done: false, description: 'start writing JSConf talk' },
    { id: 3, done: true, description: 'buy some milk' },
    { id: 4, done: false, description: 'mow the lawn' },
    { id: 5, done: false, description: 'feed the turtle' },
    { id: 6, done: false, description: 'fix some bugs' },
  ],
};

test('The TodoApp component should exist', () => {
  const component = new TodoApp({ target: document.body });

  expect(component).toBeTruthy();
});

test('The TodoApp component should contain initial todo items', () => {
  const component = new TodoApp({ target: document.body });
  component.todos = todoData;

  // console.log(component);
  // expect(component).toBeTruthy();
});

import Button from './Button.svelte';

test('The Button component should exist', () => {
  const component = new Button({ target: document.body });

  expect(component).toBeTruthy();
});

import { storiesOf } from '@storybook/svelte';
import Button from './Button.svelte';

storiesOf('Button', module)
  .add('with text', () => ({
    Component: Button,
    props: {
      buttonText: 'some text',
    },
  }))
  .add('with some emojies', () => ({
    Component: Button,
    props: {
      buttonText: '😀 😎 👍 💯',
    },
  }));

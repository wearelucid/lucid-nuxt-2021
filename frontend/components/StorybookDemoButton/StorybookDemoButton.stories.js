import StorybookDemoButton from './StorybookDemoButton'
export default {
  title: 'StorybookDemoButton',
  component: StorybookDemoButton,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
      defaultValue: 'primary',
    },
    round: { control: 'boolean' },
    text: {
      control: 'text',
      defaultValue: 'Awesome Button',
    },
  },
}

export const Button = (arg, { argTypes }) => ({
  components: { StorybookDemoButton },
  props: Object.keys(argTypes),
  template: '<StorybookDemoButton v-bind="$props" />',
})

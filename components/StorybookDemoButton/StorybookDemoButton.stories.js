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
    rounded: { control: 'boolean' },
    text: {
      control: 'text',
      defaultValue: 'Demo Button',
    },
  },
}

export const Button = (arg, { argTypes }) => ({
  components: { StorybookDemoButton },
  props: Object.keys(argTypes),
  template: '<StorybookDemoButton v-bind="$props" />',
})

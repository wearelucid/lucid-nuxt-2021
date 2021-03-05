import TheFooter from './TheFooter'

export default {
  component: TheFooter,
  title: 'Components/SingleInstance/TheFooter',
}

const Template = (args, { argTypes }) => ({
  components: { TheFooter },
  props: Object.keys(argTypes),
  template: '<TheFooter v-bind="$props" />',
})

export const Default = Template.bind({})

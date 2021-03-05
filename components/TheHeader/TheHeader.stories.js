import TheHeader from './TheHeader'

export default {
  component: TheHeader,
  title: 'Components/SingleInstance/TheHeader',
}

const Template = (args, { argTypes }) => ({
  components: { TheHeader },
  props: Object.keys(argTypes),
  template: '<TheHeader v-bind="$props" />',
})

export const Default = Template.bind({})

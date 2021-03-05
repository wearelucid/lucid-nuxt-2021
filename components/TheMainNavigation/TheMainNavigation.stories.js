import TheMainNavigation from './TheMainNavigation'

export default {
  component: TheMainNavigation,
  title: 'Components/SingleInstance/TheMainNavigation',
}

const Template = (args, { argTypes }) => ({
  components: { TheMainNavigation },
  props: Object.keys(argTypes),
  template: '<TheMainNavigation v-bind="$props" />',
})

export const Default = Template.bind({})

import ThePreviewIndicator from './ThePreviewIndicator'

export default {
  component: ThePreviewIndicator,
  title: 'Components/SingleInstance/ThePreviewIndicator',
}

const Template = (args, { argTypes }) => ({
  components: { ThePreviewIndicator },
  props: Object.keys(argTypes),
  template: '<ThePreviewIndicator v-bind="$props" />',
})

export const Default = Template.bind({})

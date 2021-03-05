import BaseSection from './BaseSection'

export default {
  component: BaseSection,
  title: 'Components/Base/BaseSection',
  argTypes: {
    title: {
      defaultValue: 'Hello World',
    },
  },
}

const Template = (args, { argTypes }) => ({
  components: { BaseSection },
  props: Object.keys(argTypes),
  template: '<BaseSection v-bind="$props" />',
})

export const Default = Template.bind({})

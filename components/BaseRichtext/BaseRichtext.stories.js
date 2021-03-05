import BaseRichtext from './BaseRichtext'
import { craftRedactorDemoOutput, kitchenSink } from './BaseRichtext.mockData'

export default {
  title: 'Components/Base/BaseRichtext',
  component: BaseRichtext,
  argTypes: {
    content: {
      defaultValue: '<h1>Hello World</h1>',
    },
  },
}

const Template = (args, { argTypes }) => ({
  components: { BaseRichtext },
  props: Object.keys(argTypes),
  template: '<BaseRichtext v-bind="$props" />',
})

export const Default = Template.bind({})

export const CraftRedactorDemoOutput = Template.bind({})
CraftRedactorDemoOutput.args = {
  ...Default.args,
  content: craftRedactorDemoOutput,
}

export const HTMLKitchenSink = Template.bind({})
HTMLKitchenSink.args = { ...Default.args, content: kitchenSink }

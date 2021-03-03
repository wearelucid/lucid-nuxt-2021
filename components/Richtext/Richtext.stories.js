import Richtext from './Richtext'
import { craftRedactorDemoOutput, kitchenSink } from './_mockdata-richtext'

export default {
  title: 'Richtext',
  component: Richtext,
  argTypes: {
    content: {
      control: 'text',
      defaultValue: '<h1>Hello World</h1>',
    },
  },
}

const Template = (args, { argTypes }) => ({
  components: { Richtext },
  props: Object.keys(argTypes),
  template: '<Richtext v-bind="$props" />',
})

export const RichtextDefault = Template.bind({})

export const CraftRedactorDemoOutput = Template.bind({})
CraftRedactorDemoOutput.args = {
  ...RichtextDefault.args,
  content: craftRedactorDemoOutput,
}

export const HTMLKitchenSink = Template.bind({})
HTMLKitchenSink.args = { ...RichtextDefault.args, content: kitchenSink }

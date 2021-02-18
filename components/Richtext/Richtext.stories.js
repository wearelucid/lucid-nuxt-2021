import Richtext from './Richtext'
import htmlKitchenSink from './_mockdata-richtext'

export default {
  title: 'Richtext',
  component: Richtext,
  argTypes: {
    content: {
      control: 'text',
      defaultValue: htmlKitchenSink,
    },
  },
}

export const RichtextDemo = (arg, { argTypes }) => ({
  components: { Richtext },
  props: Object.keys(argTypes),
  template: '<Richtext v-bind="$props" />',
})

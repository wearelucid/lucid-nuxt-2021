import CraftVerbbNavigationListItem from './CraftVerbbNavigationListItem'
import CraftVerbbNavigationList from './CraftVerbbNavigationList'

export default {
  component: CraftVerbbNavigationListItem,
  title: 'CraftVerbbNavigationListItem',
  decorators: [
    () => ({
      components: { CraftVerbbNavigationList },
      template:
        '<CraftVerbbNavigationList><story /></CraftVerbbNavigationList>',
    }),
  ],
}

const Template = (args, { argTypes }) => ({
  components: { CraftVerbbNavigationListItem },
  props: Object.keys(argTypes),
  template: '<CraftVerbbNavigationListItem v-bind="$props" />',
})

export const Internal = Template.bind({})
Internal.args = {
  id: '123',
  title: 'Testseite',
  url: 'http://localhost:3000/test-seite',
  nodeUri: 'test-seite',
  level: 1,
  newWindow: '0',
  type: 'craft\\elements\\Entry',
  children: [],
}

export const Passive = Template.bind({})
Passive.args = {
  id: '234',
  title: 'Title only (passive)',
  url: null,
  nodeUri: '',
  level: 1,
  newWindow: '0',
  type: 'verbb\\navigation\\nodetypes\\PassiveType',
  children: [],
}

export const External = Template.bind({})
External.args = {
  id: '345',
  title: 'External Link (new tab)',
  url: 'https://www.wearelucid.ch',
  nodeUri: 'https://www.wearelucid.ch',
  level: 1,
  newWindow: '1',
  type: '',
  children: [],
}

export const WithChildren = Template.bind({})
WithChildren.args = {
  ...Internal.args,
  id: '456',
  title: 'I have children',
  children: [Internal.args, Passive.args, External.args],
}

export const WithGrandChildren = Template.bind({})
WithGrandChildren.args = {
  ...Internal.args,
  id: '567',
  title: 'I have grand children',
  children: [Internal.args, WithChildren.args],
}

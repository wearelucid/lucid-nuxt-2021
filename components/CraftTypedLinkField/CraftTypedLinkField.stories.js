import CraftTypedLinkField from './CraftTypedLinkField'

export default {
  component: CraftTypedLinkField,
  title: 'Components/Craft/CraftTypedLinkField',
}

const Template = (args, { argTypes }) => ({
  components: { CraftTypedLinkField },
  props: Object.keys(argTypes),
  template: '<CraftTypedLinkField v-bind="$props" />',
})

export const Entry = Template.bind({})
Entry.args = {
  text: 'Link to entry',
  type: 'entry',
  url: 'http://localhost:3000/en/test-page/nested-test-page',
}

export const Asset = Template.bind({})
Asset.args = {
  text: 'Link to an asset',
  type: 'asset',
  url: 'https://lucid-craft-2021.nitro/uploads/images/gaspar-manuel-zaldo-urMEnqK1eoQ-unsplash.jpg',
}

export const External = Template.bind({})
External.args = {
  target: '_blank',
  text: 'External Link',
  type: 'url',
  url: 'https://www.wearelucid.ch',
}

export const Email = Template.bind({})
Email.args = {
  text: 'Email Link',
  type: 'email',
  url: 'mailto:noreply@email.test',
}

export const Phone = Template.bind({})
Phone.args = {
  text: 'Phone Link',
  type: 'tel',
  url: 'tel:1234567890',
}

export const WithTitle = Template.bind({})
WithTitle.args = {
  title: 'This is the title',
  text: 'With Title',
  type: 'entry',
  url: 'http://localhost:3000/en/test-page/nested-test-page',
}

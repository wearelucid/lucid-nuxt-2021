<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">Hello World</h1>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
  name: 'Home',
  apollo: {
    entries: {
      query: gql`
        query MyQuery {
          entries(site: "*") {
            siteId
            sectionId
            id
            slug
            title
            url
            uri
            ... on pages_pages_Entry {
              enabled
              image {
                url
                id
                title
              }
            }
          }
        }
      `,
    },
  },
}
</script>

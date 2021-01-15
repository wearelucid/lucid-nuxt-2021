<script>
import SlugPage from '~/pages/_slug/index'
import homePage from '~/apollo/queries/homePage'
export default {
  ...SlugPage,
  name: 'HomePage',
  apollo: {
    page: {
      variables() {
        return {
          site: 'default',
          section: 'home',
        }
      },
      query: homePage,
    },
  },
}
</script>

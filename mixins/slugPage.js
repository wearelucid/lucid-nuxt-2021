import { withoutLeadingSlash, withoutTrailingSlash } from '@nuxt/ufo'
import slugPageQuery from '~/graphql/queries/slugPage.gql'
import { removeLanguagePrefixFromPath } from '~/i18n/helpers'

export default {
  async asyncData({ app, route, $graphql, error }) {
    const variables = {
      site: app.i18n.locale,
      uri: removeLanguagePrefixFromPath({
        path: withoutTrailingSlash(withoutLeadingSlash(route.path)),
        prefix: app.i18n.locale,
      }),
    }
    const { page } = await $graphql.default.request(slugPageQuery, variables)
    if (page == null) {
      error({ statusCode: 404, message: app.i18n.t('error.message404') })
    }
    return { page }
  },
}

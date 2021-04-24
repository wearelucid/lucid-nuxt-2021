import { withoutLeadingSlash, withoutTrailingSlash } from 'ufo'
import slugPageQuery from '~/graphql/queries/slugPage.gql'
import { removeLanguagePrefixFromPath } from '~/i18n/helpers'

export default {
  async asyncData({ route, error, $graphql, i18n }) {
    const variables = {
      site: i18n.locale,
      uri: removeLanguagePrefixFromPath({
        path: withoutTrailingSlash(withoutLeadingSlash(route.path)),
        prefix: i18n.locale,
      }),
    }
    const { page } = await $graphql.default.request(slugPageQuery, variables)
    if (page == null) {
      error({ statusCode: 404, message: i18n.t('error.message404') })
    }
    return { page }
  },
}

import { nuxtImageBreakpoints } from './breakpoints'

/**
 * * @nuxt/image Config (https://image.nuxtjs.org/api/options)
 * Defining breakpoints (screens) based on global breakpoints.mjs
 * This will be the base for any srcset when using <nuxt-image>.
 * Can then be used as: :sizes="`small:50vw medium:100vw large:400px`"
 *
 * ! Caveat: Breakpoints are treated differently in nuxt-img than in sass-mq
 * We have to transform them from:
 * { initial: '0px', small: '320px', medium: '768px', large: '1280px' }
 * to:
 * { initial: 320, small: 768, medium: 1280, large: 999999 }
 */
const createNuxtImageConfig = (domains = []) => {
  if (
    !domains.length ||
    !domains.every((domain) => typeof domain === 'string')
  ) {
    throw new Error('Please provide a list of domains as strings')
  }
  return { domains, screens: nuxtImageBreakpoints }
}

export default createNuxtImageConfig

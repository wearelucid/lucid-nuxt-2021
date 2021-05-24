import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import breakpoints from './breakpoints.mjs'
import colors from './colors.mjs'

/**
 * Create Storybook Viewports
 * ! These viewports are defined in `breakpoints.mjs`
 * -> https://storybook.js.org/docs/react/essentials/viewport
 */
const createStorybookViewports = () => {
  const sbBreakpoints = {}
  for (const bp in breakpoints) {
    sbBreakpoints[bp] = {
      name: bp,
      styles: {
        width: `${breakpoints[bp]}px`,
        height: '100%',
      },
    }
  }
  return sbBreakpoints
}

/**
 * Storybook Options (https://storybook.nuxtjs.org/options)
 */
const storybookConfig = {
  port: 4000, // Run Storybook on localhost:4000
  parameters: {
    // https://storybook.js.org/docs/react/essentials/backgrounds
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: colors['background-light'] },
        { name: 'dark', value: colors['background-dark'] },
      ],
    },
    // https://storybook.js.org/docs/react/essentials/viewport
    viewport: {
      viewports: {
        ...createStorybookViewports(),
        // Add divider to separate project viewports from default
        // viewports (INITIAL_VIEWPORTS) provided by `@storybook/addon-viewport`
        divider: {
          name: '– – – – –',
          width: null,
          height: null,
        },
        ...INITIAL_VIEWPORTS,
      },
    },
  },
}

export default storybookConfig

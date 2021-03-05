/**
 * @example removeLanguagePrefixFromPath({ path = 'en/about', prefix = 'en' })
 * -> 'about'
 * @example removeLanguagePrefixFromPath({ path = '/en/about', prefix = 'en' })
 * -> 'about'
 */
const removeLanguagePrefixFromPath = ({ path = '', prefix = '' } = {}) => {
  if (path.startsWith(`${prefix}/`)) return path.substr(prefix.length + 1)
  if (path.startsWith(`/${prefix}/`)) return path.substr(prefix.length + 2)
  return path
}

export { removeLanguagePrefixFromPath as default, removeLanguagePrefixFromPath }

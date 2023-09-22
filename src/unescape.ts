import { MinimatchOptions } from './index.js'
import { StringPrototypeReplace } from 'node-primordials'

/**
 * Un-escape a string that has been escaped with {@link escape}.
 *
 * If the {@link windowsPathsNoEscape} option is used, then square-brace
 * escapes are removed, but not backslash escapes.  For example, it will turn
 * the string `'[*]'` into `*`, but it will not turn `'\\*'` into `'*'`,
 * becuase `\` is a path separator in `windowsPathsNoEscape` mode.
 *
 * When `windowsPathsNoEscape` is not set, then both brace escapes and
 * backslash escapes are removed.
 *
 * Slashes (and backslashes in `windowsPathsNoEscape` mode) cannot be escaped
 * or unescaped.
 */
export const unescape = (
  s: string,
  {
    windowsPathsNoEscape = false,
  }: Pick<MinimatchOptions, 'windowsPathsNoEscape'> = {}
) => {
  return windowsPathsNoEscape
    ? StringPrototypeReplace(s, /\[([^\/\\])\]/g, '$1')
    : StringPrototypeReplace(
        StringPrototypeReplace(s, /((?!\\).|^)\[([^\/\\])\]/g, '$1$2'),
        /\\([^\/])/g,
        '$1'
      )
}

import Typography from 'typography'
import kirkhamTheme from 'typography-theme-kirkham'
import githubTheme from 'typography-theme-github'

kirkhamTheme.scaleRatio = 2.2
kirkhamTheme.googleFonts = [
  {
    name: 'Playfair Display',
    styles: ['400'],
  },
  {
    name: 'Fira Sans',
    styles: ['400', '400i', '700', '700i'],
  },
]
kirkhamTheme.overrideThemeStyles = () => ({
  'img': {
    maxWidth: 'none'
  }
})
kirkhamTheme.headerWeight = 400
const typography = new Typography(githubTheme)

export default typography
export const rhythm = typography.rhythm

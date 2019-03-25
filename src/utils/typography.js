import Typography from 'typography'

import githubTheme from 'typography-theme-github'

githubTheme.overrideThemeStyles = () => ({
  'h1': {
    marginTop: '0.6rem'
  }
})

const typography = new Typography(githubTheme)

export default typography
export const rhythm = typography.rhythm

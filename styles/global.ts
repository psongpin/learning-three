import { opinionated } from 'stitches-normalize-css'

import { globalCss } from './stitches.config'

const globalStyles = globalCss(...opinionated, {})

export default globalStyles

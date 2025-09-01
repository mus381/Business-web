// Base layers (imports keep order deterministic)
import './styles/base/base.css' // pulls reset + variables inside
import './styles/base/main.css' // components/utilities/theme-switch styles

// Theme bootstrapping
import { initThemeSwitch } from './scripts/theme.js'
initThemeSwitch()

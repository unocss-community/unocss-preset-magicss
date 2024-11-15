import { defineConfig, presetUno } from 'unocss'
import { presetMagicss } from './src'

// Just for Vscode Extension

export default defineConfig({
  presets: [
    presetUno(),
    presetMagicss(),
  ],
})

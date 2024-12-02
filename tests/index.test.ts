import { createGenerator, presetUno } from 'unocss'
import { expect, it } from 'vitest'
import { presetMagicss } from '../src'

it('presetStarter', async () => {
  const uno = await createGenerator({
    presets: [
      presetUno({ preflight: 'on-demand' }) as any,
      presetMagicss(),
    ],
  })
  const { css } = await uno.generate('animate-magic')

  expect(css).toMatchInlineSnapshot(`
    "/* layer: default */
    @keyframes magic{0% {opacity: 1;-webkit-transform-origin: 100% 200%;transform-origin: 100% 200%;-webkit-transform: scale(1, 1) rotate(0deg);transform: scale(1, 1) rotate(0deg);}100% {opacity: 0;-webkit-transform-origin: 200% 500%;transform-origin: 200% 500%;-webkit-transform: scale(0, 0) rotate(270deg);transform: scale(0, 0) rotate(270deg);}}
    .animate-magic{animation:magic 1s linear 1;animation-fill-mode:both;}"
  `)
})

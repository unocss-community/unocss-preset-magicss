# unocss-preset-magicss [![npm](https://img.shields.io/npm/v/unocss-preset-magicss)](https://npmjs.com/package/unocss-preset-magicss)

Integrate magic animation into unocss preset.

## Features
- 📦 Build-In [Magic Animate](https://github.com/miniMAC/magic).

## Usage
```shell
pnpm i -D unocss-preset-magicss unocss
```

```ts
// uno.config.ts
import { defineConfig, presetUno } from 'unocss'
import { presetMagicss } from 'unocss-preset-magicss'

export default defineConfig({
  presets: [
    // ...
    presetUno(),
    presetMagicss(),
  ],
})
```

## License

[MIT](./LICENSE) License © 2023 [zyyv](https://github.com/zyyv)

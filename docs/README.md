---

footer: MIT Licensed | Copyright © 2018-present Evan You
---
# this is a test article


这是一个极简的 VuePress 主题。

![](https://ts1.cn.mm.bing.net/th/id/R-C.a7744b5596528a62913912feedcef64c?rik=2qCfRY7PhaywlA&riu=http%3a%2f%2fauto-drive.pt%2fwp-content%2fuploads%2f2019%2f04%2f2019-mini-clubman-s-4.jpg&ehk=7OFOin%2fdZ%2biNp71HndsM2n58w37vmiutF06KuJXQDsI%3d&risl=&pid=ImgRaw&r=0)


[this is a external link](https://docs.1369.ml)

## Theme API

<NpmBadge package="@vuepress/core" />

VuePress theme also works as a plugin, so Theme API can accept all the options of [Plugin API](./plugin-api.md) with following differences.

## Basic Options

### name

- Type: `string`

- Details:

  Name of the theme.

  It should follow the naming convention, and ensure consistency with the package name when publishing to NPM:

  - Non-scoped: `vuepress-theme-foo`
  - Scoped: `@org/vuepress-theme-foo`

### multiple

- Details:

  A theme should never be used multiple times, so this option is not supported in theme API.

## Theme Specific Options

### extends

- Type: `Theme`

- Details:

  The theme to inherit.

  All of the Theme API of the parent theme will be inherited, but the child theme will not override the parent theme directly. Theme specific options will override according to following rules:

  - [plugins](#plugins): When a same plugin is used in both child and parent theme, if the plugin does not support to be used multiple times, only the one used in the child theme will take effect.
  - [templateBuild](#templatebuild) / [templateDev](#templatedev): Child theme templates will override parent theme templates.

  Multi-level inheritance is supported, i.e. theme B could be extended from theme A, and then theme C could be extended from theme B. In other words, a theme could have a parent theme, a grandparent theme and so on.

- Example:

```ts
import { defaultTheme } from '@vuepress/theme-default'
import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

export default {
  // inherit the default theme
  extends: defaultTheme(),
}
```

### plugins

- Type: `(Plugin | Plugin[])[]`

- Details:

  Plugins to use in the theme.

- Also see:
  - [Config > plugins](./config.md#plugins)

### templateBuild

- Type: `string`

- Details:

  Specify the HTML template for build.

  It would override the default value of [templateBuild](./config.md#templatebuild), but could be overridden by user config.

- Also see:
  - [Config > templateBuild](./config.md#templatebuild)

### templateDev

- Type: `string`

- Details:

  Specify the HTML template for dev.

  It would override the default value of [templateDev](./config.md#templatedev), but could be overridden by user config.

- Also see:
  - [Config > templateDev](./config.md#templatedev)
import { defineUserConfig } from "vuepress"
import theme from "./theme.js"

export default defineUserConfig({
  lang: "zh-CN",
  title: "Theme Less",
  description: "一个 VuePress 极简主题。",
  
  theme,
})
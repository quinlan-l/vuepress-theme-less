import { defaultTheme } from "vuepress"

export default defaultTheme({
  navbar: [
    "/a/a",
    { text: "B", link: "/a/b/b"},
    { text: "Go Search", link: "/search"},
  ],
  logo: "/logo.svg"
})
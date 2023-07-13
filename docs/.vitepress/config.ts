import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ZJL",
  description: "A FE Technical articles Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      {
        text: "原创",
        link: "/original/1.给我五分钟！让你掌握React的Redux中间件原理",
      },
    ],

    sidebar: [
      {
        text: "翻译",
        items: [
          {
            text: "1.【译】Fetch Priority 和优化LCP",
            link: "/translate/1.【译】Fetch Priority 和优化LCP",
          },
          {
            text: "2.【译】Well-known Symbols",
            link: "/translate/2.【译】Well-known Symbols",
          },
          {
            text: "3.【译】一文读懂React中的RSC是什么？",
            link: "/translate/3.【译】一文读懂React中的RSC是什么？",
          },
        ],
      },
      {
        text: "原创",
        items: [
          {
            text: "1.给我五分钟！让你掌握React的Redux中间件原理",
            link: "/original/1.给我五分钟！让你掌握React的Redux中间件原理",
          },
          {
            text: "2.🔥Vue暗藏秘招揭示： v-for指令颠覆对象属性渲染顺序的传统观念！",
            link: "/original/2.🔥Vue暗藏秘招揭示： v-for指令颠覆对象属性渲染顺序的传统观念！",
          },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/teacherzjl" }],
  },
  ignoreDeadLinks: true,
});

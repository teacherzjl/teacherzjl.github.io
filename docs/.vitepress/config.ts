import { defineConfig } from "vitepress";

const originalLinks = [
  "1.给我五分钟！让你掌握React的Redux中间件原理",
  "2.🔥Vue暗藏秘招揭示： v-for指令颠覆对象属性渲染顺序的传统观念！",
];

const translateLinks = [
  "1.【译】Fetch Priority 和优化LCP",
  "2.【译】Well-known Symbols",
  "3.【译】一文读懂React中的RSC是什么？",
];

function fillSidebar(links: string[], type: string) {
  return links.reverse().map((link) => {
    return {
      text: link,
      link: `/${type}/${link}`,
    };
  });
}

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
        link: `/original/1.给我五分钟！让你掌握React的Redux中间件原理`,
      },
    ],

    sidebar: [
      {
        text: "我的翻译",
        items: fillSidebar(translateLinks, "Translate"),
      },
      {
        text: "我的原创",
        items: fillSidebar(originalLinks, "Original"),
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/teacherzjl" }],
  },
  ignoreDeadLinks: true,
});
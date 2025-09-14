// 页面数据配置文件
const siteData = {
  // 个人基本信息
  profile: {
    name: "Ygrowly",
    title: "前端开发者",
    subtitle: "热爱开发 | 追求极致体验 | 全栈开发者 | 轻创业ing",
    description: `🎓 我是一名大三的计算机学生，热爱前端开发，也在不断拓展全栈能力。
💻 在实验室和软件大赛中参与过一些项目，收获了技术成长，也体验到从 0 到 1 搭建产品的成就感。
📍 现在，我正在规划轻创业，希望探索一条能把兴趣、技术和价值结合在一起的道路。
💡 对我来说，编程不只是写代码，而是创造、解决问题和实现想法的方式。
🌱 除了技术，我也喜欢记录一些学习与生活的感悟，尝试通过写作和分享让思考沉淀下来。
☕ 平时热衷尝试新工具、阅读和运动，喜欢不断给生活"升级打补丁"。
🚀 我的愿景是：在技术成长的同时，逐渐找到能创造长期价值的方向，用行动和作品证明自己。`,
    avatar: "assets/avatar.png",
    email: "lyg3044@qq.com",
    github: "https://github.com/Ygrowly",
    wechatQR: "assets/connect/mmqrcode.png",
    qqQR: "assets/connect/qrcode.png"
  },

  // 导航菜单
  navigation: [
    { name: "简介", href: "#about", icon: "👨‍💻" },
    { name: "经历", href: "#timeline", icon: "📅" },
    { name: "技能", href: "#tech", icon: "🛠️" },
    { name: "作品集", href: "#projects", icon: "💼" },

    { name: "联系方式", href: "#contact", icon: "📞" },
    { name: "外链", href: "#external-links", icon: "🔗" }
  ],

  // 个人经历时间线
  timeline: [
    {
      year: "2023",
      title: "入读南华大学计算机科学与技术专业",
      icon: "🎓",
      description: "开始我的计算机科学学习之旅，接触编程基础知识。",
      color: "#667eea"
    },
    {
      year: "2023",
      title: "加入卡布奇诺，学习Reverse逆向",
      icon: "🏆",
      description: "深入学习逆向工程技术，培养系统级思维。",
      color: "#764ba2"
    },
    {
      year: "2024",
      title: "加入南极星，带队进行项目开发",
      icon: "👨‍💻",
      description: "担任技术负责人，带领团队完成多个项目开发。",
      color: "#4facfe"
    },
    {
      year: "2025",
      title: "前端实习，积累初始资本",
      icon: "🌍",
      description: "获得实习机会，在实际项目中应用所学技术。",
      color: "#00f2fe"
    },
    {
      year: "未来",
      title: "轻创业 & 考研 | 就业",
      icon: "🚀",
      description: "规划未来发展方向，在创业与深造之间寻找平衡。",
      color: "#f093fb"
    }
  ],

  // 技术栈
  techStack: [
    {
      category: "编程语言",
      icon: "💻",
      skills: ["JavaScript", "TypeScript", "Python"],
      color: "#f7df1e"
    },
    {
      category: "前端框架",
      icon: "⚛️",
      skills: ["React", "Vue", "Next.js"],
      color: "#61dafb"
    },
    {
      category: "后端技术",
      icon: "🛠️",
      skills: ["Node.js", "NestJS", "MySQL", "Supabase", "Python"],
      color: "#68a063"
    },
    {
      category: "开发工具",
      icon: "🚀",
      skills: ["Git", "Docker", "CI/CD"],
      color: "#ff6b6b"
    },
    {
      category: "UI & 设计",
      icon: "🎨",
      skills: ["Ant Design", "TailwindCSS", "Figma"],
      color: "#ff6347"
    },
    {
      category: "AI 工具",
      icon: "🤖",
      skills: ["n8n", "OpenAI API", "transform"],
      color: "#9c88ff"
    },
    {
      category: "外语",
      icon: "📚",
      skills: ["English"],
      color: "#f3a0ecff"
    }
  ],

  // 联系方式与社交媒体
  contactsAndSocial: [
    {
      type: "email",
      label: "邮箱",
      value: "lyg3044@qq.com",
      icon: "📧",
      link: "mailto:lyg3044@qq.com",
      category: "contact",
      actionType: "link"
    },
    {
      type: "wechat",
      label: "微信",
      value: "点击查看二维码",
      icon: "💬",
      qrCode: "assets/connect/mmqrcode.png",
      category: "contact",
      actionType: "qr"
    },
    {
      type: "qq",
      label: "QQ",
      value: "点击查看二维码",
      icon: "💭",
      qrCode: "assets/connect/qrcode.png",
      category: "contact",
      actionType: "qr"
    },
    {
      type: "wechat_public",
      label: "微信公众号",
      value: "点击查看二维码",
      icon: "📱",
      qrCode: "assets/connect/official_account.png",
      category: "social",
      actionType: "qr"
    },
    {
      type: "github",
      label: "GitHub",
      value: "Ygrowly",
      icon: "💻",
      link: "https://github.com/Ygrowly",
      category: "social",
      actionType: "link"
    },
    {
      type: "xiaohongshu",
      label: "小红书",
      value: "@Ygrowly",
      icon: "📕",
      link: "https://www.xiaohongshu.com/user/profile/5dda079a0000000001007e81",
      category: "social",
      actionType: "link"
    },
    {
      type: "csdn",
      label: "CSDN博客",
      value: "Ygrowly",
      icon: "📝",
      link: "https://blog.csdn.net/2302_79135465?type=blog",
      category: "social",
      actionType: "link"
    }
  ],

  // 网站配置
  siteConfig: {
    title: "我的个人主页",
    description: "计算机大三学生，前端开发者，未来全栈开发，作品集与个人品牌官网。",
    keywords: "前端, 全栈, React, Vue, Next.js, 作品集, 简历",
    author: "Ygrowly",
    url: "https://Ygrowly.pages.dev",
    copyright: "© 2025 Ygrowly | 构建于原生 HTML + CSS + JS"
  },

  // 外链模块 - 展示其他人的信息
  externalLinks: [
    // {
    //   id: 1,
    //   name: "张三",
    //   title: "全栈开发工程师",
    //   description: "专注于前端开发和用户体验设计，拥有丰富的 React 和 Vue 项目经验。",
    //   avatar: "https://via.placeholder.com/150/4a90e2/ffffff?text=ZS",
    //   website: "",
    //   github: "",
    //   email: "",
    //   tags: ["React", "Vue", "Node.js", "UI/UX"],
    //   joinDate: "2024-12"
    // },
  ],

  // 统计数据 (可选)
  stats: {
    projectsCompleted: 12,
    yearsOfExperience: 2,
    technologiesUsed: 15,
    cupsOfCoffee: 999
  }
};

// 导出数据，支持 ES6 模块和 CommonJS
if (typeof module !== 'undefined' && module.exports) {
  module.exports = siteData;
} else if (typeof window !== 'undefined') {
  window.siteData = siteData;
}

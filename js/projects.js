// 作品集数据配置文件
const projectsData = [
  {
    id: 1,
    title: "智能笔记数字资产",
    description: "AI+Web3驱动的智能笔记数字资产系统",
    shortDesc: "将笔记手稿转化为数字资产，实现整理、创作价值的AI生成+NFT上链系统。",
    image: "assets/projects/aiNotes.jpg",
    demoUrl: null,
    sourceUrl: null,
    technologies: ["React", "Web3", "Solidity", "ERC721", "GPT", "OCR", "区块链"],
    features: [
      "图片识别上传：自动OCR识别与结构化处理",
      "大模型总结整理：生成摘要、知识结构图或思维导图",
      "模板智能排版：多种知识笔记风格模板，一键生成美观版式",
      "上链铸造NFT：笔记可选择上链，完成NFT铸造，标记原创者身份与时间戳",
      "数字资产化：支持展示、交易、分享，实现笔记内容的数字版权资产化",
      "区块链浏览器验证：确保真实性和所有权"
    ],
    details: {
      overview: "打造一个AI生成+NFT上链的数字资产系统，实现笔记从创造→智能整理→上链变现的完整闭环。解决传统笔记难以保存变数字资产、数字内容难以验真及交易铸造成NFT、内容杂乱AI智能分析分类等核心痛点。",
      challenges: "如何将AI图像识别与区块链技术有机结合，确保NFT铸造的原创性验证，以及如何设计友好的Web3交互界面让用户轻松完成上链操作。",
      solutions: "AI部分使用图像识别+GPT模型生成笔记内容，区块链部分使用Solidity、ERC721协议完成NFT铸造与资产上链，前端React+Web3.js实现用户界面友好的钱包连接与交易记录展示。",
      results: "结合AI生成与Web3原创确权，构建笔记即资产的创新知识经济模型，为数字内容创作者提供全新的价值实现路径。"
    }
  },
  {
    id: 2,
    title: "喜猫医宠智能",
    description: "AI问诊+药品研发销售的宠物医疗闭环体系",
    shortDesc: "整合AI问诊与药品研发销售，构建问诊-买药医疗闭环的宠物健康管理系统。",
    image: "assets/projects/cat.png",
    demoUrl: null,
    sourceUrl: null,
    technologies: ["微信小程序", "GPT-4", "AI视觉识别", "大数据分析", "智能售药机"],
    features: [
      "AI问诊系统：对接GPT-4等大语言模型，实现宠物病症图像识别",
      "用药计量计算：智能计算用药剂量，避免肝毒性风险",
      "24小时在线指导：提供全天候在线用药指导与诊疗建议",
      "动态健康画像：生成个性化用药方案，如针对超重犬类自动调整计量",
      "智能化分阶给药：通过AI视觉识别，初步诊断爱宠症状，提供剂量建议",
      "多渠道供药：联动自助售药机、线下专营店及线上商城实现精准供药",
      "大数据反向定制：基于健康数据反向定制配方，SKU迭代周期缩短至6个月"
    ],
    details: {
      overview: "通过整合AI问诊与药品研发销售，构建宠物医疗闭环体系。以AI问诊系统为核心，依托微信小程序对接GPT-4等大语言模型，解决国内养宠家庭通过小红书、百度、AI大模型等方式获得用药信息不准确的痛点，同时联动销售渠道形成医疗闭环。",
      challenges: "如何确保AI诊断的准确性和安全性，平衡智能诊断与专业医疗的边界，以及如何将问诊数据与药品研发有效结合。",
      solutions: "基于微信小程序+AI大模型的技术优势，通过动态健康画像生成个性化用药方案，开发5类剂型覆盖急症速效、慢性病缓释等需求，布设智能售药机覆盖3公里社区，与20+宠物医院合作提供定制包装药品。",
      results: "相比宠智灵AI仅实现标签检索，医宠智能实现了真正的个性化诊疗，下沉市场布设成本低于药店50%，成功抢占B端份额，实现县域蓝海与场景融合。"
    }
  },
  {
    id: 3,
    title: "grocery商城",
    description: "前后端分离的全栈电商系统",
    shortDesc: "基于Vue3+Flask的前后端分离电商平台，支持用户管理、商品管理、订单处理等完整电商功能。",
    image: "assets/projects/grocery.png",
    demoUrl: null,
    sourceUrl: "https://github.com/Ygrowly/grocery",
    hasSource: true,
    technologies: ["Vue 3", "Vite", "Vue Router", "Axios", "Flask", "Celery", "Redis", "MySQL"],
    features: [
      "用户注册、登录、角色管理（用户/管理员/经理）",
      "商品、分类、购物车、订单管理",
      "异步任务与定时任务：生成商品报表、定时邮件提醒",
      "搜索、导出报表（CSV/邮件）功能",
      "请求与审批流：管理员/经理操作需审批通过requests表实现",
      "前后端分离架构：接口通过Axios调用，返回JSON格式",
      "JWT认证与Session管理",
      "Celery任务队列：基于Redis作为broker和backend"
    ],
    details: {
      overview: "采用前后端分离架构的全栈电商系统，前端使用Vue 3+Vite构建现代化界面，后端使用Flask提供RESTful API。集成Celery任务队列处理异步任务，Redis缓存提升性能，MySQL存储业务数据，实现完整的电商业务流程。",
      challenges: "如何设计合理的前后端分离架构，处理异步任务调度，实现高效的权限管理系统，以及确保系统的可扩展性和性能优化。",
      solutions: "使用Flask-JWT-Extended、Flask-Caching、Flask-Mail、Flask-CORS等扩展构建robust后端，通过Celery Beat实现定时调度任务，采用Redis作为缓存和消息队列，前端使用Vue Router实现单页应用。",
      results: "系统实现了用户增删改查、角色变更、商品管理、购物车、订单处理等完整功能，支持CSV报表导出和邮件发送，异步任务处理提升了系统响应性能。"
    }
  },
  {
    id: 4,
    title: "AI随身导览",
    description: "基于AI识别+智能解说的博物馆导览小程序",
    shortDesc: "让每一个人都能带着一个懂文物、会讲故事的AI导游，随时随地探索博物馆的奥秘。",
    image: "assets/projects/guide.png",
    demoUrl: null,
    sourceUrl: null,
    technologies: ["微信小程序", "AI图像识别", "大语言模型", "数据库", "云服务"],
    features: [
      "智能文物识别：基于图像识别，用户拍照即可识别文物，返回权威百科信息",
      "AI趣味讲解：生成生动的解说和故事，支持学术型、趣味型、儿童友好型等不同风格",
      "个性化文物卡片：每一件识别的文物生成专属文物卡片",
      "收藏与笔记功能：用户可以收藏、做笔记、生成参观记录",
      "社交分享：支持分享给朋友，构建个人文化足迹",
      "数字文物收藏册：积累用户的数字文物收藏册，形成个人文化足迹"
    ],
    details: {
      overview: "基于AI识别+智能解说的小程序，解决传统博物馆参观中信息有限、体验单一、记录不便的痛点。用户只需拍下展品，就能获得全面的百科信息和趣味化的AI解说，每一件文物还能生成专属的文物卡片，方便收藏、整理和分享。",
      challenges: "如何确保文物识别的准确性，如何生成既专业又有趣的解说内容，以及如何设计吸引用户的文物卡片和收藏系统。",
      solutions: "通过AI图像识别技术实现文物快速识别，结合大语言模型生成多样化解说风格，设计精美的文物卡片系统支持个性化收藏和分享功能。",
      results: "不仅是一个辅助工具，更是一个能陪伴、能互动、能记录的智能导览伙伴，提升了参观效率，让文化体验变得生动有趣、独一无二。随着年轻一代对文化体验需求的升级，填补了智慧博物馆建设的市场空白。"
    }
  },
  {
    id: 5,
    title: "视频内容总结工具",
    description: "GPU加速的AI视频分析与总结系统",
    shortDesc: "支持GPU/CPU双模式的视频内容分析工具，提供字幕生成、内容总结、时间轴制作等功能。",
    image: "assets/projects/video-summary.png",
    demoUrl: null,
    sourceUrl: "https://github.com/Ygrowly/video-summary",
    technologies: ["Python", "faster-whisper", "GPT", "FFmpeg", "matplotlib", "networkx", "CUDA"],
    features: [
      "GPU加速处理：支持NVIDIA CUDA环境下GPU加速faster-whisper模型的语音转录",
      "CPU兼容性：无GPU环境自动切换CPU计算，确保广泛适用性",
      "字幕嵌入：通过FFmpeg将SRT字幕文件无缝嵌入视频，兼容各类播放器",
      "多视频格式支持：兼容MP4、AVI、MOV等多种视频格式",
      "视频内容总结：自动提取核心内容，生成清晰、简明的内容大纲",
      "视频时间轴：生成带时间节点的时间轴，便于快速浏览和跳转",
      "AI问答助手：集成智能问答，展示相关知识点并提供详细解答",
      "脑图生成：使用matplotlib和networkx生成视频大纲脑图"
    ],
    details: {
      overview: "一个功能完备的视频内容分析系统，通过GPU加速的faster-whisper模型实现高效语音转录，结合AI大模型进行内容理解和总结。系统支持字幕嵌入、时间轴生成、脑图制作等多种功能，为视频学习和内容管理提供全方位支持。",
      challenges: "如何在不同硬件配置下保证系统稳定运行，如何提高语音识别精度和内容总结质量，以及如何设计直观的可视化界面。",
      solutions: "实现GPU/CPU自适应切换机制，使用faster-whisper提升处理效率，通过FFmpeg确保字幕兼容性，集成matplotlib和networkx生成可视化脑图，设计智能问答助手提供知识系统化解答。",
      results: "在GPU环境下显著提升处理效率，字幕文件与各类播放器高度兼容，生成的时间轴和脑图有效提升了视频内容的可访问性和学习效率，为视频内容分析领域提供了完整的解决方案。"
    }
  },
  {
    id: 6,
    title: "智能眼科疾病诊断系统",
    description: "基于深度学习的眼科图像识别辅助诊断系统",
    shortDesc: "构建基于CNN的眼底图像识别模型，实现常见眼部疾病的快速辅助诊断。",
    image: "assets/projects/diagnose.png",
    demoUrl: null,
    sourceUrl: null,
    technologies: ["Python", "CNN", "深度学习", "图像识别", "医疗诊断", "数据分析"],
    features: [
      "卷积神经网络（CNN）眼底图像训练与分类",
      "后台管理系统：支持患者图像上传并快速返回分析报告",
      "多病种识别：支持青光眼、黄斑变性、糖尿病视网膜病变等疾病识别",
      "高诊断准确率：具备较高的疾病识别准确率",
      "基层医疗适用：服务于基层医疗辅助筛查场景",
      "快速分析报告：自动生成详细的眼部疾病分析报告"
    ],
    details: {
      overview: "构建基于深度学习的眼科图像识别模型，实现常见眼部疾病的快速辅助诊断。使用卷积神经网络对眼底图像进行训练与分类，后台管理系统可上传患者图像并快速返回分析报告，支持多种眼部疾病的智能识别。",
      challenges: "如何提高模型对不同眼部疾病的识别准确率，处理医疗图像的复杂性和多样性，以及确保诊断结果的可靠性和临床实用性。",
      solutions: "采用卷积神经网络进行深度学习训练，建立大规模眼底图像数据集，通过数据增强和模型优化提升识别精度，设计直观的后台管理系统便于医护人员使用。",
      results: "具备较高诊断准确率，成功服务于基层医疗辅助筛查场景，曾获中国大学生服务外包创新创业大赛全国三等奖，为眼科疾病早期筛查提供了有效的技术支持。"
    }
  }
];

// 导出数据，支持 ES6 模块和 CommonJS
if (typeof module !== 'undefined' && module.exports) {
  module.exports = projectsData;
} else if (typeof window !== 'undefined') {
  window.projectsData = projectsData;
}

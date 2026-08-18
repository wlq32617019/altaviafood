# AGENTS.md — Altavia Corporate Website

## 项目概览

Altavia 企业官网，展示公司的国际食品贸易业务。单页面应用，包含导航、Hero、关于我们、业务模式、产品展示、全球网络、联系方式和页脚。

## 技术栈

- **Framework**: Next.js 16 (App Router)
- **Core**: React 19
- **Language**: TypeScript 5
- **UI**: shadcn/ui + Tailwind CSS 4
- **Styling**: 自定义品牌色系（深藏青 + 琥珀金 + 米白）

## 目录结构

```
src/
├── app/
│   ├── layout.tsx          # 根布局 + Metadata
│   ├── page.tsx            # 首页（组合所有区块）
│   └── globals.css         # 全局样式 + 品牌色 + 动画
├── components/
│   ├── Navbar.tsx           # 固定导航栏（滚动变色）
│   ├── Hero.tsx             # 全屏 Hero 区域
│   ├── About.tsx            # 公司简介 + 数据亮点
│   ├── Business.tsx         # 业务模式（采购-加工-分销）
│   ├── Products.tsx         # 产品展示（禽类 + 牛羊肉）
│   ├── GlobalNetwork.tsx    # 全球网络可视化
│   ├── Contact.tsx          # 联系表单 + 公司信息
│   └── Footer.tsx           # 页脚
└── hooks/
    └── useScrollAnimation.ts  # 滚动渐入动画 Hook
```

## 开发命令

- `pnpm dev` — 启动开发服务器
- `pnpm build` — 构建生产版本
- `pnpm start` — 启动生产服务器
- `pnpm ts-check` — TypeScript 类型检查
- `pnpm lint` — ESLint 检查

## 设计规范

详见 `DESIGN.md`。核心品牌色：
- 深藏青 `#0A1628` — 主色
- 琥珀金 `#C4915E` — 辅色
- 米白 `#F8F6F1` — 背景

## 静态资源

- `/hero-port.jpeg` — Hero 背景（港口航拍）
- `/product-poultry.jpeg` — 禽类产品图
- `/product-meat.jpeg` — 牛羊肉产品图
- `/factory.jpeg` — 越南工厂图

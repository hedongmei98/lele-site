# 和理宠物网站（基础版）

广州和理宠物用品有限公司的单页品牌网站，使用 React + Vite。

## 本地运行

```bash
pnpm install
pnpm dev
```

打开终端显示的本地地址。生产构建：`pnpm build`。

## 上线前替换

- `src/App.jsx` 中创始人介绍、联系邮箱及合作按钮。获得真实邮箱或微信后，将底部提示改为可用的联系链接。
- `public/media/founder-mood.webp` 是非本人肖像的氛围示意图，请替换为授权使用的创始人照片。
- `public/media/hero-poster.webp`、`lelewag.webp` 和 `leleluv.webp` 是本次生成的概念视觉，请替换为真实品牌或产品照片。
- `public/media/hero-video.mp4` 使用 [Pexels 视频](https://www.pexels.com/video/dog-resting-on-grass-field-853770/)，依据 [Pexels License](https://www.pexels.com/license/) 使用。将来可换成品牌实拍视频。

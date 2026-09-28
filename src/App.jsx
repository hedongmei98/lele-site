import React from 'react'

const media = (file) => `${import.meta.env.BASE_URL}media/${file}`

const ArrowIcon = ({ diagonal = false }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
    {diagonal ? (
      <path d="M5 19 19 5M8 5h11v11" />
    ) : (
      <path d="M4 12h15m-6-6 6 6-6 6" />
    )}
  </svg>
)

const brands = [
  {
    number: '01 / PET APPAREL',
    name: 'LeleWag',
    chinese: '让自在穿在身上',
    description: '以日常穿着为灵感，把舒适、活动自由和好看的细节放进每一件宠物服装。',
    image: media('lelewag.webp'),
    imageAlt: '穿着浅绿色宠物服装的边境牧羊犬',
    tone: 'sage',
  },
  {
    number: '02 / PET TREATS',
    name: 'LeleLuv',
    chinese: '把喜欢变成小小奖励',
    description: '围绕陪伴时刻构思宠物零食，让分享与奖励成为彼此更亲近的日常。',
    image: media('leleluv.webp'),
    imageAlt: '宠物零食、包装袋与一只小狗的生活方式画面',
    tone: 'peach',
  },
]

const strengths = [
  {
    number: '01',
    symbol: '✳',
    title: '从陪伴出发',
    text: '关注宠物与人的真实相处，把每天都会发生的小瞬间变成品牌灵感。',
  },
  {
    number: '02',
    symbol: '◕',
    title: '双品牌视角',
    text: '以服装与零食两条产品线，表达同一种温暖、轻松的宠物生活方式。',
  },
  {
    number: '03',
    symbol: '✦',
    title: '在意每个细节',
    text: '让颜色、触感与使用场景彼此呼应，保留可爱，也保留品质感。',
  },
]

function Header() {
  return (
    <header className="site-header shell">
      <a className="brand-lockup" href="#top" aria-label="和理宠物，返回首页">
        <span className="brand-mark">L<span>·</span></span>
        <span className="brand-name">和理宠物<span>LELE & CO.</span></span>
      </a>
      <nav className="desktop-nav" aria-label="主导航">
        <a href="#about">关于我们</a>
        <a href="#projects">品牌企划</a>
        <a href="#strengths">我们的坚持</a>
      </nav>
      <a className="header-contact" href="#contact">联系合作 <ArrowIcon diagonal /></a>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-media" aria-hidden="true" style={{ backgroundImage: `url(${media('hero-poster.webp')})` }}>
        <video autoPlay muted loop playsInline preload="metadata" poster={media('hero-poster.webp')}>
          <source src={media('hero-video.mp4')} type="video/mp4" />
        </video>
      </div>
      <div className="hero-wash" />
      <Header />
      <div className="shell hero-inner">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> A LITTLE MORE JOY, EVERY DAY</div>
          <h1 id="hero-title">让每一天，<br /><em>都值得摇尾巴。</em></h1>
          <p>为毛孩子，也为爱它们的人。<br />用好看的穿搭与开心的小奖励，装点一起生活的日常。</p>
          <div className="hero-actions">
            <a className="pill-button dark" href="#projects">探索我们的品牌 <ArrowIcon /></a>
            <a className="text-link" href="#about">认识和理 <span>↗</span></a>
          </div>
        </div>
        <div className="hero-side-note"><span>EST. IN GUANGZHOU</span><span>宠爱，自有生活感</span></div>
      </div>
      <div className="hero-bottom shell"><span>LELEWAG × LELELUV</span><a href="#about">向下探索 <span aria-hidden="true">↓</span></a><span>01 — 05</span></div>
    </section>
  )
}

function About() {
  return (
    <section className="about section-padding" id="about" aria-labelledby="about-title">
      <div className="shell about-grid">
        <div className="about-image-wrap">
          <img src={media('founder-mood.webp')} alt="品牌创始人与宠物相伴的氛围示意图，非本人肖像" loading="lazy" />
          <span className="image-label">A STORY ABOUT COMPANIONSHIP <span>✻</span></span>
        </div>
        <div className="about-copy">
          <div className="section-kicker"><span className="kicker-dot" /> 01 / ABOUT THE FOUNDER</div>
          <h2 id="about-title">从一份喜欢，<br />开始认真生活。</h2>
          <p className="about-lead">你好，我是和理宠物的创始人。</p>
          <p>我相信宠物不只是生活的一部分，它们让平凡的一天也有了被珍惜的理由。于是，我们从广州出发，创立了 LeleWag 和 LeleLuv，把对陪伴的理解放进服装与零食里。</p>
          <p>希望这些小小的设计，能让每一次出门、每一次分享，都多一点自在和快乐。</p>
          <div className="about-meta">
            <div><span>所在地</span><strong>中国 · 广州</strong></div>
            <div><span>身份</span><strong>宠物生活方式品牌创始人</strong></div>
            <div><span>联系</span><strong>合作方式待补充</strong></div>
          </div>
          <div className="about-facts" aria-label="品牌数据">
            <div><strong>02</strong><span>独立品牌</span></div>
            <div><strong>02</strong><span>核心品类</span></div>
            <div><strong>01</strong><span>共同的热爱</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="projects section-padding" id="projects" aria-labelledby="projects-title">
      <div className="shell">
        <div className="section-heading">
          <div>
            <div className="section-kicker"><span className="kicker-dot" /> 02 / OUR BRANDS</div>
            <h2 id="projects-title">两种表达，<br /><em>一份爱。</em></h2>
          </div>
          <p>围绕宠物生活的不同片刻，<br />做让人和毛孩子都心动的东西。</p>
        </div>
        <div className="project-grid">
          {brands.map((brand) => (
            <article className={`project-card ${brand.tone}`} key={brand.name}>
              <div className="project-photo"><img src={brand.image} alt={brand.imageAlt} loading="lazy" /><span className="project-chip">{brand.number}</span></div>
              <div className="project-content"><div><span className="project-kind">{brand.tone === 'sage' ? '宠物服装' : '宠物零食'}</span><h3>{brand.name}</h3><h4>{brand.chinese}</h4><p>{brand.description}</p></div><span className="project-arrow" aria-hidden="true"><ArrowIcon diagonal /></span></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Strengths() {
  return (
    <section className="strengths section-padding" id="strengths" aria-labelledby="strengths-title">
      <div className="shell">
        <div className="section-kicker"><span className="kicker-dot" /> 03 / WHAT WE BELIEVE</div>
        <div className="strengths-head"><h2 id="strengths-title">把热爱，<br /><em>做得更认真一点。</em></h2><p>我们喜欢轻松的表达，也认真对待每个落到生活里的想法。</p></div>
        <div className="strength-grid">
          {strengths.map((item) => (
            <article className="strength-card" key={item.number}>
              <div className="strength-top"><span>{item.number} / 03</span><span className="strength-symbol" aria-hidden="true">{item.symbol}</span></div>
              <div><h3>{item.title}</h3><p>{item.text}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <footer className="contact" id="contact">
      <div className="shell contact-inner">
        <div className="section-kicker light"><span className="kicker-dot" /> 04 / SAY HELLO</div>
        <div className="contact-main"><p>有新的想法？</p><h2>一起创造更多<br /><em>摇尾巴的时刻。</em></h2><div className="contact-cta" aria-label="合作联系方式待提供">合作方式待补充 <ArrowIcon diagonal /></div></div>
        <div className="contact-details"><div><span>联系邮箱</span><strong>邮箱待提供</strong></div><div><span>公司</span><strong>广州和理宠物用品有限公司</strong></div><div><span>品牌</span><strong>LeleWag / LeleLuv</strong></div></div>
        <div className="footer-bottom"><span>© 2026 广州和理宠物用品有限公司</span><span>WITH LOVE, FROM GUANGZHOU</span><a href="#top">回到顶部 ↑</a></div>
      </div>
      <div className="footer-decoration" aria-hidden="true">✳</div>
    </footer>
  )
}

export default function App() {
  return <><Hero /><main><About /><Projects /><Strengths /></main><Contact /></>
}

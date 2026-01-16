import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const ArticleTitle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const title = fileData.frontmatter?.title
  const isHomePage = fileData.slug === "index"
  const isAboutPage = fileData.slug === "about"
  
  if (title) {
    // Home page: bounce/fly in animation
    if (isHomePage) {
      const chars = title.split('')
      return (
        <h1 class={classNames(displayClass, "article-title", "home-title")}>
          {chars.map((char: string, i: number) => (
            <span 
              class="title-char" 
              style={`animation-delay: ${i * 0.04}s`}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>
      )
    }
    
    // About page: slide from right animation
    if (isAboutPage) {
      const chars = title.split('')
      return (
        <h1 class={classNames(displayClass, "article-title", "about-title")}>
          {chars.map((char: string, i: number) => (
            <span 
              class="title-char-slide" 
              style={`animation-delay: ${i * 0.03}s`}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>
      )
    }
    
    // Other pages: regular title
    return <h1 class={classNames(displayClass, "article-title")}>{title}</h1>
  } else {
    return null
  }
}

ArticleTitle.css = `
.article-title {
  margin: 2rem 0 0 0;
  text-align: center;
  color: var(--dark);
}

:root[saved-theme="dark"] .article-title {
  color: var(--light);
}

/* Home page title - "Phan Nguyen Huong Le" - slide from right */
.article-title.home-title {
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow: hidden;
}

.article-title.home-title .title-char {
  display: inline-block;
  animation: slideFromRight 0.5s ease-out forwards;
  opacity: 0;
  transform: translateX(50px);
  color: var(--dark);
}

:root[saved-theme="dark"] .article-title.home-title .title-char {
  color: var(--light);
}

@keyframes slideFromRight {
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.article-title.home-title:hover .title-char {
  animation: titleGlow 0.6s ease-in-out;
  animation-fill-mode: forwards;
}

@keyframes titleGlow {
  0%, 100% {
    text-shadow: none;
  }
  50% {
    color: var(--secondary);
    text-shadow: 0 0 8px rgba(155, 107, 158, 0.4);
  }
}

:root[saved-theme="dark"] .article-title.home-title:hover .title-char {
  animation: titleGlowDark 0.6s ease-in-out;
  animation-fill-mode: forwards;
}

@keyframes titleGlowDark {
  0%, 100% {
    text-shadow: none;
  }
  50% {
    color: var(--tertiary);
    text-shadow: 0 0 8px rgba(132, 165, 157, 0.5);
  }
}

/* About page title - same style as home */
.article-title.about-title {
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow: hidden;
}

.article-title.about-title .title-char-slide {
  display: inline-block;
  animation: slideFromRight 0.5s ease-out forwards;
  opacity: 0;
  transform: translateX(50px);
  color: var(--dark);
}

:root[saved-theme="dark"] .article-title.about-title .title-char-slide {
  color: var(--light);
}

.article-title.about-title:hover .title-char-slide {
  animation: titleGlow 0.6s ease-in-out;
  animation-fill-mode: forwards;
}

:root[saved-theme="dark"] .article-title.about-title:hover .title-char-slide {
  animation: titleGlowDark 0.6s ease-in-out;
  animation-fill-mode: forwards;
}
`

export default (() => ArticleTitle) satisfies QuartzComponentConstructor

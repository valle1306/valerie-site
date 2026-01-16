import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const ArticleTitle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const title = fileData.frontmatter?.title
  const isHomePage = fileData.slug === "index"
  
  if (title) {
    if (isHomePage) {
      // Split title into characters for animation on home page
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
    return <h1 class={classNames(displayClass, "article-title")}>{title}</h1>
  } else {
    return null
  }
}

ArticleTitle.css = `
.article-title {
  margin: 2rem 0 0 0;
}

.article-title.home-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.article-title.home-title .title-char {
  display: inline-block;
  animation: titleFlyIn 0.6s ease-out forwards;
  opacity: 0;
  transform: translateY(-30px) scale(0.8);
}

@keyframes titleFlyIn {
  0% {
    opacity: 0;
    transform: translateY(-30px) scale(0.8);
  }
  60% {
    transform: translateY(5px) scale(1.05);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.article-title.home-title:hover .title-char {
  animation: titleWave 0.5s ease-in-out;
  animation-fill-mode: forwards;
}

@keyframes titleWave {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
    color: var(--dark);
  }
  25% {
    transform: translateY(-8px) rotate(-3deg);
    color: var(--secondary);
  }
  75% {
    transform: translateY(3px) rotate(2deg);
    color: var(--tertiary);
  }
}
`

export default (() => ArticleTitle) satisfies QuartzComponentConstructor

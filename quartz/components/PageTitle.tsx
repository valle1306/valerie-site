import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  
  // Split title into characters for animation
  const chars = title.split('')
  
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href="/valerie-site/" class="animated-title">
        {chars.map((char, i) => (
          <span 
            class="title-char" 
            style={`animation-delay: ${i * 0.05}s`}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}

.page-title a {
  color: var(--dark);
  text-decoration: none;
}

:root[saved-theme="dark"] .page-title a {
  color: var(--light);
}

.animated-title {
  display: inline-flex;
  overflow: hidden;
}

.title-char {
  display: inline-block;
  animation: flyIn 0.6s ease-out forwards;
  opacity: 0;
  transform: translateY(-20px) rotateX(-90deg);
  color: var(--dark);
}

:root[saved-theme="dark"] .title-char {
  color: var(--light);
}

@keyframes flyIn {
  0% {
    opacity: 0;
    transform: translateY(-20px) rotateX(-90deg);
  }
  60% {
    transform: translateY(5px) rotateX(10deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotateX(0);
  }
}

.animated-title:hover .title-char {
  animation: wave 0.5s ease-in-out;
}

@keyframes wave {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor

import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const links = [
  { href: "/valerie-site/", label: "Home" },
  { href: "/valerie-site/projects", label: "Projects" },
  { href: "/valerie-site/experience", label: "Experience" },
  { href: "/valerie-site/resume", label: "CV" },
  { href: "/valerie-site/life", label: "Life" },
]

export default (() => {
  const LinksHeader: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    return (
      <nav class={`links-header ${displayClass ?? ""}`}>
        {links.map((link) => (
          <a href={link.href} class="nav-link">
            {link.label}
          </a>
        ))}
      </nav>
    )
  }

  LinksHeader.css = `
    .links-header {
      display: flex;
      gap: 1.5rem;
      align-items: center;
      flex-wrap: wrap;
    }

    .links-header .nav-link {
      color: var(--darkgray);
      text-decoration: none;
      font-weight: 500;
      padding: 0.4rem 0.8rem;
      border-radius: 6px;
      transition: all 0.2s ease;
      font-size: 0.95rem;
    }

    :root[saved-theme="dark"] .links-header .nav-link {
      color: var(--light);
    }

    .links-header .nav-link:hover {
      color: var(--secondary);
      background-color: var(--highlight);
    }

    :root[saved-theme="dark"] .links-header .nav-link:hover {
      color: var(--tertiary);
    }
  `

  return LinksHeader
}) satisfies QuartzComponentConstructor

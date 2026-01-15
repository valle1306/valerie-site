import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/resume", label: "CV" },
  { href: "/life", label: "Life" },
]

export default (() => {
  const LinksHeader: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
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

    .links-header .nav-link:hover {
      color: var(--secondary);
      background-color: var(--highlight);
    }
  `

  return LinksHeader
}) satisfies QuartzComponentConstructor

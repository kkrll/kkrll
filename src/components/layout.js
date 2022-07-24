import * as React from "react"
import { Link } from "gatsby"
import { globalStyles } from "../../stitches.config"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  globalStyles()

  if (isRootPath) {
    header = (
      <h5>
        <Link to="/">{title}</Link>
      </h5>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title} {location.pathname}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>{new Date().getFullYear()}</footer>
    </div>
  )
}

export default Layout

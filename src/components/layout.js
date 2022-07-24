import * as React from "react"
import { Link } from "gatsby"
import { globalStyles } from "../../stitches.config"

import { Box } from "./box"

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
      <Box
        flex="row"
        css={{
          marginY: "$16",
        }}
      >
        <Link className="header-link-home" to="/">
          {title} {location.pathname}
        </Link>
      </Box>
    )
  }

  return (
    <Box
      css={{
        maxWidth: "$640",
        marginX: "auto",
      }}
      data-is-root-path={isRootPath}
    >
      <header className="global-header">{header}</header>
      <Box as="main">{children}</Box>
      <footer>{new Date().getFullYear()}</footer>
    </Box>
  )
}

export default Layout

import React from "react"
import Helmet from "react-helmet"
import useSiteMetaData from "../hooks/use-sitemetadata"

const Layout = ({ children }) => {
  const { title, description } = useSiteMetaData()
  return (
    <>
      <Helmet>
        <html lang="ja" />
        <title>{title}</title>
        <meta name="descriotion" content={description} />
      </Helmet>

      <main className="container mx-auto mt-10 mb-10">{children}</main>
    </>
  )
}
export default Layout

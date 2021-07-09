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
        <style>{`
          .DayPicker-Day {
            color: #c7c7c7;
            border-radius: 0;
            border: 3px solid #fff;
            line-height: 1;
            height: 1em;
          }
          .DayPicker-Day--rideDay:not(.DayPicker-Day--outside) {
            color: #596273;
            background-color: #eef4ff;
          }
          .DayPicker-Day:not(.DayPicker-Day--rideDay) {
            pointer-events: none;
          }
        `}</style>
      </Helmet>

      <main className="container mx-auto mt-10 mb-10">{children}</main>
    </>
  )
}
export default Layout

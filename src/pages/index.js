import React from "react"
import Layout from "../components/layout"
import Strava from "../components/strava"
import Calendar from "../components/calendar"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <h1 className="text-3xl">Virtual Ride Log</h1>
        <Calendar />
        <Strava />
      </Layout>
    </>
  )
}

export default IndexPage

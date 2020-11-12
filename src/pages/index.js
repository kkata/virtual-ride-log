import React from "react"
import Layout from "../components/layout"
import Strava from "../components/strava"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <h1 className="text-3xl">Virtual Ride Log</h1>
        <Strava />
      </Layout>
    </>
  )
}

export default IndexPage

import { graphql, useStaticQuery } from "gatsby"

const useStrava = () => {
  const data = useStaticQuery(graphql`
    {
      allStravaActivity(
        filter: { type: { in: "VirtualRide" } }
        sort: { fields: start_date_local, order: DESC }
      ) {
        nodes {
          id
          name
          distance
          moving_time
          total_elevation_gain
          start_date_local(formatString: "YYYY/MM/DD", locale: "ja")
        }
      }
    }
  `)
  return data.allStravaActivity.nodes.map(node => ({
    id: node.id,
    date: node.start_date_local,
    dateForCal: node.start_date,
    name: node.name,
    distance: node.distance,
    moving_time: node.moving_time,
    total_elevation_gain: node.total_elevation_gain,
  }))
}

export default useStrava

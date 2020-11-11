import { graphql, useStaticQuery } from "gatsby"

const useStrava = () => {
  const data = useStaticQuery(graphql`
    {
      allStravaActivity(
        filter: { activity: { type: { in: ["VirtualRide"] } } }
        sort: { fields: activity___start_date_local, order: DESC }
      ) {
        nodes {
          activity {
            id
            name
            distance
            start_date_local(formatString: "YYYY/MM/DD dddd", locale: "ja")
            moving_time
            total_elevation_gain
          }
        }
      }
    }
  `)
  return data.allStravaActivity.nodes.map(node => ({
    id: node.activity.id,
    date: node.activity.start_date_local,
    name: node.activity.name,
    distance: node.activity.distance,
    moving_time: node.activity.moving_time,
    total_elevation_gain: node.activity.total_elevation_gain,
  }))
}

export default useStrava

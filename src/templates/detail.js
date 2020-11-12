import React from "react"
import { graphql, Link } from "gatsby"
import dayjs from "dayjs"
import duration from "dayjs/plugin/duration"
dayjs.extend(duration)

export const query = graphql`
  query($id: Float!) {
    stravaActivity(activity: { id: { eq: $id } }) {
      activity {
        average_speed
        name
        achievement_count
        average_heartrate
        distance
        moving_time
        kilojoules
        id
        average_cadence
        average_watts
        max_heartrate
        max_speed
        max_watts
        weighted_average_watts
        start_date_local(formatString: "YYYY/MM/DD dddd", locale: "ja")
        total_elevation_gain
      }
    }
  }
`

const DetailTemplate = ({
  data: {
    stravaActivity: { activity: detail },
  },
}) => (
  <>
    <div>
      <h1>{detail.name}</h1>
      <p>{detail.start_date_local}</p>
    </div>
    <div>
      <ul>
        <li>
          <p>{Math.round((detail.distance / 1000) * 100) / 100}km</p>
          <p>距離</p>
        </li>
        <li>
          <p>
            <span>{dayjs.duration(detail.moving_time * 1000).hours()}時間</span>
          </p>
          <p>
            <span>{dayjs.duration(detail.moving_time * 1000).minutes()}分</span>
          </p>
          <p>
            <span>{dayjs.duration(detail.moving_time * 1000).seconds()}秒</span>
          </p>
          <p>移動タイム</p>
        </li>
        <li>
          <p>{detail.total_elevation_gain}m</p>
          <p>標高</p>
        </li>
      </ul>
    </div>
    <div>
      <ul>
        <li>
          <p>{detail.weighted_average_watts}W</p>
          <p>加重平均パワー</p>
        </li>
        <li>
          <p>{detail.kilojoules}kJ</p>
          <p>合計運動量</p>
        </li>
      </ul>
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>平均</th>
            <th>最高</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>スピード</th>
            <td>{Math.round(detail.average_speed * 3.6 * 10) / 10}km/h</td>
            <td>{Math.round(detail.max_speed * 3.6 * 10) / 10}km/h</td>
          </tr>
          <tr>
            <th>ケイデンス</th>
            <td>{detail.average_cadence}</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <th>パワー</th>
            <td>{detail.average_watts}W</td>
            <td>{detail.max_watts}W</td>
          </tr>
          <tr>
            <th>心拍数</th>
            <td>{detail.average_heartrate}</td>
            <td>{detail.max_heartrate}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <Link to="/">back home</Link>
    {/* <pre>{JSON.stringify(detail, null, 2)}</pre> */}
  </>
)
export default DetailTemplate

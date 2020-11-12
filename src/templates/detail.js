import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
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
  <Layout>
    <p className="text-gray-600 text-sm">{detail.start_date_local}</p>
    <h1 className="text-2xl">{detail.name}</h1>

    <ul className="flex mt-6">
      <li>
        <p className="text-xl">
          {Math.round((detail.distance / 1000) * 100) / 100}km
        </p>
        <p className="text-center text-sm">距離</p>
      </li>
      <li className="ml-8">
        <p className="text-xl">
          <span>{dayjs.duration(detail.moving_time * 1000).hours()}時間</span>
          <span>{dayjs.duration(detail.moving_time * 1000).minutes()}分</span>
          <span>{dayjs.duration(detail.moving_time * 1000).seconds()}秒</span>
        </p>
        <p className="text-center text-sm">移動タイム</p>
      </li>
      <li className="ml-8">
        <p className="text-xl">{detail.total_elevation_gain}m</p>
        <p className="text-center text-sm">標高</p>
      </li>
    </ul>
    <ul className="flex mt-6">
      <li className="text-center">
        <p className="text-xl">{detail.weighted_average_watts}W</p>
        <p className="text-sm">加重平均パワー</p>
      </li>
      <li className="text-center ml-8">
        <p className="text-xl">{detail.kilojoules}kJ</p>
        <p className="text-sm">合計運動量</p>
      </li>
    </ul>

    <table className="mt-10">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>平均</th>
          <th>最高</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="font-normal">スピード</th>
          <td className="text-center py-3 px-5">
            {Math.round(detail.average_speed * 3.6 * 10) / 10}km/h
          </td>
          <td className="text-center py-3 px-5">
            {Math.round(detail.max_speed * 3.6 * 10) / 10}km/h
          </td>
        </tr>
        <tr>
          <th className="font-normal">ケイデンス</th>
          <td className="text-center py-3 px-5">{detail.average_cadence}</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <th className="font-normal">パワー</th>
          <td className="text-center py-3 px-5">{detail.average_watts}W</td>
          <td className="text-center py-3 px-5">{detail.max_watts}W</td>
        </tr>
        <tr>
          <th className="font-normal">心拍数</th>
          <td className="text-center py-3 px-5">{detail.average_heartrate}</td>
          <td className="text-center py-3 px-5">{detail.max_heartrate}</td>
        </tr>
      </tbody>
    </table>

    <Link to="/" className="inline-block mt-16 hover:underline">
      &lt; back home
    </Link>
    {/* <pre>{JSON.stringify(detail, null, 2)}</pre> */}
  </Layout>
)
export default DetailTemplate

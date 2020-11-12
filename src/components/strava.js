import React from "react"
import { Link } from "gatsby"
import useStrava from "../hooks/use-strava"
import dayjs from "dayjs"
import duration from "dayjs/plugin/duration"
dayjs.extend(duration)

const Strava = () => {
  const stravaActivity = useStrava()
  return (
    <>
      <ul>
        {stravaActivity.map(activity => (
          <li key={activity.id}>
            <Link to={`/${activity.id}/`}>
              <p>{activity.date}</p>
              <p>{activity.name}</p>
              <dl>
                <dt>タイム</dt>
                <dd>
                  <span>
                    {dayjs.duration(activity.moving_time * 1000).hours()}時間
                  </span>
                  <span>
                    {dayjs.duration(activity.moving_time * 1000).minutes()}分
                  </span>
                </dd>
              </dl>
              <dl>
                <dt>距離</dt>
                <dd>{Math.round((activity.distance / 1000) * 100) / 100}km</dd>
              </dl>
              <dl>
                <dt>獲得高度</dt>
                <dd>{activity.total_elevation_gain}m</dd>
              </dl>
            </Link>
          </li>
        ))}
      </ul>
      {/* <pre>{JSON.stringify(stravaActivity, null, 2)}</pre> */}
    </>
  )
}

export default Strava

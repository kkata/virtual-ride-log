import React from "react"
import { Link } from "gatsby"
import useStrava from "../hooks/use-strava"
import dayjs from "dayjs"
import duration from "dayjs/plugin/duration"
dayjs.extend(duration)

const Strava = () => {
  const stravaActivity = useStrava()
  let id
  const setId = str => {
    if (str === id) return
    return (id = str)
  }
  return (
    <>
      <ul className="divide-y divide-gray-400 mt-10">
        {stravaActivity.map(activity => (
          <li id={setId(activity.date)} key={activity.id} className="pt-1 pb-1">
            <Link
              to={`/${activity.id}/`}
              className="grid grid-cols-5 gap-3 items-center hover:bg-gray-200 pt-1 pb-1"
            >
              <p className="text-center">{activity.date}</p>
              <p className="text-center">{activity.name}</p>
              <dl className="text-center">
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
              <dl className="text-center">
                <dt>距離</dt>
                <dd>{Math.round((activity.distance / 1000) * 100) / 100}km</dd>
              </dl>
              <dl className="text-center">
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

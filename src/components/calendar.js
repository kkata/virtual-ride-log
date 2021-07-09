import React from "react"
import useStrava from "../hooks/use-strava"
import DayPicker from "react-day-picker"
import "react-day-picker/lib/style.css"

const Calendar = () => {
  const stravaActivity = useStrava()

  const rideDays = [
    ...new Set(
      stravaActivity.map(element => {
        return element.date
      })
    ),
  ]

  const calsArray = rideDays.map(item => {
    return new Date(item)
  })

  const today = new Date()

  const handleDayClick = event => {
    window.location.hash = getStringFromDate(event)
  }

  const getStringFromDate = date => {
    const year = date.getFullYear()
    const month = ("0" + (1 + date.getMonth())).slice(-2)
    const day = ("0" + date.getDate()).slice(-2)
    let formattedDateString = "YYYY/MM/DD"
    formattedDateString = formattedDateString.replace(/YYYY/g, year)
    formattedDateString = formattedDateString.replace(/MM/g, month)
    formattedDateString = formattedDateString.replace(/DD/g, day)

    return formattedDateString
  }

  return (
    <DayPicker
      numberOfMonths={3}
      modifiers={{
        rideDay: calsArray,
      }}
      month={new Date(today.getFullYear(), today.getMonth())}
      fromMonth={new Date(2017, 4)}
      toMonth={new Date(today.getFullYear(), today.getMonth())}
      onDayClick={handleDayClick}
      className="mt-10"
    />
  )
}

export default Calendar

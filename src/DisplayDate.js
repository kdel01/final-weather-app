import React from "react";

export default function DisplayDate(props) {
  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = props.date.getDay();
  let hour = props.date.getHours();
  let mins = props.date.getMinutes();

  if (hour < 10) {
    hour = `0${hour}`;
  }

  if (mins < 10) {
    mins = `0${mins}`;
  }

  return (
    <div>
      {week[day]}, {hour}:{mins}
    </div>
  );
}

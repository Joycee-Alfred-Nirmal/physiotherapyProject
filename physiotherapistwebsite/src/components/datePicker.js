import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './datepicker.css'

export default function DateTimePicker() {
  const [startDate, setStartDate] = useState();
  return (
    <div className="App datetime">
      <DatePicker className="fordatechange"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        // excludeTimes={[
        //   setHours(setMinutes(new Date(), 0), 17),
        //   setHours(setMinutes(new Date(), 30), 18),
        //   setHours(setMinutes(new Date(), 30), 19),
        //   setHours(setMinutes(new Date(), 30), 17)
        // ]}
        dateFormat="MMMM d, yyyy h:mm aa"
      />
    </div>
  );
}
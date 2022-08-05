import _ from "lodash";
import { useState } from "react";
import Picker from "./Picker";

function DatePicker() {
  const [date, setDate] = useState({
    formatted: { am: {}, en: {} },
    date: { am: {}, en: {} },
  });
  const [showDatePicker, setShowDatePicker] = useState(false);
  // console.log("dat123", date);
  return (
    <div>
      <input
        type="text"
        value={
          !_.isEmpty(date?.formatted.am) ? date?.formatted.am : "YYYY-MM-DD"
        }
        onClick={() => setShowDatePicker(!showDatePicker)}
      />
      {showDatePicker && <Picker onChangeDate={setDate} value={date} />}
    </div>
  );
}

export default DatePicker;

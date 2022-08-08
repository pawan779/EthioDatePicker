import _ from "lodash";
import { useState } from "react";
import Picker from "./Picker";

function DatePicker() {
  const [date, setDate] = useState({
    formatted: { am: {}, en: {} },
    date: { am: {}, en: {} },
  });
  const [showDatePicker, setShowDatePicker] = useState(false);

  return (
    <div>
      <input
        type="text"
        value={
          !_.isEmpty(date?.formatted.am) ? date?.formatted.am : "YYYY-MM-DD"
        }
        onClick={() => setShowDatePicker(!showDatePicker)}
      />
      <input
        type="text"
        value={
          !_.isEmpty(date?.formatted.en) ? date?.formatted.en : "YYYY-MM-DD"
        }
        onClick={() => setShowDatePicker(!showDatePicker)}
      />
      {showDatePicker && (
        <Picker
          onChangeDate={setDate}
          date={!_.isEmpty(date.formatted.en) ? date.formatted.en : ""}
          isEthiopoianData={false}
        />
      )}
    </div>
  );
}

export default DatePicker;

import React, { useEffect, useState } from "react";

import moment from "moment";
import { toEthiopianDateString, convertToGC } from "gc-to-ethiopian-calendar";
import _ from "lodash";
import { intitalDay, months, weeks, year } from "./DateData";

const Picker = ({ value = "", onChangeDate = () => {} }) => {
  const [days, setDays] = useState(intitalDay);
  const [isChanged, setIsChanged] = React.useState(false);
  const [currentYear, setCurrentYear] = React.useState(2014);
  const [currentMonth, setCurrentMonth] = React.useState(1);
  const [isLeapYear, setIsLeapYear] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState({ am: {}, en: {} });
  const [enYear, setEnYear] = React.useState(2022);
  const [today, setToday] = React.useState({
    day: "",
    week: "",
    month: "",
    year: "",
  });

  const findLeapYear = (year) => {
    return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
  };

  const converToGeorgian = (day) => {
    if (_.isNumber(day)) {
      const gcDate = convertToGC(day, currentMonth, currentYear);
      const split = gcDate.split(" ");
      return parseFloat(split[1]).toFixed(0);
    } else {
      return "";
    }
  };

  const handleSelectedDay = (day) => {
    let newDay = [...days];
    newDay.forEach((a) => {
      if (a.value == day) {
        a.isSlected = true;
      } else {
        a.isSlected = false;
      }
    });
    setDays(newDay);
    const gcDate = convertToGC(day, currentMonth, currentYear);
    const split = gcDate.split(" ");

    setSelectedDate({
      am: { day: day, month: currentMonth, year: currentYear },
      en: {
        day: split[1],
        month: moment(split[2], "MMM").format("MM"),
        year: split[3],
      },
    });

    onChangeDate({
      formatted: {
        am: currentYear + "-" + currentMonth + "-" + day,
        en:
          split[3] +
          "-" +
          moment(split[2], "MMM").format("MM") +
          "-" +
          split[1],
      },
      date: {
        am: { day: day, month: currentMonth, year: currentYear },
        en: {
          day: split[1],
          month: moment(split[2], "MMM").format("MM"),
          year: split[3],
        },
      },
    });
  };

  const getTodayDate = () => {
    const dateNow = toEthiopianDateString();
    const split = dateNow.split(" ");
    console.log(dateNow);

    const findMonth = months.find((a) => a.am == split[2]);

    setToday({
      day: split[1],
      week: split[0],
      month: findMonth.value,
      year: split[3],
    });
    _.isEmpty(value?.date?.am) && handleChangeDate(findMonth.value, split[3]);
  };

  const handleChangeDate = (month, year) => {
    const gcDate = convertToGC(1, month, year);
    const week = gcDate.split(", ");
    setEnYear(gcDate.split(" ")[3]);

    //to know in which day the month starts
    const getWeek = weeks.find((a) => a.en == week[0]);
    let newDay = [...days];
    for (let index = 1; index < getWeek.value; index++) {
      newDay.unshift({
        am: "",
        en: "",
        value: "",
        isSlected: false,
        isCurrent: false,
      });
    }
    setDays(newDay);

    setCurrentMonth(month);
    setCurrentYear(year);

    setIsLeapYear(findLeapYear(parseInt(year) + 1));
  };

  useEffect(() => {
    getTodayDate();
    !_.isEmpty(value?.date?.am) &&
      handleChangeDate(value.date.am.month, value.date.am.year);
    !_.isEmpty(value?.date?.am) && setSelectedDate(value.date);
  }, []);

  useEffect(() => {
    if (isChanged) {
      handleChangeDate(currentMonth, currentYear);
    }
    setIsChanged(false);
  }, [isChanged]);

  console.log("currenMonth", currentMonth);

  return (
    <div className="container">
      <div className="headerContainer">
        <div className="amPicker">
          <select
            name="months"
            id="months"
            value={currentMonth}
            className="dropdown"
            onChange={async (e) => {
              setDays(intitalDay);
              setCurrentMonth(parseInt(e.target.value));
              setIsChanged(true);
            }}
          >
            {months.map((month, index) => (
              <option
                value={month.value}
                key={index.toString()}
                selected={month.value == currentMonth}
              >
                {month.am}
              </option>
            ))}
          </select>

          <select
            name="years"
            id="years"
            className="dropdown"
            onChange={async (e) => {
              setDays(intitalDay);
              setCurrentYear(e.target.value);
              setIsChanged(true);
            }}
          >
            {year.map((year, index) => (
              <option
                value={year}
                key={index.toString()}
                selected={year == currentYear}
              >
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="enPicker">
          <span className="enDate">{months[currentMonth - 1].en}</span>
          <span className="enDate">
            {months[currentMonth - 1].en == "Dec/Jan"
              ? `${enYear}/${enYear + 1}`
              : enYear}
          </span>
        </div>
      </div>
      <div className="bodyContainer">
        {weeks.map((week, index) => (
          <div
            style={{
              width: "14.28%",
            }}
            key={index.toString()}
          >
            <h5>{week.am}</h5>
            <h5>{week.en}</h5>
          </div>
        ))}
        {days.map((day, index) =>
          currentMonth == 13 && day.value > `${isLeapYear ? 6 : 5}` ? null : (
            <div
              onClick={() => handleSelectedDay(day.value)}
              className="daySty"
              key={index.toString()}
            >
              {_.isNumber(day.value) && (
                <div
                  className="multiDate"
                  style={{
                    color:
                      day.value == selectedDate.am.day &&
                      currentMonth == selectedDate.am.month &&
                      currentYear == selectedDate.am.year
                        ? "#fff"
                        : currentMonth == today.month &&
                          today.day == day.value &&
                          currentYear == today.year
                        ? "#f49119"
                        : "#000",

                    backgroundColor:
                      day.value == selectedDate.am.day &&
                      currentMonth == selectedDate.am.month &&
                      currentYear == selectedDate.am.year
                        ? "#063b71"
                        : "whitesmoke",
                  }}
                >
                  <span className="amDay">{day.am}</span>
                  <span className="enDay">{converToGeorgian(day.value)}</span>
                </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Picker;

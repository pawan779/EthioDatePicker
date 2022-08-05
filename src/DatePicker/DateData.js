export const intitalDay = [
  { am: 1, en: 1, value: 1, isSlected: false, isCurrent: false },
  { am: 2, en: 2, value: 2, isSlected: false, isCurrent: false },
  { am: 3, en: 3, value: 3, isSlected: false, isCurrent: false },
  { am: 4, en: 4, value: 4, isSlected: false, isCurrent: false },
  { am: 5, en: 5, value: 5, isSlected: false, isCurrent: false },
  { am: 6, en: 6, value: 6, isSlected: false, isCurrent: false },
  { am: 7, en: 7, value: 7, isSlected: false, isCurrent: false },
  { am: 8, en: 8, value: 8, isSlected: false, isCurrent: false },
  { am: 9, en: 9, value: 9, isSlected: false, isCurrent: false },
  { am: 10, en: 10, value: 10, isSlected: false, isCurrent: false },
  { am: 11, en: 11, value: 11, isSlected: false, isCurrent: false },
  { am: 12, en: 12, value: 12, isSlected: false, isCurrent: false },
  { am: 13, en: 13, value: 13, isSlected: false, isCurrent: false },
  { am: 14, en: 14, value: 14, isSlected: false, isCurrent: false },
  { am: 15, en: 15, value: 15, isSlected: false, isCurrent: false },
  { am: 16, en: 16, value: 16, isSlected: false, isCurrent: false },
  { am: 17, en: 17, value: 17, isSlected: false, isCurrent: false },
  { am: 18, en: 18, value: 18, isSlected: false, isCurrent: false },
  { am: 19, en: 19, value: 19, isSlected: false, isCurrent: false },
  { am: 20, en: 20, value: 20, isSlected: false, isCurrent: false },
  { am: 21, en: 21, value: 21, isSlected: false, isCurrent: false },
  { am: 22, en: 22, value: 22, isSlected: false, isCurrent: false },
  { am: 23, en: 23, value: 23, isSlected: false, isCurrent: false },
  { am: 24, en: 24, value: 24, isSlected: false, isCurrent: false },
  { am: 25, en: 25, value: 25, isSlected: false, isCurrent: false },
  { am: 26, en: 26, value: 26, isSlected: false, isCurrent: false },
  { am: 27, en: 27, value: 27, isSlected: false, isCurrent: false },
  { am: 28, en: 28, value: 28, isSlected: false, isCurrent: false },
  { am: 29, en: 29, value: 29, isSlected: false, isCurrent: false },
  { am: 30, en: 30, value: 30, isSlected: false, isCurrent: false },
];

export const weeks = [
  { am: "እሁድ", en: "Sun", value: 1 },
  { am: "ሰኞ", en: "Mon", value: 2 },
  { am: "ማክሰኞ", en: "Tue", value: 3 },
  { am: "ረቡዕ", en: "Wed", value: 4 },
  { am: "ሐሙስ", en: "Thu", value: 5 },
  { am: "ዓርብ", en: "Fri", value: 6 },
  { am: "ቅዳሜ", en: "Sat", value: 7 },
];

export const months = [
  { am: "መስከረም", en: "Jan", value: 1 },
  { am: "ጥቅምት", en: "Feb", value: 2 },
  { am: "ኅዳር", en: "Mar", value: 3 },
  { am: "ታኅሣሥ", en: "Apr", value: 4 },
  { am: "ጥር", en: "May", value: 5 },
  { am: "የካቲት", en: "Jun", value: 6 },
  { am: "መጋቢት", en: "Jul", value: 7 },
  { am: "ሚያዝያ", en: "Aug", value: 8 },
  { am: "ግንቦት", en: "Sep", value: 9 },
  { am: "ሰኔ", en: "Oct", value: 10 },
  { am: "ሐምሌ", en: "Nov", value: 11 },
  { am: "ነሐሴ", en: "Dec", value: 12 },
  {
    am: "ጳጐሜን/ጳጉሜ",
    en: "ext",
    value: 13,
  },
];

// export const year = [
//   2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026,
//   2027, 2028, 2029, 2030,
// ];

//generate array of years from 1900 to 2100
export const year = Array.from({ length: 201 }, (v, k) => k + 1900);

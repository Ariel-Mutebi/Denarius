/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();
  while (output.length < targetLength) {
    output = '0' + output;
  }
  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions)
/* harmony export */ });
/* unused harmony export setDefaultOptions */
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

var formatters = {
  // Era
  G: function G(date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B
      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ
      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function y(date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear();
      // Returns 1 for 1 BC (which is year 0 in JavaScript)
      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options);
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

    // Two digit year
    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    }

    // Ordinal number
    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    }

    // Padding
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date);

    // Padding
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04
      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4
      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...
      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04
      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4
      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...
      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function M(date, token, localize) {
    var month = date.getUTCMonth();
    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th
      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec
      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D
      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December
      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize) {
    var month = date.getUTCMonth();
    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12
      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec
      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D
      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December
      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);
    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);
    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function d(date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function D(date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);
    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function e(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value
      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });
      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function c(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value
      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });
      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T
      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu
      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday
      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function i(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02
      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd
      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue
      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function a(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();
      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function b(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }
    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();
      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function h(date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function H(date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize) {
    var hours = date.getUTCHours() % 12;
    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;
    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function m(date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function s(date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function S(date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return 'Z';
    }
    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long
      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long
      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};
function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, dirtyDelimiter);
}
function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */
var formatters = {
  // Year
  y: function y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    var signedYear = date.getUTCFullYear();
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';
    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();
      case 'aaa':
        return dayPeriodEnumValue;
      case 'aaaaa':
        return dayPeriodEnumValue[0];
      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function h(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dateLongFormatter = function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });
    case 'PP':
      return formatLong.date({
        width: 'medium'
      });
    case 'PPP':
      return formatLong.date({
        width: 'long'
      });
    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
};
var timeLongFormatter = function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });
    case 'pp':
      return formatLong.time({
        width: 'medium'
      });
    case 'ppp':
      return formatLong.time({
        width: 'long'
      });
    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
};
var dateTimeLongFormatter = function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }
  var dateTimeFormat;
  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;
    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;
    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;
    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }
  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
};
var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000;
function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");



function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }
  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfThisYear, options);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isProtectedDayOfYearToken: () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   isProtectedWeekYearToken: () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   throwProtectedError: () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, options);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeek, options);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */
function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js");










 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;

/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  var firstWeekContainsDate = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }
  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }
  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);
  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  }

  // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376
  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];
    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }
    var firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }
    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__["default"][firstCharacter];
    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }
      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }
      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }
    return substring;
  }).join('');
  return result;
}
function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */
function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  return value instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */
function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;
    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;
      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }
    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}
function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
  return undefined;
}
function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }
  return result;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};
var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';
      case 2:
        return number + 'nd';
      case 3:
        return number + 'rd';
    }
  }
  return number + 'th';
};
var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");





/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */
function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/***/ }),

/***/ "./node_modules/intro.js/intro.module.js":
/*!***********************************************!*\
  !*** ./node_modules/intro.js/intro.module.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rt)
/* harmony export */ });
/*!
 * Intro.js v7.2.0
 * https://introjs.com
 *
 * Copyright (C) 2012-2023 Afshin Mehrabani (@afshinmeh).
 * https://introjs.com
 *
 * Date: Mon, 14 Aug 2023 19:47:14 GMT
 */
function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e,n,o){return new(n||(n=Promise))((function(i,r){function s(t){try{l(o.next(t))}catch(t){r(t)}}function a(t){try{l(o.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}l((o=o.apply(t,e||[])).next())}))}function n(t,e){var n,o,i,r,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(a){return function(l){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;r&&(r=0,a[0]&&(s=0)),s;)try{if(n=1,o&&(i=2&a[0]?o.return:a[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;switch(o=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,o=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){s.label=a[1];break}if(6===a[0]&&s.label<i[1]){s.label=i[1],i=a;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(a);break}i[2]&&s.ops.pop(),s.trys.pop();continue}a=e.call(t,s)}catch(t){a=[6,t],o=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}}function o(t,e,n){var o,r=((o={})[t]=e,o.path="/",o.expires=void 0,o);if(n){var s=new Date;s.setTime(s.getTime()+24*n*60*60*1e3),r.expires=s.toUTCString()}var a=[];for(var l in r)a.push("".concat(l,"=").concat(r[l]));return document.cookie=a.join("; "),i(t)}function i(t){return(e={},document.cookie.split(";").forEach((function(t){var n=t.split("="),o=n[0],i=n[1];e[o.trim()]=i})),e)[t];var e}"function"==typeof SuppressedError&&SuppressedError;function r(t,e){e?o(t._options.dontShowAgainCookie,"true",t._options.dontShowAgainCookieDays):o(t._options.dontShowAgainCookie,"",-1)}var s,a=(s={},function(t,e){return void 0===e&&(e="introjs-stamp"),s[e]=s[e]||0,void 0===t[e]&&(t[e]=s[e]++),t[e]}),l=new(function(){function t(){this.events_key="introjs_event"}return t.prototype._id=function(t,e,n){return t+a(e)+(n?"_".concat(a(n)):"")},t.prototype.on=function(t,e,n,o,i){var r=this._id(e,n,o),s=function(e){return n(o||t,e||window.event)};"addEventListener"in t?t.addEventListener(e,s,i):"attachEvent"in t&&t.attachEvent("on".concat(e),s),t[this.events_key]=t[this.events_key]||{},t[this.events_key][r]=s},t.prototype.off=function(t,e,n,o,i){var r=this._id(e,n,o),s=t[this.events_key]&&t[this.events_key][r];s&&("removeEventListener"in t?t.removeEventListener(e,s,i):"detachEvent"in t&&t.detachEvent("on".concat(e),s),t[this.events_key][r]=null)},t}()),c=function(t){return"function"==typeof t};function u(t,e){if(t instanceof SVGElement){var n=t.getAttribute("class")||"";n.match(e)||t.setAttribute("class","".concat(n," ").concat(e))}else if(void 0!==t.classList)for(var o=0,i=e.split(" ");o<i.length;o++){var r=i[o];t.classList.add(r)}else t.className.match(e)||(t.className+=" ".concat(e))}function p(t,e){var n="";return"currentStyle"in t?n=t.currentStyle[e]:document.defaultView&&document.defaultView.getComputedStyle&&(n=document.defaultView.getComputedStyle(t,null).getPropertyValue(e)),n&&n.toLowerCase?n.toLowerCase():n}function h(t,e){if(t){var n=function(t){var e=window.getComputedStyle(t),n="absolute"===e.position,o=/(auto|scroll)/;if("fixed"===e.position)return document.body;for(var i=t;i=i.parentElement;)if(e=window.getComputedStyle(i),(!n||"static"!==e.position)&&o.test(e.overflow+e.overflowY+e.overflowX))return i;return document.body}(e);n!==document.body&&(n.scrollTop=e.offsetTop-n.offsetTop)}}function d(){if(void 0!==window.innerWidth)return{width:window.innerWidth,height:window.innerHeight};var t=document.documentElement;return{width:t.clientWidth,height:t.clientHeight}}function f(t,e,n,o,i){var r;if("off"!==e&&(t&&(r="tooltip"===e?i.getBoundingClientRect():o.getBoundingClientRect(),!function(t){var e=t.getBoundingClientRect();return e.top>=0&&e.left>=0&&e.bottom+80<=window.innerHeight&&e.right<=window.innerWidth}(o)))){var s=d().height;r.bottom-(r.bottom-r.top)<0||o.clientHeight>s?window.scrollBy(0,r.top-(s/2-r.height/2)-n):window.scrollBy(0,r.top-(s/2-r.height/2)+n)}}function b(t){t.setAttribute("role","button"),t.tabIndex=0}function m(t){var e=t.parentElement;return!(!e||"HTML"===e.nodeName)&&("fixed"===p(t,"position")||m(e))}function g(t,e){var n=document.body,o=document.documentElement,i=window.pageYOffset||o.scrollTop||n.scrollTop,r=window.pageXOffset||o.scrollLeft||n.scrollLeft;e=e||n;var s=t.getBoundingClientRect(),a=e.getBoundingClientRect(),l=p(e,"position"),c={width:s.width,height:s.height};return"body"!==e.tagName.toLowerCase()&&"relative"===l||"sticky"===l?Object.assign(c,{top:s.top-a.top,left:s.left-a.left}):m(t)?Object.assign(c,{top:s.top,left:s.left}):Object.assign(c,{top:s.top+i,left:s.left+r})}function v(t,e){if(t instanceof SVGElement){var n=t.getAttribute("class")||"";t.setAttribute("class",n.replace(e,"").replace(/^\s+|\s+$/g,""))}else t.className=t.className.replace(e,"").replace(/^\s+|\s+$/g,"")}function y(t,e){var n="";if(t.style.cssText&&(n+=t.style.cssText),"string"==typeof e)n+=e;else for(var o in e)n+="".concat(o,":").concat(e[o],";");t.style.cssText=n}function w(t,e,n){if(n&&e){var o=g(e.element,t._targetElement),i=t._options.helperElementPadding;e.element instanceof Element&&m(e.element)?u(n,"introjs-fixedTooltip"):v(n,"introjs-fixedTooltip"),"floating"===e.position&&(i=0),y(n,{width:"".concat(o.width+i,"px"),height:"".concat(o.height+i,"px"),top:"".concat(o.top-i/2,"px"),left:"".concat(o.left-i/2,"px")})}}function _(t,e,n,o,i){return t.left+e+n.width>o.width?(i.style.left="".concat(o.width-n.width-t.left,"px"),!1):(i.style.left="".concat(e,"px"),!0)}function C(t,e,n,o){return t.left+t.width-e-n.width<0?(o.style.left="".concat(-t.left,"px"),!1):(o.style.right="".concat(e,"px"),!0)}function S(t,e){t.includes(e)&&t.splice(t.indexOf(e),1)}function k(t,e,n,o){var i=t.slice(),r=d(),s=g(n).height+10,a=g(n).width+20,l=e.getBoundingClientRect(),c="floating";if(l.bottom+s>r.height&&S(i,"bottom"),l.top-s<0&&S(i,"top"),l.right+a>r.width&&S(i,"right"),l.left-a<0&&S(i,"left"),o&&(o=o.split("-")[0]),i.length&&(c=i[0],i.includes(o)&&(c=o)),"top"===c||"bottom"===c){var u=void 0,p=[];"top"===c?(u="top-middle-aligned",p=["top-left-aligned","top-middle-aligned","top-right-aligned"]):(u="bottom-middle-aligned",p=["bottom-left-aligned","bottom-middle-aligned","bottom-right-aligned"]),c=function(t,e,n,o){var i=e/2,r=Math.min(n,window.screen.width);return r-t<e&&(S(o,"top-left-aligned"),S(o,"bottom-left-aligned")),(t<i||r-t<i)&&(S(o,"top-middle-aligned"),S(o,"bottom-middle-aligned")),t<e&&(S(o,"top-right-aligned"),S(o,"bottom-right-aligned")),o.length?o[0]:null}(l.left,a,r.width,p)||u}return c}function j(t,e,n,o,i){if(void 0===i&&(i=!1),e){var r,s,a,l,c="";n.style.top="",n.style.right="",n.style.bottom="",n.style.left="",n.style.marginLeft="",n.style.marginTop="",o.style.display="inherit",c="string"==typeof e.tooltipClass?e.tooltipClass:t._options.tooltipClass,n.className=["introjs-tooltip",c].filter(Boolean).join(" "),n.setAttribute("role","dialog"),"floating"!==(l=e.position)&&t._options.autoPosition&&(l=k(t._options.positionPrecedence,e.element,n,l)),s=g(e.element),r=g(n),a=d(),u(n,"introjs-".concat(l));var p=s.width/2-r.width/2;switch(l){case"top-right-aligned":o.className="introjs-arrow bottom-right";var h=0;C(s,h,r,n),n.style.bottom="".concat(s.height+20,"px");break;case"top-middle-aligned":o.className="introjs-arrow bottom-middle",i&&(p+=5),C(s,p,r,n)&&(n.style.right="",_(s,p,r,a,n)),n.style.bottom="".concat(s.height+20,"px");break;case"top-left-aligned":case"top":o.className="introjs-arrow bottom",_(s,i?0:15,r,a,n),n.style.bottom="".concat(s.height+20,"px");break;case"right":n.style.left="".concat(s.width+20,"px"),s.top+r.height>a.height?(o.className="introjs-arrow left-bottom",n.style.top="-".concat(r.height-s.height-20,"px")):o.className="introjs-arrow left";break;case"left":i||!0!==t._options.showStepNumbers||(n.style.top="15px"),s.top+r.height>a.height?(n.style.top="-".concat(r.height-s.height-20,"px"),o.className="introjs-arrow right-bottom"):o.className="introjs-arrow right",n.style.right="".concat(s.width+20,"px");break;case"floating":o.style.display="none",n.style.left="50%",n.style.top="50%",n.style.marginLeft="-".concat(r.width/2,"px"),n.style.marginTop="-".concat(r.height/2,"px");break;case"bottom-right-aligned":o.className="introjs-arrow top-right",C(s,h=0,r,n),n.style.top="".concat(s.height+20,"px");break;case"bottom-middle-aligned":o.className="introjs-arrow top-middle",i&&(p+=5),C(s,p,r,n)&&(n.style.right="",_(s,p,r,a,n)),n.style.top="".concat(s.height+20,"px");break;default:o.className="introjs-arrow top",_(s,0,r,a,n),n.style.top="".concat(s.height+20,"px")}}}function A(){for(var t=0,e=Array.from(document.querySelectorAll(".introjs-showElement"));t<e.length;t++){v(e[t],/introjs-[a-zA-Z]+/g)}}function x(t,e){var n=document.createElement(t);e=e||{};var o=/^(?:role|data-|aria-)/;for(var i in e){var r=e[i];"style"===i&&"function"!=typeof r?y(n,r):"string"==typeof r&&i.match(o)?n.setAttribute(i,r):n[i]=r}return n}function N(t,e,n){if(void 0===n&&(n=!1),n){var o=e.style.opacity||"1";y(e,{opacity:"0"}),window.setTimeout((function(){y(e,{opacity:o})}),10)}t.appendChild(e)}function E(t,e){return(t+1)/e*100}function T(t,e){var n=x("div",{className:"introjs-bullets"});!1===t._options.showBullets&&(n.style.display="none");var o=x("ul");o.setAttribute("role","tablist");for(var i=function(){var e=this.getAttribute("data-step-number");null!=e&&t.goToStep(parseInt(e,10))},r=0;r<t._introItems.length;r++){var s=t._introItems[r].step,a=x("li"),l=x("a");a.setAttribute("role","presentation"),l.setAttribute("role","tab"),l.onclick=i,r===e.step-1&&(l.className="active"),b(l),l.innerHTML="&nbsp;",l.setAttribute("data-step-number",s.toString()),a.appendChild(l),o.appendChild(a)}return n.appendChild(o),n}function I(t,e,n){var o=t.querySelector(".introjs-progress .introjs-progressbar");if(o){var i=E(e,n);o.style.cssText="width:".concat(i,"%;"),o.setAttribute("aria-valuenow",i.toString())}}function L(t,o){return e(this,void 0,void 0,(function(){var i,r,s,a,l,d,m,g,v,_,C,S,k,L,P,q,R,O,M,D,F,V,z,G,W=this;return n(this,(function(Q){switch(Q.label){case 0:return c(t._introChangeCallback)?[4,t._introChangeCallback.call(t,o.element)]:[3,2];case 1:Q.sent(),Q.label=2;case 2:return i=document.querySelector(".introjs-helperLayer"),r=document.querySelector(".introjs-tooltipReferenceLayer"),s="introjs-helperLayer","string"==typeof o.highlightClass&&(s+=" ".concat(o.highlightClass)),"string"==typeof t._options.highlightClass&&(s+=" ".concat(t._options.highlightClass)),null!==i&&null!==r?(m=r.querySelector(".introjs-helperNumberLayer"),g=r.querySelector(".introjs-tooltiptext"),v=r.querySelector(".introjs-tooltip-title"),_=r.querySelector(".introjs-arrow"),C=r.querySelector(".introjs-tooltip"),d=r.querySelector(".introjs-skipbutton"),l=r.querySelector(".introjs-prevbutton"),a=r.querySelector(".introjs-nextbutton"),i.className=s,C.style.opacity="0",C.style.display="none",h(t._options.scrollToElement,o.element),w(t,o,i),w(t,o,r),A(),t._lastShowElementTimer&&window.clearTimeout(t._lastShowElementTimer),t._lastShowElementTimer=window.setTimeout((function(){null!==m&&(m.innerHTML="".concat(o.step," ").concat(t._options.stepNumbersOfLabel," ").concat(t._introItems.length)),g.innerHTML=o.intro||"",v.innerHTML=o.title||"",C.style.display="block",j(t,o,C,_),function(t,e,n){if(t){var o=e.querySelector(".introjs-bullets li > a.active"),i=e.querySelector('.introjs-bullets li > a[data-step-number="'.concat(n.step,'"]'));o&&i&&(o.className="",i.className="active")}}(t._options.showBullets,r,o),I(r,t._currentStep,t._introItems.length),C.style.opacity="1",(null!=a&&/introjs-donebutton/gi.test(a.className)||null!=a)&&a.focus(),f(t._options.scrollToElement,o.scrollTo,t._options.scrollPadding,o.element,g)}),350)):(S=x("div",{className:s}),k=x("div",{className:"introjs-tooltipReferenceLayer"}),L=x("div",{className:"introjs-arrow"}),P=x("div",{className:"introjs-tooltip"}),q=x("div",{className:"introjs-tooltiptext"}),R=x("div",{className:"introjs-tooltip-header"}),O=x("h1",{className:"introjs-tooltip-title"}),M=x("div"),y(S,{"box-shadow":"0 0 1px 2px rgba(33, 33, 33, 0.8), rgba(33, 33, 33, ".concat(t._options.overlayOpacity.toString(),") 0 0 0 5000px")}),h(t._options.scrollToElement,o.element),w(t,o,S),w(t,o,k),N(t._targetElement,S,!0),N(t._targetElement,k),q.innerHTML=o.intro,O.innerHTML=o.title,M.className="introjs-tooltipbuttons",!1===t._options.showButtons&&(M.style.display="none"),R.appendChild(O),P.appendChild(R),P.appendChild(q),t._options.dontShowAgain&&(D=x("div",{className:"introjs-dontShowAgain"}),(F=x("input",{type:"checkbox",id:"introjs-dontShowAgain",name:"introjs-dontShowAgain"})).onchange=function(e){t.setDontShowAgain(e.target.checked)},(V=x("label",{htmlFor:"introjs-dontShowAgain"})).innerText=t._options.dontShowAgainLabel,D.appendChild(F),D.appendChild(V),P.appendChild(D)),P.appendChild(T(t,o)),P.appendChild(function(t){var e=x("div");e.className="introjs-progress",!1===t._options.showProgress&&(e.style.display="none");var n=x("div",{className:"introjs-progressbar"});t._options.progressBarAdditionalClass&&(n.className+=" "+t._options.progressBarAdditionalClass);var o=E(t._currentStep,t._introItems.length);return n.setAttribute("role","progress"),n.setAttribute("aria-valuemin","0"),n.setAttribute("aria-valuemax","100"),n.setAttribute("aria-valuenow",o.toString()),n.style.cssText="width:".concat(o,"%;"),e.appendChild(n),e}(t)),z=x("div"),!0===t._options.showStepNumbers&&(z.className="introjs-helperNumberLayer",z.innerHTML="".concat(o.step," ").concat(t._options.stepNumbersOfLabel," ").concat(t._introItems.length),P.appendChild(z)),P.appendChild(L),k.appendChild(P),(a=x("a")).onclick=function(){return e(W,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return t._introItems.length-1===t._currentStep?[3,2]:[4,B(t)];case 1:return e.sent(),[3,6];case 2:return/introjs-donebutton/gi.test(a.className)?c(t._introCompleteCallback)?[4,t._introCompleteCallback.call(t,t._currentStep,"done")]:[3,4]:[3,6];case 3:e.sent(),e.label=4;case 4:return[4,et(t,t._targetElement)];case 5:e.sent(),e.label=6;case 6:return[2]}}))}))},b(a),a.innerHTML=t._options.nextLabel,(l=x("a")).onclick=function(){return e(W,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return t._currentStep>0?[4,H(t)]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2]}}))}))},b(l),l.innerHTML=t._options.prevLabel,b(d=x("a",{className:"introjs-skipbutton"})),d.innerHTML=t._options.skipLabel,d.onclick=function(){return e(W,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return t._introItems.length-1===t._currentStep&&c(t._introCompleteCallback)?[4,t._introCompleteCallback.call(t,t._currentStep,"skip")]:[3,2];case 1:e.sent(),e.label=2;case 2:return c(t._introSkipCallback)?[4,t._introSkipCallback.call(t,t._currentStep)]:[3,4];case 3:e.sent(),e.label=4;case 4:return[4,et(t,t._targetElement)];case 5:return e.sent(),[2]}}))}))},R.appendChild(d),t._introItems.length>1&&M.appendChild(l),M.appendChild(a),P.appendChild(M),j(t,o,P,L),f(t._options.scrollToElement,o.scrollTo,t._options.scrollPadding,o.element,P)),(G=t._targetElement.querySelector(".introjs-disableInteraction"))&&G.parentNode&&G.parentNode.removeChild(G),o.disableInteraction&&function(t,e){var n=document.querySelector(".introjs-disableInteraction");null===n&&(n=x("div",{className:"introjs-disableInteraction"}),t._targetElement.appendChild(n)),w(t,e,n)}(t,o),0===t._currentStep&&t._introItems.length>1?(null!=a&&(a.className="".concat(t._options.buttonClass," introjs-nextbutton"),a.innerHTML=t._options.nextLabel),!0===t._options.hidePrev?(null!=l&&(l.className="".concat(t._options.buttonClass," introjs-prevbutton introjs-hidden")),null!=a&&u(a,"introjs-fullbutton")):null!=l&&(l.className="".concat(t._options.buttonClass," introjs-prevbutton introjs-disabled"))):t._introItems.length-1===t._currentStep||1===t._introItems.length?(null!=l&&(l.className="".concat(t._options.buttonClass," introjs-prevbutton")),!0===t._options.hideNext?(null!=a&&(a.className="".concat(t._options.buttonClass," introjs-nextbutton introjs-hidden")),null!=l&&u(l,"introjs-fullbutton")):null!=a&&(!0===t._options.nextToDone?(a.innerHTML=t._options.doneLabel,u(a,"".concat(t._options.buttonClass," introjs-nextbutton introjs-donebutton"))):a.className="".concat(t._options.buttonClass," introjs-nextbutton introjs-disabled"))):(null!=l&&(l.className="".concat(t._options.buttonClass," introjs-prevbutton")),null!=a&&(a.className="".concat(t._options.buttonClass," introjs-nextbutton"),a.innerHTML=t._options.nextLabel)),null!=l&&l.setAttribute("role","button"),null!=a&&a.setAttribute("role","button"),null!=d&&d.setAttribute("role","button"),null!=a&&a.focus(),function(t){u(t,"introjs-showElement");var e=p(t,"position");"absolute"!==e&&"relative"!==e&&"sticky"!==e&&"fixed"!==e&&u(t,"introjs-relativePosition")}(o.element),c(t._introAfterChangeCallback)?[4,t._introAfterChangeCallback.call(t,o.element)]:[3,4];case 3:Q.sent(),Q.label=4;case 4:return[2]}}))}))}function P(t,o){return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return t._currentStep=o-2,void 0===t._introItems?[3,2]:[4,B(t)];case 1:e.sent(),e.label=2;case 2:return[2]}}))}))}function q(t,o){return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return t._currentStepNumber=o,void 0===t._introItems?[3,2]:[4,B(t)];case 1:e.sent(),e.label=2;case 2:return[2]}}))}))}function B(t){return e(this,void 0,void 0,(function(){var e,o,i;return n(this,(function(n){switch(n.label){case 0:if(t._direction="forward",void 0!==t._currentStepNumber)for(e=0;e<t._introItems.length;e++)t._introItems[e].step===t._currentStepNumber&&(t._currentStep=e-1,t._currentStepNumber=void 0);return-1===t._currentStep?t._currentStep=0:++t._currentStep,o=t._introItems[t._currentStep],i=!0,c(t._introBeforeChangeCallback)?[4,t._introBeforeChangeCallback.call(t,o&&o.element,t._currentStep,t._direction)]:[3,2];case 1:i=n.sent(),n.label=2;case 2:return!1===i?(--t._currentStep,[2,!1]):t._introItems.length<=t._currentStep?c(t._introCompleteCallback)?[4,t._introCompleteCallback.call(t,t._currentStep,"end")]:[3,4]:[3,6];case 3:n.sent(),n.label=4;case 4:return[4,et(t,t._targetElement)];case 5:return n.sent(),[2,!1];case 6:return[4,L(t,o)];case 7:return n.sent(),[2,!0]}}))}))}function H(t){return e(this,void 0,void 0,(function(){var e,o;return n(this,(function(n){switch(n.label){case 0:return t._direction="backward",t._currentStep<=0?[2,!1]:(--t._currentStep,e=t._introItems[t._currentStep],o=!0,c(t._introBeforeChangeCallback)?[4,t._introBeforeChangeCallback.call(t,e&&e.element,t._currentStep,t._direction)]:[3,2]);case 1:o=n.sent(),n.label=2;case 2:return!1===o?(++t._currentStep,[2,!1]):[4,L(t,e)];case 3:return n.sent(),[2,!0]}}))}))}function R(t,o){return e(this,void 0,void 0,(function(){var e,i;return n(this,(function(n){switch(n.label){case 0:return null===(e=void 0===o.code?o.which:o.code)&&(e=null===o.charCode?o.keyCode:o.charCode),"Escape"!==e&&27!==e||!0!==t._options.exitOnEsc?[3,2]:[4,et(t,t._targetElement)];case 1:return n.sent(),[3,16];case 2:return"ArrowLeft"!==e&&37!==e?[3,4]:[4,H(t)];case 3:return n.sent(),[3,16];case 4:return"ArrowRight"!==e&&39!==e?[3,6]:[4,B(t)];case 5:return n.sent(),[3,16];case 6:return"Enter"!==e&&"NumpadEnter"!==e&&13!==e?[3,16]:(i=o.target||o.srcElement)&&i.className.match("introjs-prevbutton")?[4,H(t)]:[3,8];case 7:return n.sent(),[3,15];case 8:return i&&i.className.match("introjs-skipbutton")?t._introItems.length-1===t._currentStep&&c(t._introCompleteCallback)?[4,t._introCompleteCallback.call(t,t._currentStep,"skip")]:[3,10]:[3,12];case 9:n.sent(),n.label=10;case 10:return[4,et(t,t._targetElement)];case 11:return n.sent(),[3,15];case 12:return i&&i.getAttribute("data-step-number")?(i.click(),[3,15]):[3,13];case 13:return[4,B(t)];case 14:n.sent(),n.label=15;case 15:o.preventDefault?o.preventDefault():o.returnValue=!1,n.label=16;case 16:return[2]}}))}))}function O(e){if(null===e||"object"!==t(e)||"nodeType"in e)return e;var n={};for(var o in e)"jQuery"in window&&e[o]instanceof window.jQuery?n[o]=e[o]:n[o]=O(e[o]);return n}function M(t){var e=document.querySelector(".introjs-hints");return e?Array.from(e.querySelectorAll(t)):[]}function D(t,o){return e(this,void 0,void 0,(function(){var e;return n(this,(function(n){switch(n.label){case 0:return e=M('.introjs-hint[data-step="'.concat(o,'"]'))[0],Y(),e&&u(e,"introjs-hidehint"),c(t._hintCloseCallback)?[4,t._hintCloseCallback.call(t,o)]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2]}}))}))}function F(t){return e(this,void 0,void 0,(function(){var e,o,i,r,s;return n(this,(function(n){switch(n.label){case 0:e=M(".introjs-hint"),o=0,i=e,n.label=1;case 1:return o<i.length?(r=i[o],(s=r.getAttribute("data-step"))?[4,D(t,parseInt(s,10))]:[3,3]):[3,4];case 2:n.sent(),n.label=3;case 3:return o++,[3,1];case 4:return[2]}}))}))}function V(t){return e(this,void 0,void 0,(function(){var e,o,i,r,s;return n(this,(function(n){switch(n.label){case 0:if(!(e=M(".introjs-hint"))||!e.length)return[3,1];for(o=0,i=e;o<i.length;o++)r=i[o],(s=r.getAttribute("data-step"))&&z(parseInt(s,10));return[3,3];case 1:return[4,$(t,t._targetElement)];case 2:n.sent(),n.label=3;case 3:return[2]}}))}))}function z(t){var e=M('.introjs-hint[data-step="'.concat(t,'"]'))[0];e&&v(e,/introjs-hidehint/g)}function G(t){var e=M('.introjs-hint[data-step="'.concat(t,'"]'))[0];e&&e.parentNode&&e.parentNode.removeChild(e)}function W(t){return e(this,void 0,void 0,(function(){var e,o,i,r,s,a,p;return n(this,(function(n){switch(n.label){case 0:for(null===(e=document.querySelector(".introjs-hints"))&&(e=x("div",{className:"introjs-hints"})),o=function(e){return function(n){var o=n||window.event;o&&o.stopPropagation&&o.stopPropagation(),o&&null!==o.cancelBubble&&(o.cancelBubble=!0),X(t,e)}},i=0;i<t._hintItems.length;i++){if(r=t._hintItems[i],document.querySelector('.introjs-hint[data-step="'.concat(i,'"]')))return[2];b(s=x("a",{className:"introjs-hint"})),s.onclick=o(i),r.hintAnimation||u(s,"introjs-hint-no-anim"),m(r.element)&&u(s,"introjs-fixedhint"),a=x("div",{className:"introjs-hint-dot"}),p=x("div",{className:"introjs-hint-pulse"}),s.appendChild(a),s.appendChild(p),s.setAttribute("data-step",i.toString()),r.hintTargetElement=r.element,r.element=s,Q(r.hintPosition,s,r.hintTargetElement),e.appendChild(s)}return document.body.appendChild(e),c(t._hintsAddedCallback)?[4,t._hintsAddedCallback.call(t)]:[3,2];case 1:n.sent(),n.label=2;case 2:return t._options.hintAutoRefreshInterval>=0&&(t._hintsAutoRefreshFunction=(h=function(){return U(t)},d=t._options.hintAutoRefreshInterval,function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];window.clearTimeout(f),f=window.setTimeout((function(){h(t)}),d)}),l.on(window,"scroll",t._hintsAutoRefreshFunction,t,!0)),[2]}var h,d,f}))}))}function Q(t,e,n){if(void 0!==n){var o=g(n),i=20,r=20;switch(t){default:case"top-left":e.style.left="".concat(o.left,"px"),e.style.top="".concat(o.top,"px");break;case"top-right":e.style.left="".concat(o.left+o.width-i,"px"),e.style.top="".concat(o.top,"px");break;case"bottom-left":e.style.left="".concat(o.left,"px"),e.style.top="".concat(o.top+o.height-r,"px");break;case"bottom-right":e.style.left="".concat(o.left+o.width-i,"px"),e.style.top="".concat(o.top+o.height-r,"px");break;case"middle-left":e.style.left="".concat(o.left,"px"),e.style.top="".concat(o.top+(o.height-r)/2,"px");break;case"middle-right":e.style.left="".concat(o.left+o.width-i,"px"),e.style.top="".concat(o.top+(o.height-r)/2,"px");break;case"middle-middle":e.style.left="".concat(o.left+(o.width-i)/2,"px"),e.style.top="".concat(o.top+(o.height-r)/2,"px");break;case"bottom-middle":e.style.left="".concat(o.left+(o.width-i)/2,"px"),e.style.top="".concat(o.top+o.height-r,"px");break;case"top-middle":e.style.left="".concat(o.left+(o.width-i)/2,"px"),e.style.top="".concat(o.top,"px")}}}function X(t,o){return e(this,void 0,void 0,(function(){var e,i,r,s,a,l,u,p,h,d,f;return n(this,(function(n){switch(n.label){case 0:return e=document.querySelector('.introjs-hint[data-step="'.concat(o,'"]')),i=t._hintItems[o],c(t._hintClickCallback)?[4,t._hintClickCallback.call(t,e,i,o)]:[3,2];case 1:n.sent(),n.label=2;case 2:return void 0!==(r=Y())&&parseInt(r,10)===o||(s=x("div",{className:"introjs-tooltip"}),a=x("div"),l=x("div"),u=x("div"),s.onclick=function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0},a.className="introjs-tooltiptext",(p=x("p")).innerHTML=i.hint||"",a.appendChild(p),t._options.hintShowButton&&((h=x("a")).className=t._options.buttonClass,h.setAttribute("role","button"),h.innerHTML=t._options.hintButtonLabel,h.onclick=function(){return D(t,o)},a.appendChild(h)),l.className="introjs-arrow",s.appendChild(l),s.appendChild(a),d=e.getAttribute("data-step")||"",t._currentStep=parseInt(d,10),f=t._hintItems[t._currentStep],u.className="introjs-tooltipReferenceLayer introjs-hintReference",u.setAttribute("data-step",d),w(t,f,u),u.appendChild(s),document.body.appendChild(u),j(t,f,s,l,!0)),[2]}}))}))}function Y(){var t=document.querySelector(".introjs-hintReference");if(t&&t.parentNode){var e=t.getAttribute("data-step");if(!e)return;return t.parentNode.removeChild(t),e}}function $(t,o){return e(this,void 0,void 0,(function(){var e,i,r,s,a,c,u,p,h,d;return n(this,(function(n){switch(n.label){case 0:if(t._hintItems=[],t._options.hints&&t._options.hints.length>0)for(e=0,i=t._options.hints;e<i.length;e++)r=i[e],"string"==typeof(s=O(r)).element&&(s.element=document.querySelector(s.element)),s.hintPosition=s.hintPosition||t._options.hintPosition,s.hintAnimation=s.hintAnimation||t._options.hintAnimation,null!==s.element&&t._hintItems.push(s);else{if(!(a=Array.from(o.querySelectorAll("*[data-hint]")))||!a.length)return[2,!1];for(c=0,u=a;c<u.length;c++)p=u[c],h=p.getAttribute("data-hint-animation"),d=t._options.hintAnimation,h&&(d="true"===h),t._hintItems.push({element:p,hint:p.getAttribute("data-hint")||"",hintPosition:p.getAttribute("data-hint-position")||t._options.hintPosition,hintAnimation:d,tooltipClass:p.getAttribute("data-tooltip-class")||void 0,position:p.getAttribute("data-position")||t._options.tooltipPosition})}return[4,W(t)];case 1:return n.sent(),l.on(document,"click",Y,t,!1),l.on(window,"resize",U,t,!0),[2,!0]}}))}))}function U(t){for(var e=0,n=t._hintItems;e<n.length;e++){var o=n[e],i=o.hintTargetElement;Q(o.hintPosition,o.element,i)}}function Z(t,e){var n=Array.from(e.querySelectorAll("*[data-intro]")),o=[];if(t._options.steps&&t._options.steps.length)for(var i=0,r=t._options.steps;i<r.length;i++){var s=O(h=r[i]);if(s.step=o.length+1,s.title=s.title||"","string"==typeof s.element&&(s.element=document.querySelector(s.element)||void 0),void 0===s.element||null===s.element){var a=document.querySelector(".introjsFloatingElement");null===a&&(a=x("div",{className:"introjsFloatingElement"}),document.body.appendChild(a)),s.element=a,s.position="floating"}s.position=s.position||t._options.tooltipPosition,s.scrollTo=s.scrollTo||t._options.scrollTo,void 0===s.disableInteraction&&(s.disableInteraction=t._options.disableInteraction),null!==s.element&&o.push(s)}else{var l=void 0;if(n.length<1)return[];for(var c=0,u=n;c<u.length;c++){var p=u[c];if((!t._options.group||p.getAttribute("data-intro-group")===t._options.group)&&"none"!==p.style.display){var h=parseInt(p.getAttribute("data-step")||"",10);l=t._options.disableInteraction,p.hasAttribute("data-disable-interaction")&&(l=!!p.getAttribute("data-disable-interaction")),h>0&&(o[h-1]={step:h,element:p,title:p.getAttribute("data-title")||"",intro:p.getAttribute("data-intro")||"",tooltipClass:p.getAttribute("data-tooltip-class")||void 0,highlightClass:p.getAttribute("data-highlight-class")||void 0,position:p.getAttribute("data-position")||t._options.tooltipPosition,scrollTo:p.getAttribute("data-scroll-to")||t._options.scrollTo,disableInteraction:l})}}for(var d=0,f=0,b=n;f<b.length;f++){p=b[f];if((!t._options.group||p.getAttribute("data-intro-group")===t._options.group)&&null===p.getAttribute("data-step")){for(;void 0!==o[d];)d++;l=p.hasAttribute("data-disable-interaction")?!!p.getAttribute("data-disable-interaction"):t._options.disableInteraction,o[d]={element:p,title:p.getAttribute("data-title")||"",intro:p.getAttribute("data-intro")||"",step:d+1,tooltipClass:p.getAttribute("data-tooltip-class")||void 0,highlightClass:p.getAttribute("data-highlight-class")||void 0,position:p.getAttribute("data-position")||t._options.tooltipPosition,scrollTo:p.getAttribute("data-scroll-to")||t._options.scrollTo,disableInteraction:l}}}}for(var m=[],g=0;g<o.length;g++)o[g]&&m.push(o[g]);return(o=m).sort((function(t,e){return t.step-e.step})),o}function J(t,e){var n=t._currentStep;if(null!=n&&-1!=n){var o=t._introItems[n],i=document.querySelector(".introjs-tooltipReferenceLayer"),r=document.querySelector(".introjs-helperLayer"),s=document.querySelector(".introjs-disableInteraction");w(t,o,r),w(t,o,i),w(t,o,s),e&&(t._introItems=Z(t,t._targetElement),function(t,e){if(t._options.showBullets){var n=document.querySelector(".introjs-bullets");n&&n.parentNode&&n.parentNode.replaceChild(T(t,e),n)}}(t,o),I(i,n,t._introItems.length));var a=document.querySelector(".introjs-arrow"),l=document.querySelector(".introjs-tooltip");return l&&a&&j(t,t._introItems[n],l,a),U(t),t}}function K(t){J(t)}function tt(t,e){if(void 0===e&&(e=!1),t&&t.parentElement){var n=t.parentElement;e?(y(t,{opacity:"0"}),window.setTimeout((function(){try{n.removeChild(t)}catch(t){}}),500)):n.removeChild(t)}}function et(t,o,i){return void 0===i&&(i=!1),e(this,void 0,void 0,(function(){var e,r,s,a;return n(this,(function(n){switch(n.label){case 0:return e=!0,void 0===t._introBeforeExitCallback?[3,2]:[4,t._introBeforeExitCallback.call(t,o)];case 1:e=n.sent(),n.label=2;case 2:if(!i&&!1===e)return[2];if((r=Array.from(o.querySelectorAll(".introjs-overlay")))&&r.length)for(s=0,a=r;s<a.length;s++)tt(a[s]);return tt(o.querySelector(".introjs-helperLayer"),!0),tt(o.querySelector(".introjs-tooltipReferenceLayer")),tt(o.querySelector(".introjs-disableInteraction")),tt(document.querySelector(".introjsFloatingElement")),A(),l.off(window,"keydown",R,t,!0),l.off(window,"resize",K,t,!0),c(t._introExitCallback)?[4,t._introExitCallback.call(t)]:[3,4];case 3:n.sent(),n.label=4;case 4:return t._currentStep=-1,[2]}}))}))}function nt(t,o){return e(this,void 0,void 0,(function(){var i;return n(this,(function(r){switch(r.label){case 0:return t.isActive()?c(t._introStartCallback)?[4,t._introStartCallback.call(t,o)]:[3,2]:[2,!1];case 1:r.sent(),r.label=2;case 2:return 0===(i=Z(t,o)).length?[2,!1]:(t._introItems=i,function(t,o){var i=this,r=x("div",{className:"introjs-overlay"});y(r,{top:0,bottom:0,left:0,right:0,position:"fixed"}),o.appendChild(r),!0===t._options.exitOnOverlayClick&&(y(r,{cursor:"pointer"}),r.onclick=function(){return e(i,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,et(t,o)];case 1:return e.sent(),[2]}}))}))})}(t,o),[4,B(t)]);case 3:r.sent(),o.addEventListener,t._options.keyboardNavigation&&l.on(window,"keydown",R,t,!0),l.on(window,"resize",K,t,!0),r.label=4;case 4:return[2,!1]}}))}))}function ot(t,e,n){return t[e]=n,t}var it=function(){function t(t){this._currentStep=-1,this._introItems=[],this._hintItems=[],this._targetElement=t,this._options={steps:[],hints:[],isActive:!0,nextLabel:"Next",prevLabel:"Back",skipLabel:"×",doneLabel:"Done",hidePrev:!1,hideNext:!1,nextToDone:!0,tooltipPosition:"bottom",tooltipClass:"",group:"",highlightClass:"",exitOnEsc:!0,exitOnOverlayClick:!0,showStepNumbers:!1,stepNumbersOfLabel:"of",keyboardNavigation:!0,showButtons:!0,showBullets:!0,showProgress:!1,scrollToElement:!0,scrollTo:"element",scrollPadding:30,overlayOpacity:.5,autoPosition:!0,positionPrecedence:["bottom","top","right","left"],disableInteraction:!1,dontShowAgain:!1,dontShowAgainLabel:"Don't show this again",dontShowAgainCookie:"introjs-dontShowAgain",dontShowAgainCookieDays:365,helperElementPadding:10,hintPosition:"top-middle",hintButtonLabel:"Got it",hintShowButton:!0,hintAutoRefreshInterval:10,hintAnimation:!0,buttonClass:"introjs-button",progressBarAdditionalClass:!1}}return t.prototype.isActive=function(){return(!this._options.dontShowAgain||""===(t=i(this._options.dontShowAgainCookie))||"true"!==t)&&this._options.isActive;var t},t.prototype.clone=function(){return new t(this._targetElement)},t.prototype.setOption=function(t,e){return this._options=ot(this._options,t,e),this},t.prototype.setOptions=function(t){return this._options=function(t,e){for(var n=0,o=Object.entries(e);n<o.length;n++){var i=o[n];t=ot(t,i[0],i[1])}return t}(this._options,t),this},t.prototype.start=function(){return e(this,void 0,void 0,(function(){return n(this,(function(t){switch(t.label){case 0:return[4,nt(this,this._targetElement)];case 1:return t.sent(),[2,this]}}))}))},t.prototype.goToStep=function(t){return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,P(this,t)];case 1:return e.sent(),[2,this]}}))}))},t.prototype.addStep=function(t){return this._options.steps||(this._options.steps=[]),this._options.steps.push(t),this},t.prototype.addSteps=function(t){if(!t.length)return this;for(var e=0;e<t.length;e++)this.addStep(t[e]);return this},t.prototype.goToStepNumber=function(t){return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,q(this,t)];case 1:return e.sent(),[2,this]}}))}))},t.prototype.nextStep=function(){return e(this,void 0,void 0,(function(){return n(this,(function(t){switch(t.label){case 0:return[4,B(this)];case 1:return t.sent(),[2,this]}}))}))},t.prototype.previousStep=function(){return e(this,void 0,void 0,(function(){return n(this,(function(t){switch(t.label){case 0:return[4,H(this)];case 1:return t.sent(),[2,this]}}))}))},t.prototype.currentStep=function(){return this._currentStep},t.prototype.exit=function(t){return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,et(this,this._targetElement,t)];case 1:return e.sent(),[2,this]}}))}))},t.prototype.refresh=function(t){return J(this,t),this},t.prototype.setDontShowAgain=function(t){return r(this,t),this},t.prototype.onbeforechange=function(t){if(!c(t))throw new Error("Provided callback for onbeforechange was not a function");return this._introBeforeChangeCallback=t,this},t.prototype.onchange=function(t){if(!c(t))throw new Error("Provided callback for onchange was not a function.");return this._introChangeCallback=t,this},t.prototype.onafterchange=function(t){if(!c(t))throw new Error("Provided callback for onafterchange was not a function");return this._introAfterChangeCallback=t,this},t.prototype.oncomplete=function(t){if(!c(t))throw new Error("Provided callback for oncomplete was not a function.");return this._introCompleteCallback=t,this},t.prototype.onhintsadded=function(t){if(!c(t))throw new Error("Provided callback for onhintsadded was not a function.");return this._hintsAddedCallback=t,this},t.prototype.onhintclick=function(t){if(!c(t))throw new Error("Provided callback for onhintclick was not a function.");return this._hintClickCallback=t,this},t.prototype.onhintclose=function(t){if(!c(t))throw new Error("Provided callback for onhintclose was not a function.");return this._hintCloseCallback=t,this},t.prototype.onstart=function(t){if(!c(t))throw new Error("Provided callback for onstart was not a function.");return this._introStartCallback=t,this},t.prototype.onexit=function(t){if(!c(t))throw new Error("Provided callback for onexit was not a function.");return this._introExitCallback=t,this},t.prototype.onskip=function(t){if(!c(t))throw new Error("Provided callback for onskip was not a function.");return this._introSkipCallback=t,this},t.prototype.onbeforeexit=function(t){if(!c(t))throw new Error("Provided callback for onbeforeexit was not a function.");return this._introBeforeExitCallback=t,this},t.prototype.addHints=function(){return e(this,void 0,void 0,(function(){return n(this,(function(t){switch(t.label){case 0:return[4,$(this,this._targetElement)];case 1:return t.sent(),[2,this]}}))}))},t.prototype.hideHint=function(t){return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,D(this,t)];case 1:return e.sent(),[2,this]}}))}))},t.prototype.hideHints=function(){return e(this,void 0,void 0,(function(){return n(this,(function(t){switch(t.label){case 0:return[4,F(this)];case 1:return t.sent(),[2,this]}}))}))},t.prototype.showHint=function(t){return z(t),this},t.prototype.showHints=function(){return e(this,void 0,void 0,(function(){return n(this,(function(t){switch(t.label){case 0:return[4,V(this)];case 1:return t.sent(),[2,this]}}))}))},t.prototype.removeHints=function(){return function(t){for(var e=0,n=M(".introjs-hint");e<n.length;e++){var o=n[e].getAttribute("data-step");o&&G(parseInt(o,10))}l.off(document,"click",Y,t,!1),l.off(window,"resize",U,t,!0),t._hintsAutoRefreshFunction&&l.off(window,"scroll",t._hintsAutoRefreshFunction,t,!0)}(this),this},t.prototype.removeHint=function(t){return G(t),this},t.prototype.showHintDialog=function(t){return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,X(this,t)];case 1:return e.sent(),[2,this]}}))}))},t}(),rt=function e(n){var o;if("object"===t(n))o=new it(n);else if("string"==typeof n){var i=document.querySelector(n);if(!i)throw new Error("There is no element with given selector.");o=new it(i)}else o=new it(document.body);return e.instances[a(o,"introjs-instance")]=o,o};rt.version="7.2.0",rt.instances={};
//# sourceMappingURL=intro.module.js.map


/***/ }),

/***/ "./src/classes/Arcade.ts":
/*!*******************************!*\
  !*** ./src/classes/Arcade.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GroupOfGroups__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GroupOfGroups */ "./src/classes/GroupOfGroups.ts");

class Arcade extends _GroupOfGroups__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(sessionMinutes) {
        super();
        this.sessionMS = sessionMinutes * 60 * 1000;
    }
    ;
}
;
const ArcadeInstance = new Arcade(5);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArcadeInstance);


/***/ }),

/***/ "./src/classes/Bank.ts":
/*!*****************************!*\
  !*** ./src/classes/Bank.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PubSub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PubSub */ "./src/classes/PubSub.ts");
/* harmony import */ var _storage_getCoins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage/getCoins */ "./src/storage/getCoins.ts");
/* harmony import */ var _Singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Singleton */ "./src/classes/Singleton.ts");
/* harmony import */ var _enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums/PubSubEvents */ "./src/enums/PubSubEvents.ts");




class Bank extends _Singleton__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(coins) {
        super();
        this.coins = coins;
    }
    ;
    deposit(amount) {
        if (amount < 0)
            throw new Error("Value error: amount to deposit can not be negative!");
        this.coins += amount;
        this.depositMessage(amount);
        this.store();
    }
    ;
    deduct(amount) {
        const deductible = (this.coins - amount) >= 0;
        if (deductible) {
            this.coins -= amount;
            this.deductMessage(amount);
        }
        else {
            this.undetuctibleMessage();
        }
        this.store();
        return deductible;
    }
    ;
    showBalance() {
        return this.coins;
    }
    ;
    depositMessage(amount) {
        _PubSub__WEBPACK_IMPORTED_MODULE_1__["default"].publish(_enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_2__["default"].PostMessage, `Yay! You earned ${amount} coins. Total coins:  ${this.showBalance()}`);
    }
    ;
    deductMessage(amount) {
        _PubSub__WEBPACK_IMPORTED_MODULE_1__["default"].publish(_enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_2__["default"].PostMessage, `You lost ${amount} coins. Balance: ${this.showBalance()}`);
    }
    ;
    undetuctibleMessage() {
        _PubSub__WEBPACK_IMPORTED_MODULE_1__["default"].publish(_enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_2__["default"].PostMessage, "Error! Coins to few to subtract from.");
    }
    ;
    store() {
        _PubSub__WEBPACK_IMPORTED_MODULE_1__["default"].publish(_enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_2__["default"].PutCoins, this.coins);
    }
    ;
}
;
const BankInstance = new Bank((0,_storage_getCoins__WEBPACK_IMPORTED_MODULE_3__["default"])());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BankInstance);


/***/ }),

/***/ "./src/classes/Categories.ts":
/*!***********************************!*\
  !*** ./src/classes/Categories.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GroupOfGroups__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GroupOfGroups */ "./src/classes/GroupOfGroups.ts");

class Categories extends _GroupOfGroups__WEBPACK_IMPORTED_MODULE_0__["default"] {
}
const CategoriesInstance = new Categories();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoriesInstance);


/***/ }),

/***/ "./src/classes/Category.ts":
/*!*********************************!*\
  !*** ./src/classes/Category.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PubSub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PubSub */ "./src/classes/PubSub.ts");
/* harmony import */ var _Categories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Categories */ "./src/classes/Categories.ts");
/* harmony import */ var _Group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Group */ "./src/classes/Group.ts");
/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Projects */ "./src/classes/Projects.ts");
/* harmony import */ var _enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../enums/PubSubEvents */ "./src/enums/PubSubEvents.ts");





class Category extends _Group__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(name, filterFunction, icon) {
        super(name, icon);
        this.filterFunction = filterFunction;
        this.updateCategory(_Projects__WEBPACK_IMPORTED_MODULE_1__["default"].getAllToDos());
        _Categories__WEBPACK_IMPORTED_MODULE_2__["default"].add(this);
        _PubSub__WEBPACK_IMPORTED_MODULE_3__["default"].publish(_enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_4__["default"].PostCategory, this.ID);
        _PubSub__WEBPACK_IMPORTED_MODULE_3__["default"].subscribe(_enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_4__["default"].PutToDo, this.updateCategory.bind(this));
        _PubSub__WEBPACK_IMPORTED_MODULE_3__["default"].subscribe(_enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_4__["default"].DeleteToDo, this.removeToDo.bind(this));
        _PubSub__WEBPACK_IMPORTED_MODULE_3__["default"].subscribe(_enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_4__["default"].DeleteProject, this.removeProject.bind(this));
    }
    ;
    updateCategory(newToDos) {
        if (!Array.isArray(newToDos))
            newToDos = [newToDos];
        if (newToDos.some(nt => this.toDos.some(t => t.ID === nt.ID)))
            return; // The advantage of idempotency outweighs the disadvantage of an n ^ 2 time complexity.
        const before = this.l();
        this.toDos = this.filterFunction([...this.toDos, ...newToDos]);
        this.sort();
        this.updateCounter(before, this.l());
    }
    ;
    removeToDo(toDoToDeleteID) {
        const index = this.toDos.findIndex(t => t.ID == toDoToDeleteID);
        if (index < 0)
            return;
        this.toDos.splice(index, 1);
        this.updateCounter(1, 0);
    }
    ;
    removeProject(deletionId) {
        const before = this.l();
        this.toDos = this.toDos.filter(todo => todo.parentID !== deletionId);
        this.updateCounter(before, this.l());
    }
    ;
    l() {
        return this.toDos.length; // I'm too lazy to read/type this over and over again.
    }
    ;
    updateCounter(beforeCount, afterCount) {
        if (beforeCount !== afterCount) {
            _PubSub__WEBPACK_IMPORTED_MODULE_3__["default"].publish(_enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_4__["default"].PostGroupCount, {
                groupID: this.ID,
                integerToAdd: afterCount - beforeCount
            });
        }
    }
    ;
    sort() {
        this.toDos = this.toDos.sort((a, b) => {
            if (a.priority === b.priority) {
                // sort by date (earliest to latest)
                return a.dueDate.getTime() - b.dueDate.getTime();
            }
            ;
            // sort by priority (high to low)
            return b.priority - a.priority;
        });
    }
    ;
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Category);


/***/ }),

/***/ "./src/classes/Game.ts":
/*!*****************************!*\
  !*** ./src/classes/Game.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_endsWithImageFileExtension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../regex/endsWithImageFileExtension */ "./src/regex/endsWithImageFileExtension.ts");
/* harmony import */ var _regex_startsWithHTTPS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../regex/startsWithHTTPS */ "./src/regex/startsWithHTTPS.ts");
/* harmony import */ var _Arcade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Arcade */ "./src/classes/Arcade.ts");
/* harmony import */ var _IDed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IDed */ "./src/classes/IDed.ts");




class Game extends _IDed__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(name, thumbnailURL, link, cost) {
        if (!_regex_endsWithImageFileExtension__WEBPACK_IMPORTED_MODULE_1__["default"].test(thumbnailURL))
            throw new Error("thumbnailURL must end with image file extension.");
        if (!_regex_startsWithHTTPS__WEBPACK_IMPORTED_MODULE_2__["default"].test(link))
            throw new Error("link must start with 'https://'.");
        super();
        this.name = name;
        this.thumbnailURL = thumbnailURL;
        this.link = link;
        this.cost = cost;
        _Arcade__WEBPACK_IMPORTED_MODULE_3__["default"].add(this);
    }
    ;
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);


/***/ }),

/***/ "./src/classes/Group.ts":
/*!******************************!*\
  !*** ./src/classes/Group.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IDed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IDed */ "./src/classes/IDed.ts");

class Group extends _IDed__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(name, icon = "bi-calendar-fill", toDos = [], id) {
        super(id);
        this.name = name;
        this.icon = icon;
        this.toDos = toDos;
    }
    ;
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Group);


/***/ }),

/***/ "./src/classes/GroupOfGroups.ts":
/*!**************************************!*\
  !*** ./src/classes/GroupOfGroups.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Singleton */ "./src/classes/Singleton.ts");

class GroupOfGroups extends _Singleton__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this.groups = [];
    }
    add(group) {
        this.groups.push(group);
    }
    ;
    get(groupID) {
        return this.query(p => p.ID === groupID);
    }
    ;
    query(callback) {
        return this.groups.find(callback);
    }
    ;
    getAll() {
        // I would ideally use structuredClone to make a deep clone.
        // But that is not implemented in jest-dom-environment, which I am using for tests.
        return [...this.groups];
    }
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GroupOfGroups);


/***/ }),

/***/ "./src/classes/IDed.ts":
/*!*****************************!*\
  !*** ./src/classes/IDed.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_isUUID__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/isUUID */ "./src/functions/isUUID.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");


class IDed {
    constructor(presetID) {
        if (presetID && (0,_functions_isUUID__WEBPACK_IMPORTED_MODULE_0__["default"])(presetID)) {
            this.ID = presetID;
        }
        else {
            this.ID = (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])();
        }
        ;
    }
    ;
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IDed);


/***/ }),

/***/ "./src/classes/Project.ts":
/*!********************************!*\
  !*** ./src/classes/Project.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _classes_Projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/Projects */ "./src/classes/Projects.ts");
/* harmony import */ var _PubSub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PubSub */ "./src/classes/PubSub.ts");
/* harmony import */ var _Group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Group */ "./src/classes/Group.ts");
/* harmony import */ var _enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums/PubSubEvents */ "./src/enums/PubSubEvents.ts");




class Project extends _Group__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(name, initialToDos, icon, id) {
        super(name, icon, [], id);
        _classes_Projects__WEBPACK_IMPORTED_MODULE_1__["default"].add(this);
        _PubSub__WEBPACK_IMPORTED_MODULE_2__["default"].publish(_enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_3__["default"].PutProject, this.ID);
        _PubSub__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe(_enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_3__["default"].DeleteToDo, this.deleteToDo.bind(this));
        if (initialToDos) {
            initialToDos.forEach(initialToDo => this.addToDo(initialToDo));
        }
        else {
            // this.addToDo includes publishing the PutProjectData event, which leads to the data being stored.
            // But, even if a project is empty, it still needs to be stored.
            _PubSub__WEBPACK_IMPORTED_MODULE_2__["default"].publish(_enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_3__["default"].PutProjectData);
        }
        ;
    }
    ;
    changeName(newName) {
        this.name = newName;
        _PubSub__WEBPACK_IMPORTED_MODULE_2__["default"].publish(_enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_3__["default"].PutProject, this.ID);
        _PubSub__WEBPACK_IMPORTED_MODULE_2__["default"].publish(_enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_3__["default"].PutProjectData);
    }
    ;
    addToDo(toDo, moveOperation = false) {
        if (this.toDos.some(t => t.ID === toDo.ID))
            return;
        toDo.updateProperties({ parentID: this.ID }, false);
        this.toDos.push(toDo);
        if (!moveOperation)
            _PubSub__WEBPACK_IMPORTED_MODULE_2__["default"].publish(_enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_3__["default"].PutToDo, toDo);
        _PubSub__WEBPACK_IMPORTED_MODULE_2__["default"].publish(_enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_3__["default"].PostGroupCount, {
            groupID: this.ID,
            integerToAdd: 1
        });
        _PubSub__WEBPACK_IMPORTED_MODULE_2__["default"].publish(_enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_3__["default"].PutProjectData);
    }
    ;
    takeToDoFromAnother(toDoToTake) {
        const { parentID } = toDoToTake;
        if (this.ID === parentID)
            return;
        const originalHolder = _classes_Projects__WEBPACK_IMPORTED_MODULE_1__["default"].query(project => project.ID === parentID);
        originalHolder.deleteToDo(toDoToTake.ID, true);
        this.addToDo(toDoToTake, true);
    }
    ;
    // I think dereferencing a ToDo from this.toDos array makes it unreachable. 
    // (Unless another instance references it, of course.)
    // So the garbage collector should eventually free up the memory taken by the "deleted" ToDo.
    deleteToDo(toDoID, moveOperation = false) {
        const index = this.toDos.findIndex(t => t.ID == toDoID);
        if (index < 0)
            return;
        const deletion = this.toDos.splice(index, 1)[0];
        if (moveOperation) {
            _PubSub__WEBPACK_IMPORTED_MODULE_2__["default"].publish(_enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_3__["default"].DeleteToDo, deletion.ID);
        }
        else {
            deletion.awardCompletion();
        }
        ;
        _PubSub__WEBPACK_IMPORTED_MODULE_2__["default"].publish(_enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_3__["default"].PostGroupCount, {
            groupID: this.ID,
            integerToAdd: -1
        });
        _PubSub__WEBPACK_IMPORTED_MODULE_2__["default"].publish(_enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_3__["default"].PutProjectData);
    }
    ;
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);


/***/ }),

/***/ "./src/classes/Projects.ts":
/*!*********************************!*\
  !*** ./src/classes/Projects.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PubSub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PubSub */ "./src/classes/PubSub.ts");
/* harmony import */ var _storage_storeProjects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage/storeProjects */ "./src/storage/storeProjects.ts");
/* harmony import */ var _GroupOfGroups__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GroupOfGroups */ "./src/classes/GroupOfGroups.ts");
/* harmony import */ var _enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums/PubSubEvents */ "./src/enums/PubSubEvents.ts");




class Projects extends _GroupOfGroups__WEBPACK_IMPORTED_MODULE_0__["default"] {
    getAllToDos() {
        return this.groups.map(project => project.toDos).flat();
    }
    ;
    projectExists(callback) {
        return this.groups.some(callback);
    }
    ;
    deleteProject(ID) {
        const projectIndex = this.groups.findIndex(p => p.ID === ID);
        if (projectIndex < 0)
            throw new Error(`There is no Project to delete with an ID of ${ID}.`);
        const deletedProject = this.groups.splice(projectIndex, 1)[0];
        _PubSub__WEBPACK_IMPORTED_MODULE_1__["default"].publish(_enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_2__["default"].DeleteProject, deletedProject.ID);
        _PubSub__WEBPACK_IMPORTED_MODULE_1__["default"].publish(_enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_2__["default"].PutProjectData);
    }
    ;
    save() {
        (0,_storage_storeProjects__WEBPACK_IMPORTED_MODULE_3__["default"])(this.groups);
    }
    ;
}
;
const ProjectsInstance = new Projects();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectsInstance);


/***/ }),

/***/ "./src/classes/PubSub.ts":
/*!*******************************!*\
  !*** ./src/classes/PubSub.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Singleton */ "./src/classes/Singleton.ts");
/* harmony import */ var _enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/PubSubEvents */ "./src/enums/PubSubEvents.ts");


class PubSub extends _Singleton__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this.subscribers = {
            [_enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_1__["default"].PostMessage]: [],
            [_enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_1__["default"].PutCoins]: [],
            [_enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_1__["default"].PostCategory]: [],
            [_enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_1__["default"].PutProject]: [],
            [_enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_1__["default"].PutToDo]: [],
            [_enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_1__["default"].PostGroupCount]: [],
            [_enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_1__["default"].DeleteToDo]: [],
            [_enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_1__["default"].DeleteProject]: [],
            [_enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_1__["default"].PutProjectData]: []
        };
    }
    subscribe(e, callback) {
        this.subscribers[e].push(callback);
    }
    ;
    publish(e, d) {
        this.subscribers[e].forEach((callback) => callback(d));
    }
    ;
}
;
const PS = new PubSub();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PS);


/***/ }),

/***/ "./src/classes/Singleton.ts":
/*!**********************************!*\
  !*** ./src/classes/Singleton.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Singleton {
    constructor() {
        const className = this.constructor.name;
        if (Singleton.instances.get(className)) {
            throw new Error(`An instance of ${className} already exists!`);
        }
        ;
        Singleton.instances.set(className, this);
    }
    ;
}
// A static map to store instances for derived classes
Singleton.instances = new Map();
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Singleton);


/***/ }),

/***/ "./src/classes/ToDo.ts":
/*!*****************************!*\
  !*** ./src/classes/ToDo.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_dateGenerators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../functions/dateGenerators */ "./src/functions/dateGenerators.ts");
/* harmony import */ var _PubSub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PubSub */ "./src/classes/PubSub.ts");
/* harmony import */ var _Bank__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Bank */ "./src/classes/Bank.ts");
/* harmony import */ var _IDed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IDed */ "./src/classes/IDed.ts");
/* harmony import */ var _enums_ToDoPriority__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/ToDoPriority */ "./src/enums/ToDoPriority.ts");
/* harmony import */ var _enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums/PubSubEvents */ "./src/enums/PubSubEvents.ts");






class ToDo extends _IDed__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(title, description, dueDate, priority = _enums_ToDoPriority__WEBPACK_IMPORTED_MODULE_1__["default"].Low, isChecked = false, id) {
        super(id);
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isChecked = isChecked;
        this.awarded = false;
    }
    ;
    toggleIsChecked() {
        this.isChecked = !this.isChecked;
        _PubSub__WEBPACK_IMPORTED_MODULE_2__["default"].publish(_enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_3__["default"].PutProjectData);
    }
    updateProperties(positionalParameters, publish = true) {
        const { title, description, dueDate, priority, parentID } = positionalParameters;
        if (title)
            this.title = title;
        if (description)
            this.description = description;
        if (dueDate)
            this.dueDate = dueDate;
        if (priority)
            this.priority = priority;
        if (parentID)
            this.parentID = parentID;
        if (publish) {
            _PubSub__WEBPACK_IMPORTED_MODULE_2__["default"].publish(_enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_3__["default"].PutToDo, this);
            _PubSub__WEBPACK_IMPORTED_MODULE_2__["default"].publish(_enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_3__["default"].PutProjectData);
        }
    }
    ;
    getWorth() {
        return this.priority * 10;
    }
    isOverDue() {
        return this.dueDate < _functions_dateGenerators__WEBPACK_IMPORTED_MODULE_4__.today;
    }
    awardCompletion() {
        if (this.awarded) {
            throw new Error("ToDoInstance.awardCompletion() can only be called once.");
        }
        ;
        if (!this.isChecked)
            return;
        if (this.isOverDue()) {
            _Bank__WEBPACK_IMPORTED_MODULE_5__["default"].deduct(this.getWorth());
        }
        else {
            _Bank__WEBPACK_IMPORTED_MODULE_5__["default"].deposit(this.getWorth());
        }
        this.awarded = true;
    }
    ;
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDo);


/***/ }),

/***/ "./src/enums/PubSubEvents.ts":
/*!***********************************!*\
  !*** ./src/enums/PubSubEvents.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var PSE;
(function (PSE) {
    PSE[PSE["PostMessage"] = 0] = "PostMessage";
    PSE[PSE["PutCoins"] = 1] = "PutCoins";
    PSE[PSE["PostCategory"] = 2] = "PostCategory";
    PSE[PSE["PutProject"] = 3] = "PutProject";
    PSE[PSE["PutToDo"] = 4] = "PutToDo";
    PSE[PSE["PostGroupCount"] = 5] = "PostGroupCount";
    PSE[PSE["DeleteToDo"] = 6] = "DeleteToDo";
    PSE[PSE["DeleteProject"] = 7] = "DeleteProject";
    PSE[PSE["PutProjectData"] = 8] = "PutProjectData";
})(PSE || (PSE = {}));
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PSE);


/***/ }),

/***/ "./src/enums/ToDoPriority.ts":
/*!***********************************!*\
  !*** ./src/enums/ToDoPriority.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ToDoPriority;
(function (ToDoPriority) {
    ToDoPriority[ToDoPriority["Low"] = 0] = "Low";
    ToDoPriority[ToDoPriority["Medium"] = 1] = "Medium";
    ToDoPriority[ToDoPriority["High"] = 2] = "High";
})(ToDoPriority || (ToDoPriority = {}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDoPriority);


/***/ }),

/***/ "./src/functions/dateGenerators.ts":
/*!*****************************************!*\
  !*** ./src/functions/dateGenerators.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dateWithinMonth: () => (/* binding */ dateWithinMonth),
/* harmony export */   dateWithinPastWeek: () => (/* binding */ dateWithinPastWeek),
/* harmony export */   dateWithinWeek: () => (/* binding */ dateWithinWeek),
/* harmony export */   today: () => (/* binding */ today)
/* harmony export */ });
const today = new Date();
const yesterday = new Date();
const tomorrow = new Date();
const startOfWeek = new Date();
const endOfWeek = new Date();
const endOfMonth = new Date();
const todayDate = today.getDate();
yesterday.setDate(todayDate - 1);
tomorrow.setDate(todayDate + 1);
startOfWeek.setDate(todayDate - 1);
endOfWeek.setDate(todayDate + 7);
endOfMonth.setDate(todayDate + 31);
// MS as in "milliseconds since midnight January 1, 1970".
const yesterdayMS = yesterday.getTime();
const tomorrowMS = tomorrow.getTime();
const startOfWeekMS = startOfWeek.getTime();
const endOfWeekMS = endOfWeek.getTime();
const endOfMonthMS = endOfMonth.getTime();
const dateWithinPastWeek = new Date(yesterdayMS - Math.random() * (yesterdayMS - startOfWeekMS));
const dateWithinWeek = new Date(tomorrowMS + Math.random() * (endOfWeekMS - tomorrowMS));
const dateWithinMonth = () => new Date(tomorrowMS + Math.random() * (endOfMonthMS - tomorrowMS));



/***/ }),

/***/ "./src/functions/filterImportant.ts":
/*!******************************************!*\
  !*** ./src/functions/filterImportant.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _enums_ToDoPriority__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/ToDoPriority */ "./src/enums/ToDoPriority.ts");

const filterImportant = todos => todos.filter(todo => todo.priority === _enums_ToDoPriority__WEBPACK_IMPORTED_MODULE_0__["default"].High);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filterImportant);


/***/ }),

/***/ "./src/functions/filterThisWeek.ts":
/*!*****************************************!*\
  !*** ./src/functions/filterThisWeek.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dateGenerators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dateGenerators */ "./src/functions/dateGenerators.ts");
/* harmony import */ var _timeNormalise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeNormalise */ "./src/functions/timeNormalise.ts");


const filterThisWeek = todos => {
    const endOfWeek = new Date(_dateGenerators__WEBPACK_IMPORTED_MODULE_0__.today);
    endOfWeek.setDate(endOfWeek.getDate() + 7);
    return todos.filter((todo) => {
        const todoDue = (0,_timeNormalise__WEBPACK_IMPORTED_MODULE_1__["default"])(todo.dueDate);
        return todoDue >= _dateGenerators__WEBPACK_IMPORTED_MODULE_0__.today && todoDue <= endOfWeek;
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filterThisWeek);


/***/ }),

/***/ "./src/functions/filterToday.ts":
/*!**************************************!*\
  !*** ./src/functions/filterToday.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dateGenerators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dateGenerators */ "./src/functions/dateGenerators.ts");
/* harmony import */ var _timeNormalise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeNormalise */ "./src/functions/timeNormalise.ts");


const filterToday = (todos) => todos.filter(todo => (0,_timeNormalise__WEBPACK_IMPORTED_MODULE_0__["default"])(todo.dueDate).getTime() === (0,_timeNormalise__WEBPACK_IMPORTED_MODULE_0__["default"])(_dateGenerators__WEBPACK_IMPORTED_MODULE_1__.today).getTime());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filterToday);


/***/ }),

/***/ "./src/functions/initializeCategories.ts":
/*!***********************************************!*\
  !*** ./src/functions/initializeCategories.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _classes_Category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/Category */ "./src/classes/Category.ts");
/* harmony import */ var _filterImportant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filterImportant */ "./src/functions/filterImportant.ts");
/* harmony import */ var _filterThisWeek__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filterThisWeek */ "./src/functions/filterThisWeek.ts");
/* harmony import */ var _filterToday__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filterToday */ "./src/functions/filterToday.ts");
/* harmony import */ var _noFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noFilter */ "./src/functions/noFilter.ts");





function initializeCategories() {
    new _classes_Category__WEBPACK_IMPORTED_MODULE_0__["default"]("All Tasks", _noFilter__WEBPACK_IMPORTED_MODULE_1__["default"], "bi-calendar-check-fill");
    new _classes_Category__WEBPACK_IMPORTED_MODULE_0__["default"]("Important", _filterImportant__WEBPACK_IMPORTED_MODULE_2__["default"], "bi-star-fill");
    new _classes_Category__WEBPACK_IMPORTED_MODULE_0__["default"]("Today", _filterToday__WEBPACK_IMPORTED_MODULE_3__["default"], "bi-calendar-event-fill");
    new _classes_Category__WEBPACK_IMPORTED_MODULE_0__["default"]("This Week", _filterThisWeek__WEBPACK_IMPORTED_MODULE_4__["default"], "bi-calendar-week-fill");
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeCategories);


/***/ }),

/***/ "./src/functions/initializeGames.ts":
/*!******************************************!*\
  !*** ./src/functions/initializeGames.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _classes_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/Game */ "./src/classes/Game.ts");
/* harmony import */ var _ui_outputs_renderArcade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/outputs/renderArcade */ "./src/ui/outputs/renderArcade.ts");


function initializeGames() {
    new _classes_Game__WEBPACK_IMPORTED_MODULE_0__["default"]("Cross Code", "./thumbnails/cross-code.jpg", "https://www.cross-code.com/en/start", 60);
    new _classes_Game__WEBPACK_IMPORTED_MODULE_0__["default"]("Missile Game", "./thumbnails/missile-game.jpg", "https://missile-game.bwhmather.com/", 40);
    new _classes_Game__WEBPACK_IMPORTED_MODULE_0__["default"]("Chrome Dino", "./thumbnails/chrome-dino.jpeg", "https://chromedino.com/", 20);
    // add event listener to game icon
    const gameIcon = document.getElementById("game-icon");
    if (gameIcon) {
        gameIcon.addEventListener("click", _ui_outputs_renderArcade__WEBPACK_IMPORTED_MODULE_1__["default"]);
    }
    else {
        throw new Error("#game-icon not selected.");
    }
    ;
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeGames);


/***/ }),

/***/ "./src/functions/isUUID.ts":
/*!*********************************!*\
  !*** ./src/functions/isUUID.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_uuidRegex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../regex/uuidRegex */ "./src/regex/uuidRegex.ts");

function isUUID(toTest) {
    return _regex_uuidRegex__WEBPACK_IMPORTED_MODULE_0__["default"].test(toTest);
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isUUID);


/***/ }),

/***/ "./src/functions/noFilter.ts":
/*!***********************************!*\
  !*** ./src/functions/noFilter.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const noFilter = todos => todos;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (noFilter);


/***/ }),

/***/ "./src/functions/populateInitialProjects.ts":
/*!**************************************************!*\
  !*** ./src/functions/populateInitialProjects.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _classes_Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/Project */ "./src/classes/Project.ts");
/* harmony import */ var _classes_ToDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/ToDo */ "./src/classes/ToDo.ts");
/* harmony import */ var _enums_ToDoPriority__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums/ToDoPriority */ "./src/enums/ToDoPriority.ts");
/* harmony import */ var _dateGenerators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dateGenerators */ "./src/functions/dateGenerators.ts");




function populateTutorialProject() {
    return new _classes_Project__WEBPACK_IMPORTED_MODULE_0__["default"]("Tutorial", [
        new _classes_ToDo__WEBPACK_IMPORTED_MODULE_1__["default"]("Important task", "This is high-priority. Notice the red border color-coding.", (0,_dateGenerators__WEBPACK_IMPORTED_MODULE_2__.dateWithinMonth)(), _enums_ToDoPriority__WEBPACK_IMPORTED_MODULE_3__["default"].High),
        new _classes_ToDo__WEBPACK_IMPORTED_MODULE_1__["default"]("Nice-to-do task", "This is medium-priority. It's color-coded orange", (0,_dateGenerators__WEBPACK_IMPORTED_MODULE_2__.dateWithinMonth)(), _enums_ToDoPriority__WEBPACK_IMPORTED_MODULE_3__["default"].Medium),
        new _classes_ToDo__WEBPACK_IMPORTED_MODULE_1__["default"]("Just for fun", "This is low-priority. It's flagged as green.", (0,_dateGenerators__WEBPACK_IMPORTED_MODULE_2__.dateWithinMonth)(), _enums_ToDoPriority__WEBPACK_IMPORTED_MODULE_3__["default"].Low),
        new _classes_ToDo__WEBPACK_IMPORTED_MODULE_1__["default"]("Finish today", "Here is a to-do that is due today!", _dateGenerators__WEBPACK_IMPORTED_MODULE_2__.today, _enums_ToDoPriority__WEBPACK_IMPORTED_MODULE_3__["default"].High),
        new _classes_ToDo__WEBPACK_IMPORTED_MODULE_1__["default"]("Week's work", "This is something you just need to do sometime this week.", _dateGenerators__WEBPACK_IMPORTED_MODULE_2__.dateWithinWeek, _enums_ToDoPriority__WEBPACK_IMPORTED_MODULE_3__["default"].Medium),
        new _classes_ToDo__WEBPACK_IMPORTED_MODULE_1__["default"]("Too Late", "Overdue to-dos are color-coded this bronze hue", _dateGenerators__WEBPACK_IMPORTED_MODULE_2__.dateWithinPastWeek, _enums_ToDoPriority__WEBPACK_IMPORTED_MODULE_3__["default"].High)
    ], "bi-pencil-fill");
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (populateTutorialProject);


/***/ }),

/***/ "./src/functions/subscribeUIAndStorageFunctions.ts":
/*!*********************************************************!*\
  !*** ./src/functions/subscribeUIAndStorageFunctions.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _classes_Projects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../classes/Projects */ "./src/classes/Projects.ts");
/* harmony import */ var _classes_PubSub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/PubSub */ "./src/classes/PubSub.ts");
/* harmony import */ var _enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/PubSubEvents */ "./src/enums/PubSubEvents.ts");
/* harmony import */ var _storage_putCoins__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../storage/putCoins */ "./src/storage/putCoins.ts");
/* harmony import */ var _ui_outputs_putCategory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/outputs/putCategory */ "./src/ui/outputs/putCategory.ts");
/* harmony import */ var _ui_outputs_putProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/outputs/putProject */ "./src/ui/outputs/putProject.ts");
/* harmony import */ var _ui_outputs_idempotentlyRenderToDo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/outputs/idempotentlyRenderToDo */ "./src/ui/outputs/idempotentlyRenderToDo.ts");
/* harmony import */ var _ui_outputs_removeProject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/outputs/removeProject */ "./src/ui/outputs/removeProject.ts");
/* harmony import */ var _ui_outputs_removeToDo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/outputs/removeToDo */ "./src/ui/outputs/removeToDo.ts");
/* harmony import */ var _ui_outputs_renderMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ui/outputs/renderMessage */ "./src/ui/outputs/renderMessage.ts");
/* harmony import */ var _ui_outputs_updateToDoCounter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/outputs/updateToDoCounter */ "./src/ui/outputs/updateToDoCounter.ts");











function subscribeUIAndStorageFunctions() {
    _classes_PubSub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_1__["default"].PostCategory, _ui_outputs_putCategory__WEBPACK_IMPORTED_MODULE_2__["default"]);
    _classes_PubSub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_1__["default"].PutProject, _ui_outputs_putProject__WEBPACK_IMPORTED_MODULE_3__["default"]);
    _classes_PubSub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_1__["default"].PutToDo, _ui_outputs_idempotentlyRenderToDo__WEBPACK_IMPORTED_MODULE_4__["default"]);
    _classes_PubSub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_1__["default"].PostGroupCount, _ui_outputs_updateToDoCounter__WEBPACK_IMPORTED_MODULE_5__["default"]);
    _classes_PubSub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_1__["default"].DeleteToDo, _ui_outputs_removeToDo__WEBPACK_IMPORTED_MODULE_6__["default"]);
    _classes_PubSub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_1__["default"].DeleteProject, _ui_outputs_removeProject__WEBPACK_IMPORTED_MODULE_7__["default"]);
    _classes_PubSub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_1__["default"].PostMessage, _ui_outputs_renderMessage__WEBPACK_IMPORTED_MODULE_8__["default"]);
    _classes_PubSub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_1__["default"].PutCoins, _storage_putCoins__WEBPACK_IMPORTED_MODULE_9__["default"]);
    _classes_PubSub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_1__["default"].PutProjectData, () => _classes_Projects__WEBPACK_IMPORTED_MODULE_10__["default"].save()); // closure is necessary
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (subscribeUIAndStorageFunctions);


/***/ }),

/***/ "./src/functions/timeNormalise.ts":
/*!****************************************!*\
  !*** ./src/functions/timeNormalise.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const timeNormalise = (time) => {
    const normalisedTime = time;
    normalisedTime.setHours(0, 0, 0, 0); // set to midnight for day comparisons
    return normalisedTime;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timeNormalise);


/***/ }),

/***/ "./src/regex/endsWithImageFileExtension.ts":
/*!*************************************************!*\
  !*** ./src/regex/endsWithImageFileExtension.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const endsWithImageFileExtension = /.(jpg|jpeg|png)$/;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (endsWithImageFileExtension);


/***/ }),

/***/ "./src/regex/startsWithHTTPS.ts":
/*!**************************************!*\
  !*** ./src/regex/startsWithHTTPS.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const startsWithHTTPS = /^https:\/\/.*/;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startsWithHTTPS);


/***/ }),

/***/ "./src/regex/uuidRegex.ts":
/*!********************************!*\
  !*** ./src/regex/uuidRegex.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// The regex was copied from StackOverflow.
// Link here: https://stackoverflow.com/questions/7905929/how-to-test-valid-uuid-guid
const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (uuidRegex);


/***/ }),

/***/ "./src/storage/getCoins.ts":
/*!*********************************!*\
  !*** ./src/storage/getCoins.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getCoins = () => Number(localStorage.getItem("coins"));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCoins);


/***/ }),

/***/ "./src/storage/hasVisited.ts":
/*!***********************************!*\
  !*** ./src/storage/hasVisited.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function hasVisited() {
    return localStorage.getItem('visited') === 'true';
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hasVisited);


/***/ }),

/***/ "./src/storage/loadProjects.ts":
/*!*************************************!*\
  !*** ./src/storage/loadProjects.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _classes_Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/Project */ "./src/classes/Project.ts");
/* harmony import */ var _classes_ToDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/ToDo */ "./src/classes/ToDo.ts");


function loadProjects() {
    const stringifiedJSON = localStorage.getItem("projects");
    const parsedJSON = stringifiedJSON ? JSON.parse(stringifiedJSON) : [];
    return parsedJSON.map(p => new _classes_Project__WEBPACK_IMPORTED_MODULE_0__["default"](p.name, p.toDos.map(t => new _classes_ToDo__WEBPACK_IMPORTED_MODULE_1__["default"](t.title, t.description, new Date(t.dueDate), t.priority, t.isChecked, t.ID)), p.icon, p.ID));
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadProjects);


/***/ }),

/***/ "./src/storage/putCoins.ts":
/*!*********************************!*\
  !*** ./src/storage/putCoins.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function putCoins(coins) {
    localStorage.setItem("coins", String(coins));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (putCoins);


/***/ }),

/***/ "./src/storage/setVisitedFlag.ts":
/*!***************************************!*\
  !*** ./src/storage/setVisitedFlag.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function setVisitedFlag() {
    localStorage.setItem('visited', 'true');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setVisitedFlag);


/***/ }),

/***/ "./src/storage/storeProjects.ts":
/*!**************************************!*\
  !*** ./src/storage/storeProjects.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function storeProjects(projects) {
    localStorage.setItem("projects", JSON.stringify(projects));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storeProjects);


/***/ }),

/***/ "./src/sw.ts":
/*!*******************!*\
  !*** ./src/sw.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// register PWA service worker
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('https://black-ram.github.io/TaskQuest/service-worker.js').then(registration => {
                console.log('SW registered: ', registration);
            }).catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
        });
    }
    ;
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (registerServiceWorker);


/***/ }),

/***/ "./src/ui/domConstants/arcadeState.ts":
/*!********************************************!*\
  !*** ./src/ui/domConstants/arcadeState.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const arcadeState = "Game Time!";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arcadeState);


/***/ }),

/***/ "./src/ui/domConstants/projectContainer.ts":
/*!*************************************************!*\
  !*** ./src/ui/domConstants/projectContainer.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const jsContainer = document.getElementById("JS-insertion-container");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (jsContainer);


/***/ }),

/***/ "./src/ui/domUtilities/resizer.ts":
/*!****************************************!*\
  !*** ./src/ui/domUtilities/resizer.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domConstants_projectContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domConstants/projectContainer */ "./src/ui/domConstants/projectContainer.ts");

// While this is all miscellaneous DOM-related stuff
// And is not exactly a function, in that it does not have one particular responsibility
// and that it ever needs to be called more than once,
// I still wrap it in this anonymous function/default export,
// So that the module has no "side-effects".
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
    const main = document.querySelector("main");
    const nav = document.querySelector("nav");
    const menuIcon = document.getElementById("menu-icon");
    const menu = document.getElementById("sidebar");
    function sizeAndToggle() {
        // hide menu, show icon on mobile
        if (window.innerWidth < 575) {
            if (menu) {
                menu.classList.add("d-none", "position-absolute");
            }
            ;
            if (menuIcon) {
                menuIcon.classList.remove("d-none");
            }
            ;
            // hide menu if user clicks away
            if (main && nav && menu) {
                main.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (!nav.contains(e.target) && window.innerWidth < 575) {
                        menu.classList.add("d-none");
                    }
                });
            }
        }
        else {
            if (menu) {
                menu.classList.remove("d-none", "position-absolute");
            }
            if (menuIcon) {
                menuIcon.classList.add("d-none");
            }
        }
        // set main height to remaining VH under header
        const hgroup = document.querySelector("hgroup");
        if (hgroup && nav) {
            const hgroupHeight = hgroup.offsetHeight;
            const availableHeight = window.innerHeight - (hgroupHeight + 32);
            nav.style.height = `${availableHeight}px`;
            nav.style.maxHeight = nav.style.height;
            _domConstants_projectContainer__WEBPACK_IMPORTED_MODULE_0__["default"].style.height = `${availableHeight}px`;
        }
        // maintain aspect ratio on arcade image cards
        const cardImgs = Array.from(document.getElementsByClassName("arcade-img"));
        cardImgs.forEach(img => {
            img.style.height = `${img.clientWidth}px`;
        });
    }
    // Add an event listener to check screen width when the page loads and on resize
    window.addEventListener('load', sizeAndToggle);
    window.addEventListener('resize', sizeAndToggle);
    // show/collapse menu when icon clicked
    if (menuIcon && menu) {
        menuIcon.addEventListener('click', () => {
            menu.classList.toggle("d-none");
        });
    }
});


/***/ }),

/***/ "./src/ui/inputs/addProjectForm.ts":
/*!*****************************************!*\
  !*** ./src/ui/inputs/addProjectForm.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _classes_Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../classes/Project */ "./src/classes/Project.ts");
/* harmony import */ var _projectNameModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectNameModal */ "./src/ui/inputs/projectNameModal.ts");


function addProjectForm() {
    const button = document.querySelector("#add-project-button");
    if (button)
        (0,_projectNameModal__WEBPACK_IMPORTED_MODULE_0__["default"])(button, n => new _classes_Project__WEBPACK_IMPORTED_MODULE_1__["default"](n));
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addProjectForm);


/***/ }),

/***/ "./src/ui/inputs/addToDoForm.ts":
/*!**************************************!*\
  !*** ./src/ui/inputs/addToDoForm.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _classes_ToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes/ToDo */ "./src/classes/ToDo.ts");
/* harmony import */ var _toDoForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toDoForm */ "./src/ui/inputs/toDoForm.ts");
/* harmony import */ var _classes_Projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../classes/Projects */ "./src/classes/Projects.ts");



function addToDoForm(container, coordinates) {
    // create ToDo from user input
    function createToDo(projectID, title, details, dateString, priority) {
        const newToDo = new _classes_ToDo__WEBPACK_IMPORTED_MODULE_0__["default"](title, details, new Date(dateString), priority);
        _classes_Projects__WEBPACK_IMPORTED_MODULE_1__["default"].get(projectID).addToDo(newToDo);
    }
    ;
    // hand over creation of form to lower-level function toDoForm()
    (0,_toDoForm__WEBPACK_IMPORTED_MODULE_2__["default"])(container, coordinates, createToDo);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addToDoForm);


/***/ }),

/***/ "./src/ui/inputs/editToDoForm.ts":
/*!***************************************!*\
  !*** ./src/ui/inputs/editToDoForm.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _toDoForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDoForm */ "./src/ui/inputs/toDoForm.ts");
/* harmony import */ var _classes_Projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes/Projects */ "./src/classes/Projects.ts");



function editToDoForm(toDo, container, coordinates) {
    const editDetails = (projectID, title, description, dateString, priority) => {
        const dueDate = new Date(dateString);
        toDo.updateProperties({ title, description, dueDate, priority });
        const selectedProject = _classes_Projects__WEBPACK_IMPORTED_MODULE_0__["default"].get(projectID);
        selectedProject.takeToDoFromAnother(toDo);
    };
    const elements = (0,_toDoForm__WEBPACK_IMPORTED_MODULE_1__["default"])(container, coordinates, editDetails);
    // include the text of previous todo details
    if (elements) {
        elements.titleInput.value = toDo.title;
        elements.detailsInput.value = toDo.description;
        elements.dateInput.value = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(toDo.dueDate, "yyyy-MM-dd");
        elements.submit.innerText = "Edit";
    }
    ;
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editToDoForm);


/***/ }),

/***/ "./src/ui/inputs/projectNameModal.ts":
/*!*******************************************!*\
  !*** ./src/ui/inputs/projectNameModal.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function projectNameModal(openingButton, callback, initialName) {
    const sidebar = document.getElementById("sidebar");
    const modal = document.getElementById("project-name-form-container");
    const form = document.getElementById("project-name-form");
    const nameField = document.getElementById("project-name");
    const cancelButton = document.getElementById("project-name-form-reset");
    // I know instanceof can't be used with a Typescript interface.
    // But it's for tricking intellisense. :)
    if (!(sidebar && modal instanceof HTMLDialogElement && form instanceof HTMLFormElement && nameField instanceof HTMLInputElement && cancelButton)) {
        throw new Error("projectNameModal function did not find necessary DOM elements.");
    }
    ;
    openingButton.addEventListener("click", () => {
        // position and show
        const parent = openingButton.parentElement;
        if (!parent)
            throw new Error("icon is an orphan");
        const iconTop = parent.getBoundingClientRect().top;
        if (window.innerWidth > 500) {
            modal.style.top = `${iconTop - 40}px`;
            modal.style.left = `${(sidebar === null || sidebar === void 0 ? void 0 : sidebar.clientWidth) - 35}px`;
            modal.showModal();
        }
        else {
            modal.style.top = `${iconTop - 80}px`;
            modal.style.left = "1rem";
            modal.showModal();
        }
        ;
        // in case this is for renaming
        form.reset();
        if (initialName)
            nameField.value = initialName;
        // prepare for submission
        const cleanUp = () => {
            form.removeEventListener("submit", handleSubmission); // avoid event listeners piling up.
        };
        const handleSubmission = () => {
            callback(nameField.value);
            cleanUp();
        };
        form.addEventListener("submit", handleSubmission);
        cancelButton.addEventListener("click", () => {
            modal.close();
            cleanUp();
        });
    });
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectNameModal);


/***/ }),

/***/ "./src/ui/inputs/toDoForm.ts":
/*!***********************************!*\
  !*** ./src/ui/inputs/toDoForm.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _classes_Projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../classes/Projects */ "./src/classes/Projects.ts");
/* harmony import */ var _enums_ToDoPriority__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../enums/ToDoPriority */ "./src/enums/ToDoPriority.ts");


function toDoForm(container, position, formAction) {
    if (document.getElementsByClassName("to-do-form")[0])
        return; // prevent duplicates
    // HTML element creation
    const modal = document.createElement("dialog");
    const form = document.createElement("form");
    const projectGroup = document.createElement("div");
    const projectText = document.createElement("label");
    const projectSelect = document.createElement("select");
    const titleGroup = document.createElement("div");
    const titleText = document.createElement("label");
    const titleInput = document.createElement("input");
    const detailsGroup = document.createElement("div");
    const detailsText = document.createElement("label");
    const detailsInput = document.createElement("input");
    const dateGroup = document.createElement("div");
    const dateText = document.createElement("label");
    const dateInput = document.createElement("input");
    const priorityGroup = document.createElement("div");
    const priorityText = document.createElement("span");
    const priorityBtn1 = document.createElement("button");
    const priorityBtn2 = document.createElement("button");
    const priorityBtn3 = document.createElement("button");
    const submitGroup = document.createElement("div");
    const submit = document.createElement("button");
    const cancel = document.createElement("button");
    // bootstrap classes
    projectGroup.classList.add("d-flex", "align-items-center", "mb-3", "gap-3");
    titleGroup.classList.add("d-flex", "align-items-center", "mb-3", "gap-3");
    detailsGroup.classList.add("d-flex", "align-items-center", "mb-3", "gap-3");
    dateGroup.classList.add("d-flex", "align-items-center", "mb-3", "gap-3");
    priorityGroup.classList.add("d-flex", "align-items-center", "mb-3");
    submitGroup.classList.add("d-flex", "align-items-center", "justify-content-center", "mb-3", "gap-3");
    titleInput.classList.add("form-control");
    detailsInput.classList.add("form-control");
    dateInput.classList.add("form-control");
    submit.classList.add("bg-success");
    cancel.classList.add("bg-danger");
    projectSelect.classList.add("form-select");
    priorityBtn1.classList.add("bg-success-subtle", "mx-1");
    priorityBtn2.classList.add("bg-warning-subtle", "mx-1");
    priorityBtn3.classList.add("bg-danger-subtle", "mx-1");
    // text content
    projectText.innerText = "Project:";
    titleText.innerText = "Title:";
    detailsText.innerText = "Details:";
    dateText.innerText = "Date:";
    priorityText.innerText = "Priority:";
    priorityBtn1.innerText = "low";
    priorityBtn2.innerText = "med";
    priorityBtn3.innerText = "high";
    submit.innerText = "Add";
    cancel.innerText = "Cancel";
    // attributes
    form.method = "dialog";
    projectSelect.id = "project-select";
    projectText.htmlFor = "project-select";
    titleInput.required = true;
    titleInput.id = "title";
    titleText.htmlFor = "title";
    detailsInput.id = "details";
    detailsText.htmlFor = "details";
    dateInput.required = true;
    dateInput.id = "date";
    dateText.htmlFor = "date";
    dateInput.type = "date";
    priorityBtn1.type = "button";
    priorityBtn2.type = "button";
    priorityBtn3.type = "button";
    priorityBtn1.title = "low priority";
    priorityBtn2.title = "medium priority";
    priorityBtn3.title = "high priority";
    submit.type = "submit";
    cancel.type = "reset";
    // priority number input
    let priority;
    priorityBtn1.addEventListener("click", () => {
        priority = _enums_ToDoPriority__WEBPACK_IMPORTED_MODULE_0__["default"].Low;
    });
    priorityBtn2.addEventListener("click", () => {
        priority = _enums_ToDoPriority__WEBPACK_IMPORTED_MODULE_0__["default"].Medium;
    });
    priorityBtn3.addEventListener("click", () => {
        priority = _enums_ToDoPriority__WEBPACK_IMPORTED_MODULE_0__["default"].High;
    });
    // simply close form on cancel
    cancel.addEventListener("click", () => {
        container.removeChild(modal);
    });
    // run necessary action when submitted
    form.addEventListener("submit", () => {
        formAction(projectSelect.value, titleInput.value, detailsInput.value, dateInput.value, priority);
        container.removeChild(modal);
    });
    // adding to DOM
    for (const project of _classes_Projects__WEBPACK_IMPORTED_MODULE_1__["default"].getAll()) {
        const projectOption = document.createElement("option");
        projectOption.innerText = project.name;
        projectOption.value = project.ID;
        projectSelect.appendChild(projectOption);
    }
    ;
    projectGroup.appendChild(projectText);
    projectGroup.appendChild(projectSelect);
    titleGroup.appendChild(titleText);
    titleGroup.appendChild(titleInput);
    detailsGroup.appendChild(detailsText);
    detailsGroup.appendChild(detailsInput);
    dateGroup.appendChild(dateText);
    dateGroup.appendChild(dateInput);
    priorityGroup.appendChild(priorityText);
    priorityGroup.appendChild(priorityBtn1);
    priorityGroup.append(priorityBtn2);
    priorityGroup.append(priorityBtn3);
    submitGroup.appendChild(submit);
    submitGroup.appendChild(cancel);
    form.appendChild(projectGroup);
    form.appendChild(titleGroup);
    form.appendChild(detailsGroup);
    form.appendChild(dateGroup);
    form.appendChild(priorityGroup);
    form.appendChild(submitGroup);
    modal.appendChild(form);
    container.appendChild(modal);
    modal.showModal();
    // position modal
    const positionTooLow = window.innerHeight / 2 + 100 < position.bottom;
    if (positionTooLow) {
        modal.style.top = `${position.top - modal.clientHeight - 15}px`;
    }
    else {
        modal.style.top = `${position.bottom}px`;
    }
    modal.style.left = `${position.left}px`;
    modal.style.right = '1.5rem';
    modal.classList.add("mt-0");
    return { titleInput, detailsInput, dateInput, submit };
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDoForm);


/***/ }),

/***/ "./src/ui/onboarding/categorySteps.ts":
/*!********************************************!*\
  !*** ./src/ui/onboarding/categorySteps.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elementDictionary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementDictionary */ "./src/ui/onboarding/elementDictionary.ts");

const categorySteps = [
    {
        title: "TaskQuest Ahoy!",
        intro: "It's fun. It's simple. Meet the only to-do app you'll ever need!",
    },
    {
        element: _elementDictionary__WEBPACK_IMPORTED_MODULE_0__["default"].banner.get(),
        title: "Define: category",
        intro: "This is a group which filters to-dos and sorts them by priority and due date. <b>'All Tasks'</b> includes everything.",
        position: "right"
    },
    {
        element: _elementDictionary__WEBPACK_IMPORTED_MODULE_0__["default"].toDoArticle1.get(),
        title: "A To-Do Element",
        intro: "Get a glance of the title, due date, and other details. Click the checkbox to tick it off!"
    },
    {
        element: _elementDictionary__WEBPACK_IMPORTED_MODULE_0__["default"].toDoArticle2.get(),
        title: "Importance labels",
        intro: "Notice the border color? It's because high-priority to-dos are labeled red."
    },
    {
        element: _elementDictionary__WEBPACK_IMPORTED_MODULE_0__["default"].toDoArticle3.get(),
        title: "Overdue :(",
        intro: "The bronze background shows that this to-do's due date has passed."
    },
    {
        element: _elementDictionary__WEBPACK_IMPORTED_MODULE_0__["default"].toDoArticle4.get(),
        title: "Labels continued",
        intro: "The orange border here shows this is a medium-priority to-do."
    },
    {
        element: _elementDictionary__WEBPACK_IMPORTED_MODULE_0__["default"].toDoArticle5.get(),
        title: "Date sorting",
        intro: "As suggested, in a category to-dos that are of the same importance are further sorted by due date (in descending order)."
    },
    {
        element: _elementDictionary__WEBPACK_IMPORTED_MODULE_0__["default"].toDoArticle6.get(),
        title: "Cucumber-cool",
        intro: "This green border just means this to-do is low-priority."
    },
    {
        element: _elementDictionary__WEBPACK_IMPORTED_MODULE_0__["default"].menuIcon.isVisible() ? _elementDictionary__WEBPACK_IMPORTED_MODULE_0__["default"].menuIcon.get() : _elementDictionary__WEBPACK_IMPORTED_MODULE_0__["default"].navBar.get(),
        title: "The menu",
        intro: _elementDictionary__WEBPACK_IMPORTED_MODULE_0__["default"].menuIcon.isVisible() ? "Click the icon to open the side-bar and discover more!" : "Navigate the to the other pages from this sidebar.",
    },
    {
        element: _elementDictionary__WEBPACK_IMPORTED_MODULE_0__["default"].tourButton.get(),
        title: "A Quick Reminder",
        intro: "This tour will not show when you come back. Ever need this tour again? Just tap this button."
    },
    {
        element: _elementDictionary__WEBPACK_IMPORTED_MODULE_0__["default"].category2.get(),
        title: "Example category",
        intro: "The <b>'Important'</b> category stores only high-priority to-dos."
    },
    {
        element: _elementDictionary__WEBPACK_IMPORTED_MODULE_0__["default"].projectHeader.get(),
        title: "About Projects",
        intro: "These are the groups of to-dos that <i>you</i> make."
    },
    {
        element: _elementDictionary__WEBPACK_IMPORTED_MODULE_0__["default"].addProjectIcon.get(),
        title: "Make your own!",
        intro: "After closing the tour, you can click the plus icon to add your own project!"
    },
    {
        element: _elementDictionary__WEBPACK_IMPORTED_MODULE_0__["default"].projectLinkLI.get(),
        title: "For example...",
        intro: "Look into this project I made just for you!"
    },
    {
        element: _elementDictionary__WEBPACK_IMPORTED_MODULE_0__["default"].projectLink.get(),
        title: "Trouble opening?",
        intro: "<small>(Select done and then you can open the page.)</small>"
    }
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (categorySteps);


/***/ }),

/***/ "./src/ui/onboarding/elementDictionary.ts":
/*!************************************************!*\
  !*** ./src/ui/onboarding/elementDictionary.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// factory function pattern for more dynamic object creation
const createElementDictionary = () => {
    const stepElement = (get, stagehand = false, changer = false) => {
        const isVisible = () => { var _a; return !((_a = get()) === null || _a === void 0 ? void 0 : _a.classList.contains("d-none")); };
        return { get, stagehand, changer, isVisible };
    };
    const banner = stepElement(() => document.getElementsByTagName("h2")[0]);
    const toDoArticle1 = stepElement(() => document.getElementsByTagName("article")[0], false, true);
    const toDoArticle2 = stepElement(() => document.getElementsByTagName("article")[1], false, true);
    const toDoArticle3 = stepElement(() => document.getElementsByTagName("article")[2], false, true);
    const toDoArticle4 = stepElement(() => document.getElementsByTagName("article")[3], false, true);
    const toDoArticle5 = stepElement(() => document.getElementsByTagName("article")[4], false, true);
    const toDoArticle6 = stepElement(() => document.getElementsByTagName("article")[5], false, true);
    const menuIcon = stepElement(() => document.getElementById("menu-icon"), false, true);
    const sidebar = stepElement(() => document.getElementsByTagName("nav")[0]);
    const tourButton = stepElement(() => document.querySelector("button[title='create tour']"));
    const category2 = stepElement(() => document.querySelectorAll("#category-list > li")[1]);
    const addProjectIcon = stepElement(() => document.getElementById("add-project-icon"));
    const projectHeader = stepElement(() => document.getElementById("project-header"));
    const projectLinkLI = stepElement(() => document.getElementById("project-list"));
    const projectLink = stepElement(() => {
        var _a;
        const link = document.querySelectorAll("#project-list > li > p")[0];
        (_a = sidebar.get()) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
            var _a;
            if (menuIcon.isVisible() && sidebar.isVisible()) {
                (_a = sidebar.get()) === null || _a === void 0 ? void 0 : _a.classList.add("d-none");
            }
            ;
        });
        return link;
    }, true);
    const addToDoIcon = stepElement(() => document.querySelector("i.bi-journal-plus"));
    const gameIcon = stepElement(() => document.getElementById("game-icon"), true);
    const gameImg = stepElement(() => document.getElementsByTagName("img")[0]);
    return {
        banner,
        toDoArticle1,
        toDoArticle2,
        toDoArticle3,
        toDoArticle4,
        toDoArticle5,
        toDoArticle6,
        menuIcon,
        sidebar,
        tourButton,
        category2,
        projectHeader,
        projectLink,
        projectLinkLI,
        addProjectIcon,
        addToDoIcon,
        gameIcon,
        gameImg
    };
};
// singleton
const elementDictionary = createElementDictionary();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (elementDictionary);


/***/ }),

/***/ "./src/ui/onboarding/gameSteps.ts":
/*!****************************************!*\
  !*** ./src/ui/onboarding/gameSteps.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elementDictionary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementDictionary */ "./src/ui/onboarding/elementDictionary.ts");

const gameSteps = [
    {
        element: _elementDictionary__WEBPACK_IMPORTED_MODULE_0__["default"].toDoArticle1.get(),
        title: "Work hard! Play hard!",
        intro: "Using those coins you earn from completing to-dos, you can pay for a 5-minute game session!",
    },
    {
        element: _elementDictionary__WEBPACK_IMPORTED_MODULE_0__["default"].gameImg.get(),
        title: "Game time.",
        intro: "Click the game's thumbnail to play. When you do, the amount of coins specified on the card will be deducted.",
        position: "right"
    },
    {
        title: "By-the-way",
        intro: "You can download this as an app with offline access. Enjoy the productivity gains!"
    },
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameSteps);


/***/ }),

/***/ "./src/ui/onboarding/onboarding.ts":
/*!*****************************************!*\
  !*** ./src/ui/onboarding/onboarding.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _classes_Projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes/Projects */ "./src/classes/Projects.ts");
/* harmony import */ var _functions_populateInitialProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../functions/populateInitialProjects */ "./src/functions/populateInitialProjects.ts");
/* harmony import */ var _outputs_showAllTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../outputs/showAllTasks */ "./src/ui/outputs/showAllTasks.ts");
/* harmony import */ var _elementDictionary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elementDictionary */ "./src/ui/onboarding/elementDictionary.ts");
/* harmony import */ var _stages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stages */ "./src/ui/onboarding/stages.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





function renderOnboarding() {
    if (!_classes_Projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectExists(p => p.name === "Tutorial"))
        (0,_functions_populateInitialProjects__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_outputs_showAllTasks__WEBPACK_IMPORTED_MODULE_2__["default"])(); // must be after populateTutorialProject for the same reason explained in app.ts comments.
    setTimeout(() => __awaiter(this, void 0, void 0, function* () {
        let stageIndex = 0;
        // display stage one
        let currentStage = _stages__WEBPACK_IMPORTED_MODULE_3__["default"][stageIndex]();
        // set up stage-changers
        for (const name in _elementDictionary__WEBPACK_IMPORTED_MODULE_4__["default"]) {
            const tour = yield currentStage;
            const element = _elementDictionary__WEBPACK_IMPORTED_MODULE_4__["default"][name];
            const DOMElement = element.get();
            let action = null;
            if (element.stagehand) {
                action = () => currentStage = _stages__WEBPACK_IMPORTED_MODULE_3__["default"][++stageIndex]();
            }
            else if (element.changer) {
                action = () => setTimeout(() => { tour.nextStep(); }, 500);
            }
            ;
            if (DOMElement && tour.isActive() && action) {
                DOMElement.addEventListener("click", action, { once: true });
            }
            ;
        }
        ;
    }), 1500);
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderOnboarding);


/***/ }),

/***/ "./src/ui/onboarding/projectSteps.ts":
/*!*******************************************!*\
  !*** ./src/ui/onboarding/projectSteps.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elementDictionary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementDictionary */ "./src/ui/onboarding/elementDictionary.ts");

const projectSteps = [
    {
        element: _elementDictionary__WEBPACK_IMPORTED_MODULE_0__["default"].banner.get(),
        title: "So we continue...",
        intro: "Welcome to  <b>'Tutorial'</b> project page!",
    },
    {
        element: _elementDictionary__WEBPACK_IMPORTED_MODULE_0__["default"].addToDoIcon.get(),
        title: "Adding to-dos",
        intro: "This button opens a form to add your new to-dos.",
        position: "left"
    },
    {
        element: _elementDictionary__WEBPACK_IMPORTED_MODULE_0__["default"].toDoArticle1.get(),
        title: "More powerful to-dos",
        intro: "A to-do element within a product page also has buttons to edit / delete it."
    },
    {
        element: _elementDictionary__WEBPACK_IMPORTED_MODULE_0__["default"].toDoArticle3.get(),
        title: "Want to move?",
        intro: "Just drag a to-do element and drop it on a project link in the menu. <i>Only works on wider screens.</i>"
    },
    {
        element: _elementDictionary__WEBPACK_IMPORTED_MODULE_0__["default"].toDoArticle5.get(),
        title: "The Easter Egg",
        intro: "Check this to-do then delete it... You just earned some coins!"
    },
    {
        element: _elementDictionary__WEBPACK_IMPORTED_MODULE_0__["default"].toDoArticle6.get(),
        title: "The Cost for Laziness",
        intro: "If you complete an overdue to-do late, you will lose the coins you could have otherwise gained."
    },
    {
        element: _elementDictionary__WEBPACK_IMPORTED_MODULE_0__["default"].gameIcon.get(),
        title: "A little reward",
        intro: "Great job getting this far. Spend your hard-earned money at the arcade!",
        position: "left"
    },
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectSteps);


/***/ }),

/***/ "./src/ui/onboarding/setUpTourButton.ts":
/*!**********************************************!*\
  !*** ./src/ui/onboarding/setUpTourButton.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elementDictionary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elementDictionary */ "./src/ui/onboarding/elementDictionary.ts");
/* harmony import */ var _onboarding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onboarding */ "./src/ui/onboarding/onboarding.ts");


function setUpTourButton() {
    var _a;
    (_a = document.getElementById("tour-button")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        var _a;
        (0,_onboarding__WEBPACK_IMPORTED_MODULE_0__["default"])();
        // prevent sidebar covering tutorial on mobile
        if (_elementDictionary__WEBPACK_IMPORTED_MODULE_1__["default"].menuIcon.isVisible() && _elementDictionary__WEBPACK_IMPORTED_MODULE_1__["default"].navBar.isVisible()) { // as in mobile screen
            (_a = _elementDictionary__WEBPACK_IMPORTED_MODULE_1__["default"].navBar.get()) === null || _a === void 0 ? void 0 : _a.classList.add("d-none");
        }
        ;
    });
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setUpTourButton);


/***/ }),

/***/ "./src/ui/onboarding/stages.ts":
/*!*************************************!*\
  !*** ./src/ui/onboarding/stages.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var intro_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! intro.js */ "./node_modules/intro.js/intro.module.js");
/* harmony import */ var _categorySteps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categorySteps */ "./src/ui/onboarding/categorySteps.ts");
/* harmony import */ var _gameSteps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameSteps */ "./src/ui/onboarding/gameSteps.ts");
/* harmony import */ var _projectSteps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectSteps */ "./src/ui/onboarding/projectSteps.ts");




const createStage = (options) => {
    return () => (0,intro_js__WEBPACK_IMPORTED_MODULE_0__["default"])().setOptions(options).start();
};
const stages = [
    createStage({
        steps: _categorySteps__WEBPACK_IMPORTED_MODULE_1__["default"],
        showBullets: false,
        showProgress: true,
    }),
    createStage({ steps: _projectSteps__WEBPACK_IMPORTED_MODULE_2__["default"] }),
    createStage({
        steps: _gameSteps__WEBPACK_IMPORTED_MODULE_3__["default"],
        showBullets: false,
        showStepNumbers: true,
    }),
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stages);


/***/ }),

/***/ "./src/ui/outputs/clearPage.ts":
/*!*************************************!*\
  !*** ./src/ui/outputs/clearPage.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domConstants_projectContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domConstants/projectContainer */ "./src/ui/domConstants/projectContainer.ts");

function clearPage() {
    _domConstants_projectContainer__WEBPACK_IMPORTED_MODULE_0__["default"].innerHTML = "";
    _domConstants_projectContainer__WEBPACK_IMPORTED_MODULE_0__["default"].style.background = "none";
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearPage);


/***/ }),

/***/ "./src/ui/outputs/idempotentDOM.ts":
/*!*****************************************!*\
  !*** ./src/ui/outputs/idempotentDOM.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function idempotentDOM(container, newRender, id) {
    const possibleOldRender = document.getElementById(id);
    if (possibleOldRender) {
        const oldRender = possibleOldRender;
        container.insertBefore(newRender, oldRender);
        container.removeChild(oldRender);
    }
    else {
        container.appendChild(newRender);
    }
    ;
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (idempotentDOM);


/***/ }),

/***/ "./src/ui/outputs/idempotentlyRenderToDo.ts":
/*!**************************************************!*\
  !*** ./src/ui/outputs/idempotentlyRenderToDo.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _classes_PubSub__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../classes/PubSub */ "./src/classes/PubSub.ts");
/* harmony import */ var _domConstants_projectContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../domConstants/projectContainer */ "./src/ui/domConstants/projectContainer.ts");
/* harmony import */ var _inputs_editToDoForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../inputs/editToDoForm */ "./src/ui/inputs/editToDoForm.ts");
/* harmony import */ var _classes_Projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../classes/Projects */ "./src/classes/Projects.ts");
/* harmony import */ var _enums_ToDoPriority__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../enums/ToDoPriority */ "./src/enums/ToDoPriority.ts");
/* harmony import */ var _enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../enums/PubSubEvents */ "./src/enums/PubSubEvents.ts");
/* harmony import */ var _idempotentDOM__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./idempotentDOM */ "./src/ui/outputs/idempotentDOM.ts");








function idempotentlyRenderToDo(toDo) {
    var _a;
    console.trace();
    const toDoPriority = (toDo.priority === _enums_ToDoPriority__WEBPACK_IMPORTED_MODULE_0__["default"].High ? "high" :
        toDo.priority === _enums_ToDoPriority__WEBPACK_IMPORTED_MODULE_0__["default"].Medium ? "medium" :
            toDo.priority === _enums_ToDoPriority__WEBPACK_IMPORTED_MODULE_0__["default"].Low ? "low" :
                "value error with priority number");
    const { parentID } = toDo;
    if (!parentID)
        throw new Error("ToDo object for rendering must have parentID");
    if (!_classes_Projects__WEBPACK_IMPORTED_MODULE_1__["default"].get(parentID))
        throw new Error("ToDo parentID property must equal Project ID for some Project instance.");
    // HTML elements for to-do article
    const element = document.createElement("article");
    const leftDiv = document.createElement("div");
    const rightDiv = document.createElement("div");
    const checkBox = document.createElement("input");
    const toDoTitle = document.createElement("label");
    const detailsButton = document.createElement("button");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    const detailsModal = document.createElement("dialog");
    const closeDetailsModal = document.createElement("button");
    // attributes
    element.id = toDo.ID;
    element.classList.add("to-do-element", `priority-${toDoPriority}`, "d-flex", "justify-content-between", "p-2", "bg-light", "rounded", "mb-3");
    leftDiv.classList.add("d-flex", "align-items-center", "gap-2", "borderless-children");
    rightDiv.classList.add("d-flex", "align-items-center", "gap-2", "borderless-children");
    checkBox.type = "checkbox";
    checkBox.classList.add("form-check-input");
    toDoTitle.htmlFor = "completeCheck";
    toDoTitle.classList.add("form-check-label");
    editButton.type = "button";
    deleteButton.type = "button";
    detailsButton.type = "button";
    closeDetailsModal.type = "button";
    editButton.title = "edit";
    deleteButton.title = "delete";
    detailsButton.classList.add("btn-outline-secondary");
    detailsModal.classList.add("details");
    closeDetailsModal.classList.add("close-details");
    // content
    toDoTitle.innerText = toDo.title;
    detailsButton.innerText = "Details";
    editButton.innerHTML = '<i class="bi bi-pencil-square"></i>';
    deleteButton.innerHTML = '<i class="bi bi-trash"></i>';
    closeDetailsModal.innerHTML = '<i class="bi bi-x-square"></i>';
    detailsModal.innerHTML =
        `<h3>${toDo.title}</h3>
    <p><b>Project:</b> ${(_a = _classes_Projects__WEBPACK_IMPORTED_MODULE_1__["default"].get(parentID)) === null || _a === void 0 ? void 0 : _a.name}</p>
    <p><b>Priority:</b> ${toDoPriority}</p>
    <p><b>Description:</b> ${toDo.description}</p>
    <p><b>Due Date:</b> ${(0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(toDo.dueDate, "do MMMM, Y")}</p>`;
    if (toDo.isChecked) {
        checkBox.checked = true;
        element.classList.add("text-decoration-line-through");
    }
    ;
    if (toDo.isOverDue()) {
        element.classList.add("overdue");
    }
    ;
    // details button
    detailsButton.addEventListener("click", () => {
        detailsModal.showModal();
        // position modal
        const modalHeight = detailsModal.clientHeight;
        const buttonPos = detailsButton.getBoundingClientRect();
        const buttonBottom = buttonPos.bottom + window.scrollY;
        const buttonTooLow = window.innerHeight / 2 + 100 < buttonBottom;
        if (buttonTooLow) {
            detailsModal.style.top = `${Math.ceil(buttonPos.top - modalHeight - 15)}px`;
        }
        else {
            detailsModal.style.top = `${Math.ceil(buttonBottom) + 10}px`;
        }
        ;
        detailsModal.style.right = `${buttonPos.right}px`;
    });
    closeDetailsModal.addEventListener("click", () => {
        detailsModal.close();
    });
    // checkbox functionality
    checkBox.addEventListener("click", () => {
        toDo.toggleIsChecked();
        if (toDo.isChecked) {
            element.classList.add("text-decoration-line-through");
        }
        else {
            element.classList.remove("text-decoration-line-through");
        }
        ;
    });
    // also check off if title clicked
    toDoTitle.addEventListener("click", () => {
        toDo.toggleIsChecked();
        if (toDo.isChecked) {
            element.classList.add("text-decoration-line-through");
            checkBox.checked = true;
        }
        else {
            element.classList.remove("text-decoration-line-through");
            checkBox.checked = false;
        }
        ;
    });
    // finally, appending elements to the DOM
    detailsModal.appendChild(closeDetailsModal);
    leftDiv.appendChild(checkBox);
    leftDiv.appendChild(toDoTitle);
    rightDiv.appendChild(detailsButton);
    rightDiv.appendChild(detailsModal);
    // edit button
    editButton.addEventListener("click", () => {
        (0,_inputs_editToDoForm__WEBPACK_IMPORTED_MODULE_3__["default"])(toDo, element, detailsButton.getBoundingClientRect());
    });
    // delete button
    deleteButton.addEventListener("click", () => {
        _classes_PubSub__WEBPACK_IMPORTED_MODULE_4__["default"].publish(_enums_PubSubEvents__WEBPACK_IMPORTED_MODULE_5__["default"].DeleteToDo, toDo.ID);
    });
    rightDiv.appendChild(editButton);
    rightDiv.appendChild(deleteButton);
    element.appendChild(leftDiv);
    element.appendChild(rightDiv);
    (0,_idempotentDOM__WEBPACK_IMPORTED_MODULE_6__["default"])(_domConstants_projectContainer__WEBPACK_IMPORTED_MODULE_7__["default"], element, toDo.ID);
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (idempotentlyRenderToDo);


/***/ }),

/***/ "./src/ui/outputs/putCategory.ts":
/*!***************************************!*\
  !*** ./src/ui/outputs/putCategory.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _classes_Categories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../classes/Categories */ "./src/classes/Categories.ts");
/* harmony import */ var _putGroupInSidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./putGroupInSidebar */ "./src/ui/outputs/putGroupInSidebar.ts");


function putCategory(categoryId) {
    (0,_putGroupInSidebar__WEBPACK_IMPORTED_MODULE_0__["default"])(categoryId, _classes_Categories__WEBPACK_IMPORTED_MODULE_1__["default"], "category-list");
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (putCategory);


/***/ }),

/***/ "./src/ui/outputs/putGroupInSidebar.ts":
/*!*********************************************!*\
  !*** ./src/ui/outputs/putGroupInSidebar.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _renderGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderGroup */ "./src/ui/outputs/renderGroup.ts");
/* harmony import */ var _idempotentDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./idempotentDOM */ "./src/ui/outputs/idempotentDOM.ts");


function putGroupInSidebar(groupID, GroupManager, groupListId) {
    const group = GroupManager.get(groupID);
    if (!group)
        throw new Error(`Group of ID ${groupID} not found.`);
    const groupList = document.getElementById(groupListId);
    if (!groupList)
        throw new Error(`element of id ${groupListId} not found.`);
    const listElement = document.createElement("li");
    const listText = document.createElement("p");
    const toDoCounter = document.createElement("span");
    const groupNameSpan = document.createElement("span");
    listElement.id = groupID;
    listElement.classList.add("list-group-item", "list-group-item-action", "d-flex", "justify-content-between", "align-items-center");
    groupNameSpan.innerText = group.name;
    groupNameSpan.classList.add("d-inline-block", "text-truncate");
    groupNameSpan.style.maxWidth = "120px";
    listText.addEventListener("click", () => (0,_renderGroup__WEBPACK_IMPORTED_MODULE_0__["default"])(group));
    listText.classList.add("d-flex", "link-opacity-75", "link-opacity-100-hover", "link-underline-opacity-0", "link-secondary", "user-select-none", "m-0");
    toDoCounter.classList.add("counter", "badge", "p-1", "me-2", "align-self-center");
    const count = group.toDos.length;
    if (count > 0) {
        toDoCounter.innerText = String(count);
    }
    ;
    listText.append(toDoCounter);
    listText.append(groupNameSpan);
    listElement.append(listText);
    (0,_idempotentDOM__WEBPACK_IMPORTED_MODULE_1__["default"])(groupList, listElement, groupID);
    // in case further manipulation is needed
    return { group, listElement };
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (putGroupInSidebar);


/***/ }),

/***/ "./src/ui/outputs/putProject.ts":
/*!**************************************!*\
  !*** ./src/ui/outputs/putProject.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _classes_Projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../classes/Projects */ "./src/classes/Projects.ts");
/* harmony import */ var _inputs_projectNameModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../inputs/projectNameModal */ "./src/ui/inputs/projectNameModal.ts");
/* harmony import */ var _putGroupInSidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./putGroupInSidebar */ "./src/ui/outputs/putGroupInSidebar.ts");
/* harmony import */ var _showAllTasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showAllTasks */ "./src/ui/outputs/showAllTasks.ts");




function putProject(projectID) {
    const { group: project, listElement } = (0,_putGroupInSidebar__WEBPACK_IMPORTED_MODULE_0__["default"])(projectID, _classes_Projects__WEBPACK_IMPORTED_MODULE_1__["default"], "project-list");
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("d-flex", "align-items-center");
    // rename project button
    const renameButton = document.createElement("button");
    renameButton.innerHTML = '<i class="bi bi-pencil-square"></i>';
    renameButton.title = "Rename project";
    (0,_inputs_projectNameModal__WEBPACK_IMPORTED_MODULE_2__["default"])(renameButton, n => project.changeName(n), project.name);
    buttonContainer.appendChild(renameButton);
    // delete project button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="bi bi-trash3 fs-5"></i>';
    deleteButton.title = "delete project";
    deleteButton.addEventListener("click", () => {
        _classes_Projects__WEBPACK_IMPORTED_MODULE_1__["default"].deleteProject(projectID);
        (0,_showAllTasks__WEBPACK_IMPORTED_MODULE_3__["default"])();
    });
    buttonContainer.appendChild(deleteButton);
    listElement.appendChild(buttonContainer);
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (putProject);


/***/ }),

/***/ "./src/ui/outputs/removeProject.ts":
/*!*****************************************!*\
  !*** ./src/ui/outputs/removeProject.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function removeProject(id) {
    var _a;
    const deletedLI = document.getElementById(id);
    if (deletedLI)
        (_a = document.getElementById("project-list")) === null || _a === void 0 ? void 0 : _a.removeChild(deletedLI);
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeProject);


/***/ }),

/***/ "./src/ui/outputs/removeToDo.ts":
/*!**************************************!*\
  !*** ./src/ui/outputs/removeToDo.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domConstants_projectContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domConstants/projectContainer */ "./src/ui/domConstants/projectContainer.ts");

function removeToDo(toDoID) {
    const deletion = document.getElementById(toDoID);
    if (deletion)
        _domConstants_projectContainer__WEBPACK_IMPORTED_MODULE_0__["default"].removeChild(deletion);
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeToDo);


/***/ }),

/***/ "./src/ui/outputs/renderArcade.ts":
/*!****************************************!*\
  !*** ./src/ui/outputs/renderArcade.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _classes_Bank__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../classes/Bank */ "./src/classes/Bank.ts");
/* harmony import */ var _classes_Arcade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../classes/Arcade */ "./src/classes/Arcade.ts");
/* harmony import */ var _domConstants_projectContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domConstants/projectContainer */ "./src/ui/domConstants/projectContainer.ts");
/* harmony import */ var _clearPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearPage */ "./src/ui/outputs/clearPage.ts");
/* harmony import */ var _renderMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renderMessage */ "./src/ui/outputs/renderMessage.ts");
/* harmony import */ var _domConstants_arcadeState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domConstants/arcadeState */ "./src/ui/domConstants/arcadeState.ts");






function renderArcade() {
    (0,_clearPage__WEBPACK_IMPORTED_MODULE_0__["default"])();
    _domConstants_projectContainer__WEBPACK_IMPORTED_MODULE_1__["default"].classList.replace("group-page", "arcade-page");
    history.pushState(_domConstants_arcadeState__WEBPACK_IMPORTED_MODULE_2__["default"], "", "arcade");
    // heading
    const header = document.createElement("h1");
    header.innerText = "Arcade";
    _domConstants_projectContainer__WEBPACK_IMPORTED_MODULE_1__["default"].appendChild(header);
    // creating card for each game
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");
    for (const game of _classes_Arcade__WEBPACK_IMPORTED_MODULE_3__["default"].getAll()) {
        const gameContainer = document.createElement("dialog");
        const gamePlay = document.createElement("iframe");
        const closeGame = document.createElement("button");
        const card = document.createElement("article");
        const thumbnail = document.createElement("img");
        const text = document.createElement("div");
        const title = document.createElement("h5");
        const cost = document.createElement("small");
        text.classList.add("card-body");
        thumbnail.classList.add("arcade-img");
        thumbnail.src = game.thumbnailURL;
        thumbnail.title = "Click to play!";
        title.innerText = game.name;
        cost.innerHTML = `Cost: <i class="bi bi-coin text-warning"></i> ${game.cost}`;
        gamePlay.src = game.link;
        closeGame.innerHTML = '<i class="bi bi-x-lg"></i>';
        thumbnail.addEventListener("click", () => {
            const userCanPay = _classes_Bank__WEBPACK_IMPORTED_MODULE_4__["default"].deduct(game.cost);
            if (userCanPay) {
                _domConstants_projectContainer__WEBPACK_IMPORTED_MODULE_1__["default"].appendChild(gameContainer);
                gameContainer.showModal();
                (0,_renderMessage__WEBPACK_IMPORTED_MODULE_5__["default"])(`Paid ${game.cost} coins for a 5-minute gaming session.`, gameContainer); // migrate to PubSub
                setTimeout(() => {
                    gameContainer.close();
                    (0,_renderMessage__WEBPACK_IMPORTED_MODULE_5__["default"])("Session done. Pay again to play.");
                }, _classes_Arcade__WEBPACK_IMPORTED_MODULE_3__["default"].sessionMS);
            }
            else {
                (0,_renderMessage__WEBPACK_IMPORTED_MODULE_5__["default"])("Not enough coins to pay. Complete more to-dos.");
            }
            ;
        });
        closeGame.addEventListener("click", () => {
            gameContainer.close();
            _domConstants_projectContainer__WEBPACK_IMPORTED_MODULE_1__["default"].removeChild(gameContainer);
            _classes_Bank__WEBPACK_IMPORTED_MODULE_4__["default"].deposit(game.cost);
            (0,_renderMessage__WEBPACK_IMPORTED_MODULE_5__["default"])("Yay! Coins refunded");
        });
        text.appendChild(title);
        text.appendChild(cost);
        card.appendChild(thumbnail);
        card.appendChild(text);
        cardContainer.appendChild(card);
        gameContainer.appendChild(closeGame);
        gameContainer.appendChild(gamePlay);
    }
    ;
    _domConstants_projectContainer__WEBPACK_IMPORTED_MODULE_1__["default"].appendChild(cardContainer);
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderArcade);


/***/ }),

/***/ "./src/ui/outputs/renderGroup.ts":
/*!***************************************!*\
  !*** ./src/ui/outputs/renderGroup.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domConstants_projectContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domConstants/projectContainer */ "./src/ui/domConstants/projectContainer.ts");
/* harmony import */ var _inputs_addToDoForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../inputs/addToDoForm */ "./src/ui/inputs/addToDoForm.ts");
/* harmony import */ var _clearPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearPage */ "./src/ui/outputs/clearPage.ts");
/* harmony import */ var _idempotentlyRenderToDo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./idempotentlyRenderToDo */ "./src/ui/outputs/idempotentlyRenderToDo.ts");




function renderGroup(group) {
    // History API for more accessible navigation. (Commented out because it's inconvenient with Webpack's HMR.)
    // history.pushState(group.ID, "",  group.name.toLocaleLowerCase().replace(" ", "-"));
    // reset
    (0,_clearPage__WEBPACK_IMPORTED_MODULE_0__["default"])();
    _domConstants_projectContainer__WEBPACK_IMPORTED_MODULE_1__["default"].classList.remove("arcade-page");
    _domConstants_projectContainer__WEBPACK_IMPORTED_MODULE_1__["default"].classList.add("group-page");
    // wallpaper
    const randomImg = Math.floor(Math.random() * 10) + 1;
    _domConstants_projectContainer__WEBPACK_IMPORTED_MODULE_1__["default"].style.background = `url("./bg/img-${randomImg}.jpg") center center / cover`;
    // html element creation
    const header = document.createElement("header");
    const titleDiv = document.createElement("div");
    const title = document.createElement("h2");
    const icon = document.createElement("i");
    const addIcon = document.createElement("i");
    // html element attributes
    header.classList.add("fs-2", "mb-3", "bg-success-subtle", "p-3", "d-flex", "justify-content-between", "rounded");
    titleDiv.classList.add("d-flex", "gap-4", "align-items-center");
    title.innerText = group.name;
    title.classList.add("h1");
    icon.classList.add("bi");
    icon.classList.add(`${group.icon}`);
    addIcon.classList.add("bi");
    addIcon.classList.add("bi-journal-plus");
    // events
    addIcon.addEventListener("click", () => {
        (0,_inputs_addToDoForm__WEBPACK_IMPORTED_MODULE_2__["default"])(_domConstants_projectContainer__WEBPACK_IMPORTED_MODULE_1__["default"], header.getBoundingClientRect());
    });
    // append to DOM
    titleDiv.appendChild(icon);
    titleDiv.appendChild(title);
    header.appendChild(titleDiv);
    header.appendChild(addIcon);
    _domConstants_projectContainer__WEBPACK_IMPORTED_MODULE_1__["default"].appendChild(header);
    group.toDos.forEach(toDo => (0,_idempotentlyRenderToDo__WEBPACK_IMPORTED_MODULE_3__["default"])(toDo));
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGroup);


/***/ }),

/***/ "./src/ui/outputs/renderMessage.ts":
/*!*****************************************!*\
  !*** ./src/ui/outputs/renderMessage.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domConstants_projectContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domConstants/projectContainer */ "./src/ui/domConstants/projectContainer.ts");

function renderMessage(message, container = _domConstants_projectContainer__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    const goodNews = message.startsWith("Yay!");
    const textBox = document.createElement("aside");
    const background = document.createElement("div");
    const text = document.createElement("p");
    text.innerText = message;
    background.classList.add(`bg-${goodNews ? "success" : "danger"}-subtle`, "text-center", "py-2", "px-3", "rounded-top");
    text.classList.add("fs-5", "m-0");
    background.appendChild(text);
    textBox.appendChild(background);
    textBox.classList.add("d-flex", "justify-content-center", "position-absolute", "bottom-0");
    textBox.style.width = `calc(${container.clientWidth}px - 3rem)`;
    container.appendChild(textBox);
    setTimeout(() => {
        const pageNodes = Array.from(container.childNodes);
        const pageNotChanged = pageNodes.includes(textBox);
        if (pageNotChanged) {
            container.removeChild(textBox);
        }
    }, 3000);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMessage);


/***/ }),

/***/ "./src/ui/outputs/showAllTasks.ts":
/*!****************************************!*\
  !*** ./src/ui/outputs/showAllTasks.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _classes_Categories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes/Categories */ "./src/classes/Categories.ts");
/* harmony import */ var _renderGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGroup */ "./src/ui/outputs/renderGroup.ts");


function showAllTasks() {
    if (window.location.pathname === "/all-tasks")
        return;
    const allTasksCategory = _classes_Categories__WEBPACK_IMPORTED_MODULE_0__["default"].query(cat => cat.name == "All Tasks");
    if (!allTasksCategory)
        throw new Error("No category with name 'All Tasks' found.");
    (0,_renderGroup__WEBPACK_IMPORTED_MODULE_1__["default"])(allTasksCategory);
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showAllTasks);


/***/ }),

/***/ "./src/ui/outputs/updateToDoCounter.ts":
/*!*********************************************!*\
  !*** ./src/ui/outputs/updateToDoCounter.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function updateGroupCounter(parameters) {
    const { groupID: projectID, integerToAdd } = parameters;
    const counter = document.querySelector(`li#${CSS.escape(projectID)} .counter`);
    if (!counter)
        throw new Error(`Not selected .counter descendant of list-item with ID: ${projectID}`);
    const currentCount = Number(counter.innerText);
    counter.innerText = `${currentCount + integerToAdd}`;
    if (counter.innerText === "0")
        counter.innerText = "";
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateGroupCounter);


/***/ }),

/***/ "./src/ui/outputs/whatsPopping.ts":
/*!****************************************!*\
  !*** ./src/ui/outputs/whatsPopping.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _classes_Categories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../classes/Categories */ "./src/classes/Categories.ts");
/* harmony import */ var _classes_Projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes/Projects */ "./src/classes/Projects.ts");
/* harmony import */ var _domConstants_arcadeState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../domConstants/arcadeState */ "./src/ui/domConstants/arcadeState.ts");
/* harmony import */ var _renderArcade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderArcade */ "./src/ui/outputs/renderArcade.ts");
/* harmony import */ var _renderGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderGroup */ "./src/ui/outputs/renderGroup.ts");





// Set up forward/back buttons
function whatsPopping() {
    window.addEventListener("popstate", (e) => {
        if (e.state) {
            const possiblyProject = _classes_Projects__WEBPACK_IMPORTED_MODULE_0__["default"].get(e.state);
            const possiblyCategory = _classes_Categories__WEBPACK_IMPORTED_MODULE_1__["default"].get(e.state);
            if (possiblyProject) {
                (0,_renderGroup__WEBPACK_IMPORTED_MODULE_2__["default"])(possiblyProject);
            }
            else if (possiblyCategory) {
                (0,_renderGroup__WEBPACK_IMPORTED_MODULE_2__["default"])(possiblyCategory);
            }
            else if (e.state === _domConstants_arcadeState__WEBPACK_IMPORTED_MODULE_3__["default"]) {
                (0,_renderArcade__WEBPACK_IMPORTED_MODULE_4__["default"])();
            }
            ;
        }
        ;
    });
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (whatsPopping);


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).

var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }
  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");


/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  //
  // Note to future-self: No, you can't remove the `toLowerCase()` call.
  // REF: https://github.com/uuidjs/uuid/pull/677#issuecomment-1757351351
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
  var uuid = unsafeStringify(arr, offset);
  // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields
  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }
  return uuid;
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    offset = offset || 0;
    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");

function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/* harmony import */ var _functions_subscribeUIAndStorageFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/subscribeUIAndStorageFunctions */ "./src/functions/subscribeUIAndStorageFunctions.ts");
/* harmony import */ var _ui_onboarding_onboarding__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/onboarding/onboarding */ "./src/ui/onboarding/onboarding.ts");
/* harmony import */ var _storage_hasVisited__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./storage/hasVisited */ "./src/storage/hasVisited.ts");
/* harmony import */ var _storage_setVisitedFlag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./storage/setVisitedFlag */ "./src/storage/setVisitedFlag.ts");
/* harmony import */ var _ui_outputs_showAllTasks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ui/outputs/showAllTasks */ "./src/ui/outputs/showAllTasks.ts");
/* harmony import */ var _storage_loadProjects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./storage/loadProjects */ "./src/storage/loadProjects.ts");
/* harmony import */ var _ui_inputs_addProjectForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/inputs/addProjectForm */ "./src/ui/inputs/addProjectForm.ts");
/* harmony import */ var _functions_initializeCategories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/initializeCategories */ "./src/functions/initializeCategories.ts");
/* harmony import */ var _functions_initializeGames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions/initializeGames */ "./src/functions/initializeGames.ts");
/* harmony import */ var _ui_outputs_whatsPopping__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/outputs/whatsPopping */ "./src/ui/outputs/whatsPopping.ts");
/* harmony import */ var _ui_onboarding_setUpTourButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/onboarding/setUpTourButton */ "./src/ui/onboarding/setUpTourButton.ts");
/* harmony import */ var _ui_domUtilities_resizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/domUtilities/resizer */ "./src/ui/domUtilities/resizer.ts");
/* harmony import */ var _sw__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sw */ "./src/sw.ts");













(0,_ui_domUtilities_resizer__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_ui_inputs_addProjectForm__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_ui_onboarding_setUpTourButton__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_functions_subscribeUIAndStorageFunctions__WEBPACK_IMPORTED_MODULE_3__["default"])(); // must be before any object initializations
(0,_functions_initializeCategories__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_functions_initializeGames__WEBPACK_IMPORTED_MODULE_5__["default"])();
(0,_ui_outputs_whatsPopping__WEBPACK_IMPORTED_MODULE_6__["default"])();
if (!(0,_storage_hasVisited__WEBPACK_IMPORTED_MODULE_7__["default"])()) {
    (0,_sw__WEBPACK_IMPORTED_MODULE_8__["default"])();
    (0,_ui_onboarding_onboarding__WEBPACK_IMPORTED_MODULE_9__["default"])();
    (0,_storage_setVisitedFlag__WEBPACK_IMPORTED_MODULE_10__["default"])();
}
else {
    (0,_storage_loadProjects__WEBPACK_IMPORTED_MODULE_11__["default"])();
}
;
// Load projects leads to PutToDo events being published which lead to to-do element renders being project-like.
// This will lead to those renders being overridden for category-like renders.
// So it should be at the end.
(0,_ui_outputs_showAllTasks__WEBPACK_IMPORTED_MODULE_12__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNQd0Q7QUFDeEQsaUVBQWUsOERBQWE7Ozs7Ozs7Ozs7Ozs7O0FDRDVCO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05xRTtBQUNKO0FBQ1E7QUFDZDtBQUNRO0FBQ047QUFDSDtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsV0FBVyxpRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHlCQUF5Qix3RUFBYztBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEscUVBQWU7QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esc0JBQXNCLDJFQUFpQjs7QUFFdkM7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpRUFBZTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZUFBZSxvRUFBVTtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esa0JBQWtCLHVFQUFhO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxXQUFXLGlFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9CLHlFQUFlO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDekU7QUFDTTtBQUNXO0FBQ1QsQ0FBQztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rhc2txdWVzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGFza3F1ZXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRMb2NhbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGFza3F1ZXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovL3Rhc2txdWVzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90YXNrcXVlc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90YXNrcXVlc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3Rhc2txdWVzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3Rhc2txdWVzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGFza3F1ZXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGFza3F1ZXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3Rhc2txdWVzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3Rhc2txdWVzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90YXNrcXVlc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzIiwid2VicGFjazovL3Rhc2txdWVzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGFza3F1ZXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3Rhc2txdWVzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGFza3F1ZXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3Rhc2txdWVzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGFza3F1ZXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90YXNrcXVlc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90YXNrcXVlc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zvcm1hdC9pbmRleC5qcyIsIndlYnBhY2s6Ly90YXNrcXVlc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90YXNrcXVlc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVmFsaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGFza3F1ZXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90YXNrcXVlc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90YXNrcXVlc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90YXNrcXVlc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGFza3F1ZXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90YXNrcXVlc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGFza3F1ZXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90YXNrcXVlc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplL2luZGV4LmpzIiwid2VicGFjazovL3Rhc2txdWVzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGFza3F1ZXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGFza3F1ZXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdWJNaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGFza3F1ZXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGFza3F1ZXN0Ly4vbm9kZV9tb2R1bGVzL2ludHJvLmpzL2ludHJvLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly90YXNrcXVlc3QvLi9zcmMvY2xhc3Nlcy9BcmNhZGUudHMiLCJ3ZWJwYWNrOi8vdGFza3F1ZXN0Ly4vc3JjL2NsYXNzZXMvQmFuay50cyIsIndlYnBhY2s6Ly90YXNrcXVlc3QvLi9zcmMvY2xhc3Nlcy9DYXRlZ29yaWVzLnRzIiwid2VicGFjazovL3Rhc2txdWVzdC8uL3NyYy9jbGFzc2VzL0NhdGVnb3J5LnRzIiwid2VicGFjazovL3Rhc2txdWVzdC8uL3NyYy9jbGFzc2VzL0dhbWUudHMiLCJ3ZWJwYWNrOi8vdGFza3F1ZXN0Ly4vc3JjL2NsYXNzZXMvR3JvdXAudHMiLCJ3ZWJwYWNrOi8vdGFza3F1ZXN0Ly4vc3JjL2NsYXNzZXMvR3JvdXBPZkdyb3Vwcy50cyIsIndlYnBhY2s6Ly90YXNrcXVlc3QvLi9zcmMvY2xhc3Nlcy9JRGVkLnRzIiwid2VicGFjazovL3Rhc2txdWVzdC8uL3NyYy9jbGFzc2VzL1Byb2plY3QudHMiLCJ3ZWJwYWNrOi8vdGFza3F1ZXN0Ly4vc3JjL2NsYXNzZXMvUHJvamVjdHMudHMiLCJ3ZWJwYWNrOi8vdGFza3F1ZXN0Ly4vc3JjL2NsYXNzZXMvUHViU3ViLnRzIiwid2VicGFjazovL3Rhc2txdWVzdC8uL3NyYy9jbGFzc2VzL1NpbmdsZXRvbi50cyIsIndlYnBhY2s6Ly90YXNrcXVlc3QvLi9zcmMvY2xhc3Nlcy9Ub0RvLnRzIiwid2VicGFjazovL3Rhc2txdWVzdC8uL3NyYy9lbnVtcy9QdWJTdWJFdmVudHMudHMiLCJ3ZWJwYWNrOi8vdGFza3F1ZXN0Ly4vc3JjL2VudW1zL1RvRG9Qcmlvcml0eS50cyIsIndlYnBhY2s6Ly90YXNrcXVlc3QvLi9zcmMvZnVuY3Rpb25zL2RhdGVHZW5lcmF0b3JzLnRzIiwid2VicGFjazovL3Rhc2txdWVzdC8uL3NyYy9mdW5jdGlvbnMvZmlsdGVySW1wb3J0YW50LnRzIiwid2VicGFjazovL3Rhc2txdWVzdC8uL3NyYy9mdW5jdGlvbnMvZmlsdGVyVGhpc1dlZWsudHMiLCJ3ZWJwYWNrOi8vdGFza3F1ZXN0Ly4vc3JjL2Z1bmN0aW9ucy9maWx0ZXJUb2RheS50cyIsIndlYnBhY2s6Ly90YXNrcXVlc3QvLi9zcmMvZnVuY3Rpb25zL2luaXRpYWxpemVDYXRlZ29yaWVzLnRzIiwid2VicGFjazovL3Rhc2txdWVzdC8uL3NyYy9mdW5jdGlvbnMvaW5pdGlhbGl6ZUdhbWVzLnRzIiwid2VicGFjazovL3Rhc2txdWVzdC8uL3NyYy9mdW5jdGlvbnMvaXNVVUlELnRzIiwid2VicGFjazovL3Rhc2txdWVzdC8uL3NyYy9mdW5jdGlvbnMvbm9GaWx0ZXIudHMiLCJ3ZWJwYWNrOi8vdGFza3F1ZXN0Ly4vc3JjL2Z1bmN0aW9ucy9wb3B1bGF0ZUluaXRpYWxQcm9qZWN0cy50cyIsIndlYnBhY2s6Ly90YXNrcXVlc3QvLi9zcmMvZnVuY3Rpb25zL3N1YnNjcmliZVVJQW5kU3RvcmFnZUZ1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly90YXNrcXVlc3QvLi9zcmMvZnVuY3Rpb25zL3RpbWVOb3JtYWxpc2UudHMiLCJ3ZWJwYWNrOi8vdGFza3F1ZXN0Ly4vc3JjL3JlZ2V4L2VuZHNXaXRoSW1hZ2VGaWxlRXh0ZW5zaW9uLnRzIiwid2VicGFjazovL3Rhc2txdWVzdC8uL3NyYy9yZWdleC9zdGFydHNXaXRoSFRUUFMudHMiLCJ3ZWJwYWNrOi8vdGFza3F1ZXN0Ly4vc3JjL3JlZ2V4L3V1aWRSZWdleC50cyIsIndlYnBhY2s6Ly90YXNrcXVlc3QvLi9zcmMvc3RvcmFnZS9nZXRDb2lucy50cyIsIndlYnBhY2s6Ly90YXNrcXVlc3QvLi9zcmMvc3RvcmFnZS9oYXNWaXNpdGVkLnRzIiwid2VicGFjazovL3Rhc2txdWVzdC8uL3NyYy9zdG9yYWdlL2xvYWRQcm9qZWN0cy50cyIsIndlYnBhY2s6Ly90YXNrcXVlc3QvLi9zcmMvc3RvcmFnZS9wdXRDb2lucy50cyIsIndlYnBhY2s6Ly90YXNrcXVlc3QvLi9zcmMvc3RvcmFnZS9zZXRWaXNpdGVkRmxhZy50cyIsIndlYnBhY2s6Ly90YXNrcXVlc3QvLi9zcmMvc3RvcmFnZS9zdG9yZVByb2plY3RzLnRzIiwid2VicGFjazovL3Rhc2txdWVzdC8uL3NyYy9zdy50cyIsIndlYnBhY2s6Ly90YXNrcXVlc3QvLi9zcmMvdWkvZG9tQ29uc3RhbnRzL2FyY2FkZVN0YXRlLnRzIiwid2VicGFjazovL3Rhc2txdWVzdC8uL3NyYy91aS9kb21Db25zdGFudHMvcHJvamVjdENvbnRhaW5lci50cyIsIndlYnBhY2s6Ly90YXNrcXVlc3QvLi9zcmMvdWkvZG9tVXRpbGl0aWVzL3Jlc2l6ZXIudHMiLCJ3ZWJwYWNrOi8vdGFza3F1ZXN0Ly4vc3JjL3VpL2lucHV0cy9hZGRQcm9qZWN0Rm9ybS50cyIsIndlYnBhY2s6Ly90YXNrcXVlc3QvLi9zcmMvdWkvaW5wdXRzL2FkZFRvRG9Gb3JtLnRzIiwid2VicGFjazovL3Rhc2txdWVzdC8uL3NyYy91aS9pbnB1dHMvZWRpdFRvRG9Gb3JtLnRzIiwid2VicGFjazovL3Rhc2txdWVzdC8uL3NyYy91aS9pbnB1dHMvcHJvamVjdE5hbWVNb2RhbC50cyIsIndlYnBhY2s6Ly90YXNrcXVlc3QvLi9zcmMvdWkvaW5wdXRzL3RvRG9Gb3JtLnRzIiwid2VicGFjazovL3Rhc2txdWVzdC8uL3NyYy91aS9vbmJvYXJkaW5nL2NhdGVnb3J5U3RlcHMudHMiLCJ3ZWJwYWNrOi8vdGFza3F1ZXN0Ly4vc3JjL3VpL29uYm9hcmRpbmcvZWxlbWVudERpY3Rpb25hcnkudHMiLCJ3ZWJwYWNrOi8vdGFza3F1ZXN0Ly4vc3JjL3VpL29uYm9hcmRpbmcvZ2FtZVN0ZXBzLnRzIiwid2VicGFjazovL3Rhc2txdWVzdC8uL3NyYy91aS9vbmJvYXJkaW5nL29uYm9hcmRpbmcudHMiLCJ3ZWJwYWNrOi8vdGFza3F1ZXN0Ly4vc3JjL3VpL29uYm9hcmRpbmcvcHJvamVjdFN0ZXBzLnRzIiwid2VicGFjazovL3Rhc2txdWVzdC8uL3NyYy91aS9vbmJvYXJkaW5nL3NldFVwVG91ckJ1dHRvbi50cyIsIndlYnBhY2s6Ly90YXNrcXVlc3QvLi9zcmMvdWkvb25ib2FyZGluZy9zdGFnZXMudHMiLCJ3ZWJwYWNrOi8vdGFza3F1ZXN0Ly4vc3JjL3VpL291dHB1dHMvY2xlYXJQYWdlLnRzIiwid2VicGFjazovL3Rhc2txdWVzdC8uL3NyYy91aS9vdXRwdXRzL2lkZW1wb3RlbnRET00udHMiLCJ3ZWJwYWNrOi8vdGFza3F1ZXN0Ly4vc3JjL3VpL291dHB1dHMvaWRlbXBvdGVudGx5UmVuZGVyVG9Eby50cyIsIndlYnBhY2s6Ly90YXNrcXVlc3QvLi9zcmMvdWkvb3V0cHV0cy9wdXRDYXRlZ29yeS50cyIsIndlYnBhY2s6Ly90YXNrcXVlc3QvLi9zcmMvdWkvb3V0cHV0cy9wdXRHcm91cEluU2lkZWJhci50cyIsIndlYnBhY2s6Ly90YXNrcXVlc3QvLi9zcmMvdWkvb3V0cHV0cy9wdXRQcm9qZWN0LnRzIiwid2VicGFjazovL3Rhc2txdWVzdC8uL3NyYy91aS9vdXRwdXRzL3JlbW92ZVByb2plY3QudHMiLCJ3ZWJwYWNrOi8vdGFza3F1ZXN0Ly4vc3JjL3VpL291dHB1dHMvcmVtb3ZlVG9Eby50cyIsIndlYnBhY2s6Ly90YXNrcXVlc3QvLi9zcmMvdWkvb3V0cHV0cy9yZW5kZXJBcmNhZGUudHMiLCJ3ZWJwYWNrOi8vdGFza3F1ZXN0Ly4vc3JjL3VpL291dHB1dHMvcmVuZGVyR3JvdXAudHMiLCJ3ZWJwYWNrOi8vdGFza3F1ZXN0Ly4vc3JjL3VpL291dHB1dHMvcmVuZGVyTWVzc2FnZS50cyIsIndlYnBhY2s6Ly90YXNrcXVlc3QvLi9zcmMvdWkvb3V0cHV0cy9zaG93QWxsVGFza3MudHMiLCJ3ZWJwYWNrOi8vdGFza3F1ZXN0Ly4vc3JjL3VpL291dHB1dHMvdXBkYXRlVG9Eb0NvdW50ZXIudHMiLCJ3ZWJwYWNrOi8vdGFza3F1ZXN0Ly4vc3JjL3VpL291dHB1dHMvd2hhdHNQb3BwaW5nLnRzIiwid2VicGFjazovL3Rhc2txdWVzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvbmF0aXZlLmpzIiwid2VicGFjazovL3Rhc2txdWVzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vdGFza3F1ZXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vdGFza3F1ZXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vdGFza3F1ZXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly90YXNrcXVlc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL3Rhc2txdWVzdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vdGFza3F1ZXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Rhc2txdWVzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGFza3F1ZXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGFza3F1ZXN0Ly4vc3JjL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRMZWFkaW5nWmVyb3MobnVtYmVyLCB0YXJnZXRMZW5ndGgpIHtcbiAgdmFyIHNpZ24gPSBudW1iZXIgPCAwID8gJy0nIDogJyc7XG4gIHZhciBvdXRwdXQgPSBNYXRoLmFicyhudW1iZXIpLnRvU3RyaW5nKCk7XG4gIHdoaWxlIChvdXRwdXQubGVuZ3RoIDwgdGFyZ2V0TGVuZ3RoKSB7XG4gICAgb3V0cHV0ID0gJzAnICsgb3V0cHV0O1xuICB9XG4gIHJldHVybiBzaWduICsgb3V0cHV0O1xufSIsImltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi8uLi9sb2NhbGUvZW4tVVMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRMb2NhbGU7IiwidmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn0iLCJpbXBvcnQgZ2V0VVRDRGF5T2ZZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuaW1wb3J0IGxpZ2h0Rm9ybWF0dGVycyBmcm9tIFwiLi4vbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG52YXIgZGF5UGVyaW9kRW51bSA9IHtcbiAgYW06ICdhbScsXG4gIHBtOiAncG0nLFxuICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgbm9vbjogJ25vb24nLFxuICBtb3JuaW5nOiAnbW9ybmluZycsXG4gIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgbmlnaHQ6ICduaWdodCdcbn07XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCBNaWxsaXNlY29uZHMgaW4gZGF5ICAgICAgICAgICAgfFxuICogfCAgYiAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgfCAgQiAgfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgfFxuICogfCAgYyAgfCBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2VlayAgfCAgQyogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZSAgfCBMb2NhbCBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgfCAgRSAgfCBEYXkgb2Ygd2VlayAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgRiogfCBEYXkgb2Ygd2VlayBpbiBtb250aCAgICAgICAgICAgfFxuICogfCAgZyogfCBNb2RpZmllZCBKdWxpYW4gZGF5ICAgICAgICAgICAgfCAgRyAgfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaSEgfCBJU08gZGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgfCAgSSEgfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgfFxuICogfCAgaiogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfCAgSiogfCBMb2NhbGl6ZWQgaG91ciB3L28gZGF5IHBlcmlvZCAgfFxuICogfCAgayAgfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgfCAgSyAgfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbCogfCAoZGVwcmVjYXRlZCkgICAgICAgICAgICAgICAgICAgfCAgTCAgfCBTdGFuZC1hbG9uZSBtb250aCAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbyEgfCBPcmRpbmFsIG51bWJlciBtb2RpZmllciAgICAgICAgfCAgTyAgfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgfFxuICogfCAgcCEgfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgfCAgUCEgfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgfFxuICogfCAgcSAgfCBTdGFuZC1hbG9uZSBxdWFydGVyICAgICAgICAgICAgfCAgUSAgfCBRdWFydGVyICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgciogfCBSZWxhdGVkIEdyZWdvcmlhbiB5ZWFyICAgICAgICAgfCAgUiEgfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgdCEgfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgfCAgVCEgfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgfFxuICogfCAgdSAgfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgfCAgVSogfCBDeWNsaWMgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgdiogfCBUaW1lem9uZSAoZ2VuZXJpYyBub24tbG9jYXQuKSAgfCAgViogfCBUaW1lem9uZSAobG9jYXRpb24pICAgICAgICAgICAgfFxuICogfCAgdyAgfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgfCAgVyogfCBXZWVrIG9mIG1vbnRoICAgICAgICAgICAgICAgICAgfFxuICogfCAgeCAgfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgfCAgWCAgfCBUaW1lem9uZSAoSVNPLTg2MDEpICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgfFxuICogfCAgeiAgfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgfCAgWiogfCBUaW1lem9uZSAoYWxpYXNlcykgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAhIGFyZSBub24tc3RhbmRhcmQsIGJ1dCBpbXBsZW1lbnRlZCBieSBkYXRlLWZuczpcbiAqIC0gYG9gIG1vZGlmaWVzIHRoZSBwcmV2aW91cyB0b2tlbiB0byB0dXJuIGl0IGludG8gYW4gb3JkaW5hbCAoc2VlIGBmb3JtYXRgIGRvY3MpXG4gKiAtIGBpYCBpcyBJU08gZGF5IG9mIHdlZWsuIEZvciBgaWAgYW5kIGBpaWAgaXMgcmV0dXJucyBudW1lcmljIElTTyB3ZWVrIGRheXMsXG4gKiAgIGkuZS4gNyBmb3IgU3VuZGF5LCAxIGZvciBNb25kYXksIGV0Yy5cbiAqIC0gYElgIGlzIElTTyB3ZWVrIG9mIHllYXIsIGFzIG9wcG9zZWQgdG8gYHdgIHdoaWNoIGlzIGxvY2FsIHdlZWsgb2YgeWVhci5cbiAqIC0gYFJgIGlzIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLCBhcyBvcHBvc2VkIHRvIGBZYCB3aGljaCBpcyBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICogICBgUmAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGBJYCBhbmQgYGlgXG4gKiAgIGZvciB1bml2ZXJzYWwgSVNPIHdlZWstbnVtYmVyaW5nIGRhdGUsIHdoZXJlYXNcbiAqICAgYFlgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgd2AgYW5kIGBlYFxuICogICBmb3Igd2Vlay1udW1iZXJpbmcgZGF0ZSBzcGVjaWZpYyB0byB0aGUgbG9jYWxlLlxuICogLSBgUGAgaXMgbG9uZyBsb2NhbGl6ZWQgZGF0ZSBmb3JtYXRcbiAqIC0gYHBgIGlzIGxvbmcgbG9jYWxpemVkIHRpbWUgZm9ybWF0XG4gKi9cblxudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIEVyYVxuICBHOiBmdW5jdGlvbiBHKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBlcmEgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgPiAwID8gMSA6IDA7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gQUQsIEJDXG4gICAgICBjYXNlICdHJzpcbiAgICAgIGNhc2UgJ0dHJzpcbiAgICAgIGNhc2UgJ0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBBLCBCXG4gICAgICBjYXNlICdHR0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3RcbiAgICAgIGNhc2UgJ0dHR0cnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiB5KGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSAneW8nKSB7XG4gICAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoeWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnkoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFk6IGZ1bmN0aW9uIFkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHNpZ25lZFdlZWtZZWFyID0gZ2V0VVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucyk7XG4gICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICB2YXIgd2Vla1llYXIgPSBzaWduZWRXZWVrWWVhciA+IDAgPyBzaWduZWRXZWVrWWVhciA6IDEgLSBzaWduZWRXZWVrWWVhcjtcblxuICAgIC8vIFR3byBkaWdpdCB5ZWFyXG4gICAgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgICB2YXIgdHdvRGlnaXRZZWFyID0gd2Vla1llYXIgJSAxMDA7XG4gICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHR3b0RpZ2l0WWVhciwgMik7XG4gICAgfVxuXG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09ICdZbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWtZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUGFkZGluZ1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFI6IGZ1bmN0aW9uIFIoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgaXNvV2Vla1llYXIgPSBnZXRVVENJU09XZWVrWWVhcihkYXRlKTtcblxuICAgIC8vIFBhZGRpbmdcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBFeHRlbmRlZCB5ZWFyLiBUaGlzIGlzIGEgc2luZ2xlIG51bWJlciBkZXNpZ25hdGluZyB0aGUgeWVhciBvZiB0aGlzIGNhbGVuZGFyIHN5c3RlbS5cbiAgLy8gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIGxvY2FsaXplcnMgYXJlIEIuQy4geWVhcnM6XG4gIC8vIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gIC8vIHwtLS0tLS18LS0tLS18LS0tLS18XG4gIC8vIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gIC8vIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gIC8vIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gIC8vIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAgLy8gd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkLlxuICB1OiBmdW5jdGlvbiB1KGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBRdWFydGVyXG4gIFE6IGZ1bmN0aW9uIFEoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAnUSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuICAgICAgY2FzZSAnUVEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG4gICAgICBjYXNlICdRbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuICAgICAgY2FzZSAnUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuICAgICAgY2FzZSAnUVFRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG4gICAgICBjYXNlICdRUVFRJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIHF1YXJ0ZXJcbiAgcTogZnVuY3Rpb24gcShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdxJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG4gICAgICBjYXNlICdxcSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcbiAgICAgIGNhc2UgJ3FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG4gICAgICBjYXNlICdxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG4gICAgICBjYXNlICdxcXFxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cbiAgICAgIGNhc2UgJ3FxcXEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gTShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnTSc6XG4gICAgICBjYXNlICdNTSc6XG4gICAgICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuTShkYXRlLCB0b2tlbik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG4gICAgICBjYXNlICdNbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcbiAgICAgIGNhc2UgJ01NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuICAgICAgY2FzZSAnTU1NTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcbiAgICAgIGNhc2UgJ01NTU0nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBtb250aFxuICBMOiBmdW5jdGlvbiBMKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAuLi4sIDEyXG4gICAgICBjYXNlICdMJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhtb250aCArIDEpO1xuICAgICAgLy8gMDEsIDAyLCAuLi4sIDEyXG4gICAgICBjYXNlICdMTCc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcbiAgICAgIGNhc2UgJ0xvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuICAgICAgY2FzZSAnTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG4gICAgICBjYXNlICdMTExMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuICAgICAgY2FzZSAnTExMTCc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIHdlZWsgb2YgeWVhclxuICB3OiBmdW5jdGlvbiB3KGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciB3ZWVrID0gZ2V0VVRDV2VlayhkYXRlLCBvcHRpb25zKTtcbiAgICBpZiAodG9rZW4gPT09ICd3bycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2VlayBvZiB5ZWFyXG4gIEk6IGZ1bmN0aW9uIEkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGlzb1dlZWsgPSBnZXRVVENJU09XZWVrKGRhdGUpO1xuICAgIGlmICh0b2tlbiA9PT0gJ0lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvV2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gZChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdkbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDRGF0ZSgpLCB7XG4gICAgICAgIHVuaXQ6ICdkYXRlJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuZChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIERheSBvZiB5ZWFyXG4gIEQ6IGZ1bmN0aW9uIEQoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mWWVhciA9IGdldFVUQ0RheU9mWWVhcihkYXRlKTtcbiAgICBpZiAodG9rZW4gPT09ICdEbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRheU9mWWVhciwge1xuICAgICAgICB1bml0OiAnZGF5T2ZZZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF5T2ZZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2Ygd2Vla1xuICBFOiBmdW5jdGlvbiBFKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSAnRSc6XG4gICAgICBjYXNlICdFRSc6XG4gICAgICBjYXNlICdFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgJ0VFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgJ0VFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSAnRUVFRSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgZGF5IG9mIHdlZWtcbiAgZTogZnVuY3Rpb24gZShkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKE50aCBkYXkgb2Ygd2VlayB3aXRoIGN1cnJlbnQgbG9jYWxlIG9yIHdlZWtTdGFydHNPbilcbiAgICAgIGNhc2UgJ2UnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcbiAgICAgIGNhc2UgJ2VlJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcbiAgICAgIGNhc2UgJ2VvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ2VlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSAnZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSAnZWVlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlICdlZWVlJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2Vla1xuICBjOiBmdW5jdGlvbiBjKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoc2FtZSBhcyBpbiBgZWApXG4gICAgICBjYXNlICdjJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG4gICAgICBjYXNlICdjYyc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcbiAgICAgIGNhc2UgJ2NvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSAnY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSAnY2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlICdjY2NjJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBJU08gZGF5IG9mIHdlZWtcbiAgaTogZnVuY3Rpb24gaShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgaXNvRGF5T2ZXZWVrID0gZGF5T2ZXZWVrID09PSAwID8gNyA6IGRheU9mV2VlaztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAyXG4gICAgICBjYXNlICdpJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhpc29EYXlPZldlZWspO1xuICAgICAgLy8gMDJcbiAgICAgIGNhc2UgJ2lpJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29EYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAybmRcbiAgICAgIGNhc2UgJ2lvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgJ2lpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSAnaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSAnaWlpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlICdpaWlpJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiBhKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0sIFBNLCBtaWRuaWdodCwgbm9vblxuICBiOiBmdW5jdGlvbiBiKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgIGlmIChob3VycyA9PT0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID09PSAwKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1pZG5pZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcbiAgICB9XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYic6XG4gICAgICBjYXNlICdiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNhc2UgJ2JiYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnYmJiYic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gaW4gdGhlIG1vcm5pbmcsIGluIHRoZSBhZnRlcm5vb24sIGluIHRoZSBldmVuaW5nLCBhdCBuaWdodFxuICBCOiBmdW5jdGlvbiBCKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgIGlmIChob3VycyA+PSAxNykge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ldmVuaW5nO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uYWZ0ZXJub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gNCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5tb3JuaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5pZ2h0O1xuICAgIH1cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdCJzpcbiAgICAgIGNhc2UgJ0JCJzpcbiAgICAgIGNhc2UgJ0JCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnQkJCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdCQkJCJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiBoKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2hvJykge1xuICAgICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG4gICAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMTI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiBIKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ0hvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENIb3VycygpLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuSChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMTFdXG4gIEs6IGZ1bmN0aW9uIEsoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG4gICAgaWYgKHRva2VuID09PSAnS28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFsxLTI0XVxuICBrOiBmdW5jdGlvbiBrKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMjQ7XG4gICAgaWYgKHRva2VuID09PSAna28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gbShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdtbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDTWludXRlcygpLCB7XG4gICAgICAgIHVuaXQ6ICdtaW51dGUnXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5tKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIHMoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnc28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ1NlY29uZHMoKSwge1xuICAgICAgICB1bml0OiAnc2Vjb25kJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMucyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiBTKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5TKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGFsd2F5cyBgJ1onYClcbiAgWDogZnVuY3Rpb24gWChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIGlmICh0aW1lem9uZU9mZnNldCA9PT0gMCkge1xuICAgICAgcmV0dXJuICdaJztcbiAgICB9XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ1gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhgXG4gICAgICBjYXNlICdYWFhYJzpcbiAgICAgIGNhc2UgJ1hYJzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYWGBcbiAgICAgIGNhc2UgJ1hYWFhYJzpcbiAgICAgIGNhc2UgJ1hYWCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGAnKzAwOjAwJ2Agb3IgZXF1aXZhbGVudClcbiAgeDogZnVuY3Rpb24geChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICd4JzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4YFxuICAgICAgY2FzZSAneHh4eCc6XG4gICAgICBjYXNlICd4eCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eHhgXG4gICAgICBjYXNlICd4eHh4eCc6XG4gICAgICBjYXNlICd4eHgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChHTVQpXG4gIE86IGZ1bmN0aW9uIE8oZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAnTyc6XG4gICAgICBjYXNlICdPTyc6XG4gICAgICBjYXNlICdPT08nOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuICAgICAgY2FzZSAnT09PTyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXRpb24pXG4gIHo6IGZ1bmN0aW9uIHooZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAneic6XG4gICAgICBjYXNlICd6eic6XG4gICAgICBjYXNlICd6enonOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuICAgICAgY2FzZSAnenp6eic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFNlY29uZHMgdGltZXN0YW1wXG4gIHQ6IGZ1bmN0aW9uIHQoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gTWF0aC5mbG9vcihvcmlnaW5hbERhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAgVDogZnVuY3Rpb24gVChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBvcmlnaW5hbERhdGUuZ2V0VGltZSgpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVTaG9ydChvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApO1xuICB2YXIgbWludXRlcyA9IGFic09mZnNldCAlIDYwO1xuICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKTtcbiAgfVxuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKSArIGRlbGltaXRlciArIGFkZExlYWRpbmdaZXJvcyhtaW51dGVzLCAyKTtcbn1cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyhvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIGlmIChvZmZzZXQgJSA2MCA9PT0gMCkge1xuICAgIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgICByZXR1cm4gc2lnbiArIGFkZExlYWRpbmdaZXJvcyhNYXRoLmFicyhvZmZzZXQpIC8gNjAsIDIpO1xuICB9XG4gIHJldHVybiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKTtcbn1cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBhZGRMZWFkaW5nWmVyb3MoTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCksIDIpO1xuICB2YXIgbWludXRlcyA9IGFkZExlYWRpbmdaZXJvcyhhYnNPZmZzZXQgJSA2MCwgMik7XG4gIHJldHVybiBzaWduICsgaG91cnMgKyBkZWxpbWl0ZXIgKyBtaW51dGVzO1xufVxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJpbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICovXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiB5KGRhdGUsIHRva2VuKSB7XG4gICAgLy8gRnJvbSBodHRwOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LTMxL3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0Zvcm1hdF90b2tlbnNcbiAgICAvLyB8IFllYXIgICAgIHwgICAgIHkgfCB5eSB8ICAgeXl5IHwgIHl5eXkgfCB5eXl5eSB8XG4gICAgLy8gfC0tLS0tLS0tLS18LS0tLS0tLXwtLS0tfC0tLS0tLS18LS0tLS0tLXwtLS0tLS0tfFxuICAgIC8vIHwgQUQgMSAgICAgfCAgICAgMSB8IDAxIHwgICAwMDEgfCAgMDAwMSB8IDAwMDAxIHxcbiAgICAvLyB8IEFEIDEyICAgIHwgICAgMTIgfCAxMiB8ICAgMDEyIHwgIDAwMTIgfCAwMDAxMiB8XG4gICAgLy8gfCBBRCAxMjMgICB8ICAgMTIzIHwgMjMgfCAgIDEyMyB8ICAwMTIzIHwgMDAxMjMgfFxuICAgIC8vIHwgQUQgMTIzNCAgfCAgMTIzNCB8IDM0IHwgIDEyMzQgfCAgMTIzNCB8IDAxMjM0IHxcbiAgICAvLyB8IEFEIDEyMzQ1IHwgMTIzNDUgfCA0NSB8IDEyMzQ1IHwgMTIzNDUgfCAxMjM0NSB8XG5cbiAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0b2tlbiA9PT0gJ3l5JyA/IHllYXIgJSAxMDAgOiB5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiBNKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIHJldHVybiB0b2tlbiA9PT0gJ00nID8gU3RyaW5nKG1vbnRoICsgMSkgOiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiBkKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0RhdGUoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gYShkYXRlLCB0b2tlbikge1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXRlLmdldFVUQ0hvdXJzKCkgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUudG9VcHBlckNhc2UoKTtcbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWU7XG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWVbMF07XG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUgPT09ICdhbScgPyAnYS5tLicgOiAncC5tLic7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiBoKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMiB8fCAxMiwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gSChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gbShkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENNaW51dGVzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiBzKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ1NlY29uZHMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIFMoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbnVtYmVyT2ZEaWdpdHMgPSB0b2tlbi5sZW5ndGg7XG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCk7XG4gICAgdmFyIGZyYWN0aW9uYWxTZWNvbmRzID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgKiBNYXRoLnBvdygxMCwgbnVtYmVyT2ZEaWdpdHMgLSAzKSk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhmcmFjdGlvbmFsU2Vjb25kcywgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwidmFyIGRhdGVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG4gICAgY2FzZSAnUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59O1xudmFyIHRpbWVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gdGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG4gICAgY2FzZSAncHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG4gICAgY2FzZSAncHBwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcbiAgICBjYXNlICdwcHBwJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59O1xudmFyIGRhdGVUaW1lTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIGRhdGVUaW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHZhciBtYXRjaFJlc3VsdCA9IHBhdHRlcm4ubWF0Y2goLyhQKykocCspPy8pIHx8IFtdO1xuICB2YXIgZGF0ZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsxXTtcbiAgdmFyIHRpbWVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMl07XG4gIGlmICghdGltZVBhdHRlcm4pIHtcbiAgICByZXR1cm4gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZyk7XG4gIH1cbiAgdmFyIGRhdGVUaW1lRm9ybWF0O1xuICBzd2l0Y2ggKGRhdGVQYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIGRhdGVUaW1lRm9ybWF0LnJlcGxhY2UoJ3t7ZGF0ZX19JywgZGF0ZUxvbmdGb3JtYXR0ZXIoZGF0ZVBhdHRlcm4sIGZvcm1hdExvbmcpKS5yZXBsYWNlKCd7e3RpbWV9fScsIHRpbWVMb25nRm9ybWF0dGVyKHRpbWVQYXR0ZXJuLCBmb3JtYXRMb25nKSk7XG59O1xudmFyIGxvbmdGb3JtYXR0ZXJzID0ge1xuICBwOiB0aW1lTG9uZ0Zvcm1hdHRlcixcbiAgUDogZGF0ZVRpbWVMb25nRm9ybWF0dGVyXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9uZ0Zvcm1hdHRlcnM7IiwiLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgdmFyIHV0Y0RhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksIGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCksIGRhdGUuZ2V0U2Vjb25kcygpLCBkYXRlLmdldE1pbGxpc2Vjb25kcygpKSk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC0gdXRjRGF0ZS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fREFZID0gODY0MDAwMDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENEYXlPZlllYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIGRhdGUuc2V0VVRDTW9udGgoMCwgMSk7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mWWVhclRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgZGlmZmVyZW5jZSA9IHRpbWVzdGFtcCAtIHN0YXJ0T2ZZZWFyVGltZXN0YW1wO1xuICByZXR1cm4gTWF0aC5mbG9vcihkaWZmZXJlbmNlIC8gTUlMTElTRUNPTkRTX0lOX0RBWSkgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENJU09XZWVrKGRhdGUpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkYXRlKS5nZXRUaW1lKCk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhcik7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyKTtcbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENXZWVrKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8uZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAxKTtcblxuICAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cbiAgdmFyIGZpcnN0V2Vla09mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mTmV4dFllYXIsIG9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrT2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZlRoaXNZZWFyLCBvcHRpb25zKTtcbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsInZhciBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMgPSBbJ0QnLCAnREQnXTtcbnZhciBwcm90ZWN0ZWRXZWVrWWVhclRva2VucyA9IFsnWVknLCAnWVlZWSddO1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZERheU9mWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWRXZWVrWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gdGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0LCBpbnB1dCkge1xuICBpZiAodG9rZW4gPT09ICdZWVlZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdEJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdERCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gMTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHllYXIgPSBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5ID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTtcblxuICAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDEpO1xuICB2YXIgeWVhciA9IGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWsgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWssIG9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZE1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCA3NTAgbWlsbGlzZWNvbmRzIHRvIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBhZGRNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NTozMC43NTBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciB0aW1lc3RhbXAgPSB0b0RhdGUoZGlydHlEYXRlKS5nZXRUaW1lKCk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgYW1vdW50KTtcbn0iLCJpbXBvcnQgaXNWYWxpZCBmcm9tIFwiLi4vaXNWYWxpZC9pbmRleC5qc1wiO1xuaW1wb3J0IHN1Yk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9uZ0Zvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuLCBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4sIHRocm93UHJvdGVjdGVkRXJyb3IgfSBmcm9tIFwiLi4vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uL19saWIvZGVmYXVsdExvY2FsZS9pbmRleC5qc1wiOyAvLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcbnZhciBmb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1t5WVFxTUx3SWREZWNpaEhLa21zXW98KFxcdylcXDEqfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xuXG4vLyBUaGlzIFJlZ0V4cCBjYXRjaGVzIHN5bWJvbHMgZXNjYXBlZCBieSBxdW90ZXMsIGFuZCBhbHNvXG4vLyBzZXF1ZW5jZXMgb2Ygc3ltYm9scyBQLCBwLCBhbmQgdGhlIGNvbWJpbmF0aW9ucyBsaWtlIGBQUFBQUFBQcHBwcHBgXG52YXIgbG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvUCtwK3xQK3xwK3wnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcbnZhciBlc2NhcGVkU3RyaW5nUmVnRXhwID0gL14nKFteXSo/KSc/JC87XG52YXIgZG91YmxlUXVvdGVSZWdFeHAgPSAvJycvZztcbnZhciB1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCA9IC9bYS16QS1aXS87XG5cbi8qKlxuICogQG5hbWUgZm9ybWF0XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEZvcm1hdCB0aGUgZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIHRoZSBnaXZlbiBmb3JtYXQuIFRoZSByZXN1bHQgbWF5IHZhcnkgYnkgbG9jYWxlLlxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhlIGBmb3JtYXRgIHRva2VucyBkaWZmZXIgZnJvbSBNb21lbnQuanMgYW5kIG90aGVyIGxpYnJhcmllcy5cbiAqID4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogVGhlIGNoYXJhY3RlcnMgd3JhcHBlZCBiZXR3ZWVuIHR3byBzaW5nbGUgcXVvdGVzIGNoYXJhY3RlcnMgKCcpIGFyZSBlc2NhcGVkLlxuICogVHdvIHNpbmdsZSBxdW90ZXMgaW4gYSByb3csIHdoZXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgYSBxdW90ZWQgc2VxdWVuY2UsIHJlcHJlc2VudCBhICdyZWFsJyBzaW5nbGUgcXVvdGUuXG4gKiAoc2VlIHRoZSBsYXN0IGV4YW1wbGUpXG4gKlxuICogRm9ybWF0IG9mIHRoZSBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDcgYmVsb3cgdGhlIHRhYmxlKS5cbiAqXG4gKiBBY2NlcHRlZCBwYXR0ZXJuczpcbiAqIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBhdHRlcm4gfCBSZXN1bHQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICAgfCBOb3RlcyB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tfFxuICogfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRy4uR0dHICB8IEFELCBCQyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0cgICAgfCBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHRyAgIHwgQSwgQiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDYWxlbmRhciB5ZWFyICAgICAgICAgICAgICAgICAgIHwgeSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHlvICAgICAgfCA0NHRoLCAxc3QsIDB0aCwgMTd0aCAgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5ICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5eSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgIHwgWSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlvICAgICAgfCA0NHRoLCAxc3QsIDE5MDB0aCwgMjAxN3RoICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZWSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgIHwgUiAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSICAgICAgfCAtNDMsIDAwLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlIgICAgIHwgLTA0MywgMDAwLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUiAgICB8IC0wMDQzLCAwMDAwLCAwMDAxLCAxOTAwLCAyMDE3ICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlJSICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUsNyB8XG4gKiB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICAgfCB1ICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXUgICAgICB8IC00MywgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dSAgICAgfCAtMDQzLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1ICAgIHwgLTAwNDMsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dXUgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgUXVhcnRlciAoZm9ybWF0dGluZykgICAgICAgICAgICB8IFEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUVEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgUXVhcnRlciAoc3RhbmQtYWxvbmUpICAgICAgICAgICB8IHEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcXEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgTW9udGggKGZvcm1hdHRpbmcpICAgICAgICAgICAgICB8IE0gICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU0gICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTSAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTU0gICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTW9udGggKHN0YW5kLWFsb25lKSAgICAgICAgICAgICB8IEwgICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTEwgICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTCAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTEwgICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgICB8IHcgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3byAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd3cgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgICB8IEkgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSUkgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgICB8IGQgICAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzFzdCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgICB8IDAxLCAwMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgICB8IEQgICAgICAgfCAxLCAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzY1dGgsIDM2NnRoICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREQgICAgICB8IDAxLCAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERERCAgICAgfCAwMDEsIDAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREREICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBEYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgICAgIHwgRS4uRUVFICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUVFICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICB8IGkgICAgICAgfCAxLCAyLCAzLCAuLi4sIDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgN3RoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWkgICAgICB8IDAxLCAwMiwgLi4uLCAwNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWkgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpaSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCA3ICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgfCBlICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZW8gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWUgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZWUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoc3RhbmQtYWxvbmUpIHwgYyAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjYyAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2MgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjYyAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2NjICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICB8IGEuLmFhICAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWEgICAgIHwgYW0sIHBtICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYSAgICB8IGEubS4sIHAubS4gICAgICAgICAgICAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWFhICAgfCBhLCBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgfCBiLi5iYiAgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiICAgICB8IGFtLCBwbSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmIgICAgfCBhLm0uLCBwLm0uLCBub29uLCBtaWRuaWdodCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiYiAgIHwgYSwgcCwgbiwgbWkgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgIHwgQi4uQkJCICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkIgICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCQiAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgIHwgaCAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAxMnRoICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBoaCAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgIHwgSCAgICAgICB8IDAsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhvICAgICAgfCAwdGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBISCAgICAgIHwgMDAsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgIHwgSyAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAwdGggICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLSyAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgIHwgayAgICAgICB8IDI0LCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtvICAgICAgfCAyNHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrayAgICAgIHwgMjQsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1vICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcyAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNvICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzcyAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgIHwgUyAgICAgICB8IDAsIDEsIC4uLiwgOSAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTICAgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1MgICAgIHwgMDAwLCAwMDEsIC4uLiwgOTk5ICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTUyAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvIFopICAgICAgICB8IFggICAgICAgfCAtMDgsICswNTMwLCBaICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWCAgICAgIHwgLTA4MDAsICswNTMwLCBaICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYICAgICB8IC0wODowMCwgKzA1OjMwLCBaICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFggICAgfCAtMDgwMCwgKzA1MzAsIFosICsxMjM0NTYgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYWCAgIHwgLTA4OjAwLCArMDU6MzAsIFosICsxMjozNDo1NiAgICAgIHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgIHwgeCAgICAgICB8IC0wOCwgKzA1MzAsICswMCAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4ICAgICAgfCAtMDgwMCwgKzA1MzAsICswMDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHggICAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eCAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAsICsxMjM0NTYgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHh4ICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwLCArMTI6MzQ6NTYgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICAgfCBPLi4uT09PIHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgT09PTyAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIgICAgIHxcbiAqIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pICB8IHouLi56enogfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCA2ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB6enp6ICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiw2ICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgIHwgdCAgICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHR0ICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgfCBUICAgICAgIHwgNTEyOTY5NTIwOTAwICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVFQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgICB8IFAgICAgICAgfCAwNC8yOS8xNDUzICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUCAgICAgIHwgQXByIDI5LCAxNDUzICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQICAgICB8IEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFAgICAgfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICAgfCBwICAgICAgIHwgMTI6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHAgICAgICB8IDEyOjAwOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcCAgICAgfCAxMjowMDowMCBBTSBHTVQrMiAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHBwICAgIHwgMTI6MDA6MDAgQU0gR01UKzAyOjAwICAgICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBDb21iaW5hdGlvbiBvZiBkYXRlIGFuZCB0aW1lICAgIHwgUHAgICAgICB8IDA0LzI5LzE0NTMsIDEyOjAwIEFNICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQcHAgICAgfCBBcHIgMjksIDE0NTMsIDEyOjAwOjAwIEFNICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBwcHAgIHwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUHBwcHB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICB8IDIsNyAgIHxcbiAqIE5vdGVzOlxuICogMS4gXCJGb3JtYXR0aW5nXCIgdW5pdHMgKGUuZy4gZm9ybWF0dGluZyBxdWFydGVyKSBpbiB0aGUgZGVmYXVsdCBlbi1VUyBsb2NhbGVcbiAqICAgIGFyZSB0aGUgc2FtZSBhcyBcInN0YW5kLWFsb25lXCIgdW5pdHMsIGJ1dCBhcmUgZGlmZmVyZW50IGluIHNvbWUgbGFuZ3VhZ2VzLlxuICogICAgXCJGb3JtYXR0aW5nXCIgdW5pdHMgYXJlIGRlY2xpbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgdGhlIGxhbmd1YWdlXG4gKiAgICBpbiB0aGUgY29udGV4dCBvZiBhIGRhdGUuIFwiU3RhbmQtYWxvbmVcIiB1bml0cyBhcmUgYWx3YXlzIG5vbWluYXRpdmUgc2luZ3VsYXI6XG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBMTExMJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZCdgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBNTU1NJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZHUnYFxuICpcbiAqIDIuIEFueSBzZXF1ZW5jZSBvZiB0aGUgaWRlbnRpY2FsIGxldHRlcnMgaXMgYSBwYXR0ZXJuLCB1bmxlc3MgaXQgaXMgZXNjYXBlZCBieVxuICogICAgdGhlIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIChzZWUgYmVsb3cpLlxuICogICAgSWYgdGhlIHNlcXVlbmNlIGlzIGxvbmdlciB0aGFuIGxpc3RlZCBpbiB0YWJsZSAoZS5nLiBgRUVFRUVFRUVFRUVgKVxuICogICAgdGhlIG91dHB1dCB3aWxsIGJlIHRoZSBzYW1lIGFzIGRlZmF1bHQgcGF0dGVybiBmb3IgdGhpcyB1bml0LCB1c3VhbGx5XG4gKiAgICB0aGUgbG9uZ2VzdCBvbmUgKGluIGNhc2Ugb2YgSVNPIHdlZWtkYXlzLCBgRUVFRWApLiBEZWZhdWx0IHBhdHRlcm5zIGZvciB1bml0c1xuICogICAgYXJlIG1hcmtlZCB3aXRoIFwiMlwiIGluIHRoZSBsYXN0IGNvbHVtbiBvZiB0aGUgdGFibGUuXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU0nKSAvLz0+ICdOb3YnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NJykgLy89PiAnTidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqIDMuIFNvbWUgcGF0dGVybnMgY291bGQgYmUgdW5saW1pdGVkIGxlbmd0aCAoc3VjaCBhcyBgeXl5eXl5eXlgKS5cbiAqICAgIFRoZSBvdXRwdXQgd2lsbCBiZSBwYWRkZWQgd2l0aCB6ZXJvcyB0byBtYXRjaCB0aGUgbGVuZ3RoIG9mIHRoZSBwYXR0ZXJuLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAneXl5eXl5eXknKSAvLz0+ICcwMDAwMjAxNydgXG4gKlxuICogNC4gYFFRUVFRYCBhbmQgYHFxcXFxYCBjb3VsZCBiZSBub3Qgc3RyaWN0bHkgbnVtZXJpY2FsIGluIHNvbWUgbG9jYWxlcy5cbiAqICAgIFRoZXNlIHRva2VucyByZXByZXNlbnQgdGhlIHNob3J0ZXN0IGZvcm0gb2YgdGhlIHF1YXJ0ZXIuXG4gKlxuICogNS4gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIHBhdHRlcm5zIGFyZSBCLkMuIHllYXJzOlxuICpcbiAqICAgIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICogICAgfCBBQyAxIHwgICAxIHwgICAxIHxcbiAqICAgIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gKiAgICB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICpcbiAqICAgIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAqICAgIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZDpcbiAqXG4gKiAgICB8IFllYXIgfCBgeXlgIHwgYHV1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tLXwtLS0tLS18XG4gKiAgICB8IDEgICAgfCAgIDAxIHwgICAwMSB8XG4gKiAgICB8IDE0ICAgfCAgIDE0IHwgICAxNCB8XG4gKiAgICB8IDM3NiAgfCAgIDc2IHwgIDM3NiB8XG4gKiAgICB8IDE0NTMgfCAgIDUzIHwgMTQ1MyB8XG4gKlxuICogICAgVGhlIHNhbWUgZGlmZmVyZW5jZSBpcyB0cnVlIGZvciBsb2NhbCBhbmQgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIChgWWAgYW5kIGBSYCksXG4gKiAgICBleGNlcHQgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhcnMgYXJlIGRlcGVuZGVudCBvbiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gXG4gKiAgICBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAoY29tcGFyZSBbZ2V0SVNPV2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0SVNPV2Vla1llYXJ9XG4gKiAgICBhbmQgW2dldFdlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldFdlZWtZZWFyfSkuXG4gKlxuICogNi4gU3BlY2lmaWMgbm9uLWxvY2F0aW9uIHRpbWV6b25lcyBhcmUgY3VycmVudGx5IHVuYXZhaWxhYmxlIGluIGBkYXRlLWZuc2AsXG4gKiAgICBzbyByaWdodCBub3cgdGhlc2UgdG9rZW5zIGZhbGwgYmFjayB0byBHTVQgdGltZXpvbmVzLlxuICpcbiAqIDcuIFRoZXNlIHBhdHRlcm5zIGFyZSBub3QgaW4gdGhlIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqICAgIC0gYGlgOiBJU08gZGF5IG9mIHdlZWtcbiAqICAgIC0gYElgOiBJU08gd2VlayBvZiB5ZWFyXG4gKiAgICAtIGBSYDogSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqICAgIC0gYHRgOiBzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgVGA6IG1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYG9gOiBvcmRpbmFsIG51bWJlciBtb2RpZmllclxuICogICAgLSBgUGA6IGxvbmcgbG9jYWxpemVkIGRhdGVcbiAqICAgIC0gYHBgOiBsb25nIGxvY2FsaXplZCB0aW1lXG4gKlxuICogOC4gYFlZYCBhbmQgYFlZWVlgIHRva2VucyByZXByZXNlbnQgd2Vlay1udW1iZXJpbmcgeWVhcnMgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggeWVhcnMuXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiA5LiBgRGAgYW5kIGBERGAgdG9rZW5zIHJlcHJlc2VudCBkYXlzIG9mIHRoZSB5ZWFyIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIGRheXMgb2YgdGhlIG1vbnRoLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGZvcm1hdCAtIHRoZSBzdHJpbmcgb2YgdG9rZW5zXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU9MV0gLSB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIgdG9rZW5zIGBZWWAgYW5kIGBZWVlZYDtcbiAqICAgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSBkYXkgb2YgeWVhciB0b2tlbnMgYERgIGFuZCBgRERgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmdcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBsb2NhbGl6ZWAgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXRMb25nYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCBtdXN0IGJlIGJldHdlZW4gMSBhbmQgN1xuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gZm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxMSBGZWJydWFyeSAyMDE0IGluIG1pZGRsZS1lbmRpYW4gZm9ybWF0OlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDEsIDExKSwgJ01NL2RkL3l5eXknKVxuICogLy89PiAnMDIvMTEvMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDIgSnVseSAyMDE0IGluIEVzcGVyYW50bzpcbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBcImRvICdkZScgTU1NTSB5eXl5XCIsIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJzItYSBkZSBqdWxpbyAyMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBFc2NhcGUgc3RyaW5nIGJ5IHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzOlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIsIDE1KSwgXCJoICdvJydjbG9jaydcIilcbiAqIC8vPT4gXCIzIG8nY2xvY2tcIlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdChkaXJ0eURhdGUsIGRpcnR5Rm9ybWF0U3RyLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfb3B0aW9ucyRsb2NhbGUsIF9yZWYyLCBfcmVmMywgX3JlZjQsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlMiwgX29wdGlvbnMkbG9jYWxlMiRvcHRpLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIsIF9yZWY1LCBfcmVmNiwgX3JlZjcsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlMywgX29wdGlvbnMkbG9jYWxlMyRvcHRpLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0O1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGZvcm1hdFN0ciA9IFN0cmluZyhkaXJ0eUZvcm1hdFN0cik7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBsb2NhbGUgPSAoX3JlZiA9IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRsb2NhbGUgIT09IHZvaWQgMCA/IF9vcHRpb25zJGxvY2FsZSA6IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IGRlZmF1bHRMb2NhbGU7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYyID0gKF9yZWYzID0gKF9yZWY0ID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMiA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUyID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMiRvcHRpID0gX29wdGlvbnMkbG9jYWxlMi5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUyJG9wdGkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZTIkb3B0aS5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWY0ICE9PSB2b2lkIDAgPyBfcmVmNCA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogMSk7XG5cbiAgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWY1ID0gKF9yZWY2ID0gKF9yZWY3ID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMyA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUzID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMyRvcHRpID0gX29wdGlvbnMkbG9jYWxlMy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUzJG9wdGkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZTMkb3B0aS53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY3ICE9PSB2b2lkIDAgPyBfcmVmNyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjYgIT09IHZvaWQgMCA/IF9yZWY2IDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWw0ID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsMy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0LndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjUgIT09IHZvaWQgMCA/IF9yZWY1IDogMCk7XG5cbiAgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG4gIGlmICghbG9jYWxlLmxvY2FsaXplKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gbG9jYWxpemUgcHJvcGVydHknKTtcbiAgfVxuICBpZiAoIWxvY2FsZS5mb3JtYXRMb25nKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gZm9ybWF0TG9uZyBwcm9wZXJ0eScpO1xuICB9XG4gIHZhciBvcmlnaW5hbERhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgaWYgKCFpc1ZhbGlkKG9yaWdpbmFsRGF0ZSkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0aW1lIHZhbHVlJyk7XG4gIH1cblxuICAvLyBDb252ZXJ0IHRoZSBkYXRlIGluIHN5c3RlbSB0aW1lem9uZSB0byB0aGUgc2FtZSBkYXRlIGluIFVUQyswMDowMCB0aW1lem9uZS5cbiAgLy8gVGhpcyBlbnN1cmVzIHRoYXQgd2hlbiBVVEMgZnVuY3Rpb25zIHdpbGwgYmUgaW1wbGVtZW50ZWQsIGxvY2FsZXMgd2lsbCBiZSBjb21wYXRpYmxlIHdpdGggdGhlbS5cbiAgLy8gU2VlIGFuIGlzc3VlIGFib3V0IFVUQyBmdW5jdGlvbnM6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG4gIHZhciB0aW1lem9uZU9mZnNldCA9IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlKTtcbiAgdmFyIHV0Y0RhdGUgPSBzdWJNaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlLCB0aW1lem9uZU9mZnNldCk7XG4gIHZhciBmb3JtYXR0ZXJPcHRpb25zID0ge1xuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogZmlyc3RXZWVrQ29udGFpbnNEYXRlLFxuICAgIHdlZWtTdGFydHNPbjogd2Vla1N0YXJ0c09uLFxuICAgIGxvY2FsZTogbG9jYWxlLFxuICAgIF9vcmlnaW5hbERhdGU6IG9yaWdpbmFsRGF0ZVxuICB9O1xuICB2YXIgcmVzdWx0ID0gZm9ybWF0U3RyLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09ICdwJyB8fCBmaXJzdENoYXJhY3RlciA9PT0gJ1AnKSB7XG4gICAgICB2YXIgbG9uZ0Zvcm1hdHRlciA9IGxvbmdGb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICAgIHJldHVybiBsb25nRm9ybWF0dGVyKHN1YnN0cmluZywgbG9jYWxlLmZvcm1hdExvbmcpO1xuICAgIH1cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKS5tYXRjaChmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIC8vIFJlcGxhY2UgdHdvIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIHdpdGggb25lIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJcbiAgICBpZiAoc3Vic3RyaW5nID09PSBcIicnXCIpIHtcbiAgICAgIHJldHVybiBcIidcIjtcbiAgICB9XG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gXCInXCIpIHtcbiAgICAgIHJldHVybiBjbGVhbkVzY2FwZWRTdHJpbmcoc3Vic3RyaW5nKTtcbiAgICB9XG4gICAgdmFyIGZvcm1hdHRlciA9IGZvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgIGlmIChmb3JtYXR0ZXIpIHtcbiAgICAgIGlmICghKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zKSAmJiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIFN0cmluZyhkaXJ0eURhdGUpKTtcbiAgICAgIH1cbiAgICAgIGlmICghKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucykgJiYgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgU3RyaW5nKGRpcnR5RGF0ZSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZvcm1hdHRlcih1dGNEYXRlLCBzdWJzdHJpbmcsIGxvY2FsZS5sb2NhbGl6ZSwgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfVxuICAgIGlmIChmaXJzdENoYXJhY3Rlci5tYXRjaCh1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCkpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdGb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXIgYCcgKyBmaXJzdENoYXJhY3RlciArICdgJyk7XG4gICAgfVxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gY2xlYW5Fc2NhcGVkU3RyaW5nKGlucHV0KSB7XG4gIHZhciBtYXRjaGVkID0gaW5wdXQubWF0Y2goZXNjYXBlZFN0cmluZ1JlZ0V4cCk7XG4gIGlmICghbWF0Y2hlZCkge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuICByZXR1cm4gbWF0Y2hlZFsxXS5yZXBsYWNlKGRvdWJsZVF1b3RlUmVnRXhwLCBcIidcIik7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNEYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiB2YWx1ZSBhIGRhdGU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIERhdGUuIFRoZSBmdW5jdGlvbiB3b3JrcyBmb3IgZGF0ZXMgdHJhbnNmZXJyZWQgYWNyb3NzIGlmcmFtZXMuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIHRoZSB2YWx1ZSB0byBjaGVja1xuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZShOYU4pKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBzb21lIHZhbHVlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKCcyMDE0LTAyLTMxJylcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIG9iamVjdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSh7fSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNEYXRlKHZhbHVlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBEYXRlXSc7XG59IiwiaW1wb3J0IGlzRGF0ZSBmcm9tIFwiLi4vaXNEYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVmFsaWRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdmFsaWQ/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGZhbHNlIGlmIGFyZ3VtZW50IGlzIEludmFsaWQgRGF0ZSBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gKiBBcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gRGF0ZSB1c2luZyBgdG9EYXRlYC4gU2VlIFt0b0RhdGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlfVxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogQHBhcmFtIHsqfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB2YWxpZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoMjAxNCwgMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsdWUsIGNvbnZlcnRhYmxlIGludG8gYSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZCgxMzkzODA0ODAwMDAwKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgnJykpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVmFsaWQoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICBpZiAoIWlzRGF0ZShkaXJ0eURhdGUpICYmIHR5cGVvZiBkaXJ0eURhdGUgIT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHJldHVybiAhaXNOYU4oTnVtYmVyKGRhdGUpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIC8vIFRPRE86IFJlbW92ZSBTdHJpbmcoKVxuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICB2YXIgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eUluZGV4LCBvcHRpb25zKSB7XG4gICAgdmFyIGNvbnRleHQgPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmNvbnRleHQgPyBTdHJpbmcob3B0aW9ucy5jb250ZXh0KSA6ICdzdGFuZGFsb25lJztcbiAgICB2YXIgdmFsdWVzQXJyYXk7XG4gICAgaWYgKGNvbnRleHQgPT09ICdmb3JtYXR0aW5nJyAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIHZhciBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgd2lkdGggPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2RlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIF93aWR0aCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy52YWx1ZXNbX3dpZHRoXSB8fCBhcmdzLnZhbHVlc1tfZGVmYXVsdFdpZHRoXTtcbiAgICB9XG4gICAgdmFyIGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKGRpcnR5SW5kZXgpIDogZGlydHlJbmRleDtcbiAgICAvLyBAdHMtaWdub3JlOiBGb3Igc29tZSByZWFzb24gVHlwZVNjcmlwdCBqdXN0IGRvbid0IHdhbnQgdG8gbWF0Y2ggaXQsIG5vIG1hdHRlciBob3cgaGFyZCB3ZSB0cnkuIEkgY2hhbGxlbmdlIHlvdSB0byB0cnkgdG8gcmVtb3ZlIGl0IVxuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF07XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICB2YXIgbWF0Y2hQYXR0ZXJuID0gd2lkdGggJiYgYXJncy5tYXRjaFBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKG1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUGF0dGVybnMgPSB3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MucGFyc2VQYXR0ZXJuc1thcmdzLmRlZmF1bHRQYXJzZVdpZHRoXTtcbiAgICB2YXIga2V5ID0gQXJyYXkuaXNBcnJheShwYXJzZVBhdHRlcm5zKSA/IGZpbmRJbmRleChwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KSA6IGZpbmRLZXkocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSk7XG4gICAgdmFyIHZhbHVlO1xuICAgIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKGtleSkgOiBrZXk7XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcmVkaWNhdGUob2JqZWN0W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhwYXJzZVJlc3VsdFswXSkgOiBwYXJzZVJlc3VsdFswXTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufSIsInZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIHNlY29uZCcsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSBzZWNvbmQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnaGFsZiBhIG1pbnV0ZScsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBtaW51dGUnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbWludXRlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgaG91cicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgaG91cicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSBkYXknLFxuICAgIG90aGVyOiAne3tjb3VudH19IGRheXMnXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB3ZWVrJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSB3ZWVrJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBtb250aCcsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnMSBtb250aCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEgeWVhcicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICdvdmVyIDEgeWVhcicsXG4gICAgb3RoZXI6ICdvdmVyIHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnYWxtb3N0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhbG1vc3Qge3tjb3VudH19IHllYXJzJ1xuICB9XG59O1xudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgY291bnQudG9TdHJpbmcoKSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnIGFnbyc7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0RGlzdGFuY2U7IiwiaW1wb3J0IGJ1aWxkRm9ybWF0TG9uZ0ZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzXCI7XG52YXIgZGF0ZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdFRUVFLCBNTU1NIGRvLCB5JyxcbiAgbG9uZzogJ01NTU0gZG8sIHknLFxuICBtZWRpdW06ICdNTU0gZCwgeScsXG4gIHNob3J0OiAnTU0vZGQveXl5eSdcbn07XG52YXIgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdoOm1tOnNzIGEgenp6eicsXG4gIGxvbmc6ICdoOm1tOnNzIGEgeicsXG4gIG1lZGl1bTogJ2g6bW06c3MgYScsXG4gIHNob3J0OiAnaDptbSBhJ1xufTtcbnZhciBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbWVkaXVtOiAne3tkYXRlfX0sIHt7dGltZX19JyxcbiAgc2hvcnQ6ICd7e2RhdGV9fSwge3t0aW1lfX0nXG59O1xudmFyIGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgdGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IHRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdExvbmc7IiwidmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogXCInbGFzdCcgZWVlZSAnYXQnIHBcIixcbiAgeWVzdGVyZGF5OiBcIid5ZXN0ZXJkYXkgYXQnIHBcIixcbiAgdG9kYXk6IFwiJ3RvZGF5IGF0JyBwXCIsXG4gIHRvbW9ycm93OiBcIid0b21vcnJvdyBhdCcgcFwiLFxuICBuZXh0V2VlazogXCJlZWVlICdhdCcgcFwiLFxuICBvdGhlcjogJ1AnXG59O1xudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmUodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSB7XG4gIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0UmVsYXRpdmU7IiwiaW1wb3J0IGJ1aWxkTG9jYWxpemVGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIjtcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydCJywgJ0EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnQkMnLCAnQUQnXSxcbiAgd2lkZTogWydCZWZvcmUgQ2hyaXN0JywgJ0Fubm8gRG9taW5pJ11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnUTEnLCAnUTInLCAnUTMnLCAnUTQnXSxcbiAgd2lkZTogWycxc3QgcXVhcnRlcicsICcybmQgcXVhcnRlcicsICczcmQgcXVhcnRlcicsICc0dGggcXVhcnRlciddXG59O1xuXG4vLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbi8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4vLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICBhYmJyZXZpYXRlZDogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICB3aWRlOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ10sXG4gIHNob3J0OiBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ10sXG4gIGFiYnJldmlhdGVkOiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICB3aWRlOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9XG59O1xudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIHZhciByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG4gIGlmIChyZW0xMDAgPiAyMCB8fCByZW0xMDAgPCAxMCkge1xuICAgIHN3aXRjaCAocmVtMTAwICUgMTApIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdzdCc7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnbmQnO1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3JkJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bWJlciArICd0aCc7XG59O1xudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIGFyZ3VtZW50Q2FsbGJhY2socXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxpemU7IiwiaW1wb3J0IGJ1aWxkTWF0Y2hGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIjtcbmltcG9ydCBidWlsZE1hdGNoUGF0dGVybkZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIjtcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eai9pLCAvXmYvaSwgL15tL2ksIC9eYS9pLCAvXm0vaSwgL15qL2ksIC9eai9pLCAvXmEvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldLFxuICBhbnk6IFsvXmphL2ksIC9eZi9pLCAvXm1hci9pLCAvXmFwL2ksIC9ebWF5L2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYXUvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaVxuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2sodmFsdWUpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH1cbiAgfSksXG4gIGVyYTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueScsXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayhpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXk6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ2FueScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBtYXRjaDsiLCJpbXBvcnQgZm9ybWF0RGlzdGFuY2UgZnJvbSBcIi4vX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdExvbmcgZnJvbSBcIi4vX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0UmVsYXRpdmUgZnJvbSBcIi4vX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGxvY2FsaXplIGZyb20gXCIuL19saWIvbG9jYWxpemUvaW5kZXguanNcIjtcbmltcG9ydCBtYXRjaCBmcm9tIFwiLi9fbGliL21hdGNoL2luZGV4LmpzXCI7XG4vKipcbiAqIEB0eXBlIHtMb2NhbGV9XG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycH1cbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc117QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zc31cbiAqL1xudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ2VuLVVTJyxcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwIC8qIFN1bmRheSAqLyxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDFcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTsiLCJpbXBvcnQgYWRkTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9hZGRNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdWJNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgc3VidHJhY3RlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgc3VidHJhY3RlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdWJ0cmFjdCA3NTAgbWlsbGlzZWNvbmRzIGZyb20gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN1Yk1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjI5LjI1MFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWJNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCAtYW1vdW50KTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCIvKiFcbiAqIEludHJvLmpzIHY3LjIuMFxuICogaHR0cHM6Ly9pbnRyb2pzLmNvbVxuICpcbiAqIENvcHlyaWdodCAoQykgMjAxMi0yMDIzIEFmc2hpbiBNZWhyYWJhbmkgKEBhZnNoaW5tZWgpLlxuICogaHR0cHM6Ly9pbnRyb2pzLmNvbVxuICpcbiAqIERhdGU6IE1vbiwgMTQgQXVnIDIwMjMgMTk6NDc6MTQgR01UXG4gKi9cbmZ1bmN0aW9uIHQoZSl7cmV0dXJuIHQ9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKHQpe3JldHVybiB0eXBlb2YgdH06ZnVuY3Rpb24odCl7cmV0dXJuIHQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmdC5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmdCE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgdH0sdChlKX1mdW5jdGlvbiBlKHQsZSxuLG8pe3JldHVybiBuZXcobnx8KG49UHJvbWlzZSkpKChmdW5jdGlvbihpLHIpe2Z1bmN0aW9uIHModCl7dHJ5e2woby5uZXh0KHQpKX1jYXRjaCh0KXtyKHQpfX1mdW5jdGlvbiBhKHQpe3RyeXtsKG8udGhyb3codCkpfWNhdGNoKHQpe3IodCl9fWZ1bmN0aW9uIGwodCl7dmFyIGU7dC5kb25lP2kodC52YWx1ZSk6KGU9dC52YWx1ZSxlIGluc3RhbmNlb2Ygbj9lOm5ldyBuKChmdW5jdGlvbih0KXt0KGUpfSkpKS50aGVuKHMsYSl9bCgobz1vLmFwcGx5KHQsZXx8W10pKS5uZXh0KCkpfSkpfWZ1bmN0aW9uIG4odCxlKXt2YXIgbixvLGkscixzPXtsYWJlbDowLHNlbnQ6ZnVuY3Rpb24oKXtpZigxJmlbMF0pdGhyb3cgaVsxXTtyZXR1cm4gaVsxXX0sdHJ5czpbXSxvcHM6W119O3JldHVybiByPXtuZXh0OmEoMCksdGhyb3c6YSgxKSxyZXR1cm46YSgyKX0sXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiYocltTeW1ib2wuaXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KSxyO2Z1bmN0aW9uIGEoYSl7cmV0dXJuIGZ1bmN0aW9uKGwpe3JldHVybiBmdW5jdGlvbihhKXtpZihuKXRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO2Zvcig7ciYmKHI9MCxhWzBdJiYocz0wKSksczspdHJ5e2lmKG49MSxvJiYoaT0yJmFbMF0/by5yZXR1cm46YVswXT9vLnRocm93fHwoKGk9by5yZXR1cm4pJiZpLmNhbGwobyksMCk6by5uZXh0KSYmIShpPWkuY2FsbChvLGFbMV0pKS5kb25lKXJldHVybiBpO3N3aXRjaChvPTAsaSYmKGE9WzImYVswXSxpLnZhbHVlXSksYVswXSl7Y2FzZSAwOmNhc2UgMTppPWE7YnJlYWs7Y2FzZSA0OnJldHVybiBzLmxhYmVsKysse3ZhbHVlOmFbMV0sZG9uZTohMX07Y2FzZSA1OnMubGFiZWwrKyxvPWFbMV0sYT1bMF07Y29udGludWU7Y2FzZSA3OmE9cy5vcHMucG9wKCkscy50cnlzLnBvcCgpO2NvbnRpbnVlO2RlZmF1bHQ6aWYoIShpPXMudHJ5cywoaT1pLmxlbmd0aD4wJiZpW2kubGVuZ3RoLTFdKXx8NiE9PWFbMF0mJjIhPT1hWzBdKSl7cz0wO2NvbnRpbnVlfWlmKDM9PT1hWzBdJiYoIWl8fGFbMV0+aVswXSYmYVsxXTxpWzNdKSl7cy5sYWJlbD1hWzFdO2JyZWFrfWlmKDY9PT1hWzBdJiZzLmxhYmVsPGlbMV0pe3MubGFiZWw9aVsxXSxpPWE7YnJlYWt9aWYoaSYmcy5sYWJlbDxpWzJdKXtzLmxhYmVsPWlbMl0scy5vcHMucHVzaChhKTticmVha31pWzJdJiZzLm9wcy5wb3AoKSxzLnRyeXMucG9wKCk7Y29udGludWV9YT1lLmNhbGwodCxzKX1jYXRjaCh0KXthPVs2LHRdLG89MH1maW5hbGx5e249aT0wfWlmKDUmYVswXSl0aHJvdyBhWzFdO3JldHVybnt2YWx1ZTphWzBdP2FbMV06dm9pZCAwLGRvbmU6ITB9fShbYSxsXSl9fX1mdW5jdGlvbiBvKHQsZSxuKXt2YXIgbyxyPSgobz17fSlbdF09ZSxvLnBhdGg9XCIvXCIsby5leHBpcmVzPXZvaWQgMCxvKTtpZihuKXt2YXIgcz1uZXcgRGF0ZTtzLnNldFRpbWUocy5nZXRUaW1lKCkrMjQqbio2MCo2MCoxZTMpLHIuZXhwaXJlcz1zLnRvVVRDU3RyaW5nKCl9dmFyIGE9W107Zm9yKHZhciBsIGluIHIpYS5wdXNoKFwiXCIuY29uY2F0KGwsXCI9XCIpLmNvbmNhdChyW2xdKSk7cmV0dXJuIGRvY3VtZW50LmNvb2tpZT1hLmpvaW4oXCI7IFwiKSxpKHQpfWZ1bmN0aW9uIGkodCl7cmV0dXJuKGU9e30sZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKS5mb3JFYWNoKChmdW5jdGlvbih0KXt2YXIgbj10LnNwbGl0KFwiPVwiKSxvPW5bMF0saT1uWzFdO2Vbby50cmltKCldPWl9KSksZSlbdF07dmFyIGV9XCJmdW5jdGlvblwiPT10eXBlb2YgU3VwcHJlc3NlZEVycm9yJiZTdXBwcmVzc2VkRXJyb3I7ZnVuY3Rpb24gcih0LGUpe2U/byh0Ll9vcHRpb25zLmRvbnRTaG93QWdhaW5Db29raWUsXCJ0cnVlXCIsdC5fb3B0aW9ucy5kb250U2hvd0FnYWluQ29va2llRGF5cyk6byh0Ll9vcHRpb25zLmRvbnRTaG93QWdhaW5Db29raWUsXCJcIiwtMSl9dmFyIHMsYT0ocz17fSxmdW5jdGlvbih0LGUpe3JldHVybiB2b2lkIDA9PT1lJiYoZT1cImludHJvanMtc3RhbXBcIiksc1tlXT1zW2VdfHwwLHZvaWQgMD09PXRbZV0mJih0W2VdPXNbZV0rKyksdFtlXX0pLGw9bmV3KGZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe3RoaXMuZXZlbnRzX2tleT1cImludHJvanNfZXZlbnRcIn1yZXR1cm4gdC5wcm90b3R5cGUuX2lkPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gdCthKGUpKyhuP1wiX1wiLmNvbmNhdChhKG4pKTpcIlwiKX0sdC5wcm90b3R5cGUub249ZnVuY3Rpb24odCxlLG4sbyxpKXt2YXIgcj10aGlzLl9pZChlLG4sbykscz1mdW5jdGlvbihlKXtyZXR1cm4gbihvfHx0LGV8fHdpbmRvdy5ldmVudCl9O1wiYWRkRXZlbnRMaXN0ZW5lclwiaW4gdD90LmFkZEV2ZW50TGlzdGVuZXIoZSxzLGkpOlwiYXR0YWNoRXZlbnRcImluIHQmJnQuYXR0YWNoRXZlbnQoXCJvblwiLmNvbmNhdChlKSxzKSx0W3RoaXMuZXZlbnRzX2tleV09dFt0aGlzLmV2ZW50c19rZXldfHx7fSx0W3RoaXMuZXZlbnRzX2tleV1bcl09c30sdC5wcm90b3R5cGUub2ZmPWZ1bmN0aW9uKHQsZSxuLG8saSl7dmFyIHI9dGhpcy5faWQoZSxuLG8pLHM9dFt0aGlzLmV2ZW50c19rZXldJiZ0W3RoaXMuZXZlbnRzX2tleV1bcl07cyYmKFwicmVtb3ZlRXZlbnRMaXN0ZW5lclwiaW4gdD90LnJlbW92ZUV2ZW50TGlzdGVuZXIoZSxzLGkpOlwiZGV0YWNoRXZlbnRcImluIHQmJnQuZGV0YWNoRXZlbnQoXCJvblwiLmNvbmNhdChlKSxzKSx0W3RoaXMuZXZlbnRzX2tleV1bcl09bnVsbCl9LHR9KCkpLGM9ZnVuY3Rpb24odCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdH07ZnVuY3Rpb24gdSh0LGUpe2lmKHQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KXt2YXIgbj10LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiO24ubWF0Y2goZSl8fHQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcIlwiLmNvbmNhdChuLFwiIFwiKS5jb25jYXQoZSkpfWVsc2UgaWYodm9pZCAwIT09dC5jbGFzc0xpc3QpZm9yKHZhciBvPTAsaT1lLnNwbGl0KFwiIFwiKTtvPGkubGVuZ3RoO28rKyl7dmFyIHI9aVtvXTt0LmNsYXNzTGlzdC5hZGQocil9ZWxzZSB0LmNsYXNzTmFtZS5tYXRjaChlKXx8KHQuY2xhc3NOYW1lKz1cIiBcIi5jb25jYXQoZSkpfWZ1bmN0aW9uIHAodCxlKXt2YXIgbj1cIlwiO3JldHVyblwiY3VycmVudFN0eWxlXCJpbiB0P249dC5jdXJyZW50U3R5bGVbZV06ZG9jdW1lbnQuZGVmYXVsdFZpZXcmJmRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUmJihuPWRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUodCxudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKGUpKSxuJiZuLnRvTG93ZXJDYXNlP24udG9Mb3dlckNhc2UoKTpufWZ1bmN0aW9uIGgodCxlKXtpZih0KXt2YXIgbj1mdW5jdGlvbih0KXt2YXIgZT13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0KSxuPVwiYWJzb2x1dGVcIj09PWUucG9zaXRpb24sbz0vKGF1dG98c2Nyb2xsKS87aWYoXCJmaXhlZFwiPT09ZS5wb3NpdGlvbilyZXR1cm4gZG9jdW1lbnQuYm9keTtmb3IodmFyIGk9dDtpPWkucGFyZW50RWxlbWVudDspaWYoZT13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShpKSwoIW58fFwic3RhdGljXCIhPT1lLnBvc2l0aW9uKSYmby50ZXN0KGUub3ZlcmZsb3crZS5vdmVyZmxvd1krZS5vdmVyZmxvd1gpKXJldHVybiBpO3JldHVybiBkb2N1bWVudC5ib2R5fShlKTtuIT09ZG9jdW1lbnQuYm9keSYmKG4uc2Nyb2xsVG9wPWUub2Zmc2V0VG9wLW4ub2Zmc2V0VG9wKX19ZnVuY3Rpb24gZCgpe2lmKHZvaWQgMCE9PXdpbmRvdy5pbm5lcldpZHRoKXJldHVybnt3aWR0aDp3aW5kb3cuaW5uZXJXaWR0aCxoZWlnaHQ6d2luZG93LmlubmVySGVpZ2h0fTt2YXIgdD1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7cmV0dXJue3dpZHRoOnQuY2xpZW50V2lkdGgsaGVpZ2h0OnQuY2xpZW50SGVpZ2h0fX1mdW5jdGlvbiBmKHQsZSxuLG8saSl7dmFyIHI7aWYoXCJvZmZcIiE9PWUmJih0JiYocj1cInRvb2x0aXBcIj09PWU/aS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTpvLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCFmdW5jdGlvbih0KXt2YXIgZT10LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO3JldHVybiBlLnRvcD49MCYmZS5sZWZ0Pj0wJiZlLmJvdHRvbSs4MDw9d2luZG93LmlubmVySGVpZ2h0JiZlLnJpZ2h0PD13aW5kb3cuaW5uZXJXaWR0aH0obykpKSl7dmFyIHM9ZCgpLmhlaWdodDtyLmJvdHRvbS0oci5ib3R0b20tci50b3ApPDB8fG8uY2xpZW50SGVpZ2h0PnM/d2luZG93LnNjcm9sbEJ5KDAsci50b3AtKHMvMi1yLmhlaWdodC8yKS1uKTp3aW5kb3cuc2Nyb2xsQnkoMCxyLnRvcC0ocy8yLXIuaGVpZ2h0LzIpK24pfX1mdW5jdGlvbiBiKHQpe3Quc2V0QXR0cmlidXRlKFwicm9sZVwiLFwiYnV0dG9uXCIpLHQudGFiSW5kZXg9MH1mdW5jdGlvbiBtKHQpe3ZhciBlPXQucGFyZW50RWxlbWVudDtyZXR1cm4hKCFlfHxcIkhUTUxcIj09PWUubm9kZU5hbWUpJiYoXCJmaXhlZFwiPT09cCh0LFwicG9zaXRpb25cIil8fG0oZSkpfWZ1bmN0aW9uIGcodCxlKXt2YXIgbj1kb2N1bWVudC5ib2R5LG89ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LGk9d2luZG93LnBhZ2VZT2Zmc2V0fHxvLnNjcm9sbFRvcHx8bi5zY3JvbGxUb3Ascj13aW5kb3cucGFnZVhPZmZzZXR8fG8uc2Nyb2xsTGVmdHx8bi5zY3JvbGxMZWZ0O2U9ZXx8bjt2YXIgcz10LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLGE9ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxsPXAoZSxcInBvc2l0aW9uXCIpLGM9e3dpZHRoOnMud2lkdGgsaGVpZ2h0OnMuaGVpZ2h0fTtyZXR1cm5cImJvZHlcIiE9PWUudGFnTmFtZS50b0xvd2VyQ2FzZSgpJiZcInJlbGF0aXZlXCI9PT1sfHxcInN0aWNreVwiPT09bD9PYmplY3QuYXNzaWduKGMse3RvcDpzLnRvcC1hLnRvcCxsZWZ0OnMubGVmdC1hLmxlZnR9KTptKHQpP09iamVjdC5hc3NpZ24oYyx7dG9wOnMudG9wLGxlZnQ6cy5sZWZ0fSk6T2JqZWN0LmFzc2lnbihjLHt0b3A6cy50b3AraSxsZWZ0OnMubGVmdCtyfSl9ZnVuY3Rpb24gdih0LGUpe2lmKHQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KXt2YXIgbj10LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiO3Quc2V0QXR0cmlidXRlKFwiY2xhc3NcIixuLnJlcGxhY2UoZSxcIlwiKS5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLFwiXCIpKX1lbHNlIHQuY2xhc3NOYW1lPXQuY2xhc3NOYW1lLnJlcGxhY2UoZSxcIlwiKS5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLFwiXCIpfWZ1bmN0aW9uIHkodCxlKXt2YXIgbj1cIlwiO2lmKHQuc3R5bGUuY3NzVGV4dCYmKG4rPXQuc3R5bGUuY3NzVGV4dCksXCJzdHJpbmdcIj09dHlwZW9mIGUpbis9ZTtlbHNlIGZvcih2YXIgbyBpbiBlKW4rPVwiXCIuY29uY2F0KG8sXCI6XCIpLmNvbmNhdChlW29dLFwiO1wiKTt0LnN0eWxlLmNzc1RleHQ9bn1mdW5jdGlvbiB3KHQsZSxuKXtpZihuJiZlKXt2YXIgbz1nKGUuZWxlbWVudCx0Ll90YXJnZXRFbGVtZW50KSxpPXQuX29wdGlvbnMuaGVscGVyRWxlbWVudFBhZGRpbmc7ZS5lbGVtZW50IGluc3RhbmNlb2YgRWxlbWVudCYmbShlLmVsZW1lbnQpP3UobixcImludHJvanMtZml4ZWRUb29sdGlwXCIpOnYobixcImludHJvanMtZml4ZWRUb29sdGlwXCIpLFwiZmxvYXRpbmdcIj09PWUucG9zaXRpb24mJihpPTApLHkobix7d2lkdGg6XCJcIi5jb25jYXQoby53aWR0aCtpLFwicHhcIiksaGVpZ2h0OlwiXCIuY29uY2F0KG8uaGVpZ2h0K2ksXCJweFwiKSx0b3A6XCJcIi5jb25jYXQoby50b3AtaS8yLFwicHhcIiksbGVmdDpcIlwiLmNvbmNhdChvLmxlZnQtaS8yLFwicHhcIil9KX19ZnVuY3Rpb24gXyh0LGUsbixvLGkpe3JldHVybiB0LmxlZnQrZStuLndpZHRoPm8ud2lkdGg/KGkuc3R5bGUubGVmdD1cIlwiLmNvbmNhdChvLndpZHRoLW4ud2lkdGgtdC5sZWZ0LFwicHhcIiksITEpOihpLnN0eWxlLmxlZnQ9XCJcIi5jb25jYXQoZSxcInB4XCIpLCEwKX1mdW5jdGlvbiBDKHQsZSxuLG8pe3JldHVybiB0LmxlZnQrdC53aWR0aC1lLW4ud2lkdGg8MD8oby5zdHlsZS5sZWZ0PVwiXCIuY29uY2F0KC10LmxlZnQsXCJweFwiKSwhMSk6KG8uc3R5bGUucmlnaHQ9XCJcIi5jb25jYXQoZSxcInB4XCIpLCEwKX1mdW5jdGlvbiBTKHQsZSl7dC5pbmNsdWRlcyhlKSYmdC5zcGxpY2UodC5pbmRleE9mKGUpLDEpfWZ1bmN0aW9uIGsodCxlLG4sbyl7dmFyIGk9dC5zbGljZSgpLHI9ZCgpLHM9ZyhuKS5oZWlnaHQrMTAsYT1nKG4pLndpZHRoKzIwLGw9ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxjPVwiZmxvYXRpbmdcIjtpZihsLmJvdHRvbStzPnIuaGVpZ2h0JiZTKGksXCJib3R0b21cIiksbC50b3AtczwwJiZTKGksXCJ0b3BcIiksbC5yaWdodCthPnIud2lkdGgmJlMoaSxcInJpZ2h0XCIpLGwubGVmdC1hPDAmJlMoaSxcImxlZnRcIiksbyYmKG89by5zcGxpdChcIi1cIilbMF0pLGkubGVuZ3RoJiYoYz1pWzBdLGkuaW5jbHVkZXMobykmJihjPW8pKSxcInRvcFwiPT09Y3x8XCJib3R0b21cIj09PWMpe3ZhciB1PXZvaWQgMCxwPVtdO1widG9wXCI9PT1jPyh1PVwidG9wLW1pZGRsZS1hbGlnbmVkXCIscD1bXCJ0b3AtbGVmdC1hbGlnbmVkXCIsXCJ0b3AtbWlkZGxlLWFsaWduZWRcIixcInRvcC1yaWdodC1hbGlnbmVkXCJdKToodT1cImJvdHRvbS1taWRkbGUtYWxpZ25lZFwiLHA9W1wiYm90dG9tLWxlZnQtYWxpZ25lZFwiLFwiYm90dG9tLW1pZGRsZS1hbGlnbmVkXCIsXCJib3R0b20tcmlnaHQtYWxpZ25lZFwiXSksYz1mdW5jdGlvbih0LGUsbixvKXt2YXIgaT1lLzIscj1NYXRoLm1pbihuLHdpbmRvdy5zY3JlZW4ud2lkdGgpO3JldHVybiByLXQ8ZSYmKFMobyxcInRvcC1sZWZ0LWFsaWduZWRcIiksUyhvLFwiYm90dG9tLWxlZnQtYWxpZ25lZFwiKSksKHQ8aXx8ci10PGkpJiYoUyhvLFwidG9wLW1pZGRsZS1hbGlnbmVkXCIpLFMobyxcImJvdHRvbS1taWRkbGUtYWxpZ25lZFwiKSksdDxlJiYoUyhvLFwidG9wLXJpZ2h0LWFsaWduZWRcIiksUyhvLFwiYm90dG9tLXJpZ2h0LWFsaWduZWRcIikpLG8ubGVuZ3RoP29bMF06bnVsbH0obC5sZWZ0LGEsci53aWR0aCxwKXx8dX1yZXR1cm4gY31mdW5jdGlvbiBqKHQsZSxuLG8saSl7aWYodm9pZCAwPT09aSYmKGk9ITEpLGUpe3ZhciByLHMsYSxsLGM9XCJcIjtuLnN0eWxlLnRvcD1cIlwiLG4uc3R5bGUucmlnaHQ9XCJcIixuLnN0eWxlLmJvdHRvbT1cIlwiLG4uc3R5bGUubGVmdD1cIlwiLG4uc3R5bGUubWFyZ2luTGVmdD1cIlwiLG4uc3R5bGUubWFyZ2luVG9wPVwiXCIsby5zdHlsZS5kaXNwbGF5PVwiaW5oZXJpdFwiLGM9XCJzdHJpbmdcIj09dHlwZW9mIGUudG9vbHRpcENsYXNzP2UudG9vbHRpcENsYXNzOnQuX29wdGlvbnMudG9vbHRpcENsYXNzLG4uY2xhc3NOYW1lPVtcImludHJvanMtdG9vbHRpcFwiLGNdLmZpbHRlcihCb29sZWFuKS5qb2luKFwiIFwiKSxuLnNldEF0dHJpYnV0ZShcInJvbGVcIixcImRpYWxvZ1wiKSxcImZsb2F0aW5nXCIhPT0obD1lLnBvc2l0aW9uKSYmdC5fb3B0aW9ucy5hdXRvUG9zaXRpb24mJihsPWsodC5fb3B0aW9ucy5wb3NpdGlvblByZWNlZGVuY2UsZS5lbGVtZW50LG4sbCkpLHM9ZyhlLmVsZW1lbnQpLHI9ZyhuKSxhPWQoKSx1KG4sXCJpbnRyb2pzLVwiLmNvbmNhdChsKSk7dmFyIHA9cy53aWR0aC8yLXIud2lkdGgvMjtzd2l0Y2gobCl7Y2FzZVwidG9wLXJpZ2h0LWFsaWduZWRcIjpvLmNsYXNzTmFtZT1cImludHJvanMtYXJyb3cgYm90dG9tLXJpZ2h0XCI7dmFyIGg9MDtDKHMsaCxyLG4pLG4uc3R5bGUuYm90dG9tPVwiXCIuY29uY2F0KHMuaGVpZ2h0KzIwLFwicHhcIik7YnJlYWs7Y2FzZVwidG9wLW1pZGRsZS1hbGlnbmVkXCI6by5jbGFzc05hbWU9XCJpbnRyb2pzLWFycm93IGJvdHRvbS1taWRkbGVcIixpJiYocCs9NSksQyhzLHAscixuKSYmKG4uc3R5bGUucmlnaHQ9XCJcIixfKHMscCxyLGEsbikpLG4uc3R5bGUuYm90dG9tPVwiXCIuY29uY2F0KHMuaGVpZ2h0KzIwLFwicHhcIik7YnJlYWs7Y2FzZVwidG9wLWxlZnQtYWxpZ25lZFwiOmNhc2VcInRvcFwiOm8uY2xhc3NOYW1lPVwiaW50cm9qcy1hcnJvdyBib3R0b21cIixfKHMsaT8wOjE1LHIsYSxuKSxuLnN0eWxlLmJvdHRvbT1cIlwiLmNvbmNhdChzLmhlaWdodCsyMCxcInB4XCIpO2JyZWFrO2Nhc2VcInJpZ2h0XCI6bi5zdHlsZS5sZWZ0PVwiXCIuY29uY2F0KHMud2lkdGgrMjAsXCJweFwiKSxzLnRvcCtyLmhlaWdodD5hLmhlaWdodD8oby5jbGFzc05hbWU9XCJpbnRyb2pzLWFycm93IGxlZnQtYm90dG9tXCIsbi5zdHlsZS50b3A9XCItXCIuY29uY2F0KHIuaGVpZ2h0LXMuaGVpZ2h0LTIwLFwicHhcIikpOm8uY2xhc3NOYW1lPVwiaW50cm9qcy1hcnJvdyBsZWZ0XCI7YnJlYWs7Y2FzZVwibGVmdFwiOml8fCEwIT09dC5fb3B0aW9ucy5zaG93U3RlcE51bWJlcnN8fChuLnN0eWxlLnRvcD1cIjE1cHhcIikscy50b3Arci5oZWlnaHQ+YS5oZWlnaHQ/KG4uc3R5bGUudG9wPVwiLVwiLmNvbmNhdChyLmhlaWdodC1zLmhlaWdodC0yMCxcInB4XCIpLG8uY2xhc3NOYW1lPVwiaW50cm9qcy1hcnJvdyByaWdodC1ib3R0b21cIik6by5jbGFzc05hbWU9XCJpbnRyb2pzLWFycm93IHJpZ2h0XCIsbi5zdHlsZS5yaWdodD1cIlwiLmNvbmNhdChzLndpZHRoKzIwLFwicHhcIik7YnJlYWs7Y2FzZVwiZmxvYXRpbmdcIjpvLnN0eWxlLmRpc3BsYXk9XCJub25lXCIsbi5zdHlsZS5sZWZ0PVwiNTAlXCIsbi5zdHlsZS50b3A9XCI1MCVcIixuLnN0eWxlLm1hcmdpbkxlZnQ9XCItXCIuY29uY2F0KHIud2lkdGgvMixcInB4XCIpLG4uc3R5bGUubWFyZ2luVG9wPVwiLVwiLmNvbmNhdChyLmhlaWdodC8yLFwicHhcIik7YnJlYWs7Y2FzZVwiYm90dG9tLXJpZ2h0LWFsaWduZWRcIjpvLmNsYXNzTmFtZT1cImludHJvanMtYXJyb3cgdG9wLXJpZ2h0XCIsQyhzLGg9MCxyLG4pLG4uc3R5bGUudG9wPVwiXCIuY29uY2F0KHMuaGVpZ2h0KzIwLFwicHhcIik7YnJlYWs7Y2FzZVwiYm90dG9tLW1pZGRsZS1hbGlnbmVkXCI6by5jbGFzc05hbWU9XCJpbnRyb2pzLWFycm93IHRvcC1taWRkbGVcIixpJiYocCs9NSksQyhzLHAscixuKSYmKG4uc3R5bGUucmlnaHQ9XCJcIixfKHMscCxyLGEsbikpLG4uc3R5bGUudG9wPVwiXCIuY29uY2F0KHMuaGVpZ2h0KzIwLFwicHhcIik7YnJlYWs7ZGVmYXVsdDpvLmNsYXNzTmFtZT1cImludHJvanMtYXJyb3cgdG9wXCIsXyhzLDAscixhLG4pLG4uc3R5bGUudG9wPVwiXCIuY29uY2F0KHMuaGVpZ2h0KzIwLFwicHhcIil9fX1mdW5jdGlvbiBBKCl7Zm9yKHZhciB0PTAsZT1BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW50cm9qcy1zaG93RWxlbWVudFwiKSk7dDxlLmxlbmd0aDt0Kyspe3YoZVt0XSwvaW50cm9qcy1bYS16QS1aXSsvZyl9fWZ1bmN0aW9uIHgodCxlKXt2YXIgbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KHQpO2U9ZXx8e307dmFyIG89L14oPzpyb2xlfGRhdGEtfGFyaWEtKS87Zm9yKHZhciBpIGluIGUpe3ZhciByPWVbaV07XCJzdHlsZVwiPT09aSYmXCJmdW5jdGlvblwiIT10eXBlb2Ygcj95KG4scik6XCJzdHJpbmdcIj09dHlwZW9mIHImJmkubWF0Y2gobyk/bi5zZXRBdHRyaWJ1dGUoaSxyKTpuW2ldPXJ9cmV0dXJuIG59ZnVuY3Rpb24gTih0LGUsbil7aWYodm9pZCAwPT09biYmKG49ITEpLG4pe3ZhciBvPWUuc3R5bGUub3BhY2l0eXx8XCIxXCI7eShlLHtvcGFjaXR5OlwiMFwifSksd2luZG93LnNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7eShlLHtvcGFjaXR5Om99KX0pLDEwKX10LmFwcGVuZENoaWxkKGUpfWZ1bmN0aW9uIEUodCxlKXtyZXR1cm4odCsxKS9lKjEwMH1mdW5jdGlvbiBUKHQsZSl7dmFyIG49eChcImRpdlwiLHtjbGFzc05hbWU6XCJpbnRyb2pzLWJ1bGxldHNcIn0pOyExPT09dC5fb3B0aW9ucy5zaG93QnVsbGV0cyYmKG4uc3R5bGUuZGlzcGxheT1cIm5vbmVcIik7dmFyIG89eChcInVsXCIpO28uc2V0QXR0cmlidXRlKFwicm9sZVwiLFwidGFibGlzdFwiKTtmb3IodmFyIGk9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLmdldEF0dHJpYnV0ZShcImRhdGEtc3RlcC1udW1iZXJcIik7bnVsbCE9ZSYmdC5nb1RvU3RlcChwYXJzZUludChlLDEwKSl9LHI9MDtyPHQuX2ludHJvSXRlbXMubGVuZ3RoO3IrKyl7dmFyIHM9dC5faW50cm9JdGVtc1tyXS5zdGVwLGE9eChcImxpXCIpLGw9eChcImFcIik7YS5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsXCJwcmVzZW50YXRpb25cIiksbC5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsXCJ0YWJcIiksbC5vbmNsaWNrPWkscj09PWUuc3RlcC0xJiYobC5jbGFzc05hbWU9XCJhY3RpdmVcIiksYihsKSxsLmlubmVySFRNTD1cIiZuYnNwO1wiLGwuc2V0QXR0cmlidXRlKFwiZGF0YS1zdGVwLW51bWJlclwiLHMudG9TdHJpbmcoKSksYS5hcHBlbmRDaGlsZChsKSxvLmFwcGVuZENoaWxkKGEpfXJldHVybiBuLmFwcGVuZENoaWxkKG8pLG59ZnVuY3Rpb24gSSh0LGUsbil7dmFyIG89dC5xdWVyeVNlbGVjdG9yKFwiLmludHJvanMtcHJvZ3Jlc3MgLmludHJvanMtcHJvZ3Jlc3NiYXJcIik7aWYobyl7dmFyIGk9RShlLG4pO28uc3R5bGUuY3NzVGV4dD1cIndpZHRoOlwiLmNvbmNhdChpLFwiJTtcIiksby5zZXRBdHRyaWJ1dGUoXCJhcmlhLXZhbHVlbm93XCIsaS50b1N0cmluZygpKX19ZnVuY3Rpb24gTCh0LG8pe3JldHVybiBlKHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXt2YXIgaSxyLHMsYSxsLGQsbSxnLHYsXyxDLFMsayxMLFAscSxSLE8sTSxELEYsVix6LEcsVz10aGlzO3JldHVybiBuKHRoaXMsKGZ1bmN0aW9uKFEpe3N3aXRjaChRLmxhYmVsKXtjYXNlIDA6cmV0dXJuIGModC5faW50cm9DaGFuZ2VDYWxsYmFjayk/WzQsdC5faW50cm9DaGFuZ2VDYWxsYmFjay5jYWxsKHQsby5lbGVtZW50KV06WzMsMl07Y2FzZSAxOlEuc2VudCgpLFEubGFiZWw9MjtjYXNlIDI6cmV0dXJuIGk9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnRyb2pzLWhlbHBlckxheWVyXCIpLHI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnRyb2pzLXRvb2x0aXBSZWZlcmVuY2VMYXllclwiKSxzPVwiaW50cm9qcy1oZWxwZXJMYXllclwiLFwic3RyaW5nXCI9PXR5cGVvZiBvLmhpZ2hsaWdodENsYXNzJiYocys9XCIgXCIuY29uY2F0KG8uaGlnaGxpZ2h0Q2xhc3MpKSxcInN0cmluZ1wiPT10eXBlb2YgdC5fb3B0aW9ucy5oaWdobGlnaHRDbGFzcyYmKHMrPVwiIFwiLmNvbmNhdCh0Ll9vcHRpb25zLmhpZ2hsaWdodENsYXNzKSksbnVsbCE9PWkmJm51bGwhPT1yPyhtPXIucXVlcnlTZWxlY3RvcihcIi5pbnRyb2pzLWhlbHBlck51bWJlckxheWVyXCIpLGc9ci5xdWVyeVNlbGVjdG9yKFwiLmludHJvanMtdG9vbHRpcHRleHRcIiksdj1yLnF1ZXJ5U2VsZWN0b3IoXCIuaW50cm9qcy10b29sdGlwLXRpdGxlXCIpLF89ci5xdWVyeVNlbGVjdG9yKFwiLmludHJvanMtYXJyb3dcIiksQz1yLnF1ZXJ5U2VsZWN0b3IoXCIuaW50cm9qcy10b29sdGlwXCIpLGQ9ci5xdWVyeVNlbGVjdG9yKFwiLmludHJvanMtc2tpcGJ1dHRvblwiKSxsPXIucXVlcnlTZWxlY3RvcihcIi5pbnRyb2pzLXByZXZidXR0b25cIiksYT1yLnF1ZXJ5U2VsZWN0b3IoXCIuaW50cm9qcy1uZXh0YnV0dG9uXCIpLGkuY2xhc3NOYW1lPXMsQy5zdHlsZS5vcGFjaXR5PVwiMFwiLEMuc3R5bGUuZGlzcGxheT1cIm5vbmVcIixoKHQuX29wdGlvbnMuc2Nyb2xsVG9FbGVtZW50LG8uZWxlbWVudCksdyh0LG8saSksdyh0LG8sciksQSgpLHQuX2xhc3RTaG93RWxlbWVudFRpbWVyJiZ3aW5kb3cuY2xlYXJUaW1lb3V0KHQuX2xhc3RTaG93RWxlbWVudFRpbWVyKSx0Ll9sYXN0U2hvd0VsZW1lbnRUaW1lcj13aW5kb3cuc2V0VGltZW91dCgoZnVuY3Rpb24oKXtudWxsIT09bSYmKG0uaW5uZXJIVE1MPVwiXCIuY29uY2F0KG8uc3RlcCxcIiBcIikuY29uY2F0KHQuX29wdGlvbnMuc3RlcE51bWJlcnNPZkxhYmVsLFwiIFwiKS5jb25jYXQodC5faW50cm9JdGVtcy5sZW5ndGgpKSxnLmlubmVySFRNTD1vLmludHJvfHxcIlwiLHYuaW5uZXJIVE1MPW8udGl0bGV8fFwiXCIsQy5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIixqKHQsbyxDLF8pLGZ1bmN0aW9uKHQsZSxuKXtpZih0KXt2YXIgbz1lLnF1ZXJ5U2VsZWN0b3IoXCIuaW50cm9qcy1idWxsZXRzIGxpID4gYS5hY3RpdmVcIiksaT1lLnF1ZXJ5U2VsZWN0b3IoJy5pbnRyb2pzLWJ1bGxldHMgbGkgPiBhW2RhdGEtc3RlcC1udW1iZXI9XCInLmNvbmNhdChuLnN0ZXAsJ1wiXScpKTtvJiZpJiYoby5jbGFzc05hbWU9XCJcIixpLmNsYXNzTmFtZT1cImFjdGl2ZVwiKX19KHQuX29wdGlvbnMuc2hvd0J1bGxldHMscixvKSxJKHIsdC5fY3VycmVudFN0ZXAsdC5faW50cm9JdGVtcy5sZW5ndGgpLEMuc3R5bGUub3BhY2l0eT1cIjFcIiwobnVsbCE9YSYmL2ludHJvanMtZG9uZWJ1dHRvbi9naS50ZXN0KGEuY2xhc3NOYW1lKXx8bnVsbCE9YSkmJmEuZm9jdXMoKSxmKHQuX29wdGlvbnMuc2Nyb2xsVG9FbGVtZW50LG8uc2Nyb2xsVG8sdC5fb3B0aW9ucy5zY3JvbGxQYWRkaW5nLG8uZWxlbWVudCxnKX0pLDM1MCkpOihTPXgoXCJkaXZcIix7Y2xhc3NOYW1lOnN9KSxrPXgoXCJkaXZcIix7Y2xhc3NOYW1lOlwiaW50cm9qcy10b29sdGlwUmVmZXJlbmNlTGF5ZXJcIn0pLEw9eChcImRpdlwiLHtjbGFzc05hbWU6XCJpbnRyb2pzLWFycm93XCJ9KSxQPXgoXCJkaXZcIix7Y2xhc3NOYW1lOlwiaW50cm9qcy10b29sdGlwXCJ9KSxxPXgoXCJkaXZcIix7Y2xhc3NOYW1lOlwiaW50cm9qcy10b29sdGlwdGV4dFwifSksUj14KFwiZGl2XCIse2NsYXNzTmFtZTpcImludHJvanMtdG9vbHRpcC1oZWFkZXJcIn0pLE89eChcImgxXCIse2NsYXNzTmFtZTpcImludHJvanMtdG9vbHRpcC10aXRsZVwifSksTT14KFwiZGl2XCIpLHkoUyx7XCJib3gtc2hhZG93XCI6XCIwIDAgMXB4IDJweCByZ2JhKDMzLCAzMywgMzMsIDAuOCksIHJnYmEoMzMsIDMzLCAzMywgXCIuY29uY2F0KHQuX29wdGlvbnMub3ZlcmxheU9wYWNpdHkudG9TdHJpbmcoKSxcIikgMCAwIDAgNTAwMHB4XCIpfSksaCh0Ll9vcHRpb25zLnNjcm9sbFRvRWxlbWVudCxvLmVsZW1lbnQpLHcodCxvLFMpLHcodCxvLGspLE4odC5fdGFyZ2V0RWxlbWVudCxTLCEwKSxOKHQuX3RhcmdldEVsZW1lbnQsaykscS5pbm5lckhUTUw9by5pbnRybyxPLmlubmVySFRNTD1vLnRpdGxlLE0uY2xhc3NOYW1lPVwiaW50cm9qcy10b29sdGlwYnV0dG9uc1wiLCExPT09dC5fb3B0aW9ucy5zaG93QnV0dG9ucyYmKE0uc3R5bGUuZGlzcGxheT1cIm5vbmVcIiksUi5hcHBlbmRDaGlsZChPKSxQLmFwcGVuZENoaWxkKFIpLFAuYXBwZW5kQ2hpbGQocSksdC5fb3B0aW9ucy5kb250U2hvd0FnYWluJiYoRD14KFwiZGl2XCIse2NsYXNzTmFtZTpcImludHJvanMtZG9udFNob3dBZ2FpblwifSksKEY9eChcImlucHV0XCIse3R5cGU6XCJjaGVja2JveFwiLGlkOlwiaW50cm9qcy1kb250U2hvd0FnYWluXCIsbmFtZTpcImludHJvanMtZG9udFNob3dBZ2FpblwifSkpLm9uY2hhbmdlPWZ1bmN0aW9uKGUpe3Quc2V0RG9udFNob3dBZ2FpbihlLnRhcmdldC5jaGVja2VkKX0sKFY9eChcImxhYmVsXCIse2h0bWxGb3I6XCJpbnRyb2pzLWRvbnRTaG93QWdhaW5cIn0pKS5pbm5lclRleHQ9dC5fb3B0aW9ucy5kb250U2hvd0FnYWluTGFiZWwsRC5hcHBlbmRDaGlsZChGKSxELmFwcGVuZENoaWxkKFYpLFAuYXBwZW5kQ2hpbGQoRCkpLFAuYXBwZW5kQ2hpbGQoVCh0LG8pKSxQLmFwcGVuZENoaWxkKGZ1bmN0aW9uKHQpe3ZhciBlPXgoXCJkaXZcIik7ZS5jbGFzc05hbWU9XCJpbnRyb2pzLXByb2dyZXNzXCIsITE9PT10Ll9vcHRpb25zLnNob3dQcm9ncmVzcyYmKGUuc3R5bGUuZGlzcGxheT1cIm5vbmVcIik7dmFyIG49eChcImRpdlwiLHtjbGFzc05hbWU6XCJpbnRyb2pzLXByb2dyZXNzYmFyXCJ9KTt0Ll9vcHRpb25zLnByb2dyZXNzQmFyQWRkaXRpb25hbENsYXNzJiYobi5jbGFzc05hbWUrPVwiIFwiK3QuX29wdGlvbnMucHJvZ3Jlc3NCYXJBZGRpdGlvbmFsQ2xhc3MpO3ZhciBvPUUodC5fY3VycmVudFN0ZXAsdC5faW50cm9JdGVtcy5sZW5ndGgpO3JldHVybiBuLnNldEF0dHJpYnV0ZShcInJvbGVcIixcInByb2dyZXNzXCIpLG4uc2V0QXR0cmlidXRlKFwiYXJpYS12YWx1ZW1pblwiLFwiMFwiKSxuLnNldEF0dHJpYnV0ZShcImFyaWEtdmFsdWVtYXhcIixcIjEwMFwiKSxuLnNldEF0dHJpYnV0ZShcImFyaWEtdmFsdWVub3dcIixvLnRvU3RyaW5nKCkpLG4uc3R5bGUuY3NzVGV4dD1cIndpZHRoOlwiLmNvbmNhdChvLFwiJTtcIiksZS5hcHBlbmRDaGlsZChuKSxlfSh0KSksej14KFwiZGl2XCIpLCEwPT09dC5fb3B0aW9ucy5zaG93U3RlcE51bWJlcnMmJih6LmNsYXNzTmFtZT1cImludHJvanMtaGVscGVyTnVtYmVyTGF5ZXJcIix6LmlubmVySFRNTD1cIlwiLmNvbmNhdChvLnN0ZXAsXCIgXCIpLmNvbmNhdCh0Ll9vcHRpb25zLnN0ZXBOdW1iZXJzT2ZMYWJlbCxcIiBcIikuY29uY2F0KHQuX2ludHJvSXRlbXMubGVuZ3RoKSxQLmFwcGVuZENoaWxkKHopKSxQLmFwcGVuZENoaWxkKEwpLGsuYXBwZW5kQ2hpbGQoUCksKGE9eChcImFcIikpLm9uY2xpY2s9ZnVuY3Rpb24oKXtyZXR1cm4gZShXLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKCl7cmV0dXJuIG4odGhpcywoZnVuY3Rpb24oZSl7c3dpdGNoKGUubGFiZWwpe2Nhc2UgMDpyZXR1cm4gdC5faW50cm9JdGVtcy5sZW5ndGgtMT09PXQuX2N1cnJlbnRTdGVwP1szLDJdOls0LEIodCldO2Nhc2UgMTpyZXR1cm4gZS5zZW50KCksWzMsNl07Y2FzZSAyOnJldHVybi9pbnRyb2pzLWRvbmVidXR0b24vZ2kudGVzdChhLmNsYXNzTmFtZSk/Yyh0Ll9pbnRyb0NvbXBsZXRlQ2FsbGJhY2spP1s0LHQuX2ludHJvQ29tcGxldGVDYWxsYmFjay5jYWxsKHQsdC5fY3VycmVudFN0ZXAsXCJkb25lXCIpXTpbMyw0XTpbMyw2XTtjYXNlIDM6ZS5zZW50KCksZS5sYWJlbD00O2Nhc2UgNDpyZXR1cm5bNCxldCh0LHQuX3RhcmdldEVsZW1lbnQpXTtjYXNlIDU6ZS5zZW50KCksZS5sYWJlbD02O2Nhc2UgNjpyZXR1cm5bMl19fSkpfSkpfSxiKGEpLGEuaW5uZXJIVE1MPXQuX29wdGlvbnMubmV4dExhYmVsLChsPXgoXCJhXCIpKS5vbmNsaWNrPWZ1bmN0aW9uKCl7cmV0dXJuIGUoVyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3JldHVybiBuKHRoaXMsKGZ1bmN0aW9uKGUpe3N3aXRjaChlLmxhYmVsKXtjYXNlIDA6cmV0dXJuIHQuX2N1cnJlbnRTdGVwPjA/WzQsSCh0KV06WzMsMl07Y2FzZSAxOmUuc2VudCgpLGUubGFiZWw9MjtjYXNlIDI6cmV0dXJuWzJdfX0pKX0pKX0sYihsKSxsLmlubmVySFRNTD10Ll9vcHRpb25zLnByZXZMYWJlbCxiKGQ9eChcImFcIix7Y2xhc3NOYW1lOlwiaW50cm9qcy1za2lwYnV0dG9uXCJ9KSksZC5pbm5lckhUTUw9dC5fb3B0aW9ucy5za2lwTGFiZWwsZC5vbmNsaWNrPWZ1bmN0aW9uKCl7cmV0dXJuIGUoVyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3JldHVybiBuKHRoaXMsKGZ1bmN0aW9uKGUpe3N3aXRjaChlLmxhYmVsKXtjYXNlIDA6cmV0dXJuIHQuX2ludHJvSXRlbXMubGVuZ3RoLTE9PT10Ll9jdXJyZW50U3RlcCYmYyh0Ll9pbnRyb0NvbXBsZXRlQ2FsbGJhY2spP1s0LHQuX2ludHJvQ29tcGxldGVDYWxsYmFjay5jYWxsKHQsdC5fY3VycmVudFN0ZXAsXCJza2lwXCIpXTpbMywyXTtjYXNlIDE6ZS5zZW50KCksZS5sYWJlbD0yO2Nhc2UgMjpyZXR1cm4gYyh0Ll9pbnRyb1NraXBDYWxsYmFjayk/WzQsdC5faW50cm9Ta2lwQ2FsbGJhY2suY2FsbCh0LHQuX2N1cnJlbnRTdGVwKV06WzMsNF07Y2FzZSAzOmUuc2VudCgpLGUubGFiZWw9NDtjYXNlIDQ6cmV0dXJuWzQsZXQodCx0Ll90YXJnZXRFbGVtZW50KV07Y2FzZSA1OnJldHVybiBlLnNlbnQoKSxbMl19fSkpfSkpfSxSLmFwcGVuZENoaWxkKGQpLHQuX2ludHJvSXRlbXMubGVuZ3RoPjEmJk0uYXBwZW5kQ2hpbGQobCksTS5hcHBlbmRDaGlsZChhKSxQLmFwcGVuZENoaWxkKE0pLGoodCxvLFAsTCksZih0Ll9vcHRpb25zLnNjcm9sbFRvRWxlbWVudCxvLnNjcm9sbFRvLHQuX29wdGlvbnMuc2Nyb2xsUGFkZGluZyxvLmVsZW1lbnQsUCkpLChHPXQuX3RhcmdldEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnRyb2pzLWRpc2FibGVJbnRlcmFjdGlvblwiKSkmJkcucGFyZW50Tm9kZSYmRy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKEcpLG8uZGlzYWJsZUludGVyYWN0aW9uJiZmdW5jdGlvbih0LGUpe3ZhciBuPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW50cm9qcy1kaXNhYmxlSW50ZXJhY3Rpb25cIik7bnVsbD09PW4mJihuPXgoXCJkaXZcIix7Y2xhc3NOYW1lOlwiaW50cm9qcy1kaXNhYmxlSW50ZXJhY3Rpb25cIn0pLHQuX3RhcmdldEVsZW1lbnQuYXBwZW5kQ2hpbGQobikpLHcodCxlLG4pfSh0LG8pLDA9PT10Ll9jdXJyZW50U3RlcCYmdC5faW50cm9JdGVtcy5sZW5ndGg+MT8obnVsbCE9YSYmKGEuY2xhc3NOYW1lPVwiXCIuY29uY2F0KHQuX29wdGlvbnMuYnV0dG9uQ2xhc3MsXCIgaW50cm9qcy1uZXh0YnV0dG9uXCIpLGEuaW5uZXJIVE1MPXQuX29wdGlvbnMubmV4dExhYmVsKSwhMD09PXQuX29wdGlvbnMuaGlkZVByZXY/KG51bGwhPWwmJihsLmNsYXNzTmFtZT1cIlwiLmNvbmNhdCh0Ll9vcHRpb25zLmJ1dHRvbkNsYXNzLFwiIGludHJvanMtcHJldmJ1dHRvbiBpbnRyb2pzLWhpZGRlblwiKSksbnVsbCE9YSYmdShhLFwiaW50cm9qcy1mdWxsYnV0dG9uXCIpKTpudWxsIT1sJiYobC5jbGFzc05hbWU9XCJcIi5jb25jYXQodC5fb3B0aW9ucy5idXR0b25DbGFzcyxcIiBpbnRyb2pzLXByZXZidXR0b24gaW50cm9qcy1kaXNhYmxlZFwiKSkpOnQuX2ludHJvSXRlbXMubGVuZ3RoLTE9PT10Ll9jdXJyZW50U3RlcHx8MT09PXQuX2ludHJvSXRlbXMubGVuZ3RoPyhudWxsIT1sJiYobC5jbGFzc05hbWU9XCJcIi5jb25jYXQodC5fb3B0aW9ucy5idXR0b25DbGFzcyxcIiBpbnRyb2pzLXByZXZidXR0b25cIikpLCEwPT09dC5fb3B0aW9ucy5oaWRlTmV4dD8obnVsbCE9YSYmKGEuY2xhc3NOYW1lPVwiXCIuY29uY2F0KHQuX29wdGlvbnMuYnV0dG9uQ2xhc3MsXCIgaW50cm9qcy1uZXh0YnV0dG9uIGludHJvanMtaGlkZGVuXCIpKSxudWxsIT1sJiZ1KGwsXCJpbnRyb2pzLWZ1bGxidXR0b25cIikpOm51bGwhPWEmJighMD09PXQuX29wdGlvbnMubmV4dFRvRG9uZT8oYS5pbm5lckhUTUw9dC5fb3B0aW9ucy5kb25lTGFiZWwsdShhLFwiXCIuY29uY2F0KHQuX29wdGlvbnMuYnV0dG9uQ2xhc3MsXCIgaW50cm9qcy1uZXh0YnV0dG9uIGludHJvanMtZG9uZWJ1dHRvblwiKSkpOmEuY2xhc3NOYW1lPVwiXCIuY29uY2F0KHQuX29wdGlvbnMuYnV0dG9uQ2xhc3MsXCIgaW50cm9qcy1uZXh0YnV0dG9uIGludHJvanMtZGlzYWJsZWRcIikpKToobnVsbCE9bCYmKGwuY2xhc3NOYW1lPVwiXCIuY29uY2F0KHQuX29wdGlvbnMuYnV0dG9uQ2xhc3MsXCIgaW50cm9qcy1wcmV2YnV0dG9uXCIpKSxudWxsIT1hJiYoYS5jbGFzc05hbWU9XCJcIi5jb25jYXQodC5fb3B0aW9ucy5idXR0b25DbGFzcyxcIiBpbnRyb2pzLW5leHRidXR0b25cIiksYS5pbm5lckhUTUw9dC5fb3B0aW9ucy5uZXh0TGFiZWwpKSxudWxsIT1sJiZsLnNldEF0dHJpYnV0ZShcInJvbGVcIixcImJ1dHRvblwiKSxudWxsIT1hJiZhLnNldEF0dHJpYnV0ZShcInJvbGVcIixcImJ1dHRvblwiKSxudWxsIT1kJiZkLnNldEF0dHJpYnV0ZShcInJvbGVcIixcImJ1dHRvblwiKSxudWxsIT1hJiZhLmZvY3VzKCksZnVuY3Rpb24odCl7dSh0LFwiaW50cm9qcy1zaG93RWxlbWVudFwiKTt2YXIgZT1wKHQsXCJwb3NpdGlvblwiKTtcImFic29sdXRlXCIhPT1lJiZcInJlbGF0aXZlXCIhPT1lJiZcInN0aWNreVwiIT09ZSYmXCJmaXhlZFwiIT09ZSYmdSh0LFwiaW50cm9qcy1yZWxhdGl2ZVBvc2l0aW9uXCIpfShvLmVsZW1lbnQpLGModC5faW50cm9BZnRlckNoYW5nZUNhbGxiYWNrKT9bNCx0Ll9pbnRyb0FmdGVyQ2hhbmdlQ2FsbGJhY2suY2FsbCh0LG8uZWxlbWVudCldOlszLDRdO2Nhc2UgMzpRLnNlbnQoKSxRLmxhYmVsPTQ7Y2FzZSA0OnJldHVyblsyXX19KSl9KSl9ZnVuY3Rpb24gUCh0LG8pe3JldHVybiBlKHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXtyZXR1cm4gbih0aGlzLChmdW5jdGlvbihlKXtzd2l0Y2goZS5sYWJlbCl7Y2FzZSAwOnJldHVybiB0Ll9jdXJyZW50U3RlcD1vLTIsdm9pZCAwPT09dC5faW50cm9JdGVtcz9bMywyXTpbNCxCKHQpXTtjYXNlIDE6ZS5zZW50KCksZS5sYWJlbD0yO2Nhc2UgMjpyZXR1cm5bMl19fSkpfSkpfWZ1bmN0aW9uIHEodCxvKXtyZXR1cm4gZSh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKCl7cmV0dXJuIG4odGhpcywoZnVuY3Rpb24oZSl7c3dpdGNoKGUubGFiZWwpe2Nhc2UgMDpyZXR1cm4gdC5fY3VycmVudFN0ZXBOdW1iZXI9byx2b2lkIDA9PT10Ll9pbnRyb0l0ZW1zP1szLDJdOls0LEIodCldO2Nhc2UgMTplLnNlbnQoKSxlLmxhYmVsPTI7Y2FzZSAyOnJldHVyblsyXX19KSl9KSl9ZnVuY3Rpb24gQih0KXtyZXR1cm4gZSh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKCl7dmFyIGUsbyxpO3JldHVybiBuKHRoaXMsKGZ1bmN0aW9uKG4pe3N3aXRjaChuLmxhYmVsKXtjYXNlIDA6aWYodC5fZGlyZWN0aW9uPVwiZm9yd2FyZFwiLHZvaWQgMCE9PXQuX2N1cnJlbnRTdGVwTnVtYmVyKWZvcihlPTA7ZTx0Ll9pbnRyb0l0ZW1zLmxlbmd0aDtlKyspdC5faW50cm9JdGVtc1tlXS5zdGVwPT09dC5fY3VycmVudFN0ZXBOdW1iZXImJih0Ll9jdXJyZW50U3RlcD1lLTEsdC5fY3VycmVudFN0ZXBOdW1iZXI9dm9pZCAwKTtyZXR1cm4tMT09PXQuX2N1cnJlbnRTdGVwP3QuX2N1cnJlbnRTdGVwPTA6Kyt0Ll9jdXJyZW50U3RlcCxvPXQuX2ludHJvSXRlbXNbdC5fY3VycmVudFN0ZXBdLGk9ITAsYyh0Ll9pbnRyb0JlZm9yZUNoYW5nZUNhbGxiYWNrKT9bNCx0Ll9pbnRyb0JlZm9yZUNoYW5nZUNhbGxiYWNrLmNhbGwodCxvJiZvLmVsZW1lbnQsdC5fY3VycmVudFN0ZXAsdC5fZGlyZWN0aW9uKV06WzMsMl07Y2FzZSAxOmk9bi5zZW50KCksbi5sYWJlbD0yO2Nhc2UgMjpyZXR1cm4hMT09PWk/KC0tdC5fY3VycmVudFN0ZXAsWzIsITFdKTp0Ll9pbnRyb0l0ZW1zLmxlbmd0aDw9dC5fY3VycmVudFN0ZXA/Yyh0Ll9pbnRyb0NvbXBsZXRlQ2FsbGJhY2spP1s0LHQuX2ludHJvQ29tcGxldGVDYWxsYmFjay5jYWxsKHQsdC5fY3VycmVudFN0ZXAsXCJlbmRcIildOlszLDRdOlszLDZdO2Nhc2UgMzpuLnNlbnQoKSxuLmxhYmVsPTQ7Y2FzZSA0OnJldHVybls0LGV0KHQsdC5fdGFyZ2V0RWxlbWVudCldO2Nhc2UgNTpyZXR1cm4gbi5zZW50KCksWzIsITFdO2Nhc2UgNjpyZXR1cm5bNCxMKHQsbyldO2Nhc2UgNzpyZXR1cm4gbi5zZW50KCksWzIsITBdfX0pKX0pKX1mdW5jdGlvbiBIKHQpe3JldHVybiBlKHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXt2YXIgZSxvO3JldHVybiBuKHRoaXMsKGZ1bmN0aW9uKG4pe3N3aXRjaChuLmxhYmVsKXtjYXNlIDA6cmV0dXJuIHQuX2RpcmVjdGlvbj1cImJhY2t3YXJkXCIsdC5fY3VycmVudFN0ZXA8PTA/WzIsITFdOigtLXQuX2N1cnJlbnRTdGVwLGU9dC5faW50cm9JdGVtc1t0Ll9jdXJyZW50U3RlcF0sbz0hMCxjKHQuX2ludHJvQmVmb3JlQ2hhbmdlQ2FsbGJhY2spP1s0LHQuX2ludHJvQmVmb3JlQ2hhbmdlQ2FsbGJhY2suY2FsbCh0LGUmJmUuZWxlbWVudCx0Ll9jdXJyZW50U3RlcCx0Ll9kaXJlY3Rpb24pXTpbMywyXSk7Y2FzZSAxOm89bi5zZW50KCksbi5sYWJlbD0yO2Nhc2UgMjpyZXR1cm4hMT09PW8/KCsrdC5fY3VycmVudFN0ZXAsWzIsITFdKTpbNCxMKHQsZSldO2Nhc2UgMzpyZXR1cm4gbi5zZW50KCksWzIsITBdfX0pKX0pKX1mdW5jdGlvbiBSKHQsbyl7cmV0dXJuIGUodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3ZhciBlLGk7cmV0dXJuIG4odGhpcywoZnVuY3Rpb24obil7c3dpdGNoKG4ubGFiZWwpe2Nhc2UgMDpyZXR1cm4gbnVsbD09PShlPXZvaWQgMD09PW8uY29kZT9vLndoaWNoOm8uY29kZSkmJihlPW51bGw9PT1vLmNoYXJDb2RlP28ua2V5Q29kZTpvLmNoYXJDb2RlKSxcIkVzY2FwZVwiIT09ZSYmMjchPT1lfHwhMCE9PXQuX29wdGlvbnMuZXhpdE9uRXNjP1szLDJdOls0LGV0KHQsdC5fdGFyZ2V0RWxlbWVudCldO2Nhc2UgMTpyZXR1cm4gbi5zZW50KCksWzMsMTZdO2Nhc2UgMjpyZXR1cm5cIkFycm93TGVmdFwiIT09ZSYmMzchPT1lP1szLDRdOls0LEgodCldO2Nhc2UgMzpyZXR1cm4gbi5zZW50KCksWzMsMTZdO2Nhc2UgNDpyZXR1cm5cIkFycm93UmlnaHRcIiE9PWUmJjM5IT09ZT9bMyw2XTpbNCxCKHQpXTtjYXNlIDU6cmV0dXJuIG4uc2VudCgpLFszLDE2XTtjYXNlIDY6cmV0dXJuXCJFbnRlclwiIT09ZSYmXCJOdW1wYWRFbnRlclwiIT09ZSYmMTMhPT1lP1szLDE2XTooaT1vLnRhcmdldHx8by5zcmNFbGVtZW50KSYmaS5jbGFzc05hbWUubWF0Y2goXCJpbnRyb2pzLXByZXZidXR0b25cIik/WzQsSCh0KV06WzMsOF07Y2FzZSA3OnJldHVybiBuLnNlbnQoKSxbMywxNV07Y2FzZSA4OnJldHVybiBpJiZpLmNsYXNzTmFtZS5tYXRjaChcImludHJvanMtc2tpcGJ1dHRvblwiKT90Ll9pbnRyb0l0ZW1zLmxlbmd0aC0xPT09dC5fY3VycmVudFN0ZXAmJmModC5faW50cm9Db21wbGV0ZUNhbGxiYWNrKT9bNCx0Ll9pbnRyb0NvbXBsZXRlQ2FsbGJhY2suY2FsbCh0LHQuX2N1cnJlbnRTdGVwLFwic2tpcFwiKV06WzMsMTBdOlszLDEyXTtjYXNlIDk6bi5zZW50KCksbi5sYWJlbD0xMDtjYXNlIDEwOnJldHVybls0LGV0KHQsdC5fdGFyZ2V0RWxlbWVudCldO2Nhc2UgMTE6cmV0dXJuIG4uc2VudCgpLFszLDE1XTtjYXNlIDEyOnJldHVybiBpJiZpLmdldEF0dHJpYnV0ZShcImRhdGEtc3RlcC1udW1iZXJcIik/KGkuY2xpY2soKSxbMywxNV0pOlszLDEzXTtjYXNlIDEzOnJldHVybls0LEIodCldO2Nhc2UgMTQ6bi5zZW50KCksbi5sYWJlbD0xNTtjYXNlIDE1Om8ucHJldmVudERlZmF1bHQ/by5wcmV2ZW50RGVmYXVsdCgpOm8ucmV0dXJuVmFsdWU9ITEsbi5sYWJlbD0xNjtjYXNlIDE2OnJldHVyblsyXX19KSl9KSl9ZnVuY3Rpb24gTyhlKXtpZihudWxsPT09ZXx8XCJvYmplY3RcIiE9PXQoZSl8fFwibm9kZVR5cGVcImluIGUpcmV0dXJuIGU7dmFyIG49e307Zm9yKHZhciBvIGluIGUpXCJqUXVlcnlcImluIHdpbmRvdyYmZVtvXWluc3RhbmNlb2Ygd2luZG93LmpRdWVyeT9uW29dPWVbb106bltvXT1PKGVbb10pO3JldHVybiBufWZ1bmN0aW9uIE0odCl7dmFyIGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnRyb2pzLWhpbnRzXCIpO3JldHVybiBlP0FycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKHQpKTpbXX1mdW5jdGlvbiBEKHQsbyl7cmV0dXJuIGUodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3ZhciBlO3JldHVybiBuKHRoaXMsKGZ1bmN0aW9uKG4pe3N3aXRjaChuLmxhYmVsKXtjYXNlIDA6cmV0dXJuIGU9TSgnLmludHJvanMtaGludFtkYXRhLXN0ZXA9XCInLmNvbmNhdChvLCdcIl0nKSlbMF0sWSgpLGUmJnUoZSxcImludHJvanMtaGlkZWhpbnRcIiksYyh0Ll9oaW50Q2xvc2VDYWxsYmFjayk/WzQsdC5faGludENsb3NlQ2FsbGJhY2suY2FsbCh0LG8pXTpbMywyXTtjYXNlIDE6bi5zZW50KCksbi5sYWJlbD0yO2Nhc2UgMjpyZXR1cm5bMl19fSkpfSkpfWZ1bmN0aW9uIEYodCl7cmV0dXJuIGUodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3ZhciBlLG8saSxyLHM7cmV0dXJuIG4odGhpcywoZnVuY3Rpb24obil7c3dpdGNoKG4ubGFiZWwpe2Nhc2UgMDplPU0oXCIuaW50cm9qcy1oaW50XCIpLG89MCxpPWUsbi5sYWJlbD0xO2Nhc2UgMTpyZXR1cm4gbzxpLmxlbmd0aD8ocj1pW29dLChzPXIuZ2V0QXR0cmlidXRlKFwiZGF0YS1zdGVwXCIpKT9bNCxEKHQscGFyc2VJbnQocywxMCkpXTpbMywzXSk6WzMsNF07Y2FzZSAyOm4uc2VudCgpLG4ubGFiZWw9MztjYXNlIDM6cmV0dXJuIG8rKyxbMywxXTtjYXNlIDQ6cmV0dXJuWzJdfX0pKX0pKX1mdW5jdGlvbiBWKHQpe3JldHVybiBlKHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXt2YXIgZSxvLGkscixzO3JldHVybiBuKHRoaXMsKGZ1bmN0aW9uKG4pe3N3aXRjaChuLmxhYmVsKXtjYXNlIDA6aWYoIShlPU0oXCIuaW50cm9qcy1oaW50XCIpKXx8IWUubGVuZ3RoKXJldHVyblszLDFdO2ZvcihvPTAsaT1lO288aS5sZW5ndGg7bysrKXI9aVtvXSwocz1yLmdldEF0dHJpYnV0ZShcImRhdGEtc3RlcFwiKSkmJnoocGFyc2VJbnQocywxMCkpO3JldHVyblszLDNdO2Nhc2UgMTpyZXR1cm5bNCwkKHQsdC5fdGFyZ2V0RWxlbWVudCldO2Nhc2UgMjpuLnNlbnQoKSxuLmxhYmVsPTM7Y2FzZSAzOnJldHVyblsyXX19KSl9KSl9ZnVuY3Rpb24geih0KXt2YXIgZT1NKCcuaW50cm9qcy1oaW50W2RhdGEtc3RlcD1cIicuY29uY2F0KHQsJ1wiXScpKVswXTtlJiZ2KGUsL2ludHJvanMtaGlkZWhpbnQvZyl9ZnVuY3Rpb24gRyh0KXt2YXIgZT1NKCcuaW50cm9qcy1oaW50W2RhdGEtc3RlcD1cIicuY29uY2F0KHQsJ1wiXScpKVswXTtlJiZlLnBhcmVudE5vZGUmJmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKX1mdW5jdGlvbiBXKHQpe3JldHVybiBlKHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXt2YXIgZSxvLGkscixzLGEscDtyZXR1cm4gbih0aGlzLChmdW5jdGlvbihuKXtzd2l0Y2gobi5sYWJlbCl7Y2FzZSAwOmZvcihudWxsPT09KGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnRyb2pzLWhpbnRzXCIpKSYmKGU9eChcImRpdlwiLHtjbGFzc05hbWU6XCJpbnRyb2pzLWhpbnRzXCJ9KSksbz1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24obil7dmFyIG89bnx8d2luZG93LmV2ZW50O28mJm8uc3RvcFByb3BhZ2F0aW9uJiZvLnN0b3BQcm9wYWdhdGlvbigpLG8mJm51bGwhPT1vLmNhbmNlbEJ1YmJsZSYmKG8uY2FuY2VsQnViYmxlPSEwKSxYKHQsZSl9fSxpPTA7aTx0Ll9oaW50SXRlbXMubGVuZ3RoO2krKyl7aWYocj10Ll9oaW50SXRlbXNbaV0sZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmludHJvanMtaGludFtkYXRhLXN0ZXA9XCInLmNvbmNhdChpLCdcIl0nKSkpcmV0dXJuWzJdO2Iocz14KFwiYVwiLHtjbGFzc05hbWU6XCJpbnRyb2pzLWhpbnRcIn0pKSxzLm9uY2xpY2s9byhpKSxyLmhpbnRBbmltYXRpb258fHUocyxcImludHJvanMtaGludC1uby1hbmltXCIpLG0oci5lbGVtZW50KSYmdShzLFwiaW50cm9qcy1maXhlZGhpbnRcIiksYT14KFwiZGl2XCIse2NsYXNzTmFtZTpcImludHJvanMtaGludC1kb3RcIn0pLHA9eChcImRpdlwiLHtjbGFzc05hbWU6XCJpbnRyb2pzLWhpbnQtcHVsc2VcIn0pLHMuYXBwZW5kQ2hpbGQoYSkscy5hcHBlbmRDaGlsZChwKSxzLnNldEF0dHJpYnV0ZShcImRhdGEtc3RlcFwiLGkudG9TdHJpbmcoKSksci5oaW50VGFyZ2V0RWxlbWVudD1yLmVsZW1lbnQsci5lbGVtZW50PXMsUShyLmhpbnRQb3NpdGlvbixzLHIuaGludFRhcmdldEVsZW1lbnQpLGUuYXBwZW5kQ2hpbGQocyl9cmV0dXJuIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZSksYyh0Ll9oaW50c0FkZGVkQ2FsbGJhY2spP1s0LHQuX2hpbnRzQWRkZWRDYWxsYmFjay5jYWxsKHQpXTpbMywyXTtjYXNlIDE6bi5zZW50KCksbi5sYWJlbD0yO2Nhc2UgMjpyZXR1cm4gdC5fb3B0aW9ucy5oaW50QXV0b1JlZnJlc2hJbnRlcnZhbD49MCYmKHQuX2hpbnRzQXV0b1JlZnJlc2hGdW5jdGlvbj0oaD1mdW5jdGlvbigpe3JldHVybiBVKHQpfSxkPXQuX29wdGlvbnMuaGludEF1dG9SZWZyZXNoSW50ZXJ2YWwsZnVuY3Rpb24oKXtmb3IodmFyIHQ9W10sZT0wO2U8YXJndW1lbnRzLmxlbmd0aDtlKyspdFtlXT1hcmd1bWVudHNbZV07d2luZG93LmNsZWFyVGltZW91dChmKSxmPXdpbmRvdy5zZXRUaW1lb3V0KChmdW5jdGlvbigpe2godCl9KSxkKX0pLGwub24od2luZG93LFwic2Nyb2xsXCIsdC5faGludHNBdXRvUmVmcmVzaEZ1bmN0aW9uLHQsITApKSxbMl19dmFyIGgsZCxmfSkpfSkpfWZ1bmN0aW9uIFEodCxlLG4pe2lmKHZvaWQgMCE9PW4pe3ZhciBvPWcobiksaT0yMCxyPTIwO3N3aXRjaCh0KXtkZWZhdWx0OmNhc2VcInRvcC1sZWZ0XCI6ZS5zdHlsZS5sZWZ0PVwiXCIuY29uY2F0KG8ubGVmdCxcInB4XCIpLGUuc3R5bGUudG9wPVwiXCIuY29uY2F0KG8udG9wLFwicHhcIik7YnJlYWs7Y2FzZVwidG9wLXJpZ2h0XCI6ZS5zdHlsZS5sZWZ0PVwiXCIuY29uY2F0KG8ubGVmdCtvLndpZHRoLWksXCJweFwiKSxlLnN0eWxlLnRvcD1cIlwiLmNvbmNhdChvLnRvcCxcInB4XCIpO2JyZWFrO2Nhc2VcImJvdHRvbS1sZWZ0XCI6ZS5zdHlsZS5sZWZ0PVwiXCIuY29uY2F0KG8ubGVmdCxcInB4XCIpLGUuc3R5bGUudG9wPVwiXCIuY29uY2F0KG8udG9wK28uaGVpZ2h0LXIsXCJweFwiKTticmVhaztjYXNlXCJib3R0b20tcmlnaHRcIjplLnN0eWxlLmxlZnQ9XCJcIi5jb25jYXQoby5sZWZ0K28ud2lkdGgtaSxcInB4XCIpLGUuc3R5bGUudG9wPVwiXCIuY29uY2F0KG8udG9wK28uaGVpZ2h0LXIsXCJweFwiKTticmVhaztjYXNlXCJtaWRkbGUtbGVmdFwiOmUuc3R5bGUubGVmdD1cIlwiLmNvbmNhdChvLmxlZnQsXCJweFwiKSxlLnN0eWxlLnRvcD1cIlwiLmNvbmNhdChvLnRvcCsoby5oZWlnaHQtcikvMixcInB4XCIpO2JyZWFrO2Nhc2VcIm1pZGRsZS1yaWdodFwiOmUuc3R5bGUubGVmdD1cIlwiLmNvbmNhdChvLmxlZnQrby53aWR0aC1pLFwicHhcIiksZS5zdHlsZS50b3A9XCJcIi5jb25jYXQoby50b3ArKG8uaGVpZ2h0LXIpLzIsXCJweFwiKTticmVhaztjYXNlXCJtaWRkbGUtbWlkZGxlXCI6ZS5zdHlsZS5sZWZ0PVwiXCIuY29uY2F0KG8ubGVmdCsoby53aWR0aC1pKS8yLFwicHhcIiksZS5zdHlsZS50b3A9XCJcIi5jb25jYXQoby50b3ArKG8uaGVpZ2h0LXIpLzIsXCJweFwiKTticmVhaztjYXNlXCJib3R0b20tbWlkZGxlXCI6ZS5zdHlsZS5sZWZ0PVwiXCIuY29uY2F0KG8ubGVmdCsoby53aWR0aC1pKS8yLFwicHhcIiksZS5zdHlsZS50b3A9XCJcIi5jb25jYXQoby50b3Arby5oZWlnaHQtcixcInB4XCIpO2JyZWFrO2Nhc2VcInRvcC1taWRkbGVcIjplLnN0eWxlLmxlZnQ9XCJcIi5jb25jYXQoby5sZWZ0KyhvLndpZHRoLWkpLzIsXCJweFwiKSxlLnN0eWxlLnRvcD1cIlwiLmNvbmNhdChvLnRvcCxcInB4XCIpfX19ZnVuY3Rpb24gWCh0LG8pe3JldHVybiBlKHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXt2YXIgZSxpLHIscyxhLGwsdSxwLGgsZCxmO3JldHVybiBuKHRoaXMsKGZ1bmN0aW9uKG4pe3N3aXRjaChuLmxhYmVsKXtjYXNlIDA6cmV0dXJuIGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmludHJvanMtaGludFtkYXRhLXN0ZXA9XCInLmNvbmNhdChvLCdcIl0nKSksaT10Ll9oaW50SXRlbXNbb10sYyh0Ll9oaW50Q2xpY2tDYWxsYmFjayk/WzQsdC5faGludENsaWNrQ2FsbGJhY2suY2FsbCh0LGUsaSxvKV06WzMsMl07Y2FzZSAxOm4uc2VudCgpLG4ubGFiZWw9MjtjYXNlIDI6cmV0dXJuIHZvaWQgMCE9PShyPVkoKSkmJnBhcnNlSW50KHIsMTApPT09b3x8KHM9eChcImRpdlwiLHtjbGFzc05hbWU6XCJpbnRyb2pzLXRvb2x0aXBcIn0pLGE9eChcImRpdlwiKSxsPXgoXCJkaXZcIiksdT14KFwiZGl2XCIpLHMub25jbGljaz1mdW5jdGlvbih0KXt0LnN0b3BQcm9wYWdhdGlvbj90LnN0b3BQcm9wYWdhdGlvbigpOnQuY2FuY2VsQnViYmxlPSEwfSxhLmNsYXNzTmFtZT1cImludHJvanMtdG9vbHRpcHRleHRcIiwocD14KFwicFwiKSkuaW5uZXJIVE1MPWkuaGludHx8XCJcIixhLmFwcGVuZENoaWxkKHApLHQuX29wdGlvbnMuaGludFNob3dCdXR0b24mJigoaD14KFwiYVwiKSkuY2xhc3NOYW1lPXQuX29wdGlvbnMuYnV0dG9uQ2xhc3MsaC5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsXCJidXR0b25cIiksaC5pbm5lckhUTUw9dC5fb3B0aW9ucy5oaW50QnV0dG9uTGFiZWwsaC5vbmNsaWNrPWZ1bmN0aW9uKCl7cmV0dXJuIEQodCxvKX0sYS5hcHBlbmRDaGlsZChoKSksbC5jbGFzc05hbWU9XCJpbnRyb2pzLWFycm93XCIscy5hcHBlbmRDaGlsZChsKSxzLmFwcGVuZENoaWxkKGEpLGQ9ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN0ZXBcIil8fFwiXCIsdC5fY3VycmVudFN0ZXA9cGFyc2VJbnQoZCwxMCksZj10Ll9oaW50SXRlbXNbdC5fY3VycmVudFN0ZXBdLHUuY2xhc3NOYW1lPVwiaW50cm9qcy10b29sdGlwUmVmZXJlbmNlTGF5ZXIgaW50cm9qcy1oaW50UmVmZXJlbmNlXCIsdS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0ZXBcIixkKSx3KHQsZix1KSx1LmFwcGVuZENoaWxkKHMpLGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodSksaih0LGYscyxsLCEwKSksWzJdfX0pKX0pKX1mdW5jdGlvbiBZKCl7dmFyIHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnRyb2pzLWhpbnRSZWZlcmVuY2VcIik7aWYodCYmdC5wYXJlbnROb2RlKXt2YXIgZT10LmdldEF0dHJpYnV0ZShcImRhdGEtc3RlcFwiKTtpZighZSlyZXR1cm47cmV0dXJuIHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0KSxlfX1mdW5jdGlvbiAkKHQsbyl7cmV0dXJuIGUodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3ZhciBlLGkscixzLGEsYyx1LHAsaCxkO3JldHVybiBuKHRoaXMsKGZ1bmN0aW9uKG4pe3N3aXRjaChuLmxhYmVsKXtjYXNlIDA6aWYodC5faGludEl0ZW1zPVtdLHQuX29wdGlvbnMuaGludHMmJnQuX29wdGlvbnMuaGludHMubGVuZ3RoPjApZm9yKGU9MCxpPXQuX29wdGlvbnMuaGludHM7ZTxpLmxlbmd0aDtlKyspcj1pW2VdLFwic3RyaW5nXCI9PXR5cGVvZihzPU8ocikpLmVsZW1lbnQmJihzLmVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzLmVsZW1lbnQpKSxzLmhpbnRQb3NpdGlvbj1zLmhpbnRQb3NpdGlvbnx8dC5fb3B0aW9ucy5oaW50UG9zaXRpb24scy5oaW50QW5pbWF0aW9uPXMuaGludEFuaW1hdGlvbnx8dC5fb3B0aW9ucy5oaW50QW5pbWF0aW9uLG51bGwhPT1zLmVsZW1lbnQmJnQuX2hpbnRJdGVtcy5wdXNoKHMpO2Vsc2V7aWYoIShhPUFycmF5LmZyb20oby5xdWVyeVNlbGVjdG9yQWxsKFwiKltkYXRhLWhpbnRdXCIpKSl8fCFhLmxlbmd0aClyZXR1cm5bMiwhMV07Zm9yKGM9MCx1PWE7Yzx1Lmxlbmd0aDtjKyspcD11W2NdLGg9cC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhpbnQtYW5pbWF0aW9uXCIpLGQ9dC5fb3B0aW9ucy5oaW50QW5pbWF0aW9uLGgmJihkPVwidHJ1ZVwiPT09aCksdC5faGludEl0ZW1zLnB1c2goe2VsZW1lbnQ6cCxoaW50OnAuZ2V0QXR0cmlidXRlKFwiZGF0YS1oaW50XCIpfHxcIlwiLGhpbnRQb3NpdGlvbjpwLmdldEF0dHJpYnV0ZShcImRhdGEtaGludC1wb3NpdGlvblwiKXx8dC5fb3B0aW9ucy5oaW50UG9zaXRpb24saGludEFuaW1hdGlvbjpkLHRvb2x0aXBDbGFzczpwLmdldEF0dHJpYnV0ZShcImRhdGEtdG9vbHRpcC1jbGFzc1wiKXx8dm9pZCAwLHBvc2l0aW9uOnAuZ2V0QXR0cmlidXRlKFwiZGF0YS1wb3NpdGlvblwiKXx8dC5fb3B0aW9ucy50b29sdGlwUG9zaXRpb259KX1yZXR1cm5bNCxXKHQpXTtjYXNlIDE6cmV0dXJuIG4uc2VudCgpLGwub24oZG9jdW1lbnQsXCJjbGlja1wiLFksdCwhMSksbC5vbih3aW5kb3csXCJyZXNpemVcIixVLHQsITApLFsyLCEwXX19KSl9KSl9ZnVuY3Rpb24gVSh0KXtmb3IodmFyIGU9MCxuPXQuX2hpbnRJdGVtcztlPG4ubGVuZ3RoO2UrKyl7dmFyIG89bltlXSxpPW8uaGludFRhcmdldEVsZW1lbnQ7UShvLmhpbnRQb3NpdGlvbixvLmVsZW1lbnQsaSl9fWZ1bmN0aW9uIFoodCxlKXt2YXIgbj1BcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcIipbZGF0YS1pbnRyb11cIikpLG89W107aWYodC5fb3B0aW9ucy5zdGVwcyYmdC5fb3B0aW9ucy5zdGVwcy5sZW5ndGgpZm9yKHZhciBpPTAscj10Ll9vcHRpb25zLnN0ZXBzO2k8ci5sZW5ndGg7aSsrKXt2YXIgcz1PKGg9cltpXSk7aWYocy5zdGVwPW8ubGVuZ3RoKzEscy50aXRsZT1zLnRpdGxlfHxcIlwiLFwic3RyaW5nXCI9PXR5cGVvZiBzLmVsZW1lbnQmJihzLmVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzLmVsZW1lbnQpfHx2b2lkIDApLHZvaWQgMD09PXMuZWxlbWVudHx8bnVsbD09PXMuZWxlbWVudCl7dmFyIGE9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnRyb2pzRmxvYXRpbmdFbGVtZW50XCIpO251bGw9PT1hJiYoYT14KFwiZGl2XCIse2NsYXNzTmFtZTpcImludHJvanNGbG9hdGluZ0VsZW1lbnRcIn0pLGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSkpLHMuZWxlbWVudD1hLHMucG9zaXRpb249XCJmbG9hdGluZ1wifXMucG9zaXRpb249cy5wb3NpdGlvbnx8dC5fb3B0aW9ucy50b29sdGlwUG9zaXRpb24scy5zY3JvbGxUbz1zLnNjcm9sbFRvfHx0Ll9vcHRpb25zLnNjcm9sbFRvLHZvaWQgMD09PXMuZGlzYWJsZUludGVyYWN0aW9uJiYocy5kaXNhYmxlSW50ZXJhY3Rpb249dC5fb3B0aW9ucy5kaXNhYmxlSW50ZXJhY3Rpb24pLG51bGwhPT1zLmVsZW1lbnQmJm8ucHVzaChzKX1lbHNle3ZhciBsPXZvaWQgMDtpZihuLmxlbmd0aDwxKXJldHVybltdO2Zvcih2YXIgYz0wLHU9bjtjPHUubGVuZ3RoO2MrKyl7dmFyIHA9dVtjXTtpZigoIXQuX29wdGlvbnMuZ3JvdXB8fHAuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbnRyby1ncm91cFwiKT09PXQuX29wdGlvbnMuZ3JvdXApJiZcIm5vbmVcIiE9PXAuc3R5bGUuZGlzcGxheSl7dmFyIGg9cGFyc2VJbnQocC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN0ZXBcIil8fFwiXCIsMTApO2w9dC5fb3B0aW9ucy5kaXNhYmxlSW50ZXJhY3Rpb24scC5oYXNBdHRyaWJ1dGUoXCJkYXRhLWRpc2FibGUtaW50ZXJhY3Rpb25cIikmJihsPSEhcC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWRpc2FibGUtaW50ZXJhY3Rpb25cIikpLGg+MCYmKG9baC0xXT17c3RlcDpoLGVsZW1lbnQ6cCx0aXRsZTpwLmdldEF0dHJpYnV0ZShcImRhdGEtdGl0bGVcIil8fFwiXCIsaW50cm86cC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWludHJvXCIpfHxcIlwiLHRvb2x0aXBDbGFzczpwLmdldEF0dHJpYnV0ZShcImRhdGEtdG9vbHRpcC1jbGFzc1wiKXx8dm9pZCAwLGhpZ2hsaWdodENsYXNzOnAuZ2V0QXR0cmlidXRlKFwiZGF0YS1oaWdobGlnaHQtY2xhc3NcIil8fHZvaWQgMCxwb3NpdGlvbjpwLmdldEF0dHJpYnV0ZShcImRhdGEtcG9zaXRpb25cIil8fHQuX29wdGlvbnMudG9vbHRpcFBvc2l0aW9uLHNjcm9sbFRvOnAuZ2V0QXR0cmlidXRlKFwiZGF0YS1zY3JvbGwtdG9cIil8fHQuX29wdGlvbnMuc2Nyb2xsVG8sZGlzYWJsZUludGVyYWN0aW9uOmx9KX19Zm9yKHZhciBkPTAsZj0wLGI9bjtmPGIubGVuZ3RoO2YrKyl7cD1iW2ZdO2lmKCghdC5fb3B0aW9ucy5ncm91cHx8cC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWludHJvLWdyb3VwXCIpPT09dC5fb3B0aW9ucy5ncm91cCkmJm51bGw9PT1wLmdldEF0dHJpYnV0ZShcImRhdGEtc3RlcFwiKSl7Zm9yKDt2b2lkIDAhPT1vW2RdOylkKys7bD1wLmhhc0F0dHJpYnV0ZShcImRhdGEtZGlzYWJsZS1pbnRlcmFjdGlvblwiKT8hIXAuZ2V0QXR0cmlidXRlKFwiZGF0YS1kaXNhYmxlLWludGVyYWN0aW9uXCIpOnQuX29wdGlvbnMuZGlzYWJsZUludGVyYWN0aW9uLG9bZF09e2VsZW1lbnQ6cCx0aXRsZTpwLmdldEF0dHJpYnV0ZShcImRhdGEtdGl0bGVcIil8fFwiXCIsaW50cm86cC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWludHJvXCIpfHxcIlwiLHN0ZXA6ZCsxLHRvb2x0aXBDbGFzczpwLmdldEF0dHJpYnV0ZShcImRhdGEtdG9vbHRpcC1jbGFzc1wiKXx8dm9pZCAwLGhpZ2hsaWdodENsYXNzOnAuZ2V0QXR0cmlidXRlKFwiZGF0YS1oaWdobGlnaHQtY2xhc3NcIil8fHZvaWQgMCxwb3NpdGlvbjpwLmdldEF0dHJpYnV0ZShcImRhdGEtcG9zaXRpb25cIil8fHQuX29wdGlvbnMudG9vbHRpcFBvc2l0aW9uLHNjcm9sbFRvOnAuZ2V0QXR0cmlidXRlKFwiZGF0YS1zY3JvbGwtdG9cIil8fHQuX29wdGlvbnMuc2Nyb2xsVG8sZGlzYWJsZUludGVyYWN0aW9uOmx9fX19Zm9yKHZhciBtPVtdLGc9MDtnPG8ubGVuZ3RoO2crKylvW2ddJiZtLnB1c2gob1tnXSk7cmV0dXJuKG89bSkuc29ydCgoZnVuY3Rpb24odCxlKXtyZXR1cm4gdC5zdGVwLWUuc3RlcH0pKSxvfWZ1bmN0aW9uIEoodCxlKXt2YXIgbj10Ll9jdXJyZW50U3RlcDtpZihudWxsIT1uJiYtMSE9bil7dmFyIG89dC5faW50cm9JdGVtc1tuXSxpPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW50cm9qcy10b29sdGlwUmVmZXJlbmNlTGF5ZXJcIikscj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmludHJvanMtaGVscGVyTGF5ZXJcIikscz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmludHJvanMtZGlzYWJsZUludGVyYWN0aW9uXCIpO3codCxvLHIpLHcodCxvLGkpLHcodCxvLHMpLGUmJih0Ll9pbnRyb0l0ZW1zPVoodCx0Ll90YXJnZXRFbGVtZW50KSxmdW5jdGlvbih0LGUpe2lmKHQuX29wdGlvbnMuc2hvd0J1bGxldHMpe3ZhciBuPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW50cm9qcy1idWxsZXRzXCIpO24mJm4ucGFyZW50Tm9kZSYmbi5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChUKHQsZSksbil9fSh0LG8pLEkoaSxuLHQuX2ludHJvSXRlbXMubGVuZ3RoKSk7dmFyIGE9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnRyb2pzLWFycm93XCIpLGw9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnRyb2pzLXRvb2x0aXBcIik7cmV0dXJuIGwmJmEmJmoodCx0Ll9pbnRyb0l0ZW1zW25dLGwsYSksVSh0KSx0fX1mdW5jdGlvbiBLKHQpe0oodCl9ZnVuY3Rpb24gdHQodCxlKXtpZih2b2lkIDA9PT1lJiYoZT0hMSksdCYmdC5wYXJlbnRFbGVtZW50KXt2YXIgbj10LnBhcmVudEVsZW1lbnQ7ZT8oeSh0LHtvcGFjaXR5OlwiMFwifSksd2luZG93LnNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7dHJ5e24ucmVtb3ZlQ2hpbGQodCl9Y2F0Y2godCl7fX0pLDUwMCkpOm4ucmVtb3ZlQ2hpbGQodCl9fWZ1bmN0aW9uIGV0KHQsbyxpKXtyZXR1cm4gdm9pZCAwPT09aSYmKGk9ITEpLGUodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3ZhciBlLHIscyxhO3JldHVybiBuKHRoaXMsKGZ1bmN0aW9uKG4pe3N3aXRjaChuLmxhYmVsKXtjYXNlIDA6cmV0dXJuIGU9ITAsdm9pZCAwPT09dC5faW50cm9CZWZvcmVFeGl0Q2FsbGJhY2s/WzMsMl06WzQsdC5faW50cm9CZWZvcmVFeGl0Q2FsbGJhY2suY2FsbCh0LG8pXTtjYXNlIDE6ZT1uLnNlbnQoKSxuLmxhYmVsPTI7Y2FzZSAyOmlmKCFpJiYhMT09PWUpcmV0dXJuWzJdO2lmKChyPUFycmF5LmZyb20oby5xdWVyeVNlbGVjdG9yQWxsKFwiLmludHJvanMtb3ZlcmxheVwiKSkpJiZyLmxlbmd0aClmb3Iocz0wLGE9cjtzPGEubGVuZ3RoO3MrKyl0dChhW3NdKTtyZXR1cm4gdHQoby5xdWVyeVNlbGVjdG9yKFwiLmludHJvanMtaGVscGVyTGF5ZXJcIiksITApLHR0KG8ucXVlcnlTZWxlY3RvcihcIi5pbnRyb2pzLXRvb2x0aXBSZWZlcmVuY2VMYXllclwiKSksdHQoby5xdWVyeVNlbGVjdG9yKFwiLmludHJvanMtZGlzYWJsZUludGVyYWN0aW9uXCIpKSx0dChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmludHJvanNGbG9hdGluZ0VsZW1lbnRcIikpLEEoKSxsLm9mZih3aW5kb3csXCJrZXlkb3duXCIsUix0LCEwKSxsLm9mZih3aW5kb3csXCJyZXNpemVcIixLLHQsITApLGModC5faW50cm9FeGl0Q2FsbGJhY2spP1s0LHQuX2ludHJvRXhpdENhbGxiYWNrLmNhbGwodCldOlszLDRdO2Nhc2UgMzpuLnNlbnQoKSxuLmxhYmVsPTQ7Y2FzZSA0OnJldHVybiB0Ll9jdXJyZW50U3RlcD0tMSxbMl19fSkpfSkpfWZ1bmN0aW9uIG50KHQsbyl7cmV0dXJuIGUodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3ZhciBpO3JldHVybiBuKHRoaXMsKGZ1bmN0aW9uKHIpe3N3aXRjaChyLmxhYmVsKXtjYXNlIDA6cmV0dXJuIHQuaXNBY3RpdmUoKT9jKHQuX2ludHJvU3RhcnRDYWxsYmFjayk/WzQsdC5faW50cm9TdGFydENhbGxiYWNrLmNhbGwodCxvKV06WzMsMl06WzIsITFdO2Nhc2UgMTpyLnNlbnQoKSxyLmxhYmVsPTI7Y2FzZSAyOnJldHVybiAwPT09KGk9Wih0LG8pKS5sZW5ndGg/WzIsITFdOih0Ll9pbnRyb0l0ZW1zPWksZnVuY3Rpb24odCxvKXt2YXIgaT10aGlzLHI9eChcImRpdlwiLHtjbGFzc05hbWU6XCJpbnRyb2pzLW92ZXJsYXlcIn0pO3kocix7dG9wOjAsYm90dG9tOjAsbGVmdDowLHJpZ2h0OjAscG9zaXRpb246XCJmaXhlZFwifSksby5hcHBlbmRDaGlsZChyKSwhMD09PXQuX29wdGlvbnMuZXhpdE9uT3ZlcmxheUNsaWNrJiYoeShyLHtjdXJzb3I6XCJwb2ludGVyXCJ9KSxyLm9uY2xpY2s9ZnVuY3Rpb24oKXtyZXR1cm4gZShpLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKCl7cmV0dXJuIG4odGhpcywoZnVuY3Rpb24oZSl7c3dpdGNoKGUubGFiZWwpe2Nhc2UgMDpyZXR1cm5bNCxldCh0LG8pXTtjYXNlIDE6cmV0dXJuIGUuc2VudCgpLFsyXX19KSl9KSl9KX0odCxvKSxbNCxCKHQpXSk7Y2FzZSAzOnIuc2VudCgpLG8uYWRkRXZlbnRMaXN0ZW5lcix0Ll9vcHRpb25zLmtleWJvYXJkTmF2aWdhdGlvbiYmbC5vbih3aW5kb3csXCJrZXlkb3duXCIsUix0LCEwKSxsLm9uKHdpbmRvdyxcInJlc2l6ZVwiLEssdCwhMCksci5sYWJlbD00O2Nhc2UgNDpyZXR1cm5bMiwhMV19fSkpfSkpfWZ1bmN0aW9uIG90KHQsZSxuKXtyZXR1cm4gdFtlXT1uLHR9dmFyIGl0PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0KXt0aGlzLl9jdXJyZW50U3RlcD0tMSx0aGlzLl9pbnRyb0l0ZW1zPVtdLHRoaXMuX2hpbnRJdGVtcz1bXSx0aGlzLl90YXJnZXRFbGVtZW50PXQsdGhpcy5fb3B0aW9ucz17c3RlcHM6W10saGludHM6W10saXNBY3RpdmU6ITAsbmV4dExhYmVsOlwiTmV4dFwiLHByZXZMYWJlbDpcIkJhY2tcIixza2lwTGFiZWw6XCLDl1wiLGRvbmVMYWJlbDpcIkRvbmVcIixoaWRlUHJldjohMSxoaWRlTmV4dDohMSxuZXh0VG9Eb25lOiEwLHRvb2x0aXBQb3NpdGlvbjpcImJvdHRvbVwiLHRvb2x0aXBDbGFzczpcIlwiLGdyb3VwOlwiXCIsaGlnaGxpZ2h0Q2xhc3M6XCJcIixleGl0T25Fc2M6ITAsZXhpdE9uT3ZlcmxheUNsaWNrOiEwLHNob3dTdGVwTnVtYmVyczohMSxzdGVwTnVtYmVyc09mTGFiZWw6XCJvZlwiLGtleWJvYXJkTmF2aWdhdGlvbjohMCxzaG93QnV0dG9uczohMCxzaG93QnVsbGV0czohMCxzaG93UHJvZ3Jlc3M6ITEsc2Nyb2xsVG9FbGVtZW50OiEwLHNjcm9sbFRvOlwiZWxlbWVudFwiLHNjcm9sbFBhZGRpbmc6MzAsb3ZlcmxheU9wYWNpdHk6LjUsYXV0b1Bvc2l0aW9uOiEwLHBvc2l0aW9uUHJlY2VkZW5jZTpbXCJib3R0b21cIixcInRvcFwiLFwicmlnaHRcIixcImxlZnRcIl0sZGlzYWJsZUludGVyYWN0aW9uOiExLGRvbnRTaG93QWdhaW46ITEsZG9udFNob3dBZ2FpbkxhYmVsOlwiRG9uJ3Qgc2hvdyB0aGlzIGFnYWluXCIsZG9udFNob3dBZ2FpbkNvb2tpZTpcImludHJvanMtZG9udFNob3dBZ2FpblwiLGRvbnRTaG93QWdhaW5Db29raWVEYXlzOjM2NSxoZWxwZXJFbGVtZW50UGFkZGluZzoxMCxoaW50UG9zaXRpb246XCJ0b3AtbWlkZGxlXCIsaGludEJ1dHRvbkxhYmVsOlwiR290IGl0XCIsaGludFNob3dCdXR0b246ITAsaGludEF1dG9SZWZyZXNoSW50ZXJ2YWw6MTAsaGludEFuaW1hdGlvbjohMCxidXR0b25DbGFzczpcImludHJvanMtYnV0dG9uXCIscHJvZ3Jlc3NCYXJBZGRpdGlvbmFsQ2xhc3M6ITF9fXJldHVybiB0LnByb3RvdHlwZS5pc0FjdGl2ZT1mdW5jdGlvbigpe3JldHVybighdGhpcy5fb3B0aW9ucy5kb250U2hvd0FnYWlufHxcIlwiPT09KHQ9aSh0aGlzLl9vcHRpb25zLmRvbnRTaG93QWdhaW5Db29raWUpKXx8XCJ0cnVlXCIhPT10KSYmdGhpcy5fb3B0aW9ucy5pc0FjdGl2ZTt2YXIgdH0sdC5wcm90b3R5cGUuY2xvbmU9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IHQodGhpcy5fdGFyZ2V0RWxlbWVudCl9LHQucHJvdG90eXBlLnNldE9wdGlvbj1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLl9vcHRpb25zPW90KHRoaXMuX29wdGlvbnMsdCxlKSx0aGlzfSx0LnByb3RvdHlwZS5zZXRPcHRpb25zPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9vcHRpb25zPWZ1bmN0aW9uKHQsZSl7Zm9yKHZhciBuPTAsbz1PYmplY3QuZW50cmllcyhlKTtuPG8ubGVuZ3RoO24rKyl7dmFyIGk9b1tuXTt0PW90KHQsaVswXSxpWzFdKX1yZXR1cm4gdH0odGhpcy5fb3B0aW9ucyx0KSx0aGlzfSx0LnByb3RvdHlwZS5zdGFydD1mdW5jdGlvbigpe3JldHVybiBlKHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXtyZXR1cm4gbih0aGlzLChmdW5jdGlvbih0KXtzd2l0Y2godC5sYWJlbCl7Y2FzZSAwOnJldHVybls0LG50KHRoaXMsdGhpcy5fdGFyZ2V0RWxlbWVudCldO2Nhc2UgMTpyZXR1cm4gdC5zZW50KCksWzIsdGhpc119fSkpfSkpfSx0LnByb3RvdHlwZS5nb1RvU3RlcD1mdW5jdGlvbih0KXtyZXR1cm4gZSh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKCl7cmV0dXJuIG4odGhpcywoZnVuY3Rpb24oZSl7c3dpdGNoKGUubGFiZWwpe2Nhc2UgMDpyZXR1cm5bNCxQKHRoaXMsdCldO2Nhc2UgMTpyZXR1cm4gZS5zZW50KCksWzIsdGhpc119fSkpfSkpfSx0LnByb3RvdHlwZS5hZGRTdGVwPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9vcHRpb25zLnN0ZXBzfHwodGhpcy5fb3B0aW9ucy5zdGVwcz1bXSksdGhpcy5fb3B0aW9ucy5zdGVwcy5wdXNoKHQpLHRoaXN9LHQucHJvdG90eXBlLmFkZFN0ZXBzPWZ1bmN0aW9uKHQpe2lmKCF0Lmxlbmd0aClyZXR1cm4gdGhpcztmb3IodmFyIGU9MDtlPHQubGVuZ3RoO2UrKyl0aGlzLmFkZFN0ZXAodFtlXSk7cmV0dXJuIHRoaXN9LHQucHJvdG90eXBlLmdvVG9TdGVwTnVtYmVyPWZ1bmN0aW9uKHQpe3JldHVybiBlKHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXtyZXR1cm4gbih0aGlzLChmdW5jdGlvbihlKXtzd2l0Y2goZS5sYWJlbCl7Y2FzZSAwOnJldHVybls0LHEodGhpcyx0KV07Y2FzZSAxOnJldHVybiBlLnNlbnQoKSxbMix0aGlzXX19KSl9KSl9LHQucHJvdG90eXBlLm5leHRTdGVwPWZ1bmN0aW9uKCl7cmV0dXJuIGUodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3JldHVybiBuKHRoaXMsKGZ1bmN0aW9uKHQpe3N3aXRjaCh0LmxhYmVsKXtjYXNlIDA6cmV0dXJuWzQsQih0aGlzKV07Y2FzZSAxOnJldHVybiB0LnNlbnQoKSxbMix0aGlzXX19KSl9KSl9LHQucHJvdG90eXBlLnByZXZpb3VzU3RlcD1mdW5jdGlvbigpe3JldHVybiBlKHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXtyZXR1cm4gbih0aGlzLChmdW5jdGlvbih0KXtzd2l0Y2godC5sYWJlbCl7Y2FzZSAwOnJldHVybls0LEgodGhpcyldO2Nhc2UgMTpyZXR1cm4gdC5zZW50KCksWzIsdGhpc119fSkpfSkpfSx0LnByb3RvdHlwZS5jdXJyZW50U3RlcD1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9jdXJyZW50U3RlcH0sdC5wcm90b3R5cGUuZXhpdD1mdW5jdGlvbih0KXtyZXR1cm4gZSh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKCl7cmV0dXJuIG4odGhpcywoZnVuY3Rpb24oZSl7c3dpdGNoKGUubGFiZWwpe2Nhc2UgMDpyZXR1cm5bNCxldCh0aGlzLHRoaXMuX3RhcmdldEVsZW1lbnQsdCldO2Nhc2UgMTpyZXR1cm4gZS5zZW50KCksWzIsdGhpc119fSkpfSkpfSx0LnByb3RvdHlwZS5yZWZyZXNoPWZ1bmN0aW9uKHQpe3JldHVybiBKKHRoaXMsdCksdGhpc30sdC5wcm90b3R5cGUuc2V0RG9udFNob3dBZ2Fpbj1mdW5jdGlvbih0KXtyZXR1cm4gcih0aGlzLHQpLHRoaXN9LHQucHJvdG90eXBlLm9uYmVmb3JlY2hhbmdlPWZ1bmN0aW9uKHQpe2lmKCFjKHQpKXRocm93IG5ldyBFcnJvcihcIlByb3ZpZGVkIGNhbGxiYWNrIGZvciBvbmJlZm9yZWNoYW5nZSB3YXMgbm90IGEgZnVuY3Rpb25cIik7cmV0dXJuIHRoaXMuX2ludHJvQmVmb3JlQ2hhbmdlQ2FsbGJhY2s9dCx0aGlzfSx0LnByb3RvdHlwZS5vbmNoYW5nZT1mdW5jdGlvbih0KXtpZighYyh0KSl0aHJvdyBuZXcgRXJyb3IoXCJQcm92aWRlZCBjYWxsYmFjayBmb3Igb25jaGFuZ2Ugd2FzIG5vdCBhIGZ1bmN0aW9uLlwiKTtyZXR1cm4gdGhpcy5faW50cm9DaGFuZ2VDYWxsYmFjaz10LHRoaXN9LHQucHJvdG90eXBlLm9uYWZ0ZXJjaGFuZ2U9ZnVuY3Rpb24odCl7aWYoIWModCkpdGhyb3cgbmV3IEVycm9yKFwiUHJvdmlkZWQgY2FsbGJhY2sgZm9yIG9uYWZ0ZXJjaGFuZ2Ugd2FzIG5vdCBhIGZ1bmN0aW9uXCIpO3JldHVybiB0aGlzLl9pbnRyb0FmdGVyQ2hhbmdlQ2FsbGJhY2s9dCx0aGlzfSx0LnByb3RvdHlwZS5vbmNvbXBsZXRlPWZ1bmN0aW9uKHQpe2lmKCFjKHQpKXRocm93IG5ldyBFcnJvcihcIlByb3ZpZGVkIGNhbGxiYWNrIGZvciBvbmNvbXBsZXRlIHdhcyBub3QgYSBmdW5jdGlvbi5cIik7cmV0dXJuIHRoaXMuX2ludHJvQ29tcGxldGVDYWxsYmFjaz10LHRoaXN9LHQucHJvdG90eXBlLm9uaGludHNhZGRlZD1mdW5jdGlvbih0KXtpZighYyh0KSl0aHJvdyBuZXcgRXJyb3IoXCJQcm92aWRlZCBjYWxsYmFjayBmb3Igb25oaW50c2FkZGVkIHdhcyBub3QgYSBmdW5jdGlvbi5cIik7cmV0dXJuIHRoaXMuX2hpbnRzQWRkZWRDYWxsYmFjaz10LHRoaXN9LHQucHJvdG90eXBlLm9uaGludGNsaWNrPWZ1bmN0aW9uKHQpe2lmKCFjKHQpKXRocm93IG5ldyBFcnJvcihcIlByb3ZpZGVkIGNhbGxiYWNrIGZvciBvbmhpbnRjbGljayB3YXMgbm90IGEgZnVuY3Rpb24uXCIpO3JldHVybiB0aGlzLl9oaW50Q2xpY2tDYWxsYmFjaz10LHRoaXN9LHQucHJvdG90eXBlLm9uaGludGNsb3NlPWZ1bmN0aW9uKHQpe2lmKCFjKHQpKXRocm93IG5ldyBFcnJvcihcIlByb3ZpZGVkIGNhbGxiYWNrIGZvciBvbmhpbnRjbG9zZSB3YXMgbm90IGEgZnVuY3Rpb24uXCIpO3JldHVybiB0aGlzLl9oaW50Q2xvc2VDYWxsYmFjaz10LHRoaXN9LHQucHJvdG90eXBlLm9uc3RhcnQ9ZnVuY3Rpb24odCl7aWYoIWModCkpdGhyb3cgbmV3IEVycm9yKFwiUHJvdmlkZWQgY2FsbGJhY2sgZm9yIG9uc3RhcnQgd2FzIG5vdCBhIGZ1bmN0aW9uLlwiKTtyZXR1cm4gdGhpcy5faW50cm9TdGFydENhbGxiYWNrPXQsdGhpc30sdC5wcm90b3R5cGUub25leGl0PWZ1bmN0aW9uKHQpe2lmKCFjKHQpKXRocm93IG5ldyBFcnJvcihcIlByb3ZpZGVkIGNhbGxiYWNrIGZvciBvbmV4aXQgd2FzIG5vdCBhIGZ1bmN0aW9uLlwiKTtyZXR1cm4gdGhpcy5faW50cm9FeGl0Q2FsbGJhY2s9dCx0aGlzfSx0LnByb3RvdHlwZS5vbnNraXA9ZnVuY3Rpb24odCl7aWYoIWModCkpdGhyb3cgbmV3IEVycm9yKFwiUHJvdmlkZWQgY2FsbGJhY2sgZm9yIG9uc2tpcCB3YXMgbm90IGEgZnVuY3Rpb24uXCIpO3JldHVybiB0aGlzLl9pbnRyb1NraXBDYWxsYmFjaz10LHRoaXN9LHQucHJvdG90eXBlLm9uYmVmb3JlZXhpdD1mdW5jdGlvbih0KXtpZighYyh0KSl0aHJvdyBuZXcgRXJyb3IoXCJQcm92aWRlZCBjYWxsYmFjayBmb3Igb25iZWZvcmVleGl0IHdhcyBub3QgYSBmdW5jdGlvbi5cIik7cmV0dXJuIHRoaXMuX2ludHJvQmVmb3JlRXhpdENhbGxiYWNrPXQsdGhpc30sdC5wcm90b3R5cGUuYWRkSGludHM9ZnVuY3Rpb24oKXtyZXR1cm4gZSh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKCl7cmV0dXJuIG4odGhpcywoZnVuY3Rpb24odCl7c3dpdGNoKHQubGFiZWwpe2Nhc2UgMDpyZXR1cm5bNCwkKHRoaXMsdGhpcy5fdGFyZ2V0RWxlbWVudCldO2Nhc2UgMTpyZXR1cm4gdC5zZW50KCksWzIsdGhpc119fSkpfSkpfSx0LnByb3RvdHlwZS5oaWRlSGludD1mdW5jdGlvbih0KXtyZXR1cm4gZSh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKCl7cmV0dXJuIG4odGhpcywoZnVuY3Rpb24oZSl7c3dpdGNoKGUubGFiZWwpe2Nhc2UgMDpyZXR1cm5bNCxEKHRoaXMsdCldO2Nhc2UgMTpyZXR1cm4gZS5zZW50KCksWzIsdGhpc119fSkpfSkpfSx0LnByb3RvdHlwZS5oaWRlSGludHM9ZnVuY3Rpb24oKXtyZXR1cm4gZSh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKCl7cmV0dXJuIG4odGhpcywoZnVuY3Rpb24odCl7c3dpdGNoKHQubGFiZWwpe2Nhc2UgMDpyZXR1cm5bNCxGKHRoaXMpXTtjYXNlIDE6cmV0dXJuIHQuc2VudCgpLFsyLHRoaXNdfX0pKX0pKX0sdC5wcm90b3R5cGUuc2hvd0hpbnQ9ZnVuY3Rpb24odCl7cmV0dXJuIHoodCksdGhpc30sdC5wcm90b3R5cGUuc2hvd0hpbnRzPWZ1bmN0aW9uKCl7cmV0dXJuIGUodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3JldHVybiBuKHRoaXMsKGZ1bmN0aW9uKHQpe3N3aXRjaCh0LmxhYmVsKXtjYXNlIDA6cmV0dXJuWzQsVih0aGlzKV07Y2FzZSAxOnJldHVybiB0LnNlbnQoKSxbMix0aGlzXX19KSl9KSl9LHQucHJvdG90eXBlLnJlbW92ZUhpbnRzPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0wLG49TShcIi5pbnRyb2pzLWhpbnRcIik7ZTxuLmxlbmd0aDtlKyspe3ZhciBvPW5bZV0uZ2V0QXR0cmlidXRlKFwiZGF0YS1zdGVwXCIpO28mJkcocGFyc2VJbnQobywxMCkpfWwub2ZmKGRvY3VtZW50LFwiY2xpY2tcIixZLHQsITEpLGwub2ZmKHdpbmRvdyxcInJlc2l6ZVwiLFUsdCwhMCksdC5faGludHNBdXRvUmVmcmVzaEZ1bmN0aW9uJiZsLm9mZih3aW5kb3csXCJzY3JvbGxcIix0Ll9oaW50c0F1dG9SZWZyZXNoRnVuY3Rpb24sdCwhMCl9KHRoaXMpLHRoaXN9LHQucHJvdG90eXBlLnJlbW92ZUhpbnQ9ZnVuY3Rpb24odCl7cmV0dXJuIEcodCksdGhpc30sdC5wcm90b3R5cGUuc2hvd0hpbnREaWFsb2c9ZnVuY3Rpb24odCl7cmV0dXJuIGUodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3JldHVybiBuKHRoaXMsKGZ1bmN0aW9uKGUpe3N3aXRjaChlLmxhYmVsKXtjYXNlIDA6cmV0dXJuWzQsWCh0aGlzLHQpXTtjYXNlIDE6cmV0dXJuIGUuc2VudCgpLFsyLHRoaXNdfX0pKX0pKX0sdH0oKSxydD1mdW5jdGlvbiBlKG4pe3ZhciBvO2lmKFwib2JqZWN0XCI9PT10KG4pKW89bmV3IGl0KG4pO2Vsc2UgaWYoXCJzdHJpbmdcIj09dHlwZW9mIG4pe3ZhciBpPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iobik7aWYoIWkpdGhyb3cgbmV3IEVycm9yKFwiVGhlcmUgaXMgbm8gZWxlbWVudCB3aXRoIGdpdmVuIHNlbGVjdG9yLlwiKTtvPW5ldyBpdChpKX1lbHNlIG89bmV3IGl0KGRvY3VtZW50LmJvZHkpO3JldHVybiBlLmluc3RhbmNlc1thKG8sXCJpbnRyb2pzLWluc3RhbmNlXCIpXT1vLG99O3J0LnZlcnNpb249XCI3LjIuMFwiLHJ0Lmluc3RhbmNlcz17fTtleHBvcnR7cnQgYXMgZGVmYXVsdH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbnRyby5tb2R1bGUuanMubWFwXG4iLCJpbXBvcnQgR3JvdXBPZkdyb3VwcyBmcm9tIFwiLi9Hcm91cE9mR3JvdXBzXCI7XG5jbGFzcyBBcmNhZGUgZXh0ZW5kcyBHcm91cE9mR3JvdXBzIHtcbiAgICBjb25zdHJ1Y3RvcihzZXNzaW9uTWludXRlcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnNlc3Npb25NUyA9IHNlc3Npb25NaW51dGVzICogNjAgKiAxMDAwO1xuICAgIH1cbiAgICA7XG59XG47XG5jb25zdCBBcmNhZGVJbnN0YW5jZSA9IG5ldyBBcmNhZGUoNSk7XG5leHBvcnQgZGVmYXVsdCBBcmNhZGVJbnN0YW5jZTtcbiIsImltcG9ydCBQUyBmcm9tIFwiLi9QdWJTdWJcIjtcbmltcG9ydCBnZXRDb2lucyBmcm9tIFwiLi4vc3RvcmFnZS9nZXRDb2luc1wiO1xuaW1wb3J0IFNpbmdsZXRvbiBmcm9tIFwiLi9TaW5nbGV0b25cIjtcbmltcG9ydCBQU0UgZnJvbSBcIi4uL2VudW1zL1B1YlN1YkV2ZW50c1wiO1xuY2xhc3MgQmFuayBleHRlbmRzIFNpbmdsZXRvbiB7XG4gICAgY29uc3RydWN0b3IoY29pbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jb2lucyA9IGNvaW5zO1xuICAgIH1cbiAgICA7XG4gICAgZGVwb3NpdChhbW91bnQpIHtcbiAgICAgICAgaWYgKGFtb3VudCA8IDApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJWYWx1ZSBlcnJvcjogYW1vdW50IHRvIGRlcG9zaXQgY2FuIG5vdCBiZSBuZWdhdGl2ZSFcIik7XG4gICAgICAgIHRoaXMuY29pbnMgKz0gYW1vdW50O1xuICAgICAgICB0aGlzLmRlcG9zaXRNZXNzYWdlKGFtb3VudCk7XG4gICAgICAgIHRoaXMuc3RvcmUoKTtcbiAgICB9XG4gICAgO1xuICAgIGRlZHVjdChhbW91bnQpIHtcbiAgICAgICAgY29uc3QgZGVkdWN0aWJsZSA9ICh0aGlzLmNvaW5zIC0gYW1vdW50KSA+PSAwO1xuICAgICAgICBpZiAoZGVkdWN0aWJsZSkge1xuICAgICAgICAgICAgdGhpcy5jb2lucyAtPSBhbW91bnQ7XG4gICAgICAgICAgICB0aGlzLmRlZHVjdE1lc3NhZ2UoYW1vdW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudW5kZXR1Y3RpYmxlTWVzc2FnZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RvcmUoKTtcbiAgICAgICAgcmV0dXJuIGRlZHVjdGlibGU7XG4gICAgfVxuICAgIDtcbiAgICBzaG93QmFsYW5jZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29pbnM7XG4gICAgfVxuICAgIDtcbiAgICBkZXBvc2l0TWVzc2FnZShhbW91bnQpIHtcbiAgICAgICAgUFMucHVibGlzaChQU0UuUG9zdE1lc3NhZ2UsIGBZYXkhIFlvdSBlYXJuZWQgJHthbW91bnR9IGNvaW5zLiBUb3RhbCBjb2luczogICR7dGhpcy5zaG93QmFsYW5jZSgpfWApO1xuICAgIH1cbiAgICA7XG4gICAgZGVkdWN0TWVzc2FnZShhbW91bnQpIHtcbiAgICAgICAgUFMucHVibGlzaChQU0UuUG9zdE1lc3NhZ2UsIGBZb3UgbG9zdCAke2Ftb3VudH0gY29pbnMuIEJhbGFuY2U6ICR7dGhpcy5zaG93QmFsYW5jZSgpfWApO1xuICAgIH1cbiAgICA7XG4gICAgdW5kZXR1Y3RpYmxlTWVzc2FnZSgpIHtcbiAgICAgICAgUFMucHVibGlzaChQU0UuUG9zdE1lc3NhZ2UsIFwiRXJyb3IhIENvaW5zIHRvIGZldyB0byBzdWJ0cmFjdCBmcm9tLlwiKTtcbiAgICB9XG4gICAgO1xuICAgIHN0b3JlKCkge1xuICAgICAgICBQUy5wdWJsaXNoKFBTRS5QdXRDb2lucywgdGhpcy5jb2lucyk7XG4gICAgfVxuICAgIDtcbn1cbjtcbmNvbnN0IEJhbmtJbnN0YW5jZSA9IG5ldyBCYW5rKGdldENvaW5zKCkpO1xuZXhwb3J0IGRlZmF1bHQgQmFua0luc3RhbmNlO1xuIiwiaW1wb3J0IEdyb3VwT2ZHcm91cHMgZnJvbSBcIi4vR3JvdXBPZkdyb3Vwc1wiO1xuY2xhc3MgQ2F0ZWdvcmllcyBleHRlbmRzIEdyb3VwT2ZHcm91cHMge1xufVxuY29uc3QgQ2F0ZWdvcmllc0luc3RhbmNlID0gbmV3IENhdGVnb3JpZXMoKTtcbmV4cG9ydCBkZWZhdWx0IENhdGVnb3JpZXNJbnN0YW5jZTtcbiIsImltcG9ydCBQUyBmcm9tIFwiLi9QdWJTdWJcIjtcbmltcG9ydCBDYXRlZ29yaWVzIGZyb20gXCIuL0NhdGVnb3JpZXNcIjtcbmltcG9ydCBHcm91cCBmcm9tIFwiLi9Hcm91cFwiO1xuaW1wb3J0IFByb2plY3RzSW5zdGFuY2UgZnJvbSBcIi4vUHJvamVjdHNcIjtcbmltcG9ydCBQU0UgZnJvbSBcIi4uL2VudW1zL1B1YlN1YkV2ZW50c1wiO1xuY2xhc3MgQ2F0ZWdvcnkgZXh0ZW5kcyBHcm91cCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgZmlsdGVyRnVuY3Rpb24sIGljb24pIHtcbiAgICAgICAgc3VwZXIobmFtZSwgaWNvbik7XG4gICAgICAgIHRoaXMuZmlsdGVyRnVuY3Rpb24gPSBmaWx0ZXJGdW5jdGlvbjtcbiAgICAgICAgdGhpcy51cGRhdGVDYXRlZ29yeShQcm9qZWN0c0luc3RhbmNlLmdldEFsbFRvRG9zKCkpO1xuICAgICAgICBDYXRlZ29yaWVzLmFkZCh0aGlzKTtcbiAgICAgICAgUFMucHVibGlzaChQU0UuUG9zdENhdGVnb3J5LCB0aGlzLklEKTtcbiAgICAgICAgUFMuc3Vic2NyaWJlKFBTRS5QdXRUb0RvLCB0aGlzLnVwZGF0ZUNhdGVnb3J5LmJpbmQodGhpcykpO1xuICAgICAgICBQUy5zdWJzY3JpYmUoUFNFLkRlbGV0ZVRvRG8sIHRoaXMucmVtb3ZlVG9Eby5iaW5kKHRoaXMpKTtcbiAgICAgICAgUFMuc3Vic2NyaWJlKFBTRS5EZWxldGVQcm9qZWN0LCB0aGlzLnJlbW92ZVByb2plY3QuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIDtcbiAgICB1cGRhdGVDYXRlZ29yeShuZXdUb0Rvcykge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkobmV3VG9Eb3MpKVxuICAgICAgICAgICAgbmV3VG9Eb3MgPSBbbmV3VG9Eb3NdO1xuICAgICAgICBpZiAobmV3VG9Eb3Muc29tZShudCA9PiB0aGlzLnRvRG9zLnNvbWUodCA9PiB0LklEID09PSBudC5JRCkpKVxuICAgICAgICAgICAgcmV0dXJuOyAvLyBUaGUgYWR2YW50YWdlIG9mIGlkZW1wb3RlbmN5IG91dHdlaWdocyB0aGUgZGlzYWR2YW50YWdlIG9mIGFuIG4gXiAyIHRpbWUgY29tcGxleGl0eS5cbiAgICAgICAgY29uc3QgYmVmb3JlID0gdGhpcy5sKCk7XG4gICAgICAgIHRoaXMudG9Eb3MgPSB0aGlzLmZpbHRlckZ1bmN0aW9uKFsuLi50aGlzLnRvRG9zLCAuLi5uZXdUb0Rvc10pO1xuICAgICAgICB0aGlzLnNvcnQoKTtcbiAgICAgICAgdGhpcy51cGRhdGVDb3VudGVyKGJlZm9yZSwgdGhpcy5sKCkpO1xuICAgIH1cbiAgICA7XG4gICAgcmVtb3ZlVG9Ebyh0b0RvVG9EZWxldGVJRCkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMudG9Eb3MuZmluZEluZGV4KHQgPT4gdC5JRCA9PSB0b0RvVG9EZWxldGVJRCk7XG4gICAgICAgIGlmIChpbmRleCA8IDApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMudG9Eb3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdGhpcy51cGRhdGVDb3VudGVyKDEsIDApO1xuICAgIH1cbiAgICA7XG4gICAgcmVtb3ZlUHJvamVjdChkZWxldGlvbklkKSB7XG4gICAgICAgIGNvbnN0IGJlZm9yZSA9IHRoaXMubCgpO1xuICAgICAgICB0aGlzLnRvRG9zID0gdGhpcy50b0Rvcy5maWx0ZXIodG9kbyA9PiB0b2RvLnBhcmVudElEICE9PSBkZWxldGlvbklkKTtcbiAgICAgICAgdGhpcy51cGRhdGVDb3VudGVyKGJlZm9yZSwgdGhpcy5sKCkpO1xuICAgIH1cbiAgICA7XG4gICAgbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9Eb3MubGVuZ3RoOyAvLyBJJ20gdG9vIGxhenkgdG8gcmVhZC90eXBlIHRoaXMgb3ZlciBhbmQgb3ZlciBhZ2Fpbi5cbiAgICB9XG4gICAgO1xuICAgIHVwZGF0ZUNvdW50ZXIoYmVmb3JlQ291bnQsIGFmdGVyQ291bnQpIHtcbiAgICAgICAgaWYgKGJlZm9yZUNvdW50ICE9PSBhZnRlckNvdW50KSB7XG4gICAgICAgICAgICBQUy5wdWJsaXNoKFBTRS5Qb3N0R3JvdXBDb3VudCwge1xuICAgICAgICAgICAgICAgIGdyb3VwSUQ6IHRoaXMuSUQsXG4gICAgICAgICAgICAgICAgaW50ZWdlclRvQWRkOiBhZnRlckNvdW50IC0gYmVmb3JlQ291bnRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIDtcbiAgICBzb3J0KCkge1xuICAgICAgICB0aGlzLnRvRG9zID0gdGhpcy50b0Rvcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBpZiAoYS5wcmlvcml0eSA9PT0gYi5wcmlvcml0eSkge1xuICAgICAgICAgICAgICAgIC8vIHNvcnQgYnkgZGF0ZSAoZWFybGllc3QgdG8gbGF0ZXN0KVxuICAgICAgICAgICAgICAgIHJldHVybiBhLmR1ZURhdGUuZ2V0VGltZSgpIC0gYi5kdWVEYXRlLmdldFRpbWUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIC8vIHNvcnQgYnkgcHJpb3JpdHkgKGhpZ2ggdG8gbG93KVxuICAgICAgICAgICAgcmV0dXJuIGIucHJpb3JpdHkgLSBhLnByaW9yaXR5O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgO1xufVxuO1xuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnk7XG4iLCJpbXBvcnQgZW5kc1dpdGhJbWFnZUZpbGVFeHRlbnNpb24gZnJvbSBcIi4uL3JlZ2V4L2VuZHNXaXRoSW1hZ2VGaWxlRXh0ZW5zaW9uXCI7XG5pbXBvcnQgc3RhcnRzV2l0aEhUVFBTIGZyb20gXCIuLi9yZWdleC9zdGFydHNXaXRoSFRUUFNcIjtcbmltcG9ydCBBcmNhZGUgZnJvbSBcIi4vQXJjYWRlXCI7XG5pbXBvcnQgSURlZCBmcm9tIFwiLi9JRGVkXCI7XG5jbGFzcyBHYW1lIGV4dGVuZHMgSURlZCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgdGh1bWJuYWlsVVJMLCBsaW5rLCBjb3N0KSB7XG4gICAgICAgIGlmICghZW5kc1dpdGhJbWFnZUZpbGVFeHRlbnNpb24udGVzdCh0aHVtYm5haWxVUkwpKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidGh1bWJuYWlsVVJMIG11c3QgZW5kIHdpdGggaW1hZ2UgZmlsZSBleHRlbnNpb24uXCIpO1xuICAgICAgICBpZiAoIXN0YXJ0c1dpdGhIVFRQUy50ZXN0KGxpbmspKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibGluayBtdXN0IHN0YXJ0IHdpdGggJ2h0dHBzOi8vJy5cIik7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudGh1bWJuYWlsVVJMID0gdGh1bWJuYWlsVVJMO1xuICAgICAgICB0aGlzLmxpbmsgPSBsaW5rO1xuICAgICAgICB0aGlzLmNvc3QgPSBjb3N0O1xuICAgICAgICBBcmNhZGUuYWRkKHRoaXMpO1xuICAgIH1cbiAgICA7XG59XG47XG5leHBvcnQgZGVmYXVsdCBHYW1lO1xuIiwiaW1wb3J0IElEZWQgZnJvbSBcIi4vSURlZFwiO1xuY2xhc3MgR3JvdXAgZXh0ZW5kcyBJRGVkIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBpY29uID0gXCJiaS1jYWxlbmRhci1maWxsXCIsIHRvRG9zID0gW10sIGlkKSB7XG4gICAgICAgIHN1cGVyKGlkKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5pY29uID0gaWNvbjtcbiAgICAgICAgdGhpcy50b0RvcyA9IHRvRG9zO1xuICAgIH1cbiAgICA7XG59XG47XG5leHBvcnQgZGVmYXVsdCBHcm91cDtcbiIsImltcG9ydCBTaW5nbGV0b24gZnJvbSBcIi4vU2luZ2xldG9uXCI7XG5jbGFzcyBHcm91cE9mR3JvdXBzIGV4dGVuZHMgU2luZ2xldG9uIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5ncm91cHMgPSBbXTtcbiAgICB9XG4gICAgYWRkKGdyb3VwKSB7XG4gICAgICAgIHRoaXMuZ3JvdXBzLnB1c2goZ3JvdXApO1xuICAgIH1cbiAgICA7XG4gICAgZ2V0KGdyb3VwSUQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcnkocCA9PiBwLklEID09PSBncm91cElEKTtcbiAgICB9XG4gICAgO1xuICAgIHF1ZXJ5KGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyb3Vwcy5maW5kKGNhbGxiYWNrKTtcbiAgICB9XG4gICAgO1xuICAgIGdldEFsbCgpIHtcbiAgICAgICAgLy8gSSB3b3VsZCBpZGVhbGx5IHVzZSBzdHJ1Y3R1cmVkQ2xvbmUgdG8gbWFrZSBhIGRlZXAgY2xvbmUuXG4gICAgICAgIC8vIEJ1dCB0aGF0IGlzIG5vdCBpbXBsZW1lbnRlZCBpbiBqZXN0LWRvbS1lbnZpcm9ubWVudCwgd2hpY2ggSSBhbSB1c2luZyBmb3IgdGVzdHMuXG4gICAgICAgIHJldHVybiBbLi4udGhpcy5ncm91cHNdO1xuICAgIH1cbn1cbjtcbmV4cG9ydCBkZWZhdWx0IEdyb3VwT2ZHcm91cHM7XG4iLCJpbXBvcnQgaXNVVUlEIGZyb20gXCIuLi9mdW5jdGlvbnMvaXNVVUlEXCI7XG5pbXBvcnQgeyB2NCB9IGZyb20gXCJ1dWlkXCI7XG5jbGFzcyBJRGVkIHtcbiAgICBjb25zdHJ1Y3RvcihwcmVzZXRJRCkge1xuICAgICAgICBpZiAocHJlc2V0SUQgJiYgaXNVVUlEKHByZXNldElEKSkge1xuICAgICAgICAgICAgdGhpcy5JRCA9IHByZXNldElEO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5JRCA9IHY0KCk7XG4gICAgICAgIH1cbiAgICAgICAgO1xuICAgIH1cbiAgICA7XG59XG47XG5leHBvcnQgZGVmYXVsdCBJRGVkO1xuIiwiaW1wb3J0IFByb2plY3RzIGZyb20gXCIuLi9jbGFzc2VzL1Byb2plY3RzXCI7XG5pbXBvcnQgUFMgZnJvbSBcIi4vUHViU3ViXCI7XG5pbXBvcnQgR3JvdXAgZnJvbSBcIi4vR3JvdXBcIjtcbmltcG9ydCBQU0UgZnJvbSBcIi4uL2VudW1zL1B1YlN1YkV2ZW50c1wiO1xuY2xhc3MgUHJvamVjdCBleHRlbmRzIEdyb3VwIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBpbml0aWFsVG9Eb3MsIGljb24sIGlkKSB7XG4gICAgICAgIHN1cGVyKG5hbWUsIGljb24sIFtdLCBpZCk7XG4gICAgICAgIFByb2plY3RzLmFkZCh0aGlzKTtcbiAgICAgICAgUFMucHVibGlzaChQU0UuUHV0UHJvamVjdCwgdGhpcy5JRCk7XG4gICAgICAgIFBTLnN1YnNjcmliZShQU0UuRGVsZXRlVG9EbywgdGhpcy5kZWxldGVUb0RvLmJpbmQodGhpcykpO1xuICAgICAgICBpZiAoaW5pdGlhbFRvRG9zKSB7XG4gICAgICAgICAgICBpbml0aWFsVG9Eb3MuZm9yRWFjaChpbml0aWFsVG9EbyA9PiB0aGlzLmFkZFRvRG8oaW5pdGlhbFRvRG8pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIHRoaXMuYWRkVG9EbyBpbmNsdWRlcyBwdWJsaXNoaW5nIHRoZSBQdXRQcm9qZWN0RGF0YSBldmVudCwgd2hpY2ggbGVhZHMgdG8gdGhlIGRhdGEgYmVpbmcgc3RvcmVkLlxuICAgICAgICAgICAgLy8gQnV0LCBldmVuIGlmIGEgcHJvamVjdCBpcyBlbXB0eSwgaXQgc3RpbGwgbmVlZHMgdG8gYmUgc3RvcmVkLlxuICAgICAgICAgICAgUFMucHVibGlzaChQU0UuUHV0UHJvamVjdERhdGEpO1xuICAgICAgICB9XG4gICAgICAgIDtcbiAgICB9XG4gICAgO1xuICAgIGNoYW5nZU5hbWUobmV3TmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICAgICAgICBQUy5wdWJsaXNoKFBTRS5QdXRQcm9qZWN0LCB0aGlzLklEKTtcbiAgICAgICAgUFMucHVibGlzaChQU0UuUHV0UHJvamVjdERhdGEpO1xuICAgIH1cbiAgICA7XG4gICAgYWRkVG9Ebyh0b0RvLCBtb3ZlT3BlcmF0aW9uID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKHRoaXMudG9Eb3Muc29tZSh0ID0+IHQuSUQgPT09IHRvRG8uSUQpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0b0RvLnVwZGF0ZVByb3BlcnRpZXMoeyBwYXJlbnRJRDogdGhpcy5JRCB9LCBmYWxzZSk7XG4gICAgICAgIHRoaXMudG9Eb3MucHVzaCh0b0RvKTtcbiAgICAgICAgaWYgKCFtb3ZlT3BlcmF0aW9uKVxuICAgICAgICAgICAgUFMucHVibGlzaChQU0UuUHV0VG9EbywgdG9Ebyk7XG4gICAgICAgIFBTLnB1Ymxpc2goUFNFLlBvc3RHcm91cENvdW50LCB7XG4gICAgICAgICAgICBncm91cElEOiB0aGlzLklELFxuICAgICAgICAgICAgaW50ZWdlclRvQWRkOiAxXG4gICAgICAgIH0pO1xuICAgICAgICBQUy5wdWJsaXNoKFBTRS5QdXRQcm9qZWN0RGF0YSk7XG4gICAgfVxuICAgIDtcbiAgICB0YWtlVG9Eb0Zyb21Bbm90aGVyKHRvRG9Ub1Rha2UpIHtcbiAgICAgICAgY29uc3QgeyBwYXJlbnRJRCB9ID0gdG9Eb1RvVGFrZTtcbiAgICAgICAgaWYgKHRoaXMuSUQgPT09IHBhcmVudElEKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBvcmlnaW5hbEhvbGRlciA9IFByb2plY3RzLnF1ZXJ5KHByb2plY3QgPT4gcHJvamVjdC5JRCA9PT0gcGFyZW50SUQpO1xuICAgICAgICBvcmlnaW5hbEhvbGRlci5kZWxldGVUb0RvKHRvRG9Ub1Rha2UuSUQsIHRydWUpO1xuICAgICAgICB0aGlzLmFkZFRvRG8odG9Eb1RvVGFrZSwgdHJ1ZSk7XG4gICAgfVxuICAgIDtcbiAgICAvLyBJIHRoaW5rIGRlcmVmZXJlbmNpbmcgYSBUb0RvIGZyb20gdGhpcy50b0RvcyBhcnJheSBtYWtlcyBpdCB1bnJlYWNoYWJsZS4gXG4gICAgLy8gKFVubGVzcyBhbm90aGVyIGluc3RhbmNlIHJlZmVyZW5jZXMgaXQsIG9mIGNvdXJzZS4pXG4gICAgLy8gU28gdGhlIGdhcmJhZ2UgY29sbGVjdG9yIHNob3VsZCBldmVudHVhbGx5IGZyZWUgdXAgdGhlIG1lbW9yeSB0YWtlbiBieSB0aGUgXCJkZWxldGVkXCIgVG9Eby5cbiAgICBkZWxldGVUb0RvKHRvRG9JRCwgbW92ZU9wZXJhdGlvbiA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy50b0Rvcy5maW5kSW5kZXgodCA9PiB0LklEID09IHRvRG9JRCk7XG4gICAgICAgIGlmIChpbmRleCA8IDApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IGRlbGV0aW9uID0gdGhpcy50b0Rvcy5zcGxpY2UoaW5kZXgsIDEpWzBdO1xuICAgICAgICBpZiAobW92ZU9wZXJhdGlvbikge1xuICAgICAgICAgICAgUFMucHVibGlzaChQU0UuRGVsZXRlVG9EbywgZGVsZXRpb24uSUQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRpb24uYXdhcmRDb21wbGV0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgO1xuICAgICAgICBQUy5wdWJsaXNoKFBTRS5Qb3N0R3JvdXBDb3VudCwge1xuICAgICAgICAgICAgZ3JvdXBJRDogdGhpcy5JRCxcbiAgICAgICAgICAgIGludGVnZXJUb0FkZDogLTFcbiAgICAgICAgfSk7XG4gICAgICAgIFBTLnB1Ymxpc2goUFNFLlB1dFByb2plY3REYXRhKTtcbiAgICB9XG4gICAgO1xufVxuO1xuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcbiIsImltcG9ydCBQUyBmcm9tIFwiLi9QdWJTdWJcIjtcbmltcG9ydCBzdG9yZVByb2plY3RzIGZyb20gXCIuLi9zdG9yYWdlL3N0b3JlUHJvamVjdHNcIjtcbmltcG9ydCBHcm91cE9mR3JvdXBzIGZyb20gXCIuL0dyb3VwT2ZHcm91cHNcIjtcbmltcG9ydCBQU0UgZnJvbSBcIi4uL2VudW1zL1B1YlN1YkV2ZW50c1wiO1xuY2xhc3MgUHJvamVjdHMgZXh0ZW5kcyBHcm91cE9mR3JvdXBzIHtcbiAgICBnZXRBbGxUb0RvcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXBzLm1hcChwcm9qZWN0ID0+IHByb2plY3QudG9Eb3MpLmZsYXQoKTtcbiAgICB9XG4gICAgO1xuICAgIHByb2plY3RFeGlzdHMoY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXBzLnNvbWUoY2FsbGJhY2spO1xuICAgIH1cbiAgICA7XG4gICAgZGVsZXRlUHJvamVjdChJRCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSB0aGlzLmdyb3Vwcy5maW5kSW5kZXgocCA9PiBwLklEID09PSBJRCk7XG4gICAgICAgIGlmIChwcm9qZWN0SW5kZXggPCAwKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGVyZSBpcyBubyBQcm9qZWN0IHRvIGRlbGV0ZSB3aXRoIGFuIElEIG9mICR7SUR9LmApO1xuICAgICAgICBjb25zdCBkZWxldGVkUHJvamVjdCA9IHRoaXMuZ3JvdXBzLnNwbGljZShwcm9qZWN0SW5kZXgsIDEpWzBdO1xuICAgICAgICBQUy5wdWJsaXNoKFBTRS5EZWxldGVQcm9qZWN0LCBkZWxldGVkUHJvamVjdC5JRCk7XG4gICAgICAgIFBTLnB1Ymxpc2goUFNFLlB1dFByb2plY3REYXRhKTtcbiAgICB9XG4gICAgO1xuICAgIHNhdmUoKSB7XG4gICAgICAgIHN0b3JlUHJvamVjdHModGhpcy5ncm91cHMpO1xuICAgIH1cbiAgICA7XG59XG47XG5jb25zdCBQcm9qZWN0c0luc3RhbmNlID0gbmV3IFByb2plY3RzKCk7XG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0c0luc3RhbmNlO1xuIiwiaW1wb3J0IFNpbmdsZXRvbiBmcm9tIFwiLi9TaW5nbGV0b25cIjtcbmltcG9ydCBQU0UgZnJvbSBcIi4uL2VudW1zL1B1YlN1YkV2ZW50c1wiO1xuY2xhc3MgUHViU3ViIGV4dGVuZHMgU2luZ2xldG9uIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVycyA9IHtcbiAgICAgICAgICAgIFtQU0UuUG9zdE1lc3NhZ2VdOiBbXSxcbiAgICAgICAgICAgIFtQU0UuUHV0Q29pbnNdOiBbXSxcbiAgICAgICAgICAgIFtQU0UuUG9zdENhdGVnb3J5XTogW10sXG4gICAgICAgICAgICBbUFNFLlB1dFByb2plY3RdOiBbXSxcbiAgICAgICAgICAgIFtQU0UuUHV0VG9Eb106IFtdLFxuICAgICAgICAgICAgW1BTRS5Qb3N0R3JvdXBDb3VudF06IFtdLFxuICAgICAgICAgICAgW1BTRS5EZWxldGVUb0RvXTogW10sXG4gICAgICAgICAgICBbUFNFLkRlbGV0ZVByb2plY3RdOiBbXSxcbiAgICAgICAgICAgIFtQU0UuUHV0UHJvamVjdERhdGFdOiBbXVxuICAgICAgICB9O1xuICAgIH1cbiAgICBzdWJzY3JpYmUoZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVyc1tlXS5wdXNoKGNhbGxiYWNrKTtcbiAgICB9XG4gICAgO1xuICAgIHB1Ymxpc2goZSwgZCkge1xuICAgICAgICB0aGlzLnN1YnNjcmliZXJzW2VdLmZvckVhY2goKGNhbGxiYWNrKSA9PiBjYWxsYmFjayhkKSk7XG4gICAgfVxuICAgIDtcbn1cbjtcbmNvbnN0IFBTID0gbmV3IFB1YlN1YigpO1xuZXhwb3J0IGRlZmF1bHQgUFM7XG4iLCJjbGFzcyBTaW5nbGV0b24ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgIGlmIChTaW5nbGV0b24uaW5zdGFuY2VzLmdldChjbGFzc05hbWUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFuIGluc3RhbmNlIG9mICR7Y2xhc3NOYW1lfSBhbHJlYWR5IGV4aXN0cyFgKTtcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgICAgIFNpbmdsZXRvbi5pbnN0YW5jZXMuc2V0KGNsYXNzTmFtZSwgdGhpcyk7XG4gICAgfVxuICAgIDtcbn1cbi8vIEEgc3RhdGljIG1hcCB0byBzdG9yZSBpbnN0YW5jZXMgZm9yIGRlcml2ZWQgY2xhc3Nlc1xuU2luZ2xldG9uLmluc3RhbmNlcyA9IG5ldyBNYXAoKTtcbjtcbmV4cG9ydCBkZWZhdWx0IFNpbmdsZXRvbjtcbiIsImltcG9ydCB7IHRvZGF5IH0gZnJvbSBcIi4uL2Z1bmN0aW9ucy9kYXRlR2VuZXJhdG9yc1wiO1xuaW1wb3J0IFBTIGZyb20gXCIuL1B1YlN1YlwiO1xuaW1wb3J0IEJhbmsgZnJvbSBcIi4vQmFua1wiO1xuaW1wb3J0IElEZWQgZnJvbSBcIi4vSURlZFwiO1xuaW1wb3J0IFRvRG9Qcmlvcml0eSBmcm9tIFwiLi4vZW51bXMvVG9Eb1ByaW9yaXR5XCI7XG5pbXBvcnQgUFNFIGZyb20gXCIuLi9lbnVtcy9QdWJTdWJFdmVudHNcIjtcbmNsYXNzIFRvRG8gZXh0ZW5kcyBJRGVkIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5ID0gVG9Eb1ByaW9yaXR5LkxvdywgaXNDaGVja2VkID0gZmFsc2UsIGlkKSB7XG4gICAgICAgIHN1cGVyKGlkKTtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5pc0NoZWNrZWQgPSBpc0NoZWNrZWQ7XG4gICAgICAgIHRoaXMuYXdhcmRlZCA9IGZhbHNlO1xuICAgIH1cbiAgICA7XG4gICAgdG9nZ2xlSXNDaGVja2VkKCkge1xuICAgICAgICB0aGlzLmlzQ2hlY2tlZCA9ICF0aGlzLmlzQ2hlY2tlZDtcbiAgICAgICAgUFMucHVibGlzaChQU0UuUHV0UHJvamVjdERhdGEpO1xuICAgIH1cbiAgICB1cGRhdGVQcm9wZXJ0aWVzKHBvc2l0aW9uYWxQYXJhbWV0ZXJzLCBwdWJsaXNoID0gdHJ1ZSkge1xuICAgICAgICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHBhcmVudElEIH0gPSBwb3NpdGlvbmFsUGFyYW1ldGVycztcbiAgICAgICAgaWYgKHRpdGxlKVxuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICBpZiAoZGVzY3JpcHRpb24pXG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIGlmIChkdWVEYXRlKVxuICAgICAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgaWYgKHByaW9yaXR5KVxuICAgICAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICBpZiAocGFyZW50SUQpXG4gICAgICAgICAgICB0aGlzLnBhcmVudElEID0gcGFyZW50SUQ7XG4gICAgICAgIGlmIChwdWJsaXNoKSB7XG4gICAgICAgICAgICBQUy5wdWJsaXNoKFBTRS5QdXRUb0RvLCB0aGlzKTtcbiAgICAgICAgICAgIFBTLnB1Ymxpc2goUFNFLlB1dFByb2plY3REYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICA7XG4gICAgZ2V0V29ydGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByaW9yaXR5ICogMTA7XG4gICAgfVxuICAgIGlzT3ZlckR1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHVlRGF0ZSA8IHRvZGF5O1xuICAgIH1cbiAgICBhd2FyZENvbXBsZXRpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmF3YXJkZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRvRG9JbnN0YW5jZS5hd2FyZENvbXBsZXRpb24oKSBjYW4gb25seSBiZSBjYWxsZWQgb25jZS5cIik7XG4gICAgICAgIH1cbiAgICAgICAgO1xuICAgICAgICBpZiAoIXRoaXMuaXNDaGVja2VkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5pc092ZXJEdWUoKSkge1xuICAgICAgICAgICAgQmFuay5kZWR1Y3QodGhpcy5nZXRXb3J0aCgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIEJhbmsuZGVwb3NpdCh0aGlzLmdldFdvcnRoKCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXdhcmRlZCA9IHRydWU7XG4gICAgfVxuICAgIDtcbn1cbjtcbmV4cG9ydCBkZWZhdWx0IFRvRG87XG4iLCJ2YXIgUFNFO1xuKGZ1bmN0aW9uIChQU0UpIHtcbiAgICBQU0VbUFNFW1wiUG9zdE1lc3NhZ2VcIl0gPSAwXSA9IFwiUG9zdE1lc3NhZ2VcIjtcbiAgICBQU0VbUFNFW1wiUHV0Q29pbnNcIl0gPSAxXSA9IFwiUHV0Q29pbnNcIjtcbiAgICBQU0VbUFNFW1wiUG9zdENhdGVnb3J5XCJdID0gMl0gPSBcIlBvc3RDYXRlZ29yeVwiO1xuICAgIFBTRVtQU0VbXCJQdXRQcm9qZWN0XCJdID0gM10gPSBcIlB1dFByb2plY3RcIjtcbiAgICBQU0VbUFNFW1wiUHV0VG9Eb1wiXSA9IDRdID0gXCJQdXRUb0RvXCI7XG4gICAgUFNFW1BTRVtcIlBvc3RHcm91cENvdW50XCJdID0gNV0gPSBcIlBvc3RHcm91cENvdW50XCI7XG4gICAgUFNFW1BTRVtcIkRlbGV0ZVRvRG9cIl0gPSA2XSA9IFwiRGVsZXRlVG9Eb1wiO1xuICAgIFBTRVtQU0VbXCJEZWxldGVQcm9qZWN0XCJdID0gN10gPSBcIkRlbGV0ZVByb2plY3RcIjtcbiAgICBQU0VbUFNFW1wiUHV0UHJvamVjdERhdGFcIl0gPSA4XSA9IFwiUHV0UHJvamVjdERhdGFcIjtcbn0pKFBTRSB8fCAoUFNFID0ge30pKTtcbjtcbmV4cG9ydCBkZWZhdWx0IFBTRTtcbiIsInZhciBUb0RvUHJpb3JpdHk7XG4oZnVuY3Rpb24gKFRvRG9Qcmlvcml0eSkge1xuICAgIFRvRG9Qcmlvcml0eVtUb0RvUHJpb3JpdHlbXCJMb3dcIl0gPSAwXSA9IFwiTG93XCI7XG4gICAgVG9Eb1ByaW9yaXR5W1RvRG9Qcmlvcml0eVtcIk1lZGl1bVwiXSA9IDFdID0gXCJNZWRpdW1cIjtcbiAgICBUb0RvUHJpb3JpdHlbVG9Eb1ByaW9yaXR5W1wiSGlnaFwiXSA9IDJdID0gXCJIaWdoXCI7XG59KShUb0RvUHJpb3JpdHkgfHwgKFRvRG9Qcmlvcml0eSA9IHt9KSk7XG5leHBvcnQgZGVmYXVsdCBUb0RvUHJpb3JpdHk7XG4iLCJjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG5jb25zdCB5ZXN0ZXJkYXkgPSBuZXcgRGF0ZSgpO1xuY29uc3QgdG9tb3Jyb3cgPSBuZXcgRGF0ZSgpO1xuY29uc3Qgc3RhcnRPZldlZWsgPSBuZXcgRGF0ZSgpO1xuY29uc3QgZW5kT2ZXZWVrID0gbmV3IERhdGUoKTtcbmNvbnN0IGVuZE9mTW9udGggPSBuZXcgRGF0ZSgpO1xuY29uc3QgdG9kYXlEYXRlID0gdG9kYXkuZ2V0RGF0ZSgpO1xueWVzdGVyZGF5LnNldERhdGUodG9kYXlEYXRlIC0gMSk7XG50b21vcnJvdy5zZXREYXRlKHRvZGF5RGF0ZSArIDEpO1xuc3RhcnRPZldlZWsuc2V0RGF0ZSh0b2RheURhdGUgLSAxKTtcbmVuZE9mV2Vlay5zZXREYXRlKHRvZGF5RGF0ZSArIDcpO1xuZW5kT2ZNb250aC5zZXREYXRlKHRvZGF5RGF0ZSArIDMxKTtcbi8vIE1TIGFzIGluIFwibWlsbGlzZWNvbmRzIHNpbmNlIG1pZG5pZ2h0IEphbnVhcnkgMSwgMTk3MFwiLlxuY29uc3QgeWVzdGVyZGF5TVMgPSB5ZXN0ZXJkYXkuZ2V0VGltZSgpO1xuY29uc3QgdG9tb3Jyb3dNUyA9IHRvbW9ycm93LmdldFRpbWUoKTtcbmNvbnN0IHN0YXJ0T2ZXZWVrTVMgPSBzdGFydE9mV2Vlay5nZXRUaW1lKCk7XG5jb25zdCBlbmRPZldlZWtNUyA9IGVuZE9mV2Vlay5nZXRUaW1lKCk7XG5jb25zdCBlbmRPZk1vbnRoTVMgPSBlbmRPZk1vbnRoLmdldFRpbWUoKTtcbmNvbnN0IGRhdGVXaXRoaW5QYXN0V2VlayA9IG5ldyBEYXRlKHllc3RlcmRheU1TIC0gTWF0aC5yYW5kb20oKSAqICh5ZXN0ZXJkYXlNUyAtIHN0YXJ0T2ZXZWVrTVMpKTtcbmNvbnN0IGRhdGVXaXRoaW5XZWVrID0gbmV3IERhdGUodG9tb3Jyb3dNUyArIE1hdGgucmFuZG9tKCkgKiAoZW5kT2ZXZWVrTVMgLSB0b21vcnJvd01TKSk7XG5jb25zdCBkYXRlV2l0aGluTW9udGggPSAoKSA9PiBuZXcgRGF0ZSh0b21vcnJvd01TICsgTWF0aC5yYW5kb20oKSAqIChlbmRPZk1vbnRoTVMgLSB0b21vcnJvd01TKSk7XG5leHBvcnQgeyBkYXRlV2l0aGluV2VlaywgZGF0ZVdpdGhpblBhc3RXZWVrLCBkYXRlV2l0aGluTW9udGgsIHRvZGF5IH07XG4iLCJpbXBvcnQgVG9Eb1ByaW9yaXR5IGZyb20gXCIuLi9lbnVtcy9Ub0RvUHJpb3JpdHlcIjtcbmNvbnN0IGZpbHRlckltcG9ydGFudCA9IHRvZG9zID0+IHRvZG9zLmZpbHRlcih0b2RvID0+IHRvZG8ucHJpb3JpdHkgPT09IFRvRG9Qcmlvcml0eS5IaWdoKTtcbmV4cG9ydCBkZWZhdWx0IGZpbHRlckltcG9ydGFudDtcbiIsImltcG9ydCB7IHRvZGF5IH0gZnJvbSBcIi4vZGF0ZUdlbmVyYXRvcnNcIjtcbmltcG9ydCB0aW1lTm9ybWFsaXNlIGZyb20gXCIuL3RpbWVOb3JtYWxpc2VcIjtcbmNvbnN0IGZpbHRlclRoaXNXZWVrID0gdG9kb3MgPT4ge1xuICAgIGNvbnN0IGVuZE9mV2VlayA9IG5ldyBEYXRlKHRvZGF5KTtcbiAgICBlbmRPZldlZWsuc2V0RGF0ZShlbmRPZldlZWsuZ2V0RGF0ZSgpICsgNyk7XG4gICAgcmV0dXJuIHRvZG9zLmZpbHRlcigodG9kbykgPT4ge1xuICAgICAgICBjb25zdCB0b2RvRHVlID0gdGltZU5vcm1hbGlzZSh0b2RvLmR1ZURhdGUpO1xuICAgICAgICByZXR1cm4gdG9kb0R1ZSA+PSB0b2RheSAmJiB0b2RvRHVlIDw9IGVuZE9mV2VlaztcbiAgICB9KTtcbn07XG5leHBvcnQgZGVmYXVsdCBmaWx0ZXJUaGlzV2VlaztcbiIsImltcG9ydCB7IHRvZGF5IH0gZnJvbSBcIi4vZGF0ZUdlbmVyYXRvcnNcIjtcbmltcG9ydCB0aW1lTm9ybWFsaXNlIGZyb20gXCIuL3RpbWVOb3JtYWxpc2VcIjtcbmNvbnN0IGZpbHRlclRvZGF5ID0gKHRvZG9zKSA9PiB0b2Rvcy5maWx0ZXIodG9kbyA9PiB0aW1lTm9ybWFsaXNlKHRvZG8uZHVlRGF0ZSkuZ2V0VGltZSgpID09PSB0aW1lTm9ybWFsaXNlKHRvZGF5KS5nZXRUaW1lKCkpO1xuZXhwb3J0IGRlZmF1bHQgZmlsdGVyVG9kYXk7XG4iLCJpbXBvcnQgQ2F0ZWdvcnkgZnJvbSBcIi4uL2NsYXNzZXMvQ2F0ZWdvcnlcIjtcbmltcG9ydCBmaWx0ZXJJbXBvcnRhbnQgZnJvbSBcIi4vZmlsdGVySW1wb3J0YW50XCI7XG5pbXBvcnQgZmlsdGVyVGhpc1dlZWsgZnJvbSBcIi4vZmlsdGVyVGhpc1dlZWtcIjtcbmltcG9ydCBmaWx0ZXJUb2RheSBmcm9tIFwiLi9maWx0ZXJUb2RheVwiO1xuaW1wb3J0IG5vRmlsdGVyIGZyb20gXCIuL25vRmlsdGVyXCI7XG5mdW5jdGlvbiBpbml0aWFsaXplQ2F0ZWdvcmllcygpIHtcbiAgICBuZXcgQ2F0ZWdvcnkoXCJBbGwgVGFza3NcIiwgbm9GaWx0ZXIsIFwiYmktY2FsZW5kYXItY2hlY2stZmlsbFwiKTtcbiAgICBuZXcgQ2F0ZWdvcnkoXCJJbXBvcnRhbnRcIiwgZmlsdGVySW1wb3J0YW50LCBcImJpLXN0YXItZmlsbFwiKTtcbiAgICBuZXcgQ2F0ZWdvcnkoXCJUb2RheVwiLCBmaWx0ZXJUb2RheSwgXCJiaS1jYWxlbmRhci1ldmVudC1maWxsXCIpO1xuICAgIG5ldyBDYXRlZ29yeShcIlRoaXMgV2Vla1wiLCBmaWx0ZXJUaGlzV2VlaywgXCJiaS1jYWxlbmRhci13ZWVrLWZpbGxcIik7XG59XG47XG5leHBvcnQgZGVmYXVsdCBpbml0aWFsaXplQ2F0ZWdvcmllcztcbiIsImltcG9ydCBHYW1lIGZyb20gXCIuLi9jbGFzc2VzL0dhbWVcIjtcbmltcG9ydCByZW5kZXJBcmNhZGUgZnJvbSBcIi4uL3VpL291dHB1dHMvcmVuZGVyQXJjYWRlXCI7XG5mdW5jdGlvbiBpbml0aWFsaXplR2FtZXMoKSB7XG4gICAgbmV3IEdhbWUoXCJDcm9zcyBDb2RlXCIsIFwiLi90aHVtYm5haWxzL2Nyb3NzLWNvZGUuanBnXCIsIFwiaHR0cHM6Ly93d3cuY3Jvc3MtY29kZS5jb20vZW4vc3RhcnRcIiwgNjApO1xuICAgIG5ldyBHYW1lKFwiTWlzc2lsZSBHYW1lXCIsIFwiLi90aHVtYm5haWxzL21pc3NpbGUtZ2FtZS5qcGdcIiwgXCJodHRwczovL21pc3NpbGUtZ2FtZS5id2htYXRoZXIuY29tL1wiLCA0MCk7XG4gICAgbmV3IEdhbWUoXCJDaHJvbWUgRGlub1wiLCBcIi4vdGh1bWJuYWlscy9jaHJvbWUtZGluby5qcGVnXCIsIFwiaHR0cHM6Ly9jaHJvbWVkaW5vLmNvbS9cIiwgMjApO1xuICAgIC8vIGFkZCBldmVudCBsaXN0ZW5lciB0byBnYW1lIGljb25cbiAgICBjb25zdCBnYW1lSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1pY29uXCIpO1xuICAgIGlmIChnYW1lSWNvbikge1xuICAgICAgICBnYW1lSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyQXJjYWRlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIiNnYW1lLWljb24gbm90IHNlbGVjdGVkLlwiKTtcbiAgICB9XG4gICAgO1xufVxuO1xuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZUdhbWVzO1xuIiwiaW1wb3J0IHV1aWRSZWdleCBmcm9tIFwiLi4vcmVnZXgvdXVpZFJlZ2V4XCI7XG5mdW5jdGlvbiBpc1VVSUQodG9UZXN0KSB7XG4gICAgcmV0dXJuIHV1aWRSZWdleC50ZXN0KHRvVGVzdCk7XG59XG47XG5leHBvcnQgZGVmYXVsdCBpc1VVSUQ7XG4iLCJjb25zdCBub0ZpbHRlciA9IHRvZG9zID0+IHRvZG9zO1xuZXhwb3J0IGRlZmF1bHQgbm9GaWx0ZXI7XG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi4vY2xhc3Nlcy9Qcm9qZWN0XCI7XG5pbXBvcnQgVG9EbyBmcm9tIFwiLi4vY2xhc3Nlcy9Ub0RvXCI7XG5pbXBvcnQgVG9Eb1ByaW9yaXR5IGZyb20gXCIuLi9lbnVtcy9Ub0RvUHJpb3JpdHlcIjtcbmltcG9ydCB7IGRhdGVXaXRoaW5Nb250aCwgdG9kYXksIGRhdGVXaXRoaW5XZWVrLCBkYXRlV2l0aGluUGFzdFdlZWsgfSBmcm9tIFwiLi9kYXRlR2VuZXJhdG9yc1wiO1xuZnVuY3Rpb24gcG9wdWxhdGVUdXRvcmlhbFByb2plY3QoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9qZWN0KFwiVHV0b3JpYWxcIiwgW1xuICAgICAgICBuZXcgVG9EbyhcIkltcG9ydGFudCB0YXNrXCIsIFwiVGhpcyBpcyBoaWdoLXByaW9yaXR5LiBOb3RpY2UgdGhlIHJlZCBib3JkZXIgY29sb3ItY29kaW5nLlwiLCBkYXRlV2l0aGluTW9udGgoKSwgVG9Eb1ByaW9yaXR5LkhpZ2gpLFxuICAgICAgICBuZXcgVG9EbyhcIk5pY2UtdG8tZG8gdGFza1wiLCBcIlRoaXMgaXMgbWVkaXVtLXByaW9yaXR5LiBJdCdzIGNvbG9yLWNvZGVkIG9yYW5nZVwiLCBkYXRlV2l0aGluTW9udGgoKSwgVG9Eb1ByaW9yaXR5Lk1lZGl1bSksXG4gICAgICAgIG5ldyBUb0RvKFwiSnVzdCBmb3IgZnVuXCIsIFwiVGhpcyBpcyBsb3ctcHJpb3JpdHkuIEl0J3MgZmxhZ2dlZCBhcyBncmVlbi5cIiwgZGF0ZVdpdGhpbk1vbnRoKCksIFRvRG9Qcmlvcml0eS5Mb3cpLFxuICAgICAgICBuZXcgVG9EbyhcIkZpbmlzaCB0b2RheVwiLCBcIkhlcmUgaXMgYSB0by1kbyB0aGF0IGlzIGR1ZSB0b2RheSFcIiwgdG9kYXksIFRvRG9Qcmlvcml0eS5IaWdoKSxcbiAgICAgICAgbmV3IFRvRG8oXCJXZWVrJ3Mgd29ya1wiLCBcIlRoaXMgaXMgc29tZXRoaW5nIHlvdSBqdXN0IG5lZWQgdG8gZG8gc29tZXRpbWUgdGhpcyB3ZWVrLlwiLCBkYXRlV2l0aGluV2VlaywgVG9Eb1ByaW9yaXR5Lk1lZGl1bSksXG4gICAgICAgIG5ldyBUb0RvKFwiVG9vIExhdGVcIiwgXCJPdmVyZHVlIHRvLWRvcyBhcmUgY29sb3ItY29kZWQgdGhpcyBicm9uemUgaHVlXCIsIGRhdGVXaXRoaW5QYXN0V2VlaywgVG9Eb1ByaW9yaXR5LkhpZ2gpXG4gICAgXSwgXCJiaS1wZW5jaWwtZmlsbFwiKTtcbn1cbjtcbmV4cG9ydCBkZWZhdWx0IHBvcHVsYXRlVHV0b3JpYWxQcm9qZWN0O1xuIiwiaW1wb3J0IFByb2plY3RzSW5zdGFuY2UgZnJvbSBcIi4uL2NsYXNzZXMvUHJvamVjdHNcIjtcbmltcG9ydCBQUyBmcm9tIFwiLi4vY2xhc3Nlcy9QdWJTdWJcIjtcbmltcG9ydCBQU0UgZnJvbSBcIi4uL2VudW1zL1B1YlN1YkV2ZW50c1wiO1xuaW1wb3J0IHB1dENvaW5zIGZyb20gXCIuLi9zdG9yYWdlL3B1dENvaW5zXCI7XG5pbXBvcnQgcHV0Q2F0ZWdvcnkgZnJvbSBcIi4uL3VpL291dHB1dHMvcHV0Q2F0ZWdvcnlcIjtcbmltcG9ydCBwdXRQcm9qZWN0IGZyb20gXCIuLi91aS9vdXRwdXRzL3B1dFByb2plY3RcIjtcbmltcG9ydCBpZGVtcG90ZW50bHlSZW5kZXJUb0RvIGZyb20gXCIuLi91aS9vdXRwdXRzL2lkZW1wb3RlbnRseVJlbmRlclRvRG9cIjtcbmltcG9ydCByZW1vdmVQcm9qZWN0IGZyb20gXCIuLi91aS9vdXRwdXRzL3JlbW92ZVByb2plY3RcIjtcbmltcG9ydCByZW1vdmVUb0RvIGZyb20gXCIuLi91aS9vdXRwdXRzL3JlbW92ZVRvRG9cIjtcbmltcG9ydCByZW5kZXJNZXNzYWdlIGZyb20gXCIuLi91aS9vdXRwdXRzL3JlbmRlck1lc3NhZ2VcIjtcbmltcG9ydCB1cGRhdGVHcm91cENvdW50ZXIgZnJvbSBcIi4uL3VpL291dHB1dHMvdXBkYXRlVG9Eb0NvdW50ZXJcIjtcbmZ1bmN0aW9uIHN1YnNjcmliZVVJQW5kU3RvcmFnZUZ1bmN0aW9ucygpIHtcbiAgICBQUy5zdWJzY3JpYmUoUFNFLlBvc3RDYXRlZ29yeSwgcHV0Q2F0ZWdvcnkpO1xuICAgIFBTLnN1YnNjcmliZShQU0UuUHV0UHJvamVjdCwgcHV0UHJvamVjdCk7XG4gICAgUFMuc3Vic2NyaWJlKFBTRS5QdXRUb0RvLCBpZGVtcG90ZW50bHlSZW5kZXJUb0RvKTtcbiAgICBQUy5zdWJzY3JpYmUoUFNFLlBvc3RHcm91cENvdW50LCB1cGRhdGVHcm91cENvdW50ZXIpO1xuICAgIFBTLnN1YnNjcmliZShQU0UuRGVsZXRlVG9EbywgcmVtb3ZlVG9Ebyk7XG4gICAgUFMuc3Vic2NyaWJlKFBTRS5EZWxldGVQcm9qZWN0LCByZW1vdmVQcm9qZWN0KTtcbiAgICBQUy5zdWJzY3JpYmUoUFNFLlBvc3RNZXNzYWdlLCByZW5kZXJNZXNzYWdlKTtcbiAgICBQUy5zdWJzY3JpYmUoUFNFLlB1dENvaW5zLCBwdXRDb2lucyk7XG4gICAgUFMuc3Vic2NyaWJlKFBTRS5QdXRQcm9qZWN0RGF0YSwgKCkgPT4gUHJvamVjdHNJbnN0YW5jZS5zYXZlKCkpOyAvLyBjbG9zdXJlIGlzIG5lY2Vzc2FyeVxufVxuO1xuZXhwb3J0IGRlZmF1bHQgc3Vic2NyaWJlVUlBbmRTdG9yYWdlRnVuY3Rpb25zO1xuIiwiY29uc3QgdGltZU5vcm1hbGlzZSA9ICh0aW1lKSA9PiB7XG4gICAgY29uc3Qgbm9ybWFsaXNlZFRpbWUgPSB0aW1lO1xuICAgIG5vcm1hbGlzZWRUaW1lLnNldEhvdXJzKDAsIDAsIDAsIDApOyAvLyBzZXQgdG8gbWlkbmlnaHQgZm9yIGRheSBjb21wYXJpc29uc1xuICAgIHJldHVybiBub3JtYWxpc2VkVGltZTtcbn07XG5leHBvcnQgZGVmYXVsdCB0aW1lTm9ybWFsaXNlO1xuIiwiY29uc3QgZW5kc1dpdGhJbWFnZUZpbGVFeHRlbnNpb24gPSAvLihqcGd8anBlZ3xwbmcpJC87XG5leHBvcnQgZGVmYXVsdCBlbmRzV2l0aEltYWdlRmlsZUV4dGVuc2lvbjtcbiIsImNvbnN0IHN0YXJ0c1dpdGhIVFRQUyA9IC9eaHR0cHM6XFwvXFwvLiovO1xuZXhwb3J0IGRlZmF1bHQgc3RhcnRzV2l0aEhUVFBTO1xuIiwiLy8gVGhlIHJlZ2V4IHdhcyBjb3BpZWQgZnJvbSBTdGFja092ZXJmbG93LlxuLy8gTGluayBoZXJlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83OTA1OTI5L2hvdy10by10ZXN0LXZhbGlkLXV1aWQtZ3VpZFxuY29uc3QgdXVpZFJlZ2V4ID0gL15bMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfSQvaTtcbmV4cG9ydCBkZWZhdWx0IHV1aWRSZWdleDtcbiIsImNvbnN0IGdldENvaW5zID0gKCkgPT4gTnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29pbnNcIikpO1xuZXhwb3J0IGRlZmF1bHQgZ2V0Q29pbnM7XG4iLCJmdW5jdGlvbiBoYXNWaXNpdGVkKCkge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndmlzaXRlZCcpID09PSAndHJ1ZSc7XG59XG5leHBvcnQgZGVmYXVsdCBoYXNWaXNpdGVkO1xuIiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4uL2NsYXNzZXMvUHJvamVjdFwiO1xuaW1wb3J0IFRvRG8gZnJvbSBcIi4uL2NsYXNzZXMvVG9Eb1wiO1xuZnVuY3Rpb24gbG9hZFByb2plY3RzKCkge1xuICAgIGNvbnN0IHN0cmluZ2lmaWVkSlNPTiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIik7XG4gICAgY29uc3QgcGFyc2VkSlNPTiA9IHN0cmluZ2lmaWVkSlNPTiA/IEpTT04ucGFyc2Uoc3RyaW5naWZpZWRKU09OKSA6IFtdO1xuICAgIHJldHVybiBwYXJzZWRKU09OLm1hcChwID0+IG5ldyBQcm9qZWN0KHAubmFtZSwgcC50b0Rvcy5tYXAodCA9PiBuZXcgVG9Ebyh0LnRpdGxlLCB0LmRlc2NyaXB0aW9uLCBuZXcgRGF0ZSh0LmR1ZURhdGUpLCB0LnByaW9yaXR5LCB0LmlzQ2hlY2tlZCwgdC5JRCkpLCBwLmljb24sIHAuSUQpKTtcbn1cbjtcbmV4cG9ydCBkZWZhdWx0IGxvYWRQcm9qZWN0cztcbiIsImZ1bmN0aW9uIHB1dENvaW5zKGNvaW5zKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb2luc1wiLCBTdHJpbmcoY29pbnMpKTtcbn1cbmV4cG9ydCBkZWZhdWx0IHB1dENvaW5zO1xuIiwiZnVuY3Rpb24gc2V0VmlzaXRlZEZsYWcoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Zpc2l0ZWQnLCAndHJ1ZScpO1xufVxuZXhwb3J0IGRlZmF1bHQgc2V0VmlzaXRlZEZsYWc7XG4iLCJmdW5jdGlvbiBzdG9yZVByb2plY3RzKHByb2plY3RzKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xufVxuZXhwb3J0IGRlZmF1bHQgc3RvcmVQcm9qZWN0cztcbiIsIi8vIHJlZ2lzdGVyIFBXQSBzZXJ2aWNlIHdvcmtlclxuZnVuY3Rpb24gcmVnaXN0ZXJTZXJ2aWNlV29ya2VyKCkge1xuICAgIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJ2h0dHBzOi8vYmxhY2stcmFtLmdpdGh1Yi5pby9UYXNrUXVlc3Qvc2VydmljZS13b3JrZXIuanMnKS50aGVuKHJlZ2lzdHJhdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NXIHJlZ2lzdGVyZWQ6ICcsIHJlZ2lzdHJhdGlvbik7XG4gICAgICAgICAgICB9KS5jYXRjaChyZWdpc3RyYXRpb25FcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NXIHJlZ2lzdHJhdGlvbiBmYWlsZWQ6ICcsIHJlZ2lzdHJhdGlvbkVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgO1xufVxuO1xuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXJTZXJ2aWNlV29ya2VyO1xuIiwiY29uc3QgYXJjYWRlU3RhdGUgPSBcIkdhbWUgVGltZSFcIjtcbmV4cG9ydCBkZWZhdWx0IGFyY2FkZVN0YXRlO1xuIiwiY29uc3QganNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkpTLWluc2VydGlvbi1jb250YWluZXJcIik7XG5leHBvcnQgZGVmYXVsdCBqc0NvbnRhaW5lcjtcbiIsImltcG9ydCBqc0NvbnRhaW5lciBmcm9tIFwiLi4vZG9tQ29uc3RhbnRzL3Byb2plY3RDb250YWluZXJcIjtcbi8vIFdoaWxlIHRoaXMgaXMgYWxsIG1pc2NlbGxhbmVvdXMgRE9NLXJlbGF0ZWQgc3R1ZmZcbi8vIEFuZCBpcyBub3QgZXhhY3RseSBhIGZ1bmN0aW9uLCBpbiB0aGF0IGl0IGRvZXMgbm90IGhhdmUgb25lIHBhcnRpY3VsYXIgcmVzcG9uc2liaWxpdHlcbi8vIGFuZCB0aGF0IGl0IGV2ZXIgbmVlZHMgdG8gYmUgY2FsbGVkIG1vcmUgdGhhbiBvbmNlLFxuLy8gSSBzdGlsbCB3cmFwIGl0IGluIHRoaXMgYW5vbnltb3VzIGZ1bmN0aW9uL2RlZmF1bHQgZXhwb3J0LFxuLy8gU28gdGhhdCB0aGUgbW9kdWxlIGhhcyBubyBcInNpZGUtZWZmZWN0c1wiLlxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpO1xuICAgIGNvbnN0IG1lbnVJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51LWljb25cIik7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhclwiKTtcbiAgICBmdW5jdGlvbiBzaXplQW5kVG9nZ2xlKCkge1xuICAgICAgICAvLyBoaWRlIG1lbnUsIHNob3cgaWNvbiBvbiBtb2JpbGVcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNTc1KSB7XG4gICAgICAgICAgICBpZiAobWVudSkge1xuICAgICAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiLCBcInBvc2l0aW9uLWFic29sdXRlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgaWYgKG1lbnVJY29uKSB7XG4gICAgICAgICAgICAgICAgbWVudUljb24uY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIC8vIGhpZGUgbWVudSBpZiB1c2VyIGNsaWNrcyBhd2F5XG4gICAgICAgICAgICBpZiAobWFpbiAmJiBuYXYgJiYgbWVudSkge1xuICAgICAgICAgICAgICAgIG1haW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW5hdi5jb250YWlucyhlLnRhcmdldCkgJiYgd2luZG93LmlubmVyV2lkdGggPCA1NzUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKG1lbnUpIHtcbiAgICAgICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIiwgXCJwb3NpdGlvbi1hYnNvbHV0ZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtZW51SWNvbikge1xuICAgICAgICAgICAgICAgIG1lbnVJY29uLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2V0IG1haW4gaGVpZ2h0IHRvIHJlbWFpbmluZyBWSCB1bmRlciBoZWFkZXJcbiAgICAgICAgY29uc3QgaGdyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhncm91cFwiKTtcbiAgICAgICAgaWYgKGhncm91cCAmJiBuYXYpIHtcbiAgICAgICAgICAgIGNvbnN0IGhncm91cEhlaWdodCA9IGhncm91cC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICBjb25zdCBhdmFpbGFibGVIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAoaGdyb3VwSGVpZ2h0ICsgMzIpO1xuICAgICAgICAgICAgbmF2LnN0eWxlLmhlaWdodCA9IGAke2F2YWlsYWJsZUhlaWdodH1weGA7XG4gICAgICAgICAgICBuYXYuc3R5bGUubWF4SGVpZ2h0ID0gbmF2LnN0eWxlLmhlaWdodDtcbiAgICAgICAgICAgIGpzQ29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGAke2F2YWlsYWJsZUhlaWdodH1weGA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbWFpbnRhaW4gYXNwZWN0IHJhdGlvIG9uIGFyY2FkZSBpbWFnZSBjYXJkc1xuICAgICAgICBjb25zdCBjYXJkSW1ncyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFyY2FkZS1pbWdcIikpO1xuICAgICAgICBjYXJkSW1ncy5mb3JFYWNoKGltZyA9PiB7XG4gICAgICAgICAgICBpbWcuc3R5bGUuaGVpZ2h0ID0gYCR7aW1nLmNsaWVudFdpZHRofXB4YDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIEFkZCBhbiBldmVudCBsaXN0ZW5lciB0byBjaGVjayBzY3JlZW4gd2lkdGggd2hlbiB0aGUgcGFnZSBsb2FkcyBhbmQgb24gcmVzaXplXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBzaXplQW5kVG9nZ2xlKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc2l6ZUFuZFRvZ2dsZSk7XG4gICAgLy8gc2hvdy9jb2xsYXBzZSBtZW51IHdoZW4gaWNvbiBjbGlja2VkXG4gICAgaWYgKG1lbnVJY29uICYmIG1lbnUpIHtcbiAgICAgICAgbWVudUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoXCJkLW5vbmVcIik7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi4vLi4vY2xhc3Nlcy9Qcm9qZWN0XCI7XG5pbXBvcnQgcHJvamVjdE5hbWVNb2RhbCBmcm9tIFwiLi9wcm9qZWN0TmFtZU1vZGFsXCI7XG5mdW5jdGlvbiBhZGRQcm9qZWN0Rm9ybSgpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0LWJ1dHRvblwiKTtcbiAgICBpZiAoYnV0dG9uKVxuICAgICAgICBwcm9qZWN0TmFtZU1vZGFsKGJ1dHRvbiwgbiA9PiBuZXcgUHJvamVjdChuKSk7XG59XG47XG5leHBvcnQgZGVmYXVsdCBhZGRQcm9qZWN0Rm9ybTtcbiIsImltcG9ydCBUb0RvIGZyb20gXCIuLi8uLi9jbGFzc2VzL1RvRG9cIjtcbmltcG9ydCB0b0RvRm9ybSBmcm9tIFwiLi90b0RvRm9ybVwiO1xuaW1wb3J0IFByb2plY3RzSW5zdGFuY2UgZnJvbSBcIi4uLy4uL2NsYXNzZXMvUHJvamVjdHNcIjtcbmZ1bmN0aW9uIGFkZFRvRG9Gb3JtKGNvbnRhaW5lciwgY29vcmRpbmF0ZXMpIHtcbiAgICAvLyBjcmVhdGUgVG9EbyBmcm9tIHVzZXIgaW5wdXRcbiAgICBmdW5jdGlvbiBjcmVhdGVUb0RvKHByb2plY3RJRCwgdGl0bGUsIGRldGFpbHMsIGRhdGVTdHJpbmcsIHByaW9yaXR5KSB7XG4gICAgICAgIGNvbnN0IG5ld1RvRG8gPSBuZXcgVG9Ebyh0aXRsZSwgZGV0YWlscywgbmV3IERhdGUoZGF0ZVN0cmluZyksIHByaW9yaXR5KTtcbiAgICAgICAgUHJvamVjdHNJbnN0YW5jZS5nZXQocHJvamVjdElEKS5hZGRUb0RvKG5ld1RvRG8pO1xuICAgIH1cbiAgICA7XG4gICAgLy8gaGFuZCBvdmVyIGNyZWF0aW9uIG9mIGZvcm0gdG8gbG93ZXItbGV2ZWwgZnVuY3Rpb24gdG9Eb0Zvcm0oKVxuICAgIHRvRG9Gb3JtKGNvbnRhaW5lciwgY29vcmRpbmF0ZXMsIGNyZWF0ZVRvRG8pO1xufVxuZXhwb3J0IGRlZmF1bHQgYWRkVG9Eb0Zvcm07XG4iLCJpbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB0b0RvRm9ybSBmcm9tIFwiLi90b0RvRm9ybVwiO1xuaW1wb3J0IFByb2plY3RzSW5zdGFuY2UgZnJvbSBcIi4uLy4uL2NsYXNzZXMvUHJvamVjdHNcIjtcbmZ1bmN0aW9uIGVkaXRUb0RvRm9ybSh0b0RvLCBjb250YWluZXIsIGNvb3JkaW5hdGVzKSB7XG4gICAgY29uc3QgZWRpdERldGFpbHMgPSAocHJvamVjdElELCB0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGVTdHJpbmcsIHByaW9yaXR5KSA9PiB7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKTtcbiAgICAgICAgdG9Eby51cGRhdGVQcm9wZXJ0aWVzKHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSB9KTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gUHJvamVjdHNJbnN0YW5jZS5nZXQocHJvamVjdElEKTtcbiAgICAgICAgc2VsZWN0ZWRQcm9qZWN0LnRha2VUb0RvRnJvbUFub3RoZXIodG9Ebyk7XG4gICAgfTtcbiAgICBjb25zdCBlbGVtZW50cyA9IHRvRG9Gb3JtKGNvbnRhaW5lciwgY29vcmRpbmF0ZXMsIGVkaXREZXRhaWxzKTtcbiAgICAvLyBpbmNsdWRlIHRoZSB0ZXh0IG9mIHByZXZpb3VzIHRvZG8gZGV0YWlsc1xuICAgIGlmIChlbGVtZW50cykge1xuICAgICAgICBlbGVtZW50cy50aXRsZUlucHV0LnZhbHVlID0gdG9Eby50aXRsZTtcbiAgICAgICAgZWxlbWVudHMuZGV0YWlsc0lucHV0LnZhbHVlID0gdG9Eby5kZXNjcmlwdGlvbjtcbiAgICAgICAgZWxlbWVudHMuZGF0ZUlucHV0LnZhbHVlID0gZm9ybWF0KHRvRG8uZHVlRGF0ZSwgXCJ5eXl5LU1NLWRkXCIpO1xuICAgICAgICBlbGVtZW50cy5zdWJtaXQuaW5uZXJUZXh0ID0gXCJFZGl0XCI7XG4gICAgfVxuICAgIDtcbn1cbjtcbmV4cG9ydCBkZWZhdWx0IGVkaXRUb0RvRm9ybTtcbiIsImZ1bmN0aW9uIHByb2plY3ROYW1lTW9kYWwob3BlbmluZ0J1dHRvbiwgY2FsbGJhY2ssIGluaXRpYWxOYW1lKSB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhclwiKTtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1uYW1lLWZvcm0tY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbmFtZS1mb3JtXCIpO1xuICAgIGNvbnN0IG5hbWVGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1uYW1lXCIpO1xuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1uYW1lLWZvcm0tcmVzZXRcIik7XG4gICAgLy8gSSBrbm93IGluc3RhbmNlb2YgY2FuJ3QgYmUgdXNlZCB3aXRoIGEgVHlwZXNjcmlwdCBpbnRlcmZhY2UuXG4gICAgLy8gQnV0IGl0J3MgZm9yIHRyaWNraW5nIGludGVsbGlzZW5zZS4gOilcbiAgICBpZiAoIShzaWRlYmFyICYmIG1vZGFsIGluc3RhbmNlb2YgSFRNTERpYWxvZ0VsZW1lbnQgJiYgZm9ybSBpbnN0YW5jZW9mIEhUTUxGb3JtRWxlbWVudCAmJiBuYW1lRmllbGQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmIGNhbmNlbEJ1dHRvbikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwicHJvamVjdE5hbWVNb2RhbCBmdW5jdGlvbiBkaWQgbm90IGZpbmQgbmVjZXNzYXJ5IERPTSBlbGVtZW50cy5cIik7XG4gICAgfVxuICAgIDtcbiAgICBvcGVuaW5nQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIC8vIHBvc2l0aW9uIGFuZCBzaG93XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IG9wZW5pbmdCdXR0b24ucGFyZW50RWxlbWVudDtcbiAgICAgICAgaWYgKCFwYXJlbnQpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpY29uIGlzIGFuIG9ycGhhblwiKTtcbiAgICAgICAgY29uc3QgaWNvblRvcCA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDUwMCkge1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUudG9wID0gYCR7aWNvblRvcCAtIDQwfXB4YDtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmxlZnQgPSBgJHsoc2lkZWJhciA9PT0gbnVsbCB8fCBzaWRlYmFyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzaWRlYmFyLmNsaWVudFdpZHRoKSAtIDM1fXB4YDtcbiAgICAgICAgICAgIG1vZGFsLnNob3dNb2RhbCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUudG9wID0gYCR7aWNvblRvcCAtIDgwfXB4YDtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmxlZnQgPSBcIjFyZW1cIjtcbiAgICAgICAgICAgIG1vZGFsLnNob3dNb2RhbCgpO1xuICAgICAgICB9XG4gICAgICAgIDtcbiAgICAgICAgLy8gaW4gY2FzZSB0aGlzIGlzIGZvciByZW5hbWluZ1xuICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgICAgIGlmIChpbml0aWFsTmFtZSlcbiAgICAgICAgICAgIG5hbWVGaWVsZC52YWx1ZSA9IGluaXRpYWxOYW1lO1xuICAgICAgICAvLyBwcmVwYXJlIGZvciBzdWJtaXNzaW9uXG4gICAgICAgIGNvbnN0IGNsZWFuVXAgPSAoKSA9PiB7XG4gICAgICAgICAgICBmb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlU3VibWlzc2lvbik7IC8vIGF2b2lkIGV2ZW50IGxpc3RlbmVycyBwaWxpbmcgdXAuXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGhhbmRsZVN1Ym1pc3Npb24gPSAoKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayhuYW1lRmllbGQudmFsdWUpO1xuICAgICAgICAgICAgY2xlYW5VcCgpO1xuICAgICAgICB9O1xuICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlU3VibWlzc2lvbik7XG4gICAgICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgbW9kYWwuY2xvc2UoKTtcbiAgICAgICAgICAgIGNsZWFuVXAoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG47XG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0TmFtZU1vZGFsO1xuIiwiaW1wb3J0IFByb2plY3RzSW5zdGFuY2UgZnJvbSBcIi4uLy4uL2NsYXNzZXMvUHJvamVjdHNcIjtcbmltcG9ydCBUb0RvUHJpb3JpdHkgZnJvbSBcIi4uLy4uL2VudW1zL1RvRG9Qcmlvcml0eVwiO1xuZnVuY3Rpb24gdG9Eb0Zvcm0oY29udGFpbmVyLCBwb3NpdGlvbiwgZm9ybUFjdGlvbikge1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidG8tZG8tZm9ybVwiKVswXSlcbiAgICAgICAgcmV0dXJuOyAvLyBwcmV2ZW50IGR1cGxpY2F0ZXNcbiAgICAvLyBIVE1MIGVsZW1lbnQgY3JlYXRpb25cbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGNvbnN0IHByb2plY3RHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgcHJvamVjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgY29uc3QgdGl0bGVHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgZGV0YWlsc0dyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBkZXRhaWxzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBjb25zdCBkZXRhaWxzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgZGF0ZUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBkYXRlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgcHJpb3JpdHlHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgcHJpb3JpdHlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgY29uc3QgcHJpb3JpdHlCdG4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBwcmlvcml0eUJ0bjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IHByaW9yaXR5QnRuMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3Qgc3VibWl0R3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAvLyBib290c3RyYXAgY2xhc3Nlc1xuICAgIHByb2plY3RHcm91cC5jbGFzc0xpc3QuYWRkKFwiZC1mbGV4XCIsIFwiYWxpZ24taXRlbXMtY2VudGVyXCIsIFwibWItM1wiLCBcImdhcC0zXCIpO1xuICAgIHRpdGxlR3JvdXAuY2xhc3NMaXN0LmFkZChcImQtZmxleFwiLCBcImFsaWduLWl0ZW1zLWNlbnRlclwiLCBcIm1iLTNcIiwgXCJnYXAtM1wiKTtcbiAgICBkZXRhaWxzR3JvdXAuY2xhc3NMaXN0LmFkZChcImQtZmxleFwiLCBcImFsaWduLWl0ZW1zLWNlbnRlclwiLCBcIm1iLTNcIiwgXCJnYXAtM1wiKTtcbiAgICBkYXRlR3JvdXAuY2xhc3NMaXN0LmFkZChcImQtZmxleFwiLCBcImFsaWduLWl0ZW1zLWNlbnRlclwiLCBcIm1iLTNcIiwgXCJnYXAtM1wiKTtcbiAgICBwcmlvcml0eUdyb3VwLmNsYXNzTGlzdC5hZGQoXCJkLWZsZXhcIiwgXCJhbGlnbi1pdGVtcy1jZW50ZXJcIiwgXCJtYi0zXCIpO1xuICAgIHN1Ym1pdEdyb3VwLmNsYXNzTGlzdC5hZGQoXCJkLWZsZXhcIiwgXCJhbGlnbi1pdGVtcy1jZW50ZXJcIiwgXCJqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIsIFwibWItM1wiLCBcImdhcC0zXCIpO1xuICAgIHRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udHJvbFwiKTtcbiAgICBkZXRhaWxzSW5wdXQuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udHJvbFwiKTtcbiAgICBkYXRlSW5wdXQuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udHJvbFwiKTtcbiAgICBzdWJtaXQuY2xhc3NMaXN0LmFkZChcImJnLXN1Y2Nlc3NcIik7XG4gICAgY2FuY2VsLmNsYXNzTGlzdC5hZGQoXCJiZy1kYW5nZXJcIik7XG4gICAgcHJvamVjdFNlbGVjdC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1zZWxlY3RcIik7XG4gICAgcHJpb3JpdHlCdG4xLmNsYXNzTGlzdC5hZGQoXCJiZy1zdWNjZXNzLXN1YnRsZVwiLCBcIm14LTFcIik7XG4gICAgcHJpb3JpdHlCdG4yLmNsYXNzTGlzdC5hZGQoXCJiZy13YXJuaW5nLXN1YnRsZVwiLCBcIm14LTFcIik7XG4gICAgcHJpb3JpdHlCdG4zLmNsYXNzTGlzdC5hZGQoXCJiZy1kYW5nZXItc3VidGxlXCIsIFwibXgtMVwiKTtcbiAgICAvLyB0ZXh0IGNvbnRlbnRcbiAgICBwcm9qZWN0VGV4dC5pbm5lclRleHQgPSBcIlByb2plY3Q6XCI7XG4gICAgdGl0bGVUZXh0LmlubmVyVGV4dCA9IFwiVGl0bGU6XCI7XG4gICAgZGV0YWlsc1RleHQuaW5uZXJUZXh0ID0gXCJEZXRhaWxzOlwiO1xuICAgIGRhdGVUZXh0LmlubmVyVGV4dCA9IFwiRGF0ZTpcIjtcbiAgICBwcmlvcml0eVRleHQuaW5uZXJUZXh0ID0gXCJQcmlvcml0eTpcIjtcbiAgICBwcmlvcml0eUJ0bjEuaW5uZXJUZXh0ID0gXCJsb3dcIjtcbiAgICBwcmlvcml0eUJ0bjIuaW5uZXJUZXh0ID0gXCJtZWRcIjtcbiAgICBwcmlvcml0eUJ0bjMuaW5uZXJUZXh0ID0gXCJoaWdoXCI7XG4gICAgc3VibWl0LmlubmVyVGV4dCA9IFwiQWRkXCI7XG4gICAgY2FuY2VsLmlubmVyVGV4dCA9IFwiQ2FuY2VsXCI7XG4gICAgLy8gYXR0cmlidXRlc1xuICAgIGZvcm0ubWV0aG9kID0gXCJkaWFsb2dcIjtcbiAgICBwcm9qZWN0U2VsZWN0LmlkID0gXCJwcm9qZWN0LXNlbGVjdFwiO1xuICAgIHByb2plY3RUZXh0Lmh0bWxGb3IgPSBcInByb2plY3Qtc2VsZWN0XCI7XG4gICAgdGl0bGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgdGl0bGVJbnB1dC5pZCA9IFwidGl0bGVcIjtcbiAgICB0aXRsZVRleHQuaHRtbEZvciA9IFwidGl0bGVcIjtcbiAgICBkZXRhaWxzSW5wdXQuaWQgPSBcImRldGFpbHNcIjtcbiAgICBkZXRhaWxzVGV4dC5odG1sRm9yID0gXCJkZXRhaWxzXCI7XG4gICAgZGF0ZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBkYXRlSW5wdXQuaWQgPSBcImRhdGVcIjtcbiAgICBkYXRlVGV4dC5odG1sRm9yID0gXCJkYXRlXCI7XG4gICAgZGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcbiAgICBwcmlvcml0eUJ0bjEudHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgcHJpb3JpdHlCdG4yLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIHByaW9yaXR5QnRuMy50eXBlID0gXCJidXR0b25cIjtcbiAgICBwcmlvcml0eUJ0bjEudGl0bGUgPSBcImxvdyBwcmlvcml0eVwiO1xuICAgIHByaW9yaXR5QnRuMi50aXRsZSA9IFwibWVkaXVtIHByaW9yaXR5XCI7XG4gICAgcHJpb3JpdHlCdG4zLnRpdGxlID0gXCJoaWdoIHByaW9yaXR5XCI7XG4gICAgc3VibWl0LnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgIGNhbmNlbC50eXBlID0gXCJyZXNldFwiO1xuICAgIC8vIHByaW9yaXR5IG51bWJlciBpbnB1dFxuICAgIGxldCBwcmlvcml0eTtcbiAgICBwcmlvcml0eUJ0bjEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcHJpb3JpdHkgPSBUb0RvUHJpb3JpdHkuTG93O1xuICAgIH0pO1xuICAgIHByaW9yaXR5QnRuMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBwcmlvcml0eSA9IFRvRG9Qcmlvcml0eS5NZWRpdW07XG4gICAgfSk7XG4gICAgcHJpb3JpdHlCdG4zLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHByaW9yaXR5ID0gVG9Eb1ByaW9yaXR5LkhpZ2g7XG4gICAgfSk7XG4gICAgLy8gc2ltcGx5IGNsb3NlIGZvcm0gb24gY2FuY2VsXG4gICAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChtb2RhbCk7XG4gICAgfSk7XG4gICAgLy8gcnVuIG5lY2Vzc2FyeSBhY3Rpb24gd2hlbiBzdWJtaXR0ZWRcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKCkgPT4ge1xuICAgICAgICBmb3JtQWN0aW9uKHByb2plY3RTZWxlY3QudmFsdWUsIHRpdGxlSW5wdXQudmFsdWUsIGRldGFpbHNJbnB1dC52YWx1ZSwgZGF0ZUlucHV0LnZhbHVlLCBwcmlvcml0eSk7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChtb2RhbCk7XG4gICAgfSk7XG4gICAgLy8gYWRkaW5nIHRvIERPTVxuICAgIGZvciAoY29uc3QgcHJvamVjdCBvZiBQcm9qZWN0c0luc3RhbmNlLmdldEFsbCgpKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBwcm9qZWN0T3B0aW9uLmlubmVyVGV4dCA9IHByb2plY3QubmFtZTtcbiAgICAgICAgcHJvamVjdE9wdGlvbi52YWx1ZSA9IHByb2plY3QuSUQ7XG4gICAgICAgIHByb2plY3RTZWxlY3QuYXBwZW5kQ2hpbGQocHJvamVjdE9wdGlvbik7XG4gICAgfVxuICAgIDtcbiAgICBwcm9qZWN0R3JvdXAuYXBwZW5kQ2hpbGQocHJvamVjdFRleHQpO1xuICAgIHByb2plY3RHcm91cC5hcHBlbmRDaGlsZChwcm9qZWN0U2VsZWN0KTtcbiAgICB0aXRsZUdyb3VwLmFwcGVuZENoaWxkKHRpdGxlVGV4dCk7XG4gICAgdGl0bGVHcm91cC5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcbiAgICBkZXRhaWxzR3JvdXAuYXBwZW5kQ2hpbGQoZGV0YWlsc1RleHQpO1xuICAgIGRldGFpbHNHcm91cC5hcHBlbmRDaGlsZChkZXRhaWxzSW5wdXQpO1xuICAgIGRhdGVHcm91cC5hcHBlbmRDaGlsZChkYXRlVGV4dCk7XG4gICAgZGF0ZUdyb3VwLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG4gICAgcHJpb3JpdHlHcm91cC5hcHBlbmRDaGlsZChwcmlvcml0eVRleHQpO1xuICAgIHByaW9yaXR5R3JvdXAuYXBwZW5kQ2hpbGQocHJpb3JpdHlCdG4xKTtcbiAgICBwcmlvcml0eUdyb3VwLmFwcGVuZChwcmlvcml0eUJ0bjIpO1xuICAgIHByaW9yaXR5R3JvdXAuYXBwZW5kKHByaW9yaXR5QnRuMyk7XG4gICAgc3VibWl0R3JvdXAuYXBwZW5kQ2hpbGQoc3VibWl0KTtcbiAgICBzdWJtaXRHcm91cC5hcHBlbmRDaGlsZChjYW5jZWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdEdyb3VwKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlR3JvdXApO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGV0YWlsc0dyb3VwKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRhdGVHcm91cCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUdyb3VwKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEdyb3VwKTtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWwpO1xuICAgIG1vZGFsLnNob3dNb2RhbCgpO1xuICAgIC8vIHBvc2l0aW9uIG1vZGFsXG4gICAgY29uc3QgcG9zaXRpb25Ub29Mb3cgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyICsgMTAwIDwgcG9zaXRpb24uYm90dG9tO1xuICAgIGlmIChwb3NpdGlvblRvb0xvdykge1xuICAgICAgICBtb2RhbC5zdHlsZS50b3AgPSBgJHtwb3NpdGlvbi50b3AgLSBtb2RhbC5jbGllbnRIZWlnaHQgLSAxNX1weGA7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBtb2RhbC5zdHlsZS50b3AgPSBgJHtwb3NpdGlvbi5ib3R0b219cHhgO1xuICAgIH1cbiAgICBtb2RhbC5zdHlsZS5sZWZ0ID0gYCR7cG9zaXRpb24ubGVmdH1weGA7XG4gICAgbW9kYWwuc3R5bGUucmlnaHQgPSAnMS41cmVtJztcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwibXQtMFwiKTtcbiAgICByZXR1cm4geyB0aXRsZUlucHV0LCBkZXRhaWxzSW5wdXQsIGRhdGVJbnB1dCwgc3VibWl0IH07XG59XG47XG5leHBvcnQgZGVmYXVsdCB0b0RvRm9ybTtcbiIsImltcG9ydCBlIGZyb20gXCIuL2VsZW1lbnREaWN0aW9uYXJ5XCI7XG5jb25zdCBjYXRlZ29yeVN0ZXBzID0gW1xuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiVGFza1F1ZXN0IEFob3khXCIsXG4gICAgICAgIGludHJvOiBcIkl0J3MgZnVuLiBJdCdzIHNpbXBsZS4gTWVldCB0aGUgb25seSB0by1kbyBhcHAgeW91J2xsIGV2ZXIgbmVlZCFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZWxlbWVudDogZS5iYW5uZXIuZ2V0KCksXG4gICAgICAgIHRpdGxlOiBcIkRlZmluZTogY2F0ZWdvcnlcIixcbiAgICAgICAgaW50cm86IFwiVGhpcyBpcyBhIGdyb3VwIHdoaWNoIGZpbHRlcnMgdG8tZG9zIGFuZCBzb3J0cyB0aGVtIGJ5IHByaW9yaXR5IGFuZCBkdWUgZGF0ZS4gPGI+J0FsbCBUYXNrcyc8L2I+IGluY2x1ZGVzIGV2ZXJ5dGhpbmcuXCIsXG4gICAgICAgIHBvc2l0aW9uOiBcInJpZ2h0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZWxlbWVudDogZS50b0RvQXJ0aWNsZTEuZ2V0KCksXG4gICAgICAgIHRpdGxlOiBcIkEgVG8tRG8gRWxlbWVudFwiLFxuICAgICAgICBpbnRybzogXCJHZXQgYSBnbGFuY2Ugb2YgdGhlIHRpdGxlLCBkdWUgZGF0ZSwgYW5kIG90aGVyIGRldGFpbHMuIENsaWNrIHRoZSBjaGVja2JveCB0byB0aWNrIGl0IG9mZiFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBlbGVtZW50OiBlLnRvRG9BcnRpY2xlMi5nZXQoKSxcbiAgICAgICAgdGl0bGU6IFwiSW1wb3J0YW5jZSBsYWJlbHNcIixcbiAgICAgICAgaW50cm86IFwiTm90aWNlIHRoZSBib3JkZXIgY29sb3I/IEl0J3MgYmVjYXVzZSBoaWdoLXByaW9yaXR5IHRvLWRvcyBhcmUgbGFiZWxlZCByZWQuXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZWxlbWVudDogZS50b0RvQXJ0aWNsZTMuZ2V0KCksXG4gICAgICAgIHRpdGxlOiBcIk92ZXJkdWUgOihcIixcbiAgICAgICAgaW50cm86IFwiVGhlIGJyb256ZSBiYWNrZ3JvdW5kIHNob3dzIHRoYXQgdGhpcyB0by1kbydzIGR1ZSBkYXRlIGhhcyBwYXNzZWQuXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZWxlbWVudDogZS50b0RvQXJ0aWNsZTQuZ2V0KCksXG4gICAgICAgIHRpdGxlOiBcIkxhYmVscyBjb250aW51ZWRcIixcbiAgICAgICAgaW50cm86IFwiVGhlIG9yYW5nZSBib3JkZXIgaGVyZSBzaG93cyB0aGlzIGlzIGEgbWVkaXVtLXByaW9yaXR5IHRvLWRvLlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGVsZW1lbnQ6IGUudG9Eb0FydGljbGU1LmdldCgpLFxuICAgICAgICB0aXRsZTogXCJEYXRlIHNvcnRpbmdcIixcbiAgICAgICAgaW50cm86IFwiQXMgc3VnZ2VzdGVkLCBpbiBhIGNhdGVnb3J5IHRvLWRvcyB0aGF0IGFyZSBvZiB0aGUgc2FtZSBpbXBvcnRhbmNlIGFyZSBmdXJ0aGVyIHNvcnRlZCBieSBkdWUgZGF0ZSAoaW4gZGVzY2VuZGluZyBvcmRlcikuXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZWxlbWVudDogZS50b0RvQXJ0aWNsZTYuZ2V0KCksXG4gICAgICAgIHRpdGxlOiBcIkN1Y3VtYmVyLWNvb2xcIixcbiAgICAgICAgaW50cm86IFwiVGhpcyBncmVlbiBib3JkZXIganVzdCBtZWFucyB0aGlzIHRvLWRvIGlzIGxvdy1wcmlvcml0eS5cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBlbGVtZW50OiBlLm1lbnVJY29uLmlzVmlzaWJsZSgpID8gZS5tZW51SWNvbi5nZXQoKSA6IGUubmF2QmFyLmdldCgpLFxuICAgICAgICB0aXRsZTogXCJUaGUgbWVudVwiLFxuICAgICAgICBpbnRybzogZS5tZW51SWNvbi5pc1Zpc2libGUoKSA/IFwiQ2xpY2sgdGhlIGljb24gdG8gb3BlbiB0aGUgc2lkZS1iYXIgYW5kIGRpc2NvdmVyIG1vcmUhXCIgOiBcIk5hdmlnYXRlIHRoZSB0byB0aGUgb3RoZXIgcGFnZXMgZnJvbSB0aGlzIHNpZGViYXIuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGVsZW1lbnQ6IGUudG91ckJ1dHRvbi5nZXQoKSxcbiAgICAgICAgdGl0bGU6IFwiQSBRdWljayBSZW1pbmRlclwiLFxuICAgICAgICBpbnRybzogXCJUaGlzIHRvdXIgd2lsbCBub3Qgc2hvdyB3aGVuIHlvdSBjb21lIGJhY2suIEV2ZXIgbmVlZCB0aGlzIHRvdXIgYWdhaW4/IEp1c3QgdGFwIHRoaXMgYnV0dG9uLlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGVsZW1lbnQ6IGUuY2F0ZWdvcnkyLmdldCgpLFxuICAgICAgICB0aXRsZTogXCJFeGFtcGxlIGNhdGVnb3J5XCIsXG4gICAgICAgIGludHJvOiBcIlRoZSA8Yj4nSW1wb3J0YW50JzwvYj4gY2F0ZWdvcnkgc3RvcmVzIG9ubHkgaGlnaC1wcmlvcml0eSB0by1kb3MuXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZWxlbWVudDogZS5wcm9qZWN0SGVhZGVyLmdldCgpLFxuICAgICAgICB0aXRsZTogXCJBYm91dCBQcm9qZWN0c1wiLFxuICAgICAgICBpbnRybzogXCJUaGVzZSBhcmUgdGhlIGdyb3VwcyBvZiB0by1kb3MgdGhhdCA8aT55b3U8L2k+IG1ha2UuXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZWxlbWVudDogZS5hZGRQcm9qZWN0SWNvbi5nZXQoKSxcbiAgICAgICAgdGl0bGU6IFwiTWFrZSB5b3VyIG93biFcIixcbiAgICAgICAgaW50cm86IFwiQWZ0ZXIgY2xvc2luZyB0aGUgdG91ciwgeW91IGNhbiBjbGljayB0aGUgcGx1cyBpY29uIHRvIGFkZCB5b3VyIG93biBwcm9qZWN0IVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGVsZW1lbnQ6IGUucHJvamVjdExpbmtMSS5nZXQoKSxcbiAgICAgICAgdGl0bGU6IFwiRm9yIGV4YW1wbGUuLi5cIixcbiAgICAgICAgaW50cm86IFwiTG9vayBpbnRvIHRoaXMgcHJvamVjdCBJIG1hZGUganVzdCBmb3IgeW91IVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGVsZW1lbnQ6IGUucHJvamVjdExpbmsuZ2V0KCksXG4gICAgICAgIHRpdGxlOiBcIlRyb3VibGUgb3BlbmluZz9cIixcbiAgICAgICAgaW50cm86IFwiPHNtYWxsPihTZWxlY3QgZG9uZSBhbmQgdGhlbiB5b3UgY2FuIG9wZW4gdGhlIHBhZ2UuKTwvc21hbGw+XCJcbiAgICB9XG5dO1xuZXhwb3J0IGRlZmF1bHQgY2F0ZWdvcnlTdGVwcztcbiIsIi8vIGZhY3RvcnkgZnVuY3Rpb24gcGF0dGVybiBmb3IgbW9yZSBkeW5hbWljIG9iamVjdCBjcmVhdGlvblxuY29uc3QgY3JlYXRlRWxlbWVudERpY3Rpb25hcnkgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3RlcEVsZW1lbnQgPSAoZ2V0LCBzdGFnZWhhbmQgPSBmYWxzZSwgY2hhbmdlciA9IGZhbHNlKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzVmlzaWJsZSA9ICgpID0+IHsgdmFyIF9hOyByZXR1cm4gISgoX2EgPSBnZXQoKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNsYXNzTGlzdC5jb250YWlucyhcImQtbm9uZVwiKSk7IH07XG4gICAgICAgIHJldHVybiB7IGdldCwgc3RhZ2VoYW5kLCBjaGFuZ2VyLCBpc1Zpc2libGUgfTtcbiAgICB9O1xuICAgIGNvbnN0IGJhbm5lciA9IHN0ZXBFbGVtZW50KCgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaDJcIilbMF0pO1xuICAgIGNvbnN0IHRvRG9BcnRpY2xlMSA9IHN0ZXBFbGVtZW50KCgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYXJ0aWNsZVwiKVswXSwgZmFsc2UsIHRydWUpO1xuICAgIGNvbnN0IHRvRG9BcnRpY2xlMiA9IHN0ZXBFbGVtZW50KCgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYXJ0aWNsZVwiKVsxXSwgZmFsc2UsIHRydWUpO1xuICAgIGNvbnN0IHRvRG9BcnRpY2xlMyA9IHN0ZXBFbGVtZW50KCgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYXJ0aWNsZVwiKVsyXSwgZmFsc2UsIHRydWUpO1xuICAgIGNvbnN0IHRvRG9BcnRpY2xlNCA9IHN0ZXBFbGVtZW50KCgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYXJ0aWNsZVwiKVszXSwgZmFsc2UsIHRydWUpO1xuICAgIGNvbnN0IHRvRG9BcnRpY2xlNSA9IHN0ZXBFbGVtZW50KCgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYXJ0aWNsZVwiKVs0XSwgZmFsc2UsIHRydWUpO1xuICAgIGNvbnN0IHRvRG9BcnRpY2xlNiA9IHN0ZXBFbGVtZW50KCgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYXJ0aWNsZVwiKVs1XSwgZmFsc2UsIHRydWUpO1xuICAgIGNvbnN0IG1lbnVJY29uID0gc3RlcEVsZW1lbnQoKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51LWljb25cIiksIGZhbHNlLCB0cnVlKTtcbiAgICBjb25zdCBzaWRlYmFyID0gc3RlcEVsZW1lbnQoKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJuYXZcIilbMF0pO1xuICAgIGNvbnN0IHRvdXJCdXR0b24gPSBzdGVwRWxlbWVudCgoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uW3RpdGxlPSdjcmVhdGUgdG91ciddXCIpKTtcbiAgICBjb25zdCBjYXRlZ29yeTIgPSBzdGVwRWxlbWVudCgoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2NhdGVnb3J5LWxpc3QgPiBsaVwiKVsxXSk7XG4gICAgY29uc3QgYWRkUHJvamVjdEljb24gPSBzdGVwRWxlbWVudCgoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0LWljb25cIikpO1xuICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBzdGVwRWxlbWVudCgoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtaGVhZGVyXCIpKTtcbiAgICBjb25zdCBwcm9qZWN0TGlua0xJID0gc3RlcEVsZW1lbnQoKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWxpc3RcIikpO1xuICAgIGNvbnN0IHByb2plY3RMaW5rID0gc3RlcEVsZW1lbnQoKCkgPT4ge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3Byb2plY3QtbGlzdCA+IGxpID4gcFwiKVswXTtcbiAgICAgICAgKF9hID0gc2lkZWJhci5nZXQoKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBpZiAobWVudUljb24uaXNWaXNpYmxlKCkgJiYgc2lkZWJhci5pc1Zpc2libGUoKSkge1xuICAgICAgICAgICAgICAgIChfYSA9IHNpZGViYXIuZ2V0KCkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGxpbms7XG4gICAgfSwgdHJ1ZSk7XG4gICAgY29uc3QgYWRkVG9Eb0ljb24gPSBzdGVwRWxlbWVudCgoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaS5iaS1qb3VybmFsLXBsdXNcIikpO1xuICAgIGNvbnN0IGdhbWVJY29uID0gc3RlcEVsZW1lbnQoKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWljb25cIiksIHRydWUpO1xuICAgIGNvbnN0IGdhbWVJbWcgPSBzdGVwRWxlbWVudCgoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImltZ1wiKVswXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYmFubmVyLFxuICAgICAgICB0b0RvQXJ0aWNsZTEsXG4gICAgICAgIHRvRG9BcnRpY2xlMixcbiAgICAgICAgdG9Eb0FydGljbGUzLFxuICAgICAgICB0b0RvQXJ0aWNsZTQsXG4gICAgICAgIHRvRG9BcnRpY2xlNSxcbiAgICAgICAgdG9Eb0FydGljbGU2LFxuICAgICAgICBtZW51SWNvbixcbiAgICAgICAgc2lkZWJhcixcbiAgICAgICAgdG91ckJ1dHRvbixcbiAgICAgICAgY2F0ZWdvcnkyLFxuICAgICAgICBwcm9qZWN0SGVhZGVyLFxuICAgICAgICBwcm9qZWN0TGluayxcbiAgICAgICAgcHJvamVjdExpbmtMSSxcbiAgICAgICAgYWRkUHJvamVjdEljb24sXG4gICAgICAgIGFkZFRvRG9JY29uLFxuICAgICAgICBnYW1lSWNvbixcbiAgICAgICAgZ2FtZUltZ1xuICAgIH07XG59O1xuLy8gc2luZ2xldG9uXG5jb25zdCBlbGVtZW50RGljdGlvbmFyeSA9IGNyZWF0ZUVsZW1lbnREaWN0aW9uYXJ5KCk7XG5leHBvcnQgZGVmYXVsdCBlbGVtZW50RGljdGlvbmFyeTtcbiIsImltcG9ydCBlIGZyb20gXCIuL2VsZW1lbnREaWN0aW9uYXJ5XCI7XG5jb25zdCBnYW1lU3RlcHMgPSBbXG4gICAge1xuICAgICAgICBlbGVtZW50OiBlLnRvRG9BcnRpY2xlMS5nZXQoKSxcbiAgICAgICAgdGl0bGU6IFwiV29yayBoYXJkISBQbGF5IGhhcmQhXCIsXG4gICAgICAgIGludHJvOiBcIlVzaW5nIHRob3NlIGNvaW5zIHlvdSBlYXJuIGZyb20gY29tcGxldGluZyB0by1kb3MsIHlvdSBjYW4gcGF5IGZvciBhIDUtbWludXRlIGdhbWUgc2Vzc2lvbiFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZWxlbWVudDogZS5nYW1lSW1nLmdldCgpLFxuICAgICAgICB0aXRsZTogXCJHYW1lIHRpbWUuXCIsXG4gICAgICAgIGludHJvOiBcIkNsaWNrIHRoZSBnYW1lJ3MgdGh1bWJuYWlsIHRvIHBsYXkuIFdoZW4geW91IGRvLCB0aGUgYW1vdW50IG9mIGNvaW5zIHNwZWNpZmllZCBvbiB0aGUgY2FyZCB3aWxsIGJlIGRlZHVjdGVkLlwiLFxuICAgICAgICBwb3NpdGlvbjogXCJyaWdodFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIkJ5LXRoZS13YXlcIixcbiAgICAgICAgaW50cm86IFwiWW91IGNhbiBkb3dubG9hZCB0aGlzIGFzIGFuIGFwcCB3aXRoIG9mZmxpbmUgYWNjZXNzLiBFbmpveSB0aGUgcHJvZHVjdGl2aXR5IGdhaW5zIVwiXG4gICAgfSxcbl07XG5leHBvcnQgZGVmYXVsdCBnYW1lU3RlcHM7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCBQcm9qZWN0c0luc3RhbmNlIGZyb20gXCIuLi8uLi9jbGFzc2VzL1Byb2plY3RzXCI7XG5pbXBvcnQgcG9wdWxhdGVUdXRvcmlhbFByb2plY3QgZnJvbSBcIi4uLy4uL2Z1bmN0aW9ucy9wb3B1bGF0ZUluaXRpYWxQcm9qZWN0c1wiO1xuaW1wb3J0IHNob3dBbGxUYXNrcyBmcm9tIFwiLi4vb3V0cHV0cy9zaG93QWxsVGFza3NcIjtcbmltcG9ydCBlIGZyb20gXCIuL2VsZW1lbnREaWN0aW9uYXJ5XCI7XG5pbXBvcnQgc3RhZ2VzIGZyb20gXCIuL3N0YWdlc1wiO1xuZnVuY3Rpb24gcmVuZGVyT25ib2FyZGluZygpIHtcbiAgICBpZiAoIVByb2plY3RzSW5zdGFuY2UucHJvamVjdEV4aXN0cyhwID0+IHAubmFtZSA9PT0gXCJUdXRvcmlhbFwiKSlcbiAgICAgICAgcG9wdWxhdGVUdXRvcmlhbFByb2plY3QoKTtcbiAgICBzaG93QWxsVGFza3MoKTsgLy8gbXVzdCBiZSBhZnRlciBwb3B1bGF0ZVR1dG9yaWFsUHJvamVjdCBmb3IgdGhlIHNhbWUgcmVhc29uIGV4cGxhaW5lZCBpbiBhcHAudHMgY29tbWVudHMuXG4gICAgc2V0VGltZW91dCgoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGxldCBzdGFnZUluZGV4ID0gMDtcbiAgICAgICAgLy8gZGlzcGxheSBzdGFnZSBvbmVcbiAgICAgICAgbGV0IGN1cnJlbnRTdGFnZSA9IHN0YWdlc1tzdGFnZUluZGV4XSgpO1xuICAgICAgICAvLyBzZXQgdXAgc3RhZ2UtY2hhbmdlcnNcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIGluIGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvdXIgPSB5aWVsZCBjdXJyZW50U3RhZ2U7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZVtuYW1lXTtcbiAgICAgICAgICAgIGNvbnN0IERPTUVsZW1lbnQgPSBlbGVtZW50LmdldCgpO1xuICAgICAgICAgICAgbGV0IGFjdGlvbiA9IG51bGw7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5zdGFnZWhhbmQpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24gPSAoKSA9PiBjdXJyZW50U3RhZ2UgPSBzdGFnZXNbKytzdGFnZUluZGV4XSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZWxlbWVudC5jaGFuZ2VyKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uID0gKCkgPT4gc2V0VGltZW91dCgoKSA9PiB7IHRvdXIubmV4dFN0ZXAoKTsgfSwgNTAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGlmIChET01FbGVtZW50ICYmIHRvdXIuaXNBY3RpdmUoKSAmJiBhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhY3Rpb24sIHsgb25jZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDtcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgfSksIDE1MDApO1xufVxuO1xuZXhwb3J0IGRlZmF1bHQgcmVuZGVyT25ib2FyZGluZztcbiIsImltcG9ydCBlIGZyb20gXCIuL2VsZW1lbnREaWN0aW9uYXJ5XCI7XG5jb25zdCBwcm9qZWN0U3RlcHMgPSBbXG4gICAge1xuICAgICAgICBlbGVtZW50OiBlLmJhbm5lci5nZXQoKSxcbiAgICAgICAgdGl0bGU6IFwiU28gd2UgY29udGludWUuLi5cIixcbiAgICAgICAgaW50cm86IFwiV2VsY29tZSB0byAgPGI+J1R1dG9yaWFsJzwvYj4gcHJvamVjdCBwYWdlIVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBlbGVtZW50OiBlLmFkZFRvRG9JY29uLmdldCgpLFxuICAgICAgICB0aXRsZTogXCJBZGRpbmcgdG8tZG9zXCIsXG4gICAgICAgIGludHJvOiBcIlRoaXMgYnV0dG9uIG9wZW5zIGEgZm9ybSB0byBhZGQgeW91ciBuZXcgdG8tZG9zLlwiLFxuICAgICAgICBwb3NpdGlvbjogXCJsZWZ0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZWxlbWVudDogZS50b0RvQXJ0aWNsZTEuZ2V0KCksXG4gICAgICAgIHRpdGxlOiBcIk1vcmUgcG93ZXJmdWwgdG8tZG9zXCIsXG4gICAgICAgIGludHJvOiBcIkEgdG8tZG8gZWxlbWVudCB3aXRoaW4gYSBwcm9kdWN0IHBhZ2UgYWxzbyBoYXMgYnV0dG9ucyB0byBlZGl0IC8gZGVsZXRlIGl0LlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGVsZW1lbnQ6IGUudG9Eb0FydGljbGUzLmdldCgpLFxuICAgICAgICB0aXRsZTogXCJXYW50IHRvIG1vdmU/XCIsXG4gICAgICAgIGludHJvOiBcIkp1c3QgZHJhZyBhIHRvLWRvIGVsZW1lbnQgYW5kIGRyb3AgaXQgb24gYSBwcm9qZWN0IGxpbmsgaW4gdGhlIG1lbnUuIDxpPk9ubHkgd29ya3Mgb24gd2lkZXIgc2NyZWVucy48L2k+XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZWxlbWVudDogZS50b0RvQXJ0aWNsZTUuZ2V0KCksXG4gICAgICAgIHRpdGxlOiBcIlRoZSBFYXN0ZXIgRWdnXCIsXG4gICAgICAgIGludHJvOiBcIkNoZWNrIHRoaXMgdG8tZG8gdGhlbiBkZWxldGUgaXQuLi4gWW91IGp1c3QgZWFybmVkIHNvbWUgY29pbnMhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZWxlbWVudDogZS50b0RvQXJ0aWNsZTYuZ2V0KCksXG4gICAgICAgIHRpdGxlOiBcIlRoZSBDb3N0IGZvciBMYXppbmVzc1wiLFxuICAgICAgICBpbnRybzogXCJJZiB5b3UgY29tcGxldGUgYW4gb3ZlcmR1ZSB0by1kbyBsYXRlLCB5b3Ugd2lsbCBsb3NlIHRoZSBjb2lucyB5b3UgY291bGQgaGF2ZSBvdGhlcndpc2UgZ2FpbmVkLlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGVsZW1lbnQ6IGUuZ2FtZUljb24uZ2V0KCksXG4gICAgICAgIHRpdGxlOiBcIkEgbGl0dGxlIHJld2FyZFwiLFxuICAgICAgICBpbnRybzogXCJHcmVhdCBqb2IgZ2V0dGluZyB0aGlzIGZhci4gU3BlbmQgeW91ciBoYXJkLWVhcm5lZCBtb25leSBhdCB0aGUgYXJjYWRlIVwiLFxuICAgICAgICBwb3NpdGlvbjogXCJsZWZ0XCJcbiAgICB9LFxuXTtcbmV4cG9ydCBkZWZhdWx0IHByb2plY3RTdGVwcztcbiIsImltcG9ydCBlbGVtZW50RGljdGlvbmFyeSBmcm9tIFwiLi9lbGVtZW50RGljdGlvbmFyeVwiO1xuaW1wb3J0IHJlbmRlck9uYm9hcmRpbmcgZnJvbSBcIi4vb25ib2FyZGluZ1wiO1xuZnVuY3Rpb24gc2V0VXBUb3VyQnV0dG9uKCkge1xuICAgIHZhciBfYTtcbiAgICAoX2EgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvdXItYnV0dG9uXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICByZW5kZXJPbmJvYXJkaW5nKCk7XG4gICAgICAgIC8vIHByZXZlbnQgc2lkZWJhciBjb3ZlcmluZyB0dXRvcmlhbCBvbiBtb2JpbGVcbiAgICAgICAgaWYgKGVsZW1lbnREaWN0aW9uYXJ5Lm1lbnVJY29uLmlzVmlzaWJsZSgpICYmIGVsZW1lbnREaWN0aW9uYXJ5Lm5hdkJhci5pc1Zpc2libGUoKSkgeyAvLyBhcyBpbiBtb2JpbGUgc2NyZWVuXG4gICAgICAgICAgICAoX2EgPSBlbGVtZW50RGljdGlvbmFyeS5uYXZCYXIuZ2V0KCkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpO1xuICAgICAgICB9XG4gICAgICAgIDtcbiAgICB9KTtcbn1cbjtcbmV4cG9ydCBkZWZhdWx0IHNldFVwVG91ckJ1dHRvbjtcbiIsImltcG9ydCBpbnRyb0pzIGZyb20gXCJpbnRyby5qc1wiO1xuaW1wb3J0IGNhdGVnb3J5U3RlcHMgZnJvbSBcIi4vY2F0ZWdvcnlTdGVwc1wiO1xuaW1wb3J0IGdhbWVTdGVwcyBmcm9tIFwiLi9nYW1lU3RlcHNcIjtcbmltcG9ydCBwcm9qZWN0U3RlcHMgZnJvbSBcIi4vcHJvamVjdFN0ZXBzXCI7XG5jb25zdCBjcmVhdGVTdGFnZSA9IChvcHRpb25zKSA9PiB7XG4gICAgcmV0dXJuICgpID0+IGludHJvSnMoKS5zZXRPcHRpb25zKG9wdGlvbnMpLnN0YXJ0KCk7XG59O1xuY29uc3Qgc3RhZ2VzID0gW1xuICAgIGNyZWF0ZVN0YWdlKHtcbiAgICAgICAgc3RlcHM6IGNhdGVnb3J5U3RlcHMsXG4gICAgICAgIHNob3dCdWxsZXRzOiBmYWxzZSxcbiAgICAgICAgc2hvd1Byb2dyZXNzOiB0cnVlLFxuICAgIH0pLFxuICAgIGNyZWF0ZVN0YWdlKHsgc3RlcHM6IHByb2plY3RTdGVwcyB9KSxcbiAgICBjcmVhdGVTdGFnZSh7XG4gICAgICAgIHN0ZXBzOiBnYW1lU3RlcHMsXG4gICAgICAgIHNob3dCdWxsZXRzOiBmYWxzZSxcbiAgICAgICAgc2hvd1N0ZXBOdW1iZXJzOiB0cnVlLFxuICAgIH0pLFxuXTtcbmV4cG9ydCBkZWZhdWx0IHN0YWdlcztcbiIsImltcG9ydCBqc0NvbnRhaW5lciBmcm9tIFwiLi4vZG9tQ29uc3RhbnRzL3Byb2plY3RDb250YWluZXJcIjtcbmZ1bmN0aW9uIGNsZWFyUGFnZSgpIHtcbiAgICBqc0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGpzQ29udGFpbmVyLnN0eWxlLmJhY2tncm91bmQgPSBcIm5vbmVcIjtcbn1cbmV4cG9ydCBkZWZhdWx0IGNsZWFyUGFnZTtcbiIsImZ1bmN0aW9uIGlkZW1wb3RlbnRET00oY29udGFpbmVyLCBuZXdSZW5kZXIsIGlkKSB7XG4gICAgY29uc3QgcG9zc2libGVPbGRSZW5kZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgaWYgKHBvc3NpYmxlT2xkUmVuZGVyKSB7XG4gICAgICAgIGNvbnN0IG9sZFJlbmRlciA9IHBvc3NpYmxlT2xkUmVuZGVyO1xuICAgICAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKG5ld1JlbmRlciwgb2xkUmVuZGVyKTtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKG9sZFJlbmRlcik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UmVuZGVyKTtcbiAgICB9XG4gICAgO1xufVxuO1xuZXhwb3J0IGRlZmF1bHQgaWRlbXBvdGVudERPTTtcbiIsImltcG9ydCB7IGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IFBTIGZyb20gXCIuLi8uLi9jbGFzc2VzL1B1YlN1YlwiO1xuaW1wb3J0IGpzQ29udGFpbmVyIGZyb20gXCIuLi9kb21Db25zdGFudHMvcHJvamVjdENvbnRhaW5lclwiO1xuaW1wb3J0IGVkaXRUb0RvRm9ybSBmcm9tIFwiLi4vaW5wdXRzL2VkaXRUb0RvRm9ybVwiO1xuaW1wb3J0IFByb2plY3RzIGZyb20gXCIuLi8uLi9jbGFzc2VzL1Byb2plY3RzXCI7XG5pbXBvcnQgVG9Eb1ByaW9yaXR5IGZyb20gXCIuLi8uLi9lbnVtcy9Ub0RvUHJpb3JpdHlcIjtcbmltcG9ydCBQU0UgZnJvbSBcIi4uLy4uL2VudW1zL1B1YlN1YkV2ZW50c1wiO1xuaW1wb3J0IGlkZW1wb3RlbnRET00gZnJvbSBcIi4vaWRlbXBvdGVudERPTVwiO1xuZnVuY3Rpb24gaWRlbXBvdGVudGx5UmVuZGVyVG9Ebyh0b0RvKSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnNvbGUudHJhY2UoKTtcbiAgICBjb25zdCB0b0RvUHJpb3JpdHkgPSAodG9Eby5wcmlvcml0eSA9PT0gVG9Eb1ByaW9yaXR5LkhpZ2ggPyBcImhpZ2hcIiA6XG4gICAgICAgIHRvRG8ucHJpb3JpdHkgPT09IFRvRG9Qcmlvcml0eS5NZWRpdW0gPyBcIm1lZGl1bVwiIDpcbiAgICAgICAgICAgIHRvRG8ucHJpb3JpdHkgPT09IFRvRG9Qcmlvcml0eS5Mb3cgPyBcImxvd1wiIDpcbiAgICAgICAgICAgICAgICBcInZhbHVlIGVycm9yIHdpdGggcHJpb3JpdHkgbnVtYmVyXCIpO1xuICAgIGNvbnN0IHsgcGFyZW50SUQgfSA9IHRvRG87XG4gICAgaWYgKCFwYXJlbnRJRClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVG9EbyBvYmplY3QgZm9yIHJlbmRlcmluZyBtdXN0IGhhdmUgcGFyZW50SURcIik7XG4gICAgaWYgKCFQcm9qZWN0cy5nZXQocGFyZW50SUQpKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUb0RvIHBhcmVudElEIHByb3BlcnR5IG11c3QgZXF1YWwgUHJvamVjdCBJRCBmb3Igc29tZSBQcm9qZWN0IGluc3RhbmNlLlwiKTtcbiAgICAvLyBIVE1MIGVsZW1lbnRzIGZvciB0by1kbyBhcnRpY2xlXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xuICAgIGNvbnN0IGxlZnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHJpZ2h0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCB0b0RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgY29uc3QgZGV0YWlsc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBkZXRhaWxzTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xuICAgIGNvbnN0IGNsb3NlRGV0YWlsc01vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAvLyBhdHRyaWJ1dGVzXG4gICAgZWxlbWVudC5pZCA9IHRvRG8uSUQ7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidG8tZG8tZWxlbWVudFwiLCBgcHJpb3JpdHktJHt0b0RvUHJpb3JpdHl9YCwgXCJkLWZsZXhcIiwgXCJqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiLCBcInAtMlwiLCBcImJnLWxpZ2h0XCIsIFwicm91bmRlZFwiLCBcIm1iLTNcIik7XG4gICAgbGVmdERpdi5jbGFzc0xpc3QuYWRkKFwiZC1mbGV4XCIsIFwiYWxpZ24taXRlbXMtY2VudGVyXCIsIFwiZ2FwLTJcIiwgXCJib3JkZXJsZXNzLWNoaWxkcmVuXCIpO1xuICAgIHJpZ2h0RGl2LmNsYXNzTGlzdC5hZGQoXCJkLWZsZXhcIiwgXCJhbGlnbi1pdGVtcy1jZW50ZXJcIiwgXCJnYXAtMlwiLCBcImJvcmRlcmxlc3MtY2hpbGRyZW5cIik7XG4gICAgY2hlY2tCb3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICBjaGVja0JveC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jaGVjay1pbnB1dFwiKTtcbiAgICB0b0RvVGl0bGUuaHRtbEZvciA9IFwiY29tcGxldGVDaGVja1wiO1xuICAgIHRvRG9UaXRsZS5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jaGVjay1sYWJlbFwiKTtcbiAgICBlZGl0QnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGRlbGV0ZUJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICBkZXRhaWxzQnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGNsb3NlRGV0YWlsc01vZGFsLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGVkaXRCdXR0b24udGl0bGUgPSBcImVkaXRcIjtcbiAgICBkZWxldGVCdXR0b24udGl0bGUgPSBcImRlbGV0ZVwiO1xuICAgIGRldGFpbHNCdXR0b24uY2xhc3NMaXN0LmFkZChcImJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiKTtcbiAgICBkZXRhaWxzTW9kYWwuY2xhc3NMaXN0LmFkZChcImRldGFpbHNcIik7XG4gICAgY2xvc2VEZXRhaWxzTW9kYWwuY2xhc3NMaXN0LmFkZChcImNsb3NlLWRldGFpbHNcIik7XG4gICAgLy8gY29udGVudFxuICAgIHRvRG9UaXRsZS5pbm5lclRleHQgPSB0b0RvLnRpdGxlO1xuICAgIGRldGFpbHNCdXR0b24uaW5uZXJUZXh0ID0gXCJEZXRhaWxzXCI7XG4gICAgZWRpdEJ1dHRvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJiaSBiaS1wZW5jaWwtc3F1YXJlXCI+PC9pPic7XG4gICAgZGVsZXRlQnV0dG9uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImJpIGJpLXRyYXNoXCI+PC9pPic7XG4gICAgY2xvc2VEZXRhaWxzTW9kYWwuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiYmkgYmkteC1zcXVhcmVcIj48L2k+JztcbiAgICBkZXRhaWxzTW9kYWwuaW5uZXJIVE1MID1cbiAgICAgICAgYDxoMz4ke3RvRG8udGl0bGV9PC9oMz5cbiAgICA8cD48Yj5Qcm9qZWN0OjwvYj4gJHsoX2EgPSBQcm9qZWN0cy5nZXQocGFyZW50SUQpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubmFtZX08L3A+XG4gICAgPHA+PGI+UHJpb3JpdHk6PC9iPiAke3RvRG9Qcmlvcml0eX08L3A+XG4gICAgPHA+PGI+RGVzY3JpcHRpb246PC9iPiAke3RvRG8uZGVzY3JpcHRpb259PC9wPlxuICAgIDxwPjxiPkR1ZSBEYXRlOjwvYj4gJHtmb3JtYXQodG9Eby5kdWVEYXRlLCBcImRvIE1NTU0sIFlcIil9PC9wPmA7XG4gICAgaWYgKHRvRG8uaXNDaGVja2VkKSB7XG4gICAgICAgIGNoZWNrQm94LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWRlY29yYXRpb24tbGluZS10aHJvdWdoXCIpO1xuICAgIH1cbiAgICA7XG4gICAgaWYgKHRvRG8uaXNPdmVyRHVlKCkpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwib3ZlcmR1ZVwiKTtcbiAgICB9XG4gICAgO1xuICAgIC8vIGRldGFpbHMgYnV0dG9uXG4gICAgZGV0YWlsc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBkZXRhaWxzTW9kYWwuc2hvd01vZGFsKCk7XG4gICAgICAgIC8vIHBvc2l0aW9uIG1vZGFsXG4gICAgICAgIGNvbnN0IG1vZGFsSGVpZ2h0ID0gZGV0YWlsc01vZGFsLmNsaWVudEhlaWdodDtcbiAgICAgICAgY29uc3QgYnV0dG9uUG9zID0gZGV0YWlsc0J1dHRvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgYnV0dG9uQm90dG9tID0gYnV0dG9uUG9zLmJvdHRvbSArIHdpbmRvdy5zY3JvbGxZO1xuICAgICAgICBjb25zdCBidXR0b25Ub29Mb3cgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyICsgMTAwIDwgYnV0dG9uQm90dG9tO1xuICAgICAgICBpZiAoYnV0dG9uVG9vTG93KSB7XG4gICAgICAgICAgICBkZXRhaWxzTW9kYWwuc3R5bGUudG9wID0gYCR7TWF0aC5jZWlsKGJ1dHRvblBvcy50b3AgLSBtb2RhbEhlaWdodCAtIDE1KX1weGA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZXRhaWxzTW9kYWwuc3R5bGUudG9wID0gYCR7TWF0aC5jZWlsKGJ1dHRvbkJvdHRvbSkgKyAxMH1weGA7XG4gICAgICAgIH1cbiAgICAgICAgO1xuICAgICAgICBkZXRhaWxzTW9kYWwuc3R5bGUucmlnaHQgPSBgJHtidXR0b25Qb3MucmlnaHR9cHhgO1xuICAgIH0pO1xuICAgIGNsb3NlRGV0YWlsc01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGRldGFpbHNNb2RhbC5jbG9zZSgpO1xuICAgIH0pO1xuICAgIC8vIGNoZWNrYm94IGZ1bmN0aW9uYWxpdHlcbiAgICBjaGVja0JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0b0RvLnRvZ2dsZUlzQ2hlY2tlZCgpO1xuICAgICAgICBpZiAodG9Eby5pc0NoZWNrZWQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRleHQtZGVjb3JhdGlvbi1saW5lLXRocm91Z2hcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZXh0LWRlY29yYXRpb24tbGluZS10aHJvdWdoXCIpO1xuICAgICAgICB9XG4gICAgICAgIDtcbiAgICB9KTtcbiAgICAvLyBhbHNvIGNoZWNrIG9mZiBpZiB0aXRsZSBjbGlja2VkXG4gICAgdG9Eb1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRvRG8udG9nZ2xlSXNDaGVja2VkKCk7XG4gICAgICAgIGlmICh0b0RvLmlzQ2hlY2tlZCkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGV4dC1kZWNvcmF0aW9uLWxpbmUtdGhyb3VnaFwiKTtcbiAgICAgICAgICAgIGNoZWNrQm94LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwidGV4dC1kZWNvcmF0aW9uLWxpbmUtdGhyb3VnaFwiKTtcbiAgICAgICAgICAgIGNoZWNrQm94LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgfSk7XG4gICAgLy8gZmluYWxseSwgYXBwZW5kaW5nIGVsZW1lbnRzIHRvIHRoZSBET01cbiAgICBkZXRhaWxzTW9kYWwuYXBwZW5kQ2hpbGQoY2xvc2VEZXRhaWxzTW9kYWwpO1xuICAgIGxlZnREaXYuYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xuICAgIGxlZnREaXYuYXBwZW5kQ2hpbGQodG9Eb1RpdGxlKTtcbiAgICByaWdodERpdi5hcHBlbmRDaGlsZChkZXRhaWxzQnV0dG9uKTtcbiAgICByaWdodERpdi5hcHBlbmRDaGlsZChkZXRhaWxzTW9kYWwpO1xuICAgIC8vIGVkaXQgYnV0dG9uXG4gICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBlZGl0VG9Eb0Zvcm0odG9EbywgZWxlbWVudCwgZGV0YWlsc0J1dHRvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSk7XG4gICAgfSk7XG4gICAgLy8gZGVsZXRlIGJ1dHRvblxuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBQUy5wdWJsaXNoKFBTRS5EZWxldGVUb0RvLCB0b0RvLklEKTtcbiAgICB9KTtcbiAgICByaWdodERpdi5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcbiAgICByaWdodERpdi5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobGVmdERpdik7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChyaWdodERpdik7XG4gICAgaWRlbXBvdGVudERPTShqc0NvbnRhaW5lciwgZWxlbWVudCwgdG9Eby5JRCk7XG59XG47XG5leHBvcnQgZGVmYXVsdCBpZGVtcG90ZW50bHlSZW5kZXJUb0RvO1xuIiwiaW1wb3J0IENhdGVnb3JpZXMgZnJvbSBcIi4uLy4uL2NsYXNzZXMvQ2F0ZWdvcmllc1wiO1xuaW1wb3J0IHB1dEdyb3VwSW5TaWRlYmFyIGZyb20gXCIuL3B1dEdyb3VwSW5TaWRlYmFyXCI7XG5mdW5jdGlvbiBwdXRDYXRlZ29yeShjYXRlZ29yeUlkKSB7XG4gICAgcHV0R3JvdXBJblNpZGViYXIoY2F0ZWdvcnlJZCwgQ2F0ZWdvcmllcywgXCJjYXRlZ29yeS1saXN0XCIpO1xufVxuO1xuZXhwb3J0IGRlZmF1bHQgcHV0Q2F0ZWdvcnk7XG4iLCJpbXBvcnQgcmVuZGVyR3JvdXAgZnJvbSBcIi4vcmVuZGVyR3JvdXBcIjtcbmltcG9ydCBpZGVtcG90ZW50RE9NIGZyb20gXCIuL2lkZW1wb3RlbnRET01cIjtcbmZ1bmN0aW9uIHB1dEdyb3VwSW5TaWRlYmFyKGdyb3VwSUQsIEdyb3VwTWFuYWdlciwgZ3JvdXBMaXN0SWQpIHtcbiAgICBjb25zdCBncm91cCA9IEdyb3VwTWFuYWdlci5nZXQoZ3JvdXBJRCk7XG4gICAgaWYgKCFncm91cClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBHcm91cCBvZiBJRCAke2dyb3VwSUR9IG5vdCBmb3VuZC5gKTtcbiAgICBjb25zdCBncm91cExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChncm91cExpc3RJZCk7XG4gICAgaWYgKCFncm91cExpc3QpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgZWxlbWVudCBvZiBpZCAke2dyb3VwTGlzdElkfSBub3QgZm91bmQuYCk7XG4gICAgY29uc3QgbGlzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29uc3QgbGlzdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCB0b0RvQ291bnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGNvbnN0IGdyb3VwTmFtZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBsaXN0RWxlbWVudC5pZCA9IGdyb3VwSUQ7XG4gICAgbGlzdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImxpc3QtZ3JvdXAtaXRlbVwiLCBcImxpc3QtZ3JvdXAtaXRlbS1hY3Rpb25cIiwgXCJkLWZsZXhcIiwgXCJqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiLCBcImFsaWduLWl0ZW1zLWNlbnRlclwiKTtcbiAgICBncm91cE5hbWVTcGFuLmlubmVyVGV4dCA9IGdyb3VwLm5hbWU7XG4gICAgZ3JvdXBOYW1lU3Bhbi5jbGFzc0xpc3QuYWRkKFwiZC1pbmxpbmUtYmxvY2tcIiwgXCJ0ZXh0LXRydW5jYXRlXCIpO1xuICAgIGdyb3VwTmFtZVNwYW4uc3R5bGUubWF4V2lkdGggPSBcIjEyMHB4XCI7XG4gICAgbGlzdFRleHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHJlbmRlckdyb3VwKGdyb3VwKSk7XG4gICAgbGlzdFRleHQuY2xhc3NMaXN0LmFkZChcImQtZmxleFwiLCBcImxpbmstb3BhY2l0eS03NVwiLCBcImxpbmstb3BhY2l0eS0xMDAtaG92ZXJcIiwgXCJsaW5rLXVuZGVybGluZS1vcGFjaXR5LTBcIiwgXCJsaW5rLXNlY29uZGFyeVwiLCBcInVzZXItc2VsZWN0LW5vbmVcIiwgXCJtLTBcIik7XG4gICAgdG9Eb0NvdW50ZXIuY2xhc3NMaXN0LmFkZChcImNvdW50ZXJcIiwgXCJiYWRnZVwiLCBcInAtMVwiLCBcIm1lLTJcIiwgXCJhbGlnbi1zZWxmLWNlbnRlclwiKTtcbiAgICBjb25zdCBjb3VudCA9IGdyb3VwLnRvRG9zLmxlbmd0aDtcbiAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAgIHRvRG9Db3VudGVyLmlubmVyVGV4dCA9IFN0cmluZyhjb3VudCk7XG4gICAgfVxuICAgIDtcbiAgICBsaXN0VGV4dC5hcHBlbmQodG9Eb0NvdW50ZXIpO1xuICAgIGxpc3RUZXh0LmFwcGVuZChncm91cE5hbWVTcGFuKTtcbiAgICBsaXN0RWxlbWVudC5hcHBlbmQobGlzdFRleHQpO1xuICAgIGlkZW1wb3RlbnRET00oZ3JvdXBMaXN0LCBsaXN0RWxlbWVudCwgZ3JvdXBJRCk7XG4gICAgLy8gaW4gY2FzZSBmdXJ0aGVyIG1hbmlwdWxhdGlvbiBpcyBuZWVkZWRcbiAgICByZXR1cm4geyBncm91cCwgbGlzdEVsZW1lbnQgfTtcbn1cbjtcbmV4cG9ydCBkZWZhdWx0IHB1dEdyb3VwSW5TaWRlYmFyO1xuIiwiaW1wb3J0IFByb2plY3RzIGZyb20gXCIuLi8uLi9jbGFzc2VzL1Byb2plY3RzXCI7XG5pbXBvcnQgcHJvamVjdE5hbWVNb2RhbCBmcm9tIFwiLi4vaW5wdXRzL3Byb2plY3ROYW1lTW9kYWxcIjtcbmltcG9ydCBwdXRHcm91cEluU2lkZWJhciBmcm9tIFwiLi9wdXRHcm91cEluU2lkZWJhclwiO1xuaW1wb3J0IHNob3dBbGxUYXNrcyBmcm9tIFwiLi9zaG93QWxsVGFza3NcIjtcbmZ1bmN0aW9uIHB1dFByb2plY3QocHJvamVjdElEKSB7XG4gICAgY29uc3QgeyBncm91cDogcHJvamVjdCwgbGlzdEVsZW1lbnQgfSA9IHB1dEdyb3VwSW5TaWRlYmFyKHByb2plY3RJRCwgUHJvamVjdHMsIFwicHJvamVjdC1saXN0XCIpO1xuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkLWZsZXhcIiwgXCJhbGlnbi1pdGVtcy1jZW50ZXJcIik7XG4gICAgLy8gcmVuYW1lIHByb2plY3QgYnV0dG9uXG4gICAgY29uc3QgcmVuYW1lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICByZW5hbWVCdXR0b24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiYmkgYmktcGVuY2lsLXNxdWFyZVwiPjwvaT4nO1xuICAgIHJlbmFtZUJ1dHRvbi50aXRsZSA9IFwiUmVuYW1lIHByb2plY3RcIjtcbiAgICBwcm9qZWN0TmFtZU1vZGFsKHJlbmFtZUJ1dHRvbiwgbiA9PiBwcm9qZWN0LmNoYW5nZU5hbWUobiksIHByb2plY3QubmFtZSk7XG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmFtZUJ1dHRvbik7XG4gICAgLy8gZGVsZXRlIHByb2plY3QgYnV0dG9uXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVCdXR0b24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiYmkgYmktdHJhc2gzIGZzLTVcIj48L2k+JztcbiAgICBkZWxldGVCdXR0b24udGl0bGUgPSBcImRlbGV0ZSBwcm9qZWN0XCI7XG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIFByb2plY3RzLmRlbGV0ZVByb2plY3QocHJvamVjdElEKTtcbiAgICAgICAgc2hvd0FsbFRhc2tzKCk7XG4gICAgfSk7XG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgbGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcbn1cbjtcbmV4cG9ydCBkZWZhdWx0IHB1dFByb2plY3Q7XG4iLCJmdW5jdGlvbiByZW1vdmVQcm9qZWN0KGlkKSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IGRlbGV0ZWRMSSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICBpZiAoZGVsZXRlZExJKVxuICAgICAgICAoX2EgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbGlzdFwiKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlbW92ZUNoaWxkKGRlbGV0ZWRMSSk7XG59XG47XG5leHBvcnQgZGVmYXVsdCByZW1vdmVQcm9qZWN0O1xuIiwiaW1wb3J0IGpzQ29udGFpbmVyIGZyb20gXCIuLi9kb21Db25zdGFudHMvcHJvamVjdENvbnRhaW5lclwiO1xuZnVuY3Rpb24gcmVtb3ZlVG9Ebyh0b0RvSUQpIHtcbiAgICBjb25zdCBkZWxldGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRvRG9JRCk7XG4gICAgaWYgKGRlbGV0aW9uKVxuICAgICAgICBqc0NvbnRhaW5lci5yZW1vdmVDaGlsZChkZWxldGlvbik7XG59XG47XG5leHBvcnQgZGVmYXVsdCByZW1vdmVUb0RvO1xuIiwiaW1wb3J0IEJhbmsgZnJvbSBcIi4uLy4uL2NsYXNzZXMvQmFua1wiO1xuaW1wb3J0IEFyY2FkZSBmcm9tIFwiLi4vLi4vY2xhc3Nlcy9BcmNhZGVcIjtcbmltcG9ydCBqc0NvbnRhaW5lciBmcm9tIFwiLi4vZG9tQ29uc3RhbnRzL3Byb2plY3RDb250YWluZXJcIjtcbmltcG9ydCBjbGVhclBhZ2UgZnJvbSBcIi4vY2xlYXJQYWdlXCI7XG5pbXBvcnQgcmVuZGVyTWVzc2FnZSBmcm9tIFwiLi9yZW5kZXJNZXNzYWdlXCI7XG5pbXBvcnQgYXJjYWRlU3RhdGUgZnJvbSBcIi4uL2RvbUNvbnN0YW50cy9hcmNhZGVTdGF0ZVwiO1xuZnVuY3Rpb24gcmVuZGVyQXJjYWRlKCkge1xuICAgIGNsZWFyUGFnZSgpO1xuICAgIGpzQ29udGFpbmVyLmNsYXNzTGlzdC5yZXBsYWNlKFwiZ3JvdXAtcGFnZVwiLCBcImFyY2FkZS1wYWdlXCIpO1xuICAgIGhpc3RvcnkucHVzaFN0YXRlKGFyY2FkZVN0YXRlLCBcIlwiLCBcImFyY2FkZVwiKTtcbiAgICAvLyBoZWFkaW5nXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRlci5pbm5lclRleHQgPSBcIkFyY2FkZVwiO1xuICAgIGpzQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgLy8gY3JlYXRpbmcgY2FyZCBmb3IgZWFjaCBnYW1lXG4gICAgY29uc3QgY2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY2FyZC1jb250YWluZXJcIik7XG4gICAgZm9yIChjb25zdCBnYW1lIG9mIEFyY2FkZS5nZXRBbGwoKSkge1xuICAgICAgICBjb25zdCBnYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcbiAgICAgICAgY29uc3QgZ2FtZVBsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuICAgICAgICBjb25zdCBjbG9zZUdhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XG4gICAgICAgIGNvbnN0IHRodW1ibmFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcbiAgICAgICAgY29uc3QgY29zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzbWFsbFwiKTtcbiAgICAgICAgdGV4dC5jbGFzc0xpc3QuYWRkKFwiY2FyZC1ib2R5XCIpO1xuICAgICAgICB0aHVtYm5haWwuY2xhc3NMaXN0LmFkZChcImFyY2FkZS1pbWdcIik7XG4gICAgICAgIHRodW1ibmFpbC5zcmMgPSBnYW1lLnRodW1ibmFpbFVSTDtcbiAgICAgICAgdGh1bWJuYWlsLnRpdGxlID0gXCJDbGljayB0byBwbGF5IVwiO1xuICAgICAgICB0aXRsZS5pbm5lclRleHQgPSBnYW1lLm5hbWU7XG4gICAgICAgIGNvc3QuaW5uZXJIVE1MID0gYENvc3Q6IDxpIGNsYXNzPVwiYmkgYmktY29pbiB0ZXh0LXdhcm5pbmdcIj48L2k+ICR7Z2FtZS5jb3N0fWA7XG4gICAgICAgIGdhbWVQbGF5LnNyYyA9IGdhbWUubGluaztcbiAgICAgICAgY2xvc2VHYW1lLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImJpIGJpLXgtbGdcIj48L2k+JztcbiAgICAgICAgdGh1bWJuYWlsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1c2VyQ2FuUGF5ID0gQmFuay5kZWR1Y3QoZ2FtZS5jb3N0KTtcbiAgICAgICAgICAgIGlmICh1c2VyQ2FuUGF5KSB7XG4gICAgICAgICAgICAgICAganNDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2FtZUNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgZ2FtZUNvbnRhaW5lci5zaG93TW9kYWwoKTtcbiAgICAgICAgICAgICAgICByZW5kZXJNZXNzYWdlKGBQYWlkICR7Z2FtZS5jb3N0fSBjb2lucyBmb3IgYSA1LW1pbnV0ZSBnYW1pbmcgc2Vzc2lvbi5gLCBnYW1lQ29udGFpbmVyKTsgLy8gbWlncmF0ZSB0byBQdWJTdWJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUNvbnRhaW5lci5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJNZXNzYWdlKFwiU2Vzc2lvbiBkb25lLiBQYXkgYWdhaW4gdG8gcGxheS5cIik7XG4gICAgICAgICAgICAgICAgfSwgQXJjYWRlLnNlc3Npb25NUyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZW5kZXJNZXNzYWdlKFwiTm90IGVub3VnaCBjb2lucyB0byBwYXkuIENvbXBsZXRlIG1vcmUgdG8tZG9zLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDtcbiAgICAgICAgfSk7XG4gICAgICAgIGNsb3NlR2FtZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZ2FtZUNvbnRhaW5lci5jbG9zZSgpO1xuICAgICAgICAgICAganNDb250YWluZXIucmVtb3ZlQ2hpbGQoZ2FtZUNvbnRhaW5lcik7XG4gICAgICAgICAgICBCYW5rLmRlcG9zaXQoZ2FtZS5jb3N0KTtcbiAgICAgICAgICAgIHJlbmRlck1lc3NhZ2UoXCJZYXkhIENvaW5zIHJlZnVuZGVkXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGV4dC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIHRleHQuYXBwZW5kQ2hpbGQoY29zdCk7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQodGh1bWJuYWlsKTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICAgICAgZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZUdhbWUpO1xuICAgICAgICBnYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGdhbWVQbGF5KTtcbiAgICB9XG4gICAgO1xuICAgIGpzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmRDb250YWluZXIpO1xufVxuO1xuZXhwb3J0IGRlZmF1bHQgcmVuZGVyQXJjYWRlO1xuIiwiaW1wb3J0IGpzQ29udGFpbmVyIGZyb20gXCIuLi9kb21Db25zdGFudHMvcHJvamVjdENvbnRhaW5lclwiO1xuaW1wb3J0IGFkZFRvRG9Gb3JtIGZyb20gXCIuLi9pbnB1dHMvYWRkVG9Eb0Zvcm1cIjtcbmltcG9ydCBjbGVhclBhZ2UgZnJvbSBcIi4vY2xlYXJQYWdlXCI7XG5pbXBvcnQgaWRlbXBvdGVudGx5UmVuZGVyVG9EbyBmcm9tIFwiLi9pZGVtcG90ZW50bHlSZW5kZXJUb0RvXCI7XG5mdW5jdGlvbiByZW5kZXJHcm91cChncm91cCkge1xuICAgIC8vIEhpc3RvcnkgQVBJIGZvciBtb3JlIGFjY2Vzc2libGUgbmF2aWdhdGlvbi4gKENvbW1lbnRlZCBvdXQgYmVjYXVzZSBpdCdzIGluY29udmVuaWVudCB3aXRoIFdlYnBhY2sncyBITVIuKVxuICAgIC8vIGhpc3RvcnkucHVzaFN0YXRlKGdyb3VwLklELCBcIlwiLCAgZ3JvdXAubmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpLnJlcGxhY2UoXCIgXCIsIFwiLVwiKSk7XG4gICAgLy8gcmVzZXRcbiAgICBjbGVhclBhZ2UoKTtcbiAgICBqc0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiYXJjYWRlLXBhZ2VcIik7XG4gICAganNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImdyb3VwLXBhZ2VcIik7XG4gICAgLy8gd2FsbHBhcGVyXG4gICAgY29uc3QgcmFuZG9tSW1nID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMTtcbiAgICBqc0NvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybChcIi4vYmcvaW1nLSR7cmFuZG9tSW1nfS5qcGdcIikgY2VudGVyIGNlbnRlciAvIGNvdmVyYDtcbiAgICAvLyBodG1sIGVsZW1lbnQgY3JlYXRpb25cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICAgIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgY29uc3QgYWRkSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIC8vIGh0bWwgZWxlbWVudCBhdHRyaWJ1dGVzXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJmcy0yXCIsIFwibWItM1wiLCBcImJnLXN1Y2Nlc3Mtc3VidGxlXCIsIFwicC0zXCIsIFwiZC1mbGV4XCIsIFwianVzdGlmeS1jb250ZW50LWJldHdlZW5cIiwgXCJyb3VuZGVkXCIpO1xuICAgIHRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoXCJkLWZsZXhcIiwgXCJnYXAtNFwiLCBcImFsaWduLWl0ZW1zLWNlbnRlclwiKTtcbiAgICB0aXRsZS5pbm5lclRleHQgPSBncm91cC5uYW1lO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJoMVwiKTtcbiAgICBpY29uLmNsYXNzTGlzdC5hZGQoXCJiaVwiKTtcbiAgICBpY29uLmNsYXNzTGlzdC5hZGQoYCR7Z3JvdXAuaWNvbn1gKTtcbiAgICBhZGRJY29uLmNsYXNzTGlzdC5hZGQoXCJiaVwiKTtcbiAgICBhZGRJY29uLmNsYXNzTGlzdC5hZGQoXCJiaS1qb3VybmFsLXBsdXNcIik7XG4gICAgLy8gZXZlbnRzXG4gICAgYWRkSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBhZGRUb0RvRm9ybShqc0NvbnRhaW5lciwgaGVhZGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKTtcbiAgICB9KTtcbiAgICAvLyBhcHBlbmQgdG8gRE9NXG4gICAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZURpdik7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGFkZEljb24pO1xuICAgIGpzQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgZ3JvdXAudG9Eb3MuZm9yRWFjaCh0b0RvID0+IGlkZW1wb3RlbnRseVJlbmRlclRvRG8odG9EbykpO1xufVxuO1xuZXhwb3J0IGRlZmF1bHQgcmVuZGVyR3JvdXA7XG4iLCJpbXBvcnQganNDb250YWluZXIgZnJvbSBcIi4uL2RvbUNvbnN0YW50cy9wcm9qZWN0Q29udGFpbmVyXCI7XG5mdW5jdGlvbiByZW5kZXJNZXNzYWdlKG1lc3NhZ2UsIGNvbnRhaW5lciA9IGpzQ29udGFpbmVyKSB7XG4gICAgY29uc3QgZ29vZE5ld3MgPSBtZXNzYWdlLnN0YXJ0c1dpdGgoXCJZYXkhXCIpO1xuICAgIGNvbnN0IHRleHRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXNpZGVcIik7XG4gICAgY29uc3QgYmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRleHQuaW5uZXJUZXh0ID0gbWVzc2FnZTtcbiAgICBiYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoYGJnLSR7Z29vZE5ld3MgPyBcInN1Y2Nlc3NcIiA6IFwiZGFuZ2VyXCJ9LXN1YnRsZWAsIFwidGV4dC1jZW50ZXJcIiwgXCJweS0yXCIsIFwicHgtM1wiLCBcInJvdW5kZWQtdG9wXCIpO1xuICAgIHRleHQuY2xhc3NMaXN0LmFkZChcImZzLTVcIiwgXCJtLTBcIik7XG4gICAgYmFja2dyb3VuZC5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICB0ZXh0Qm94LmFwcGVuZENoaWxkKGJhY2tncm91bmQpO1xuICAgIHRleHRCb3guY2xhc3NMaXN0LmFkZChcImQtZmxleFwiLCBcImp1c3RpZnktY29udGVudC1jZW50ZXJcIiwgXCJwb3NpdGlvbi1hYnNvbHV0ZVwiLCBcImJvdHRvbS0wXCIpO1xuICAgIHRleHRCb3guc3R5bGUud2lkdGggPSBgY2FsYygke2NvbnRhaW5lci5jbGllbnRXaWR0aH1weCAtIDNyZW0pYDtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dEJveCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhZ2VOb2RlcyA9IEFycmF5LmZyb20oY29udGFpbmVyLmNoaWxkTm9kZXMpO1xuICAgICAgICBjb25zdCBwYWdlTm90Q2hhbmdlZCA9IHBhZ2VOb2Rlcy5pbmNsdWRlcyh0ZXh0Qm94KTtcbiAgICAgICAgaWYgKHBhZ2VOb3RDaGFuZ2VkKSB7XG4gICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQodGV4dEJveCk7XG4gICAgICAgIH1cbiAgICB9LCAzMDAwKTtcbn1cbmV4cG9ydCBkZWZhdWx0IHJlbmRlck1lc3NhZ2U7XG4iLCJpbXBvcnQgQ2F0ZWdvcmllcyBmcm9tIFwiLi4vLi4vY2xhc3Nlcy9DYXRlZ29yaWVzXCI7XG5pbXBvcnQgcmVuZGVyR3JvdXAgZnJvbSBcIi4vcmVuZGVyR3JvdXBcIjtcbmZ1bmN0aW9uIHNob3dBbGxUYXNrcygpIHtcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9hbGwtdGFza3NcIilcbiAgICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IGFsbFRhc2tzQ2F0ZWdvcnkgPSBDYXRlZ29yaWVzLnF1ZXJ5KGNhdCA9PiBjYXQubmFtZSA9PSBcIkFsbCBUYXNrc1wiKTtcbiAgICBpZiAoIWFsbFRhc2tzQ2F0ZWdvcnkpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGNhdGVnb3J5IHdpdGggbmFtZSAnQWxsIFRhc2tzJyBmb3VuZC5cIik7XG4gICAgcmVuZGVyR3JvdXAoYWxsVGFza3NDYXRlZ29yeSk7XG59XG47XG5leHBvcnQgZGVmYXVsdCBzaG93QWxsVGFza3M7XG4iLCJmdW5jdGlvbiB1cGRhdGVHcm91cENvdW50ZXIocGFyYW1ldGVycykge1xuICAgIGNvbnN0IHsgZ3JvdXBJRDogcHJvamVjdElELCBpbnRlZ2VyVG9BZGQgfSA9IHBhcmFtZXRlcnM7XG4gICAgY29uc3QgY291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpIyR7Q1NTLmVzY2FwZShwcm9qZWN0SUQpfSAuY291bnRlcmApO1xuICAgIGlmICghY291bnRlcilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBOb3Qgc2VsZWN0ZWQgLmNvdW50ZXIgZGVzY2VuZGFudCBvZiBsaXN0LWl0ZW0gd2l0aCBJRDogJHtwcm9qZWN0SUR9YCk7XG4gICAgY29uc3QgY3VycmVudENvdW50ID0gTnVtYmVyKGNvdW50ZXIuaW5uZXJUZXh0KTtcbiAgICBjb3VudGVyLmlubmVyVGV4dCA9IGAke2N1cnJlbnRDb3VudCArIGludGVnZXJUb0FkZH1gO1xuICAgIGlmIChjb3VudGVyLmlubmVyVGV4dCA9PT0gXCIwXCIpXG4gICAgICAgIGNvdW50ZXIuaW5uZXJUZXh0ID0gXCJcIjtcbn1cbjtcbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZUdyb3VwQ291bnRlcjtcbiIsImltcG9ydCBDYXRlZ29yaWVzSW5zdGFuY2UgZnJvbSBcIi4uLy4uL2NsYXNzZXMvQ2F0ZWdvcmllc1wiO1xuaW1wb3J0IFByb2plY3RzSW5zdGFuY2UgZnJvbSBcIi4uLy4uL2NsYXNzZXMvUHJvamVjdHNcIjtcbmltcG9ydCBhcmNhZGVTdGF0ZSBmcm9tIFwiLi4vZG9tQ29uc3RhbnRzL2FyY2FkZVN0YXRlXCI7XG5pbXBvcnQgcmVuZGVyQXJjYWRlIGZyb20gXCIuL3JlbmRlckFyY2FkZVwiO1xuaW1wb3J0IHJlbmRlckdyb3VwIGZyb20gXCIuL3JlbmRlckdyb3VwXCI7XG4vLyBTZXQgdXAgZm9yd2FyZC9iYWNrIGJ1dHRvbnNcbmZ1bmN0aW9uIHdoYXRzUG9wcGluZygpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBvcHN0YXRlXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnN0YXRlKSB7XG4gICAgICAgICAgICBjb25zdCBwb3NzaWJseVByb2plY3QgPSBQcm9qZWN0c0luc3RhbmNlLmdldChlLnN0YXRlKTtcbiAgICAgICAgICAgIGNvbnN0IHBvc3NpYmx5Q2F0ZWdvcnkgPSBDYXRlZ29yaWVzSW5zdGFuY2UuZ2V0KGUuc3RhdGUpO1xuICAgICAgICAgICAgaWYgKHBvc3NpYmx5UHJvamVjdCkge1xuICAgICAgICAgICAgICAgIHJlbmRlckdyb3VwKHBvc3NpYmx5UHJvamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwb3NzaWJseUNhdGVnb3J5KSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyR3JvdXAocG9zc2libHlDYXRlZ29yeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChlLnN0YXRlID09PSBhcmNhZGVTdGF0ZSkge1xuICAgICAgICAgICAgICAgIHJlbmRlckFyY2FkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgO1xuICAgICAgICB9XG4gICAgICAgIDtcbiAgICB9KTtcbn1cbjtcbmV4cG9ydCBkZWZhdWx0IHdoYXRzUG9wcGluZztcbiIsInZhciByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xuZXhwb3J0IGRlZmF1bHQge1xuICByYW5kb21VVUlEXG59OyIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtOF1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwfGZmZmZmZmZmLWZmZmYtZmZmZi1mZmZmLWZmZmZmZmZmZmZmZikkL2k7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG5cbnZhciBnZXRSYW5kb21WYWx1ZXM7XG52YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcblxuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG52YXIgYnl0ZVRvSGV4ID0gW107XG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgLy9cbiAgLy8gTm90ZSB0byBmdXR1cmUtc2VsZjogTm8sIHlvdSBjYW4ndCByZW1vdmUgdGhlIGB0b0xvd2VyQ2FzZSgpYCBjYWxsLlxuICAvLyBSRUY6IGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzY3NyNpc3N1ZWNvbW1lbnQtMTc1NzM1MTM1MVxuICByZXR1cm4gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpO1xufVxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICB2YXIgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7XG4gIC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cbiAgcmV0dXJuIHV1aWQ7XG59XG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IG5hdGl2ZSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmIChuYXRpdmUucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5hdGl2ZS5yYW5kb21VVUlEKCk7XG4gIH1cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTtcblxuICAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7XG5cbiAgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuICAgIHJldHVybiBidWY7XG4gIH1cbiAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShybmRzKTtcbn1cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvO1xuICB9IDogZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbztcbiAgfSwgX3R5cGVvZihvKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsImltcG9ydCBzdWJzY3JpYmVVSUFuZFN0b3JhZ2VGdW5jdGlvbnMgZnJvbSBcIi4vZnVuY3Rpb25zL3N1YnNjcmliZVVJQW5kU3RvcmFnZUZ1bmN0aW9uc1wiO1xuaW1wb3J0IHJlbmRlck9uYm9hcmRpbmcgZnJvbSBcIi4vdWkvb25ib2FyZGluZy9vbmJvYXJkaW5nXCI7XG5pbXBvcnQgaGFzVmlzaXRlZCBmcm9tIFwiLi9zdG9yYWdlL2hhc1Zpc2l0ZWRcIjtcbmltcG9ydCBzZXRWaXNpdGVkRmxhZyBmcm9tIFwiLi9zdG9yYWdlL3NldFZpc2l0ZWRGbGFnXCI7XG5pbXBvcnQgc2hvd0FsbFRhc2tzIGZyb20gXCIuL3VpL291dHB1dHMvc2hvd0FsbFRhc2tzXCI7XG5pbXBvcnQgbG9hZFByb2plY3RzIGZyb20gXCIuL3N0b3JhZ2UvbG9hZFByb2plY3RzXCI7XG5pbXBvcnQgYWRkUHJvamVjdEZvcm0gZnJvbSBcIi4vdWkvaW5wdXRzL2FkZFByb2plY3RGb3JtXCI7XG5pbXBvcnQgaW5pdGlhbGl6ZUNhdGVnb3JpZXMgZnJvbSBcIi4vZnVuY3Rpb25zL2luaXRpYWxpemVDYXRlZ29yaWVzXCI7XG5pbXBvcnQgaW5pdGlhbGl6ZUdhbWVzIGZyb20gXCIuL2Z1bmN0aW9ucy9pbml0aWFsaXplR2FtZXNcIjtcbmltcG9ydCB3aGF0c1BvcHBpbmcgZnJvbSBcIi4vdWkvb3V0cHV0cy93aGF0c1BvcHBpbmdcIjtcbmltcG9ydCBzZXRVcFRvdXJCdXR0b24gZnJvbSBcIi4vdWkvb25ib2FyZGluZy9zZXRVcFRvdXJCdXR0b25cIjtcbmltcG9ydCBnZXRTcXVhcmVkVXAgZnJvbSBcIi4vdWkvZG9tVXRpbGl0aWVzL3Jlc2l6ZXJcIjtcbmltcG9ydCByZWdpc3RlclNlcnZpY2VXb3JrZXIgZnJvbSBcIi4vc3dcIjtcbmdldFNxdWFyZWRVcCgpO1xuYWRkUHJvamVjdEZvcm0oKTtcbnNldFVwVG91ckJ1dHRvbigpO1xuc3Vic2NyaWJlVUlBbmRTdG9yYWdlRnVuY3Rpb25zKCk7IC8vIG11c3QgYmUgYmVmb3JlIGFueSBvYmplY3QgaW5pdGlhbGl6YXRpb25zXG5pbml0aWFsaXplQ2F0ZWdvcmllcygpO1xuaW5pdGlhbGl6ZUdhbWVzKCk7XG53aGF0c1BvcHBpbmcoKTtcbmlmICghaGFzVmlzaXRlZCgpKSB7XG4gICAgcmVnaXN0ZXJTZXJ2aWNlV29ya2VyKCk7XG4gICAgcmVuZGVyT25ib2FyZGluZygpO1xuICAgIHNldFZpc2l0ZWRGbGFnKCk7XG59XG5lbHNlIHtcbiAgICBsb2FkUHJvamVjdHMoKTtcbn1cbjtcbi8vIExvYWQgcHJvamVjdHMgbGVhZHMgdG8gUHV0VG9EbyBldmVudHMgYmVpbmcgcHVibGlzaGVkIHdoaWNoIGxlYWQgdG8gdG8tZG8gZWxlbWVudCByZW5kZXJzIGJlaW5nIHByb2plY3QtbGlrZS5cbi8vIFRoaXMgd2lsbCBsZWFkIHRvIHRob3NlIHJlbmRlcnMgYmVpbmcgb3ZlcnJpZGRlbiBmb3IgY2F0ZWdvcnktbGlrZSByZW5kZXJzLlxuLy8gU28gaXQgc2hvdWxkIGJlIGF0IHRoZSBlbmQuXG5zaG93QWxsVGFza3MoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
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
;
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
            navigator.serviceWorker.register('https://black-ram.github.io/Denarius/service-worker.js').then(registration => {
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
        title: "Ave, Denarius!",
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
    history.pushState(group.ID, "", group.name.toLocaleLowerCase().replace(" ", "-"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNQd0Q7QUFDeEQsaUVBQWUsOERBQWE7Ozs7Ozs7Ozs7Ozs7O0FDRDVCO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05xRTtBQUNKO0FBQ1E7QUFDZDtBQUNRO0FBQ047QUFDSDtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsV0FBVyxpRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHlCQUF5Qix3RUFBYztBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEscUVBQWU7QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esc0JBQXNCLDJFQUFpQjs7QUFFdkM7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpRUFBZTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZUFBZSxvRUFBVTtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esa0JBQWtCLHVFQUFhO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxXQUFXLGlFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9CLHlFQUFlO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDekU7QUFDTTtBQUNXO0FBQ1QsQ0FBQztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFFQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVuYXJpdXMvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzIiwid2VicGFjazovL2RlbmFyaXVzLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRMb2NhbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGVuYXJpdXMvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGVuYXJpdXMvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGVuYXJpdXMvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZW5hcml1cy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGVuYXJpdXMvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZW5hcml1cy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGVuYXJpdXMvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZW5hcml1cy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZW5hcml1cy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL2RlbmFyaXVzLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL2RlbmFyaXVzLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZW5hcml1cy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGVuYXJpdXMvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGVuYXJpdXMvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL2RlbmFyaXVzLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL2RlbmFyaXVzLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZW5hcml1cy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGVuYXJpdXMvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZW5hcml1cy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0L2luZGV4LmpzIiwid2VicGFjazovL2RlbmFyaXVzLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGVuYXJpdXMvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVmFsaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGVuYXJpdXMvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzIiwid2VicGFjazovL2RlbmFyaXVzLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGVuYXJpdXMvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZW5hcml1cy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZW5hcml1cy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGVuYXJpdXMvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGVuYXJpdXMvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovL2RlbmFyaXVzLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZW5hcml1cy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGVuYXJpdXMvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZW5hcml1cy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL2RlbmFyaXVzLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGVuYXJpdXMvLi9ub2RlX21vZHVsZXMvaW50cm8uanMvaW50cm8ubW9kdWxlLmpzIiwid2VicGFjazovL2RlbmFyaXVzLy4vc3JjL2NsYXNzZXMvQXJjYWRlLnRzIiwid2VicGFjazovL2RlbmFyaXVzLy4vc3JjL2NsYXNzZXMvQmFuay50cyIsIndlYnBhY2s6Ly9kZW5hcml1cy8uL3NyYy9jbGFzc2VzL0NhdGVnb3JpZXMudHMiLCJ3ZWJwYWNrOi8vZGVuYXJpdXMvLi9zcmMvY2xhc3Nlcy9DYXRlZ29yeS50cyIsIndlYnBhY2s6Ly9kZW5hcml1cy8uL3NyYy9jbGFzc2VzL0dhbWUudHMiLCJ3ZWJwYWNrOi8vZGVuYXJpdXMvLi9zcmMvY2xhc3Nlcy9Hcm91cC50cyIsIndlYnBhY2s6Ly9kZW5hcml1cy8uL3NyYy9jbGFzc2VzL0dyb3VwT2ZHcm91cHMudHMiLCJ3ZWJwYWNrOi8vZGVuYXJpdXMvLi9zcmMvY2xhc3Nlcy9JRGVkLnRzIiwid2VicGFjazovL2RlbmFyaXVzLy4vc3JjL2NsYXNzZXMvUHJvamVjdC50cyIsIndlYnBhY2s6Ly9kZW5hcml1cy8uL3NyYy9jbGFzc2VzL1Byb2plY3RzLnRzIiwid2VicGFjazovL2RlbmFyaXVzLy4vc3JjL2NsYXNzZXMvUHViU3ViLnRzIiwid2VicGFjazovL2RlbmFyaXVzLy4vc3JjL2NsYXNzZXMvU2luZ2xldG9uLnRzIiwid2VicGFjazovL2RlbmFyaXVzLy4vc3JjL2NsYXNzZXMvVG9Eby50cyIsIndlYnBhY2s6Ly9kZW5hcml1cy8uL3NyYy9lbnVtcy9QdWJTdWJFdmVudHMudHMiLCJ3ZWJwYWNrOi8vZGVuYXJpdXMvLi9zcmMvZW51bXMvVG9Eb1ByaW9yaXR5LnRzIiwid2VicGFjazovL2RlbmFyaXVzLy4vc3JjL2Z1bmN0aW9ucy9kYXRlR2VuZXJhdG9ycy50cyIsIndlYnBhY2s6Ly9kZW5hcml1cy8uL3NyYy9mdW5jdGlvbnMvZmlsdGVySW1wb3J0YW50LnRzIiwid2VicGFjazovL2RlbmFyaXVzLy4vc3JjL2Z1bmN0aW9ucy9maWx0ZXJUaGlzV2Vlay50cyIsIndlYnBhY2s6Ly9kZW5hcml1cy8uL3NyYy9mdW5jdGlvbnMvZmlsdGVyVG9kYXkudHMiLCJ3ZWJwYWNrOi8vZGVuYXJpdXMvLi9zcmMvZnVuY3Rpb25zL2luaXRpYWxpemVDYXRlZ29yaWVzLnRzIiwid2VicGFjazovL2RlbmFyaXVzLy4vc3JjL2Z1bmN0aW9ucy9pbml0aWFsaXplR2FtZXMudHMiLCJ3ZWJwYWNrOi8vZGVuYXJpdXMvLi9zcmMvZnVuY3Rpb25zL2lzVVVJRC50cyIsIndlYnBhY2s6Ly9kZW5hcml1cy8uL3NyYy9mdW5jdGlvbnMvbm9GaWx0ZXIudHMiLCJ3ZWJwYWNrOi8vZGVuYXJpdXMvLi9zcmMvZnVuY3Rpb25zL3BvcHVsYXRlSW5pdGlhbFByb2plY3RzLnRzIiwid2VicGFjazovL2RlbmFyaXVzLy4vc3JjL2Z1bmN0aW9ucy9zdWJzY3JpYmVVSUFuZFN0b3JhZ2VGdW5jdGlvbnMudHMiLCJ3ZWJwYWNrOi8vZGVuYXJpdXMvLi9zcmMvZnVuY3Rpb25zL3RpbWVOb3JtYWxpc2UudHMiLCJ3ZWJwYWNrOi8vZGVuYXJpdXMvLi9zcmMvcmVnZXgvZW5kc1dpdGhJbWFnZUZpbGVFeHRlbnNpb24udHMiLCJ3ZWJwYWNrOi8vZGVuYXJpdXMvLi9zcmMvcmVnZXgvc3RhcnRzV2l0aEhUVFBTLnRzIiwid2VicGFjazovL2RlbmFyaXVzLy4vc3JjL3JlZ2V4L3V1aWRSZWdleC50cyIsIndlYnBhY2s6Ly9kZW5hcml1cy8uL3NyYy9zdG9yYWdlL2dldENvaW5zLnRzIiwid2VicGFjazovL2RlbmFyaXVzLy4vc3JjL3N0b3JhZ2UvaGFzVmlzaXRlZC50cyIsIndlYnBhY2s6Ly9kZW5hcml1cy8uL3NyYy9zdG9yYWdlL2xvYWRQcm9qZWN0cy50cyIsIndlYnBhY2s6Ly9kZW5hcml1cy8uL3NyYy9zdG9yYWdlL3B1dENvaW5zLnRzIiwid2VicGFjazovL2RlbmFyaXVzLy4vc3JjL3N0b3JhZ2Uvc2V0VmlzaXRlZEZsYWcudHMiLCJ3ZWJwYWNrOi8vZGVuYXJpdXMvLi9zcmMvc3RvcmFnZS9zdG9yZVByb2plY3RzLnRzIiwid2VicGFjazovL2RlbmFyaXVzLy4vc3JjL3N3LnRzIiwid2VicGFjazovL2RlbmFyaXVzLy4vc3JjL3VpL2RvbUNvbnN0YW50cy9hcmNhZGVTdGF0ZS50cyIsIndlYnBhY2s6Ly9kZW5hcml1cy8uL3NyYy91aS9kb21Db25zdGFudHMvcHJvamVjdENvbnRhaW5lci50cyIsIndlYnBhY2s6Ly9kZW5hcml1cy8uL3NyYy91aS9kb21VdGlsaXRpZXMvcmVzaXplci50cyIsIndlYnBhY2s6Ly9kZW5hcml1cy8uL3NyYy91aS9pbnB1dHMvYWRkUHJvamVjdEZvcm0udHMiLCJ3ZWJwYWNrOi8vZGVuYXJpdXMvLi9zcmMvdWkvaW5wdXRzL2FkZFRvRG9Gb3JtLnRzIiwid2VicGFjazovL2RlbmFyaXVzLy4vc3JjL3VpL2lucHV0cy9lZGl0VG9Eb0Zvcm0udHMiLCJ3ZWJwYWNrOi8vZGVuYXJpdXMvLi9zcmMvdWkvaW5wdXRzL3Byb2plY3ROYW1lTW9kYWwudHMiLCJ3ZWJwYWNrOi8vZGVuYXJpdXMvLi9zcmMvdWkvaW5wdXRzL3RvRG9Gb3JtLnRzIiwid2VicGFjazovL2RlbmFyaXVzLy4vc3JjL3VpL29uYm9hcmRpbmcvY2F0ZWdvcnlTdGVwcy50cyIsIndlYnBhY2s6Ly9kZW5hcml1cy8uL3NyYy91aS9vbmJvYXJkaW5nL2VsZW1lbnREaWN0aW9uYXJ5LnRzIiwid2VicGFjazovL2RlbmFyaXVzLy4vc3JjL3VpL29uYm9hcmRpbmcvZ2FtZVN0ZXBzLnRzIiwid2VicGFjazovL2RlbmFyaXVzLy4vc3JjL3VpL29uYm9hcmRpbmcvb25ib2FyZGluZy50cyIsIndlYnBhY2s6Ly9kZW5hcml1cy8uL3NyYy91aS9vbmJvYXJkaW5nL3Byb2plY3RTdGVwcy50cyIsIndlYnBhY2s6Ly9kZW5hcml1cy8uL3NyYy91aS9vbmJvYXJkaW5nL3NldFVwVG91ckJ1dHRvbi50cyIsIndlYnBhY2s6Ly9kZW5hcml1cy8uL3NyYy91aS9vbmJvYXJkaW5nL3N0YWdlcy50cyIsIndlYnBhY2s6Ly9kZW5hcml1cy8uL3NyYy91aS9vdXRwdXRzL2NsZWFyUGFnZS50cyIsIndlYnBhY2s6Ly9kZW5hcml1cy8uL3NyYy91aS9vdXRwdXRzL2lkZW1wb3RlbnRET00udHMiLCJ3ZWJwYWNrOi8vZGVuYXJpdXMvLi9zcmMvdWkvb3V0cHV0cy9pZGVtcG90ZW50bHlSZW5kZXJUb0RvLnRzIiwid2VicGFjazovL2RlbmFyaXVzLy4vc3JjL3VpL291dHB1dHMvcHV0Q2F0ZWdvcnkudHMiLCJ3ZWJwYWNrOi8vZGVuYXJpdXMvLi9zcmMvdWkvb3V0cHV0cy9wdXRHcm91cEluU2lkZWJhci50cyIsIndlYnBhY2s6Ly9kZW5hcml1cy8uL3NyYy91aS9vdXRwdXRzL3B1dFByb2plY3QudHMiLCJ3ZWJwYWNrOi8vZGVuYXJpdXMvLi9zcmMvdWkvb3V0cHV0cy9yZW1vdmVQcm9qZWN0LnRzIiwid2VicGFjazovL2RlbmFyaXVzLy4vc3JjL3VpL291dHB1dHMvcmVtb3ZlVG9Eby50cyIsIndlYnBhY2s6Ly9kZW5hcml1cy8uL3NyYy91aS9vdXRwdXRzL3JlbmRlckFyY2FkZS50cyIsIndlYnBhY2s6Ly9kZW5hcml1cy8uL3NyYy91aS9vdXRwdXRzL3JlbmRlckdyb3VwLnRzIiwid2VicGFjazovL2RlbmFyaXVzLy4vc3JjL3VpL291dHB1dHMvcmVuZGVyTWVzc2FnZS50cyIsIndlYnBhY2s6Ly9kZW5hcml1cy8uL3NyYy91aS9vdXRwdXRzL3Nob3dBbGxUYXNrcy50cyIsIndlYnBhY2s6Ly9kZW5hcml1cy8uL3NyYy91aS9vdXRwdXRzL3VwZGF0ZVRvRG9Db3VudGVyLnRzIiwid2VicGFjazovL2RlbmFyaXVzLy4vc3JjL3VpL291dHB1dHMvd2hhdHNQb3BwaW5nLnRzIiwid2VicGFjazovL2RlbmFyaXVzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vZGVuYXJpdXMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL2RlbmFyaXVzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vZGVuYXJpdXMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9kZW5hcml1cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vZGVuYXJpdXMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL2RlbmFyaXVzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9kZW5hcml1cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kZW5hcml1cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGVuYXJpdXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kZW5hcml1cy8uL3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm9zKG51bWJlciwgdGFyZ2V0TGVuZ3RoKSB7XG4gIHZhciBzaWduID0gbnVtYmVyIDwgMCA/ICctJyA6ICcnO1xuICB2YXIgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpO1xuICB3aGlsZSAob3V0cHV0Lmxlbmd0aCA8IHRhcmdldExlbmd0aCkge1xuICAgIG91dHB1dCA9ICcwJyArIG91dHB1dDtcbiAgfVxuICByZXR1cm4gc2lnbiArIG91dHB1dDtcbn0iLCJpbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vLi4vbG9jYWxlL2VuLVVTL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0TG9jYWxlOyIsInZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59IiwiaW1wb3J0IGdldFVUQ0RheU9mWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbmltcG9ydCBsaWdodEZvcm1hdHRlcnMgZnJvbSBcIi4uL2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qc1wiO1xudmFyIGRheVBlcmlvZEVudW0gPSB7XG4gIGFtOiAnYW0nLFxuICBwbTogJ3BtJyxcbiAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gIG5vb246ICdub29uJyxcbiAgbW9ybmluZzogJ21vcm5pbmcnLFxuICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICBldmVuaW5nOiAnZXZlbmluZycsXG4gIG5pZ2h0OiAnbmlnaHQnXG59O1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgTWlsbGlzZWNvbmRzIGluIGRheSAgICAgICAgICAgIHxcbiAqIHwgIGIgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgIHwgIEIgIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgIHxcbiAqIHwgIGMgIHwgU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWsgIHwgIEMqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGUgIHwgTG9jYWwgZGF5IG9mIHdlZWsgICAgICAgICAgICAgIHwgIEUgIHwgRGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGYgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEYqIHwgRGF5IG9mIHdlZWsgaW4gbW9udGggICAgICAgICAgIHxcbiAqIHwgIGcqIHwgTW9kaWZpZWQgSnVsaWFuIGRheSAgICAgICAgICAgIHwgIEcgIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGkhIHwgSVNPIGRheSBvZiB3ZWVrICAgICAgICAgICAgICAgIHwgIEkhIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgIHxcbiAqIHwgIGoqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHwgIEoqIHwgTG9jYWxpemVkIGhvdXIgdy9vIGRheSBwZXJpb2QgIHxcbiAqIHwgIGsgIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgIHwgIEsgIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGwqIHwgKGRlcHJlY2F0ZWQpICAgICAgICAgICAgICAgICAgIHwgIEwgIHwgU3RhbmQtYWxvbmUgbW9udGggICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG8hIHwgT3JkaW5hbCBudW1iZXIgbW9kaWZpZXIgICAgICAgIHwgIE8gIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHAhIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgIHwgIFAhIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgIHxcbiAqIHwgIHEgIHwgU3RhbmQtYWxvbmUgcXVhcnRlciAgICAgICAgICAgIHwgIFEgIHwgUXVhcnRlciAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHIqIHwgUmVsYXRlZCBHcmVnb3JpYW4geWVhciAgICAgICAgIHwgIFIhIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHQhIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgIHwgIFQhIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgIHxcbiAqIHwgIHUgIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgIHwgIFUqIHwgQ3ljbGljIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHYqIHwgVGltZXpvbmUgKGdlbmVyaWMgbm9uLWxvY2F0LikgIHwgIFYqIHwgVGltZXpvbmUgKGxvY2F0aW9uKSAgICAgICAgICAgIHxcbiAqIHwgIHcgIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgIHwgIFcqIHwgV2VlayBvZiBtb250aCAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHggIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgIHwgIFggIHwgVGltZXpvbmUgKElTTy04NjAxKSAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgIHxcbiAqIHwgIHogIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pIHwgIFoqIHwgVGltZXpvbmUgKGFsaWFzZXMpICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgISBhcmUgbm9uLXN0YW5kYXJkLCBidXQgaW1wbGVtZW50ZWQgYnkgZGF0ZS1mbnM6XG4gKiAtIGBvYCBtb2RpZmllcyB0aGUgcHJldmlvdXMgdG9rZW4gdG8gdHVybiBpdCBpbnRvIGFuIG9yZGluYWwgKHNlZSBgZm9ybWF0YCBkb2NzKVxuICogLSBgaWAgaXMgSVNPIGRheSBvZiB3ZWVrLiBGb3IgYGlgIGFuZCBgaWlgIGlzIHJldHVybnMgbnVtZXJpYyBJU08gd2VlayBkYXlzLFxuICogICBpLmUuIDcgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXG4gKiAtIGBJYCBpcyBJU08gd2VlayBvZiB5ZWFyLCBhcyBvcHBvc2VkIHRvIGB3YCB3aGljaCBpcyBsb2NhbCB3ZWVrIG9mIHllYXIuXG4gKiAtIGBSYCBpcyBJU08gd2Vlay1udW1iZXJpbmcgeWVhciwgYXMgb3Bwb3NlZCB0byBgWWAgd2hpY2ggaXMgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqICAgYFJgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgSWAgYW5kIGBpYFxuICogICBmb3IgdW5pdmVyc2FsIElTTyB3ZWVrLW51bWJlcmluZyBkYXRlLCB3aGVyZWFzXG4gKiAgIGBZYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHdgIGFuZCBgZWBcbiAqICAgZm9yIHdlZWstbnVtYmVyaW5nIGRhdGUgc3BlY2lmaWMgdG8gdGhlIGxvY2FsZS5cbiAqIC0gYFBgIGlzIGxvbmcgbG9jYWxpemVkIGRhdGUgZm9ybWF0XG4gKiAtIGBwYCBpcyBsb25nIGxvY2FsaXplZCB0aW1lIGZvcm1hdFxuICovXG5cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBFcmFcbiAgRzogZnVuY3Rpb24gRyhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZXJhID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpID4gMCA/IDEgOiAwO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEFELCBCQ1xuICAgICAgY2FzZSAnRyc6XG4gICAgICBjYXNlICdHRyc6XG4gICAgICBjYXNlICdHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQSwgQlxuICAgICAgY2FzZSAnR0dHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93J1xuICAgICAgICB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG4gICAgICBjYXNlICdHR0dHJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24geShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gJ3lvJykge1xuICAgICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgICAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuICAgICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHllYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy55KGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhclxuICBZOiBmdW5jdGlvbiBZKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBzaWduZWRXZWVrWWVhciA9IGdldFVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpO1xuICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgdmFyIHdlZWtZZWFyID0gc2lnbmVkV2Vla1llYXIgPiAwID8gc2lnbmVkV2Vla1llYXIgOiAxIC0gc2lnbmVkV2Vla1llYXI7XG5cbiAgICAvLyBUd28gZGlnaXQgeWVhclxuICAgIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgICAgdmFyIHR3b0RpZ2l0WWVhciA9IHdlZWtZZWFyICUgMTAwO1xuICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0d29EaWdpdFllYXIsIDIpO1xuICAgIH1cblxuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSAnWW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrWWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFBhZGRpbmdcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICBSOiBmdW5jdGlvbiBSKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGlzb1dlZWtZZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGF0ZSk7XG5cbiAgICAvLyBQYWRkaW5nXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRXh0ZW5kZWQgeWVhci4gVGhpcyBpcyBhIHNpbmdsZSBudW1iZXIgZGVzaWduYXRpbmcgdGhlIHllYXIgb2YgdGhpcyBjYWxlbmRhciBzeXN0ZW0uXG4gIC8vIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBsb2NhbGl6ZXJzIGFyZSBCLkMuIHllYXJzOlxuICAvLyB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICAvLyB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICAvLyB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICAvLyB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICAvLyB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICAvLyBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gIC8vIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZC5cbiAgdTogZnVuY3Rpb24gdShkYXRlLCB0b2tlbikge1xuICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gUXVhcnRlclxuICBROiBmdW5jdGlvbiBRKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ1EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcbiAgICAgIGNhc2UgJ1FRJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuICAgICAgY2FzZSAnUW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcbiAgICAgIGNhc2UgJ1FRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcbiAgICAgIGNhc2UgJ1FRUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuICAgICAgY2FzZSAnUVFRUSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBxdWFydGVyXG4gIHE6IGZ1bmN0aW9uIHEoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAncSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuICAgICAgY2FzZSAncXEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG4gICAgICBjYXNlICdxbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuICAgICAgY2FzZSAncXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuICAgICAgY2FzZSAncXFxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG4gICAgICBjYXNlICdxcXFxJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIE0oZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ00nOlxuICAgICAgY2FzZSAnTU0nOlxuICAgICAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLk0oZGF0ZSwgdG9rZW4pO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuICAgICAgY2FzZSAnTW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG4gICAgICBjYXNlICdNTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcbiAgICAgIGNhc2UgJ01NTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG4gICAgICBjYXNlICdNTU1NJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbW9udGhcbiAgTDogZnVuY3Rpb24gTChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgLi4uLCAxMlxuICAgICAgY2FzZSAnTCc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobW9udGggKyAxKTtcbiAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxuICAgICAgY2FzZSAnTEwnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG4gICAgICBjYXNlICdMbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcbiAgICAgIGNhc2UgJ0xMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuICAgICAgY2FzZSAnTExMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcbiAgICAgIGNhc2UgJ0xMTEwnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCB3ZWVrIG9mIHllYXJcbiAgdzogZnVuY3Rpb24gdyhkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgd2VlayA9IGdldFVUQ1dlZWsoZGF0ZSwgb3B0aW9ucyk7XG4gICAgaWYgKHRva2VuID09PSAnd28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWsgb2YgeWVhclxuICBJOiBmdW5jdGlvbiBJKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBpc29XZWVrID0gZ2V0VVRDSVNPV2VlayhkYXRlKTtcbiAgICBpZiAodG9rZW4gPT09ICdJbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb1dlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIGQoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnZG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0RhdGUoKSwge1xuICAgICAgICB1bml0OiAnZGF0ZSdcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmQoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBEYXkgb2YgeWVhclxuICBEOiBmdW5jdGlvbiBEKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZlllYXIgPSBnZXRVVENEYXlPZlllYXIoZGF0ZSk7XG4gICAgaWYgKHRva2VuID09PSAnRG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXlPZlllYXIsIHtcbiAgICAgICAgdW5pdDogJ2RheU9mWWVhcidcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRheU9mWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHdlZWtcbiAgRTogZnVuY3Rpb24gRShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgJ0UnOlxuICAgICAgY2FzZSAnRUUnOlxuICAgICAgY2FzZSAnRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlICdFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlICdFRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgJ0VFRUUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIGRheSBvZiB3ZWVrXG4gIGU6IGZ1bmN0aW9uIGUoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChOdGggZGF5IG9mIHdlZWsgd2l0aCBjdXJyZW50IGxvY2FsZSBvciB3ZWVrU3RhcnRzT24pXG4gICAgICBjYXNlICdlJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG4gICAgICBjYXNlICdlZSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG4gICAgICBjYXNlICdlbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgJ2VlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgJ2VlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSAnZWVlZSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcbiAgYzogZnVuY3Rpb24gYyhkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKHNhbWUgYXMgaW4gYGVgKVxuICAgICAgY2FzZSAnYyc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuICAgICAgY2FzZSAnY2MnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG4gICAgICBjYXNlICdjbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgJ2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgJ2NjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSAnY2NjYyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSVNPIGRheSBvZiB3ZWVrXG4gIGk6IGZ1bmN0aW9uIGkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGlzb0RheU9mV2VlayA9IGRheU9mV2VlayA9PT0gMCA/IDcgOiBkYXlPZldlZWs7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMlxuICAgICAgY2FzZSAnaSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcoaXNvRGF5T2ZXZWVrKTtcbiAgICAgIC8vIDAyXG4gICAgICBjYXNlICdpaSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMm5kXG4gICAgICBjYXNlICdpbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb0RheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlICdpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgJ2lpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgJ2lpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSAnaWlpaSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gYShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNLCBQTSwgbWlkbmlnaHQsIG5vb25cbiAgYjogZnVuY3Rpb24gYihkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICBpZiAoaG91cnMgPT09IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA9PT0gMCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5taWRuaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG4gICAgfVxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2InOlxuICAgICAgY2FzZSAnYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ2JiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjYXNlICdiYmJiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ2JiYmInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIGluIHRoZSBtb3JuaW5nLCBpbiB0aGUgYWZ0ZXJub29uLCBpbiB0aGUgZXZlbmluZywgYXQgbmlnaHRcbiAgQjogZnVuY3Rpb24gQihkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICBpZiAoaG91cnMgPj0gMTcpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uZXZlbmluZztcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmFmdGVybm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDQpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubW9ybmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5uaWdodDtcbiAgICB9XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnQic6XG4gICAgICBjYXNlICdCQic6XG4gICAgICBjYXNlICdCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ0JCQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnQkJCQic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gaChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdobycpIHtcbiAgICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuICAgICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDEyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5oKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gSChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdIbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDSG91cnMoKSwge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLkgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTExXVxuICBLOiBmdW5jdGlvbiBLKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuICAgIGlmICh0b2tlbiA9PT0gJ0tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMS0yNF1cbiAgazogZnVuY3Rpb24gayhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDI0O1xuICAgIGlmICh0b2tlbiA9PT0gJ2tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIG0oZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnbW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ01pbnV0ZXMoKSwge1xuICAgICAgICB1bml0OiAnbWludXRlJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMubShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiBzKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ3NvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHtcbiAgICAgICAgdW5pdDogJ3NlY29uZCdcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gUyhkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuUyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBhbHdheXMgYCdaJ2ApXG4gIFg6IGZ1bmN0aW9uIFgoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICBpZiAodGltZXpvbmVPZmZzZXQgPT09IDApIHtcbiAgICAgIHJldHVybiAnWic7XG4gICAgfVxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICdYJzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYYFxuICAgICAgY2FzZSAnWFhYWCc6XG4gICAgICBjYXNlICdYWCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWFhgXG4gICAgICBjYXNlICdYWFhYWCc6XG4gICAgICBjYXNlICdYWFgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBgJyswMDowMCdgIG9yIGVxdWl2YWxlbnQpXG4gIHg6IGZ1bmN0aW9uIHgoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAneCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eGBcbiAgICAgIGNhc2UgJ3h4eHgnOlxuICAgICAgY2FzZSAneHgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHh4YFxuICAgICAgY2FzZSAneHh4eHgnOlxuICAgICAgY2FzZSAneHh4JzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoR01UKVxuICBPOiBmdW5jdGlvbiBPKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ08nOlxuICAgICAgY2FzZSAnT08nOlxuICAgICAgY2FzZSAnT09PJzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcbiAgICAgIGNhc2UgJ09PT08nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0aW9uKVxuICB6OiBmdW5jdGlvbiB6KGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ3onOlxuICAgICAgY2FzZSAnenonOlxuICAgICAgY2FzZSAnenp6JzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcbiAgICAgIGNhc2UgJ3p6enonOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBTZWNvbmRzIHRpbWVzdGFtcFxuICB0OiBmdW5jdGlvbiB0KGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IE1hdGguZmxvb3Iob3JpZ2luYWxEYXRlLmdldFRpbWUoKSAvIDEwMDApO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gIFQ6IGZ1bmN0aW9uIFQoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gb3JpZ2luYWxEYXRlLmdldFRpbWUoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lU2hvcnQob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKTtcbiAgdmFyIG1pbnV0ZXMgPSBhYnNPZmZzZXQgJSA2MDtcbiAgaWYgKG1pbnV0ZXMgPT09IDApIHtcbiAgICByZXR1cm4gc2lnbiArIFN0cmluZyhob3Vycyk7XG4gIH1cbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICByZXR1cm4gc2lnbiArIFN0cmluZyhob3VycykgKyBkZWxpbWl0ZXIgKyBhZGRMZWFkaW5nWmVyb3MobWludXRlcywgMik7XG59XG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXMob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICBpZiAob2Zmc2V0ICUgNjAgPT09IDApIHtcbiAgICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gICAgcmV0dXJuIHNpZ24gKyBhZGRMZWFkaW5nWmVyb3MoTWF0aC5hYnMob2Zmc2V0KSAvIDYwLCAyKTtcbiAgfVxuICByZXR1cm4gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcik7XG59XG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gYWRkTGVhZGluZ1plcm9zKE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApLCAyKTtcbiAgdmFyIG1pbnV0ZXMgPSBhZGRMZWFkaW5nWmVyb3MoYWJzT2Zmc2V0ICUgNjAsIDIpO1xuICByZXR1cm4gc2lnbiArIGhvdXJzICsgZGVsaW1pdGVyICsgbWludXRlcztcbn1cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqL1xudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24geShkYXRlLCB0b2tlbikge1xuICAgIC8vIEZyb20gaHR0cDovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS0zMS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9Gb3JtYXRfdG9rZW5zXG4gICAgLy8gfCBZZWFyICAgICB8ICAgICB5IHwgeXkgfCAgIHl5eSB8ICB5eXl5IHwgeXl5eXkgfFxuICAgIC8vIHwtLS0tLS0tLS0tfC0tLS0tLS18LS0tLXwtLS0tLS0tfC0tLS0tLS18LS0tLS0tLXxcbiAgICAvLyB8IEFEIDEgICAgIHwgICAgIDEgfCAwMSB8ICAgMDAxIHwgIDAwMDEgfCAwMDAwMSB8XG4gICAgLy8gfCBBRCAxMiAgICB8ICAgIDEyIHwgMTIgfCAgIDAxMiB8ICAwMDEyIHwgMDAwMTIgfFxuICAgIC8vIHwgQUQgMTIzICAgfCAgIDEyMyB8IDIzIHwgICAxMjMgfCAgMDEyMyB8IDAwMTIzIHxcbiAgICAvLyB8IEFEIDEyMzQgIHwgIDEyMzQgfCAzNCB8ICAxMjM0IHwgIDEyMzQgfCAwMTIzNCB8XG4gICAgLy8gfCBBRCAxMjM0NSB8IDEyMzQ1IHwgNDUgfCAxMjM0NSB8IDEyMzQ1IHwgMTIzNDUgfFxuXG4gICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModG9rZW4gPT09ICd5eScgPyB5ZWFyICUgMTAwIDogeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gTShkYXRlLCB0b2tlbikge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICByZXR1cm4gdG9rZW4gPT09ICdNJyA/IFN0cmluZyhtb250aCArIDEpIDogYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gZChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENEYXRlKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIGEoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF0ZS5nZXRVVENIb3VycygpIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlLnRvVXBwZXJDYXNlKCk7XG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlWzBdO1xuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlID09PSAnYW0nID8gJ2EubS4nIDogJ3AubS4nO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gaChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpICUgMTIgfHwgMTIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIEgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIG0oZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDTWludXRlcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gcyhkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiBTKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG51bWJlck9mRGlnaXRzID0gdG9rZW4ubGVuZ3RoO1xuICAgIHZhciBtaWxsaXNlY29uZHMgPSBkYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpO1xuICAgIHZhciBmcmFjdGlvbmFsU2Vjb25kcyA9IE1hdGguZmxvb3IobWlsbGlzZWNvbmRzICogTWF0aC5wb3coMTAsIG51bWJlck9mRGlnaXRzIC0gMykpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZnJhY3Rpb25hbFNlY29uZHMsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsInZhciBkYXRlTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuICAgIGNhc2UgJ1BQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuICAgIGNhc2UgJ1BQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufTtcbnZhciB0aW1lTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIHRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAncCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuICAgIGNhc2UgJ3BwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuICAgIGNhc2UgJ3BwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgY2FzZSAncHBwcCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufTtcbnZhciBkYXRlVGltZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiBkYXRlVGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICB2YXIgbWF0Y2hSZXN1bHQgPSBwYXR0ZXJuLm1hdGNoKC8oUCspKHArKT8vKSB8fCBbXTtcbiAgdmFyIGRhdGVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMV07XG4gIHZhciB0aW1lUGF0dGVybiA9IG1hdGNoUmVzdWx0WzJdO1xuICBpZiAoIXRpbWVQYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpO1xuICB9XG4gIHZhciBkYXRlVGltZUZvcm1hdDtcbiAgc3dpdGNoIChkYXRlUGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1BQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG4gIHJldHVybiBkYXRlVGltZUZvcm1hdC5yZXBsYWNlKCd7e2RhdGV9fScsIGRhdGVMb25nRm9ybWF0dGVyKGRhdGVQYXR0ZXJuLCBmb3JtYXRMb25nKSkucmVwbGFjZSgne3t0aW1lfX0nLCB0aW1lTG9uZ0Zvcm1hdHRlcih0aW1lUGF0dGVybiwgZm9ybWF0TG9uZykpO1xufTtcbnZhciBsb25nRm9ybWF0dGVycyA9IHtcbiAgcDogdGltZUxvbmdGb3JtYXR0ZXIsXG4gIFA6IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlclxufTtcbmV4cG9ydCBkZWZhdWx0IGxvbmdGb3JtYXR0ZXJzOyIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDRGF5T2ZZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICBkYXRlLnNldFVUQ01vbnRoKDAsIDEpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlllYXJUaW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIGRpZmZlcmVuY2UgPSB0aW1lc3RhbXAgLSBzdGFydE9mWWVhclRpbWVzdGFtcDtcbiAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZmVyZW5jZSAvIE1JTExJU0VDT05EU19JTl9EQVkpICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDSVNPV2VlayhkYXRlKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGF0ZSkuZ2V0VGltZSgpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDV2VlayhkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMSk7XG5cbiAgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG4gIHZhciBmaXJzdFdlZWtPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZk5leHRZZWFyLCBvcHRpb25zKTtcbiAgdmFyIGZpcnN0V2Vla09mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZUaGlzWWVhciwgb3B0aW9ucyk7XG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJ2YXIgcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zID0gWydEJywgJ0REJ107XG52YXIgcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMgPSBbJ1lZJywgJ1lZWVknXTtcbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdCwgaW5wdXQpIHtcbiAgaWYgKHRva2VuID09PSAnWVlZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnRCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnREQnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IDE7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeSA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnkpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7XG5cbiAgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8uZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAxKTtcbiAgdmFyIHllYXIgPSBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vlay5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWsuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrLCBvcHRpb25zKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGRNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgNzUwIG1pbGxpc2Vjb25kcyB0byAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gYWRkTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MzAuNzUwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgdGltZXN0YW1wID0gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIGFtb3VudCk7XG59IiwiaW1wb3J0IGlzVmFsaWQgZnJvbSBcIi4uL2lzVmFsaWQvaW5kZXguanNcIjtcbmltcG9ydCBzdWJNaWxsaXNlY29uZHMgZnJvbSBcIi4uL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGxvbmdGb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbiwgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuLCB0aHJvd1Byb3RlY3RlZEVycm9yIH0gZnJvbSBcIi4uL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi9fbGliL2RlZmF1bHRMb2NhbGUvaW5kZXguanNcIjsgLy8gVGhpcyBSZWdFeHAgY29uc2lzdHMgb2YgdGhyZWUgcGFydHMgc2VwYXJhdGVkIGJ5IGB8YDpcbi8vIC0gW3lZUXFNTHdJZERlY2loSEtrbXNdbyBtYXRjaGVzIGFueSBhdmFpbGFibGUgb3JkaW5hbCBudW1iZXIgdG9rZW5cbi8vICAgKG9uZSBvZiB0aGUgY2VydGFpbiBsZXR0ZXJzIGZvbGxvd2VkIGJ5IGBvYClcbi8vIC0gKFxcdylcXDEqIG1hdGNoZXMgYW55IHNlcXVlbmNlcyBvZiB0aGUgc2FtZSBsZXR0ZXJcbi8vIC0gJycgbWF0Y2hlcyB0d28gcXVvdGUgY2hhcmFjdGVycyBpbiBhIHJvd1xuLy8gLSAnKCcnfFteJ10pKygnfCQpIG1hdGNoZXMgYW55dGhpbmcgc3Vycm91bmRlZCBieSB0d28gcXVvdGUgY2hhcmFjdGVycyAoJyksXG4vLyAgIGV4Y2VwdCBhIHNpbmdsZSBxdW90ZSBzeW1ib2wsIHdoaWNoIGVuZHMgdGhlIHNlcXVlbmNlLlxuLy8gICBUd28gcXVvdGUgY2hhcmFjdGVycyBkbyBub3QgZW5kIHRoZSBzZXF1ZW5jZS5cbi8vICAgSWYgdGhlcmUgaXMgbm8gbWF0Y2hpbmcgc2luZ2xlIHF1b3RlXG4vLyAgIHRoZW4gdGhlIHNlcXVlbmNlIHdpbGwgY29udGludWUgdW50aWwgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLlxuLy8gLSAuIG1hdGNoZXMgYW55IHNpbmdsZSBjaGFyYWN0ZXIgdW5tYXRjaGVkIGJ5IHByZXZpb3VzIHBhcnRzIG9mIHRoZSBSZWdFeHBzXG52YXIgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9beVlRcU1Md0lkRGVjaWhIS2ttc11vfChcXHcpXFwxKnwnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcblxuLy8gVGhpcyBSZWdFeHAgY2F0Y2hlcyBzeW1ib2xzIGVzY2FwZWQgYnkgcXVvdGVzLCBhbmQgYWxzb1xuLy8gc2VxdWVuY2VzIG9mIHN5bWJvbHMgUCwgcCwgYW5kIHRoZSBjb21iaW5hdGlvbnMgbGlrZSBgUFBQUFBQUHBwcHBwYFxudmFyIGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG52YXIgZXNjYXBlZFN0cmluZ1JlZ0V4cCA9IC9eJyhbXl0qPyknPyQvO1xudmFyIGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG52YXIgdW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAgPSAvW2EtekEtWl0vO1xuXG4vKipcbiAqIEBuYW1lIGZvcm1hdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBGb3JtYXQgdGhlIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyBpbiB0aGUgZ2l2ZW4gZm9ybWF0LiBUaGUgcmVzdWx0IG1heSB2YXJ5IGJ5IGxvY2FsZS5cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBgZm9ybWF0YCB0b2tlbnMgZGlmZmVyIGZyb20gTW9tZW50LmpzIGFuZCBvdGhlciBsaWJyYXJpZXMuXG4gKiA+IFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIFRoZSBjaGFyYWN0ZXJzIHdyYXBwZWQgYmV0d2VlbiB0d28gc2luZ2xlIHF1b3RlcyBjaGFyYWN0ZXJzICgnKSBhcmUgZXNjYXBlZC5cbiAqIFR3byBzaW5nbGUgcXVvdGVzIGluIGEgcm93LCB3aGV0aGVyIGluc2lkZSBvciBvdXRzaWRlIGEgcXVvdGVkIHNlcXVlbmNlLCByZXByZXNlbnQgYSAncmVhbCcgc2luZ2xlIHF1b3RlLlxuICogKHNlZSB0aGUgbGFzdCBleGFtcGxlKVxuICpcbiAqIEZvcm1hdCBvZiB0aGUgc3RyaW5nIGlzIGJhc2VkIG9uIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqIGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGVcbiAqIHdpdGggYSBmZXcgYWRkaXRpb25zIChzZWUgbm90ZSA3IGJlbG93IHRoZSB0YWJsZSkuXG4gKlxuICogQWNjZXB0ZWQgcGF0dGVybnM6XG4gKiB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQYXR0ZXJuIHwgUmVzdWx0IGV4YW1wbGVzICAgICAgICAgICAgICAgICAgIHwgTm90ZXMgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLXxcbiAqIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEcuLkdHRyAgfCBBRCwgQkMgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHICAgIHwgQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3QgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHR0cgICB8IEEsIEIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQ2FsZW5kYXIgeWVhciAgICAgICAgICAgICAgICAgICB8IHkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5byAgICAgIHwgNDR0aCwgMXN0LCAwdGgsIDE3dGggICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5ICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eXkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICB8IFkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZbyAgICAgIHwgNDR0aCwgMXN0LCAxOTAwdGgsIDIwMTd0aCAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWVkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgICB8IFIgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUiAgICAgIHwgLTQzLCAwMCwgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSICAgICB8IC0wNDMsIDAwMCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlIgICAgfCAtMDA0MywgMDAwMCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSUiAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1LDcgfFxuICogfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgIHwgdSAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1ICAgICAgfCAtNDMsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXUgICAgIHwgLTA0MywgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dSAgICB8IC0wMDQzLCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXV1ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IFF1YXJ0ZXIgKGZvcm1hdHRpbmcpICAgICAgICAgICAgfCBRICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVFRICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IFF1YXJ0ZXIgKHN0YW5kLWFsb25lKSAgICAgICAgICAgfCBxICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXFxICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IE1vbnRoIChmb3JtYXR0aW5nKSAgICAgICAgICAgICAgfCBNICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU0gICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTSAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU1NICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1vbnRoIChzdGFuZC1hbG9uZSkgICAgICAgICAgICAgfCBMICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTEwgICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTCAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTExMICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgfCB3ICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHd3ICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICAgfCBJICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElJICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICAgfCBkICAgICAgIHwgMSwgMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDMxc3QgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRkICAgICAgfCAwMSwgMDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICAgfCBEICAgICAgIHwgMSwgMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDM2NXRoLCAzNjZ0aCAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREICAgICAgfCAwMSwgMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREQgICAgIHwgMDAxLCAwMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRERERCAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgRGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgICAgICB8IEUuLkVFRSAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFRSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgfCBpICAgICAgIHwgMSwgMiwgMywgLi4uLCA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDd0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpICAgICAgfCAwMSwgMDIsIC4uLiwgMDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWkgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaWkgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgNyAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgIHwgZSAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZSAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWVlICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKHN0YW5kLWFsb25lKSB8IGMgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2MgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjYyAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2MgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjYyAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhLi5hYSAgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhICAgICB8IGFtLCBwbSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWEgICAgfCBhLm0uLCBwLm0uICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhYSAgIHwgYSwgcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgIHwgYi4uYmIgICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYiAgICAgfCBhbSwgcG0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiICAgIHwgYS5tLiwgcC5tLiwgbm9vbiwgbWlkbmlnaHQgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYmIgICB8IGEsIHAsIG4sIG1pICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgICB8IEIuLkJCQiAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCICAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQkIgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgICB8IGggICAgICAgfCAxLCAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBobyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMTJ0aCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaGggICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgICB8IEggICAgICAgfCAwLCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBIbyAgICAgIHwgMHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSEggICAgICB8IDAwLCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgICB8IEsgICAgICAgfCAxLCAyLCAuLi4sIDExLCAwICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMHRoICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS0sgICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgICB8IGsgICAgICAgfCAyNCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrbyAgICAgIHwgMjR0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga2sgICAgICB8IDI0LCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgICB8IG0gICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW0gICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgICB8IHMgICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc3MgICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgICB8IFMgICAgICAgfCAwLCAxLCAuLi4sIDkgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTUyAgICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTICAgICB8IDAwMCwgMDAxLCAuLi4sIDk5OSAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTU1MgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3LyBaKSAgICAgICAgfCBYICAgICAgIHwgLTA4LCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFggICAgICB8IC0wODAwLCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWCAgICAgfCAtMDg6MDAsICswNTozMCwgWiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYICAgIHwgLTA4MDAsICswNTMwLCBaLCArMTIzNDU2ICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWFggICB8IC0wODowMCwgKzA1OjMwLCBaLCArMTI6MzQ6NTYgICAgICB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgICB8IHggICAgICAgfCAtMDgsICswNTMwLCArMDAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eCAgICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4ICAgICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHggICAgfCAtMDgwMCwgKzA1MzAsICswMDAwLCArMTIzNDU2ICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4eCAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCwgKzEyOjM0OjU2IHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgIHwgTy4uLk9PTyB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE9PT08gICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyICAgICB8XG4gKiB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSAgfCB6Li4uenp6IHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgNiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgenp6eiAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIsNiAgIHxcbiAqIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgICB8IHQgICAgICAgfCA1MTI5Njk1MjAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0dCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgIHwgVCAgICAgICB8IDUxMjk2OTUyMDkwMCAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFRUICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICAgfCBQICAgICAgIHwgMDQvMjkvMTQ1MyAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFAgICAgICB8IEFwciAyOSwgMTQ1MyAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUCAgICAgfCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQICAgIHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgIHwgcCAgICAgICB8IDEyOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwICAgICAgfCAxMjowMDowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHAgICAgIHwgMTI6MDA6MDAgQU0gR01UKzIgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwcCAgICB8IDEyOjAwOjAwIEFNIEdNVCswMjowMCAgICAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgQ29tYmluYXRpb24gb2YgZGF0ZSBhbmQgdGltZSAgICB8IFBwICAgICAgfCAwNC8yOS8xNDUzLCAxMjowMCBBTSAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUHBwICAgIHwgQXByIDI5LCAxNDUzLCAxMjowMDowMCBBTSAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQcHBwICB8IEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFBwcHBwfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgfCAyLDcgICB8XG4gKiBOb3RlczpcbiAqIDEuIFwiRm9ybWF0dGluZ1wiIHVuaXRzIChlLmcuIGZvcm1hdHRpbmcgcXVhcnRlcikgaW4gdGhlIGRlZmF1bHQgZW4tVVMgbG9jYWxlXG4gKiAgICBhcmUgdGhlIHNhbWUgYXMgXCJzdGFuZC1hbG9uZVwiIHVuaXRzLCBidXQgYXJlIGRpZmZlcmVudCBpbiBzb21lIGxhbmd1YWdlcy5cbiAqICAgIFwiRm9ybWF0dGluZ1wiIHVuaXRzIGFyZSBkZWNsaW5lZCBhY2NvcmRpbmcgdG8gdGhlIHJ1bGVzIG9mIHRoZSBsYW5ndWFnZVxuICogICAgaW4gdGhlIGNvbnRleHQgb2YgYSBkYXRlLiBcIlN0YW5kLWFsb25lXCIgdW5pdHMgYXJlIGFsd2F5cyBub21pbmF0aXZlIHNpbmd1bGFyOlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTExMTCcsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWQnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTU1NTScsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWR1J2BcbiAqXG4gKiAyLiBBbnkgc2VxdWVuY2Ugb2YgdGhlIGlkZW50aWNhbCBsZXR0ZXJzIGlzIGEgcGF0dGVybiwgdW5sZXNzIGl0IGlzIGVzY2FwZWQgYnlcbiAqICAgIHRoZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyAoc2VlIGJlbG93KS5cbiAqICAgIElmIHRoZSBzZXF1ZW5jZSBpcyBsb25nZXIgdGhhbiBsaXN0ZWQgaW4gdGFibGUgKGUuZy4gYEVFRUVFRUVFRUVFYClcbiAqICAgIHRoZSBvdXRwdXQgd2lsbCBiZSB0aGUgc2FtZSBhcyBkZWZhdWx0IHBhdHRlcm4gZm9yIHRoaXMgdW5pdCwgdXN1YWxseVxuICogICAgdGhlIGxvbmdlc3Qgb25lIChpbiBjYXNlIG9mIElTTyB3ZWVrZGF5cywgYEVFRUVgKS4gRGVmYXVsdCBwYXR0ZXJucyBmb3IgdW5pdHNcbiAqICAgIGFyZSBtYXJrZWQgd2l0aCBcIjJcIiBpbiB0aGUgbGFzdCBjb2x1bW4gb2YgdGhlIHRhYmxlLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NJykgLy89PiAnTm92J2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTScpIC8vPT4gJ04nYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAzLiBTb21lIHBhdHRlcm5zIGNvdWxkIGJlIHVubGltaXRlZCBsZW5ndGggKHN1Y2ggYXMgYHl5eXl5eXl5YCkuXG4gKiAgICBUaGUgb3V0cHV0IHdpbGwgYmUgcGFkZGVkIHdpdGggemVyb3MgdG8gbWF0Y2ggdGhlIGxlbmd0aCBvZiB0aGUgcGF0dGVybi5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ3l5eXl5eXl5JykgLy89PiAnMDAwMDIwMTcnYFxuICpcbiAqIDQuIGBRUVFRUWAgYW5kIGBxcXFxcWAgY291bGQgYmUgbm90IHN0cmljdGx5IG51bWVyaWNhbCBpbiBzb21lIGxvY2FsZXMuXG4gKiAgICBUaGVzZSB0b2tlbnMgcmVwcmVzZW50IHRoZSBzaG9ydGVzdCBmb3JtIG9mIHRoZSBxdWFydGVyLlxuICpcbiAqIDUuIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBwYXR0ZXJucyBhcmUgQi5DLiB5ZWFyczpcbiAqXG4gKiAgICB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICogICAgfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAqICAgIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gKiAgICB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICogICAgfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAqXG4gKiAgICBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gKiAgICB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQ6XG4gKlxuICogICAgfCBZZWFyIHwgYHl5YCB8IGB1dWAgfFxuICogICAgfC0tLS0tLXwtLS0tLS18LS0tLS0tfFxuICogICAgfCAxICAgIHwgICAwMSB8ICAgMDEgfFxuICogICAgfCAxNCAgIHwgICAxNCB8ICAgMTQgfFxuICogICAgfCAzNzYgIHwgICA3NiB8ICAzNzYgfFxuICogICAgfCAxNDUzIHwgICA1MyB8IDE0NTMgfFxuICpcbiAqICAgIFRoZSBzYW1lIGRpZmZlcmVuY2UgaXMgdHJ1ZSBmb3IgbG9jYWwgYW5kIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFycyAoYFlgIGFuZCBgUmApLFxuICogICAgZXhjZXB0IGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJzIGFyZSBkZXBlbmRlbnQgb24gYG9wdGlvbnMud2Vla1N0YXJ0c09uYFxuICogICAgYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKGNvbXBhcmUgW2dldElTT1dlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldElTT1dlZWtZZWFyfVxuICogICAgYW5kIFtnZXRXZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRXZWVrWWVhcn0pLlxuICpcbiAqIDYuIFNwZWNpZmljIG5vbi1sb2NhdGlvbiB0aW1lem9uZXMgYXJlIGN1cnJlbnRseSB1bmF2YWlsYWJsZSBpbiBgZGF0ZS1mbnNgLFxuICogICAgc28gcmlnaHQgbm93IHRoZXNlIHRva2VucyBmYWxsIGJhY2sgdG8gR01UIHRpbWV6b25lcy5cbiAqXG4gKiA3LiBUaGVzZSBwYXR0ZXJucyBhcmUgbm90IGluIHRoZSBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiAgICAtIGBpYDogSVNPIGRheSBvZiB3ZWVrXG4gKiAgICAtIGBJYDogSVNPIHdlZWsgb2YgeWVhclxuICogICAgLSBgUmA6IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiAgICAtIGB0YDogc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYFRgOiBtaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBvYDogb3JkaW5hbCBudW1iZXIgbW9kaWZpZXJcbiAqICAgIC0gYFBgOiBsb25nIGxvY2FsaXplZCBkYXRlXG4gKiAgICAtIGBwYDogbG9uZyBsb2NhbGl6ZWQgdGltZVxuICpcbiAqIDguIGBZWWAgYW5kIGBZWVlZYCB0b2tlbnMgcmVwcmVzZW50IHdlZWstbnVtYmVyaW5nIHllYXJzIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIHllYXJzLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogOS4gYERgIGFuZCBgRERgIHRva2VucyByZXByZXNlbnQgZGF5cyBvZiB0aGUgeWVhciBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCBkYXlzIG9mIHRoZSBtb250aC5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBmb3JtYXQgLSB0aGUgc3RyaW5nIG9mIHRva2Vuc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlPTFdIC0gdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpc1xuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyIHRva2VucyBgWVlgIGFuZCBgWVlZWWA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgZGF5IG9mIHllYXIgdG9rZW5zIGBEYCBhbmQgYEREYDtcbiAqICAgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbG9jYWxpemVgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0TG9uZ2AgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDdcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTEgRmVicnVhcnkgMjAxNCBpbiBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCAxLCAxMSksICdNTS9kZC95eXl5JylcbiAqIC8vPT4gJzAyLzExLzIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAyIEp1bHkgMjAxNCBpbiBFc3BlcmFudG86XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgXCJkbyAnZGUnIE1NTU0geXl5eVwiLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICcyLWEgZGUganVsaW8gMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRXNjYXBlIHN0cmluZyBieSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyczpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxNSksIFwiaCAnbycnY2xvY2snXCIpXG4gKiAvLz0+IFwiMyBvJ2Nsb2NrXCJcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXQoZGlydHlEYXRlLCBkaXJ0eUZvcm1hdFN0ciwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX29wdGlvbnMkbG9jYWxlLCBfcmVmMiwgX3JlZjMsIF9yZWY0LCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZTIsIF9vcHRpb25zJGxvY2FsZTIkb3B0aSwgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLCBfcmVmNSwgX3JlZjYsIF9yZWY3LCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZTMsIF9vcHRpb25zJGxvY2FsZTMkb3B0aSwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMywgX2RlZmF1bHRPcHRpb25zJGxvY2FsNDtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBmb3JtYXRTdHIgPSBTdHJpbmcoZGlydHlGb3JtYXRTdHIpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgbG9jYWxlID0gKF9yZWYgPSAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX29wdGlvbnMkbG9jYWxlICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRsb2NhbGUgOiBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiBkZWZhdWx0TG9jYWxlO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmMiA9IChfcmVmMyA9IChfcmVmNCA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTIgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTIkb3B0aSA9IF9vcHRpb25zJGxvY2FsZTIub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMiRvcHRpID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUyJG9wdGkuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmNCAhPT0gdm9pZCAwID8gX3JlZjQgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IDEpO1xuXG4gIC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmNSA9IChfcmVmNiA9IChfcmVmNyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTMgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTMkb3B0aSA9IF9vcHRpb25zJGxvY2FsZTMub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMyRvcHRpID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUzJG9wdGkud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNyAhPT0gdm9pZCAwID8gX3JlZjcgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY2ICE9PSB2b2lkIDAgPyBfcmVmNiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwzID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsNCA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsNCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsNC53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY1ICE9PSB2b2lkIDAgPyBfcmVmNSA6IDApO1xuXG4gIC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuICBpZiAoIWxvY2FsZS5sb2NhbGl6ZSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGxvY2FsaXplIHByb3BlcnR5Jyk7XG4gIH1cbiAgaWYgKCFsb2NhbGUuZm9ybWF0TG9uZykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGZvcm1hdExvbmcgcHJvcGVydHknKTtcbiAgfVxuICB2YXIgb3JpZ2luYWxEYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGlmICghaXNWYWxpZChvcmlnaW5hbERhdGUpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB9XG5cbiAgLy8gQ29udmVydCB0aGUgZGF0ZSBpbiBzeXN0ZW0gdGltZXpvbmUgdG8gdGhlIHNhbWUgZGF0ZSBpbiBVVEMrMDA6MDAgdGltZXpvbmUuXG4gIC8vIFRoaXMgZW5zdXJlcyB0aGF0IHdoZW4gVVRDIGZ1bmN0aW9ucyB3aWxsIGJlIGltcGxlbWVudGVkLCBsb2NhbGVzIHdpbGwgYmUgY29tcGF0aWJsZSB3aXRoIHRoZW0uXG4gIC8vIFNlZSBhbiBpc3N1ZSBhYm91dCBVVEMgZnVuY3Rpb25zOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuICB2YXIgdGltZXpvbmVPZmZzZXQgPSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSk7XG4gIHZhciB1dGNEYXRlID0gc3ViTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSwgdGltZXpvbmVPZmZzZXQpO1xuICB2YXIgZm9ybWF0dGVyT3B0aW9ucyA9IHtcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSxcbiAgICB3ZWVrU3RhcnRzT246IHdlZWtTdGFydHNPbixcbiAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICBfb3JpZ2luYWxEYXRlOiBvcmlnaW5hbERhdGVcbiAgfTtcbiAgdmFyIHJlc3VsdCA9IGZvcm1hdFN0ci5tYXRjaChsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSAncCcgfHwgZmlyc3RDaGFyYWN0ZXIgPT09ICdQJykge1xuICAgICAgdmFyIGxvbmdGb3JtYXR0ZXIgPSBsb25nRm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG4gICAgICByZXR1cm4gbG9uZ0Zvcm1hdHRlcihzdWJzdHJpbmcsIGxvY2FsZS5mb3JtYXRMb25nKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJykubWF0Y2goZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICAvLyBSZXBsYWNlIHR3byBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyB3aXRoIG9uZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyXG4gICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICByZXR1cm4gXCInXCI7XG4gICAgfVxuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICByZXR1cm4gY2xlYW5Fc2NhcGVkU3RyaW5nKHN1YnN0cmluZyk7XG4gICAgfVxuICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICBpZiAoZm9ybWF0dGVyKSB7XG4gICAgICBpZiAoIShvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VucykgJiYgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBTdHJpbmcoZGlydHlEYXRlKSk7XG4gICAgICB9XG4gICAgICBpZiAoIShvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnMpICYmIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIFN0cmluZyhkaXJ0eURhdGUpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmb3JtYXR0ZXIodXRjRGF0ZSwgc3Vic3RyaW5nLCBsb2NhbGUubG9jYWxpemUsIGZvcm1hdHRlck9wdGlvbnMpO1xuICAgIH1cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIubWF0Y2godW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHApKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignRm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyIGAnICsgZmlyc3RDaGFyYWN0ZXIgKyAnYCcpO1xuICAgIH1cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGNsZWFuRXNjYXBlZFN0cmluZyhpbnB1dCkge1xuICB2YXIgbWF0Y2hlZCA9IGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApO1xuICBpZiAoIW1hdGNoZWQpIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cbiAgcmV0dXJuIG1hdGNoZWRbMV0ucmVwbGFjZShkb3VibGVRdW90ZVJlZ0V4cCwgXCInXCIpO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gdmFsdWUgYSBkYXRlP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLiBUaGUgZnVuY3Rpb24gd29ya3MgZm9yIGRhdGVzIHRyYW5zZmVycmVkIGFjcm9zcyBpZnJhbWVzLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSB0aGUgdmFsdWUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGEgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZSgpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoTmFOKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3Igc29tZSB2YWx1ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSgnMjAxNC0wMi0zMScpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBvYmplY3Q6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoe30pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufSIsImltcG9ydCBpc0RhdGUgZnJvbSBcIi4uL2lzRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1ZhbGlkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHZhbGlkP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBmYWxzZSBpZiBhcmd1bWVudCBpcyBJbnZhbGlkIERhdGUgYW5kIHRydWUgb3RoZXJ3aXNlLlxuICogQXJndW1lbnQgaXMgY29udmVydGVkIHRvIERhdGUgdXNpbmcgYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZX1cbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICpcbiAqIFRpbWUgdmFsdWUgb2YgRGF0ZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS45LjEuMVxuICpcbiAqIEBwYXJhbSB7Kn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdmFsaWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0YWJsZSBpbnRvIGEgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQoMTM5MzgwNDgwMDAwMClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1ZhbGlkKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgaWYgKCFpc0RhdGUoZGlydHlEYXRlKSAmJiB0eXBlb2YgZGlydHlEYXRlICE9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICByZXR1cm4gIWlzTmFOKE51bWJlcihkYXRlKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAvLyBUT0RPOiBSZW1vdmUgU3RyaW5nKClcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgdmFyIGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlJbmRleCwgb3B0aW9ucykge1xuICAgIHZhciBjb250ZXh0ID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiAnc3RhbmRhbG9uZSc7XG4gICAgdmFyIHZhbHVlc0FycmF5O1xuICAgIGlmIChjb250ZXh0ID09PSAnZm9ybWF0dGluZycgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICB2YXIgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9kZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhciBfd2lkdGggPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW193aWR0aF0gfHwgYXJncy52YWx1ZXNbX2RlZmF1bHRXaWR0aF07XG4gICAgfVxuICAgIHZhciBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayhkaXJ0eUluZGV4KSA6IGRpcnR5SW5kZXg7XG4gICAgLy8gQHRzLWlnbm9yZTogRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsZW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdmFyIG1hdGNoUGF0dGVybiA9IHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVBhdHRlcm5zID0gd2lkdGggJiYgYXJncy5wYXJzZVBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG4gICAgdmFyIGtleSA9IEFycmF5LmlzQXJyYXkocGFyc2VQYXR0ZXJucykgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSkgOiBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pO1xuICAgIHZhciB2YWx1ZTtcbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhrZXkpIDoga2V5O1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59XG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkgJiYgcHJlZGljYXRlKG9iamVjdFtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pIDogcGFyc2VSZXN1bHRbMF07XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn0iLCJ2YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBzZWNvbmQnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ2hhbGYgYSBtaW51dGUnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgbWludXRlJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICcxIG1pbnV0ZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIGhvdXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIGhvdXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEgZGF5JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBkYXlzJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ2Fib3V0IDEgd2VlaycsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEgd2VlaycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ2Fib3V0IDEgbW9udGgnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbW9udGgnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIHllYXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIHllYXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnb3ZlciAxIHllYXInLFxuICAgIG90aGVyOiAnb3ZlciB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ2FsbW9zdCAxIHllYXInLFxuICAgIG90aGVyOiAnYWxtb3N0IHt7Y291bnR9fSB5ZWFycydcbiAgfVxufTtcbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIGNvdW50LnRvU3RyaW5nKCkpO1xuICB9XG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICdpbiAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyBhZ28nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdERpc3RhbmNlOyIsImltcG9ydCBidWlsZEZvcm1hdExvbmdGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qc1wiO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiAnRUVFRSwgTU1NTSBkbywgeScsXG4gIGxvbmc6ICdNTU1NIGRvLCB5JyxcbiAgbWVkaXVtOiAnTU1NIGQsIHknLFxuICBzaG9ydDogJ01NL2RkL3l5eXknXG59O1xudmFyIHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAnaDptbTpzcyBhIHp6enonLFxuICBsb25nOiAnaDptbTpzcyBhIHonLFxuICBtZWRpdW06ICdoOm1tOnNzIGEnLFxuICBzaG9ydDogJ2g6bW0gYSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogJ3t7ZGF0ZX19LCB7e3RpbWV9fScsXG4gIHNob3J0OiAne3tkYXRlfX0sIHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRMb25nOyIsInZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6ICdQJ1xufTtcbnZhciBmb3JtYXRSZWxhdGl2ZSA9IGZ1bmN0aW9uIGZvcm1hdFJlbGF0aXZlKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xuICByZXR1cm4gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdFJlbGF0aXZlOyIsImltcG9ydCBidWlsZExvY2FsaXplRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCI7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnQicsICdBJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0JDJywgJ0FEJ10sXG4gIHdpZGU6IFsnQmVmb3JlIENocmlzdCcsICdBbm5vIERvbWluaSddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXG4gIHdpZGU6IFsnMXN0IHF1YXJ0ZXInLCAnMm5kIHF1YXJ0ZXInLCAnM3JkIHF1YXJ0ZXInLCAnNHRoIHF1YXJ0ZXInXVxufTtcblxuLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbiAgd2lkZTogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddLFxuICBzaG9ydDogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddLFxuICBhYmJyZXZpYXRlZDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgd2lkZTogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfVxufTtcbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gb3JkaW5hbE51bWJlcihkaXJ0eU51bWJlciwgX29wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgLy8gSWYgb3JkaW5hbCBudW1iZXJzIGRlcGVuZCBvbiBjb250ZXh0LCBmb3IgZXhhbXBsZSxcbiAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50IGZvciBkaWZmZXJlbnQgZ3JhbW1hdGljYWwgZ2VuZGVycyxcbiAgLy8gdXNlIGBvcHRpb25zLnVuaXRgLlxuICAvL1xuICAvLyBgdW5pdGAgY2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXRlJywgJ2RheU9mWWVhcicsXG4gIC8vICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJy5cblxuICB2YXIgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnc3QnO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ25kJztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdyZCc7XG4gICAgfVxuICB9XG4gIHJldHVybiBudW1iZXIgKyAndGgnO1xufTtcbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsaXplOyIsImltcG9ydCBidWlsZE1hdGNoRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzXCI7XG5pbXBvcnQgYnVpbGRNYXRjaFBhdHRlcm5GbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzXCI7XG52YXIgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2lcbn07XG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV1cbn07XG52YXIgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XSh0aHxzdHxuZHxyZCk/IHF1YXJ0ZXIvaVxufTtcbnZhciBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV1cbn07XG52YXIgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW2pmbWFzb25kXS9pLFxuICBhYmJyZXZpYXRlZDogL14oamFufGZlYnxtYXJ8YXByfG1heXxqdW58anVsfGF1Z3xzZXB8b2N0fG5vdnxkZWMpL2ksXG4gIHdpZGU6IC9eKGphbnVhcnl8ZmVicnVhcnl8bWFyY2h8YXByaWx8bWF5fGp1bmV8anVseXxhdWd1c3R8c2VwdGVtYmVyfG9jdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2lcbn07XG52YXIgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXmovaSwgL15mL2ksIC9ebS9pLCAvXmEvaSwgL15tL2ksIC9eai9pLCAvXmovaSwgL15hL2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXSxcbiAgYW55OiBbL15qYS9pLCAvXmYvaSwgL15tYXIvaSwgL15hcC9pLCAvXm1heS9pLCAvXmp1bi9pLCAvXmp1bC9pLCAvXmF1L2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXVxufTtcbnZhciBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxuICBzaG9ydDogL14oc3V8bW98dHV8d2V8dGh8ZnJ8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQpL2ksXG4gIHdpZGU6IC9eKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KS9pXG59O1xudmFyIHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXVxufTtcbnZhciBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGF8cHxtaXxufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbiAgYW55OiAvXihbYXBdXFwuP1xccz9tXFwuP3xtaWRuaWdodHxub29ufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaVxufTtcbnZhciBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL15hL2ksXG4gICAgcG06IC9ecC9pLFxuICAgIG1pZG5pZ2h0OiAvXm1pL2ksXG4gICAgbm9vbjogL15uby9pLFxuICAgIG1vcm5pbmc6IC9tb3JuaW5nL2ksXG4gICAgYWZ0ZXJub29uOiAvYWZ0ZXJub29uL2ksXG4gICAgZXZlbmluZzogL2V2ZW5pbmcvaSxcbiAgICBuaWdodDogL25pZ2h0L2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogYnVpbGRNYXRjaFBhdHRlcm5Gbih7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH0pLFxuICBlcmE6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2soaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbWF0Y2g7IiwiaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRMb25nIGZyb20gXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdFJlbGF0aXZlIGZyb20gXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIjtcbmltcG9ydCBsb2NhbGl6ZSBmcm9tIFwiLi9fbGliL2xvY2FsaXplL2luZGV4LmpzXCI7XG5pbXBvcnQgbWF0Y2ggZnJvbSBcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiO1xuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICogQGF1dGhvciBTYXNoYSBLb3NzIFtAa29zc25vY29ycF17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2tvc3Nub2NvcnB9XG4gKiBAYXV0aG9yIExlc2hhIEtvc3MgW0BsZXNoYWtvc3Nde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9sZXNoYWtvc3N9XG4gKi9cbnZhciBsb2NhbGUgPSB7XG4gIGNvZGU6ICdlbi1VUycsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMCAvKiBTdW5kYXkgKi8sXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxXG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7IiwiaW1wb3J0IGFkZE1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3ViTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIHN1YnRyYWN0ZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIHN1YnRyYWN0ZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3VidHJhY3QgNzUwIG1pbGxpc2Vjb25kcyBmcm9tIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdWJNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NToyOS4yNTBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ViTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgLWFtb3VudCk7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiLyohXG4gKiBJbnRyby5qcyB2Ny4yLjBcbiAqIGh0dHBzOi8vaW50cm9qcy5jb21cbiAqXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTItMjAyMyBBZnNoaW4gTWVocmFiYW5pIChAYWZzaGlubWVoKS5cbiAqIGh0dHBzOi8vaW50cm9qcy5jb21cbiAqXG4gKiBEYXRlOiBNb24sIDE0IEF1ZyAyMDIzIDE5OjQ3OjE0IEdNVFxuICovXG5mdW5jdGlvbiB0KGUpe3JldHVybiB0PVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbih0KXtyZXR1cm4gdHlwZW9mIHR9OmZ1bmN0aW9uKHQpe3JldHVybiB0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJnQuY29uc3RydWN0b3I9PT1TeW1ib2wmJnQhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIHR9LHQoZSl9ZnVuY3Rpb24gZSh0LGUsbixvKXtyZXR1cm4gbmV3KG58fChuPVByb21pc2UpKSgoZnVuY3Rpb24oaSxyKXtmdW5jdGlvbiBzKHQpe3RyeXtsKG8ubmV4dCh0KSl9Y2F0Y2godCl7cih0KX19ZnVuY3Rpb24gYSh0KXt0cnl7bChvLnRocm93KHQpKX1jYXRjaCh0KXtyKHQpfX1mdW5jdGlvbiBsKHQpe3ZhciBlO3QuZG9uZT9pKHQudmFsdWUpOihlPXQudmFsdWUsZSBpbnN0YW5jZW9mIG4/ZTpuZXcgbigoZnVuY3Rpb24odCl7dChlKX0pKSkudGhlbihzLGEpfWwoKG89by5hcHBseSh0LGV8fFtdKSkubmV4dCgpKX0pKX1mdW5jdGlvbiBuKHQsZSl7dmFyIG4sbyxpLHIscz17bGFiZWw6MCxzZW50OmZ1bmN0aW9uKCl7aWYoMSZpWzBdKXRocm93IGlbMV07cmV0dXJuIGlbMV19LHRyeXM6W10sb3BzOltdfTtyZXR1cm4gcj17bmV4dDphKDApLHRocm93OmEoMSkscmV0dXJuOmEoMil9LFwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmKHJbU3ltYm9sLml0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfSkscjtmdW5jdGlvbiBhKGEpe3JldHVybiBmdW5jdGlvbihsKXtyZXR1cm4gZnVuY3Rpb24oYSl7aWYobil0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtmb3IoO3ImJihyPTAsYVswXSYmKHM9MCkpLHM7KXRyeXtpZihuPTEsbyYmKGk9MiZhWzBdP28ucmV0dXJuOmFbMF0/by50aHJvd3x8KChpPW8ucmV0dXJuKSYmaS5jYWxsKG8pLDApOm8ubmV4dCkmJiEoaT1pLmNhbGwobyxhWzFdKSkuZG9uZSlyZXR1cm4gaTtzd2l0Y2gobz0wLGkmJihhPVsyJmFbMF0saS52YWx1ZV0pLGFbMF0pe2Nhc2UgMDpjYXNlIDE6aT1hO2JyZWFrO2Nhc2UgNDpyZXR1cm4gcy5sYWJlbCsrLHt2YWx1ZTphWzFdLGRvbmU6ITF9O2Nhc2UgNTpzLmxhYmVsKyssbz1hWzFdLGE9WzBdO2NvbnRpbnVlO2Nhc2UgNzphPXMub3BzLnBvcCgpLHMudHJ5cy5wb3AoKTtjb250aW51ZTtkZWZhdWx0OmlmKCEoaT1zLnRyeXMsKGk9aS5sZW5ndGg+MCYmaVtpLmxlbmd0aC0xXSl8fDYhPT1hWzBdJiYyIT09YVswXSkpe3M9MDtjb250aW51ZX1pZigzPT09YVswXSYmKCFpfHxhWzFdPmlbMF0mJmFbMV08aVszXSkpe3MubGFiZWw9YVsxXTticmVha31pZig2PT09YVswXSYmcy5sYWJlbDxpWzFdKXtzLmxhYmVsPWlbMV0saT1hO2JyZWFrfWlmKGkmJnMubGFiZWw8aVsyXSl7cy5sYWJlbD1pWzJdLHMub3BzLnB1c2goYSk7YnJlYWt9aVsyXSYmcy5vcHMucG9wKCkscy50cnlzLnBvcCgpO2NvbnRpbnVlfWE9ZS5jYWxsKHQscyl9Y2F0Y2godCl7YT1bNix0XSxvPTB9ZmluYWxseXtuPWk9MH1pZig1JmFbMF0pdGhyb3cgYVsxXTtyZXR1cm57dmFsdWU6YVswXT9hWzFdOnZvaWQgMCxkb25lOiEwfX0oW2EsbF0pfX19ZnVuY3Rpb24gbyh0LGUsbil7dmFyIG8scj0oKG89e30pW3RdPWUsby5wYXRoPVwiL1wiLG8uZXhwaXJlcz12b2lkIDAsbyk7aWYobil7dmFyIHM9bmV3IERhdGU7cy5zZXRUaW1lKHMuZ2V0VGltZSgpKzI0Km4qNjAqNjAqMWUzKSxyLmV4cGlyZXM9cy50b1VUQ1N0cmluZygpfXZhciBhPVtdO2Zvcih2YXIgbCBpbiByKWEucHVzaChcIlwiLmNvbmNhdChsLFwiPVwiKS5jb25jYXQocltsXSkpO3JldHVybiBkb2N1bWVudC5jb29raWU9YS5qb2luKFwiOyBcIiksaSh0KX1mdW5jdGlvbiBpKHQpe3JldHVybihlPXt9LGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIikuZm9yRWFjaCgoZnVuY3Rpb24odCl7dmFyIG49dC5zcGxpdChcIj1cIiksbz1uWzBdLGk9blsxXTtlW28udHJpbSgpXT1pfSkpLGUpW3RdO3ZhciBlfVwiZnVuY3Rpb25cIj09dHlwZW9mIFN1cHByZXNzZWRFcnJvciYmU3VwcHJlc3NlZEVycm9yO2Z1bmN0aW9uIHIodCxlKXtlP28odC5fb3B0aW9ucy5kb250U2hvd0FnYWluQ29va2llLFwidHJ1ZVwiLHQuX29wdGlvbnMuZG9udFNob3dBZ2FpbkNvb2tpZURheXMpOm8odC5fb3B0aW9ucy5kb250U2hvd0FnYWluQ29va2llLFwiXCIsLTEpfXZhciBzLGE9KHM9e30sZnVuY3Rpb24odCxlKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9XCJpbnRyb2pzLXN0YW1wXCIpLHNbZV09c1tlXXx8MCx2b2lkIDA9PT10W2VdJiYodFtlXT1zW2VdKyspLHRbZV19KSxsPW5ldyhmdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXt0aGlzLmV2ZW50c19rZXk9XCJpbnRyb2pzX2V2ZW50XCJ9cmV0dXJuIHQucHJvdG90eXBlLl9pZD1mdW5jdGlvbih0LGUsbil7cmV0dXJuIHQrYShlKSsobj9cIl9cIi5jb25jYXQoYShuKSk6XCJcIil9LHQucHJvdG90eXBlLm9uPWZ1bmN0aW9uKHQsZSxuLG8saSl7dmFyIHI9dGhpcy5faWQoZSxuLG8pLHM9ZnVuY3Rpb24oZSl7cmV0dXJuIG4ob3x8dCxlfHx3aW5kb3cuZXZlbnQpfTtcImFkZEV2ZW50TGlzdGVuZXJcImluIHQ/dC5hZGRFdmVudExpc3RlbmVyKGUscyxpKTpcImF0dGFjaEV2ZW50XCJpbiB0JiZ0LmF0dGFjaEV2ZW50KFwib25cIi5jb25jYXQoZSkscyksdFt0aGlzLmV2ZW50c19rZXldPXRbdGhpcy5ldmVudHNfa2V5XXx8e30sdFt0aGlzLmV2ZW50c19rZXldW3JdPXN9LHQucHJvdG90eXBlLm9mZj1mdW5jdGlvbih0LGUsbixvLGkpe3ZhciByPXRoaXMuX2lkKGUsbixvKSxzPXRbdGhpcy5ldmVudHNfa2V5XSYmdFt0aGlzLmV2ZW50c19rZXldW3JdO3MmJihcInJlbW92ZUV2ZW50TGlzdGVuZXJcImluIHQ/dC5yZW1vdmVFdmVudExpc3RlbmVyKGUscyxpKTpcImRldGFjaEV2ZW50XCJpbiB0JiZ0LmRldGFjaEV2ZW50KFwib25cIi5jb25jYXQoZSkscyksdFt0aGlzLmV2ZW50c19rZXldW3JdPW51bGwpfSx0fSgpKSxjPWZ1bmN0aW9uKHQpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHR9O2Z1bmN0aW9uIHUodCxlKXtpZih0IGluc3RhbmNlb2YgU1ZHRWxlbWVudCl7dmFyIG49dC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIjtuLm1hdGNoKGUpfHx0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJcIi5jb25jYXQobixcIiBcIikuY29uY2F0KGUpKX1lbHNlIGlmKHZvaWQgMCE9PXQuY2xhc3NMaXN0KWZvcih2YXIgbz0wLGk9ZS5zcGxpdChcIiBcIik7bzxpLmxlbmd0aDtvKyspe3ZhciByPWlbb107dC5jbGFzc0xpc3QuYWRkKHIpfWVsc2UgdC5jbGFzc05hbWUubWF0Y2goZSl8fCh0LmNsYXNzTmFtZSs9XCIgXCIuY29uY2F0KGUpKX1mdW5jdGlvbiBwKHQsZSl7dmFyIG49XCJcIjtyZXR1cm5cImN1cnJlbnRTdHlsZVwiaW4gdD9uPXQuY3VycmVudFN0eWxlW2VdOmRvY3VtZW50LmRlZmF1bHRWaWV3JiZkb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlJiYobj1kb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKHQsbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShlKSksbiYmbi50b0xvd2VyQ2FzZT9uLnRvTG93ZXJDYXNlKCk6bn1mdW5jdGlvbiBoKHQsZSl7aWYodCl7dmFyIG49ZnVuY3Rpb24odCl7dmFyIGU9d2luZG93LmdldENvbXB1dGVkU3R5bGUodCksbj1cImFic29sdXRlXCI9PT1lLnBvc2l0aW9uLG89LyhhdXRvfHNjcm9sbCkvO2lmKFwiZml4ZWRcIj09PWUucG9zaXRpb24pcmV0dXJuIGRvY3VtZW50LmJvZHk7Zm9yKHZhciBpPXQ7aT1pLnBhcmVudEVsZW1lbnQ7KWlmKGU9d2luZG93LmdldENvbXB1dGVkU3R5bGUoaSksKCFufHxcInN0YXRpY1wiIT09ZS5wb3NpdGlvbikmJm8udGVzdChlLm92ZXJmbG93K2Uub3ZlcmZsb3dZK2Uub3ZlcmZsb3dYKSlyZXR1cm4gaTtyZXR1cm4gZG9jdW1lbnQuYm9keX0oZSk7biE9PWRvY3VtZW50LmJvZHkmJihuLnNjcm9sbFRvcD1lLm9mZnNldFRvcC1uLm9mZnNldFRvcCl9fWZ1bmN0aW9uIGQoKXtpZih2b2lkIDAhPT13aW5kb3cuaW5uZXJXaWR0aClyZXR1cm57d2lkdGg6d2luZG93LmlubmVyV2lkdGgsaGVpZ2h0OndpbmRvdy5pbm5lckhlaWdodH07dmFyIHQ9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O3JldHVybnt3aWR0aDp0LmNsaWVudFdpZHRoLGhlaWdodDp0LmNsaWVudEhlaWdodH19ZnVuY3Rpb24gZih0LGUsbixvLGkpe3ZhciByO2lmKFwib2ZmXCIhPT1lJiYodCYmKHI9XCJ0b29sdGlwXCI9PT1lP2kuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk6by5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwhZnVuY3Rpb24odCl7dmFyIGU9dC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtyZXR1cm4gZS50b3A+PTAmJmUubGVmdD49MCYmZS5ib3R0b20rODA8PXdpbmRvdy5pbm5lckhlaWdodCYmZS5yaWdodDw9d2luZG93LmlubmVyV2lkdGh9KG8pKSkpe3ZhciBzPWQoKS5oZWlnaHQ7ci5ib3R0b20tKHIuYm90dG9tLXIudG9wKTwwfHxvLmNsaWVudEhlaWdodD5zP3dpbmRvdy5zY3JvbGxCeSgwLHIudG9wLShzLzItci5oZWlnaHQvMiktbik6d2luZG93LnNjcm9sbEJ5KDAsci50b3AtKHMvMi1yLmhlaWdodC8yKStuKX19ZnVuY3Rpb24gYih0KXt0LnNldEF0dHJpYnV0ZShcInJvbGVcIixcImJ1dHRvblwiKSx0LnRhYkluZGV4PTB9ZnVuY3Rpb24gbSh0KXt2YXIgZT10LnBhcmVudEVsZW1lbnQ7cmV0dXJuISghZXx8XCJIVE1MXCI9PT1lLm5vZGVOYW1lKSYmKFwiZml4ZWRcIj09PXAodCxcInBvc2l0aW9uXCIpfHxtKGUpKX1mdW5jdGlvbiBnKHQsZSl7dmFyIG49ZG9jdW1lbnQuYm9keSxvPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxpPXdpbmRvdy5wYWdlWU9mZnNldHx8by5zY3JvbGxUb3B8fG4uc2Nyb2xsVG9wLHI9d2luZG93LnBhZ2VYT2Zmc2V0fHxvLnNjcm9sbExlZnR8fG4uc2Nyb2xsTGVmdDtlPWV8fG47dmFyIHM9dC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxhPWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksbD1wKGUsXCJwb3NpdGlvblwiKSxjPXt3aWR0aDpzLndpZHRoLGhlaWdodDpzLmhlaWdodH07cmV0dXJuXCJib2R5XCIhPT1lLnRhZ05hbWUudG9Mb3dlckNhc2UoKSYmXCJyZWxhdGl2ZVwiPT09bHx8XCJzdGlja3lcIj09PWw/T2JqZWN0LmFzc2lnbihjLHt0b3A6cy50b3AtYS50b3AsbGVmdDpzLmxlZnQtYS5sZWZ0fSk6bSh0KT9PYmplY3QuYXNzaWduKGMse3RvcDpzLnRvcCxsZWZ0OnMubGVmdH0pOk9iamVjdC5hc3NpZ24oYyx7dG9wOnMudG9wK2ksbGVmdDpzLmxlZnQrcn0pfWZ1bmN0aW9uIHYodCxlKXtpZih0IGluc3RhbmNlb2YgU1ZHRWxlbWVudCl7dmFyIG49dC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIjt0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsbi5yZXBsYWNlKGUsXCJcIikucmVwbGFjZSgvXlxccyt8XFxzKyQvZyxcIlwiKSl9ZWxzZSB0LmNsYXNzTmFtZT10LmNsYXNzTmFtZS5yZXBsYWNlKGUsXCJcIikucmVwbGFjZSgvXlxccyt8XFxzKyQvZyxcIlwiKX1mdW5jdGlvbiB5KHQsZSl7dmFyIG49XCJcIjtpZih0LnN0eWxlLmNzc1RleHQmJihuKz10LnN0eWxlLmNzc1RleHQpLFwic3RyaW5nXCI9PXR5cGVvZiBlKW4rPWU7ZWxzZSBmb3IodmFyIG8gaW4gZSluKz1cIlwiLmNvbmNhdChvLFwiOlwiKS5jb25jYXQoZVtvXSxcIjtcIik7dC5zdHlsZS5jc3NUZXh0PW59ZnVuY3Rpb24gdyh0LGUsbil7aWYobiYmZSl7dmFyIG89ZyhlLmVsZW1lbnQsdC5fdGFyZ2V0RWxlbWVudCksaT10Ll9vcHRpb25zLmhlbHBlckVsZW1lbnRQYWRkaW5nO2UuZWxlbWVudCBpbnN0YW5jZW9mIEVsZW1lbnQmJm0oZS5lbGVtZW50KT91KG4sXCJpbnRyb2pzLWZpeGVkVG9vbHRpcFwiKTp2KG4sXCJpbnRyb2pzLWZpeGVkVG9vbHRpcFwiKSxcImZsb2F0aW5nXCI9PT1lLnBvc2l0aW9uJiYoaT0wKSx5KG4se3dpZHRoOlwiXCIuY29uY2F0KG8ud2lkdGgraSxcInB4XCIpLGhlaWdodDpcIlwiLmNvbmNhdChvLmhlaWdodCtpLFwicHhcIiksdG9wOlwiXCIuY29uY2F0KG8udG9wLWkvMixcInB4XCIpLGxlZnQ6XCJcIi5jb25jYXQoby5sZWZ0LWkvMixcInB4XCIpfSl9fWZ1bmN0aW9uIF8odCxlLG4sbyxpKXtyZXR1cm4gdC5sZWZ0K2Urbi53aWR0aD5vLndpZHRoPyhpLnN0eWxlLmxlZnQ9XCJcIi5jb25jYXQoby53aWR0aC1uLndpZHRoLXQubGVmdCxcInB4XCIpLCExKTooaS5zdHlsZS5sZWZ0PVwiXCIuY29uY2F0KGUsXCJweFwiKSwhMCl9ZnVuY3Rpb24gQyh0LGUsbixvKXtyZXR1cm4gdC5sZWZ0K3Qud2lkdGgtZS1uLndpZHRoPDA/KG8uc3R5bGUubGVmdD1cIlwiLmNvbmNhdCgtdC5sZWZ0LFwicHhcIiksITEpOihvLnN0eWxlLnJpZ2h0PVwiXCIuY29uY2F0KGUsXCJweFwiKSwhMCl9ZnVuY3Rpb24gUyh0LGUpe3QuaW5jbHVkZXMoZSkmJnQuc3BsaWNlKHQuaW5kZXhPZihlKSwxKX1mdW5jdGlvbiBrKHQsZSxuLG8pe3ZhciBpPXQuc2xpY2UoKSxyPWQoKSxzPWcobikuaGVpZ2h0KzEwLGE9ZyhuKS53aWR0aCsyMCxsPWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksYz1cImZsb2F0aW5nXCI7aWYobC5ib3R0b20rcz5yLmhlaWdodCYmUyhpLFwiYm90dG9tXCIpLGwudG9wLXM8MCYmUyhpLFwidG9wXCIpLGwucmlnaHQrYT5yLndpZHRoJiZTKGksXCJyaWdodFwiKSxsLmxlZnQtYTwwJiZTKGksXCJsZWZ0XCIpLG8mJihvPW8uc3BsaXQoXCItXCIpWzBdKSxpLmxlbmd0aCYmKGM9aVswXSxpLmluY2x1ZGVzKG8pJiYoYz1vKSksXCJ0b3BcIj09PWN8fFwiYm90dG9tXCI9PT1jKXt2YXIgdT12b2lkIDAscD1bXTtcInRvcFwiPT09Yz8odT1cInRvcC1taWRkbGUtYWxpZ25lZFwiLHA9W1widG9wLWxlZnQtYWxpZ25lZFwiLFwidG9wLW1pZGRsZS1hbGlnbmVkXCIsXCJ0b3AtcmlnaHQtYWxpZ25lZFwiXSk6KHU9XCJib3R0b20tbWlkZGxlLWFsaWduZWRcIixwPVtcImJvdHRvbS1sZWZ0LWFsaWduZWRcIixcImJvdHRvbS1taWRkbGUtYWxpZ25lZFwiLFwiYm90dG9tLXJpZ2h0LWFsaWduZWRcIl0pLGM9ZnVuY3Rpb24odCxlLG4sbyl7dmFyIGk9ZS8yLHI9TWF0aC5taW4obix3aW5kb3cuc2NyZWVuLndpZHRoKTtyZXR1cm4gci10PGUmJihTKG8sXCJ0b3AtbGVmdC1hbGlnbmVkXCIpLFMobyxcImJvdHRvbS1sZWZ0LWFsaWduZWRcIikpLCh0PGl8fHItdDxpKSYmKFMobyxcInRvcC1taWRkbGUtYWxpZ25lZFwiKSxTKG8sXCJib3R0b20tbWlkZGxlLWFsaWduZWRcIikpLHQ8ZSYmKFMobyxcInRvcC1yaWdodC1hbGlnbmVkXCIpLFMobyxcImJvdHRvbS1yaWdodC1hbGlnbmVkXCIpKSxvLmxlbmd0aD9vWzBdOm51bGx9KGwubGVmdCxhLHIud2lkdGgscCl8fHV9cmV0dXJuIGN9ZnVuY3Rpb24gaih0LGUsbixvLGkpe2lmKHZvaWQgMD09PWkmJihpPSExKSxlKXt2YXIgcixzLGEsbCxjPVwiXCI7bi5zdHlsZS50b3A9XCJcIixuLnN0eWxlLnJpZ2h0PVwiXCIsbi5zdHlsZS5ib3R0b209XCJcIixuLnN0eWxlLmxlZnQ9XCJcIixuLnN0eWxlLm1hcmdpbkxlZnQ9XCJcIixuLnN0eWxlLm1hcmdpblRvcD1cIlwiLG8uc3R5bGUuZGlzcGxheT1cImluaGVyaXRcIixjPVwic3RyaW5nXCI9PXR5cGVvZiBlLnRvb2x0aXBDbGFzcz9lLnRvb2x0aXBDbGFzczp0Ll9vcHRpb25zLnRvb2x0aXBDbGFzcyxuLmNsYXNzTmFtZT1bXCJpbnRyb2pzLXRvb2x0aXBcIixjXS5maWx0ZXIoQm9vbGVhbikuam9pbihcIiBcIiksbi5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsXCJkaWFsb2dcIiksXCJmbG9hdGluZ1wiIT09KGw9ZS5wb3NpdGlvbikmJnQuX29wdGlvbnMuYXV0b1Bvc2l0aW9uJiYobD1rKHQuX29wdGlvbnMucG9zaXRpb25QcmVjZWRlbmNlLGUuZWxlbWVudCxuLGwpKSxzPWcoZS5lbGVtZW50KSxyPWcobiksYT1kKCksdShuLFwiaW50cm9qcy1cIi5jb25jYXQobCkpO3ZhciBwPXMud2lkdGgvMi1yLndpZHRoLzI7c3dpdGNoKGwpe2Nhc2VcInRvcC1yaWdodC1hbGlnbmVkXCI6by5jbGFzc05hbWU9XCJpbnRyb2pzLWFycm93IGJvdHRvbS1yaWdodFwiO3ZhciBoPTA7QyhzLGgscixuKSxuLnN0eWxlLmJvdHRvbT1cIlwiLmNvbmNhdChzLmhlaWdodCsyMCxcInB4XCIpO2JyZWFrO2Nhc2VcInRvcC1taWRkbGUtYWxpZ25lZFwiOm8uY2xhc3NOYW1lPVwiaW50cm9qcy1hcnJvdyBib3R0b20tbWlkZGxlXCIsaSYmKHArPTUpLEMocyxwLHIsbikmJihuLnN0eWxlLnJpZ2h0PVwiXCIsXyhzLHAscixhLG4pKSxuLnN0eWxlLmJvdHRvbT1cIlwiLmNvbmNhdChzLmhlaWdodCsyMCxcInB4XCIpO2JyZWFrO2Nhc2VcInRvcC1sZWZ0LWFsaWduZWRcIjpjYXNlXCJ0b3BcIjpvLmNsYXNzTmFtZT1cImludHJvanMtYXJyb3cgYm90dG9tXCIsXyhzLGk/MDoxNSxyLGEsbiksbi5zdHlsZS5ib3R0b209XCJcIi5jb25jYXQocy5oZWlnaHQrMjAsXCJweFwiKTticmVhaztjYXNlXCJyaWdodFwiOm4uc3R5bGUubGVmdD1cIlwiLmNvbmNhdChzLndpZHRoKzIwLFwicHhcIikscy50b3Arci5oZWlnaHQ+YS5oZWlnaHQ/KG8uY2xhc3NOYW1lPVwiaW50cm9qcy1hcnJvdyBsZWZ0LWJvdHRvbVwiLG4uc3R5bGUudG9wPVwiLVwiLmNvbmNhdChyLmhlaWdodC1zLmhlaWdodC0yMCxcInB4XCIpKTpvLmNsYXNzTmFtZT1cImludHJvanMtYXJyb3cgbGVmdFwiO2JyZWFrO2Nhc2VcImxlZnRcIjppfHwhMCE9PXQuX29wdGlvbnMuc2hvd1N0ZXBOdW1iZXJzfHwobi5zdHlsZS50b3A9XCIxNXB4XCIpLHMudG9wK3IuaGVpZ2h0PmEuaGVpZ2h0PyhuLnN0eWxlLnRvcD1cIi1cIi5jb25jYXQoci5oZWlnaHQtcy5oZWlnaHQtMjAsXCJweFwiKSxvLmNsYXNzTmFtZT1cImludHJvanMtYXJyb3cgcmlnaHQtYm90dG9tXCIpOm8uY2xhc3NOYW1lPVwiaW50cm9qcy1hcnJvdyByaWdodFwiLG4uc3R5bGUucmlnaHQ9XCJcIi5jb25jYXQocy53aWR0aCsyMCxcInB4XCIpO2JyZWFrO2Nhc2VcImZsb2F0aW5nXCI6by5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLG4uc3R5bGUubGVmdD1cIjUwJVwiLG4uc3R5bGUudG9wPVwiNTAlXCIsbi5zdHlsZS5tYXJnaW5MZWZ0PVwiLVwiLmNvbmNhdChyLndpZHRoLzIsXCJweFwiKSxuLnN0eWxlLm1hcmdpblRvcD1cIi1cIi5jb25jYXQoci5oZWlnaHQvMixcInB4XCIpO2JyZWFrO2Nhc2VcImJvdHRvbS1yaWdodC1hbGlnbmVkXCI6by5jbGFzc05hbWU9XCJpbnRyb2pzLWFycm93IHRvcC1yaWdodFwiLEMocyxoPTAscixuKSxuLnN0eWxlLnRvcD1cIlwiLmNvbmNhdChzLmhlaWdodCsyMCxcInB4XCIpO2JyZWFrO2Nhc2VcImJvdHRvbS1taWRkbGUtYWxpZ25lZFwiOm8uY2xhc3NOYW1lPVwiaW50cm9qcy1hcnJvdyB0b3AtbWlkZGxlXCIsaSYmKHArPTUpLEMocyxwLHIsbikmJihuLnN0eWxlLnJpZ2h0PVwiXCIsXyhzLHAscixhLG4pKSxuLnN0eWxlLnRvcD1cIlwiLmNvbmNhdChzLmhlaWdodCsyMCxcInB4XCIpO2JyZWFrO2RlZmF1bHQ6by5jbGFzc05hbWU9XCJpbnRyb2pzLWFycm93IHRvcFwiLF8ocywwLHIsYSxuKSxuLnN0eWxlLnRvcD1cIlwiLmNvbmNhdChzLmhlaWdodCsyMCxcInB4XCIpfX19ZnVuY3Rpb24gQSgpe2Zvcih2YXIgdD0wLGU9QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmludHJvanMtc2hvd0VsZW1lbnRcIikpO3Q8ZS5sZW5ndGg7dCsrKXt2KGVbdF0sL2ludHJvanMtW2EtekEtWl0rL2cpfX1mdW5jdGlvbiB4KHQsZSl7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0KTtlPWV8fHt9O3ZhciBvPS9eKD86cm9sZXxkYXRhLXxhcmlhLSkvO2Zvcih2YXIgaSBpbiBlKXt2YXIgcj1lW2ldO1wic3R5bGVcIj09PWkmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHI/eShuLHIpOlwic3RyaW5nXCI9PXR5cGVvZiByJiZpLm1hdGNoKG8pP24uc2V0QXR0cmlidXRlKGkscik6bltpXT1yfXJldHVybiBufWZ1bmN0aW9uIE4odCxlLG4pe2lmKHZvaWQgMD09PW4mJihuPSExKSxuKXt2YXIgbz1lLnN0eWxlLm9wYWNpdHl8fFwiMVwiO3koZSx7b3BhY2l0eTpcIjBcIn0pLHdpbmRvdy5zZXRUaW1lb3V0KChmdW5jdGlvbigpe3koZSx7b3BhY2l0eTpvfSl9KSwxMCl9dC5hcHBlbmRDaGlsZChlKX1mdW5jdGlvbiBFKHQsZSl7cmV0dXJuKHQrMSkvZSoxMDB9ZnVuY3Rpb24gVCh0LGUpe3ZhciBuPXgoXCJkaXZcIix7Y2xhc3NOYW1lOlwiaW50cm9qcy1idWxsZXRzXCJ9KTshMT09PXQuX29wdGlvbnMuc2hvd0J1bGxldHMmJihuLnN0eWxlLmRpc3BsYXk9XCJub25lXCIpO3ZhciBvPXgoXCJ1bFwiKTtvLnNldEF0dHJpYnV0ZShcInJvbGVcIixcInRhYmxpc3RcIik7Zm9yKHZhciBpPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN0ZXAtbnVtYmVyXCIpO251bGwhPWUmJnQuZ29Ub1N0ZXAocGFyc2VJbnQoZSwxMCkpfSxyPTA7cjx0Ll9pbnRyb0l0ZW1zLmxlbmd0aDtyKyspe3ZhciBzPXQuX2ludHJvSXRlbXNbcl0uc3RlcCxhPXgoXCJsaVwiKSxsPXgoXCJhXCIpO2Euc2V0QXR0cmlidXRlKFwicm9sZVwiLFwicHJlc2VudGF0aW9uXCIpLGwuc2V0QXR0cmlidXRlKFwicm9sZVwiLFwidGFiXCIpLGwub25jbGljaz1pLHI9PT1lLnN0ZXAtMSYmKGwuY2xhc3NOYW1lPVwiYWN0aXZlXCIpLGIobCksbC5pbm5lckhUTUw9XCImbmJzcDtcIixsLnNldEF0dHJpYnV0ZShcImRhdGEtc3RlcC1udW1iZXJcIixzLnRvU3RyaW5nKCkpLGEuYXBwZW5kQ2hpbGQobCksby5hcHBlbmRDaGlsZChhKX1yZXR1cm4gbi5hcHBlbmRDaGlsZChvKSxufWZ1bmN0aW9uIEkodCxlLG4pe3ZhciBvPXQucXVlcnlTZWxlY3RvcihcIi5pbnRyb2pzLXByb2dyZXNzIC5pbnRyb2pzLXByb2dyZXNzYmFyXCIpO2lmKG8pe3ZhciBpPUUoZSxuKTtvLnN0eWxlLmNzc1RleHQ9XCJ3aWR0aDpcIi5jb25jYXQoaSxcIiU7XCIpLG8uc2V0QXR0cmlidXRlKFwiYXJpYS12YWx1ZW5vd1wiLGkudG9TdHJpbmcoKSl9fWZ1bmN0aW9uIEwodCxvKXtyZXR1cm4gZSh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKCl7dmFyIGkscixzLGEsbCxkLG0sZyx2LF8sQyxTLGssTCxQLHEsUixPLE0sRCxGLFYseixHLFc9dGhpcztyZXR1cm4gbih0aGlzLChmdW5jdGlvbihRKXtzd2l0Y2goUS5sYWJlbCl7Y2FzZSAwOnJldHVybiBjKHQuX2ludHJvQ2hhbmdlQ2FsbGJhY2spP1s0LHQuX2ludHJvQ2hhbmdlQ2FsbGJhY2suY2FsbCh0LG8uZWxlbWVudCldOlszLDJdO2Nhc2UgMTpRLnNlbnQoKSxRLmxhYmVsPTI7Y2FzZSAyOnJldHVybiBpPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW50cm9qcy1oZWxwZXJMYXllclwiKSxyPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW50cm9qcy10b29sdGlwUmVmZXJlbmNlTGF5ZXJcIikscz1cImludHJvanMtaGVscGVyTGF5ZXJcIixcInN0cmluZ1wiPT10eXBlb2Ygby5oaWdobGlnaHRDbGFzcyYmKHMrPVwiIFwiLmNvbmNhdChvLmhpZ2hsaWdodENsYXNzKSksXCJzdHJpbmdcIj09dHlwZW9mIHQuX29wdGlvbnMuaGlnaGxpZ2h0Q2xhc3MmJihzKz1cIiBcIi5jb25jYXQodC5fb3B0aW9ucy5oaWdobGlnaHRDbGFzcykpLG51bGwhPT1pJiZudWxsIT09cj8obT1yLnF1ZXJ5U2VsZWN0b3IoXCIuaW50cm9qcy1oZWxwZXJOdW1iZXJMYXllclwiKSxnPXIucXVlcnlTZWxlY3RvcihcIi5pbnRyb2pzLXRvb2x0aXB0ZXh0XCIpLHY9ci5xdWVyeVNlbGVjdG9yKFwiLmludHJvanMtdG9vbHRpcC10aXRsZVwiKSxfPXIucXVlcnlTZWxlY3RvcihcIi5pbnRyb2pzLWFycm93XCIpLEM9ci5xdWVyeVNlbGVjdG9yKFwiLmludHJvanMtdG9vbHRpcFwiKSxkPXIucXVlcnlTZWxlY3RvcihcIi5pbnRyb2pzLXNraXBidXR0b25cIiksbD1yLnF1ZXJ5U2VsZWN0b3IoXCIuaW50cm9qcy1wcmV2YnV0dG9uXCIpLGE9ci5xdWVyeVNlbGVjdG9yKFwiLmludHJvanMtbmV4dGJ1dHRvblwiKSxpLmNsYXNzTmFtZT1zLEMuc3R5bGUub3BhY2l0eT1cIjBcIixDLnN0eWxlLmRpc3BsYXk9XCJub25lXCIsaCh0Ll9vcHRpb25zLnNjcm9sbFRvRWxlbWVudCxvLmVsZW1lbnQpLHcodCxvLGkpLHcodCxvLHIpLEEoKSx0Ll9sYXN0U2hvd0VsZW1lbnRUaW1lciYmd2luZG93LmNsZWFyVGltZW91dCh0Ll9sYXN0U2hvd0VsZW1lbnRUaW1lciksdC5fbGFzdFNob3dFbGVtZW50VGltZXI9d2luZG93LnNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7bnVsbCE9PW0mJihtLmlubmVySFRNTD1cIlwiLmNvbmNhdChvLnN0ZXAsXCIgXCIpLmNvbmNhdCh0Ll9vcHRpb25zLnN0ZXBOdW1iZXJzT2ZMYWJlbCxcIiBcIikuY29uY2F0KHQuX2ludHJvSXRlbXMubGVuZ3RoKSksZy5pbm5lckhUTUw9by5pbnRyb3x8XCJcIix2LmlubmVySFRNTD1vLnRpdGxlfHxcIlwiLEMuc3R5bGUuZGlzcGxheT1cImJsb2NrXCIsaih0LG8sQyxfKSxmdW5jdGlvbih0LGUsbil7aWYodCl7dmFyIG89ZS5xdWVyeVNlbGVjdG9yKFwiLmludHJvanMtYnVsbGV0cyBsaSA+IGEuYWN0aXZlXCIpLGk9ZS5xdWVyeVNlbGVjdG9yKCcuaW50cm9qcy1idWxsZXRzIGxpID4gYVtkYXRhLXN0ZXAtbnVtYmVyPVwiJy5jb25jYXQobi5zdGVwLCdcIl0nKSk7byYmaSYmKG8uY2xhc3NOYW1lPVwiXCIsaS5jbGFzc05hbWU9XCJhY3RpdmVcIil9fSh0Ll9vcHRpb25zLnNob3dCdWxsZXRzLHIsbyksSShyLHQuX2N1cnJlbnRTdGVwLHQuX2ludHJvSXRlbXMubGVuZ3RoKSxDLnN0eWxlLm9wYWNpdHk9XCIxXCIsKG51bGwhPWEmJi9pbnRyb2pzLWRvbmVidXR0b24vZ2kudGVzdChhLmNsYXNzTmFtZSl8fG51bGwhPWEpJiZhLmZvY3VzKCksZih0Ll9vcHRpb25zLnNjcm9sbFRvRWxlbWVudCxvLnNjcm9sbFRvLHQuX29wdGlvbnMuc2Nyb2xsUGFkZGluZyxvLmVsZW1lbnQsZyl9KSwzNTApKTooUz14KFwiZGl2XCIse2NsYXNzTmFtZTpzfSksaz14KFwiZGl2XCIse2NsYXNzTmFtZTpcImludHJvanMtdG9vbHRpcFJlZmVyZW5jZUxheWVyXCJ9KSxMPXgoXCJkaXZcIix7Y2xhc3NOYW1lOlwiaW50cm9qcy1hcnJvd1wifSksUD14KFwiZGl2XCIse2NsYXNzTmFtZTpcImludHJvanMtdG9vbHRpcFwifSkscT14KFwiZGl2XCIse2NsYXNzTmFtZTpcImludHJvanMtdG9vbHRpcHRleHRcIn0pLFI9eChcImRpdlwiLHtjbGFzc05hbWU6XCJpbnRyb2pzLXRvb2x0aXAtaGVhZGVyXCJ9KSxPPXgoXCJoMVwiLHtjbGFzc05hbWU6XCJpbnRyb2pzLXRvb2x0aXAtdGl0bGVcIn0pLE09eChcImRpdlwiKSx5KFMse1wiYm94LXNoYWRvd1wiOlwiMCAwIDFweCAycHggcmdiYSgzMywgMzMsIDMzLCAwLjgpLCByZ2JhKDMzLCAzMywgMzMsIFwiLmNvbmNhdCh0Ll9vcHRpb25zLm92ZXJsYXlPcGFjaXR5LnRvU3RyaW5nKCksXCIpIDAgMCAwIDUwMDBweFwiKX0pLGgodC5fb3B0aW9ucy5zY3JvbGxUb0VsZW1lbnQsby5lbGVtZW50KSx3KHQsbyxTKSx3KHQsbyxrKSxOKHQuX3RhcmdldEVsZW1lbnQsUywhMCksTih0Ll90YXJnZXRFbGVtZW50LGspLHEuaW5uZXJIVE1MPW8uaW50cm8sTy5pbm5lckhUTUw9by50aXRsZSxNLmNsYXNzTmFtZT1cImludHJvanMtdG9vbHRpcGJ1dHRvbnNcIiwhMT09PXQuX29wdGlvbnMuc2hvd0J1dHRvbnMmJihNLnN0eWxlLmRpc3BsYXk9XCJub25lXCIpLFIuYXBwZW5kQ2hpbGQoTyksUC5hcHBlbmRDaGlsZChSKSxQLmFwcGVuZENoaWxkKHEpLHQuX29wdGlvbnMuZG9udFNob3dBZ2FpbiYmKEQ9eChcImRpdlwiLHtjbGFzc05hbWU6XCJpbnRyb2pzLWRvbnRTaG93QWdhaW5cIn0pLChGPXgoXCJpbnB1dFwiLHt0eXBlOlwiY2hlY2tib3hcIixpZDpcImludHJvanMtZG9udFNob3dBZ2FpblwiLG5hbWU6XCJpbnRyb2pzLWRvbnRTaG93QWdhaW5cIn0pKS5vbmNoYW5nZT1mdW5jdGlvbihlKXt0LnNldERvbnRTaG93QWdhaW4oZS50YXJnZXQuY2hlY2tlZCl9LChWPXgoXCJsYWJlbFwiLHtodG1sRm9yOlwiaW50cm9qcy1kb250U2hvd0FnYWluXCJ9KSkuaW5uZXJUZXh0PXQuX29wdGlvbnMuZG9udFNob3dBZ2FpbkxhYmVsLEQuYXBwZW5kQ2hpbGQoRiksRC5hcHBlbmRDaGlsZChWKSxQLmFwcGVuZENoaWxkKEQpKSxQLmFwcGVuZENoaWxkKFQodCxvKSksUC5hcHBlbmRDaGlsZChmdW5jdGlvbih0KXt2YXIgZT14KFwiZGl2XCIpO2UuY2xhc3NOYW1lPVwiaW50cm9qcy1wcm9ncmVzc1wiLCExPT09dC5fb3B0aW9ucy5zaG93UHJvZ3Jlc3MmJihlLnN0eWxlLmRpc3BsYXk9XCJub25lXCIpO3ZhciBuPXgoXCJkaXZcIix7Y2xhc3NOYW1lOlwiaW50cm9qcy1wcm9ncmVzc2JhclwifSk7dC5fb3B0aW9ucy5wcm9ncmVzc0JhckFkZGl0aW9uYWxDbGFzcyYmKG4uY2xhc3NOYW1lKz1cIiBcIit0Ll9vcHRpb25zLnByb2dyZXNzQmFyQWRkaXRpb25hbENsYXNzKTt2YXIgbz1FKHQuX2N1cnJlbnRTdGVwLHQuX2ludHJvSXRlbXMubGVuZ3RoKTtyZXR1cm4gbi5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsXCJwcm9ncmVzc1wiKSxuLnNldEF0dHJpYnV0ZShcImFyaWEtdmFsdWVtaW5cIixcIjBcIiksbi5zZXRBdHRyaWJ1dGUoXCJhcmlhLXZhbHVlbWF4XCIsXCIxMDBcIiksbi5zZXRBdHRyaWJ1dGUoXCJhcmlhLXZhbHVlbm93XCIsby50b1N0cmluZygpKSxuLnN0eWxlLmNzc1RleHQ9XCJ3aWR0aDpcIi5jb25jYXQobyxcIiU7XCIpLGUuYXBwZW5kQ2hpbGQobiksZX0odCkpLHo9eChcImRpdlwiKSwhMD09PXQuX29wdGlvbnMuc2hvd1N0ZXBOdW1iZXJzJiYoei5jbGFzc05hbWU9XCJpbnRyb2pzLWhlbHBlck51bWJlckxheWVyXCIsei5pbm5lckhUTUw9XCJcIi5jb25jYXQoby5zdGVwLFwiIFwiKS5jb25jYXQodC5fb3B0aW9ucy5zdGVwTnVtYmVyc09mTGFiZWwsXCIgXCIpLmNvbmNhdCh0Ll9pbnRyb0l0ZW1zLmxlbmd0aCksUC5hcHBlbmRDaGlsZCh6KSksUC5hcHBlbmRDaGlsZChMKSxrLmFwcGVuZENoaWxkKFApLChhPXgoXCJhXCIpKS5vbmNsaWNrPWZ1bmN0aW9uKCl7cmV0dXJuIGUoVyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3JldHVybiBuKHRoaXMsKGZ1bmN0aW9uKGUpe3N3aXRjaChlLmxhYmVsKXtjYXNlIDA6cmV0dXJuIHQuX2ludHJvSXRlbXMubGVuZ3RoLTE9PT10Ll9jdXJyZW50U3RlcD9bMywyXTpbNCxCKHQpXTtjYXNlIDE6cmV0dXJuIGUuc2VudCgpLFszLDZdO2Nhc2UgMjpyZXR1cm4vaW50cm9qcy1kb25lYnV0dG9uL2dpLnRlc3QoYS5jbGFzc05hbWUpP2ModC5faW50cm9Db21wbGV0ZUNhbGxiYWNrKT9bNCx0Ll9pbnRyb0NvbXBsZXRlQ2FsbGJhY2suY2FsbCh0LHQuX2N1cnJlbnRTdGVwLFwiZG9uZVwiKV06WzMsNF06WzMsNl07Y2FzZSAzOmUuc2VudCgpLGUubGFiZWw9NDtjYXNlIDQ6cmV0dXJuWzQsZXQodCx0Ll90YXJnZXRFbGVtZW50KV07Y2FzZSA1OmUuc2VudCgpLGUubGFiZWw9NjtjYXNlIDY6cmV0dXJuWzJdfX0pKX0pKX0sYihhKSxhLmlubmVySFRNTD10Ll9vcHRpb25zLm5leHRMYWJlbCwobD14KFwiYVwiKSkub25jbGljaz1mdW5jdGlvbigpe3JldHVybiBlKFcsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXtyZXR1cm4gbih0aGlzLChmdW5jdGlvbihlKXtzd2l0Y2goZS5sYWJlbCl7Y2FzZSAwOnJldHVybiB0Ll9jdXJyZW50U3RlcD4wP1s0LEgodCldOlszLDJdO2Nhc2UgMTplLnNlbnQoKSxlLmxhYmVsPTI7Y2FzZSAyOnJldHVyblsyXX19KSl9KSl9LGIobCksbC5pbm5lckhUTUw9dC5fb3B0aW9ucy5wcmV2TGFiZWwsYihkPXgoXCJhXCIse2NsYXNzTmFtZTpcImludHJvanMtc2tpcGJ1dHRvblwifSkpLGQuaW5uZXJIVE1MPXQuX29wdGlvbnMuc2tpcExhYmVsLGQub25jbGljaz1mdW5jdGlvbigpe3JldHVybiBlKFcsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXtyZXR1cm4gbih0aGlzLChmdW5jdGlvbihlKXtzd2l0Y2goZS5sYWJlbCl7Y2FzZSAwOnJldHVybiB0Ll9pbnRyb0l0ZW1zLmxlbmd0aC0xPT09dC5fY3VycmVudFN0ZXAmJmModC5faW50cm9Db21wbGV0ZUNhbGxiYWNrKT9bNCx0Ll9pbnRyb0NvbXBsZXRlQ2FsbGJhY2suY2FsbCh0LHQuX2N1cnJlbnRTdGVwLFwic2tpcFwiKV06WzMsMl07Y2FzZSAxOmUuc2VudCgpLGUubGFiZWw9MjtjYXNlIDI6cmV0dXJuIGModC5faW50cm9Ta2lwQ2FsbGJhY2spP1s0LHQuX2ludHJvU2tpcENhbGxiYWNrLmNhbGwodCx0Ll9jdXJyZW50U3RlcCldOlszLDRdO2Nhc2UgMzplLnNlbnQoKSxlLmxhYmVsPTQ7Y2FzZSA0OnJldHVybls0LGV0KHQsdC5fdGFyZ2V0RWxlbWVudCldO2Nhc2UgNTpyZXR1cm4gZS5zZW50KCksWzJdfX0pKX0pKX0sUi5hcHBlbmRDaGlsZChkKSx0Ll9pbnRyb0l0ZW1zLmxlbmd0aD4xJiZNLmFwcGVuZENoaWxkKGwpLE0uYXBwZW5kQ2hpbGQoYSksUC5hcHBlbmRDaGlsZChNKSxqKHQsbyxQLEwpLGYodC5fb3B0aW9ucy5zY3JvbGxUb0VsZW1lbnQsby5zY3JvbGxUbyx0Ll9vcHRpb25zLnNjcm9sbFBhZGRpbmcsby5lbGVtZW50LFApKSwoRz10Ll90YXJnZXRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW50cm9qcy1kaXNhYmxlSW50ZXJhY3Rpb25cIikpJiZHLnBhcmVudE5vZGUmJkcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChHKSxvLmRpc2FibGVJbnRlcmFjdGlvbiYmZnVuY3Rpb24odCxlKXt2YXIgbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmludHJvanMtZGlzYWJsZUludGVyYWN0aW9uXCIpO251bGw9PT1uJiYobj14KFwiZGl2XCIse2NsYXNzTmFtZTpcImludHJvanMtZGlzYWJsZUludGVyYWN0aW9uXCJ9KSx0Ll90YXJnZXRFbGVtZW50LmFwcGVuZENoaWxkKG4pKSx3KHQsZSxuKX0odCxvKSwwPT09dC5fY3VycmVudFN0ZXAmJnQuX2ludHJvSXRlbXMubGVuZ3RoPjE/KG51bGwhPWEmJihhLmNsYXNzTmFtZT1cIlwiLmNvbmNhdCh0Ll9vcHRpb25zLmJ1dHRvbkNsYXNzLFwiIGludHJvanMtbmV4dGJ1dHRvblwiKSxhLmlubmVySFRNTD10Ll9vcHRpb25zLm5leHRMYWJlbCksITA9PT10Ll9vcHRpb25zLmhpZGVQcmV2PyhudWxsIT1sJiYobC5jbGFzc05hbWU9XCJcIi5jb25jYXQodC5fb3B0aW9ucy5idXR0b25DbGFzcyxcIiBpbnRyb2pzLXByZXZidXR0b24gaW50cm9qcy1oaWRkZW5cIikpLG51bGwhPWEmJnUoYSxcImludHJvanMtZnVsbGJ1dHRvblwiKSk6bnVsbCE9bCYmKGwuY2xhc3NOYW1lPVwiXCIuY29uY2F0KHQuX29wdGlvbnMuYnV0dG9uQ2xhc3MsXCIgaW50cm9qcy1wcmV2YnV0dG9uIGludHJvanMtZGlzYWJsZWRcIikpKTp0Ll9pbnRyb0l0ZW1zLmxlbmd0aC0xPT09dC5fY3VycmVudFN0ZXB8fDE9PT10Ll9pbnRyb0l0ZW1zLmxlbmd0aD8obnVsbCE9bCYmKGwuY2xhc3NOYW1lPVwiXCIuY29uY2F0KHQuX29wdGlvbnMuYnV0dG9uQ2xhc3MsXCIgaW50cm9qcy1wcmV2YnV0dG9uXCIpKSwhMD09PXQuX29wdGlvbnMuaGlkZU5leHQ/KG51bGwhPWEmJihhLmNsYXNzTmFtZT1cIlwiLmNvbmNhdCh0Ll9vcHRpb25zLmJ1dHRvbkNsYXNzLFwiIGludHJvanMtbmV4dGJ1dHRvbiBpbnRyb2pzLWhpZGRlblwiKSksbnVsbCE9bCYmdShsLFwiaW50cm9qcy1mdWxsYnV0dG9uXCIpKTpudWxsIT1hJiYoITA9PT10Ll9vcHRpb25zLm5leHRUb0RvbmU/KGEuaW5uZXJIVE1MPXQuX29wdGlvbnMuZG9uZUxhYmVsLHUoYSxcIlwiLmNvbmNhdCh0Ll9vcHRpb25zLmJ1dHRvbkNsYXNzLFwiIGludHJvanMtbmV4dGJ1dHRvbiBpbnRyb2pzLWRvbmVidXR0b25cIikpKTphLmNsYXNzTmFtZT1cIlwiLmNvbmNhdCh0Ll9vcHRpb25zLmJ1dHRvbkNsYXNzLFwiIGludHJvanMtbmV4dGJ1dHRvbiBpbnRyb2pzLWRpc2FibGVkXCIpKSk6KG51bGwhPWwmJihsLmNsYXNzTmFtZT1cIlwiLmNvbmNhdCh0Ll9vcHRpb25zLmJ1dHRvbkNsYXNzLFwiIGludHJvanMtcHJldmJ1dHRvblwiKSksbnVsbCE9YSYmKGEuY2xhc3NOYW1lPVwiXCIuY29uY2F0KHQuX29wdGlvbnMuYnV0dG9uQ2xhc3MsXCIgaW50cm9qcy1uZXh0YnV0dG9uXCIpLGEuaW5uZXJIVE1MPXQuX29wdGlvbnMubmV4dExhYmVsKSksbnVsbCE9bCYmbC5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsXCJidXR0b25cIiksbnVsbCE9YSYmYS5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsXCJidXR0b25cIiksbnVsbCE9ZCYmZC5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsXCJidXR0b25cIiksbnVsbCE9YSYmYS5mb2N1cygpLGZ1bmN0aW9uKHQpe3UodCxcImludHJvanMtc2hvd0VsZW1lbnRcIik7dmFyIGU9cCh0LFwicG9zaXRpb25cIik7XCJhYnNvbHV0ZVwiIT09ZSYmXCJyZWxhdGl2ZVwiIT09ZSYmXCJzdGlja3lcIiE9PWUmJlwiZml4ZWRcIiE9PWUmJnUodCxcImludHJvanMtcmVsYXRpdmVQb3NpdGlvblwiKX0oby5lbGVtZW50KSxjKHQuX2ludHJvQWZ0ZXJDaGFuZ2VDYWxsYmFjayk/WzQsdC5faW50cm9BZnRlckNoYW5nZUNhbGxiYWNrLmNhbGwodCxvLmVsZW1lbnQpXTpbMyw0XTtjYXNlIDM6US5zZW50KCksUS5sYWJlbD00O2Nhc2UgNDpyZXR1cm5bMl19fSkpfSkpfWZ1bmN0aW9uIFAodCxvKXtyZXR1cm4gZSh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKCl7cmV0dXJuIG4odGhpcywoZnVuY3Rpb24oZSl7c3dpdGNoKGUubGFiZWwpe2Nhc2UgMDpyZXR1cm4gdC5fY3VycmVudFN0ZXA9by0yLHZvaWQgMD09PXQuX2ludHJvSXRlbXM/WzMsMl06WzQsQih0KV07Y2FzZSAxOmUuc2VudCgpLGUubGFiZWw9MjtjYXNlIDI6cmV0dXJuWzJdfX0pKX0pKX1mdW5jdGlvbiBxKHQsbyl7cmV0dXJuIGUodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3JldHVybiBuKHRoaXMsKGZ1bmN0aW9uKGUpe3N3aXRjaChlLmxhYmVsKXtjYXNlIDA6cmV0dXJuIHQuX2N1cnJlbnRTdGVwTnVtYmVyPW8sdm9pZCAwPT09dC5faW50cm9JdGVtcz9bMywyXTpbNCxCKHQpXTtjYXNlIDE6ZS5zZW50KCksZS5sYWJlbD0yO2Nhc2UgMjpyZXR1cm5bMl19fSkpfSkpfWZ1bmN0aW9uIEIodCl7cmV0dXJuIGUodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3ZhciBlLG8saTtyZXR1cm4gbih0aGlzLChmdW5jdGlvbihuKXtzd2l0Y2gobi5sYWJlbCl7Y2FzZSAwOmlmKHQuX2RpcmVjdGlvbj1cImZvcndhcmRcIix2b2lkIDAhPT10Ll9jdXJyZW50U3RlcE51bWJlcilmb3IoZT0wO2U8dC5faW50cm9JdGVtcy5sZW5ndGg7ZSsrKXQuX2ludHJvSXRlbXNbZV0uc3RlcD09PXQuX2N1cnJlbnRTdGVwTnVtYmVyJiYodC5fY3VycmVudFN0ZXA9ZS0xLHQuX2N1cnJlbnRTdGVwTnVtYmVyPXZvaWQgMCk7cmV0dXJuLTE9PT10Ll9jdXJyZW50U3RlcD90Ll9jdXJyZW50U3RlcD0wOisrdC5fY3VycmVudFN0ZXAsbz10Ll9pbnRyb0l0ZW1zW3QuX2N1cnJlbnRTdGVwXSxpPSEwLGModC5faW50cm9CZWZvcmVDaGFuZ2VDYWxsYmFjayk/WzQsdC5faW50cm9CZWZvcmVDaGFuZ2VDYWxsYmFjay5jYWxsKHQsbyYmby5lbGVtZW50LHQuX2N1cnJlbnRTdGVwLHQuX2RpcmVjdGlvbildOlszLDJdO2Nhc2UgMTppPW4uc2VudCgpLG4ubGFiZWw9MjtjYXNlIDI6cmV0dXJuITE9PT1pPygtLXQuX2N1cnJlbnRTdGVwLFsyLCExXSk6dC5faW50cm9JdGVtcy5sZW5ndGg8PXQuX2N1cnJlbnRTdGVwP2ModC5faW50cm9Db21wbGV0ZUNhbGxiYWNrKT9bNCx0Ll9pbnRyb0NvbXBsZXRlQ2FsbGJhY2suY2FsbCh0LHQuX2N1cnJlbnRTdGVwLFwiZW5kXCIpXTpbMyw0XTpbMyw2XTtjYXNlIDM6bi5zZW50KCksbi5sYWJlbD00O2Nhc2UgNDpyZXR1cm5bNCxldCh0LHQuX3RhcmdldEVsZW1lbnQpXTtjYXNlIDU6cmV0dXJuIG4uc2VudCgpLFsyLCExXTtjYXNlIDY6cmV0dXJuWzQsTCh0LG8pXTtjYXNlIDc6cmV0dXJuIG4uc2VudCgpLFsyLCEwXX19KSl9KSl9ZnVuY3Rpb24gSCh0KXtyZXR1cm4gZSh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKCl7dmFyIGUsbztyZXR1cm4gbih0aGlzLChmdW5jdGlvbihuKXtzd2l0Y2gobi5sYWJlbCl7Y2FzZSAwOnJldHVybiB0Ll9kaXJlY3Rpb249XCJiYWNrd2FyZFwiLHQuX2N1cnJlbnRTdGVwPD0wP1syLCExXTooLS10Ll9jdXJyZW50U3RlcCxlPXQuX2ludHJvSXRlbXNbdC5fY3VycmVudFN0ZXBdLG89ITAsYyh0Ll9pbnRyb0JlZm9yZUNoYW5nZUNhbGxiYWNrKT9bNCx0Ll9pbnRyb0JlZm9yZUNoYW5nZUNhbGxiYWNrLmNhbGwodCxlJiZlLmVsZW1lbnQsdC5fY3VycmVudFN0ZXAsdC5fZGlyZWN0aW9uKV06WzMsMl0pO2Nhc2UgMTpvPW4uc2VudCgpLG4ubGFiZWw9MjtjYXNlIDI6cmV0dXJuITE9PT1vPygrK3QuX2N1cnJlbnRTdGVwLFsyLCExXSk6WzQsTCh0LGUpXTtjYXNlIDM6cmV0dXJuIG4uc2VudCgpLFsyLCEwXX19KSl9KSl9ZnVuY3Rpb24gUih0LG8pe3JldHVybiBlKHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXt2YXIgZSxpO3JldHVybiBuKHRoaXMsKGZ1bmN0aW9uKG4pe3N3aXRjaChuLmxhYmVsKXtjYXNlIDA6cmV0dXJuIG51bGw9PT0oZT12b2lkIDA9PT1vLmNvZGU/by53aGljaDpvLmNvZGUpJiYoZT1udWxsPT09by5jaGFyQ29kZT9vLmtleUNvZGU6by5jaGFyQ29kZSksXCJFc2NhcGVcIiE9PWUmJjI3IT09ZXx8ITAhPT10Ll9vcHRpb25zLmV4aXRPbkVzYz9bMywyXTpbNCxldCh0LHQuX3RhcmdldEVsZW1lbnQpXTtjYXNlIDE6cmV0dXJuIG4uc2VudCgpLFszLDE2XTtjYXNlIDI6cmV0dXJuXCJBcnJvd0xlZnRcIiE9PWUmJjM3IT09ZT9bMyw0XTpbNCxIKHQpXTtjYXNlIDM6cmV0dXJuIG4uc2VudCgpLFszLDE2XTtjYXNlIDQ6cmV0dXJuXCJBcnJvd1JpZ2h0XCIhPT1lJiYzOSE9PWU/WzMsNl06WzQsQih0KV07Y2FzZSA1OnJldHVybiBuLnNlbnQoKSxbMywxNl07Y2FzZSA2OnJldHVyblwiRW50ZXJcIiE9PWUmJlwiTnVtcGFkRW50ZXJcIiE9PWUmJjEzIT09ZT9bMywxNl06KGk9by50YXJnZXR8fG8uc3JjRWxlbWVudCkmJmkuY2xhc3NOYW1lLm1hdGNoKFwiaW50cm9qcy1wcmV2YnV0dG9uXCIpP1s0LEgodCldOlszLDhdO2Nhc2UgNzpyZXR1cm4gbi5zZW50KCksWzMsMTVdO2Nhc2UgODpyZXR1cm4gaSYmaS5jbGFzc05hbWUubWF0Y2goXCJpbnRyb2pzLXNraXBidXR0b25cIik/dC5faW50cm9JdGVtcy5sZW5ndGgtMT09PXQuX2N1cnJlbnRTdGVwJiZjKHQuX2ludHJvQ29tcGxldGVDYWxsYmFjayk/WzQsdC5faW50cm9Db21wbGV0ZUNhbGxiYWNrLmNhbGwodCx0Ll9jdXJyZW50U3RlcCxcInNraXBcIildOlszLDEwXTpbMywxMl07Y2FzZSA5Om4uc2VudCgpLG4ubGFiZWw9MTA7Y2FzZSAxMDpyZXR1cm5bNCxldCh0LHQuX3RhcmdldEVsZW1lbnQpXTtjYXNlIDExOnJldHVybiBuLnNlbnQoKSxbMywxNV07Y2FzZSAxMjpyZXR1cm4gaSYmaS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN0ZXAtbnVtYmVyXCIpPyhpLmNsaWNrKCksWzMsMTVdKTpbMywxM107Y2FzZSAxMzpyZXR1cm5bNCxCKHQpXTtjYXNlIDE0Om4uc2VudCgpLG4ubGFiZWw9MTU7Y2FzZSAxNTpvLnByZXZlbnREZWZhdWx0P28ucHJldmVudERlZmF1bHQoKTpvLnJldHVyblZhbHVlPSExLG4ubGFiZWw9MTY7Y2FzZSAxNjpyZXR1cm5bMl19fSkpfSkpfWZ1bmN0aW9uIE8oZSl7aWYobnVsbD09PWV8fFwib2JqZWN0XCIhPT10KGUpfHxcIm5vZGVUeXBlXCJpbiBlKXJldHVybiBlO3ZhciBuPXt9O2Zvcih2YXIgbyBpbiBlKVwialF1ZXJ5XCJpbiB3aW5kb3cmJmVbb11pbnN0YW5jZW9mIHdpbmRvdy5qUXVlcnk/bltvXT1lW29dOm5bb109TyhlW29dKTtyZXR1cm4gbn1mdW5jdGlvbiBNKHQpe3ZhciBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW50cm9qcy1oaW50c1wiKTtyZXR1cm4gZT9BcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbCh0KSk6W119ZnVuY3Rpb24gRCh0LG8pe3JldHVybiBlKHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXt2YXIgZTtyZXR1cm4gbih0aGlzLChmdW5jdGlvbihuKXtzd2l0Y2gobi5sYWJlbCl7Y2FzZSAwOnJldHVybiBlPU0oJy5pbnRyb2pzLWhpbnRbZGF0YS1zdGVwPVwiJy5jb25jYXQobywnXCJdJykpWzBdLFkoKSxlJiZ1KGUsXCJpbnRyb2pzLWhpZGVoaW50XCIpLGModC5faGludENsb3NlQ2FsbGJhY2spP1s0LHQuX2hpbnRDbG9zZUNhbGxiYWNrLmNhbGwodCxvKV06WzMsMl07Y2FzZSAxOm4uc2VudCgpLG4ubGFiZWw9MjtjYXNlIDI6cmV0dXJuWzJdfX0pKX0pKX1mdW5jdGlvbiBGKHQpe3JldHVybiBlKHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXt2YXIgZSxvLGkscixzO3JldHVybiBuKHRoaXMsKGZ1bmN0aW9uKG4pe3N3aXRjaChuLmxhYmVsKXtjYXNlIDA6ZT1NKFwiLmludHJvanMtaGludFwiKSxvPTAsaT1lLG4ubGFiZWw9MTtjYXNlIDE6cmV0dXJuIG88aS5sZW5ndGg/KHI9aVtvXSwocz1yLmdldEF0dHJpYnV0ZShcImRhdGEtc3RlcFwiKSk/WzQsRCh0LHBhcnNlSW50KHMsMTApKV06WzMsM10pOlszLDRdO2Nhc2UgMjpuLnNlbnQoKSxuLmxhYmVsPTM7Y2FzZSAzOnJldHVybiBvKyssWzMsMV07Y2FzZSA0OnJldHVyblsyXX19KSl9KSl9ZnVuY3Rpb24gVih0KXtyZXR1cm4gZSh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKCl7dmFyIGUsbyxpLHIscztyZXR1cm4gbih0aGlzLChmdW5jdGlvbihuKXtzd2l0Y2gobi5sYWJlbCl7Y2FzZSAwOmlmKCEoZT1NKFwiLmludHJvanMtaGludFwiKSl8fCFlLmxlbmd0aClyZXR1cm5bMywxXTtmb3Iobz0wLGk9ZTtvPGkubGVuZ3RoO28rKylyPWlbb10sKHM9ci5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN0ZXBcIikpJiZ6KHBhcnNlSW50KHMsMTApKTtyZXR1cm5bMywzXTtjYXNlIDE6cmV0dXJuWzQsJCh0LHQuX3RhcmdldEVsZW1lbnQpXTtjYXNlIDI6bi5zZW50KCksbi5sYWJlbD0zO2Nhc2UgMzpyZXR1cm5bMl19fSkpfSkpfWZ1bmN0aW9uIHoodCl7dmFyIGU9TSgnLmludHJvanMtaGludFtkYXRhLXN0ZXA9XCInLmNvbmNhdCh0LCdcIl0nKSlbMF07ZSYmdihlLC9pbnRyb2pzLWhpZGVoaW50L2cpfWZ1bmN0aW9uIEcodCl7dmFyIGU9TSgnLmludHJvanMtaGludFtkYXRhLXN0ZXA9XCInLmNvbmNhdCh0LCdcIl0nKSlbMF07ZSYmZS5wYXJlbnROb2RlJiZlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSl9ZnVuY3Rpb24gVyh0KXtyZXR1cm4gZSh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKCl7dmFyIGUsbyxpLHIscyxhLHA7cmV0dXJuIG4odGhpcywoZnVuY3Rpb24obil7c3dpdGNoKG4ubGFiZWwpe2Nhc2UgMDpmb3IobnVsbD09PShlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW50cm9qcy1oaW50c1wiKSkmJihlPXgoXCJkaXZcIix7Y2xhc3NOYW1lOlwiaW50cm9qcy1oaW50c1wifSkpLG89ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKG4pe3ZhciBvPW58fHdpbmRvdy5ldmVudDtvJiZvLnN0b3BQcm9wYWdhdGlvbiYmby5zdG9wUHJvcGFnYXRpb24oKSxvJiZudWxsIT09by5jYW5jZWxCdWJibGUmJihvLmNhbmNlbEJ1YmJsZT0hMCksWCh0LGUpfX0saT0wO2k8dC5faGludEl0ZW1zLmxlbmd0aDtpKyspe2lmKHI9dC5faGludEl0ZW1zW2ldLGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnRyb2pzLWhpbnRbZGF0YS1zdGVwPVwiJy5jb25jYXQoaSwnXCJdJykpKXJldHVyblsyXTtiKHM9eChcImFcIix7Y2xhc3NOYW1lOlwiaW50cm9qcy1oaW50XCJ9KSkscy5vbmNsaWNrPW8oaSksci5oaW50QW5pbWF0aW9ufHx1KHMsXCJpbnRyb2pzLWhpbnQtbm8tYW5pbVwiKSxtKHIuZWxlbWVudCkmJnUocyxcImludHJvanMtZml4ZWRoaW50XCIpLGE9eChcImRpdlwiLHtjbGFzc05hbWU6XCJpbnRyb2pzLWhpbnQtZG90XCJ9KSxwPXgoXCJkaXZcIix7Y2xhc3NOYW1lOlwiaW50cm9qcy1oaW50LXB1bHNlXCJ9KSxzLmFwcGVuZENoaWxkKGEpLHMuYXBwZW5kQ2hpbGQocCkscy5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0ZXBcIixpLnRvU3RyaW5nKCkpLHIuaGludFRhcmdldEVsZW1lbnQ9ci5lbGVtZW50LHIuZWxlbWVudD1zLFEoci5oaW50UG9zaXRpb24scyxyLmhpbnRUYXJnZXRFbGVtZW50KSxlLmFwcGVuZENoaWxkKHMpfXJldHVybiBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGUpLGModC5faGludHNBZGRlZENhbGxiYWNrKT9bNCx0Ll9oaW50c0FkZGVkQ2FsbGJhY2suY2FsbCh0KV06WzMsMl07Y2FzZSAxOm4uc2VudCgpLG4ubGFiZWw9MjtjYXNlIDI6cmV0dXJuIHQuX29wdGlvbnMuaGludEF1dG9SZWZyZXNoSW50ZXJ2YWw+PTAmJih0Ll9oaW50c0F1dG9SZWZyZXNoRnVuY3Rpb249KGg9ZnVuY3Rpb24oKXtyZXR1cm4gVSh0KX0sZD10Ll9vcHRpb25zLmhpbnRBdXRvUmVmcmVzaEludGVydmFsLGZ1bmN0aW9uKCl7Zm9yKHZhciB0PVtdLGU9MDtlPGFyZ3VtZW50cy5sZW5ndGg7ZSsrKXRbZV09YXJndW1lbnRzW2VdO3dpbmRvdy5jbGVhclRpbWVvdXQoZiksZj13aW5kb3cuc2V0VGltZW91dCgoZnVuY3Rpb24oKXtoKHQpfSksZCl9KSxsLm9uKHdpbmRvdyxcInNjcm9sbFwiLHQuX2hpbnRzQXV0b1JlZnJlc2hGdW5jdGlvbix0LCEwKSksWzJdfXZhciBoLGQsZn0pKX0pKX1mdW5jdGlvbiBRKHQsZSxuKXtpZih2b2lkIDAhPT1uKXt2YXIgbz1nKG4pLGk9MjAscj0yMDtzd2l0Y2godCl7ZGVmYXVsdDpjYXNlXCJ0b3AtbGVmdFwiOmUuc3R5bGUubGVmdD1cIlwiLmNvbmNhdChvLmxlZnQsXCJweFwiKSxlLnN0eWxlLnRvcD1cIlwiLmNvbmNhdChvLnRvcCxcInB4XCIpO2JyZWFrO2Nhc2VcInRvcC1yaWdodFwiOmUuc3R5bGUubGVmdD1cIlwiLmNvbmNhdChvLmxlZnQrby53aWR0aC1pLFwicHhcIiksZS5zdHlsZS50b3A9XCJcIi5jb25jYXQoby50b3AsXCJweFwiKTticmVhaztjYXNlXCJib3R0b20tbGVmdFwiOmUuc3R5bGUubGVmdD1cIlwiLmNvbmNhdChvLmxlZnQsXCJweFwiKSxlLnN0eWxlLnRvcD1cIlwiLmNvbmNhdChvLnRvcCtvLmhlaWdodC1yLFwicHhcIik7YnJlYWs7Y2FzZVwiYm90dG9tLXJpZ2h0XCI6ZS5zdHlsZS5sZWZ0PVwiXCIuY29uY2F0KG8ubGVmdCtvLndpZHRoLWksXCJweFwiKSxlLnN0eWxlLnRvcD1cIlwiLmNvbmNhdChvLnRvcCtvLmhlaWdodC1yLFwicHhcIik7YnJlYWs7Y2FzZVwibWlkZGxlLWxlZnRcIjplLnN0eWxlLmxlZnQ9XCJcIi5jb25jYXQoby5sZWZ0LFwicHhcIiksZS5zdHlsZS50b3A9XCJcIi5jb25jYXQoby50b3ArKG8uaGVpZ2h0LXIpLzIsXCJweFwiKTticmVhaztjYXNlXCJtaWRkbGUtcmlnaHRcIjplLnN0eWxlLmxlZnQ9XCJcIi5jb25jYXQoby5sZWZ0K28ud2lkdGgtaSxcInB4XCIpLGUuc3R5bGUudG9wPVwiXCIuY29uY2F0KG8udG9wKyhvLmhlaWdodC1yKS8yLFwicHhcIik7YnJlYWs7Y2FzZVwibWlkZGxlLW1pZGRsZVwiOmUuc3R5bGUubGVmdD1cIlwiLmNvbmNhdChvLmxlZnQrKG8ud2lkdGgtaSkvMixcInB4XCIpLGUuc3R5bGUudG9wPVwiXCIuY29uY2F0KG8udG9wKyhvLmhlaWdodC1yKS8yLFwicHhcIik7YnJlYWs7Y2FzZVwiYm90dG9tLW1pZGRsZVwiOmUuc3R5bGUubGVmdD1cIlwiLmNvbmNhdChvLmxlZnQrKG8ud2lkdGgtaSkvMixcInB4XCIpLGUuc3R5bGUudG9wPVwiXCIuY29uY2F0KG8udG9wK28uaGVpZ2h0LXIsXCJweFwiKTticmVhaztjYXNlXCJ0b3AtbWlkZGxlXCI6ZS5zdHlsZS5sZWZ0PVwiXCIuY29uY2F0KG8ubGVmdCsoby53aWR0aC1pKS8yLFwicHhcIiksZS5zdHlsZS50b3A9XCJcIi5jb25jYXQoby50b3AsXCJweFwiKX19fWZ1bmN0aW9uIFgodCxvKXtyZXR1cm4gZSh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKCl7dmFyIGUsaSxyLHMsYSxsLHUscCxoLGQsZjtyZXR1cm4gbih0aGlzLChmdW5jdGlvbihuKXtzd2l0Y2gobi5sYWJlbCl7Y2FzZSAwOnJldHVybiBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnRyb2pzLWhpbnRbZGF0YS1zdGVwPVwiJy5jb25jYXQobywnXCJdJykpLGk9dC5faGludEl0ZW1zW29dLGModC5faGludENsaWNrQ2FsbGJhY2spP1s0LHQuX2hpbnRDbGlja0NhbGxiYWNrLmNhbGwodCxlLGksbyldOlszLDJdO2Nhc2UgMTpuLnNlbnQoKSxuLmxhYmVsPTI7Y2FzZSAyOnJldHVybiB2b2lkIDAhPT0ocj1ZKCkpJiZwYXJzZUludChyLDEwKT09PW98fChzPXgoXCJkaXZcIix7Y2xhc3NOYW1lOlwiaW50cm9qcy10b29sdGlwXCJ9KSxhPXgoXCJkaXZcIiksbD14KFwiZGl2XCIpLHU9eChcImRpdlwiKSxzLm9uY2xpY2s9ZnVuY3Rpb24odCl7dC5zdG9wUHJvcGFnYXRpb24/dC5zdG9wUHJvcGFnYXRpb24oKTp0LmNhbmNlbEJ1YmJsZT0hMH0sYS5jbGFzc05hbWU9XCJpbnRyb2pzLXRvb2x0aXB0ZXh0XCIsKHA9eChcInBcIikpLmlubmVySFRNTD1pLmhpbnR8fFwiXCIsYS5hcHBlbmRDaGlsZChwKSx0Ll9vcHRpb25zLmhpbnRTaG93QnV0dG9uJiYoKGg9eChcImFcIikpLmNsYXNzTmFtZT10Ll9vcHRpb25zLmJ1dHRvbkNsYXNzLGguc2V0QXR0cmlidXRlKFwicm9sZVwiLFwiYnV0dG9uXCIpLGguaW5uZXJIVE1MPXQuX29wdGlvbnMuaGludEJ1dHRvbkxhYmVsLGgub25jbGljaz1mdW5jdGlvbigpe3JldHVybiBEKHQsbyl9LGEuYXBwZW5kQ2hpbGQoaCkpLGwuY2xhc3NOYW1lPVwiaW50cm9qcy1hcnJvd1wiLHMuYXBwZW5kQ2hpbGQobCkscy5hcHBlbmRDaGlsZChhKSxkPWUuZ2V0QXR0cmlidXRlKFwiZGF0YS1zdGVwXCIpfHxcIlwiLHQuX2N1cnJlbnRTdGVwPXBhcnNlSW50KGQsMTApLGY9dC5faGludEl0ZW1zW3QuX2N1cnJlbnRTdGVwXSx1LmNsYXNzTmFtZT1cImludHJvanMtdG9vbHRpcFJlZmVyZW5jZUxheWVyIGludHJvanMtaGludFJlZmVyZW5jZVwiLHUuc2V0QXR0cmlidXRlKFwiZGF0YS1zdGVwXCIsZCksdyh0LGYsdSksdS5hcHBlbmRDaGlsZChzKSxkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHUpLGoodCxmLHMsbCwhMCkpLFsyXX19KSl9KSl9ZnVuY3Rpb24gWSgpe3ZhciB0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW50cm9qcy1oaW50UmVmZXJlbmNlXCIpO2lmKHQmJnQucGFyZW50Tm9kZSl7dmFyIGU9dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN0ZXBcIik7aWYoIWUpcmV0dXJuO3JldHVybiB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodCksZX19ZnVuY3Rpb24gJCh0LG8pe3JldHVybiBlKHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXt2YXIgZSxpLHIscyxhLGMsdSxwLGgsZDtyZXR1cm4gbih0aGlzLChmdW5jdGlvbihuKXtzd2l0Y2gobi5sYWJlbCl7Y2FzZSAwOmlmKHQuX2hpbnRJdGVtcz1bXSx0Ll9vcHRpb25zLmhpbnRzJiZ0Ll9vcHRpb25zLmhpbnRzLmxlbmd0aD4wKWZvcihlPTAsaT10Ll9vcHRpb25zLmhpbnRzO2U8aS5sZW5ndGg7ZSsrKXI9aVtlXSxcInN0cmluZ1wiPT10eXBlb2Yocz1PKHIpKS5lbGVtZW50JiYocy5lbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iocy5lbGVtZW50KSkscy5oaW50UG9zaXRpb249cy5oaW50UG9zaXRpb258fHQuX29wdGlvbnMuaGludFBvc2l0aW9uLHMuaGludEFuaW1hdGlvbj1zLmhpbnRBbmltYXRpb258fHQuX29wdGlvbnMuaGludEFuaW1hdGlvbixudWxsIT09cy5lbGVtZW50JiZ0Ll9oaW50SXRlbXMucHVzaChzKTtlbHNle2lmKCEoYT1BcnJheS5mcm9tKG8ucXVlcnlTZWxlY3RvckFsbChcIipbZGF0YS1oaW50XVwiKSkpfHwhYS5sZW5ndGgpcmV0dXJuWzIsITFdO2ZvcihjPTAsdT1hO2M8dS5sZW5ndGg7YysrKXA9dVtjXSxoPXAuZ2V0QXR0cmlidXRlKFwiZGF0YS1oaW50LWFuaW1hdGlvblwiKSxkPXQuX29wdGlvbnMuaGludEFuaW1hdGlvbixoJiYoZD1cInRydWVcIj09PWgpLHQuX2hpbnRJdGVtcy5wdXNoKHtlbGVtZW50OnAsaGludDpwLmdldEF0dHJpYnV0ZShcImRhdGEtaGludFwiKXx8XCJcIixoaW50UG9zaXRpb246cC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhpbnQtcG9zaXRpb25cIil8fHQuX29wdGlvbnMuaGludFBvc2l0aW9uLGhpbnRBbmltYXRpb246ZCx0b29sdGlwQ2xhc3M6cC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRvb2x0aXAtY2xhc3NcIil8fHZvaWQgMCxwb3NpdGlvbjpwLmdldEF0dHJpYnV0ZShcImRhdGEtcG9zaXRpb25cIil8fHQuX29wdGlvbnMudG9vbHRpcFBvc2l0aW9ufSl9cmV0dXJuWzQsVyh0KV07Y2FzZSAxOnJldHVybiBuLnNlbnQoKSxsLm9uKGRvY3VtZW50LFwiY2xpY2tcIixZLHQsITEpLGwub24od2luZG93LFwicmVzaXplXCIsVSx0LCEwKSxbMiwhMF19fSkpfSkpfWZ1bmN0aW9uIFUodCl7Zm9yKHZhciBlPTAsbj10Ll9oaW50SXRlbXM7ZTxuLmxlbmd0aDtlKyspe3ZhciBvPW5bZV0saT1vLmhpbnRUYXJnZXRFbGVtZW50O1Eoby5oaW50UG9zaXRpb24sby5lbGVtZW50LGkpfX1mdW5jdGlvbiBaKHQsZSl7dmFyIG49QXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqW2RhdGEtaW50cm9dXCIpKSxvPVtdO2lmKHQuX29wdGlvbnMuc3RlcHMmJnQuX29wdGlvbnMuc3RlcHMubGVuZ3RoKWZvcih2YXIgaT0wLHI9dC5fb3B0aW9ucy5zdGVwcztpPHIubGVuZ3RoO2krKyl7dmFyIHM9TyhoPXJbaV0pO2lmKHMuc3RlcD1vLmxlbmd0aCsxLHMudGl0bGU9cy50aXRsZXx8XCJcIixcInN0cmluZ1wiPT10eXBlb2Ygcy5lbGVtZW50JiYocy5lbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iocy5lbGVtZW50KXx8dm9pZCAwKSx2b2lkIDA9PT1zLmVsZW1lbnR8fG51bGw9PT1zLmVsZW1lbnQpe3ZhciBhPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW50cm9qc0Zsb2F0aW5nRWxlbWVudFwiKTtudWxsPT09YSYmKGE9eChcImRpdlwiLHtjbGFzc05hbWU6XCJpbnRyb2pzRmxvYXRpbmdFbGVtZW50XCJ9KSxkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGEpKSxzLmVsZW1lbnQ9YSxzLnBvc2l0aW9uPVwiZmxvYXRpbmdcIn1zLnBvc2l0aW9uPXMucG9zaXRpb258fHQuX29wdGlvbnMudG9vbHRpcFBvc2l0aW9uLHMuc2Nyb2xsVG89cy5zY3JvbGxUb3x8dC5fb3B0aW9ucy5zY3JvbGxUbyx2b2lkIDA9PT1zLmRpc2FibGVJbnRlcmFjdGlvbiYmKHMuZGlzYWJsZUludGVyYWN0aW9uPXQuX29wdGlvbnMuZGlzYWJsZUludGVyYWN0aW9uKSxudWxsIT09cy5lbGVtZW50JiZvLnB1c2gocyl9ZWxzZXt2YXIgbD12b2lkIDA7aWYobi5sZW5ndGg8MSlyZXR1cm5bXTtmb3IodmFyIGM9MCx1PW47Yzx1Lmxlbmd0aDtjKyspe3ZhciBwPXVbY107aWYoKCF0Ll9vcHRpb25zLmdyb3VwfHxwLmdldEF0dHJpYnV0ZShcImRhdGEtaW50cm8tZ3JvdXBcIik9PT10Ll9vcHRpb25zLmdyb3VwKSYmXCJub25lXCIhPT1wLnN0eWxlLmRpc3BsYXkpe3ZhciBoPXBhcnNlSW50KHAuZ2V0QXR0cmlidXRlKFwiZGF0YS1zdGVwXCIpfHxcIlwiLDEwKTtsPXQuX29wdGlvbnMuZGlzYWJsZUludGVyYWN0aW9uLHAuaGFzQXR0cmlidXRlKFwiZGF0YS1kaXNhYmxlLWludGVyYWN0aW9uXCIpJiYobD0hIXAuZ2V0QXR0cmlidXRlKFwiZGF0YS1kaXNhYmxlLWludGVyYWN0aW9uXCIpKSxoPjAmJihvW2gtMV09e3N0ZXA6aCxlbGVtZW50OnAsdGl0bGU6cC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRpdGxlXCIpfHxcIlwiLGludHJvOnAuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbnRyb1wiKXx8XCJcIix0b29sdGlwQ2xhc3M6cC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRvb2x0aXAtY2xhc3NcIil8fHZvaWQgMCxoaWdobGlnaHRDbGFzczpwLmdldEF0dHJpYnV0ZShcImRhdGEtaGlnaGxpZ2h0LWNsYXNzXCIpfHx2b2lkIDAscG9zaXRpb246cC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBvc2l0aW9uXCIpfHx0Ll9vcHRpb25zLnRvb2x0aXBQb3NpdGlvbixzY3JvbGxUbzpwLmdldEF0dHJpYnV0ZShcImRhdGEtc2Nyb2xsLXRvXCIpfHx0Ll9vcHRpb25zLnNjcm9sbFRvLGRpc2FibGVJbnRlcmFjdGlvbjpsfSl9fWZvcih2YXIgZD0wLGY9MCxiPW47ZjxiLmxlbmd0aDtmKyspe3A9YltmXTtpZigoIXQuX29wdGlvbnMuZ3JvdXB8fHAuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbnRyby1ncm91cFwiKT09PXQuX29wdGlvbnMuZ3JvdXApJiZudWxsPT09cC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN0ZXBcIikpe2Zvcig7dm9pZCAwIT09b1tkXTspZCsrO2w9cC5oYXNBdHRyaWJ1dGUoXCJkYXRhLWRpc2FibGUtaW50ZXJhY3Rpb25cIik/ISFwLmdldEF0dHJpYnV0ZShcImRhdGEtZGlzYWJsZS1pbnRlcmFjdGlvblwiKTp0Ll9vcHRpb25zLmRpc2FibGVJbnRlcmFjdGlvbixvW2RdPXtlbGVtZW50OnAsdGl0bGU6cC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRpdGxlXCIpfHxcIlwiLGludHJvOnAuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbnRyb1wiKXx8XCJcIixzdGVwOmQrMSx0b29sdGlwQ2xhc3M6cC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRvb2x0aXAtY2xhc3NcIil8fHZvaWQgMCxoaWdobGlnaHRDbGFzczpwLmdldEF0dHJpYnV0ZShcImRhdGEtaGlnaGxpZ2h0LWNsYXNzXCIpfHx2b2lkIDAscG9zaXRpb246cC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBvc2l0aW9uXCIpfHx0Ll9vcHRpb25zLnRvb2x0aXBQb3NpdGlvbixzY3JvbGxUbzpwLmdldEF0dHJpYnV0ZShcImRhdGEtc2Nyb2xsLXRvXCIpfHx0Ll9vcHRpb25zLnNjcm9sbFRvLGRpc2FibGVJbnRlcmFjdGlvbjpsfX19fWZvcih2YXIgbT1bXSxnPTA7ZzxvLmxlbmd0aDtnKyspb1tnXSYmbS5wdXNoKG9bZ10pO3JldHVybihvPW0pLnNvcnQoKGZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQuc3RlcC1lLnN0ZXB9KSksb31mdW5jdGlvbiBKKHQsZSl7dmFyIG49dC5fY3VycmVudFN0ZXA7aWYobnVsbCE9biYmLTEhPW4pe3ZhciBvPXQuX2ludHJvSXRlbXNbbl0saT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmludHJvanMtdG9vbHRpcFJlZmVyZW5jZUxheWVyXCIpLHI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnRyb2pzLWhlbHBlckxheWVyXCIpLHM9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnRyb2pzLWRpc2FibGVJbnRlcmFjdGlvblwiKTt3KHQsbyxyKSx3KHQsbyxpKSx3KHQsbyxzKSxlJiYodC5faW50cm9JdGVtcz1aKHQsdC5fdGFyZ2V0RWxlbWVudCksZnVuY3Rpb24odCxlKXtpZih0Ll9vcHRpb25zLnNob3dCdWxsZXRzKXt2YXIgbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmludHJvanMtYnVsbGV0c1wiKTtuJiZuLnBhcmVudE5vZGUmJm4ucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoVCh0LGUpLG4pfX0odCxvKSxJKGksbix0Ll9pbnRyb0l0ZW1zLmxlbmd0aCkpO3ZhciBhPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW50cm9qcy1hcnJvd1wiKSxsPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW50cm9qcy10b29sdGlwXCIpO3JldHVybiBsJiZhJiZqKHQsdC5faW50cm9JdGVtc1tuXSxsLGEpLFUodCksdH19ZnVuY3Rpb24gSyh0KXtKKHQpfWZ1bmN0aW9uIHR0KHQsZSl7aWYodm9pZCAwPT09ZSYmKGU9ITEpLHQmJnQucGFyZW50RWxlbWVudCl7dmFyIG49dC5wYXJlbnRFbGVtZW50O2U/KHkodCx7b3BhY2l0eTpcIjBcIn0pLHdpbmRvdy5zZXRUaW1lb3V0KChmdW5jdGlvbigpe3RyeXtuLnJlbW92ZUNoaWxkKHQpfWNhdGNoKHQpe319KSw1MDApKTpuLnJlbW92ZUNoaWxkKHQpfX1mdW5jdGlvbiBldCh0LG8saSl7cmV0dXJuIHZvaWQgMD09PWkmJihpPSExKSxlKHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXt2YXIgZSxyLHMsYTtyZXR1cm4gbih0aGlzLChmdW5jdGlvbihuKXtzd2l0Y2gobi5sYWJlbCl7Y2FzZSAwOnJldHVybiBlPSEwLHZvaWQgMD09PXQuX2ludHJvQmVmb3JlRXhpdENhbGxiYWNrP1szLDJdOls0LHQuX2ludHJvQmVmb3JlRXhpdENhbGxiYWNrLmNhbGwodCxvKV07Y2FzZSAxOmU9bi5zZW50KCksbi5sYWJlbD0yO2Nhc2UgMjppZighaSYmITE9PT1lKXJldHVyblsyXTtpZigocj1BcnJheS5mcm9tKG8ucXVlcnlTZWxlY3RvckFsbChcIi5pbnRyb2pzLW92ZXJsYXlcIikpKSYmci5sZW5ndGgpZm9yKHM9MCxhPXI7czxhLmxlbmd0aDtzKyspdHQoYVtzXSk7cmV0dXJuIHR0KG8ucXVlcnlTZWxlY3RvcihcIi5pbnRyb2pzLWhlbHBlckxheWVyXCIpLCEwKSx0dChvLnF1ZXJ5U2VsZWN0b3IoXCIuaW50cm9qcy10b29sdGlwUmVmZXJlbmNlTGF5ZXJcIikpLHR0KG8ucXVlcnlTZWxlY3RvcihcIi5pbnRyb2pzLWRpc2FibGVJbnRlcmFjdGlvblwiKSksdHQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnRyb2pzRmxvYXRpbmdFbGVtZW50XCIpKSxBKCksbC5vZmYod2luZG93LFwia2V5ZG93blwiLFIsdCwhMCksbC5vZmYod2luZG93LFwicmVzaXplXCIsSyx0LCEwKSxjKHQuX2ludHJvRXhpdENhbGxiYWNrKT9bNCx0Ll9pbnRyb0V4aXRDYWxsYmFjay5jYWxsKHQpXTpbMyw0XTtjYXNlIDM6bi5zZW50KCksbi5sYWJlbD00O2Nhc2UgNDpyZXR1cm4gdC5fY3VycmVudFN0ZXA9LTEsWzJdfX0pKX0pKX1mdW5jdGlvbiBudCh0LG8pe3JldHVybiBlKHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXt2YXIgaTtyZXR1cm4gbih0aGlzLChmdW5jdGlvbihyKXtzd2l0Y2goci5sYWJlbCl7Y2FzZSAwOnJldHVybiB0LmlzQWN0aXZlKCk/Yyh0Ll9pbnRyb1N0YXJ0Q2FsbGJhY2spP1s0LHQuX2ludHJvU3RhcnRDYWxsYmFjay5jYWxsKHQsbyldOlszLDJdOlsyLCExXTtjYXNlIDE6ci5zZW50KCksci5sYWJlbD0yO2Nhc2UgMjpyZXR1cm4gMD09PShpPVoodCxvKSkubGVuZ3RoP1syLCExXToodC5faW50cm9JdGVtcz1pLGZ1bmN0aW9uKHQsbyl7dmFyIGk9dGhpcyxyPXgoXCJkaXZcIix7Y2xhc3NOYW1lOlwiaW50cm9qcy1vdmVybGF5XCJ9KTt5KHIse3RvcDowLGJvdHRvbTowLGxlZnQ6MCxyaWdodDowLHBvc2l0aW9uOlwiZml4ZWRcIn0pLG8uYXBwZW5kQ2hpbGQociksITA9PT10Ll9vcHRpb25zLmV4aXRPbk92ZXJsYXlDbGljayYmKHkocix7Y3Vyc29yOlwicG9pbnRlclwifSksci5vbmNsaWNrPWZ1bmN0aW9uKCl7cmV0dXJuIGUoaSx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3JldHVybiBuKHRoaXMsKGZ1bmN0aW9uKGUpe3N3aXRjaChlLmxhYmVsKXtjYXNlIDA6cmV0dXJuWzQsZXQodCxvKV07Y2FzZSAxOnJldHVybiBlLnNlbnQoKSxbMl19fSkpfSkpfSl9KHQsbyksWzQsQih0KV0pO2Nhc2UgMzpyLnNlbnQoKSxvLmFkZEV2ZW50TGlzdGVuZXIsdC5fb3B0aW9ucy5rZXlib2FyZE5hdmlnYXRpb24mJmwub24od2luZG93LFwia2V5ZG93blwiLFIsdCwhMCksbC5vbih3aW5kb3csXCJyZXNpemVcIixLLHQsITApLHIubGFiZWw9NDtjYXNlIDQ6cmV0dXJuWzIsITFdfX0pKX0pKX1mdW5jdGlvbiBvdCh0LGUsbil7cmV0dXJuIHRbZV09bix0fXZhciBpdD1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCl7dGhpcy5fY3VycmVudFN0ZXA9LTEsdGhpcy5faW50cm9JdGVtcz1bXSx0aGlzLl9oaW50SXRlbXM9W10sdGhpcy5fdGFyZ2V0RWxlbWVudD10LHRoaXMuX29wdGlvbnM9e3N0ZXBzOltdLGhpbnRzOltdLGlzQWN0aXZlOiEwLG5leHRMYWJlbDpcIk5leHRcIixwcmV2TGFiZWw6XCJCYWNrXCIsc2tpcExhYmVsOlwiw5dcIixkb25lTGFiZWw6XCJEb25lXCIsaGlkZVByZXY6ITEsaGlkZU5leHQ6ITEsbmV4dFRvRG9uZTohMCx0b29sdGlwUG9zaXRpb246XCJib3R0b21cIix0b29sdGlwQ2xhc3M6XCJcIixncm91cDpcIlwiLGhpZ2hsaWdodENsYXNzOlwiXCIsZXhpdE9uRXNjOiEwLGV4aXRPbk92ZXJsYXlDbGljazohMCxzaG93U3RlcE51bWJlcnM6ITEsc3RlcE51bWJlcnNPZkxhYmVsOlwib2ZcIixrZXlib2FyZE5hdmlnYXRpb246ITAsc2hvd0J1dHRvbnM6ITAsc2hvd0J1bGxldHM6ITAsc2hvd1Byb2dyZXNzOiExLHNjcm9sbFRvRWxlbWVudDohMCxzY3JvbGxUbzpcImVsZW1lbnRcIixzY3JvbGxQYWRkaW5nOjMwLG92ZXJsYXlPcGFjaXR5Oi41LGF1dG9Qb3NpdGlvbjohMCxwb3NpdGlvblByZWNlZGVuY2U6W1wiYm90dG9tXCIsXCJ0b3BcIixcInJpZ2h0XCIsXCJsZWZ0XCJdLGRpc2FibGVJbnRlcmFjdGlvbjohMSxkb250U2hvd0FnYWluOiExLGRvbnRTaG93QWdhaW5MYWJlbDpcIkRvbid0IHNob3cgdGhpcyBhZ2FpblwiLGRvbnRTaG93QWdhaW5Db29raWU6XCJpbnRyb2pzLWRvbnRTaG93QWdhaW5cIixkb250U2hvd0FnYWluQ29va2llRGF5czozNjUsaGVscGVyRWxlbWVudFBhZGRpbmc6MTAsaGludFBvc2l0aW9uOlwidG9wLW1pZGRsZVwiLGhpbnRCdXR0b25MYWJlbDpcIkdvdCBpdFwiLGhpbnRTaG93QnV0dG9uOiEwLGhpbnRBdXRvUmVmcmVzaEludGVydmFsOjEwLGhpbnRBbmltYXRpb246ITAsYnV0dG9uQ2xhc3M6XCJpbnRyb2pzLWJ1dHRvblwiLHByb2dyZXNzQmFyQWRkaXRpb25hbENsYXNzOiExfX1yZXR1cm4gdC5wcm90b3R5cGUuaXNBY3RpdmU9ZnVuY3Rpb24oKXtyZXR1cm4oIXRoaXMuX29wdGlvbnMuZG9udFNob3dBZ2Fpbnx8XCJcIj09PSh0PWkodGhpcy5fb3B0aW9ucy5kb250U2hvd0FnYWluQ29va2llKSl8fFwidHJ1ZVwiIT09dCkmJnRoaXMuX29wdGlvbnMuaXNBY3RpdmU7dmFyIHR9LHQucHJvdG90eXBlLmNsb25lPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyB0KHRoaXMuX3RhcmdldEVsZW1lbnQpfSx0LnByb3RvdHlwZS5zZXRPcHRpb249ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5fb3B0aW9ucz1vdCh0aGlzLl9vcHRpb25zLHQsZSksdGhpc30sdC5wcm90b3R5cGUuc2V0T3B0aW9ucz1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fb3B0aW9ucz1mdW5jdGlvbih0LGUpe2Zvcih2YXIgbj0wLG89T2JqZWN0LmVudHJpZXMoZSk7bjxvLmxlbmd0aDtuKyspe3ZhciBpPW9bbl07dD1vdCh0LGlbMF0saVsxXSl9cmV0dXJuIHR9KHRoaXMuX29wdGlvbnMsdCksdGhpc30sdC5wcm90b3R5cGUuc3RhcnQ9ZnVuY3Rpb24oKXtyZXR1cm4gZSh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKCl7cmV0dXJuIG4odGhpcywoZnVuY3Rpb24odCl7c3dpdGNoKHQubGFiZWwpe2Nhc2UgMDpyZXR1cm5bNCxudCh0aGlzLHRoaXMuX3RhcmdldEVsZW1lbnQpXTtjYXNlIDE6cmV0dXJuIHQuc2VudCgpLFsyLHRoaXNdfX0pKX0pKX0sdC5wcm90b3R5cGUuZ29Ub1N0ZXA9ZnVuY3Rpb24odCl7cmV0dXJuIGUodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3JldHVybiBuKHRoaXMsKGZ1bmN0aW9uKGUpe3N3aXRjaChlLmxhYmVsKXtjYXNlIDA6cmV0dXJuWzQsUCh0aGlzLHQpXTtjYXNlIDE6cmV0dXJuIGUuc2VudCgpLFsyLHRoaXNdfX0pKX0pKX0sdC5wcm90b3R5cGUuYWRkU3RlcD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fb3B0aW9ucy5zdGVwc3x8KHRoaXMuX29wdGlvbnMuc3RlcHM9W10pLHRoaXMuX29wdGlvbnMuc3RlcHMucHVzaCh0KSx0aGlzfSx0LnByb3RvdHlwZS5hZGRTdGVwcz1mdW5jdGlvbih0KXtpZighdC5sZW5ndGgpcmV0dXJuIHRoaXM7Zm9yKHZhciBlPTA7ZTx0Lmxlbmd0aDtlKyspdGhpcy5hZGRTdGVwKHRbZV0pO3JldHVybiB0aGlzfSx0LnByb3RvdHlwZS5nb1RvU3RlcE51bWJlcj1mdW5jdGlvbih0KXtyZXR1cm4gZSh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKCl7cmV0dXJuIG4odGhpcywoZnVuY3Rpb24oZSl7c3dpdGNoKGUubGFiZWwpe2Nhc2UgMDpyZXR1cm5bNCxxKHRoaXMsdCldO2Nhc2UgMTpyZXR1cm4gZS5zZW50KCksWzIsdGhpc119fSkpfSkpfSx0LnByb3RvdHlwZS5uZXh0U3RlcD1mdW5jdGlvbigpe3JldHVybiBlKHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXtyZXR1cm4gbih0aGlzLChmdW5jdGlvbih0KXtzd2l0Y2godC5sYWJlbCl7Y2FzZSAwOnJldHVybls0LEIodGhpcyldO2Nhc2UgMTpyZXR1cm4gdC5zZW50KCksWzIsdGhpc119fSkpfSkpfSx0LnByb3RvdHlwZS5wcmV2aW91c1N0ZXA9ZnVuY3Rpb24oKXtyZXR1cm4gZSh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKCl7cmV0dXJuIG4odGhpcywoZnVuY3Rpb24odCl7c3dpdGNoKHQubGFiZWwpe2Nhc2UgMDpyZXR1cm5bNCxIKHRoaXMpXTtjYXNlIDE6cmV0dXJuIHQuc2VudCgpLFsyLHRoaXNdfX0pKX0pKX0sdC5wcm90b3R5cGUuY3VycmVudFN0ZXA9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fY3VycmVudFN0ZXB9LHQucHJvdG90eXBlLmV4aXQ9ZnVuY3Rpb24odCl7cmV0dXJuIGUodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3JldHVybiBuKHRoaXMsKGZ1bmN0aW9uKGUpe3N3aXRjaChlLmxhYmVsKXtjYXNlIDA6cmV0dXJuWzQsZXQodGhpcyx0aGlzLl90YXJnZXRFbGVtZW50LHQpXTtjYXNlIDE6cmV0dXJuIGUuc2VudCgpLFsyLHRoaXNdfX0pKX0pKX0sdC5wcm90b3R5cGUucmVmcmVzaD1mdW5jdGlvbih0KXtyZXR1cm4gSih0aGlzLHQpLHRoaXN9LHQucHJvdG90eXBlLnNldERvbnRTaG93QWdhaW49ZnVuY3Rpb24odCl7cmV0dXJuIHIodGhpcyx0KSx0aGlzfSx0LnByb3RvdHlwZS5vbmJlZm9yZWNoYW5nZT1mdW5jdGlvbih0KXtpZighYyh0KSl0aHJvdyBuZXcgRXJyb3IoXCJQcm92aWRlZCBjYWxsYmFjayBmb3Igb25iZWZvcmVjaGFuZ2Ugd2FzIG5vdCBhIGZ1bmN0aW9uXCIpO3JldHVybiB0aGlzLl9pbnRyb0JlZm9yZUNoYW5nZUNhbGxiYWNrPXQsdGhpc30sdC5wcm90b3R5cGUub25jaGFuZ2U9ZnVuY3Rpb24odCl7aWYoIWModCkpdGhyb3cgbmV3IEVycm9yKFwiUHJvdmlkZWQgY2FsbGJhY2sgZm9yIG9uY2hhbmdlIHdhcyBub3QgYSBmdW5jdGlvbi5cIik7cmV0dXJuIHRoaXMuX2ludHJvQ2hhbmdlQ2FsbGJhY2s9dCx0aGlzfSx0LnByb3RvdHlwZS5vbmFmdGVyY2hhbmdlPWZ1bmN0aW9uKHQpe2lmKCFjKHQpKXRocm93IG5ldyBFcnJvcihcIlByb3ZpZGVkIGNhbGxiYWNrIGZvciBvbmFmdGVyY2hhbmdlIHdhcyBub3QgYSBmdW5jdGlvblwiKTtyZXR1cm4gdGhpcy5faW50cm9BZnRlckNoYW5nZUNhbGxiYWNrPXQsdGhpc30sdC5wcm90b3R5cGUub25jb21wbGV0ZT1mdW5jdGlvbih0KXtpZighYyh0KSl0aHJvdyBuZXcgRXJyb3IoXCJQcm92aWRlZCBjYWxsYmFjayBmb3Igb25jb21wbGV0ZSB3YXMgbm90IGEgZnVuY3Rpb24uXCIpO3JldHVybiB0aGlzLl9pbnRyb0NvbXBsZXRlQ2FsbGJhY2s9dCx0aGlzfSx0LnByb3RvdHlwZS5vbmhpbnRzYWRkZWQ9ZnVuY3Rpb24odCl7aWYoIWModCkpdGhyb3cgbmV3IEVycm9yKFwiUHJvdmlkZWQgY2FsbGJhY2sgZm9yIG9uaGludHNhZGRlZCB3YXMgbm90IGEgZnVuY3Rpb24uXCIpO3JldHVybiB0aGlzLl9oaW50c0FkZGVkQ2FsbGJhY2s9dCx0aGlzfSx0LnByb3RvdHlwZS5vbmhpbnRjbGljaz1mdW5jdGlvbih0KXtpZighYyh0KSl0aHJvdyBuZXcgRXJyb3IoXCJQcm92aWRlZCBjYWxsYmFjayBmb3Igb25oaW50Y2xpY2sgd2FzIG5vdCBhIGZ1bmN0aW9uLlwiKTtyZXR1cm4gdGhpcy5faGludENsaWNrQ2FsbGJhY2s9dCx0aGlzfSx0LnByb3RvdHlwZS5vbmhpbnRjbG9zZT1mdW5jdGlvbih0KXtpZighYyh0KSl0aHJvdyBuZXcgRXJyb3IoXCJQcm92aWRlZCBjYWxsYmFjayBmb3Igb25oaW50Y2xvc2Ugd2FzIG5vdCBhIGZ1bmN0aW9uLlwiKTtyZXR1cm4gdGhpcy5faGludENsb3NlQ2FsbGJhY2s9dCx0aGlzfSx0LnByb3RvdHlwZS5vbnN0YXJ0PWZ1bmN0aW9uKHQpe2lmKCFjKHQpKXRocm93IG5ldyBFcnJvcihcIlByb3ZpZGVkIGNhbGxiYWNrIGZvciBvbnN0YXJ0IHdhcyBub3QgYSBmdW5jdGlvbi5cIik7cmV0dXJuIHRoaXMuX2ludHJvU3RhcnRDYWxsYmFjaz10LHRoaXN9LHQucHJvdG90eXBlLm9uZXhpdD1mdW5jdGlvbih0KXtpZighYyh0KSl0aHJvdyBuZXcgRXJyb3IoXCJQcm92aWRlZCBjYWxsYmFjayBmb3Igb25leGl0IHdhcyBub3QgYSBmdW5jdGlvbi5cIik7cmV0dXJuIHRoaXMuX2ludHJvRXhpdENhbGxiYWNrPXQsdGhpc30sdC5wcm90b3R5cGUub25za2lwPWZ1bmN0aW9uKHQpe2lmKCFjKHQpKXRocm93IG5ldyBFcnJvcihcIlByb3ZpZGVkIGNhbGxiYWNrIGZvciBvbnNraXAgd2FzIG5vdCBhIGZ1bmN0aW9uLlwiKTtyZXR1cm4gdGhpcy5faW50cm9Ta2lwQ2FsbGJhY2s9dCx0aGlzfSx0LnByb3RvdHlwZS5vbmJlZm9yZWV4aXQ9ZnVuY3Rpb24odCl7aWYoIWModCkpdGhyb3cgbmV3IEVycm9yKFwiUHJvdmlkZWQgY2FsbGJhY2sgZm9yIG9uYmVmb3JlZXhpdCB3YXMgbm90IGEgZnVuY3Rpb24uXCIpO3JldHVybiB0aGlzLl9pbnRyb0JlZm9yZUV4aXRDYWxsYmFjaz10LHRoaXN9LHQucHJvdG90eXBlLmFkZEhpbnRzPWZ1bmN0aW9uKCl7cmV0dXJuIGUodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3JldHVybiBuKHRoaXMsKGZ1bmN0aW9uKHQpe3N3aXRjaCh0LmxhYmVsKXtjYXNlIDA6cmV0dXJuWzQsJCh0aGlzLHRoaXMuX3RhcmdldEVsZW1lbnQpXTtjYXNlIDE6cmV0dXJuIHQuc2VudCgpLFsyLHRoaXNdfX0pKX0pKX0sdC5wcm90b3R5cGUuaGlkZUhpbnQ9ZnVuY3Rpb24odCl7cmV0dXJuIGUodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3JldHVybiBuKHRoaXMsKGZ1bmN0aW9uKGUpe3N3aXRjaChlLmxhYmVsKXtjYXNlIDA6cmV0dXJuWzQsRCh0aGlzLHQpXTtjYXNlIDE6cmV0dXJuIGUuc2VudCgpLFsyLHRoaXNdfX0pKX0pKX0sdC5wcm90b3R5cGUuaGlkZUhpbnRzPWZ1bmN0aW9uKCl7cmV0dXJuIGUodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3JldHVybiBuKHRoaXMsKGZ1bmN0aW9uKHQpe3N3aXRjaCh0LmxhYmVsKXtjYXNlIDA6cmV0dXJuWzQsRih0aGlzKV07Y2FzZSAxOnJldHVybiB0LnNlbnQoKSxbMix0aGlzXX19KSl9KSl9LHQucHJvdG90eXBlLnNob3dIaW50PWZ1bmN0aW9uKHQpe3JldHVybiB6KHQpLHRoaXN9LHQucHJvdG90eXBlLnNob3dIaW50cz1mdW5jdGlvbigpe3JldHVybiBlKHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXtyZXR1cm4gbih0aGlzLChmdW5jdGlvbih0KXtzd2l0Y2godC5sYWJlbCl7Y2FzZSAwOnJldHVybls0LFYodGhpcyldO2Nhc2UgMTpyZXR1cm4gdC5zZW50KCksWzIsdGhpc119fSkpfSkpfSx0LnByb3RvdHlwZS5yZW1vdmVIaW50cz1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbih0KXtmb3IodmFyIGU9MCxuPU0oXCIuaW50cm9qcy1oaW50XCIpO2U8bi5sZW5ndGg7ZSsrKXt2YXIgbz1uW2VdLmdldEF0dHJpYnV0ZShcImRhdGEtc3RlcFwiKTtvJiZHKHBhcnNlSW50KG8sMTApKX1sLm9mZihkb2N1bWVudCxcImNsaWNrXCIsWSx0LCExKSxsLm9mZih3aW5kb3csXCJyZXNpemVcIixVLHQsITApLHQuX2hpbnRzQXV0b1JlZnJlc2hGdW5jdGlvbiYmbC5vZmYod2luZG93LFwic2Nyb2xsXCIsdC5faGludHNBdXRvUmVmcmVzaEZ1bmN0aW9uLHQsITApfSh0aGlzKSx0aGlzfSx0LnByb3RvdHlwZS5yZW1vdmVIaW50PWZ1bmN0aW9uKHQpe3JldHVybiBHKHQpLHRoaXN9LHQucHJvdG90eXBlLnNob3dIaW50RGlhbG9nPWZ1bmN0aW9uKHQpe3JldHVybiBlKHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXtyZXR1cm4gbih0aGlzLChmdW5jdGlvbihlKXtzd2l0Y2goZS5sYWJlbCl7Y2FzZSAwOnJldHVybls0LFgodGhpcyx0KV07Y2FzZSAxOnJldHVybiBlLnNlbnQoKSxbMix0aGlzXX19KSl9KSl9LHR9KCkscnQ9ZnVuY3Rpb24gZShuKXt2YXIgbztpZihcIm9iamVjdFwiPT09dChuKSlvPW5ldyBpdChuKTtlbHNlIGlmKFwic3RyaW5nXCI9PXR5cGVvZiBuKXt2YXIgaT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKG4pO2lmKCFpKXRocm93IG5ldyBFcnJvcihcIlRoZXJlIGlzIG5vIGVsZW1lbnQgd2l0aCBnaXZlbiBzZWxlY3Rvci5cIik7bz1uZXcgaXQoaSl9ZWxzZSBvPW5ldyBpdChkb2N1bWVudC5ib2R5KTtyZXR1cm4gZS5pbnN0YW5jZXNbYShvLFwiaW50cm9qcy1pbnN0YW5jZVwiKV09byxvfTtydC52ZXJzaW9uPVwiNy4yLjBcIixydC5pbnN0YW5jZXM9e307ZXhwb3J0e3J0IGFzIGRlZmF1bHR9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW50cm8ubW9kdWxlLmpzLm1hcFxuIiwiaW1wb3J0IEdyb3VwT2ZHcm91cHMgZnJvbSBcIi4vR3JvdXBPZkdyb3Vwc1wiO1xuY2xhc3MgQXJjYWRlIGV4dGVuZHMgR3JvdXBPZkdyb3VwcyB7XG4gICAgY29uc3RydWN0b3Ioc2Vzc2lvbk1pbnV0ZXMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zZXNzaW9uTVMgPSBzZXNzaW9uTWludXRlcyAqIDYwICogMTAwMDtcbiAgICB9XG4gICAgO1xufVxuO1xuY29uc3QgQXJjYWRlSW5zdGFuY2UgPSBuZXcgQXJjYWRlKDUpO1xuZXhwb3J0IGRlZmF1bHQgQXJjYWRlSW5zdGFuY2U7XG4iLCJpbXBvcnQgUFMgZnJvbSBcIi4vUHViU3ViXCI7XG5pbXBvcnQgZ2V0Q29pbnMgZnJvbSBcIi4uL3N0b3JhZ2UvZ2V0Q29pbnNcIjtcbmltcG9ydCBTaW5nbGV0b24gZnJvbSBcIi4vU2luZ2xldG9uXCI7XG5pbXBvcnQgUFNFIGZyb20gXCIuLi9lbnVtcy9QdWJTdWJFdmVudHNcIjtcbmNsYXNzIEJhbmsgZXh0ZW5kcyBTaW5nbGV0b24ge1xuICAgIGNvbnN0cnVjdG9yKGNvaW5zKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY29pbnMgPSBjb2lucztcbiAgICB9XG4gICAgO1xuICAgIGRlcG9zaXQoYW1vdW50KSB7XG4gICAgICAgIGlmIChhbW91bnQgPCAwKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVmFsdWUgZXJyb3I6IGFtb3VudCB0byBkZXBvc2l0IGNhbiBub3QgYmUgbmVnYXRpdmUhXCIpO1xuICAgICAgICB0aGlzLmNvaW5zICs9IGFtb3VudDtcbiAgICAgICAgdGhpcy5kZXBvc2l0TWVzc2FnZShhbW91bnQpO1xuICAgICAgICB0aGlzLnN0b3JlKCk7XG4gICAgfVxuICAgIDtcbiAgICBkZWR1Y3QoYW1vdW50KSB7XG4gICAgICAgIGNvbnN0IGRlZHVjdGlibGUgPSAodGhpcy5jb2lucyAtIGFtb3VudCkgPj0gMDtcbiAgICAgICAgaWYgKGRlZHVjdGlibGUpIHtcbiAgICAgICAgICAgIHRoaXMuY29pbnMgLT0gYW1vdW50O1xuICAgICAgICAgICAgdGhpcy5kZWR1Y3RNZXNzYWdlKGFtb3VudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVuZGV0dWN0aWJsZU1lc3NhZ2UoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0b3JlKCk7XG4gICAgICAgIHJldHVybiBkZWR1Y3RpYmxlO1xuICAgIH1cbiAgICA7XG4gICAgc2hvd0JhbGFuY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvaW5zO1xuICAgIH1cbiAgICA7XG4gICAgZGVwb3NpdE1lc3NhZ2UoYW1vdW50KSB7XG4gICAgICAgIFBTLnB1Ymxpc2goUFNFLlBvc3RNZXNzYWdlLCBgWWF5ISBZb3UgZWFybmVkICR7YW1vdW50fSBjb2lucy4gVG90YWwgY29pbnM6ICAke3RoaXMuc2hvd0JhbGFuY2UoKX1gKTtcbiAgICB9XG4gICAgO1xuICAgIGRlZHVjdE1lc3NhZ2UoYW1vdW50KSB7XG4gICAgICAgIFBTLnB1Ymxpc2goUFNFLlBvc3RNZXNzYWdlLCBgWW91IGxvc3QgJHthbW91bnR9IGNvaW5zLiBCYWxhbmNlOiAke3RoaXMuc2hvd0JhbGFuY2UoKX1gKTtcbiAgICB9XG4gICAgO1xuICAgIHVuZGV0dWN0aWJsZU1lc3NhZ2UoKSB7XG4gICAgICAgIFBTLnB1Ymxpc2goUFNFLlBvc3RNZXNzYWdlLCBcIkVycm9yISBDb2lucyB0byBmZXcgdG8gc3VidHJhY3QgZnJvbS5cIik7XG4gICAgfVxuICAgIDtcbiAgICBzdG9yZSgpIHtcbiAgICAgICAgUFMucHVibGlzaChQU0UuUHV0Q29pbnMsIHRoaXMuY29pbnMpO1xuICAgIH1cbiAgICA7XG59XG47XG5jb25zdCBCYW5rSW5zdGFuY2UgPSBuZXcgQmFuayhnZXRDb2lucygpKTtcbmV4cG9ydCBkZWZhdWx0IEJhbmtJbnN0YW5jZTtcbiIsImltcG9ydCBHcm91cE9mR3JvdXBzIGZyb20gXCIuL0dyb3VwT2ZHcm91cHNcIjtcbmNsYXNzIENhdGVnb3JpZXMgZXh0ZW5kcyBHcm91cE9mR3JvdXBzIHtcbn1cbjtcbmNvbnN0IENhdGVnb3JpZXNJbnN0YW5jZSA9IG5ldyBDYXRlZ29yaWVzKCk7XG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yaWVzSW5zdGFuY2U7XG4iLCJpbXBvcnQgUFMgZnJvbSBcIi4vUHViU3ViXCI7XG5pbXBvcnQgQ2F0ZWdvcmllcyBmcm9tIFwiLi9DYXRlZ29yaWVzXCI7XG5pbXBvcnQgR3JvdXAgZnJvbSBcIi4vR3JvdXBcIjtcbmltcG9ydCBQcm9qZWN0c0luc3RhbmNlIGZyb20gXCIuL1Byb2plY3RzXCI7XG5pbXBvcnQgUFNFIGZyb20gXCIuLi9lbnVtcy9QdWJTdWJFdmVudHNcIjtcbmNsYXNzIENhdGVnb3J5IGV4dGVuZHMgR3JvdXAge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGZpbHRlckZ1bmN0aW9uLCBpY29uKSB7XG4gICAgICAgIHN1cGVyKG5hbWUsIGljb24pO1xuICAgICAgICB0aGlzLmZpbHRlckZ1bmN0aW9uID0gZmlsdGVyRnVuY3Rpb247XG4gICAgICAgIHRoaXMudXBkYXRlQ2F0ZWdvcnkoUHJvamVjdHNJbnN0YW5jZS5nZXRBbGxUb0RvcygpKTtcbiAgICAgICAgQ2F0ZWdvcmllcy5hZGQodGhpcyk7XG4gICAgICAgIFBTLnB1Ymxpc2goUFNFLlBvc3RDYXRlZ29yeSwgdGhpcy5JRCk7XG4gICAgICAgIFBTLnN1YnNjcmliZShQU0UuUHV0VG9EbywgdGhpcy51cGRhdGVDYXRlZ29yeS5iaW5kKHRoaXMpKTtcbiAgICAgICAgUFMuc3Vic2NyaWJlKFBTRS5EZWxldGVUb0RvLCB0aGlzLnJlbW92ZVRvRG8uYmluZCh0aGlzKSk7XG4gICAgICAgIFBTLnN1YnNjcmliZShQU0UuRGVsZXRlUHJvamVjdCwgdGhpcy5yZW1vdmVQcm9qZWN0LmJpbmQodGhpcykpO1xuICAgIH1cbiAgICA7XG4gICAgdXBkYXRlQ2F0ZWdvcnkobmV3VG9Eb3MpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG5ld1RvRG9zKSlcbiAgICAgICAgICAgIG5ld1RvRG9zID0gW25ld1RvRG9zXTtcbiAgICAgICAgaWYgKG5ld1RvRG9zLnNvbWUobnQgPT4gdGhpcy50b0Rvcy5zb21lKHQgPT4gdC5JRCA9PT0gbnQuSUQpKSlcbiAgICAgICAgICAgIHJldHVybjsgLy8gVGhlIGFkdmFudGFnZSBvZiBpZGVtcG90ZW5jeSBvdXR3ZWlnaHMgdGhlIGRpc2FkdmFudGFnZSBvZiBhbiBuIF4gMiB0aW1lIGNvbXBsZXhpdHkuXG4gICAgICAgIGNvbnN0IGJlZm9yZSA9IHRoaXMubCgpO1xuICAgICAgICB0aGlzLnRvRG9zID0gdGhpcy5maWx0ZXJGdW5jdGlvbihbLi4udGhpcy50b0RvcywgLi4ubmV3VG9Eb3NdKTtcbiAgICAgICAgdGhpcy5zb3J0KCk7XG4gICAgICAgIHRoaXMudXBkYXRlQ291bnRlcihiZWZvcmUsIHRoaXMubCgpKTtcbiAgICB9XG4gICAgO1xuICAgIHJlbW92ZVRvRG8odG9Eb1RvRGVsZXRlSUQpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnRvRG9zLmZpbmRJbmRleCh0ID0+IHQuSUQgPT0gdG9Eb1RvRGVsZXRlSUQpO1xuICAgICAgICBpZiAoaW5kZXggPCAwKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLnRvRG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHRoaXMudXBkYXRlQ291bnRlcigxLCAwKTtcbiAgICB9XG4gICAgO1xuICAgIHJlbW92ZVByb2plY3QoZGVsZXRpb25JZCkge1xuICAgICAgICBjb25zdCBiZWZvcmUgPSB0aGlzLmwoKTtcbiAgICAgICAgdGhpcy50b0RvcyA9IHRoaXMudG9Eb3MuZmlsdGVyKHRvZG8gPT4gdG9kby5wYXJlbnRJRCAhPT0gZGVsZXRpb25JZCk7XG4gICAgICAgIHRoaXMudXBkYXRlQ291bnRlcihiZWZvcmUsIHRoaXMubCgpKTtcbiAgICB9XG4gICAgO1xuICAgIGwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvRG9zLmxlbmd0aDsgLy8gSSdtIHRvbyBsYXp5IHRvIHJlYWQvdHlwZSB0aGlzIG92ZXIgYW5kIG92ZXIgYWdhaW4uXG4gICAgfVxuICAgIDtcbiAgICB1cGRhdGVDb3VudGVyKGJlZm9yZUNvdW50LCBhZnRlckNvdW50KSB7XG4gICAgICAgIGlmIChiZWZvcmVDb3VudCAhPT0gYWZ0ZXJDb3VudCkge1xuICAgICAgICAgICAgUFMucHVibGlzaChQU0UuUG9zdEdyb3VwQ291bnQsIHtcbiAgICAgICAgICAgICAgICBncm91cElEOiB0aGlzLklELFxuICAgICAgICAgICAgICAgIGludGVnZXJUb0FkZDogYWZ0ZXJDb3VudCAtIGJlZm9yZUNvdW50XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICA7XG4gICAgc29ydCgpIHtcbiAgICAgICAgdGhpcy50b0RvcyA9IHRoaXMudG9Eb3Muc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgaWYgKGEucHJpb3JpdHkgPT09IGIucHJpb3JpdHkpIHtcbiAgICAgICAgICAgICAgICAvLyBzb3J0IGJ5IGRhdGUgKGVhcmxpZXN0IHRvIGxhdGVzdClcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5kdWVEYXRlLmdldFRpbWUoKSAtIGIuZHVlRGF0ZS5nZXRUaW1lKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAvLyBzb3J0IGJ5IHByaW9yaXR5IChoaWdoIHRvIGxvdylcbiAgICAgICAgICAgIHJldHVybiBiLnByaW9yaXR5IC0gYS5wcmlvcml0eTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIDtcbn1cbjtcbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5O1xuIiwiaW1wb3J0IGVuZHNXaXRoSW1hZ2VGaWxlRXh0ZW5zaW9uIGZyb20gXCIuLi9yZWdleC9lbmRzV2l0aEltYWdlRmlsZUV4dGVuc2lvblwiO1xuaW1wb3J0IHN0YXJ0c1dpdGhIVFRQUyBmcm9tIFwiLi4vcmVnZXgvc3RhcnRzV2l0aEhUVFBTXCI7XG5pbXBvcnQgQXJjYWRlIGZyb20gXCIuL0FyY2FkZVwiO1xuaW1wb3J0IElEZWQgZnJvbSBcIi4vSURlZFwiO1xuY2xhc3MgR2FtZSBleHRlbmRzIElEZWQge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHRodW1ibmFpbFVSTCwgbGluaywgY29zdCkge1xuICAgICAgICBpZiAoIWVuZHNXaXRoSW1hZ2VGaWxlRXh0ZW5zaW9uLnRlc3QodGh1bWJuYWlsVVJMKSlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRodW1ibmFpbFVSTCBtdXN0IGVuZCB3aXRoIGltYWdlIGZpbGUgZXh0ZW5zaW9uLlwiKTtcbiAgICAgICAgaWYgKCFzdGFydHNXaXRoSFRUUFMudGVzdChsaW5rKSlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImxpbmsgbXVzdCBzdGFydCB3aXRoICdodHRwczovLycuXCIpO1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnRodW1ibmFpbFVSTCA9IHRodW1ibmFpbFVSTDtcbiAgICAgICAgdGhpcy5saW5rID0gbGluaztcbiAgICAgICAgdGhpcy5jb3N0ID0gY29zdDtcbiAgICAgICAgQXJjYWRlLmFkZCh0aGlzKTtcbiAgICB9XG4gICAgO1xufVxuO1xuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiIsImltcG9ydCBJRGVkIGZyb20gXCIuL0lEZWRcIjtcbmNsYXNzIEdyb3VwIGV4dGVuZHMgSURlZCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgaWNvbiA9IFwiYmktY2FsZW5kYXItZmlsbFwiLCB0b0RvcyA9IFtdLCBpZCkge1xuICAgICAgICBzdXBlcihpZCk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuaWNvbiA9IGljb247XG4gICAgICAgIHRoaXMudG9Eb3MgPSB0b0RvcztcbiAgICB9XG4gICAgO1xufVxuO1xuZXhwb3J0IGRlZmF1bHQgR3JvdXA7XG4iLCJpbXBvcnQgU2luZ2xldG9uIGZyb20gXCIuL1NpbmdsZXRvblwiO1xuY2xhc3MgR3JvdXBPZkdyb3VwcyBleHRlbmRzIFNpbmdsZXRvbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuZ3JvdXBzID0gW107XG4gICAgfVxuICAgIGFkZChncm91cCkge1xuICAgICAgICB0aGlzLmdyb3Vwcy5wdXNoKGdyb3VwKTtcbiAgICB9XG4gICAgO1xuICAgIGdldChncm91cElEKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5KHAgPT4gcC5JRCA9PT0gZ3JvdXBJRCk7XG4gICAgfVxuICAgIDtcbiAgICBxdWVyeShjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gdGhpcy5ncm91cHMuZmluZChjYWxsYmFjayk7XG4gICAgfVxuICAgIDtcbiAgICBnZXRBbGwoKSB7XG4gICAgICAgIC8vIEkgd291bGQgaWRlYWxseSB1c2Ugc3RydWN0dXJlZENsb25lIHRvIG1ha2UgYSBkZWVwIGNsb25lLlxuICAgICAgICAvLyBCdXQgdGhhdCBpcyBub3QgaW1wbGVtZW50ZWQgaW4gamVzdC1kb20tZW52aXJvbm1lbnQsIHdoaWNoIEkgYW0gdXNpbmcgZm9yIHRlc3RzLlxuICAgICAgICByZXR1cm4gWy4uLnRoaXMuZ3JvdXBzXTtcbiAgICB9XG59XG47XG5leHBvcnQgZGVmYXVsdCBHcm91cE9mR3JvdXBzO1xuIiwiaW1wb3J0IGlzVVVJRCBmcm9tIFwiLi4vZnVuY3Rpb25zL2lzVVVJRFwiO1xuaW1wb3J0IHsgdjQgfSBmcm9tIFwidXVpZFwiO1xuY2xhc3MgSURlZCB7XG4gICAgY29uc3RydWN0b3IocHJlc2V0SUQpIHtcbiAgICAgICAgaWYgKHByZXNldElEICYmIGlzVVVJRChwcmVzZXRJRCkpIHtcbiAgICAgICAgICAgIHRoaXMuSUQgPSBwcmVzZXRJRDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuSUQgPSB2NCgpO1xuICAgICAgICB9XG4gICAgICAgIDtcbiAgICB9XG4gICAgO1xufVxuO1xuZXhwb3J0IGRlZmF1bHQgSURlZDtcbiIsImltcG9ydCBQcm9qZWN0cyBmcm9tIFwiLi4vY2xhc3Nlcy9Qcm9qZWN0c1wiO1xuaW1wb3J0IFBTIGZyb20gXCIuL1B1YlN1YlwiO1xuaW1wb3J0IEdyb3VwIGZyb20gXCIuL0dyb3VwXCI7XG5pbXBvcnQgUFNFIGZyb20gXCIuLi9lbnVtcy9QdWJTdWJFdmVudHNcIjtcbmNsYXNzIFByb2plY3QgZXh0ZW5kcyBHcm91cCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgaW5pdGlhbFRvRG9zLCBpY29uLCBpZCkge1xuICAgICAgICBzdXBlcihuYW1lLCBpY29uLCBbXSwgaWQpO1xuICAgICAgICBQcm9qZWN0cy5hZGQodGhpcyk7XG4gICAgICAgIFBTLnB1Ymxpc2goUFNFLlB1dFByb2plY3QsIHRoaXMuSUQpO1xuICAgICAgICBQUy5zdWJzY3JpYmUoUFNFLkRlbGV0ZVRvRG8sIHRoaXMuZGVsZXRlVG9Eby5iaW5kKHRoaXMpKTtcbiAgICAgICAgaWYgKGluaXRpYWxUb0Rvcykge1xuICAgICAgICAgICAgaW5pdGlhbFRvRG9zLmZvckVhY2goaW5pdGlhbFRvRG8gPT4gdGhpcy5hZGRUb0RvKGluaXRpYWxUb0RvKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyB0aGlzLmFkZFRvRG8gaW5jbHVkZXMgcHVibGlzaGluZyB0aGUgUHV0UHJvamVjdERhdGEgZXZlbnQsIHdoaWNoIGxlYWRzIHRvIHRoZSBkYXRhIGJlaW5nIHN0b3JlZC5cbiAgICAgICAgICAgIC8vIEJ1dCwgZXZlbiBpZiBhIHByb2plY3QgaXMgZW1wdHksIGl0IHN0aWxsIG5lZWRzIHRvIGJlIHN0b3JlZC5cbiAgICAgICAgICAgIFBTLnB1Ymxpc2goUFNFLlB1dFByb2plY3REYXRhKTtcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgfVxuICAgIDtcbiAgICBjaGFuZ2VOYW1lKG5ld05hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgICAgICAgUFMucHVibGlzaChQU0UuUHV0UHJvamVjdCwgdGhpcy5JRCk7XG4gICAgICAgIFBTLnB1Ymxpc2goUFNFLlB1dFByb2plY3REYXRhKTtcbiAgICB9XG4gICAgO1xuICAgIGFkZFRvRG8odG9EbywgbW92ZU9wZXJhdGlvbiA9IGZhbHNlKSB7XG4gICAgICAgIGlmICh0aGlzLnRvRG9zLnNvbWUodCA9PiB0LklEID09PSB0b0RvLklEKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdG9Eby51cGRhdGVQcm9wZXJ0aWVzKHsgcGFyZW50SUQ6IHRoaXMuSUQgfSwgZmFsc2UpO1xuICAgICAgICB0aGlzLnRvRG9zLnB1c2godG9Ebyk7XG4gICAgICAgIGlmICghbW92ZU9wZXJhdGlvbilcbiAgICAgICAgICAgIFBTLnB1Ymxpc2goUFNFLlB1dFRvRG8sIHRvRG8pO1xuICAgICAgICBQUy5wdWJsaXNoKFBTRS5Qb3N0R3JvdXBDb3VudCwge1xuICAgICAgICAgICAgZ3JvdXBJRDogdGhpcy5JRCxcbiAgICAgICAgICAgIGludGVnZXJUb0FkZDogMVxuICAgICAgICB9KTtcbiAgICAgICAgUFMucHVibGlzaChQU0UuUHV0UHJvamVjdERhdGEpO1xuICAgIH1cbiAgICA7XG4gICAgdGFrZVRvRG9Gcm9tQW5vdGhlcih0b0RvVG9UYWtlKSB7XG4gICAgICAgIGNvbnN0IHsgcGFyZW50SUQgfSA9IHRvRG9Ub1Rha2U7XG4gICAgICAgIGlmICh0aGlzLklEID09PSBwYXJlbnRJRClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxIb2xkZXIgPSBQcm9qZWN0cy5xdWVyeShwcm9qZWN0ID0+IHByb2plY3QuSUQgPT09IHBhcmVudElEKTtcbiAgICAgICAgb3JpZ2luYWxIb2xkZXIuZGVsZXRlVG9Ebyh0b0RvVG9UYWtlLklELCB0cnVlKTtcbiAgICAgICAgdGhpcy5hZGRUb0RvKHRvRG9Ub1Rha2UsIHRydWUpO1xuICAgIH1cbiAgICA7XG4gICAgLy8gSSB0aGluayBkZXJlZmVyZW5jaW5nIGEgVG9EbyBmcm9tIHRoaXMudG9Eb3MgYXJyYXkgbWFrZXMgaXQgdW5yZWFjaGFibGUuIFxuICAgIC8vIChVbmxlc3MgYW5vdGhlciBpbnN0YW5jZSByZWZlcmVuY2VzIGl0LCBvZiBjb3Vyc2UuKVxuICAgIC8vIFNvIHRoZSBnYXJiYWdlIGNvbGxlY3RvciBzaG91bGQgZXZlbnR1YWxseSBmcmVlIHVwIHRoZSBtZW1vcnkgdGFrZW4gYnkgdGhlIFwiZGVsZXRlZFwiIFRvRG8uXG4gICAgZGVsZXRlVG9Ebyh0b0RvSUQsIG1vdmVPcGVyYXRpb24gPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMudG9Eb3MuZmluZEluZGV4KHQgPT4gdC5JRCA9PSB0b0RvSUQpO1xuICAgICAgICBpZiAoaW5kZXggPCAwKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBkZWxldGlvbiA9IHRoaXMudG9Eb3Muc3BsaWNlKGluZGV4LCAxKVswXTtcbiAgICAgICAgaWYgKG1vdmVPcGVyYXRpb24pIHtcbiAgICAgICAgICAgIFBTLnB1Ymxpc2goUFNFLkRlbGV0ZVRvRG8sIGRlbGV0aW9uLklEKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0aW9uLmF3YXJkQ29tcGxldGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIDtcbiAgICAgICAgUFMucHVibGlzaChQU0UuUG9zdEdyb3VwQ291bnQsIHtcbiAgICAgICAgICAgIGdyb3VwSUQ6IHRoaXMuSUQsXG4gICAgICAgICAgICBpbnRlZ2VyVG9BZGQ6IC0xXG4gICAgICAgIH0pO1xuICAgICAgICBQUy5wdWJsaXNoKFBTRS5QdXRQcm9qZWN0RGF0YSk7XG4gICAgfVxuICAgIDtcbn1cbjtcbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iLCJpbXBvcnQgUFMgZnJvbSBcIi4vUHViU3ViXCI7XG5pbXBvcnQgc3RvcmVQcm9qZWN0cyBmcm9tIFwiLi4vc3RvcmFnZS9zdG9yZVByb2plY3RzXCI7XG5pbXBvcnQgR3JvdXBPZkdyb3VwcyBmcm9tIFwiLi9Hcm91cE9mR3JvdXBzXCI7XG5pbXBvcnQgUFNFIGZyb20gXCIuLi9lbnVtcy9QdWJTdWJFdmVudHNcIjtcbmNsYXNzIFByb2plY3RzIGV4dGVuZHMgR3JvdXBPZkdyb3VwcyB7XG4gICAgZ2V0QWxsVG9Eb3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyb3Vwcy5tYXAocHJvamVjdCA9PiBwcm9qZWN0LnRvRG9zKS5mbGF0KCk7XG4gICAgfVxuICAgIDtcbiAgICBwcm9qZWN0RXhpc3RzKGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyb3Vwcy5zb21lKGNhbGxiYWNrKTtcbiAgICB9XG4gICAgO1xuICAgIGRlbGV0ZVByb2plY3QoSUQpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gdGhpcy5ncm91cHMuZmluZEluZGV4KHAgPT4gcC5JRCA9PT0gSUQpO1xuICAgICAgICBpZiAocHJvamVjdEluZGV4IDwgMClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlcmUgaXMgbm8gUHJvamVjdCB0byBkZWxldGUgd2l0aCBhbiBJRCBvZiAke0lEfS5gKTtcbiAgICAgICAgY29uc3QgZGVsZXRlZFByb2plY3QgPSB0aGlzLmdyb3Vwcy5zcGxpY2UocHJvamVjdEluZGV4LCAxKVswXTtcbiAgICAgICAgUFMucHVibGlzaChQU0UuRGVsZXRlUHJvamVjdCwgZGVsZXRlZFByb2plY3QuSUQpO1xuICAgICAgICBQUy5wdWJsaXNoKFBTRS5QdXRQcm9qZWN0RGF0YSk7XG4gICAgfVxuICAgIDtcbiAgICBzYXZlKCkge1xuICAgICAgICBzdG9yZVByb2plY3RzKHRoaXMuZ3JvdXBzKTtcbiAgICB9XG4gICAgO1xufVxuO1xuY29uc3QgUHJvamVjdHNJbnN0YW5jZSA9IG5ldyBQcm9qZWN0cygpO1xuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHNJbnN0YW5jZTtcbiIsImltcG9ydCBTaW5nbGV0b24gZnJvbSBcIi4vU2luZ2xldG9uXCI7XG5pbXBvcnQgUFNFIGZyb20gXCIuLi9lbnVtcy9QdWJTdWJFdmVudHNcIjtcbmNsYXNzIFB1YlN1YiBleHRlbmRzIFNpbmdsZXRvbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlcnMgPSB7XG4gICAgICAgICAgICBbUFNFLlBvc3RNZXNzYWdlXTogW10sXG4gICAgICAgICAgICBbUFNFLlB1dENvaW5zXTogW10sXG4gICAgICAgICAgICBbUFNFLlBvc3RDYXRlZ29yeV06IFtdLFxuICAgICAgICAgICAgW1BTRS5QdXRQcm9qZWN0XTogW10sXG4gICAgICAgICAgICBbUFNFLlB1dFRvRG9dOiBbXSxcbiAgICAgICAgICAgIFtQU0UuUG9zdEdyb3VwQ291bnRdOiBbXSxcbiAgICAgICAgICAgIFtQU0UuRGVsZXRlVG9Eb106IFtdLFxuICAgICAgICAgICAgW1BTRS5EZWxldGVQcm9qZWN0XTogW10sXG4gICAgICAgICAgICBbUFNFLlB1dFByb2plY3REYXRhXTogW11cbiAgICAgICAgfTtcbiAgICB9XG4gICAgc3Vic2NyaWJlKGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlcnNbZV0ucHVzaChjYWxsYmFjayk7XG4gICAgfVxuICAgIDtcbiAgICBwdWJsaXNoKGUsIGQpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVyc1tlXS5mb3JFYWNoKChjYWxsYmFjaykgPT4gY2FsbGJhY2soZCkpO1xuICAgIH1cbiAgICA7XG59XG47XG5jb25zdCBQUyA9IG5ldyBQdWJTdWIoKTtcbmV4cG9ydCBkZWZhdWx0IFBTO1xuIiwiY2xhc3MgU2luZ2xldG9uIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgICBpZiAoU2luZ2xldG9uLmluc3RhbmNlcy5nZXQoY2xhc3NOYW1lKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBbiBpbnN0YW5jZSBvZiAke2NsYXNzTmFtZX0gYWxyZWFkeSBleGlzdHMhYCk7XG4gICAgICAgIH1cbiAgICAgICAgO1xuICAgICAgICBTaW5nbGV0b24uaW5zdGFuY2VzLnNldChjbGFzc05hbWUsIHRoaXMpO1xuICAgIH1cbiAgICA7XG59XG4vLyBBIHN0YXRpYyBtYXAgdG8gc3RvcmUgaW5zdGFuY2VzIGZvciBkZXJpdmVkIGNsYXNzZXNcblNpbmdsZXRvbi5pbnN0YW5jZXMgPSBuZXcgTWFwKCk7XG47XG5leHBvcnQgZGVmYXVsdCBTaW5nbGV0b247XG4iLCJpbXBvcnQgeyB0b2RheSB9IGZyb20gXCIuLi9mdW5jdGlvbnMvZGF0ZUdlbmVyYXRvcnNcIjtcbmltcG9ydCBQUyBmcm9tIFwiLi9QdWJTdWJcIjtcbmltcG9ydCBCYW5rIGZyb20gXCIuL0JhbmtcIjtcbmltcG9ydCBJRGVkIGZyb20gXCIuL0lEZWRcIjtcbmltcG9ydCBUb0RvUHJpb3JpdHkgZnJvbSBcIi4uL2VudW1zL1RvRG9Qcmlvcml0eVwiO1xuaW1wb3J0IFBTRSBmcm9tIFwiLi4vZW51bXMvUHViU3ViRXZlbnRzXCI7XG5jbGFzcyBUb0RvIGV4dGVuZHMgSURlZCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSA9IFRvRG9Qcmlvcml0eS5Mb3csIGlzQ2hlY2tlZCA9IGZhbHNlLCBpZCkge1xuICAgICAgICBzdXBlcihpZCk7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuaXNDaGVja2VkID0gaXNDaGVja2VkO1xuICAgICAgICB0aGlzLmF3YXJkZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgO1xuICAgIHRvZ2dsZUlzQ2hlY2tlZCgpIHtcbiAgICAgICAgdGhpcy5pc0NoZWNrZWQgPSAhdGhpcy5pc0NoZWNrZWQ7XG4gICAgICAgIFBTLnB1Ymxpc2goUFNFLlB1dFByb2plY3REYXRhKTtcbiAgICB9XG4gICAgdXBkYXRlUHJvcGVydGllcyhwb3NpdGlvbmFsUGFyYW1ldGVycywgcHVibGlzaCA9IHRydWUpIHtcbiAgICAgICAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwYXJlbnRJRCB9ID0gcG9zaXRpb25hbFBhcmFtZXRlcnM7XG4gICAgICAgIGlmICh0aXRsZSlcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgaWYgKGRlc2NyaXB0aW9uKVxuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICBpZiAoZHVlRGF0ZSlcbiAgICAgICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIGlmIChwcmlvcml0eSlcbiAgICAgICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgaWYgKHBhcmVudElEKVxuICAgICAgICAgICAgdGhpcy5wYXJlbnRJRCA9IHBhcmVudElEO1xuICAgICAgICBpZiAocHVibGlzaCkge1xuICAgICAgICAgICAgUFMucHVibGlzaChQU0UuUHV0VG9EbywgdGhpcyk7XG4gICAgICAgICAgICBQUy5wdWJsaXNoKFBTRS5QdXRQcm9qZWN0RGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgO1xuICAgIGdldFdvcnRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmlvcml0eSAqIDEwO1xuICAgIH1cbiAgICBpc092ZXJEdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmR1ZURhdGUgPCB0b2RheTtcbiAgICB9XG4gICAgYXdhcmRDb21wbGV0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5hd2FyZGVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUb0RvSW5zdGFuY2UuYXdhcmRDb21wbGV0aW9uKCkgY2FuIG9ubHkgYmUgY2FsbGVkIG9uY2UuXCIpO1xuICAgICAgICB9XG4gICAgICAgIDtcbiAgICAgICAgaWYgKCF0aGlzLmlzQ2hlY2tlZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKHRoaXMuaXNPdmVyRHVlKCkpIHtcbiAgICAgICAgICAgIEJhbmsuZGVkdWN0KHRoaXMuZ2V0V29ydGgoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBCYW5rLmRlcG9zaXQodGhpcy5nZXRXb3J0aCgpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmF3YXJkZWQgPSB0cnVlO1xuICAgIH1cbiAgICA7XG59XG47XG5leHBvcnQgZGVmYXVsdCBUb0RvO1xuIiwidmFyIFBTRTtcbihmdW5jdGlvbiAoUFNFKSB7XG4gICAgUFNFW1BTRVtcIlBvc3RNZXNzYWdlXCJdID0gMF0gPSBcIlBvc3RNZXNzYWdlXCI7XG4gICAgUFNFW1BTRVtcIlB1dENvaW5zXCJdID0gMV0gPSBcIlB1dENvaW5zXCI7XG4gICAgUFNFW1BTRVtcIlBvc3RDYXRlZ29yeVwiXSA9IDJdID0gXCJQb3N0Q2F0ZWdvcnlcIjtcbiAgICBQU0VbUFNFW1wiUHV0UHJvamVjdFwiXSA9IDNdID0gXCJQdXRQcm9qZWN0XCI7XG4gICAgUFNFW1BTRVtcIlB1dFRvRG9cIl0gPSA0XSA9IFwiUHV0VG9Eb1wiO1xuICAgIFBTRVtQU0VbXCJQb3N0R3JvdXBDb3VudFwiXSA9IDVdID0gXCJQb3N0R3JvdXBDb3VudFwiO1xuICAgIFBTRVtQU0VbXCJEZWxldGVUb0RvXCJdID0gNl0gPSBcIkRlbGV0ZVRvRG9cIjtcbiAgICBQU0VbUFNFW1wiRGVsZXRlUHJvamVjdFwiXSA9IDddID0gXCJEZWxldGVQcm9qZWN0XCI7XG4gICAgUFNFW1BTRVtcIlB1dFByb2plY3REYXRhXCJdID0gOF0gPSBcIlB1dFByb2plY3REYXRhXCI7XG59KShQU0UgfHwgKFBTRSA9IHt9KSk7XG47XG5leHBvcnQgZGVmYXVsdCBQU0U7XG4iLCJ2YXIgVG9Eb1ByaW9yaXR5O1xuKGZ1bmN0aW9uIChUb0RvUHJpb3JpdHkpIHtcbiAgICBUb0RvUHJpb3JpdHlbVG9Eb1ByaW9yaXR5W1wiTG93XCJdID0gMF0gPSBcIkxvd1wiO1xuICAgIFRvRG9Qcmlvcml0eVtUb0RvUHJpb3JpdHlbXCJNZWRpdW1cIl0gPSAxXSA9IFwiTWVkaXVtXCI7XG4gICAgVG9Eb1ByaW9yaXR5W1RvRG9Qcmlvcml0eVtcIkhpZ2hcIl0gPSAyXSA9IFwiSGlnaFwiO1xufSkoVG9Eb1ByaW9yaXR5IHx8IChUb0RvUHJpb3JpdHkgPSB7fSkpO1xuZXhwb3J0IGRlZmF1bHQgVG9Eb1ByaW9yaXR5O1xuIiwiY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuY29uc3QgeWVzdGVyZGF5ID0gbmV3IERhdGUoKTtcbmNvbnN0IHRvbW9ycm93ID0gbmV3IERhdGUoKTtcbmNvbnN0IHN0YXJ0T2ZXZWVrID0gbmV3IERhdGUoKTtcbmNvbnN0IGVuZE9mV2VlayA9IG5ldyBEYXRlKCk7XG5jb25zdCBlbmRPZk1vbnRoID0gbmV3IERhdGUoKTtcbmNvbnN0IHRvZGF5RGF0ZSA9IHRvZGF5LmdldERhdGUoKTtcbnllc3RlcmRheS5zZXREYXRlKHRvZGF5RGF0ZSAtIDEpO1xudG9tb3Jyb3cuc2V0RGF0ZSh0b2RheURhdGUgKyAxKTtcbnN0YXJ0T2ZXZWVrLnNldERhdGUodG9kYXlEYXRlIC0gMSk7XG5lbmRPZldlZWsuc2V0RGF0ZSh0b2RheURhdGUgKyA3KTtcbmVuZE9mTW9udGguc2V0RGF0ZSh0b2RheURhdGUgKyAzMSk7XG4vLyBNUyBhcyBpbiBcIm1pbGxpc2Vjb25kcyBzaW5jZSBtaWRuaWdodCBKYW51YXJ5IDEsIDE5NzBcIi5cbmNvbnN0IHllc3RlcmRheU1TID0geWVzdGVyZGF5LmdldFRpbWUoKTtcbmNvbnN0IHRvbW9ycm93TVMgPSB0b21vcnJvdy5nZXRUaW1lKCk7XG5jb25zdCBzdGFydE9mV2Vla01TID0gc3RhcnRPZldlZWsuZ2V0VGltZSgpO1xuY29uc3QgZW5kT2ZXZWVrTVMgPSBlbmRPZldlZWsuZ2V0VGltZSgpO1xuY29uc3QgZW5kT2ZNb250aE1TID0gZW5kT2ZNb250aC5nZXRUaW1lKCk7XG5jb25zdCBkYXRlV2l0aGluUGFzdFdlZWsgPSBuZXcgRGF0ZSh5ZXN0ZXJkYXlNUyAtIE1hdGgucmFuZG9tKCkgKiAoeWVzdGVyZGF5TVMgLSBzdGFydE9mV2Vla01TKSk7XG5jb25zdCBkYXRlV2l0aGluV2VlayA9IG5ldyBEYXRlKHRvbW9ycm93TVMgKyBNYXRoLnJhbmRvbSgpICogKGVuZE9mV2Vla01TIC0gdG9tb3Jyb3dNUykpO1xuY29uc3QgZGF0ZVdpdGhpbk1vbnRoID0gKCkgPT4gbmV3IERhdGUodG9tb3Jyb3dNUyArIE1hdGgucmFuZG9tKCkgKiAoZW5kT2ZNb250aE1TIC0gdG9tb3Jyb3dNUykpO1xuZXhwb3J0IHsgZGF0ZVdpdGhpbldlZWssIGRhdGVXaXRoaW5QYXN0V2VlaywgZGF0ZVdpdGhpbk1vbnRoLCB0b2RheSB9O1xuIiwiaW1wb3J0IFRvRG9Qcmlvcml0eSBmcm9tIFwiLi4vZW51bXMvVG9Eb1ByaW9yaXR5XCI7XG5jb25zdCBmaWx0ZXJJbXBvcnRhbnQgPSB0b2RvcyA9PiB0b2Rvcy5maWx0ZXIodG9kbyA9PiB0b2RvLnByaW9yaXR5ID09PSBUb0RvUHJpb3JpdHkuSGlnaCk7XG5leHBvcnQgZGVmYXVsdCBmaWx0ZXJJbXBvcnRhbnQ7XG4iLCJpbXBvcnQgeyB0b2RheSB9IGZyb20gXCIuL2RhdGVHZW5lcmF0b3JzXCI7XG5pbXBvcnQgdGltZU5vcm1hbGlzZSBmcm9tIFwiLi90aW1lTm9ybWFsaXNlXCI7XG5jb25zdCBmaWx0ZXJUaGlzV2VlayA9IHRvZG9zID0+IHtcbiAgICBjb25zdCBlbmRPZldlZWsgPSBuZXcgRGF0ZSh0b2RheSk7XG4gICAgZW5kT2ZXZWVrLnNldERhdGUoZW5kT2ZXZWVrLmdldERhdGUoKSArIDcpO1xuICAgIHJldHVybiB0b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHtcbiAgICAgICAgY29uc3QgdG9kb0R1ZSA9IHRpbWVOb3JtYWxpc2UodG9kby5kdWVEYXRlKTtcbiAgICAgICAgcmV0dXJuIHRvZG9EdWUgPj0gdG9kYXkgJiYgdG9kb0R1ZSA8PSBlbmRPZldlZWs7XG4gICAgfSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgZmlsdGVyVGhpc1dlZWs7XG4iLCJpbXBvcnQgeyB0b2RheSB9IGZyb20gXCIuL2RhdGVHZW5lcmF0b3JzXCI7XG5pbXBvcnQgdGltZU5vcm1hbGlzZSBmcm9tIFwiLi90aW1lTm9ybWFsaXNlXCI7XG5jb25zdCBmaWx0ZXJUb2RheSA9ICh0b2RvcykgPT4gdG9kb3MuZmlsdGVyKHRvZG8gPT4gdGltZU5vcm1hbGlzZSh0b2RvLmR1ZURhdGUpLmdldFRpbWUoKSA9PT0gdGltZU5vcm1hbGlzZSh0b2RheSkuZ2V0VGltZSgpKTtcbmV4cG9ydCBkZWZhdWx0IGZpbHRlclRvZGF5O1xuIiwiaW1wb3J0IENhdGVnb3J5IGZyb20gXCIuLi9jbGFzc2VzL0NhdGVnb3J5XCI7XG5pbXBvcnQgZmlsdGVySW1wb3J0YW50IGZyb20gXCIuL2ZpbHRlckltcG9ydGFudFwiO1xuaW1wb3J0IGZpbHRlclRoaXNXZWVrIGZyb20gXCIuL2ZpbHRlclRoaXNXZWVrXCI7XG5pbXBvcnQgZmlsdGVyVG9kYXkgZnJvbSBcIi4vZmlsdGVyVG9kYXlcIjtcbmltcG9ydCBub0ZpbHRlciBmcm9tIFwiLi9ub0ZpbHRlclwiO1xuZnVuY3Rpb24gaW5pdGlhbGl6ZUNhdGVnb3JpZXMoKSB7XG4gICAgbmV3IENhdGVnb3J5KFwiQWxsIFRhc2tzXCIsIG5vRmlsdGVyLCBcImJpLWNhbGVuZGFyLWNoZWNrLWZpbGxcIik7XG4gICAgbmV3IENhdGVnb3J5KFwiSW1wb3J0YW50XCIsIGZpbHRlckltcG9ydGFudCwgXCJiaS1zdGFyLWZpbGxcIik7XG4gICAgbmV3IENhdGVnb3J5KFwiVG9kYXlcIiwgZmlsdGVyVG9kYXksIFwiYmktY2FsZW5kYXItZXZlbnQtZmlsbFwiKTtcbiAgICBuZXcgQ2F0ZWdvcnkoXCJUaGlzIFdlZWtcIiwgZmlsdGVyVGhpc1dlZWssIFwiYmktY2FsZW5kYXItd2Vlay1maWxsXCIpO1xufVxuO1xuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZUNhdGVnb3JpZXM7XG4iLCJpbXBvcnQgR2FtZSBmcm9tIFwiLi4vY2xhc3Nlcy9HYW1lXCI7XG5pbXBvcnQgcmVuZGVyQXJjYWRlIGZyb20gXCIuLi91aS9vdXRwdXRzL3JlbmRlckFyY2FkZVwiO1xuZnVuY3Rpb24gaW5pdGlhbGl6ZUdhbWVzKCkge1xuICAgIG5ldyBHYW1lKFwiQ3Jvc3MgQ29kZVwiLCBcIi4vdGh1bWJuYWlscy9jcm9zcy1jb2RlLmpwZ1wiLCBcImh0dHBzOi8vd3d3LmNyb3NzLWNvZGUuY29tL2VuL3N0YXJ0XCIsIDYwKTtcbiAgICBuZXcgR2FtZShcIk1pc3NpbGUgR2FtZVwiLCBcIi4vdGh1bWJuYWlscy9taXNzaWxlLWdhbWUuanBnXCIsIFwiaHR0cHM6Ly9taXNzaWxlLWdhbWUuYndobWF0aGVyLmNvbS9cIiwgNDApO1xuICAgIG5ldyBHYW1lKFwiQ2hyb21lIERpbm9cIiwgXCIuL3RodW1ibmFpbHMvY2hyb21lLWRpbm8uanBlZ1wiLCBcImh0dHBzOi8vY2hyb21lZGluby5jb20vXCIsIDIwKTtcbiAgICAvLyBhZGQgZXZlbnQgbGlzdGVuZXIgdG8gZ2FtZSBpY29uXG4gICAgY29uc3QgZ2FtZUljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtaWNvblwiKTtcbiAgICBpZiAoZ2FtZUljb24pIHtcbiAgICAgICAgZ2FtZUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlckFyY2FkZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCIjZ2FtZS1pY29uIG5vdCBzZWxlY3RlZC5cIik7XG4gICAgfVxuICAgIDtcbn1cbjtcbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxpemVHYW1lcztcbiIsImltcG9ydCB1dWlkUmVnZXggZnJvbSBcIi4uL3JlZ2V4L3V1aWRSZWdleFwiO1xuZnVuY3Rpb24gaXNVVUlEKHRvVGVzdCkge1xuICAgIHJldHVybiB1dWlkUmVnZXgudGVzdCh0b1Rlc3QpO1xufVxuO1xuZXhwb3J0IGRlZmF1bHQgaXNVVUlEO1xuIiwiY29uc3Qgbm9GaWx0ZXIgPSB0b2RvcyA9PiB0b2RvcztcbmV4cG9ydCBkZWZhdWx0IG5vRmlsdGVyO1xuIiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4uL2NsYXNzZXMvUHJvamVjdFwiO1xuaW1wb3J0IFRvRG8gZnJvbSBcIi4uL2NsYXNzZXMvVG9Eb1wiO1xuaW1wb3J0IFRvRG9Qcmlvcml0eSBmcm9tIFwiLi4vZW51bXMvVG9Eb1ByaW9yaXR5XCI7XG5pbXBvcnQgeyBkYXRlV2l0aGluTW9udGgsIHRvZGF5LCBkYXRlV2l0aGluV2VlaywgZGF0ZVdpdGhpblBhc3RXZWVrIH0gZnJvbSBcIi4vZGF0ZUdlbmVyYXRvcnNcIjtcbmZ1bmN0aW9uIHBvcHVsYXRlVHV0b3JpYWxQcm9qZWN0KCkge1xuICAgIHJldHVybiBuZXcgUHJvamVjdChcIlR1dG9yaWFsXCIsIFtcbiAgICAgICAgbmV3IFRvRG8oXCJJbXBvcnRhbnQgdGFza1wiLCBcIlRoaXMgaXMgaGlnaC1wcmlvcml0eS4gTm90aWNlIHRoZSByZWQgYm9yZGVyIGNvbG9yLWNvZGluZy5cIiwgZGF0ZVdpdGhpbk1vbnRoKCksIFRvRG9Qcmlvcml0eS5IaWdoKSxcbiAgICAgICAgbmV3IFRvRG8oXCJOaWNlLXRvLWRvIHRhc2tcIiwgXCJUaGlzIGlzIG1lZGl1bS1wcmlvcml0eS4gSXQncyBjb2xvci1jb2RlZCBvcmFuZ2VcIiwgZGF0ZVdpdGhpbk1vbnRoKCksIFRvRG9Qcmlvcml0eS5NZWRpdW0pLFxuICAgICAgICBuZXcgVG9EbyhcIkp1c3QgZm9yIGZ1blwiLCBcIlRoaXMgaXMgbG93LXByaW9yaXR5LiBJdCdzIGZsYWdnZWQgYXMgZ3JlZW4uXCIsIGRhdGVXaXRoaW5Nb250aCgpLCBUb0RvUHJpb3JpdHkuTG93KSxcbiAgICAgICAgbmV3IFRvRG8oXCJGaW5pc2ggdG9kYXlcIiwgXCJIZXJlIGlzIGEgdG8tZG8gdGhhdCBpcyBkdWUgdG9kYXkhXCIsIHRvZGF5LCBUb0RvUHJpb3JpdHkuSGlnaCksXG4gICAgICAgIG5ldyBUb0RvKFwiV2VlaydzIHdvcmtcIiwgXCJUaGlzIGlzIHNvbWV0aGluZyB5b3UganVzdCBuZWVkIHRvIGRvIHNvbWV0aW1lIHRoaXMgd2Vlay5cIiwgZGF0ZVdpdGhpbldlZWssIFRvRG9Qcmlvcml0eS5NZWRpdW0pLFxuICAgICAgICBuZXcgVG9EbyhcIlRvbyBMYXRlXCIsIFwiT3ZlcmR1ZSB0by1kb3MgYXJlIGNvbG9yLWNvZGVkIHRoaXMgYnJvbnplIGh1ZVwiLCBkYXRlV2l0aGluUGFzdFdlZWssIFRvRG9Qcmlvcml0eS5IaWdoKVxuICAgIF0sIFwiYmktcGVuY2lsLWZpbGxcIik7XG59XG47XG5leHBvcnQgZGVmYXVsdCBwb3B1bGF0ZVR1dG9yaWFsUHJvamVjdDtcbiIsImltcG9ydCBQcm9qZWN0c0luc3RhbmNlIGZyb20gXCIuLi9jbGFzc2VzL1Byb2plY3RzXCI7XG5pbXBvcnQgUFMgZnJvbSBcIi4uL2NsYXNzZXMvUHViU3ViXCI7XG5pbXBvcnQgUFNFIGZyb20gXCIuLi9lbnVtcy9QdWJTdWJFdmVudHNcIjtcbmltcG9ydCBwdXRDb2lucyBmcm9tIFwiLi4vc3RvcmFnZS9wdXRDb2luc1wiO1xuaW1wb3J0IHB1dENhdGVnb3J5IGZyb20gXCIuLi91aS9vdXRwdXRzL3B1dENhdGVnb3J5XCI7XG5pbXBvcnQgcHV0UHJvamVjdCBmcm9tIFwiLi4vdWkvb3V0cHV0cy9wdXRQcm9qZWN0XCI7XG5pbXBvcnQgaWRlbXBvdGVudGx5UmVuZGVyVG9EbyBmcm9tIFwiLi4vdWkvb3V0cHV0cy9pZGVtcG90ZW50bHlSZW5kZXJUb0RvXCI7XG5pbXBvcnQgcmVtb3ZlUHJvamVjdCBmcm9tIFwiLi4vdWkvb3V0cHV0cy9yZW1vdmVQcm9qZWN0XCI7XG5pbXBvcnQgcmVtb3ZlVG9EbyBmcm9tIFwiLi4vdWkvb3V0cHV0cy9yZW1vdmVUb0RvXCI7XG5pbXBvcnQgcmVuZGVyTWVzc2FnZSBmcm9tIFwiLi4vdWkvb3V0cHV0cy9yZW5kZXJNZXNzYWdlXCI7XG5pbXBvcnQgdXBkYXRlR3JvdXBDb3VudGVyIGZyb20gXCIuLi91aS9vdXRwdXRzL3VwZGF0ZVRvRG9Db3VudGVyXCI7XG5mdW5jdGlvbiBzdWJzY3JpYmVVSUFuZFN0b3JhZ2VGdW5jdGlvbnMoKSB7XG4gICAgUFMuc3Vic2NyaWJlKFBTRS5Qb3N0Q2F0ZWdvcnksIHB1dENhdGVnb3J5KTtcbiAgICBQUy5zdWJzY3JpYmUoUFNFLlB1dFByb2plY3QsIHB1dFByb2plY3QpO1xuICAgIFBTLnN1YnNjcmliZShQU0UuUHV0VG9EbywgaWRlbXBvdGVudGx5UmVuZGVyVG9Ebyk7XG4gICAgUFMuc3Vic2NyaWJlKFBTRS5Qb3N0R3JvdXBDb3VudCwgdXBkYXRlR3JvdXBDb3VudGVyKTtcbiAgICBQUy5zdWJzY3JpYmUoUFNFLkRlbGV0ZVRvRG8sIHJlbW92ZVRvRG8pO1xuICAgIFBTLnN1YnNjcmliZShQU0UuRGVsZXRlUHJvamVjdCwgcmVtb3ZlUHJvamVjdCk7XG4gICAgUFMuc3Vic2NyaWJlKFBTRS5Qb3N0TWVzc2FnZSwgcmVuZGVyTWVzc2FnZSk7XG4gICAgUFMuc3Vic2NyaWJlKFBTRS5QdXRDb2lucywgcHV0Q29pbnMpO1xuICAgIFBTLnN1YnNjcmliZShQU0UuUHV0UHJvamVjdERhdGEsICgpID0+IFByb2plY3RzSW5zdGFuY2Uuc2F2ZSgpKTsgLy8gY2xvc3VyZSBpcyBuZWNlc3Nhcnlcbn1cbjtcbmV4cG9ydCBkZWZhdWx0IHN1YnNjcmliZVVJQW5kU3RvcmFnZUZ1bmN0aW9ucztcbiIsImNvbnN0IHRpbWVOb3JtYWxpc2UgPSAodGltZSkgPT4ge1xuICAgIGNvbnN0IG5vcm1hbGlzZWRUaW1lID0gdGltZTtcbiAgICBub3JtYWxpc2VkVGltZS5zZXRIb3VycygwLCAwLCAwLCAwKTsgLy8gc2V0IHRvIG1pZG5pZ2h0IGZvciBkYXkgY29tcGFyaXNvbnNcbiAgICByZXR1cm4gbm9ybWFsaXNlZFRpbWU7XG59O1xuZXhwb3J0IGRlZmF1bHQgdGltZU5vcm1hbGlzZTtcbiIsImNvbnN0IGVuZHNXaXRoSW1hZ2VGaWxlRXh0ZW5zaW9uID0gLy4oanBnfGpwZWd8cG5nKSQvO1xuZXhwb3J0IGRlZmF1bHQgZW5kc1dpdGhJbWFnZUZpbGVFeHRlbnNpb247XG4iLCJjb25zdCBzdGFydHNXaXRoSFRUUFMgPSAvXmh0dHBzOlxcL1xcLy4qLztcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0c1dpdGhIVFRQUztcbiIsIi8vIFRoZSByZWdleCB3YXMgY29waWVkIGZyb20gU3RhY2tPdmVyZmxvdy5cbi8vIExpbmsgaGVyZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNzkwNTkyOS9ob3ctdG8tdGVzdC12YWxpZC11dWlkLWd1aWRcbmNvbnN0IHV1aWRSZWdleCA9IC9eWzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn0kL2k7XG5leHBvcnQgZGVmYXVsdCB1dWlkUmVnZXg7XG4iLCJjb25zdCBnZXRDb2lucyA9ICgpID0+IE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvaW5zXCIpKTtcbmV4cG9ydCBkZWZhdWx0IGdldENvaW5zO1xuIiwiZnVuY3Rpb24gaGFzVmlzaXRlZCgpIHtcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Zpc2l0ZWQnKSA9PT0gJ3RydWUnO1xufVxuZXhwb3J0IGRlZmF1bHQgaGFzVmlzaXRlZDtcbiIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuLi9jbGFzc2VzL1Byb2plY3RcIjtcbmltcG9ydCBUb0RvIGZyb20gXCIuLi9jbGFzc2VzL1RvRG9cIjtcbmZ1bmN0aW9uIGxvYWRQcm9qZWN0cygpIHtcbiAgICBjb25zdCBzdHJpbmdpZmllZEpTT04gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpO1xuICAgIGNvbnN0IHBhcnNlZEpTT04gPSBzdHJpbmdpZmllZEpTT04gPyBKU09OLnBhcnNlKHN0cmluZ2lmaWVkSlNPTikgOiBbXTtcbiAgICByZXR1cm4gcGFyc2VkSlNPTi5tYXAocCA9PiBuZXcgUHJvamVjdChwLm5hbWUsIHAudG9Eb3MubWFwKHQgPT4gbmV3IFRvRG8odC50aXRsZSwgdC5kZXNjcmlwdGlvbiwgbmV3IERhdGUodC5kdWVEYXRlKSwgdC5wcmlvcml0eSwgdC5pc0NoZWNrZWQsIHQuSUQpKSwgcC5pY29uLCBwLklEKSk7XG59XG47XG5leHBvcnQgZGVmYXVsdCBsb2FkUHJvamVjdHM7XG4iLCJmdW5jdGlvbiBwdXRDb2lucyhjb2lucykge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY29pbnNcIiwgU3RyaW5nKGNvaW5zKSk7XG59XG5leHBvcnQgZGVmYXVsdCBwdXRDb2lucztcbiIsImZ1bmN0aW9uIHNldFZpc2l0ZWRGbGFnKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd2aXNpdGVkJywgJ3RydWUnKTtcbn1cbmV4cG9ydCBkZWZhdWx0IHNldFZpc2l0ZWRGbGFnO1xuIiwiZnVuY3Rpb24gc3RvcmVQcm9qZWN0cyhwcm9qZWN0cykge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbn1cbmV4cG9ydCBkZWZhdWx0IHN0b3JlUHJvamVjdHM7XG4iLCIvLyByZWdpc3RlciBQV0Egc2VydmljZSB3b3JrZXJcbmZ1bmN0aW9uIHJlZ2lzdGVyU2VydmljZVdvcmtlcigpIHtcbiAgICBpZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCdodHRwczovL2JsYWNrLXJhbS5naXRodWIuaW8vRGVuYXJpdXMvc2VydmljZS13b3JrZXIuanMnKS50aGVuKHJlZ2lzdHJhdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NXIHJlZ2lzdGVyZWQ6ICcsIHJlZ2lzdHJhdGlvbik7XG4gICAgICAgICAgICB9KS5jYXRjaChyZWdpc3RyYXRpb25FcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NXIHJlZ2lzdHJhdGlvbiBmYWlsZWQ6ICcsIHJlZ2lzdHJhdGlvbkVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgO1xufVxuO1xuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXJTZXJ2aWNlV29ya2VyO1xuIiwiY29uc3QgYXJjYWRlU3RhdGUgPSBcIkdhbWUgVGltZSFcIjtcbmV4cG9ydCBkZWZhdWx0IGFyY2FkZVN0YXRlO1xuIiwiY29uc3QganNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkpTLWluc2VydGlvbi1jb250YWluZXJcIik7XG5leHBvcnQgZGVmYXVsdCBqc0NvbnRhaW5lcjtcbiIsImltcG9ydCBqc0NvbnRhaW5lciBmcm9tIFwiLi4vZG9tQ29uc3RhbnRzL3Byb2plY3RDb250YWluZXJcIjtcbi8vIFdoaWxlIHRoaXMgaXMgYWxsIG1pc2NlbGxhbmVvdXMgRE9NLXJlbGF0ZWQgc3R1ZmZcbi8vIEFuZCBpcyBub3QgZXhhY3RseSBhIGZ1bmN0aW9uLCBpbiB0aGF0IGl0IGRvZXMgbm90IGhhdmUgb25lIHBhcnRpY3VsYXIgcmVzcG9uc2liaWxpdHlcbi8vIGFuZCB0aGF0IGl0IGV2ZXIgbmVlZHMgdG8gYmUgY2FsbGVkIG1vcmUgdGhhbiBvbmNlLFxuLy8gSSBzdGlsbCB3cmFwIGl0IGluIHRoaXMgYW5vbnltb3VzIGZ1bmN0aW9uL2RlZmF1bHQgZXhwb3J0LFxuLy8gU28gdGhhdCB0aGUgbW9kdWxlIGhhcyBubyBcInNpZGUtZWZmZWN0c1wiLlxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpO1xuICAgIGNvbnN0IG1lbnVJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51LWljb25cIik7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhclwiKTtcbiAgICBmdW5jdGlvbiBzaXplQW5kVG9nZ2xlKCkge1xuICAgICAgICAvLyBoaWRlIG1lbnUsIHNob3cgaWNvbiBvbiBtb2JpbGVcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNTc1KSB7XG4gICAgICAgICAgICBpZiAobWVudSkge1xuICAgICAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiLCBcInBvc2l0aW9uLWFic29sdXRlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgaWYgKG1lbnVJY29uKSB7XG4gICAgICAgICAgICAgICAgbWVudUljb24uY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIC8vIGhpZGUgbWVudSBpZiB1c2VyIGNsaWNrcyBhd2F5XG4gICAgICAgICAgICBpZiAobWFpbiAmJiBuYXYgJiYgbWVudSkge1xuICAgICAgICAgICAgICAgIG1haW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW5hdi5jb250YWlucyhlLnRhcmdldCkgJiYgd2luZG93LmlubmVyV2lkdGggPCA1NzUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKG1lbnUpIHtcbiAgICAgICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIiwgXCJwb3NpdGlvbi1hYnNvbHV0ZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtZW51SWNvbikge1xuICAgICAgICAgICAgICAgIG1lbnVJY29uLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2V0IG1haW4gaGVpZ2h0IHRvIHJlbWFpbmluZyBWSCB1bmRlciBoZWFkZXJcbiAgICAgICAgY29uc3QgaGdyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhncm91cFwiKTtcbiAgICAgICAgaWYgKGhncm91cCAmJiBuYXYpIHtcbiAgICAgICAgICAgIGNvbnN0IGhncm91cEhlaWdodCA9IGhncm91cC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICBjb25zdCBhdmFpbGFibGVIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAoaGdyb3VwSGVpZ2h0ICsgMzIpO1xuICAgICAgICAgICAgbmF2LnN0eWxlLmhlaWdodCA9IGAke2F2YWlsYWJsZUhlaWdodH1weGA7XG4gICAgICAgICAgICBuYXYuc3R5bGUubWF4SGVpZ2h0ID0gbmF2LnN0eWxlLmhlaWdodDtcbiAgICAgICAgICAgIGpzQ29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGAke2F2YWlsYWJsZUhlaWdodH1weGA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbWFpbnRhaW4gYXNwZWN0IHJhdGlvIG9uIGFyY2FkZSBpbWFnZSBjYXJkc1xuICAgICAgICBjb25zdCBjYXJkSW1ncyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFyY2FkZS1pbWdcIikpO1xuICAgICAgICBjYXJkSW1ncy5mb3JFYWNoKGltZyA9PiB7XG4gICAgICAgICAgICBpbWcuc3R5bGUuaGVpZ2h0ID0gYCR7aW1nLmNsaWVudFdpZHRofXB4YDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIEFkZCBhbiBldmVudCBsaXN0ZW5lciB0byBjaGVjayBzY3JlZW4gd2lkdGggd2hlbiB0aGUgcGFnZSBsb2FkcyBhbmQgb24gcmVzaXplXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBzaXplQW5kVG9nZ2xlKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc2l6ZUFuZFRvZ2dsZSk7XG4gICAgLy8gc2hvdy9jb2xsYXBzZSBtZW51IHdoZW4gaWNvbiBjbGlja2VkXG4gICAgaWYgKG1lbnVJY29uICYmIG1lbnUpIHtcbiAgICAgICAgbWVudUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoXCJkLW5vbmVcIik7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi4vLi4vY2xhc3Nlcy9Qcm9qZWN0XCI7XG5pbXBvcnQgcHJvamVjdE5hbWVNb2RhbCBmcm9tIFwiLi9wcm9qZWN0TmFtZU1vZGFsXCI7XG5mdW5jdGlvbiBhZGRQcm9qZWN0Rm9ybSgpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0LWJ1dHRvblwiKTtcbiAgICBpZiAoYnV0dG9uKVxuICAgICAgICBwcm9qZWN0TmFtZU1vZGFsKGJ1dHRvbiwgbiA9PiBuZXcgUHJvamVjdChuKSk7XG59XG47XG5leHBvcnQgZGVmYXVsdCBhZGRQcm9qZWN0Rm9ybTtcbiIsImltcG9ydCBUb0RvIGZyb20gXCIuLi8uLi9jbGFzc2VzL1RvRG9cIjtcbmltcG9ydCB0b0RvRm9ybSBmcm9tIFwiLi90b0RvRm9ybVwiO1xuaW1wb3J0IFByb2plY3RzSW5zdGFuY2UgZnJvbSBcIi4uLy4uL2NsYXNzZXMvUHJvamVjdHNcIjtcbmZ1bmN0aW9uIGFkZFRvRG9Gb3JtKGNvbnRhaW5lciwgY29vcmRpbmF0ZXMpIHtcbiAgICAvLyBjcmVhdGUgVG9EbyBmcm9tIHVzZXIgaW5wdXRcbiAgICBmdW5jdGlvbiBjcmVhdGVUb0RvKHByb2plY3RJRCwgdGl0bGUsIGRldGFpbHMsIGRhdGVTdHJpbmcsIHByaW9yaXR5KSB7XG4gICAgICAgIGNvbnN0IG5ld1RvRG8gPSBuZXcgVG9Ebyh0aXRsZSwgZGV0YWlscywgbmV3IERhdGUoZGF0ZVN0cmluZyksIHByaW9yaXR5KTtcbiAgICAgICAgUHJvamVjdHNJbnN0YW5jZS5nZXQocHJvamVjdElEKS5hZGRUb0RvKG5ld1RvRG8pO1xuICAgIH1cbiAgICA7XG4gICAgLy8gaGFuZCBvdmVyIGNyZWF0aW9uIG9mIGZvcm0gdG8gbG93ZXItbGV2ZWwgZnVuY3Rpb24gdG9Eb0Zvcm0oKVxuICAgIHRvRG9Gb3JtKGNvbnRhaW5lciwgY29vcmRpbmF0ZXMsIGNyZWF0ZVRvRG8pO1xufVxuZXhwb3J0IGRlZmF1bHQgYWRkVG9Eb0Zvcm07XG4iLCJpbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB0b0RvRm9ybSBmcm9tIFwiLi90b0RvRm9ybVwiO1xuaW1wb3J0IFByb2plY3RzSW5zdGFuY2UgZnJvbSBcIi4uLy4uL2NsYXNzZXMvUHJvamVjdHNcIjtcbmZ1bmN0aW9uIGVkaXRUb0RvRm9ybSh0b0RvLCBjb250YWluZXIsIGNvb3JkaW5hdGVzKSB7XG4gICAgY29uc3QgZWRpdERldGFpbHMgPSAocHJvamVjdElELCB0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGVTdHJpbmcsIHByaW9yaXR5KSA9PiB7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKTtcbiAgICAgICAgdG9Eby51cGRhdGVQcm9wZXJ0aWVzKHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSB9KTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gUHJvamVjdHNJbnN0YW5jZS5nZXQocHJvamVjdElEKTtcbiAgICAgICAgc2VsZWN0ZWRQcm9qZWN0LnRha2VUb0RvRnJvbUFub3RoZXIodG9Ebyk7XG4gICAgfTtcbiAgICBjb25zdCBlbGVtZW50cyA9IHRvRG9Gb3JtKGNvbnRhaW5lciwgY29vcmRpbmF0ZXMsIGVkaXREZXRhaWxzKTtcbiAgICAvLyBpbmNsdWRlIHRoZSB0ZXh0IG9mIHByZXZpb3VzIHRvZG8gZGV0YWlsc1xuICAgIGlmIChlbGVtZW50cykge1xuICAgICAgICBlbGVtZW50cy50aXRsZUlucHV0LnZhbHVlID0gdG9Eby50aXRsZTtcbiAgICAgICAgZWxlbWVudHMuZGV0YWlsc0lucHV0LnZhbHVlID0gdG9Eby5kZXNjcmlwdGlvbjtcbiAgICAgICAgZWxlbWVudHMuZGF0ZUlucHV0LnZhbHVlID0gZm9ybWF0KHRvRG8uZHVlRGF0ZSwgXCJ5eXl5LU1NLWRkXCIpO1xuICAgICAgICBlbGVtZW50cy5zdWJtaXQuaW5uZXJUZXh0ID0gXCJFZGl0XCI7XG4gICAgfVxuICAgIDtcbn1cbjtcbmV4cG9ydCBkZWZhdWx0IGVkaXRUb0RvRm9ybTtcbiIsImZ1bmN0aW9uIHByb2plY3ROYW1lTW9kYWwob3BlbmluZ0J1dHRvbiwgY2FsbGJhY2ssIGluaXRpYWxOYW1lKSB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhclwiKTtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1uYW1lLWZvcm0tY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbmFtZS1mb3JtXCIpO1xuICAgIGNvbnN0IG5hbWVGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1uYW1lXCIpO1xuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1uYW1lLWZvcm0tcmVzZXRcIik7XG4gICAgLy8gSSBrbm93IGluc3RhbmNlb2YgY2FuJ3QgYmUgdXNlZCB3aXRoIGEgVHlwZXNjcmlwdCBpbnRlcmZhY2UuXG4gICAgLy8gQnV0IGl0J3MgZm9yIHRyaWNraW5nIGludGVsbGlzZW5zZS4gOilcbiAgICBpZiAoIShzaWRlYmFyICYmIG1vZGFsIGluc3RhbmNlb2YgSFRNTERpYWxvZ0VsZW1lbnQgJiYgZm9ybSBpbnN0YW5jZW9mIEhUTUxGb3JtRWxlbWVudCAmJiBuYW1lRmllbGQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmIGNhbmNlbEJ1dHRvbikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwicHJvamVjdE5hbWVNb2RhbCBmdW5jdGlvbiBkaWQgbm90IGZpbmQgbmVjZXNzYXJ5IERPTSBlbGVtZW50cy5cIik7XG4gICAgfVxuICAgIDtcbiAgICBvcGVuaW5nQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIC8vIHBvc2l0aW9uIGFuZCBzaG93XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IG9wZW5pbmdCdXR0b24ucGFyZW50RWxlbWVudDtcbiAgICAgICAgaWYgKCFwYXJlbnQpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpY29uIGlzIGFuIG9ycGhhblwiKTtcbiAgICAgICAgY29uc3QgaWNvblRvcCA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDUwMCkge1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUudG9wID0gYCR7aWNvblRvcCAtIDQwfXB4YDtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmxlZnQgPSBgJHsoc2lkZWJhciA9PT0gbnVsbCB8fCBzaWRlYmFyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzaWRlYmFyLmNsaWVudFdpZHRoKSAtIDM1fXB4YDtcbiAgICAgICAgICAgIG1vZGFsLnNob3dNb2RhbCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUudG9wID0gYCR7aWNvblRvcCAtIDgwfXB4YDtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmxlZnQgPSBcIjFyZW1cIjtcbiAgICAgICAgICAgIG1vZGFsLnNob3dNb2RhbCgpO1xuICAgICAgICB9XG4gICAgICAgIDtcbiAgICAgICAgLy8gaW4gY2FzZSB0aGlzIGlzIGZvciByZW5hbWluZ1xuICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgICAgIGlmIChpbml0aWFsTmFtZSlcbiAgICAgICAgICAgIG5hbWVGaWVsZC52YWx1ZSA9IGluaXRpYWxOYW1lO1xuICAgICAgICAvLyBwcmVwYXJlIGZvciBzdWJtaXNzaW9uXG4gICAgICAgIGNvbnN0IGNsZWFuVXAgPSAoKSA9PiB7XG4gICAgICAgICAgICBmb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlU3VibWlzc2lvbik7IC8vIGF2b2lkIGV2ZW50IGxpc3RlbmVycyBwaWxpbmcgdXAuXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGhhbmRsZVN1Ym1pc3Npb24gPSAoKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayhuYW1lRmllbGQudmFsdWUpO1xuICAgICAgICAgICAgY2xlYW5VcCgpO1xuICAgICAgICB9O1xuICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlU3VibWlzc2lvbik7XG4gICAgICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgbW9kYWwuY2xvc2UoKTtcbiAgICAgICAgICAgIGNsZWFuVXAoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG47XG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0TmFtZU1vZGFsO1xuIiwiaW1wb3J0IFByb2plY3RzSW5zdGFuY2UgZnJvbSBcIi4uLy4uL2NsYXNzZXMvUHJvamVjdHNcIjtcbmltcG9ydCBUb0RvUHJpb3JpdHkgZnJvbSBcIi4uLy4uL2VudW1zL1RvRG9Qcmlvcml0eVwiO1xuZnVuY3Rpb24gdG9Eb0Zvcm0oY29udGFpbmVyLCBwb3NpdGlvbiwgZm9ybUFjdGlvbikge1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidG8tZG8tZm9ybVwiKVswXSlcbiAgICAgICAgcmV0dXJuOyAvLyBwcmV2ZW50IGR1cGxpY2F0ZXNcbiAgICAvLyBIVE1MIGVsZW1lbnQgY3JlYXRpb25cbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGNvbnN0IHByb2plY3RHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgcHJvamVjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgY29uc3QgdGl0bGVHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgZGV0YWlsc0dyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBkZXRhaWxzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBjb25zdCBkZXRhaWxzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgZGF0ZUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBkYXRlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgcHJpb3JpdHlHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgcHJpb3JpdHlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgY29uc3QgcHJpb3JpdHlCdG4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBwcmlvcml0eUJ0bjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IHByaW9yaXR5QnRuMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3Qgc3VibWl0R3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAvLyBib290c3RyYXAgY2xhc3Nlc1xuICAgIHByb2plY3RHcm91cC5jbGFzc0xpc3QuYWRkKFwiZC1mbGV4XCIsIFwiYWxpZ24taXRlbXMtY2VudGVyXCIsIFwibWItM1wiLCBcImdhcC0zXCIpO1xuICAgIHRpdGxlR3JvdXAuY2xhc3NMaXN0LmFkZChcImQtZmxleFwiLCBcImFsaWduLWl0ZW1zLWNlbnRlclwiLCBcIm1iLTNcIiwgXCJnYXAtM1wiKTtcbiAgICBkZXRhaWxzR3JvdXAuY2xhc3NMaXN0LmFkZChcImQtZmxleFwiLCBcImFsaWduLWl0ZW1zLWNlbnRlclwiLCBcIm1iLTNcIiwgXCJnYXAtM1wiKTtcbiAgICBkYXRlR3JvdXAuY2xhc3NMaXN0LmFkZChcImQtZmxleFwiLCBcImFsaWduLWl0ZW1zLWNlbnRlclwiLCBcIm1iLTNcIiwgXCJnYXAtM1wiKTtcbiAgICBwcmlvcml0eUdyb3VwLmNsYXNzTGlzdC5hZGQoXCJkLWZsZXhcIiwgXCJhbGlnbi1pdGVtcy1jZW50ZXJcIiwgXCJtYi0zXCIpO1xuICAgIHN1Ym1pdEdyb3VwLmNsYXNzTGlzdC5hZGQoXCJkLWZsZXhcIiwgXCJhbGlnbi1pdGVtcy1jZW50ZXJcIiwgXCJqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIsIFwibWItM1wiLCBcImdhcC0zXCIpO1xuICAgIHRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udHJvbFwiKTtcbiAgICBkZXRhaWxzSW5wdXQuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udHJvbFwiKTtcbiAgICBkYXRlSW5wdXQuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udHJvbFwiKTtcbiAgICBzdWJtaXQuY2xhc3NMaXN0LmFkZChcImJnLXN1Y2Nlc3NcIik7XG4gICAgY2FuY2VsLmNsYXNzTGlzdC5hZGQoXCJiZy1kYW5nZXJcIik7XG4gICAgcHJvamVjdFNlbGVjdC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1zZWxlY3RcIik7XG4gICAgcHJpb3JpdHlCdG4xLmNsYXNzTGlzdC5hZGQoXCJiZy1zdWNjZXNzLXN1YnRsZVwiLCBcIm14LTFcIik7XG4gICAgcHJpb3JpdHlCdG4yLmNsYXNzTGlzdC5hZGQoXCJiZy13YXJuaW5nLXN1YnRsZVwiLCBcIm14LTFcIik7XG4gICAgcHJpb3JpdHlCdG4zLmNsYXNzTGlzdC5hZGQoXCJiZy1kYW5nZXItc3VidGxlXCIsIFwibXgtMVwiKTtcbiAgICAvLyB0ZXh0IGNvbnRlbnRcbiAgICBwcm9qZWN0VGV4dC5pbm5lclRleHQgPSBcIlByb2plY3Q6XCI7XG4gICAgdGl0bGVUZXh0LmlubmVyVGV4dCA9IFwiVGl0bGU6XCI7XG4gICAgZGV0YWlsc1RleHQuaW5uZXJUZXh0ID0gXCJEZXRhaWxzOlwiO1xuICAgIGRhdGVUZXh0LmlubmVyVGV4dCA9IFwiRGF0ZTpcIjtcbiAgICBwcmlvcml0eVRleHQuaW5uZXJUZXh0ID0gXCJQcmlvcml0eTpcIjtcbiAgICBwcmlvcml0eUJ0bjEuaW5uZXJUZXh0ID0gXCJsb3dcIjtcbiAgICBwcmlvcml0eUJ0bjIuaW5uZXJUZXh0ID0gXCJtZWRcIjtcbiAgICBwcmlvcml0eUJ0bjMuaW5uZXJUZXh0ID0gXCJoaWdoXCI7XG4gICAgc3VibWl0LmlubmVyVGV4dCA9IFwiQWRkXCI7XG4gICAgY2FuY2VsLmlubmVyVGV4dCA9IFwiQ2FuY2VsXCI7XG4gICAgLy8gYXR0cmlidXRlc1xuICAgIGZvcm0ubWV0aG9kID0gXCJkaWFsb2dcIjtcbiAgICBwcm9qZWN0U2VsZWN0LmlkID0gXCJwcm9qZWN0LXNlbGVjdFwiO1xuICAgIHByb2plY3RUZXh0Lmh0bWxGb3IgPSBcInByb2plY3Qtc2VsZWN0XCI7XG4gICAgdGl0bGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgdGl0bGVJbnB1dC5pZCA9IFwidGl0bGVcIjtcbiAgICB0aXRsZVRleHQuaHRtbEZvciA9IFwidGl0bGVcIjtcbiAgICBkZXRhaWxzSW5wdXQuaWQgPSBcImRldGFpbHNcIjtcbiAgICBkZXRhaWxzVGV4dC5odG1sRm9yID0gXCJkZXRhaWxzXCI7XG4gICAgZGF0ZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBkYXRlSW5wdXQuaWQgPSBcImRhdGVcIjtcbiAgICBkYXRlVGV4dC5odG1sRm9yID0gXCJkYXRlXCI7XG4gICAgZGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcbiAgICBwcmlvcml0eUJ0bjEudHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgcHJpb3JpdHlCdG4yLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIHByaW9yaXR5QnRuMy50eXBlID0gXCJidXR0b25cIjtcbiAgICBwcmlvcml0eUJ0bjEudGl0bGUgPSBcImxvdyBwcmlvcml0eVwiO1xuICAgIHByaW9yaXR5QnRuMi50aXRsZSA9IFwibWVkaXVtIHByaW9yaXR5XCI7XG4gICAgcHJpb3JpdHlCdG4zLnRpdGxlID0gXCJoaWdoIHByaW9yaXR5XCI7XG4gICAgc3VibWl0LnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgIGNhbmNlbC50eXBlID0gXCJyZXNldFwiO1xuICAgIC8vIHByaW9yaXR5IG51bWJlciBpbnB1dFxuICAgIGxldCBwcmlvcml0eTtcbiAgICBwcmlvcml0eUJ0bjEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcHJpb3JpdHkgPSBUb0RvUHJpb3JpdHkuTG93O1xuICAgIH0pO1xuICAgIHByaW9yaXR5QnRuMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBwcmlvcml0eSA9IFRvRG9Qcmlvcml0eS5NZWRpdW07XG4gICAgfSk7XG4gICAgcHJpb3JpdHlCdG4zLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHByaW9yaXR5ID0gVG9Eb1ByaW9yaXR5LkhpZ2g7XG4gICAgfSk7XG4gICAgLy8gc2ltcGx5IGNsb3NlIGZvcm0gb24gY2FuY2VsXG4gICAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChtb2RhbCk7XG4gICAgfSk7XG4gICAgLy8gcnVuIG5lY2Vzc2FyeSBhY3Rpb24gd2hlbiBzdWJtaXR0ZWRcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKCkgPT4ge1xuICAgICAgICBmb3JtQWN0aW9uKHByb2plY3RTZWxlY3QudmFsdWUsIHRpdGxlSW5wdXQudmFsdWUsIGRldGFpbHNJbnB1dC52YWx1ZSwgZGF0ZUlucHV0LnZhbHVlLCBwcmlvcml0eSk7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChtb2RhbCk7XG4gICAgfSk7XG4gICAgLy8gYWRkaW5nIHRvIERPTVxuICAgIGZvciAoY29uc3QgcHJvamVjdCBvZiBQcm9qZWN0c0luc3RhbmNlLmdldEFsbCgpKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBwcm9qZWN0T3B0aW9uLmlubmVyVGV4dCA9IHByb2plY3QubmFtZTtcbiAgICAgICAgcHJvamVjdE9wdGlvbi52YWx1ZSA9IHByb2plY3QuSUQ7XG4gICAgICAgIHByb2plY3RTZWxlY3QuYXBwZW5kQ2hpbGQocHJvamVjdE9wdGlvbik7XG4gICAgfVxuICAgIDtcbiAgICBwcm9qZWN0R3JvdXAuYXBwZW5kQ2hpbGQocHJvamVjdFRleHQpO1xuICAgIHByb2plY3RHcm91cC5hcHBlbmRDaGlsZChwcm9qZWN0U2VsZWN0KTtcbiAgICB0aXRsZUdyb3VwLmFwcGVuZENoaWxkKHRpdGxlVGV4dCk7XG4gICAgdGl0bGVHcm91cC5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcbiAgICBkZXRhaWxzR3JvdXAuYXBwZW5kQ2hpbGQoZGV0YWlsc1RleHQpO1xuICAgIGRldGFpbHNHcm91cC5hcHBlbmRDaGlsZChkZXRhaWxzSW5wdXQpO1xuICAgIGRhdGVHcm91cC5hcHBlbmRDaGlsZChkYXRlVGV4dCk7XG4gICAgZGF0ZUdyb3VwLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG4gICAgcHJpb3JpdHlHcm91cC5hcHBlbmRDaGlsZChwcmlvcml0eVRleHQpO1xuICAgIHByaW9yaXR5R3JvdXAuYXBwZW5kQ2hpbGQocHJpb3JpdHlCdG4xKTtcbiAgICBwcmlvcml0eUdyb3VwLmFwcGVuZChwcmlvcml0eUJ0bjIpO1xuICAgIHByaW9yaXR5R3JvdXAuYXBwZW5kKHByaW9yaXR5QnRuMyk7XG4gICAgc3VibWl0R3JvdXAuYXBwZW5kQ2hpbGQoc3VibWl0KTtcbiAgICBzdWJtaXRHcm91cC5hcHBlbmRDaGlsZChjYW5jZWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdEdyb3VwKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlR3JvdXApO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGV0YWlsc0dyb3VwKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRhdGVHcm91cCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUdyb3VwKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEdyb3VwKTtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWwpO1xuICAgIG1vZGFsLnNob3dNb2RhbCgpO1xuICAgIC8vIHBvc2l0aW9uIG1vZGFsXG4gICAgY29uc3QgcG9zaXRpb25Ub29Mb3cgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyICsgMTAwIDwgcG9zaXRpb24uYm90dG9tO1xuICAgIGlmIChwb3NpdGlvblRvb0xvdykge1xuICAgICAgICBtb2RhbC5zdHlsZS50b3AgPSBgJHtwb3NpdGlvbi50b3AgLSBtb2RhbC5jbGllbnRIZWlnaHQgLSAxNX1weGA7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBtb2RhbC5zdHlsZS50b3AgPSBgJHtwb3NpdGlvbi5ib3R0b219cHhgO1xuICAgIH1cbiAgICBtb2RhbC5zdHlsZS5sZWZ0ID0gYCR7cG9zaXRpb24ubGVmdH1weGA7XG4gICAgbW9kYWwuc3R5bGUucmlnaHQgPSAnMS41cmVtJztcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwibXQtMFwiKTtcbiAgICByZXR1cm4geyB0aXRsZUlucHV0LCBkZXRhaWxzSW5wdXQsIGRhdGVJbnB1dCwgc3VibWl0IH07XG59XG47XG5leHBvcnQgZGVmYXVsdCB0b0RvRm9ybTtcbiIsImltcG9ydCBlIGZyb20gXCIuL2VsZW1lbnREaWN0aW9uYXJ5XCI7XG5jb25zdCBjYXRlZ29yeVN0ZXBzID0gW1xuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiQXZlLCBEZW5hcml1cyFcIixcbiAgICAgICAgaW50cm86IFwiSXQncyBmdW4uIEl0J3Mgc2ltcGxlLiBNZWV0IHRoZSBvbmx5IHRvLWRvIGFwcCB5b3UnbGwgZXZlciBuZWVkIVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBlbGVtZW50OiBlLmJhbm5lci5nZXQoKSxcbiAgICAgICAgdGl0bGU6IFwiRGVmaW5lOiBjYXRlZ29yeVwiLFxuICAgICAgICBpbnRybzogXCJUaGlzIGlzIGEgZ3JvdXAgd2hpY2ggZmlsdGVycyB0by1kb3MgYW5kIHNvcnRzIHRoZW0gYnkgcHJpb3JpdHkgYW5kIGR1ZSBkYXRlLiA8Yj4nQWxsIFRhc2tzJzwvYj4gaW5jbHVkZXMgZXZlcnl0aGluZy5cIixcbiAgICAgICAgcG9zaXRpb246IFwicmlnaHRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBlbGVtZW50OiBlLnRvRG9BcnRpY2xlMS5nZXQoKSxcbiAgICAgICAgdGl0bGU6IFwiQSBUby1EbyBFbGVtZW50XCIsXG4gICAgICAgIGludHJvOiBcIkdldCBhIGdsYW5jZSBvZiB0aGUgdGl0bGUsIGR1ZSBkYXRlLCBhbmQgb3RoZXIgZGV0YWlscy4gQ2xpY2sgdGhlIGNoZWNrYm94IHRvIHRpY2sgaXQgb2ZmIVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGVsZW1lbnQ6IGUudG9Eb0FydGljbGUyLmdldCgpLFxuICAgICAgICB0aXRsZTogXCJJbXBvcnRhbmNlIGxhYmVsc1wiLFxuICAgICAgICBpbnRybzogXCJOb3RpY2UgdGhlIGJvcmRlciBjb2xvcj8gSXQncyBiZWNhdXNlIGhpZ2gtcHJpb3JpdHkgdG8tZG9zIGFyZSBsYWJlbGVkIHJlZC5cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBlbGVtZW50OiBlLnRvRG9BcnRpY2xlMy5nZXQoKSxcbiAgICAgICAgdGl0bGU6IFwiT3ZlcmR1ZSA6KFwiLFxuICAgICAgICBpbnRybzogXCJUaGUgYnJvbnplIGJhY2tncm91bmQgc2hvd3MgdGhhdCB0aGlzIHRvLWRvJ3MgZHVlIGRhdGUgaGFzIHBhc3NlZC5cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBlbGVtZW50OiBlLnRvRG9BcnRpY2xlNC5nZXQoKSxcbiAgICAgICAgdGl0bGU6IFwiTGFiZWxzIGNvbnRpbnVlZFwiLFxuICAgICAgICBpbnRybzogXCJUaGUgb3JhbmdlIGJvcmRlciBoZXJlIHNob3dzIHRoaXMgaXMgYSBtZWRpdW0tcHJpb3JpdHkgdG8tZG8uXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZWxlbWVudDogZS50b0RvQXJ0aWNsZTUuZ2V0KCksXG4gICAgICAgIHRpdGxlOiBcIkRhdGUgc29ydGluZ1wiLFxuICAgICAgICBpbnRybzogXCJBcyBzdWdnZXN0ZWQsIGluIGEgY2F0ZWdvcnkgdG8tZG9zIHRoYXQgYXJlIG9mIHRoZSBzYW1lIGltcG9ydGFuY2UgYXJlIGZ1cnRoZXIgc29ydGVkIGJ5IGR1ZSBkYXRlIChpbiBkZXNjZW5kaW5nIG9yZGVyKS5cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBlbGVtZW50OiBlLnRvRG9BcnRpY2xlNi5nZXQoKSxcbiAgICAgICAgdGl0bGU6IFwiQ3VjdW1iZXItY29vbFwiLFxuICAgICAgICBpbnRybzogXCJUaGlzIGdyZWVuIGJvcmRlciBqdXN0IG1lYW5zIHRoaXMgdG8tZG8gaXMgbG93LXByaW9yaXR5LlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGVsZW1lbnQ6IGUubWVudUljb24uaXNWaXNpYmxlKCkgPyBlLm1lbnVJY29uLmdldCgpIDogZS5uYXZCYXIuZ2V0KCksXG4gICAgICAgIHRpdGxlOiBcIlRoZSBtZW51XCIsXG4gICAgICAgIGludHJvOiBlLm1lbnVJY29uLmlzVmlzaWJsZSgpID8gXCJDbGljayB0aGUgaWNvbiB0byBvcGVuIHRoZSBzaWRlLWJhciBhbmQgZGlzY292ZXIgbW9yZSFcIiA6IFwiTmF2aWdhdGUgdGhlIHRvIHRoZSBvdGhlciBwYWdlcyBmcm9tIHRoaXMgc2lkZWJhci5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZWxlbWVudDogZS50b3VyQnV0dG9uLmdldCgpLFxuICAgICAgICB0aXRsZTogXCJBIFF1aWNrIFJlbWluZGVyXCIsXG4gICAgICAgIGludHJvOiBcIlRoaXMgdG91ciB3aWxsIG5vdCBzaG93IHdoZW4geW91IGNvbWUgYmFjay4gRXZlciBuZWVkIHRoaXMgdG91ciBhZ2Fpbj8gSnVzdCB0YXAgdGhpcyBidXR0b24uXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZWxlbWVudDogZS5jYXRlZ29yeTIuZ2V0KCksXG4gICAgICAgIHRpdGxlOiBcIkV4YW1wbGUgY2F0ZWdvcnlcIixcbiAgICAgICAgaW50cm86IFwiVGhlIDxiPidJbXBvcnRhbnQnPC9iPiBjYXRlZ29yeSBzdG9yZXMgb25seSBoaWdoLXByaW9yaXR5IHRvLWRvcy5cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBlbGVtZW50OiBlLnByb2plY3RIZWFkZXIuZ2V0KCksXG4gICAgICAgIHRpdGxlOiBcIkFib3V0IFByb2plY3RzXCIsXG4gICAgICAgIGludHJvOiBcIlRoZXNlIGFyZSB0aGUgZ3JvdXBzIG9mIHRvLWRvcyB0aGF0IDxpPnlvdTwvaT4gbWFrZS5cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBlbGVtZW50OiBlLmFkZFByb2plY3RJY29uLmdldCgpLFxuICAgICAgICB0aXRsZTogXCJNYWtlIHlvdXIgb3duIVwiLFxuICAgICAgICBpbnRybzogXCJBZnRlciBjbG9zaW5nIHRoZSB0b3VyLCB5b3UgY2FuIGNsaWNrIHRoZSBwbHVzIGljb24gdG8gYWRkIHlvdXIgb3duIHByb2plY3QhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZWxlbWVudDogZS5wcm9qZWN0TGlua0xJLmdldCgpLFxuICAgICAgICB0aXRsZTogXCJGb3IgZXhhbXBsZS4uLlwiLFxuICAgICAgICBpbnRybzogXCJMb29rIGludG8gdGhpcyBwcm9qZWN0IEkgbWFkZSBqdXN0IGZvciB5b3UhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZWxlbWVudDogZS5wcm9qZWN0TGluay5nZXQoKSxcbiAgICAgICAgdGl0bGU6IFwiVHJvdWJsZSBvcGVuaW5nP1wiLFxuICAgICAgICBpbnRybzogXCI8c21hbGw+KFNlbGVjdCBkb25lIGFuZCB0aGVuIHlvdSBjYW4gb3BlbiB0aGUgcGFnZS4pPC9zbWFsbD5cIlxuICAgIH1cbl07XG5leHBvcnQgZGVmYXVsdCBjYXRlZ29yeVN0ZXBzO1xuIiwiLy8gZmFjdG9yeSBmdW5jdGlvbiBwYXR0ZXJuIGZvciBtb3JlIGR5bmFtaWMgb2JqZWN0IGNyZWF0aW9uXG5jb25zdCBjcmVhdGVFbGVtZW50RGljdGlvbmFyeSA9ICgpID0+IHtcbiAgICBjb25zdCBzdGVwRWxlbWVudCA9IChnZXQsIHN0YWdlaGFuZCA9IGZhbHNlLCBjaGFuZ2VyID0gZmFsc2UpID0+IHtcbiAgICAgICAgY29uc3QgaXNWaXNpYmxlID0gKCkgPT4geyB2YXIgX2E7IHJldHVybiAhKChfYSA9IGdldCgpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZC1ub25lXCIpKTsgfTtcbiAgICAgICAgcmV0dXJuIHsgZ2V0LCBzdGFnZWhhbmQsIGNoYW5nZXIsIGlzVmlzaWJsZSB9O1xuICAgIH07XG4gICAgY29uc3QgYmFubmVyID0gc3RlcEVsZW1lbnQoKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoMlwiKVswXSk7XG4gICAgY29uc3QgdG9Eb0FydGljbGUxID0gc3RlcEVsZW1lbnQoKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJhcnRpY2xlXCIpWzBdLCBmYWxzZSwgdHJ1ZSk7XG4gICAgY29uc3QgdG9Eb0FydGljbGUyID0gc3RlcEVsZW1lbnQoKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJhcnRpY2xlXCIpWzFdLCBmYWxzZSwgdHJ1ZSk7XG4gICAgY29uc3QgdG9Eb0FydGljbGUzID0gc3RlcEVsZW1lbnQoKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJhcnRpY2xlXCIpWzJdLCBmYWxzZSwgdHJ1ZSk7XG4gICAgY29uc3QgdG9Eb0FydGljbGU0ID0gc3RlcEVsZW1lbnQoKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJhcnRpY2xlXCIpWzNdLCBmYWxzZSwgdHJ1ZSk7XG4gICAgY29uc3QgdG9Eb0FydGljbGU1ID0gc3RlcEVsZW1lbnQoKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJhcnRpY2xlXCIpWzRdLCBmYWxzZSwgdHJ1ZSk7XG4gICAgY29uc3QgdG9Eb0FydGljbGU2ID0gc3RlcEVsZW1lbnQoKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJhcnRpY2xlXCIpWzVdLCBmYWxzZSwgdHJ1ZSk7XG4gICAgY29uc3QgbWVudUljb24gPSBzdGVwRWxlbWVudCgoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnUtaWNvblwiKSwgZmFsc2UsIHRydWUpO1xuICAgIGNvbnN0IHNpZGViYXIgPSBzdGVwRWxlbWVudCgoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIm5hdlwiKVswXSk7XG4gICAgY29uc3QgdG91ckJ1dHRvbiA9IHN0ZXBFbGVtZW50KCgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25bdGl0bGU9J2NyZWF0ZSB0b3VyJ11cIikpO1xuICAgIGNvbnN0IGNhdGVnb3J5MiA9IHN0ZXBFbGVtZW50KCgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjY2F0ZWdvcnktbGlzdCA+IGxpXCIpWzFdKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0SWNvbiA9IHN0ZXBFbGVtZW50KCgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3QtaWNvblwiKSk7XG4gICAgY29uc3QgcHJvamVjdEhlYWRlciA9IHN0ZXBFbGVtZW50KCgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1oZWFkZXJcIikpO1xuICAgIGNvbnN0IHByb2plY3RMaW5rTEkgPSBzdGVwRWxlbWVudCgoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbGlzdFwiKSk7XG4gICAgY29uc3QgcHJvamVjdExpbmsgPSBzdGVwRWxlbWVudCgoKSA9PiB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcHJvamVjdC1saXN0ID4gbGkgPiBwXCIpWzBdO1xuICAgICAgICAoX2EgPSBzaWRlYmFyLmdldCgpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGlmIChtZW51SWNvbi5pc1Zpc2libGUoKSAmJiBzaWRlYmFyLmlzVmlzaWJsZSgpKSB7XG4gICAgICAgICAgICAgICAgKF9hID0gc2lkZWJhci5nZXQoKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbGluaztcbiAgICB9LCB0cnVlKTtcbiAgICBjb25zdCBhZGRUb0RvSWNvbiA9IHN0ZXBFbGVtZW50KCgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpLmJpLWpvdXJuYWwtcGx1c1wiKSk7XG4gICAgY29uc3QgZ2FtZUljb24gPSBzdGVwRWxlbWVudCgoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtaWNvblwiKSwgdHJ1ZSk7XG4gICAgY29uc3QgZ2FtZUltZyA9IHN0ZXBFbGVtZW50KCgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW1nXCIpWzBdKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBiYW5uZXIsXG4gICAgICAgIHRvRG9BcnRpY2xlMSxcbiAgICAgICAgdG9Eb0FydGljbGUyLFxuICAgICAgICB0b0RvQXJ0aWNsZTMsXG4gICAgICAgIHRvRG9BcnRpY2xlNCxcbiAgICAgICAgdG9Eb0FydGljbGU1LFxuICAgICAgICB0b0RvQXJ0aWNsZTYsXG4gICAgICAgIG1lbnVJY29uLFxuICAgICAgICBzaWRlYmFyLFxuICAgICAgICB0b3VyQnV0dG9uLFxuICAgICAgICBjYXRlZ29yeTIsXG4gICAgICAgIHByb2plY3RIZWFkZXIsXG4gICAgICAgIHByb2plY3RMaW5rLFxuICAgICAgICBwcm9qZWN0TGlua0xJLFxuICAgICAgICBhZGRQcm9qZWN0SWNvbixcbiAgICAgICAgYWRkVG9Eb0ljb24sXG4gICAgICAgIGdhbWVJY29uLFxuICAgICAgICBnYW1lSW1nXG4gICAgfTtcbn07XG4vLyBzaW5nbGV0b25cbmNvbnN0IGVsZW1lbnREaWN0aW9uYXJ5ID0gY3JlYXRlRWxlbWVudERpY3Rpb25hcnkoKTtcbmV4cG9ydCBkZWZhdWx0IGVsZW1lbnREaWN0aW9uYXJ5O1xuIiwiaW1wb3J0IGUgZnJvbSBcIi4vZWxlbWVudERpY3Rpb25hcnlcIjtcbmNvbnN0IGdhbWVTdGVwcyA9IFtcbiAgICB7XG4gICAgICAgIGVsZW1lbnQ6IGUudG9Eb0FydGljbGUxLmdldCgpLFxuICAgICAgICB0aXRsZTogXCJXb3JrIGhhcmQhIFBsYXkgaGFyZCFcIixcbiAgICAgICAgaW50cm86IFwiVXNpbmcgdGhvc2UgY29pbnMgeW91IGVhcm4gZnJvbSBjb21wbGV0aW5nIHRvLWRvcywgeW91IGNhbiBwYXkgZm9yIGEgNS1taW51dGUgZ2FtZSBzZXNzaW9uIVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBlbGVtZW50OiBlLmdhbWVJbWcuZ2V0KCksXG4gICAgICAgIHRpdGxlOiBcIkdhbWUgdGltZS5cIixcbiAgICAgICAgaW50cm86IFwiQ2xpY2sgdGhlIGdhbWUncyB0aHVtYm5haWwgdG8gcGxheS4gV2hlbiB5b3UgZG8sIHRoZSBhbW91bnQgb2YgY29pbnMgc3BlY2lmaWVkIG9uIHRoZSBjYXJkIHdpbGwgYmUgZGVkdWN0ZWQuXCIsXG4gICAgICAgIHBvc2l0aW9uOiBcInJpZ2h0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiQnktdGhlLXdheVwiLFxuICAgICAgICBpbnRybzogXCJZb3UgY2FuIGRvd25sb2FkIHRoaXMgYXMgYW4gYXBwIHdpdGggb2ZmbGluZSBhY2Nlc3MuIEVuam95IHRoZSBwcm9kdWN0aXZpdHkgZ2FpbnMhXCJcbiAgICB9LFxuXTtcbmV4cG9ydCBkZWZhdWx0IGdhbWVTdGVwcztcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IFByb2plY3RzSW5zdGFuY2UgZnJvbSBcIi4uLy4uL2NsYXNzZXMvUHJvamVjdHNcIjtcbmltcG9ydCBwb3B1bGF0ZVR1dG9yaWFsUHJvamVjdCBmcm9tIFwiLi4vLi4vZnVuY3Rpb25zL3BvcHVsYXRlSW5pdGlhbFByb2plY3RzXCI7XG5pbXBvcnQgc2hvd0FsbFRhc2tzIGZyb20gXCIuLi9vdXRwdXRzL3Nob3dBbGxUYXNrc1wiO1xuaW1wb3J0IGUgZnJvbSBcIi4vZWxlbWVudERpY3Rpb25hcnlcIjtcbmltcG9ydCBzdGFnZXMgZnJvbSBcIi4vc3RhZ2VzXCI7XG5mdW5jdGlvbiByZW5kZXJPbmJvYXJkaW5nKCkge1xuICAgIGlmICghUHJvamVjdHNJbnN0YW5jZS5wcm9qZWN0RXhpc3RzKHAgPT4gcC5uYW1lID09PSBcIlR1dG9yaWFsXCIpKVxuICAgICAgICBwb3B1bGF0ZVR1dG9yaWFsUHJvamVjdCgpO1xuICAgIHNob3dBbGxUYXNrcygpOyAvLyBtdXN0IGJlIGFmdGVyIHBvcHVsYXRlVHV0b3JpYWxQcm9qZWN0IGZvciB0aGUgc2FtZSByZWFzb24gZXhwbGFpbmVkIGluIGFwcC50cyBjb21tZW50cy5cbiAgICBzZXRUaW1lb3V0KCgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgbGV0IHN0YWdlSW5kZXggPSAwO1xuICAgICAgICAvLyBkaXNwbGF5IHN0YWdlIG9uZVxuICAgICAgICBsZXQgY3VycmVudFN0YWdlID0gc3RhZ2VzW3N0YWdlSW5kZXhdKCk7XG4gICAgICAgIC8vIHNldCB1cCBzdGFnZS1jaGFuZ2Vyc1xuICAgICAgICBmb3IgKGNvbnN0IG5hbWUgaW4gZSkge1xuICAgICAgICAgICAgY29uc3QgdG91ciA9IHlpZWxkIGN1cnJlbnRTdGFnZTtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlW25hbWVdO1xuICAgICAgICAgICAgY29uc3QgRE9NRWxlbWVudCA9IGVsZW1lbnQuZ2V0KCk7XG4gICAgICAgICAgICBsZXQgYWN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnN0YWdlaGFuZCkge1xuICAgICAgICAgICAgICAgIGFjdGlvbiA9ICgpID0+IGN1cnJlbnRTdGFnZSA9IHN0YWdlc1srK3N0YWdlSW5kZXhdKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChlbGVtZW50LmNoYW5nZXIpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24gPSAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHsgdG91ci5uZXh0U3RlcCgpOyB9LCA1MDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgaWYgKERPTUVsZW1lbnQgJiYgdG91ci5pc0FjdGl2ZSgpICYmIGFjdGlvbikge1xuICAgICAgICAgICAgICAgIERPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFjdGlvbiwgeyBvbmNlOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgO1xuICAgICAgICB9XG4gICAgICAgIDtcbiAgICB9KSwgMTUwMCk7XG59XG47XG5leHBvcnQgZGVmYXVsdCByZW5kZXJPbmJvYXJkaW5nO1xuIiwiaW1wb3J0IGUgZnJvbSBcIi4vZWxlbWVudERpY3Rpb25hcnlcIjtcbmNvbnN0IHByb2plY3RTdGVwcyA9IFtcbiAgICB7XG4gICAgICAgIGVsZW1lbnQ6IGUuYmFubmVyLmdldCgpLFxuICAgICAgICB0aXRsZTogXCJTbyB3ZSBjb250aW51ZS4uLlwiLFxuICAgICAgICBpbnRybzogXCJXZWxjb21lIHRvICA8Yj4nVHV0b3JpYWwnPC9iPiBwcm9qZWN0IHBhZ2UhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGVsZW1lbnQ6IGUuYWRkVG9Eb0ljb24uZ2V0KCksXG4gICAgICAgIHRpdGxlOiBcIkFkZGluZyB0by1kb3NcIixcbiAgICAgICAgaW50cm86IFwiVGhpcyBidXR0b24gb3BlbnMgYSBmb3JtIHRvIGFkZCB5b3VyIG5ldyB0by1kb3MuXCIsXG4gICAgICAgIHBvc2l0aW9uOiBcImxlZnRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBlbGVtZW50OiBlLnRvRG9BcnRpY2xlMS5nZXQoKSxcbiAgICAgICAgdGl0bGU6IFwiTW9yZSBwb3dlcmZ1bCB0by1kb3NcIixcbiAgICAgICAgaW50cm86IFwiQSB0by1kbyBlbGVtZW50IHdpdGhpbiBhIHByb2R1Y3QgcGFnZSBhbHNvIGhhcyBidXR0b25zIHRvIGVkaXQgLyBkZWxldGUgaXQuXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZWxlbWVudDogZS50b0RvQXJ0aWNsZTMuZ2V0KCksXG4gICAgICAgIHRpdGxlOiBcIldhbnQgdG8gbW92ZT9cIixcbiAgICAgICAgaW50cm86IFwiSnVzdCBkcmFnIGEgdG8tZG8gZWxlbWVudCBhbmQgZHJvcCBpdCBvbiBhIHByb2plY3QgbGluayBpbiB0aGUgbWVudS4gPGk+T25seSB3b3JrcyBvbiB3aWRlciBzY3JlZW5zLjwvaT5cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBlbGVtZW50OiBlLnRvRG9BcnRpY2xlNS5nZXQoKSxcbiAgICAgICAgdGl0bGU6IFwiVGhlIEVhc3RlciBFZ2dcIixcbiAgICAgICAgaW50cm86IFwiQ2hlY2sgdGhpcyB0by1kbyB0aGVuIGRlbGV0ZSBpdC4uLiBZb3UganVzdCBlYXJuZWQgc29tZSBjb2lucyFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBlbGVtZW50OiBlLnRvRG9BcnRpY2xlNi5nZXQoKSxcbiAgICAgICAgdGl0bGU6IFwiVGhlIENvc3QgZm9yIExhemluZXNzXCIsXG4gICAgICAgIGludHJvOiBcIklmIHlvdSBjb21wbGV0ZSBhbiBvdmVyZHVlIHRvLWRvIGxhdGUsIHlvdSB3aWxsIGxvc2UgdGhlIGNvaW5zIHlvdSBjb3VsZCBoYXZlIG90aGVyd2lzZSBnYWluZWQuXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZWxlbWVudDogZS5nYW1lSWNvbi5nZXQoKSxcbiAgICAgICAgdGl0bGU6IFwiQSBsaXR0bGUgcmV3YXJkXCIsXG4gICAgICAgIGludHJvOiBcIkdyZWF0IGpvYiBnZXR0aW5nIHRoaXMgZmFyLiBTcGVuZCB5b3VyIGhhcmQtZWFybmVkIG1vbmV5IGF0IHRoZSBhcmNhZGUhXCIsXG4gICAgICAgIHBvc2l0aW9uOiBcImxlZnRcIlxuICAgIH0sXG5dO1xuZXhwb3J0IGRlZmF1bHQgcHJvamVjdFN0ZXBzO1xuIiwiaW1wb3J0IGVsZW1lbnREaWN0aW9uYXJ5IGZyb20gXCIuL2VsZW1lbnREaWN0aW9uYXJ5XCI7XG5pbXBvcnQgcmVuZGVyT25ib2FyZGluZyBmcm9tIFwiLi9vbmJvYXJkaW5nXCI7XG5mdW5jdGlvbiBzZXRVcFRvdXJCdXR0b24oKSB7XG4gICAgdmFyIF9hO1xuICAgIChfYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG91ci1idXR0b25cIikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHJlbmRlck9uYm9hcmRpbmcoKTtcbiAgICAgICAgLy8gcHJldmVudCBzaWRlYmFyIGNvdmVyaW5nIHR1dG9yaWFsIG9uIG1vYmlsZVxuICAgICAgICBpZiAoZWxlbWVudERpY3Rpb25hcnkubWVudUljb24uaXNWaXNpYmxlKCkgJiYgZWxlbWVudERpY3Rpb25hcnkubmF2QmFyLmlzVmlzaWJsZSgpKSB7IC8vIGFzIGluIG1vYmlsZSBzY3JlZW5cbiAgICAgICAgICAgIChfYSA9IGVsZW1lbnREaWN0aW9uYXJ5Lm5hdkJhci5nZXQoKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIik7XG4gICAgICAgIH1cbiAgICAgICAgO1xuICAgIH0pO1xufVxuO1xuZXhwb3J0IGRlZmF1bHQgc2V0VXBUb3VyQnV0dG9uO1xuIiwiaW1wb3J0IGludHJvSnMgZnJvbSBcImludHJvLmpzXCI7XG5pbXBvcnQgY2F0ZWdvcnlTdGVwcyBmcm9tIFwiLi9jYXRlZ29yeVN0ZXBzXCI7XG5pbXBvcnQgZ2FtZVN0ZXBzIGZyb20gXCIuL2dhbWVTdGVwc1wiO1xuaW1wb3J0IHByb2plY3RTdGVwcyBmcm9tIFwiLi9wcm9qZWN0U3RlcHNcIjtcbmNvbnN0IGNyZWF0ZVN0YWdlID0gKG9wdGlvbnMpID0+IHtcbiAgICByZXR1cm4gKCkgPT4gaW50cm9KcygpLnNldE9wdGlvbnMob3B0aW9ucykuc3RhcnQoKTtcbn07XG5jb25zdCBzdGFnZXMgPSBbXG4gICAgY3JlYXRlU3RhZ2Uoe1xuICAgICAgICBzdGVwczogY2F0ZWdvcnlTdGVwcyxcbiAgICAgICAgc2hvd0J1bGxldHM6IGZhbHNlLFxuICAgICAgICBzaG93UHJvZ3Jlc3M6IHRydWUsXG4gICAgfSksXG4gICAgY3JlYXRlU3RhZ2UoeyBzdGVwczogcHJvamVjdFN0ZXBzIH0pLFxuICAgIGNyZWF0ZVN0YWdlKHtcbiAgICAgICAgc3RlcHM6IGdhbWVTdGVwcyxcbiAgICAgICAgc2hvd0J1bGxldHM6IGZhbHNlLFxuICAgICAgICBzaG93U3RlcE51bWJlcnM6IHRydWUsXG4gICAgfSksXG5dO1xuZXhwb3J0IGRlZmF1bHQgc3RhZ2VzO1xuIiwiaW1wb3J0IGpzQ29udGFpbmVyIGZyb20gXCIuLi9kb21Db25zdGFudHMvcHJvamVjdENvbnRhaW5lclwiO1xuZnVuY3Rpb24gY2xlYXJQYWdlKCkge1xuICAgIGpzQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAganNDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZCA9IFwibm9uZVwiO1xufVxuZXhwb3J0IGRlZmF1bHQgY2xlYXJQYWdlO1xuIiwiZnVuY3Rpb24gaWRlbXBvdGVudERPTShjb250YWluZXIsIG5ld1JlbmRlciwgaWQpIHtcbiAgICBjb25zdCBwb3NzaWJsZU9sZFJlbmRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICBpZiAocG9zc2libGVPbGRSZW5kZXIpIHtcbiAgICAgICAgY29uc3Qgb2xkUmVuZGVyID0gcG9zc2libGVPbGRSZW5kZXI7XG4gICAgICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUobmV3UmVuZGVyLCBvbGRSZW5kZXIpO1xuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQob2xkUmVuZGVyKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdSZW5kZXIpO1xuICAgIH1cbiAgICA7XG59XG47XG5leHBvcnQgZGVmYXVsdCBpZGVtcG90ZW50RE9NO1xuIiwiaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgUFMgZnJvbSBcIi4uLy4uL2NsYXNzZXMvUHViU3ViXCI7XG5pbXBvcnQganNDb250YWluZXIgZnJvbSBcIi4uL2RvbUNvbnN0YW50cy9wcm9qZWN0Q29udGFpbmVyXCI7XG5pbXBvcnQgZWRpdFRvRG9Gb3JtIGZyb20gXCIuLi9pbnB1dHMvZWRpdFRvRG9Gb3JtXCI7XG5pbXBvcnQgUHJvamVjdHMgZnJvbSBcIi4uLy4uL2NsYXNzZXMvUHJvamVjdHNcIjtcbmltcG9ydCBUb0RvUHJpb3JpdHkgZnJvbSBcIi4uLy4uL2VudW1zL1RvRG9Qcmlvcml0eVwiO1xuaW1wb3J0IFBTRSBmcm9tIFwiLi4vLi4vZW51bXMvUHViU3ViRXZlbnRzXCI7XG5pbXBvcnQgaWRlbXBvdGVudERPTSBmcm9tIFwiLi9pZGVtcG90ZW50RE9NXCI7XG5mdW5jdGlvbiBpZGVtcG90ZW50bHlSZW5kZXJUb0RvKHRvRG8pIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc29sZS50cmFjZSgpO1xuICAgIGNvbnN0IHRvRG9Qcmlvcml0eSA9ICh0b0RvLnByaW9yaXR5ID09PSBUb0RvUHJpb3JpdHkuSGlnaCA/IFwiaGlnaFwiIDpcbiAgICAgICAgdG9Eby5wcmlvcml0eSA9PT0gVG9Eb1ByaW9yaXR5Lk1lZGl1bSA/IFwibWVkaXVtXCIgOlxuICAgICAgICAgICAgdG9Eby5wcmlvcml0eSA9PT0gVG9Eb1ByaW9yaXR5LkxvdyA/IFwibG93XCIgOlxuICAgICAgICAgICAgICAgIFwidmFsdWUgZXJyb3Igd2l0aCBwcmlvcml0eSBudW1iZXJcIik7XG4gICAgY29uc3QgeyBwYXJlbnRJRCB9ID0gdG9EbztcbiAgICBpZiAoIXBhcmVudElEKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUb0RvIG9iamVjdCBmb3IgcmVuZGVyaW5nIG11c3QgaGF2ZSBwYXJlbnRJRFwiKTtcbiAgICBpZiAoIVByb2plY3RzLmdldChwYXJlbnRJRCkpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRvRG8gcGFyZW50SUQgcHJvcGVydHkgbXVzdCBlcXVhbCBQcm9qZWN0IElEIGZvciBzb21lIFByb2plY3QgaW5zdGFuY2UuXCIpO1xuICAgIC8vIEhUTUwgZWxlbWVudHMgZm9yIHRvLWRvIGFydGljbGVcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XG4gICAgY29uc3QgbGVmdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgcmlnaHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IHRvRG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBjb25zdCBkZXRhaWxzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGRldGFpbHNNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG4gICAgY29uc3QgY2xvc2VEZXRhaWxzTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIC8vIGF0dHJpYnV0ZXNcbiAgICBlbGVtZW50LmlkID0gdG9Eby5JRDtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0by1kby1lbGVtZW50XCIsIGBwcmlvcml0eS0ke3RvRG9Qcmlvcml0eX1gLCBcImQtZmxleFwiLCBcImp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIsIFwicC0yXCIsIFwiYmctbGlnaHRcIiwgXCJyb3VuZGVkXCIsIFwibWItM1wiKTtcbiAgICBsZWZ0RGl2LmNsYXNzTGlzdC5hZGQoXCJkLWZsZXhcIiwgXCJhbGlnbi1pdGVtcy1jZW50ZXJcIiwgXCJnYXAtMlwiLCBcImJvcmRlcmxlc3MtY2hpbGRyZW5cIik7XG4gICAgcmlnaHREaXYuY2xhc3NMaXN0LmFkZChcImQtZmxleFwiLCBcImFsaWduLWl0ZW1zLWNlbnRlclwiLCBcImdhcC0yXCIsIFwiYm9yZGVybGVzcy1jaGlsZHJlblwiKTtcbiAgICBjaGVja0JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIGNoZWNrQm94LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNoZWNrLWlucHV0XCIpO1xuICAgIHRvRG9UaXRsZS5odG1sRm9yID0gXCJjb21wbGV0ZUNoZWNrXCI7XG4gICAgdG9Eb1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNoZWNrLWxhYmVsXCIpO1xuICAgIGVkaXRCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgZGVsZXRlQnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGRldGFpbHNCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgY2xvc2VEZXRhaWxzTW9kYWwudHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgZWRpdEJ1dHRvbi50aXRsZSA9IFwiZWRpdFwiO1xuICAgIGRlbGV0ZUJ1dHRvbi50aXRsZSA9IFwiZGVsZXRlXCI7XG4gICAgZGV0YWlsc0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCIpO1xuICAgIGRldGFpbHNNb2RhbC5jbGFzc0xpc3QuYWRkKFwiZGV0YWlsc1wiKTtcbiAgICBjbG9zZURldGFpbHNNb2RhbC5jbGFzc0xpc3QuYWRkKFwiY2xvc2UtZGV0YWlsc1wiKTtcbiAgICAvLyBjb250ZW50XG4gICAgdG9Eb1RpdGxlLmlubmVyVGV4dCA9IHRvRG8udGl0bGU7XG4gICAgZGV0YWlsc0J1dHRvbi5pbm5lclRleHQgPSBcIkRldGFpbHNcIjtcbiAgICBlZGl0QnV0dG9uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImJpIGJpLXBlbmNpbC1zcXVhcmVcIj48L2k+JztcbiAgICBkZWxldGVCdXR0b24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiYmkgYmktdHJhc2hcIj48L2k+JztcbiAgICBjbG9zZURldGFpbHNNb2RhbC5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJiaSBiaS14LXNxdWFyZVwiPjwvaT4nO1xuICAgIGRldGFpbHNNb2RhbC5pbm5lckhUTUwgPVxuICAgICAgICBgPGgzPiR7dG9Eby50aXRsZX08L2gzPlxuICAgIDxwPjxiPlByb2plY3Q6PC9iPiAkeyhfYSA9IFByb2plY3RzLmdldChwYXJlbnRJRCkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5uYW1lfTwvcD5cbiAgICA8cD48Yj5Qcmlvcml0eTo8L2I+ICR7dG9Eb1ByaW9yaXR5fTwvcD5cbiAgICA8cD48Yj5EZXNjcmlwdGlvbjo8L2I+ICR7dG9Eby5kZXNjcmlwdGlvbn08L3A+XG4gICAgPHA+PGI+RHVlIERhdGU6PC9iPiAke2Zvcm1hdCh0b0RvLmR1ZURhdGUsIFwiZG8gTU1NTSwgWVwiKX08L3A+YDtcbiAgICBpZiAodG9Eby5pc0NoZWNrZWQpIHtcbiAgICAgICAgY2hlY2tCb3guY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRleHQtZGVjb3JhdGlvbi1saW5lLXRocm91Z2hcIik7XG4gICAgfVxuICAgIDtcbiAgICBpZiAodG9Eby5pc092ZXJEdWUoKSkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJvdmVyZHVlXCIpO1xuICAgIH1cbiAgICA7XG4gICAgLy8gZGV0YWlscyBidXR0b25cbiAgICBkZXRhaWxzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGRldGFpbHNNb2RhbC5zaG93TW9kYWwoKTtcbiAgICAgICAgLy8gcG9zaXRpb24gbW9kYWxcbiAgICAgICAgY29uc3QgbW9kYWxIZWlnaHQgPSBkZXRhaWxzTW9kYWwuY2xpZW50SGVpZ2h0O1xuICAgICAgICBjb25zdCBidXR0b25Qb3MgPSBkZXRhaWxzQnV0dG9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCBidXR0b25Cb3R0b20gPSBidXR0b25Qb3MuYm90dG9tICsgd2luZG93LnNjcm9sbFk7XG4gICAgICAgIGNvbnN0IGJ1dHRvblRvb0xvdyA9IHdpbmRvdy5pbm5lckhlaWdodCAvIDIgKyAxMDAgPCBidXR0b25Cb3R0b207XG4gICAgICAgIGlmIChidXR0b25Ub29Mb3cpIHtcbiAgICAgICAgICAgIGRldGFpbHNNb2RhbC5zdHlsZS50b3AgPSBgJHtNYXRoLmNlaWwoYnV0dG9uUG9zLnRvcCAtIG1vZGFsSGVpZ2h0IC0gMTUpfXB4YDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRldGFpbHNNb2RhbC5zdHlsZS50b3AgPSBgJHtNYXRoLmNlaWwoYnV0dG9uQm90dG9tKSArIDEwfXB4YDtcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgICAgIGRldGFpbHNNb2RhbC5zdHlsZS5yaWdodCA9IGAke2J1dHRvblBvcy5yaWdodH1weGA7XG4gICAgfSk7XG4gICAgY2xvc2VEZXRhaWxzTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZGV0YWlsc01vZGFsLmNsb3NlKCk7XG4gICAgfSk7XG4gICAgLy8gY2hlY2tib3ggZnVuY3Rpb25hbGl0eVxuICAgIGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRvRG8udG9nZ2xlSXNDaGVja2VkKCk7XG4gICAgICAgIGlmICh0b0RvLmlzQ2hlY2tlZCkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGV4dC1kZWNvcmF0aW9uLWxpbmUtdGhyb3VnaFwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInRleHQtZGVjb3JhdGlvbi1saW5lLXRocm91Z2hcIik7XG4gICAgICAgIH1cbiAgICAgICAgO1xuICAgIH0pO1xuICAgIC8vIGFsc28gY2hlY2sgb2ZmIGlmIHRpdGxlIGNsaWNrZWRcbiAgICB0b0RvVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdG9Eby50b2dnbGVJc0NoZWNrZWQoKTtcbiAgICAgICAgaWYgKHRvRG8uaXNDaGVja2VkKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWRlY29yYXRpb24tbGluZS10aHJvdWdoXCIpO1xuICAgICAgICAgICAgY2hlY2tCb3guY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZXh0LWRlY29yYXRpb24tbGluZS10aHJvdWdoXCIpO1xuICAgICAgICAgICAgY2hlY2tCb3guY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIDtcbiAgICB9KTtcbiAgICAvLyBmaW5hbGx5LCBhcHBlbmRpbmcgZWxlbWVudHMgdG8gdGhlIERPTVxuICAgIGRldGFpbHNNb2RhbC5hcHBlbmRDaGlsZChjbG9zZURldGFpbHNNb2RhbCk7XG4gICAgbGVmdERpdi5hcHBlbmRDaGlsZChjaGVja0JveCk7XG4gICAgbGVmdERpdi5hcHBlbmRDaGlsZCh0b0RvVGl0bGUpO1xuICAgIHJpZ2h0RGl2LmFwcGVuZENoaWxkKGRldGFpbHNCdXR0b24pO1xuICAgIHJpZ2h0RGl2LmFwcGVuZENoaWxkKGRldGFpbHNNb2RhbCk7XG4gICAgLy8gZWRpdCBidXR0b25cbiAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGVkaXRUb0RvRm9ybSh0b0RvLCBlbGVtZW50LCBkZXRhaWxzQnV0dG9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKTtcbiAgICB9KTtcbiAgICAvLyBkZWxldGUgYnV0dG9uXG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIFBTLnB1Ymxpc2goUFNFLkRlbGV0ZVRvRG8sIHRvRG8uSUQpO1xuICAgIH0pO1xuICAgIHJpZ2h0RGl2LmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuICAgIHJpZ2h0RGl2LmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChsZWZ0RGl2KTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHJpZ2h0RGl2KTtcbiAgICBpZGVtcG90ZW50RE9NKGpzQ29udGFpbmVyLCBlbGVtZW50LCB0b0RvLklEKTtcbn1cbjtcbmV4cG9ydCBkZWZhdWx0IGlkZW1wb3RlbnRseVJlbmRlclRvRG87XG4iLCJpbXBvcnQgQ2F0ZWdvcmllcyBmcm9tIFwiLi4vLi4vY2xhc3Nlcy9DYXRlZ29yaWVzXCI7XG5pbXBvcnQgcHV0R3JvdXBJblNpZGViYXIgZnJvbSBcIi4vcHV0R3JvdXBJblNpZGViYXJcIjtcbmZ1bmN0aW9uIHB1dENhdGVnb3J5KGNhdGVnb3J5SWQpIHtcbiAgICBwdXRHcm91cEluU2lkZWJhcihjYXRlZ29yeUlkLCBDYXRlZ29yaWVzLCBcImNhdGVnb3J5LWxpc3RcIik7XG59XG47XG5leHBvcnQgZGVmYXVsdCBwdXRDYXRlZ29yeTtcbiIsImltcG9ydCByZW5kZXJHcm91cCBmcm9tIFwiLi9yZW5kZXJHcm91cFwiO1xuaW1wb3J0IGlkZW1wb3RlbnRET00gZnJvbSBcIi4vaWRlbXBvdGVudERPTVwiO1xuZnVuY3Rpb24gcHV0R3JvdXBJblNpZGViYXIoZ3JvdXBJRCwgR3JvdXBNYW5hZ2VyLCBncm91cExpc3RJZCkge1xuICAgIGNvbnN0IGdyb3VwID0gR3JvdXBNYW5hZ2VyLmdldChncm91cElEKTtcbiAgICBpZiAoIWdyb3VwKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEdyb3VwIG9mIElEICR7Z3JvdXBJRH0gbm90IGZvdW5kLmApO1xuICAgIGNvbnN0IGdyb3VwTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGdyb3VwTGlzdElkKTtcbiAgICBpZiAoIWdyb3VwTGlzdClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBlbGVtZW50IG9mIGlkICR7Z3JvdXBMaXN0SWR9IG5vdCBmb3VuZC5gKTtcbiAgICBjb25zdCBsaXN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjb25zdCBsaXN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IHRvRG9Db3VudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgY29uc3QgZ3JvdXBOYW1lU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGxpc3RFbGVtZW50LmlkID0gZ3JvdXBJRDtcbiAgICBsaXN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibGlzdC1ncm91cC1pdGVtXCIsIFwibGlzdC1ncm91cC1pdGVtLWFjdGlvblwiLCBcImQtZmxleFwiLCBcImp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIsIFwiYWxpZ24taXRlbXMtY2VudGVyXCIpO1xuICAgIGdyb3VwTmFtZVNwYW4uaW5uZXJUZXh0ID0gZ3JvdXAubmFtZTtcbiAgICBncm91cE5hbWVTcGFuLmNsYXNzTGlzdC5hZGQoXCJkLWlubGluZS1ibG9ja1wiLCBcInRleHQtdHJ1bmNhdGVcIik7XG4gICAgZ3JvdXBOYW1lU3Bhbi5zdHlsZS5tYXhXaWR0aCA9IFwiMTIwcHhcIjtcbiAgICBsaXN0VGV4dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gcmVuZGVyR3JvdXAoZ3JvdXApKTtcbiAgICBsaXN0VGV4dC5jbGFzc0xpc3QuYWRkKFwiZC1mbGV4XCIsIFwibGluay1vcGFjaXR5LTc1XCIsIFwibGluay1vcGFjaXR5LTEwMC1ob3ZlclwiLCBcImxpbmstdW5kZXJsaW5lLW9wYWNpdHktMFwiLCBcImxpbmstc2Vjb25kYXJ5XCIsIFwidXNlci1zZWxlY3Qtbm9uZVwiLCBcIm0tMFwiKTtcbiAgICB0b0RvQ291bnRlci5jbGFzc0xpc3QuYWRkKFwiY291bnRlclwiLCBcImJhZGdlXCIsIFwicC0xXCIsIFwibWUtMlwiLCBcImFsaWduLXNlbGYtY2VudGVyXCIpO1xuICAgIGNvbnN0IGNvdW50ID0gZ3JvdXAudG9Eb3MubGVuZ3RoO1xuICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgICAgdG9Eb0NvdW50ZXIuaW5uZXJUZXh0ID0gU3RyaW5nKGNvdW50KTtcbiAgICB9XG4gICAgO1xuICAgIGxpc3RUZXh0LmFwcGVuZCh0b0RvQ291bnRlcik7XG4gICAgbGlzdFRleHQuYXBwZW5kKGdyb3VwTmFtZVNwYW4pO1xuICAgIGxpc3RFbGVtZW50LmFwcGVuZChsaXN0VGV4dCk7XG4gICAgaWRlbXBvdGVudERPTShncm91cExpc3QsIGxpc3RFbGVtZW50LCBncm91cElEKTtcbiAgICAvLyBpbiBjYXNlIGZ1cnRoZXIgbWFuaXB1bGF0aW9uIGlzIG5lZWRlZFxuICAgIHJldHVybiB7IGdyb3VwLCBsaXN0RWxlbWVudCB9O1xufVxuO1xuZXhwb3J0IGRlZmF1bHQgcHV0R3JvdXBJblNpZGViYXI7XG4iLCJpbXBvcnQgUHJvamVjdHMgZnJvbSBcIi4uLy4uL2NsYXNzZXMvUHJvamVjdHNcIjtcbmltcG9ydCBwcm9qZWN0TmFtZU1vZGFsIGZyb20gXCIuLi9pbnB1dHMvcHJvamVjdE5hbWVNb2RhbFwiO1xuaW1wb3J0IHB1dEdyb3VwSW5TaWRlYmFyIGZyb20gXCIuL3B1dEdyb3VwSW5TaWRlYmFyXCI7XG5pbXBvcnQgc2hvd0FsbFRhc2tzIGZyb20gXCIuL3Nob3dBbGxUYXNrc1wiO1xuZnVuY3Rpb24gcHV0UHJvamVjdChwcm9qZWN0SUQpIHtcbiAgICBjb25zdCB7IGdyb3VwOiBwcm9qZWN0LCBsaXN0RWxlbWVudCB9ID0gcHV0R3JvdXBJblNpZGViYXIocHJvamVjdElELCBQcm9qZWN0cywgXCJwcm9qZWN0LWxpc3RcIik7XG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImQtZmxleFwiLCBcImFsaWduLWl0ZW1zLWNlbnRlclwiKTtcbiAgICAvLyByZW5hbWUgcHJvamVjdCBidXR0b25cbiAgICBjb25zdCByZW5hbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHJlbmFtZUJ1dHRvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJiaSBiaS1wZW5jaWwtc3F1YXJlXCI+PC9pPic7XG4gICAgcmVuYW1lQnV0dG9uLnRpdGxlID0gXCJSZW5hbWUgcHJvamVjdFwiO1xuICAgIHByb2plY3ROYW1lTW9kYWwocmVuYW1lQnV0dG9uLCBuID0+IHByb2plY3QuY2hhbmdlTmFtZShuKSwgcHJvamVjdC5uYW1lKTtcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQocmVuYW1lQnV0dG9uKTtcbiAgICAvLyBkZWxldGUgcHJvamVjdCBidXR0b25cbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRlbGV0ZUJ1dHRvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJiaSBiaS10cmFzaDMgZnMtNVwiPjwvaT4nO1xuICAgIGRlbGV0ZUJ1dHRvbi50aXRsZSA9IFwiZGVsZXRlIHByb2plY3RcIjtcbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgUHJvamVjdHMuZGVsZXRlUHJvamVjdChwcm9qZWN0SUQpO1xuICAgICAgICBzaG93QWxsVGFza3MoKTtcbiAgICB9KTtcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICBsaXN0RWxlbWVudC5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xufVxuO1xuZXhwb3J0IGRlZmF1bHQgcHV0UHJvamVjdDtcbiIsImZ1bmN0aW9uIHJlbW92ZVByb2plY3QoaWQpIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgZGVsZXRlZExJID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIGlmIChkZWxldGVkTEkpXG4gICAgICAgIChfYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1saXN0XCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVtb3ZlQ2hpbGQoZGVsZXRlZExJKTtcbn1cbjtcbmV4cG9ydCBkZWZhdWx0IHJlbW92ZVByb2plY3Q7XG4iLCJpbXBvcnQganNDb250YWluZXIgZnJvbSBcIi4uL2RvbUNvbnN0YW50cy9wcm9qZWN0Q29udGFpbmVyXCI7XG5mdW5jdGlvbiByZW1vdmVUb0RvKHRvRG9JRCkge1xuICAgIGNvbnN0IGRlbGV0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodG9Eb0lEKTtcbiAgICBpZiAoZGVsZXRpb24pXG4gICAgICAgIGpzQ29udGFpbmVyLnJlbW92ZUNoaWxkKGRlbGV0aW9uKTtcbn1cbjtcbmV4cG9ydCBkZWZhdWx0IHJlbW92ZVRvRG87XG4iLCJpbXBvcnQgQmFuayBmcm9tIFwiLi4vLi4vY2xhc3Nlcy9CYW5rXCI7XG5pbXBvcnQgQXJjYWRlIGZyb20gXCIuLi8uLi9jbGFzc2VzL0FyY2FkZVwiO1xuaW1wb3J0IGpzQ29udGFpbmVyIGZyb20gXCIuLi9kb21Db25zdGFudHMvcHJvamVjdENvbnRhaW5lclwiO1xuaW1wb3J0IGNsZWFyUGFnZSBmcm9tIFwiLi9jbGVhclBhZ2VcIjtcbmltcG9ydCByZW5kZXJNZXNzYWdlIGZyb20gXCIuL3JlbmRlck1lc3NhZ2VcIjtcbmltcG9ydCBhcmNhZGVTdGF0ZSBmcm9tIFwiLi4vZG9tQ29uc3RhbnRzL2FyY2FkZVN0YXRlXCI7XG5mdW5jdGlvbiByZW5kZXJBcmNhZGUoKSB7XG4gICAgY2xlYXJQYWdlKCk7XG4gICAganNDb250YWluZXIuY2xhc3NMaXN0LnJlcGxhY2UoXCJncm91cC1wYWdlXCIsIFwiYXJjYWRlLXBhZ2VcIik7XG4gICAgaGlzdG9yeS5wdXNoU3RhdGUoYXJjYWRlU3RhdGUsIFwiXCIsIFwiYXJjYWRlXCIpO1xuICAgIC8vIGhlYWRpbmdcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaGVhZGVyLmlubmVyVGV4dCA9IFwiQXJjYWRlXCI7XG4gICAganNDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICAvLyBjcmVhdGluZyBjYXJkIGZvciBlYWNoIGdhbWVcbiAgICBjb25zdCBjYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWNvbnRhaW5lclwiKTtcbiAgICBmb3IgKGNvbnN0IGdhbWUgb2YgQXJjYWRlLmdldEFsbCgpKSB7XG4gICAgICAgIGNvbnN0IGdhbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xuICAgICAgICBjb25zdCBnYW1lUGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG4gICAgICAgIGNvbnN0IGNsb3NlR2FtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcbiAgICAgICAgY29uc3QgdGh1bWJuYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xuICAgICAgICBjb25zdCBjb3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNtYWxsXCIpO1xuICAgICAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJjYXJkLWJvZHlcIik7XG4gICAgICAgIHRodW1ibmFpbC5jbGFzc0xpc3QuYWRkKFwiYXJjYWRlLWltZ1wiKTtcbiAgICAgICAgdGh1bWJuYWlsLnNyYyA9IGdhbWUudGh1bWJuYWlsVVJMO1xuICAgICAgICB0aHVtYm5haWwudGl0bGUgPSBcIkNsaWNrIHRvIHBsYXkhXCI7XG4gICAgICAgIHRpdGxlLmlubmVyVGV4dCA9IGdhbWUubmFtZTtcbiAgICAgICAgY29zdC5pbm5lckhUTUwgPSBgQ29zdDogPGkgY2xhc3M9XCJiaSBiaS1jb2luIHRleHQtd2FybmluZ1wiPjwvaT4gJHtnYW1lLmNvc3R9YDtcbiAgICAgICAgZ2FtZVBsYXkuc3JjID0gZ2FtZS5saW5rO1xuICAgICAgICBjbG9zZUdhbWUuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiYmkgYmkteC1sZ1wiPjwvaT4nO1xuICAgICAgICB0aHVtYm5haWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJDYW5QYXkgPSBCYW5rLmRlZHVjdChnYW1lLmNvc3QpO1xuICAgICAgICAgICAgaWYgKHVzZXJDYW5QYXkpIHtcbiAgICAgICAgICAgICAgICBqc0NvbnRhaW5lci5hcHBlbmRDaGlsZChnYW1lQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICBnYW1lQ29udGFpbmVyLnNob3dNb2RhbCgpO1xuICAgICAgICAgICAgICAgIHJlbmRlck1lc3NhZ2UoYFBhaWQgJHtnYW1lLmNvc3R9IGNvaW5zIGZvciBhIDUtbWludXRlIGdhbWluZyBzZXNzaW9uLmAsIGdhbWVDb250YWluZXIpOyAvLyBtaWdyYXRlIHRvIFB1YlN1YlxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBnYW1lQ29udGFpbmVyLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlck1lc3NhZ2UoXCJTZXNzaW9uIGRvbmUuIFBheSBhZ2FpbiB0byBwbGF5LlwiKTtcbiAgICAgICAgICAgICAgICB9LCBBcmNhZGUuc2Vzc2lvbk1TKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlbmRlck1lc3NhZ2UoXCJOb3QgZW5vdWdoIGNvaW5zIHRvIHBheS4gQ29tcGxldGUgbW9yZSB0by1kb3MuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgO1xuICAgICAgICB9KTtcbiAgICAgICAgY2xvc2VHYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBnYW1lQ29udGFpbmVyLmNsb3NlKCk7XG4gICAgICAgICAgICBqc0NvbnRhaW5lci5yZW1vdmVDaGlsZChnYW1lQ29udGFpbmVyKTtcbiAgICAgICAgICAgIEJhbmsuZGVwb3NpdChnYW1lLmNvc3QpO1xuICAgICAgICAgICAgcmVuZGVyTWVzc2FnZShcIllheSEgQ29pbnMgcmVmdW5kZWRcIik7XG4gICAgICAgIH0pO1xuICAgICAgICB0ZXh0LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgdGV4dC5hcHBlbmRDaGlsZChjb3N0KTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZCh0aHVtYm5haWwpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICBjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpO1xuICAgICAgICBnYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlR2FtZSk7XG4gICAgICAgIGdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2FtZVBsYXkpO1xuICAgIH1cbiAgICA7XG4gICAganNDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZENvbnRhaW5lcik7XG59XG47XG5leHBvcnQgZGVmYXVsdCByZW5kZXJBcmNhZGU7XG4iLCJpbXBvcnQganNDb250YWluZXIgZnJvbSBcIi4uL2RvbUNvbnN0YW50cy9wcm9qZWN0Q29udGFpbmVyXCI7XG5pbXBvcnQgYWRkVG9Eb0Zvcm0gZnJvbSBcIi4uL2lucHV0cy9hZGRUb0RvRm9ybVwiO1xuaW1wb3J0IGNsZWFyUGFnZSBmcm9tIFwiLi9jbGVhclBhZ2VcIjtcbmltcG9ydCBpZGVtcG90ZW50bHlSZW5kZXJUb0RvIGZyb20gXCIuL2lkZW1wb3RlbnRseVJlbmRlclRvRG9cIjtcbmZ1bmN0aW9uIHJlbmRlckdyb3VwKGdyb3VwKSB7XG4gICAgLy8gSGlzdG9yeSBBUEkgZm9yIG1vcmUgYWNjZXNzaWJsZSBuYXZpZ2F0aW9uLiAoQ29tbWVudGVkIG91dCBiZWNhdXNlIGl0J3MgaW5jb252ZW5pZW50IHdpdGggV2VicGFjaydzIEhNUi4pXG4gICAgaGlzdG9yeS5wdXNoU3RhdGUoZ3JvdXAuSUQsIFwiXCIsIGdyb3VwLm5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKS5yZXBsYWNlKFwiIFwiLCBcIi1cIikpO1xuICAgIC8vIHJlc2V0XG4gICAgY2xlYXJQYWdlKCk7XG4gICAganNDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImFyY2FkZS1wYWdlXCIpO1xuICAgIGpzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJncm91cC1wYWdlXCIpO1xuICAgIC8vIHdhbGxwYXBlclxuICAgIGNvbnN0IHJhbmRvbUltZyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIDE7XG4gICAganNDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoXCIuL2JnL2ltZy0ke3JhbmRvbUltZ30uanBnXCIpIGNlbnRlciBjZW50ZXIgLyBjb3ZlcmA7XG4gICAgLy8gaHRtbCBlbGVtZW50IGNyZWF0aW9uXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIGNvbnN0IGFkZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICAvLyBodG1sIGVsZW1lbnQgYXR0cmlidXRlc1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiZnMtMlwiLCBcIm1iLTNcIiwgXCJiZy1zdWNjZXNzLXN1YnRsZVwiLCBcInAtM1wiLCBcImQtZmxleFwiLCBcImp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIsIFwicm91bmRlZFwiKTtcbiAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKFwiZC1mbGV4XCIsIFwiZ2FwLTRcIiwgXCJhbGlnbi1pdGVtcy1jZW50ZXJcIik7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gZ3JvdXAubmFtZTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwiaDFcIik7XG4gICAgaWNvbi5jbGFzc0xpc3QuYWRkKFwiYmlcIik7XG4gICAgaWNvbi5jbGFzc0xpc3QuYWRkKGAke2dyb3VwLmljb259YCk7XG4gICAgYWRkSWNvbi5jbGFzc0xpc3QuYWRkKFwiYmlcIik7XG4gICAgYWRkSWNvbi5jbGFzc0xpc3QuYWRkKFwiYmktam91cm5hbC1wbHVzXCIpO1xuICAgIC8vIGV2ZW50c1xuICAgIGFkZEljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgYWRkVG9Eb0Zvcm0oanNDb250YWluZXIsIGhlYWRlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSk7XG4gICAgfSk7XG4gICAgLy8gYXBwZW5kIHRvIERPTVxuICAgIHRpdGxlRGl2LmFwcGVuZENoaWxkKGljb24pO1xuICAgIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChhZGRJY29uKTtcbiAgICBqc0NvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGdyb3VwLnRvRG9zLmZvckVhY2godG9EbyA9PiBpZGVtcG90ZW50bHlSZW5kZXJUb0RvKHRvRG8pKTtcbn1cbjtcbmV4cG9ydCBkZWZhdWx0IHJlbmRlckdyb3VwO1xuIiwiaW1wb3J0IGpzQ29udGFpbmVyIGZyb20gXCIuLi9kb21Db25zdGFudHMvcHJvamVjdENvbnRhaW5lclwiO1xuZnVuY3Rpb24gcmVuZGVyTWVzc2FnZShtZXNzYWdlLCBjb250YWluZXIgPSBqc0NvbnRhaW5lcikge1xuICAgIGNvbnN0IGdvb2ROZXdzID0gbWVzc2FnZS5zdGFydHNXaXRoKFwiWWF5IVwiKTtcbiAgICBjb25zdCB0ZXh0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFzaWRlXCIpO1xuICAgIGNvbnN0IGJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0ZXh0LmlubmVyVGV4dCA9IG1lc3NhZ2U7XG4gICAgYmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKGBiZy0ke2dvb2ROZXdzID8gXCJzdWNjZXNzXCIgOiBcImRhbmdlclwifS1zdWJ0bGVgLCBcInRleHQtY2VudGVyXCIsIFwicHktMlwiLCBcInB4LTNcIiwgXCJyb3VuZGVkLXRvcFwiKTtcbiAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJmcy01XCIsIFwibS0wXCIpO1xuICAgIGJhY2tncm91bmQuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgdGV4dEJveC5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kKTtcbiAgICB0ZXh0Qm94LmNsYXNzTGlzdC5hZGQoXCJkLWZsZXhcIiwgXCJqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIsIFwicG9zaXRpb24tYWJzb2x1dGVcIiwgXCJib3R0b20tMFwiKTtcbiAgICB0ZXh0Qm94LnN0eWxlLndpZHRoID0gYGNhbGMoJHtjb250YWluZXIuY2xpZW50V2lkdGh9cHggLSAzcmVtKWA7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRCb3gpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBwYWdlTm9kZXMgPSBBcnJheS5mcm9tKGNvbnRhaW5lci5jaGlsZE5vZGVzKTtcbiAgICAgICAgY29uc3QgcGFnZU5vdENoYW5nZWQgPSBwYWdlTm9kZXMuaW5jbHVkZXModGV4dEJveCk7XG4gICAgICAgIGlmIChwYWdlTm90Q2hhbmdlZCkge1xuICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKHRleHRCb3gpO1xuICAgICAgICB9XG4gICAgfSwgMzAwMCk7XG59XG5leHBvcnQgZGVmYXVsdCByZW5kZXJNZXNzYWdlO1xuIiwiaW1wb3J0IENhdGVnb3JpZXMgZnJvbSBcIi4uLy4uL2NsYXNzZXMvQ2F0ZWdvcmllc1wiO1xuaW1wb3J0IHJlbmRlckdyb3VwIGZyb20gXCIuL3JlbmRlckdyb3VwXCI7XG5mdW5jdGlvbiBzaG93QWxsVGFza3MoKSB7XG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvYWxsLXRhc2tzXCIpXG4gICAgICAgIHJldHVybjtcbiAgICBjb25zdCBhbGxUYXNrc0NhdGVnb3J5ID0gQ2F0ZWdvcmllcy5xdWVyeShjYXQgPT4gY2F0Lm5hbWUgPT0gXCJBbGwgVGFza3NcIik7XG4gICAgaWYgKCFhbGxUYXNrc0NhdGVnb3J5KVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBjYXRlZ29yeSB3aXRoIG5hbWUgJ0FsbCBUYXNrcycgZm91bmQuXCIpO1xuICAgIHJlbmRlckdyb3VwKGFsbFRhc2tzQ2F0ZWdvcnkpO1xufVxuO1xuZXhwb3J0IGRlZmF1bHQgc2hvd0FsbFRhc2tzO1xuIiwiZnVuY3Rpb24gdXBkYXRlR3JvdXBDb3VudGVyKHBhcmFtZXRlcnMpIHtcbiAgICBjb25zdCB7IGdyb3VwSUQ6IHByb2plY3RJRCwgaW50ZWdlclRvQWRkIH0gPSBwYXJhbWV0ZXJzO1xuICAgIGNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaSMke0NTUy5lc2NhcGUocHJvamVjdElEKX0gLmNvdW50ZXJgKTtcbiAgICBpZiAoIWNvdW50ZXIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgTm90IHNlbGVjdGVkIC5jb3VudGVyIGRlc2NlbmRhbnQgb2YgbGlzdC1pdGVtIHdpdGggSUQ6ICR7cHJvamVjdElEfWApO1xuICAgIGNvbnN0IGN1cnJlbnRDb3VudCA9IE51bWJlcihjb3VudGVyLmlubmVyVGV4dCk7XG4gICAgY291bnRlci5pbm5lclRleHQgPSBgJHtjdXJyZW50Q291bnQgKyBpbnRlZ2VyVG9BZGR9YDtcbiAgICBpZiAoY291bnRlci5pbm5lclRleHQgPT09IFwiMFwiKVxuICAgICAgICBjb3VudGVyLmlubmVyVGV4dCA9IFwiXCI7XG59XG47XG5leHBvcnQgZGVmYXVsdCB1cGRhdGVHcm91cENvdW50ZXI7XG4iLCJpbXBvcnQgQ2F0ZWdvcmllc0luc3RhbmNlIGZyb20gXCIuLi8uLi9jbGFzc2VzL0NhdGVnb3JpZXNcIjtcbmltcG9ydCBQcm9qZWN0c0luc3RhbmNlIGZyb20gXCIuLi8uLi9jbGFzc2VzL1Byb2plY3RzXCI7XG5pbXBvcnQgYXJjYWRlU3RhdGUgZnJvbSBcIi4uL2RvbUNvbnN0YW50cy9hcmNhZGVTdGF0ZVwiO1xuaW1wb3J0IHJlbmRlckFyY2FkZSBmcm9tIFwiLi9yZW5kZXJBcmNhZGVcIjtcbmltcG9ydCByZW5kZXJHcm91cCBmcm9tIFwiLi9yZW5kZXJHcm91cFwiO1xuLy8gU2V0IHVwIGZvcndhcmQvYmFjayBidXR0b25zXG5mdW5jdGlvbiB3aGF0c1BvcHBpbmcoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS5zdGF0ZSkge1xuICAgICAgICAgICAgY29uc3QgcG9zc2libHlQcm9qZWN0ID0gUHJvamVjdHNJbnN0YW5jZS5nZXQoZS5zdGF0ZSk7XG4gICAgICAgICAgICBjb25zdCBwb3NzaWJseUNhdGVnb3J5ID0gQ2F0ZWdvcmllc0luc3RhbmNlLmdldChlLnN0YXRlKTtcbiAgICAgICAgICAgIGlmIChwb3NzaWJseVByb2plY3QpIHtcbiAgICAgICAgICAgICAgICByZW5kZXJHcm91cChwb3NzaWJseVByb2plY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocG9zc2libHlDYXRlZ29yeSkge1xuICAgICAgICAgICAgICAgIHJlbmRlckdyb3VwKHBvc3NpYmx5Q2F0ZWdvcnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZS5zdGF0ZSA9PT0gYXJjYWRlU3RhdGUpIHtcbiAgICAgICAgICAgICAgICByZW5kZXJBcmNhZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDtcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgfSk7XG59XG47XG5leHBvcnQgZGVmYXVsdCB3aGF0c1BvcHBpbmc7XG4iLCJ2YXIgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmFuZG9tVVVJRFxufTsiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLThdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMHxmZmZmZmZmZi1mZmZmLWZmZmYtZmZmZi1mZmZmZmZmZmZmZmYpJC9pOyIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxuXG52YXIgZ2V0UmFuZG9tVmFsdWVzO1xudmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKTtcbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG5cbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xudmFyIGJ5dGVUb0hleCA9IFtdO1xuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIC8vXG4gIC8vIE5vdGUgdG8gZnV0dXJlLXNlbGY6IE5vLCB5b3UgY2FuJ3QgcmVtb3ZlIHRoZSBgdG9Mb3dlckNhc2UoKWAgY2FsbC5cbiAgLy8gUkVGOiBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC82NzcjaXNzdWVjb21tZW50LTE3NTczNTEzNTFcbiAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgdmFyIHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpO1xuICAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG4gIHJldHVybiB1dWlkO1xufVxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBuYXRpdmUgZnJvbSAnLi9uYXRpdmUuanMnO1xuaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgeyB1bnNhZmVTdHJpbmdpZnkgfSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAobmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBuYXRpdmUucmFuZG9tVVVJRCgpO1xuICB9XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7XG5cbiAgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwO1xuXG4gIC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gYnVmO1xuICB9XG4gIHJldHVybiB1bnNhZmVTdHJpbmdpZnkocm5kcyk7XG59XG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yobykge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiB0eXBlb2YgbztcbiAgfSA6IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87XG4gIH0sIF90eXBlb2Yobyk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJpbXBvcnQgc3Vic2NyaWJlVUlBbmRTdG9yYWdlRnVuY3Rpb25zIGZyb20gXCIuL2Z1bmN0aW9ucy9zdWJzY3JpYmVVSUFuZFN0b3JhZ2VGdW5jdGlvbnNcIjtcbmltcG9ydCByZW5kZXJPbmJvYXJkaW5nIGZyb20gXCIuL3VpL29uYm9hcmRpbmcvb25ib2FyZGluZ1wiO1xuaW1wb3J0IGhhc1Zpc2l0ZWQgZnJvbSBcIi4vc3RvcmFnZS9oYXNWaXNpdGVkXCI7XG5pbXBvcnQgc2V0VmlzaXRlZEZsYWcgZnJvbSBcIi4vc3RvcmFnZS9zZXRWaXNpdGVkRmxhZ1wiO1xuaW1wb3J0IHNob3dBbGxUYXNrcyBmcm9tIFwiLi91aS9vdXRwdXRzL3Nob3dBbGxUYXNrc1wiO1xuaW1wb3J0IGxvYWRQcm9qZWN0cyBmcm9tIFwiLi9zdG9yYWdlL2xvYWRQcm9qZWN0c1wiO1xuaW1wb3J0IGFkZFByb2plY3RGb3JtIGZyb20gXCIuL3VpL2lucHV0cy9hZGRQcm9qZWN0Rm9ybVwiO1xuaW1wb3J0IGluaXRpYWxpemVDYXRlZ29yaWVzIGZyb20gXCIuL2Z1bmN0aW9ucy9pbml0aWFsaXplQ2F0ZWdvcmllc1wiO1xuaW1wb3J0IGluaXRpYWxpemVHYW1lcyBmcm9tIFwiLi9mdW5jdGlvbnMvaW5pdGlhbGl6ZUdhbWVzXCI7XG5pbXBvcnQgd2hhdHNQb3BwaW5nIGZyb20gXCIuL3VpL291dHB1dHMvd2hhdHNQb3BwaW5nXCI7XG5pbXBvcnQgc2V0VXBUb3VyQnV0dG9uIGZyb20gXCIuL3VpL29uYm9hcmRpbmcvc2V0VXBUb3VyQnV0dG9uXCI7XG5pbXBvcnQgZ2V0U3F1YXJlZFVwIGZyb20gXCIuL3VpL2RvbVV0aWxpdGllcy9yZXNpemVyXCI7XG5pbXBvcnQgcmVnaXN0ZXJTZXJ2aWNlV29ya2VyIGZyb20gXCIuL3N3XCI7XG5nZXRTcXVhcmVkVXAoKTtcbmFkZFByb2plY3RGb3JtKCk7XG5zZXRVcFRvdXJCdXR0b24oKTtcbnN1YnNjcmliZVVJQW5kU3RvcmFnZUZ1bmN0aW9ucygpOyAvLyBtdXN0IGJlIGJlZm9yZSBhbnkgb2JqZWN0IGluaXRpYWxpemF0aW9uc1xuaW5pdGlhbGl6ZUNhdGVnb3JpZXMoKTtcbmluaXRpYWxpemVHYW1lcygpO1xud2hhdHNQb3BwaW5nKCk7XG5pZiAoIWhhc1Zpc2l0ZWQoKSkge1xuICAgIHJlZ2lzdGVyU2VydmljZVdvcmtlcigpO1xuICAgIHJlbmRlck9uYm9hcmRpbmcoKTtcbiAgICBzZXRWaXNpdGVkRmxhZygpO1xufVxuZWxzZSB7XG4gICAgbG9hZFByb2plY3RzKCk7XG59XG47XG4vLyBMb2FkIHByb2plY3RzIGxlYWRzIHRvIFB1dFRvRG8gZXZlbnRzIGJlaW5nIHB1Ymxpc2hlZCB3aGljaCBsZWFkIHRvIHRvLWRvIGVsZW1lbnQgcmVuZGVycyBiZWluZyBwcm9qZWN0LWxpa2UuXG4vLyBUaGlzIHdpbGwgbGVhZCB0byB0aG9zZSByZW5kZXJzIGJlaW5nIG92ZXJyaWRkZW4gZm9yIGNhdGVnb3J5LWxpa2UgcmVuZGVycy5cbi8vIFNvIGl0IHNob3VsZCBiZSBhdCB0aGUgZW5kLlxuc2hvd0FsbFRhc2tzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r={lessThanXSeconds:{one:"bir saniyeden az",other:"{{count}} saniyeden az"},xSeconds:{one:"1 saniye",other:"{{count}} saniye"},halfAMinute:"yarım dakika",lessThanXMinutes:{one:"bir dakikadan az",other:"{{count}} dakikadan az"},xMinutes:{one:"1 dakika",other:"{{count}} dakika"},aboutXHours:{one:"yaklaşık 1 saat",other:"yaklaşık {{count}} saat"},xHours:{one:"1 saat",other:"{{count}} saat"},xDays:{one:"1 gün",other:"{{count}} gün"},aboutXWeeks:{one:"yaklaşık 1 hafta",other:"yaklaşık {{count}} hafta"},xWeeks:{one:"1 hafta",other:"{{count}} hafta"},aboutXMonths:{one:"yaklaşık 1 ay",other:"yaklaşık {{count}} ay"},xMonths:{one:"1 ay",other:"{{count}} ay"},aboutXYears:{one:"yaklaşık 1 yıl",other:"yaklaşık {{count}} yıl"},xYears:{one:"1 yıl",other:"{{count}} yıl"},overXYears:{one:"1 yıldan fazla",other:"{{count}} yıldan fazla"},almostXYears:{one:"neredeyse 1 yıl",other:"neredeyse {{count}} yıl"}},s=(n,t,o)=>{let a;const e=r[n];return typeof e=="string"?a=e:t===1?a=e.one:a=e.other.replace("{{count}}",t.toString()),o?.addSuffix?o.comparison&&o.comparison>0?a+" sonra":a+" önce":a};exports.formatDistance=s;
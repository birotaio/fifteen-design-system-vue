"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const a={lessThanXSeconds:{one:"minder as 'n sekonde",other:"minder as {{count}} sekondes"},xSeconds:{one:"1 sekonde",other:"{{count}} sekondes"},halfAMinute:"'n halwe minuut",lessThanXMinutes:{one:"minder as 'n minuut",other:"minder as {{count}} minute"},xMinutes:{one:"'n minuut",other:"{{count}} minute"},aboutXHours:{one:"ongeveer 1 uur",other:"ongeveer {{count}} ure"},xHours:{one:"1 uur",other:"{{count}} ure"},xDays:{one:"1 dag",other:"{{count}} dae"},aboutXWeeks:{one:"ongeveer 1 week",other:"ongeveer {{count}} weke"},xWeeks:{one:"1 week",other:"{{count}} weke"},aboutXMonths:{one:"ongeveer 1 maand",other:"ongeveer {{count}} maande"},xMonths:{one:"1 maand",other:"{{count}} maande"},aboutXYears:{one:"ongeveer 1 jaar",other:"ongeveer {{count}} jaar"},xYears:{one:"1 jaar",other:"{{count}} jaar"},overXYears:{one:"meer as 1 jaar",other:"meer as {{count}} jaar"},almostXYears:{one:"byna 1 jaar",other:"byna {{count}} jaar"}},u=(t,r,n)=>{let e;const o=a[t];return typeof o=="string"?e=o:r===1?e=o.one:e=o.other.replace("{{count}}",String(r)),n?.addSuffix?n.comparison&&n.comparison>0?"oor "+e:e+" gelede":e};exports.formatDistance=u;
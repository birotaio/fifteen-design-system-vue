"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("../../_lib/buildLocalizeFn.js"),h={narrow:["TCN","SCN"],abbreviated:["trước CN","sau CN"],wide:["trước Công Nguyên","sau Công Nguyên"]},r={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["Quý 1","Quý 2","Quý 3","Quý 4"]},g={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["quý I","quý II","quý III","quý IV"]},o={narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],abbreviated:["Thg 1","Thg 2","Thg 3","Thg 4","Thg 5","Thg 6","Thg 7","Thg 8","Thg 9","Thg 10","Thg 11","Thg 12"],wide:["Tháng Một","Tháng Hai","Tháng Ba","Tháng Tư","Tháng Năm","Tháng Sáu","Tháng Bảy","Tháng Tám","Tháng Chín","Tháng Mười","Tháng Mười Một","Tháng Mười Hai"]},u={narrow:["01","02","03","04","05","06","07","08","09","10","11","12"],abbreviated:["thg 1","thg 2","thg 3","thg 4","thg 5","thg 6","thg 7","thg 8","thg 9","thg 10","thg 11","thg 12"],wide:["tháng 01","tháng 02","tháng 03","tháng 04","tháng 05","tháng 06","tháng 07","tháng 08","tháng 09","tháng 10","tháng 11","tháng 12"]},d={narrow:["CN","T2","T3","T4","T5","T6","T7"],short:["CN","Th 2","Th 3","Th 4","Th 5","Th 6","Th 7"],abbreviated:["CN","Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7"],wide:["Chủ Nhật","Thứ Hai","Thứ Ba","Thứ Tư","Thứ Năm","Thứ Sáu","Thứ Bảy"]},m={narrow:{am:"am",pm:"pm",midnight:"nửa đêm",noon:"tr",morning:"sg",afternoon:"ch",evening:"tối",night:"đêm"},abbreviated:{am:"AM",pm:"PM",midnight:"nửa đêm",noon:"trưa",morning:"sáng",afternoon:"chiều",evening:"tối",night:"đêm"},wide:{am:"SA",pm:"CH",midnight:"nửa đêm",noon:"trưa",morning:"sáng",afternoon:"chiều",evening:"tối",night:"đêm"}},s={narrow:{am:"am",pm:"pm",midnight:"nửa đêm",noon:"tr",morning:"sg",afternoon:"ch",evening:"tối",night:"đêm"},abbreviated:{am:"AM",pm:"PM",midnight:"nửa đêm",noon:"trưa",morning:"sáng",afternoon:"chiều",evening:"tối",night:"đêm"},wide:{am:"SA",pm:"CH",midnight:"nửa đêm",noon:"giữa trưa",morning:"vào buổi sáng",afternoon:"vào buổi chiều",evening:"vào buổi tối",night:"vào ban đêm"}},T=(a,i)=>{const n=Number(a),e=i?.unit;if(e==="quarter")switch(n){case 1:return"I";case 2:return"II";case 3:return"III";case 4:return"IV"}else if(e==="day")switch(n){case 1:return"thứ 2";case 2:return"thứ 3";case 3:return"thứ 4";case 4:return"thứ 5";case 5:return"thứ 6";case 6:return"thứ 7";case 7:return"chủ nhật"}else{if(e==="week")return n===1?"thứ nhất":"thứ "+n;if(e==="dayOfYear")return n===1?"đầu tiên":"thứ "+n}return String(n)},l={ordinalNumber:T,era:t.buildLocalizeFn({values:h,defaultWidth:"wide"}),quarter:t.buildLocalizeFn({values:r,defaultWidth:"wide",formattingValues:g,defaultFormattingWidth:"wide",argumentCallback:a=>a-1}),month:t.buildLocalizeFn({values:o,defaultWidth:"wide",formattingValues:u,defaultFormattingWidth:"wide"}),day:t.buildLocalizeFn({values:d,defaultWidth:"wide"}),dayPeriod:t.buildLocalizeFn({values:m,defaultWidth:"wide",formattingValues:s,defaultFormattingWidth:"wide"})};exports.localize=l;
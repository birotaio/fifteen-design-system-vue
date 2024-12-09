"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const n=require("../../_lib/buildLocalizeFn.js"),i={narrow:["கி.மு.","கி.பி."],abbreviated:["கி.மு.","கி.பி."],wide:["கிறிஸ்துவுக்கு முன்","அன்னோ டோமினி"]},a={narrow:["1","2","3","4"],abbreviated:["காலா.1","காலா.2","காலா.3","காலா.4"],wide:["ஒன்றாம் காலாண்டு","இரண்டாம் காலாண்டு","மூன்றாம் காலாண்டு","நான்காம் காலாண்டு"]},o={narrow:["ஜ","பி","மா","ஏ","மே","ஜூ","ஜூ","ஆ","செ","அ","ந","டி"],abbreviated:["ஜன.","பிப்.","மார்.","ஏப்.","மே","ஜூன்","ஜூலை","ஆக.","செப்.","அக்.","நவ.","டிச."],wide:["ஜனவரி","பிப்ரவரி","மார்ச்","ஏப்ரல்","மே","ஜூன்","ஜூலை","ஆகஸ்ட்","செப்டம்பர்","அக்டோபர்","நவம்பர்","டிசம்பர்"]},t={narrow:["ஞா","தி","செ","பு","வி","வெ","ச"],short:["ஞா","தி","செ","பு","வி","வெ","ச"],abbreviated:["ஞாயி.","திங்.","செவ்.","புத.","வியா.","வெள்.","சனி"],wide:["ஞாயிறு","திங்கள்","செவ்வாய்","புதன்","வியாழன்","வெள்ளி","சனி"]},r={narrow:{am:"மு.ப",pm:"பி.ப",midnight:"நள்.",noon:"நண்.",morning:"கா.",afternoon:"மதி.",evening:"மா.",night:"இர."},abbreviated:{am:"முற்பகல்",pm:"பிற்பகல்",midnight:"நள்ளிரவு",noon:"நண்பகல்",morning:"காலை",afternoon:"மதியம்",evening:"மாலை",night:"இரவு"},wide:{am:"முற்பகல்",pm:"பிற்பகல்",midnight:"நள்ளிரவு",noon:"நண்பகல்",morning:"காலை",afternoon:"மதியம்",evening:"மாலை",night:"இரவு"}},d={narrow:{am:"மு.ப",pm:"பி.ப",midnight:"நள்.",noon:"நண்.",morning:"கா.",afternoon:"மதி.",evening:"மா.",night:"இர."},abbreviated:{am:"முற்பகல்",pm:"பிற்பகல்",midnight:"நள்ளிரவு",noon:"நண்பகல்",morning:"காலை",afternoon:"மதியம்",evening:"மாலை",night:"இரவு"},wide:{am:"முற்பகல்",pm:"பிற்பகல்",midnight:"நள்ளிரவு",noon:"நண்பகல்",morning:"காலை",afternoon:"மதியம்",evening:"மாலை",night:"இரவு"}},l=(e,m)=>String(e),u={ordinalNumber:l,era:n.buildLocalizeFn({values:i,defaultWidth:"wide"}),quarter:n.buildLocalizeFn({values:a,defaultWidth:"wide",argumentCallback:e=>e-1}),month:n.buildLocalizeFn({values:o,defaultWidth:"wide"}),day:n.buildLocalizeFn({values:t,defaultWidth:"wide"}),dayPeriod:n.buildLocalizeFn({values:r,defaultWidth:"wide",formattingValues:d,defaultFormattingWidth:"wide"})};exports.localize=u;

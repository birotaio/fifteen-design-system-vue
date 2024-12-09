const o = {
  lastWeek: (e) => {
    switch (e.getDay()) {
      case 6:
        return "'το προηγούμενο' eeee 'στις' p";
      default:
        return "'την προηγούμενη' eeee 'στις' p";
    }
  },
  yesterday: "'χθες στις' p",
  today: "'σήμερα στις' p",
  tomorrow: "'αύριο στις' p",
  nextWeek: "eeee 'στις' p",
  other: "P"
}, a = (e, r) => {
  const t = o[e];
  return typeof t == "function" ? t(r) : t;
};
export {
  a as formatRelative
};

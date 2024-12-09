const u = {
  lessThanXSeconds: {
    one: "أقل من ثانية واحدة",
    two: "أقل من ثانتين",
    threeToTen: "أقل من {{count}} ثواني",
    other: "أقل من {{count}} ثانية"
  },
  xSeconds: {
    one: "ثانية واحدة",
    two: "ثانتين",
    threeToTen: "{{count}} ثواني",
    other: "{{count}} ثانية"
  },
  halfAMinute: "نصف دقيقة",
  lessThanXMinutes: {
    one: "أقل من دقيقة",
    two: "أقل من دقيقتين",
    threeToTen: "أقل من {{count}} دقائق",
    other: "أقل من {{count}} دقيقة"
  },
  xMinutes: {
    one: "دقيقة واحدة",
    two: "دقيقتين",
    threeToTen: "{{count}} دقائق",
    other: "{{count}} دقيقة"
  },
  aboutXHours: {
    one: "ساعة واحدة تقريباً",
    two: "ساعتين تقريباً",
    threeToTen: "{{count}} ساعات تقريباً",
    other: "{{count}} ساعة تقريباً"
  },
  xHours: {
    one: "ساعة واحدة",
    two: "ساعتين",
    threeToTen: "{{count}} ساعات",
    other: "{{count}} ساعة"
  },
  xDays: {
    one: "يوم واحد",
    two: "يومين",
    threeToTen: "{{count}} أيام",
    other: "{{count}} يوم"
  },
  aboutXWeeks: {
    one: "أسبوع واحد تقريباً",
    two: "أسبوعين تقريباً",
    threeToTen: "{{count}} أسابيع تقريباً",
    other: "{{count}} أسبوع تقريباً"
  },
  xWeeks: {
    one: "أسبوع واحد",
    two: "أسبوعين",
    threeToTen: "{{count}} أسابيع",
    other: "{{count}} أسبوع"
  },
  aboutXMonths: {
    one: "شهر واحد تقريباً",
    two: "شهرين تقريباً",
    threeToTen: "{{count}} أشهر تقريباً",
    other: "{{count}} شهر تقريباً"
  },
  xMonths: {
    one: "شهر واحد",
    two: "شهرين",
    threeToTen: "{{count}} أشهر",
    other: "{{count}} شهر"
  },
  aboutXYears: {
    one: "عام واحد تقريباً",
    two: "عامين تقريباً",
    threeToTen: "{{count}} أعوام تقريباً",
    other: "{{count}} عام تقريباً"
  },
  xYears: {
    one: "عام واحد",
    two: "عامين",
    threeToTen: "{{count}} أعوام",
    other: "{{count}} عام"
  },
  overXYears: {
    one: "أكثر من عام",
    two: "أكثر من عامين",
    threeToTen: "أكثر من {{count}} أعوام",
    other: "أكثر من {{count}} عام"
  },
  almostXYears: {
    one: "عام واحد تقريباً",
    two: "عامين تقريباً",
    threeToTen: "{{count}} أعوام تقريباً",
    other: "{{count}} عام تقريباً"
  }
}, c = (r, t, n) => {
  let e;
  const o = u[r];
  return typeof o == "string" ? e = o : t === 1 ? e = o.one : t === 2 ? e = o.two : t <= 10 ? e = o.threeToTen.replace("{{count}}", String(t)) : e = o.other.replace("{{count}}", String(t)), n?.addSuffix ? n.comparison && n.comparison > 0 ? "في خلال " + e : "منذ " + e : e;
};
export {
  c as formatDistance
};

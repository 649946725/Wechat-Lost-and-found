
const formatyear0 = date => {
  const month = date.getMonth() + 1
  const day = date.getDate()

  return [month,day].map(formatNumber).join('月')+' ' 
}
const formatyear1 = date => {
  const month = date.getMonth() + 1
  const day = date.getDate()+1

  return [month, day].map(formatNumber).join('月') + ' '
}
const formatyear2 = date => {
  const month = date.getMonth() + 1
  const day = date.getDate()+2

  return [month, day].map(formatNumber).join('月') + ' '
}
const formatyear3 = date => {
  const month = date.getMonth() + 1
  const day = date.getDate()+3

  return [month, day].map(formatNumber).join('月') + ' '
}
const formatyear4 = date => {
  const month = date.getMonth() + 1
  const day = date.getDate()+4

  return [month, day].map(formatNumber).join('月') + ' '
}
const formatyear5 = date => {
  const month = date.getMonth() + 1
  const day = date.getDate()+5

  return [month, day].map(formatNumber).join('月') + ' '
}
const formatyear6 = date => {
  const month = date.getMonth() + 1
  const day = date.getDate()+6

  return [month, day].map(formatNumber).join('月') + ' '
}
const getWeekByDate0 = dates => {
  let show_day = new Array('周日', '周一', '周二', '周三', '周四', '周五', '周六');
  let date = new Date(dates);
  date.setDate(date.getDate());
  let day = date.getDay();
  return show_day[day];
}
const getWeekByDate1 = dates => {
  let show_day = new Array('周日', '周一', '周二', '周三', '周四', '周五', '周六');
  let date = new Date(dates);
  date.setDate(date.getDate());
  let day = (date.getDay() + 1) % 7;
  return show_day[day];
}
const getWeekByDate2 = dates => {
  let show_day = new Array('周日', '周一', '周二', '周三', '周四', '周五', '周六');
  let date = new Date(dates);
  date.setDate(date.getDate());
  let day = (date.getDay() + 2) % 7;
  return show_day[day];
}
const getWeekByDate3 = dates => {
  let show_day = new Array('周日', '周一', '周二', '周三', '周四', '周五', '周六');
  let date = new Date(dates);
  date.setDate(date.getDate());
  let day = (date.getDay() + 3) % 7;
  return show_day[day];
}
const getWeekByDate4 = dates => {
  let show_day = new Array('周日', '周一', '周二', '周三', '周四', '周五', '周六');
  let date = new Date(dates);
  date.setDate(date.getDate());
  let day = (date.getDay() + 4) % 7;
  return show_day[day];
}
const getWeekByDate5 = dates => {
  let show_day = new Array('周日', '周一', '周二', '周三', '周四', '周五', '周六');
  let date = new Date(dates);
  date.setDate(date.getDate());
  let day = (date.getDay() + 5) % 7;
  return show_day[day];
}
const getWeekByDate6 = dates => {
  let show_day = new Array('周日', '周一', '周二', '周三', '周四', '周五', '周六');
  let date = new Date(dates);
  date.setDate(date.getDate());
  let day = (date.getDay() + 6) % 7;
  return show_day[day];
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatyear0: formatyear0,
  formatyear1: formatyear1,
  formatyear2: formatyear2,
  formatyear3: formatyear3,
  formatyear4: formatyear4,
  formatyear5: formatyear5,
  formatyear6: formatyear6,
  getWeekByDate0: getWeekByDate0,
  getWeekByDate1: getWeekByDate1,
  getWeekByDate2: getWeekByDate2,
  getWeekByDate3: getWeekByDate3,
  getWeekByDate4: getWeekByDate4,
  getWeekByDate5: getWeekByDate5,
  getWeekByDate6: getWeekByDate6,
}

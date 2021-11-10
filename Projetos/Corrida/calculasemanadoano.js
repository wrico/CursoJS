Date.prototype.getWeekNumber = function(){
    var d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
    var dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    return Math.ceil((((d - yearStart) / 86400000) + 1)/7)
  };
  
  console.log('The current ISO week number is ' + new Date().getWeekNumber());

  /*
new Date().getDate()          // Get the day as a number (1-31)
new Date().getDay()           // Get the weekday as a number (0-6)
new Date().getFullYear()      // Get the four digit year (yyyy)
new Date().getHours()         // Get the hour (0-23)
new Date().getMilliseconds()  // Get the milliseconds (0-999)
new Date().getMinutes()       // Get the minutes (0-59)
new Date().getMonth()         // Get the month (0-11)
new Date().getSeconds()       // Get the seconds (0-59)
new Date().getTime()          // Get the time (milliseconds since January 1, 1970)
  */
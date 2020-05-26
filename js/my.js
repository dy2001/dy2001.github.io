function getYMDHMS(startTime, endTime) {
    if(startTime.length < 14 || endTime.length < 14) {
        return "error";
    }
    var startArr = [startTime.substring(0, 4), startTime.substring(4, 6), startTime.substring(6, 8), startTime.substring(8, 10), startTime.substring(10, 12), startTime.substring(12, 14)];
    var endArr = [endTime.substring(0, 4), endTime.substring(4, 6), endTime.substring(6, 8), endTime.substring(8, 10), endTime.substring(10, 12), endTime.substring(12, 14)];
    var dateStart = new Date(startArr[0], startArr[1], startArr[2], startArr[3], startArr[4], startArr[5]);
    var dateEnd = new Date(endArr[0], endArr[1], endArr[2], endArr[3], endArr[4], endArr[5]);
    var dateInterval = dateEnd.getTime() - dateStart.getTime() 
    var days = Math.floor(dateInterval / (24 * 60 * 60 * 1000));
    var hourLevel = dateInterval % (24 * 60 * 60 * 1000);
    var hours = Math.floor(hourLevel / (60 * 60 * 1000))
    var minutesLevel = hourLevel % (60 * 60 * 1000);
    var minutes = Math.floor(minutesLevel / (60 * 1000));
    var seconds = Math.round((minutesLevel % (60 * 1000)) / 1000);
    //alert('天数 ' + days + ' 小时数 ' + hours + ' 分钟数 ' + minutes + ' 秒数 ' + seconds)
    return '已存活'+days+'天'+hours+'小时'+minutes+'分钟'+seconds+'秒';
}
function getFormtTime(){
    var time1 = new Date();
    var Year=''+time1.getFullYear();
    var Month=''+(time1.getMonth()+1);
    var Day=''+time1.getDate();
    var Hours=''+time1.getHours();
    var Minutes=''+time1.getMinutes();
    var Seconds=''+time1.getSeconds();
    if(Month.length<=1){Month='0'+Month};
    if(Day.length<=1){Day='0'+Day};
    if(Hours.length<=1){Hours='0'+Hours};
    if(Minutes.length<=1){Minutes='0'+Minutes};
    if(Seconds.length<=1){Seconds='0'+Seconds};
    return ''+Year+Month+Day+Hours+Minutes+Seconds;
}
setInterval(function(){
    document.getElementById('RunningTime').innerText= getYMDHMS('20200106000000', getFormtTime());
},300);
//document.getElementById('more').style="display: block;width:100%;border-bottom:1px solid #F03838";
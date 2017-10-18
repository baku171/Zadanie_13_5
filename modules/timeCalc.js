function formatTime(time) {
    var minutes = Math.floor(time / 60);
    var seconds = (time - minutes * 60).toFixed(0);
    var hour = Math.floor(minutes / 60);
    if (time > 3599) {
        return(hour + ' hour ' + (minutes - hour * 60) + ' min ' + seconds + ' sec');
    } else {
        return(minutes + ' min ' + seconds + ' sec');
    }
}

exports.printHMS = formatTime;
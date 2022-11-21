function dateChange() {
    let d = new Date()
    let hour = d.getHours()
    let minute = d.getMinutes()
    let second = d.getSeconds()
    let milliseconds = d.getMilliseconds()


    document.getElementById("hour")
        .innerHTML = hour
    document.getElementById("minute")
        .innerHTML = minute
    document.getElementById("second")
        .innerHTML = second
    document.getElementById("milli")
        .innerHTML = milliseconds
}
setInterval(dateChange, 1000)
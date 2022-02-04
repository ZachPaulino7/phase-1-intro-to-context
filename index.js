const createEmployeeRecord = (recArray) => {
    return {
        firstName: recArray[0],
        familyName: recArray[1],
        title: recArray[2],
        payPerHour: recArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
} 

const createEmployeeRecords = (recordsArray) => {
    return recordsArray.map(rec => createEmployeeRecord(rec))
}

const createTimeInEvent = function (dateStamp) {
    const [date, hour] = dateStamp.toString().split(` `)
    //const arrFromDate = dateStamp.toString().split(' ');
    //const date = arrFromDate[0]
    //const hour = arrFromDate[1]
    console.log('hour:', hour);
    console.log('date:', date);
    const inEvent = {
        type: "TimeIn",
        hour: parseInt(hour),
        date: date
    }
    this.timeInEvents.push(inEvent)
    return this
}

const createTimeOutEvent = function (dateStamp) {
    const [date, hour] = dateStamp.toString().split(` `)
    const outEvent = {
        type: "TimeOut",
        hour: parseInt(hour),
        date: date
    }
    this.timeOutEvents.push(outEvent)
    return this
}


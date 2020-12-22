const faker = require('faker');
var fs = require('fs');


function createEmail(userContext, events, done) {
    userContext.vars.uname = faker.internet.userName() + "1";
    userContext.vars.password = faker.internet.password(12) + "$";
    userContext.vars.mobileno = faker.phone.phoneNumber();
    userContext.vars.fname = faker.name.firstName();
    userContext.vars.mname = faker.internet.userName();
    userContext.vars.lname = faker.name.lastName();
    done();
}

function logRequest(requestParams, response, context, ee, next) {
    const date = new Date();
    fs.appendFile('./request.txt', JSON.stringify({ request_time: date.toGMTString() + ":" + date.getMilliseconds(), requestParams }), function (err) {
        if (err) throw err;
    });
    return next(); // MUST be called for the scenario to continue
}

function logResponse(requestParams, response, context, ee, next) {
    const date = new Date();
    fs.appendFile('./log.txt', JSON.stringify({ time: date.toGMTString() + ":" + date.getMilliseconds(), date: response.body })+"\n", function (err) {
        if (err) throw err;
    })
    return next(); // MUST be called for the scenario to continue
}

module.exports = {
    createEmail,
    logResponse,
    logRequest
}
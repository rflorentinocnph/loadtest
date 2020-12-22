const faker = require('faker');

function createEmail(userContext, events, done) {
    userContext.vars.uname = faker.internet.userName() + "1";
    userContext.vars.password = faker.internet.password(12) + "$";
    userContext.vars.mobileno = faker.phone.phoneNumber();
    userContext.vars.fname = faker.name.firstName();
    userContext.vars.mname =faker.internet.userName();
    userContext.vars.lname = faker.name.lastName();
    done();
}

module.exports = {
    setJSONBody: setJSONBody,
    logHeaders: logHeaders
}

function setJSONBody(requestParams, context, ee, next) {
    return next(); // MUST be called for the scenario to continue
}

function logHeaders(requestParams, response, context, ee, next) {
    const date = new Date();
    console.log("on request : ",date.toGMTString());
    return next(); // MUST be called for the scenario to continue
}
module.exports = {
    createEmail,
    setJSONBody,
    logHeaders
}
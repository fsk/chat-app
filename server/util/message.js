const moment = require("moment");

let generateMessage = (from, text) => {
    return {
        from,
        text,
        createdAt: moment.valueOf()
        //createdAt: new Date()
    };
};


let generateLocationMessage = (from, lat, long) => {
    return {
        from,
        url: `https://www.google.com.tr/maps?q=${lat}, ${long}`,
        createdAt: moment.valueOf()
        //createdAt: new Date()
}};


module.exports = {
    generateMessage,
    generateLocationMessage
}
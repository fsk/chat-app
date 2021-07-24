let expect = require('expect');

const { generateMessage, generateLocationMessage } = require('./message');

describe('Generate Message', () => {
    it('should generate message object', () => {
        let from = 'Furkan',
        text = 'Some random text',
        message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, text});
    });
});


describe('Generate Location Message', () => {
    it('should generate current location object', () => {
        let from = 'Sahin',
        lat = 12,
        long = 19,
        url = `https://www.google.com.tr/maps?q=${lat}, ${long}`,
        message = generateLocationMessage(from, lat, long);

        expect(message.createdAt).toBe('number');
        expect(message).toMatchObject({from, url});
    })
})


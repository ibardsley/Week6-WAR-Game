const { addNumber } = require("./WAR_Game");

describe('addNumber', () => {
    test('do the numbers add together', () => {
        const sum = addNumber(1, 2)
        expect(sum).toEqual(3)
    })
})
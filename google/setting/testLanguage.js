exports.multiLanguage = () => {
    const assert = require('assert');
    Feature('Use multiple language');

    Scenario('Should open language drop down, click to english button, then switch to main page with english language', async (I) => {
        await I.amOnPage('https://test-dev-8.cybozu.com/login');
        await I.click('Garoon');
        await I.moveCursorTo('.dropbtn');
        let englishButton = locate('a').withAttr({href: '#en', class: 'lang_link'});
        await I.click(englishButton);
        await I.moveCursorTo('.dropbtn');
    });
}

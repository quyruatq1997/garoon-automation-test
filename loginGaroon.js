exports.loginGaroon = () => {
    Feature('Login to Garoon');

    Scenario('Should login with username and password, go to Garoon main page and show all element', async (I) => {
        await I.amOnPage('https://test-dev-8.cybozu.com/login');
        await I.fillField({name: 'username'}, 'quy');
        await I.fillField({name: 'password'}, secret('fabbi123'));
        await I.click('Login');
        await I.click('Garoon');
        await I.seeElement('#nw_contract_plugin_btn');
        await I.seeElement('#google_nw_contract_plugin_btn');
        await I.seeElement('#login_garoon');
        await I.seeElement('#login_garoon_google');
        await I.seeElement('#login_office');
        await I.seeElement('#login_google');
        await I.seeElement('#confirmInputOfficeCalendar');
        await I.seeElement('#confirmInputGoogleCalendar');
        await I.seeElement('.dropbtn');
        await I.moveCursorTo('.dropbtn');
        await I.waitForElement('.dropdown-content');
        await I.seeElement({xpath: '//*[@id="nw-go-modal"]/div[1]/div/a[1]'});
        await I.seeElement({xpath: '//*[@id="nw-go-modal"]/div[1]/div/a[2]'});
        await I.seeElement({xpath: '//*[@id="nw-go-modal"]/div[1]/div/a[3]'});
        await I.seeElement({xpath: '//*[@id="nw-go-modal"]/div[1]/div/a[4]'});
        await I.seeElement({xpath: '//*[@id="nw-go-modal"]/div[1]/div/a[5]'});
    });
}



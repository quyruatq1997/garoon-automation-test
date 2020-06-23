exports.modal = () => {
    const assert = require('assert');
    const axios = require('axios');
    Feature('Open Setting Modal');

    Scenario('Should open setting modal, and show full element', async (I) => {
        await I.amOnPage('https://test-dev-8.cybozu.com/login');
        await I.click('Garoon');
        await I.click('#google_nw_contract_plugin_btn');
        await I.seeElement('#google_nw_contract_modal');
        await I.seeElement('#google_config-auth');
        await I.seeElement('#google_config-authkey-trialDate');
        await I.seeElement('#google_applicationButton');
        await I.seeElement({xpath: '//*[@id="google_config-authKey"]/h3/b'});
        await I.seeElement('#google_authKey');
        await I.seeElement('#google_check-plugin-trial');

        await I.seeElement('.google_nw-garoon-settings');
        await I.seeElement({xpath: '//*[@id="google_nw_contract_modal"]/div/div[3]/div[1]/h2'});
        await I.seeElement('.css-label');
        await I.click('.css-label');
        const element = await I.grabAttributeFrom('#checkbox_sync', 'checked');
        if (element[0] === 'true'){
            await I.waitForElement('#alert_sync');
            await I.seeElement('#alert_sync');
            await I.seeElement('.one-way-input')
        } else {
            await I.waitForElement('#alert_not_sync');
            await I.seeElement('#alert_not_sync');
            await I.dontSeeElement('.one-way-input')
        }
        await I.seeElement({xpath: '//*[@id="google_nw_contract_modal"]/div/div[3]/div[2]/h2[1]/span'});
        await I.seeElement({xpath: '//*[@id="google_nw_contract_modal"]/div/div[3]/div[2]/h3[1]'});
        await I.seeElement('.google_garoon_client_id');
        await I.seeElement({xpath: '//*[@id="google_nw_contract_modal"]/div/div[3]/div[2]/h3[2]'});
        await I.seeElement('.google_garoon_client_secret');
        await I.seeElement({xpath: '//*[@id="google_nw_contract_modal"]/div/div[3]/div[2]/h2[2]/span'});
        await I.seeElement('.google_email_noti');
        await I.seeElement({xpath: '//*[@id="google_nw_contract_modal"]/div/div[3]/div[2]/h2[3]/span'});
        await I.seeElement({xpath: '//*[@id="google_nw_contract_modal"]/div/div[3]/div[2]/table/thead/tr/th[1]'});
        await I.seeElement({xpath: '//*[@id="google_nw_contract_modal"]/div/div[3]/div[2]/table/thead/tr/th[2]'});
        await I.seeElement({xpath: '//*[@id="google_nw_contract_modal"]/div/div[3]/div[2]/table/tbody/tr[1]/td[1]/div/div/div'});
        await I.seeElement({xpath: '//*[@id="google_nw_contract_modal"]/div/div[3]/div[2]/table/tbody/tr[1]/td[2]/div/div/div'});
        await I.seeElement({xpath: '//*[@id="google_nw_contract_modal"]/div/div[3]/div[2]/table/tbody/tr[2]/td[1]/div/div/div'});
        await I.seeElement({xpath: '//*[@id="google_nw_contract_modal"]/div/div[3]/div[2]/table/tbody/tr[2]/td[2]/div/div/div'});
        await I.seeElement({xpath: '//*[@id="google_nw_contract_modal"]/div/div[3]/div[2]/table/tbody/tr[3]/td[1]/div/div/div'});
        await I.seeElement({xpath: '//*[@id="google_nw_contract_modal"]/div/div[3]/div[2]/table/tbody/tr[3]/td[2]/div/div/div'});
        await I.seeElement('#google_category');
        await I.seeElement('#category-color');
        await I.seeElement('#google_attendees');
        await I.seeElement({xpath: '//*[@id="google_nw_contract_modal"]/div/div[3]/div[2]/table/tbody/tr[5]/td[2]/div/div/div/div/select'});
        await I.seeElement('#google_companyInfo');
        await I.seeElement({xpath: '//*[@id="google_nw_contract_modal"]/div/div[3]/div[2]/table/tbody/tr[6]/td[2]/div/div/div/div/select'});
        await I.seeElement('#google_notes');
        await I.seeElement({xpath: '//*[@id="google_nw_contract_modal"]/div/div[3]/div[2]/table/tbody/tr[7]/td[2]/div/div/div/div/select'});
        await I.seeElement('#google_facilities');
        await I.seeElement('#google_facilities_field');
        await I.selectOption('#category-color', '---');
        await I.dontSeeElement('#google-table-select-color');
        await I.selectOption('#category-color', 'category');
        await I.seeElement('#google-table-select-color');
        await I.selectOption('#google_facilities_field', '---');
        await I.dontSeeElement('#google-table-select-facilities');
        await I.selectOption('#google_facilities_field', 'facilities');
        await I.seeElement('#google-table-select-facilities');
        await I.seeElement({xpath: '//*[@id="google_nw_contract_modal"]/div/div[3]/div[2]/h2[4]'});
        await I.seeElement('#google_limit_user');
        await I.seeElement('#google_selected_users');
        await I.seeElement('#google_selected_users');
        await I.seeElement('.paging_user');
        await I.seeElement({xpath: '//*[@id="google_nw_contract_modal"]/div/div[3]/div[2]/div[5]/table/thead/tr/th[1]'});
        await I.seeElement({xpath: '//*[@id="google_nw_contract_modal"]/div/div[3]/div[2]/div[5]/table/thead/tr/th[2]'});
        await I.seeElement({xpath: '//*[@id="google_nw_contract_modal"]/div/div[3]/div[2]/div[5]/table/thead/tr/th[3]/p'});
        await I.seeElement('.current_page');
        await I.seeElement('.current_page');
        await I.seeElement('#google_submit');
        await I.seeElement('#google_cancel');
        await I.seeElement('#google_nw_contract_modal_close');
        let beforeAddRow = await I.grabNumberOfVisibleElements('.addList');
        await I.click('.addList');
        let afterAddRow = await I.grabNumberOfVisibleElements('.addList');
        assert.notEqual(beforeAddRow, afterAddRow);

        let t = await I.executeScript(function() {
            // $('.removeList').click(function () {
            //     assert.notEqual($(this).parent().prev().prev().val(), null)
            // });

            // axios.get('https://ppq2egypse.execute-api.ap-southeast-1.amazonaws.com/dev/setting?method=getconfig')
            //     .then(function (response) {
            //         // handle success
            //         console.log(response);
            //     })
            //     .catch(function (error) {
            //         // handle error
            //         console.log(error);
            //     });

            // in browser context
            // $.ajax({
            //     method: "GET",
            //     url: `https://ppq2egypse.execute-api.ap-southeast-1.amazonaws.com/dev/setting?method=getconfig`,
            //     dataType: "json",
            //     cache: false,
            //     error: err => {
            //         return(err)
            //     },
            //     success: (body, textStatus, xhr) => {
            //         return(JSON.stringify(body))
            //     }
            // })
        });
        const beforeDeleteColor = await I.grabAttributeFrom({xpath: '//*[@id="google-table-select-color"]/table/tbody/tr[1]/td[2]/div/div/span[1]'}, 'class');
        await I.click({xpath: '//*[@id="google-table-select-color"]/table/tbody/tr[1]/td[3]/button[2]'});
        const afterDeleteColor = await I.grabAttributeFrom({xpath: '//*[@id="google-table-select-color"]/table/tbody/tr[1]/td[2]/div/div/span[1]'}, 'class');
        assert.notEqual(beforeDeleteColor, afterDeleteColor);
        // await I.click('.addList');
        pause();
    });
}

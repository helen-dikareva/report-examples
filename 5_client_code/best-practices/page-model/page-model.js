import { Selector, t } from 'testcafe';

class FormPage {
    constructor () {
        this.nameInput = Selector('#developer-name');
        //...
        this.submitButton = Selector('#submit-button');
    }

    submitForm () {
        return t.click(this.submitButton);
    }
}

export const formPage = new FormPage();
import { Selector } from 'testcafe';

class FormPage {
    constructor () {
        this.nameInput = Selector('#developer-name');

        this.checkboxes = Selector('[type="checkbox"]');
        this.reuseInput = this.checkboxes.parent('label').withText('Re-using existing JavaScript code');

        this.radioButtons = Selector('[type="radio"]');
        this.macOSInput   = this.radioButtons.parent('label').withText('MacOS');

        this.submitButton = Selector('#submit-button');
    }
}

class ThankYouPage {
    constructor () {
        this.header = Selector('#article-header');
    }
}

export const formPage     = new FormPage();
export const thankYouPage = new ThankYouPage();
import DatePickerPage from '../page-objects/DatePickerPage/yes.js';

describe('Date Picker Test', () => {
  const datePickerPage = new DatePickerPage();

  it('should set the date and validate it', () => {
    datePickerPage.open();
    datePickerPage.selectDate();
    datePickerPage.validateDate();
  });
});


class DatePickerPage {
  
  open() {
    cy.visit('https://demoqa.com/date-picker');
  }

  selectDate() {
    cy.get('#dateAndTimePickerInput').click();

    cy.get('.react-datepicker__month-select').select('February');

    cy.get('.react-datepicker__year-select').select('2013');

    cy.contains('28').click(); 

    cy.get('.react-datepicker__time-list-item').contains('12:00').click();
  }

  validateDate() {
    cy.get('#dateAndTimePickerInput').should('have.value', 'February 28, 2013 12:00 PM');
  }
}

export default DatePickerPage;
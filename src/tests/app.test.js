const { appData, addMember, addExpense } = require('../app');


beforeEach(() => {
  appData.members = [];
  appData.expenses = [];
  appData.nextExpenseId = 1;
});

test('should add a new member', () => {
  const result = addMember('Hassan');
  expect(result).toBe('✅ Member added: Hassan');
  expect(appData.members).toContain('Hassan');
});

test('should not add duplicate members', () => {
  addMember('Hassan');
  const result = addMember('hassan');
  expect(result).toBe('❌ hassan already exists.');
  expect(appData.members.length).toBe(1);
});

test('should add an expense for a valid member', () => {
  addMember('Sara');
  const result = addExpense('Sara', 200, 'Lunch');
  expect(result).toBe('Added expense: Lunch (200) by Sara');
  expect(appData.expenses.length).toBe(1);
});

test('should not add an expense for invalid member', () => {
  const result = addExpense('Adnan', 100, 'Coffee');
  expect(result).toBe("Error: Member Adnan doesn't exist.");
  expect(appData.expenses.length).toBe(0);
});

// Feature-Member
let appData = {
  members: [],
  expenses: [],
  nextExpenseId: 1
};

function addMember(name) {
  const lowerName = name.toLowerCase();
  for (let member of appData.members) {
    if (member.toLowerCase() === lowerName) {
      return `❌ ${name} already exists.`;
    }
  }
  appData.members.push(name);
  return `✅ Member added: ${name}`;
}

function addExpense(paidBy, amount, description) {
  const memberExists = appData.members.some(
    (m) => m.toLowerCase() === paidBy.toLowerCase()
  );
  if (!memberExists) return `Error: Member ${paidBy} doesn't exist.`;

  const expense = {
    id: appData.nextExpenseId++,
    paidBy,
    amount,
    description
  };
  appData.expenses.push(expense);
  return `Added expense: ${description} (${amount}) by ${paidBy}`;
}

// Export for testing
module.exports = { appData, addMember, addExpense };

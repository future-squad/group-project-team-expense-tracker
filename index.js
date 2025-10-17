function generateReport() {
  if (appData.expenses.length === 0) {
    console.log("ℹ️ No expenses found!");
    return;
  }

  let totalExpenses = 0;
  let memberSpendings = {};

 
  for (let exp of appData.expenses) {
    totalExpenses += exp.amount;

    const member = exp.paidBy;
    if (!memberSpendings[member]) {
      memberSpendings[member] = 0;
    }
    memberSpendings[member] += exp.amount;
  }

  const members = Object.keys(memberSpendings);
  const avgExpense = totalExpenses / appData.members.length;

 
  let balance = {};
  for (let m of appData.members) {
    const spent = memberSpendings[m] || 0;
    balance[m] = spent - avgExpense;
  }

  console.log("\n===== TEAM EXPENSE REPORT =====");
  console.log(`Total Expenses: ${totalExpenses}`);
  console.log(`Each Member’s Share: ${avgExpense.toFixed(2)}\n`);

  console.log("Member Spending:");
  for (let m of appData.members) {
    console.log(`${m} spent ${memberSpendings[m] || 0}`);
  }

  console.log("\nBalances:")
  for (let m of appData.members) {
    const bal = balance[m];
    if (bal > 0) console.log(`${m}: +${bal.toFixed(2)} (should get back)`);
    else if (bal < 0) console.log(`${m}: ${bal.toFixed(2)} (owes money)`);
    else console.log(`${m}: Settled up`);
  }
}
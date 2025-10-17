//  Feature-Member
let appData = {
    members: [],
    expenses: [],
    nextExpenseId: 1
};
function addMember(name) {
    const lowerName = name.toLowerCase();

    for (let member of appData.members) {
        if (member.toLowerCase() === lowerName) {
            console.log(`❌ ${name} already exists.`);
            return;
        }
    }

    appData.members.push(name);
    console.log(`✅ Member added: ${name}`);
    saveData();
}

function listMembers() {
    console.table(appData.members);
}

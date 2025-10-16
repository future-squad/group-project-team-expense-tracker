//  Feature-Member
let members = [];
function addmember(name) {
    let lowername = name.toLowerCase();
    for (let member of members) {
        if (member.toLowerCase() === lowername) {
            console.log(`❌ ${name} was already exist`)
            return;
        }
    }
    members.push(name)
    console.log("✅Member Added:", name)
}
addmember("adnan")
addmember("sara")
addmember("ali")
addmember("hussain")
addmember("hassan")
addmember("adnan")
addmember("imran")
addmember("imran")

function tabular(members) {
    console.table(members.map(s => {
        return s;
    }))
}
tabular(members)

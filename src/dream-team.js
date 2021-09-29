export default function createDreamTeam(members) {
  let membersNew = [];

  if (!(Array.isArray(members)) || members.length == 0) {
    return false;
  }

  for (let i = 0; i < members.length; i++) {
    if (typeof (members[i]) == "string") {
      membersNew.push(members[i].trim()[0].toUpperCase());
    }
  }

  return membersNew.sort().join("");
}

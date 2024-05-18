let id = 1;

function createUserProfiles(names, modifiedNames) {
  return names.map((name, index) =>  {
    return {
      originalName: name,
      modifiedName: modifiedNames[index],
      id: id++
    };
  });
}
 
// Example usage:
const names = ['ramen', 'teddy', 'bear', 'koala', 'lizard'];
const modifiedNames = ['RAMEN', 'teddy', 'BEAR', 'koala', 'LIZARD'];
const userProfiles = createUserProfiles(names, modifiedNames);
console.log(JSON.stringify(userProfiles, null, 2));
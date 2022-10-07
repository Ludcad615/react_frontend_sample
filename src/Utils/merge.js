// Function that takes 2 arrays
// userData: Array and postData: Array
// add the title and body from the postData to the userData
// iterate over the user array
// compare userID with post UserId
// create a empty array
// make a copy of the user array and add the title and body to the user array
// push the new user array into the empty array
// return a array with the title and body added to the user array

export default function mergePostDataToUserData(userData, postData) {
  const mergedArray = [];
  let userItem = userData[0];
  let postItem = postData[0];
  let i = 1;
  let j = 1;

  if (userItem && postItem) {
    while (userItem) {
      if (userItem.id === postItem.userId) {
        mergedArray.push({
          ...userItem,
          title: postItem.title,
          body: postItem.body,
        });
        userItem = userData[i];
        i++;
      } else {
        postItem = postData[j];
        j++;
      }
    }
  }

  return mergedArray;
}

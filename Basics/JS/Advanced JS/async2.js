function getLikeData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Like Data sucessfully fetched.")
    }, 2000)
  })
}

function getCommentData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("comment Data sucessfully fetched.")
    }, 2000)
  })
}

async function getPostData() {
  try {
    console.log("Fetching data.....");

    /*
     const likeData = await getLikeData();
     const commentData = await getCommentData();
     instead of this we can use Promise.all
     */
    const [likeData, commentData] = await Promise.all([
      getLikeData(),
      getCommentData()]);
    console.log(likeData);
    console.log(commentData);

    console.log("Post details fetched sucessfully ");
  } catch (error) {
    console.log("Error in Post Data", error);
  }
}
getPostData();

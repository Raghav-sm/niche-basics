// its a utility build by js .Certain task take time like network calls etc.. If we deliberately want to make asynchronous calls then promises are the way to do it.


function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let sucess = true;
      if (sucess) {
        resolve("Data fetched sucesfully.");
      } else {
        reject("Data fetching failed.")
      }
    }, 2000);
  })
}


fetchData()
  .then((event) => { console.log(event) })
  .catch((event) => { console.log(event) })
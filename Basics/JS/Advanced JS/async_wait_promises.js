function fetchData(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({name : "raghav",url : "https://raghav.com"})
    },2000)
  })
}


async function getUserData() {
  try {
    console.log("fetching Data.....");
    const userData = await fetchData() // we can only use this keyword with async function
    console.log("user Data", userData);
    
  } catch (error) {
    console.log("error fetching data ",error);
  }
}
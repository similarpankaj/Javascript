
const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  // DB calls, cryptograpy, network call
  setTimeout(() => {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("async 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ username: "pankaj", email: "pankaj@gmail.com" });
  }, 1000);
});

promiseThree.then(function (data) {
  console.log(data);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "pankaj", password: 1 });
    } else {
      reject("Error: something went wrong");
    }
  }, 1000);
});

promiseFour
  .then(function (data) {
    console.log(data);
    return data.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("the promise id either resolved or rejected");
  });

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "pankaj", password: "123" });
    } else {
      reject("ERRROR: Js went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// async function getAllUser() {
//   try {
//     const resoponse = await fetch("https://jsonplaceholder.typicode.com/users");
//     console.log(resoponse);
//     const data = await resoponse.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getAllUser();

fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
    return res.json()
})
.then((data) => console.log(data))
.catch((e) => console.log(e))

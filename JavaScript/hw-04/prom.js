const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success!');
  }, 2000);
});
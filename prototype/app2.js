const arr = [1, 2];

arr.find((e) => {
  console.log(this);
});

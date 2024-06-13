// for (var i = 0; i < 3; i++) {
//     const promise = new Promise((resolve, reject) => {
//           setTimeout(resolve, 1000 + i*1000)
//     });
//     promise.then(() => alert(i));
//   }

fetch("https://cs6262.gtisc.gatech.edu/receive/gyadav35/699", {
  method: "POST",
  body: JSON.stringify({"username": "gyadav35"}),
  headers: {
    "Content-Type": "application/json",
  },
});
const  fetch = require ("node-fetch");
fetch("https://PokéAPI.me/api/")
.then((result) => {
    console.log(result);
})
.catch( (erro) => {
  console.log(erro);
});

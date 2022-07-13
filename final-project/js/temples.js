const temples_url = "https://herreraaxelbyu.github.io/wdd230/final-project/JSON/temples.json";

fetch(temples_url)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    console.log(jsonObject)
    const temples = jsonObject['temples']
    
    const names = temples.name
    console.log()
  });

  
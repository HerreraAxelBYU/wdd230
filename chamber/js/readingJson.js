console.log("hi")



 async function readJson() {
    const url = await fetch("./readingJson.js");

    info = await url.json();
    console.log(readJson)

 }

 readJson()
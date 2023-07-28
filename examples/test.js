const cozip = require("../dist/index.js")

cozip("./pack.zip",[
    ["./", true, (p) => !p.endsWith(".tts") && !p.endsWith(".zip")],
],  err => {
    // if(err) ...
})

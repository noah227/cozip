# cozip

> Cozy zip, an easy way to zip files based on `adm-zip`

## Example

```js
const cozip = require("cozip")

cozip("./pack.zip",[
    ["./", true, (p) => !p.endsWith(".tts") && !p.endsWith(".zip")],
],  err => {
    // if(err) ...
})
```

> tree

``` 
┬  index.js
│  pack.zip
│  test.js
│  
├─logs
└─src
    │  1.txt
    │  2.txt
    │  3.tts
    │  
    └─inner
            ii.yml
```

> tree(zip file)

```
┬  index.js
│  test.js
│  
├─logs
└─src
    │  1.txt
    │  2.txt
    │  
    └─inner
            ii.yml
```

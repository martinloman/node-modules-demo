## Moduler i JavaScript

Moduler är ett sätt att dela upp sin kod i flera filer/moduler för att skapa struktur i koden.

Moduler kan skapas på olika sätt, ett äldre sätt som heter _CommonJS_ och ett nyare som heter _ESModules_.

I detta repo finns två mappar där skillnaderna mellan dessa illustreras.

### CommonJS

Här använder man moduler genom att använda `require()`.

Ex:

```javascript
const common = require("./commonjs")
```

CommonJS är default för filer som slutar på `.js`

### ESModules

Här använder man moduler genom att använda `import ... from`.

Ex:

```javascript
import * as mymodule from "./esmodule.js"
```

För att Node ska hantera `.js`-filer som ES-moduler så måste man ange i package.json-filen att typen är `module`:

```json
{
  "type": "module",
  "dependencies": {}
}
```

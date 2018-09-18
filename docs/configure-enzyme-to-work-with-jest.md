# Install and configure Enzyme to work with Jest 

## Install dev dependencies

- Enzyme dependencies

```
yarn add --dev enzyme enzyme-adapter-react-16 enzyme-to-json react-test-renderer
```

- Polyfill to resolve the erro "**requestAnimationFrame**"

```
yarn add --dev core-js raf 
```

- Solve the error for CSS modules. E.g. **App.css** file:

```
yarn add --dev identity-obj-proxy 
```

## Configure Enzyme

- Create the file **src/setupTests.js** with the code below:

```
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
```

- Go to the file **package.json** and add the code below:

```
"jest": {
  "moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
  "setupFiles": [
    "raf/polyfill"
  ],
  "setupTestFrameworkScriptFile": "<rootDir>/src/setupTests.js"
}
```
## Change the test task to use jest

In the **package.json** change the property **test** in the section **scripts** like below:

```
"test": "jest",
```

## Configure app to use the polyfill to resolve the error "**requestAnimationFrame**"

- In the **index.js** file add these two imports:

```
import 'core-js/es6/map';
import 'core-js/es6/set';
```

## Create the file that will be responsible to solve the problem when using CSS module:

- Create a new folder "**__mocks__**" in the root directory
- Create the file **fileMock.js** with the code below:

```
module.exports = 'test-file-stub';
```

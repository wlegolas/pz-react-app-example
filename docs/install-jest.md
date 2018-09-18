# Install and configure Jest

This doc will show how install and configure Jest at application that was created using *create-react-app* (CRA).
**Node:** When we create a react app using the command *create-react-app* Jest is installed out of the box, that way we do not need to install Jest in your application.

## Install dev dependencies

```
yarn add --dev react-test-renderer
```

## Configure Babel 

Create the file **.babelrc** in the root directory with the code below:
```
{
  "presets": ["env", "react"]
}
```

That is all we need to use Jest on the CRA.

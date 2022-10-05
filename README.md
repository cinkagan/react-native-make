<p align="center"><img src="./docs/assets/make-logo.png"></p>
<h2 align="center">Everyday tools for simpler React Native development</h2>

<h3 align="center"><b>Main repo of this project @bam.tech/react-native-make</b></h3>

## ⚙️ Setup

In your react-native project folder, run:

```bash
yarn add -D react-native-customize-app
# OR
npm i -D react-native-customize-app
```

**Please note:** This plugin only supports react-native-cli v2+

## 📚 Usage

Once installed, plugins are available through the React Native CLI

You can get the list of available plugins by running `react-native -h` within your project's folder

|                            Command | Description                               |
| ---------------------------------: | :---------------------------------------- |
|     [set-icon](./docs/set-icon.md) | generate platform specific app icons      |
| [set-splash](./docs/set-splash.md) | generate platform specific splash screens |
| [set-name](./docs/set-name.md)     | update app name                           |

## 💻 Local development

- Pull latest version
- `cd react-native-make`
- Run `yarn` then `yarn link`
- Launch a new project with `react-native init`
- In your React Native project, `yarn link react-native-customize-app`
- In the package.json of your React Native project, in dependencies add "react-native-customize-app" : "0.0.0"


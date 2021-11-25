# Links
* [Installation Guide](#license)
* [About the app](#about-the-app)
* [About the structure](#about-the-structure)
* [Useful links](#usiful-links)
* [Enjoy](#enjoy)

# Installation Guide

* Setting up the development environment for react-native: [here](https://reactnative.dev/docs/environment-setup).

* Setting up ```expo-cli```: [here](https://docs.expo.dev/get-started/installation/), or just run
   ```bash
   npm install --global expo-cli
   ```
* Clone the progect: ```git clone git@github.com:engeslamadell/nasdak-app.git```.

* go to project folder ```cd nasdak-app```

* Install dependencies: yarn install (or npm install).

* Run on Android: ```yarn android```.

* Run on iOS: ```yarn ios```.

* You can find an expo build for the app [here](https://expo.dev/@thndr/nasdak). 

  - for ```android``` it will work like a charm.  
  - for ```iOS```, please use the credentials i gave to Youssef.

# About the app

Nasdaq is an app requested by **Thndr company** during my hiring process there.  
It's an app meant to featch all **stocks** in **Nasdaq** exchange with their ticker, name, and details.  

***[here](https://github.com/engeslamadell/nasdak-app/projects/1) You will find a small project board that can describe the project lifecycle.***

# About the structure

* You will find a ```community best practices``` when it comes to structure the files and folders inside the ```src``` directory, there's nothing new there.  
**But** i think i like separation A LOT, so for example, at the ```components folder``` you will find 2 ```sub-folders``` one for any shared component across the entire app, and another for the components specific to a particular screen.
* The same for ```overmind store```, i like having a global ```actions, effects, and state``` files, each screen in the application is treated as a module with it's own ```actions, effects, and state``` and combine them all together at a global configuration file, and the idea that ```overmind``` motivates toward this approach was very appreciated.
* So every screen will have the following.  
```|-- ScreenX```  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```|-- index.tsx```  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```|-- actions.ts```  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```|-- state.ts```  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```|-- effects.ts```  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```|-- styles.ts```  
this is applied for each screen in our app, except the the screen with no logic, only index and styles files will be more then enough  
* and for overmind we will have somethin like this.  
```|-- overmind```  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```|-- globalAction.ts```  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```|-- globalEffects.ts```  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```|-- globalState.ts```  
```|-- index.ts```  **at the end of the day, all these ```action, effects, and states``` are combined together here in this configuration file**



# Useful links

* Overmind documentation was a great place to learn about it and how to structure the app, **Unfortunately** it lacks examples, [here](https://overmindjs.org/) is the docs.

* Because of the lack of examples i had to search some where else and luckily i found the channel of the guy behind Overmind, and he does a lot of videos discussing the features and so on, [here](https://www.youtube.com/user/chjo2113) is the channel.

* Inspired by this video to make the **animation** at the intro of the app [here](https://www.youtube.com/watch?v=YE7c6ch2msY&t=1s).

# Enjoy

Thanks.
# Clone of Foodpanda

## Step

1. use command `npx create-expo-app FoodPanda-clone`

2. use command go do folder `code .FoodPanda-clone`

3. add the web support `npx expo install react-dom react-native-web @expo/webpack-config`

4. open project add redux `yarn add @reduxjs/toolkit redux react-redux`

5. run `npx expo start`
6. add tailwind config file for autocomplete add style to the class name in tailwind autocomplete
   `npx tailwindcss init -p`

7. add tailwind class name library `yarn add twrnc`

8. add React Navigation both native and stack
   `npm install @react-navigation/native @react-navigation/stack`

9. add expo react navigation dependies by
   `npx expo install react-native-screens react-native-safe-area-context`

10. add gesture handle by
    `npx expo install react-native-gesture-handler`

11. add icon
    `yarn add react-native-vector-icons`

12. add hero icons
    `yarn add react-native-heroicons react-native-svg`

13. add sanity
    `npm install -g @sanity/cli`

14. init sanity in the project
    `sanity init`
    add the project name to `foodpanda-clone` or what ever you want to add
    use the default dataset configuration : `yes`
    project output path to `sanity` this is to make it clean
    Do you want to use TypeScript : `yes`
    package manage to use for installing dependencies: `yarn`

15. use sanity
    `cd sanity`
    then
    `sanity start`
    this will ask that do you want to start a development sever instead? :`yes` as output is not else you can build
    make sure you have the tailwind.config.css else it will give error

16. add sanity client and sanity image url
    `yarn add @sanity/client @sanity/image-url `

17. create a file name sanity.js in main folder

18. we need to add cors to the sanity project we can do it though studio as well as by using command
    `cd sanity` to go to sanity folder
    then `sanity cors add http://localhost:19006`
    then `sanity cors add http://localhost:3000`

19. deploy the sanity
    `sanity deploy`
    use the hostname as you with make sure it is unique

20. go to localhost:3000 and go to vision and write
    `*[_type =="featured"]{
   ...,
   restaurants[]->{
      ...,
      dishes[]->,
      type->{
         name
      },
   }
}`

21. sometime the error happen `Error: URLSearchParams.set is not implemented` because me may be using the same name as project in sanity and that conflict with ` package.json`and `sanity/package.json ` change the project name of the sanity project if error happen

22. a strange kind of error happen with sanity to i added
    `yarn add react-native-url-polyfill` to make things work add app top of App,js
    `import 'react-native-url-polyfill/auto';`

23. add react-currency-formater
    `yarn add react-currency-formatter`

24. add react native animatable
    `yarn add react-native-animatable`
25. add react native progress
    `yarn add react-native-progress`

26. add react native map
    `npx expo install react-native-maps`

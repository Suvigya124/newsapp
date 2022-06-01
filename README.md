# About NewsPack

A well-designed app can deliver everything that your reader wants, all just a tap away,  allowing them to easily access your content on their commute or in their free time.

NewsPack is a news-app which gives users the daily news from different categories. This app is created with the help of **React JS**, a powerful JavaScript framework. With the help of React , we can design simple views for each state in our application, and React will efficiently update and render just the right components when our data changes.

![NewsPack Image](https://github.com/Suvigya124/newsapp/blob/master/images/NewsPack-1.png?raw=true)

This app gives top news headlines from last two days sorted by their date. It shows news title, description, author, date&time and its source. Each news has a **know more** button which takes us to the source page of the news and user can get full information of the news from the site.

This app gives the feature of showing news from a particular category. On the NavBar there are buttons for different types of news:
- *Business*
- *Enterntainment*
- *Health*
- *Science*
- *Sports*
- *Technology*

Through these buttons, users can get information related to a particular field. We have used ***react-router-dom*** which renders these categories without loading the whole page which is a great thing because it can save a lot of loading time and even save the user data and the person hosting the site. React Router uses dynamic routing to ensure that routing is achieved as it is requested by the user. This also means that all the required components are also rendered without any flashes of white screen.

We are fetching these news using an API from [NewsAPI](https://newsapi.org/). We are using the async function and fetch API to get news data. `Fetch API` is an asynchronous web API that comes with native JavaScript, and it returns the data in the form of promises. A better and cleaner way of handling the promise is through the `async/await keywords`. You start by specifying the caller function as async and then use await to handle the promise. Because of the await keyword, the asynchronous function pauses until the promise is resolved. The Response object is assigned to response once the request completes.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000/newsapp](http://localhost:3000/newsapp) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

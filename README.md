# User Dashboard

The project was started on Vite with Prettier configured

This project includes three pages
- page with all users
- page about the user
- 404 page

Manin stack
- React
- Typescript
- React-router-dom
- Styled components

To run the project:
```js
npm i
npm run dev
```
Additional information:
- The project works well on different screens
- The project has a pages folder, which contains all local components/functions/types/utilities for the development of this page and all global components/functions/types/utilities are in src
- The project uses static data with an added id to each user to reflect the maximum similarity of work with BE
- The project supports the necessary errors that may occur (the user array was not received, the user was not found)
- Much attention has been paid to pagination, which is bound to URL parameters. All options for incorrect parameters entered by the user in the URL are covered

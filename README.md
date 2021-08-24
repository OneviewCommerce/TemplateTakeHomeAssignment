# OVC TEST

## Summary

- An Interview coding challenge for OneView Commerce.
- https://github.com/a1clark1a

## Tech Stack

- Create-React-App
- TypeScript
- Redux/Redux-Thunk
- React-Tables
- Jest
- Axios
- Node-Sass
- https://jsonplaceholder.typicode.com/

## Feature Challenge

1.  Develop a table with 4 columns Name, Email, City, and Company populating the rows with the response from the api endpoint https://jsonplaceholder.typicode.com/users.

- The Name column should use user.name - The Email column should use user.email - The City column should use user.address.city - The Company column should use user.company.name.

2. Add an input field to search based on name. For instance if "Lea" is entered, only the "Leanne Graham" row should show in the table

3. Make the rows clickable. When a row is clicked, the website should show the user's posts. You can utilize this api, https://jsonplaceholder.typicode.com/posts?userId=1 for retrieve a user's posts.
4. The project should also include sufficient unit tests.

## Feature Improvements

1. Added pagination to address displaying potentially large data.
2. Search feature is improved to allow different search types(email, address, city, etc). Developers can add add/remove search feature based on data. Table is also scalable based on Data/ColumnHeaders passed to it and is reusable.
3. Reusable Components
4. Loading Component
5. Route page architecture for easy page/view management
6. Basic Styling

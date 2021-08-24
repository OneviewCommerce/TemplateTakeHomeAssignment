import Style from "./home.module.scss";
export const Home = () => {
  return (
    <div className={Style.home}>
      <h1>OneView Commerce Test App</h1>
      <article>
        <h2>Summary</h2>
        <p> - An Interview coding challenge for OneView Commerce.</p>
        <h2>Tech Stack</h2>
        <ul>
          <li>- Create-React-App</li>
          <li>- TypeScript</li>
          <li>- Redux/Redux-Thunk</li>
          <li>- React-Tables</li>
          <li>- Jest</li>
          <li>- Axios</li>
          <li>- Node-Sass</li>
          <li>- https://jsonplaceholder.typicode.com/</li>
        </ul>
        <h2>Feature Challenge</h2>
        <ol>
          <li>
            Develop a table with 4 columns Name, Email, City, and Company populating the rows with the response from the
            api endpoint https://jsonplaceholder.typicode.com/users.
          </li>
          <li>
            Add an input field to search based on name. For instance if "Lea" is entered, only the "Leanne Graham" row
            should show in the table
          </li>
          <li>
            Make the rows clickable. When a row is clicked, the website should show the user's posts. You can utilize
            this api, https://jsonplaceholder.typicode.com/posts?userId=1 for retrieve a user's posts.
          </li>
          <li>The project should also include sufficient unit tests.</li>
        </ol>
        <h2>Feature Improvements</h2>
        <ol>
          <li>Added pagination to address displaying potentially large data.</li>
          <li>
            Search feature is improved to allow different search types(email, address, city, etc). Developers can add
            add/remove search feature based on data. Table is also scalable based on Data/ColumnHeaders passed to it and
            is reusable.
          </li>
          <li>Reusable Components</li>
          <li>Loading Component</li>
          <li>Route page architecture for easy page/view management</li>
        </ol>
      </article>
    </div>
  );
};

## Netflix 

This project is a clone of the popular streaming service, Netflix. It is built using **React**, **HTML**, and **Tailwind CSS**. The application is fully responsive and provides an optimal user experience on both desktop and mobile devices.

## Technologies Used

- **React**: The user interface is built using React. It allows for a dynamic and interactive user experience.
- **Redux**: Redux is used for state management. It ensures that the state of the application is predictable and easier to manage.
- **Firebase**: Firebase is used for backend services such as authentication and database management.
- **React Router DOM**: This is used for routing in the application. It allows for seamless navigation between different components of the application.

## Features

- **Authentication**: The application includes a complete authentication system. Users can **sign up**, **log in**, and **log out**. User information is securely stored and password data is hashed for security.
- **Search Functionality**: Users can search for their favorite movies in the search bar. The search results are displayed in real-time as the user types.
- **Display Movies**: The application displays a variety of movies in different categories such as:
    - **Upcoming Movies**: This section displays movies that are going to be released in the future.
    - **Now Playing**: This section shows movies that are currently being streamed.
    - **Top Rated**: This section highlights the movies with the highest ratings.
    - **Popular Movies**: This section showcases the most-watched movies on the platform.

## Getting Started

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the necessary dependencies with `npm install`.
4. Set Up Environment Variables: 
    To run this project, you will need to add the following environment variables to your .env file:
    
    ```bash
    VITE_REACT_APP_TMDB_KEY=YOUR_TMDB_KEY`
    ```

4. Start the development server with `npm run dev`.
5. Open your browser and navigate to `http://localhost:5173` to see the application in action.

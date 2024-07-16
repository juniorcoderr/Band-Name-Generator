# Band-Name-Generator

## Features

- **User-Friendly Form**: A simple and intuitive form where users can input their last name and pet name.
- **Dynamic Band Name Generation**: Combines the input values to create a unique band name.
- **Responsive Design**: A stylish and responsive design that looks great on all devices.
- **Express.js Backend**: A Node.js framework that handles form submissions and generates the band name dynamically.

## Technologies Used

- **HTML5**: Used for the structure and layout of the web pages.
- **CSS3**: Used for styling the application and making it visually appealing.
- **JavaScript (ES6)**: Used for handling form submissions and dynamic content generation.
- **Node.js**: The JavaScript runtime used for the backend.
- **Express.js**: The Node.js framework used for setting up the server and handling HTTP requests.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- **Node.js**: You can download it from [nodejs.org](https://nodejs.org/).
- **npm**: Node Package Manager, which comes with Node.js.

### Installation

Follow these steps to set up the project on your local machine:

1. **Clone the Repository**:

   Open your terminal and run the following command to clone the repository:

   ```bash
   git clone https://github.com/juniorcoderr/band-name-generator.git
   ```

2. **Navigate to the Project Directory**:

   Change to the project directory:

   ```bash
   cd band-name-generator
   ```

3. **Install Dependencies**:

   Install the required dependencies using npm:

   ```bash
   npm install
   ```

4. **Start the Server**:

   Start the Express.js server:

   ```bash
   node index.js
   ```

5. **Open in Browser**:

   Open your web browser and go to `http://localhost:3000` to use the Band Name Generator.

## Project Structure

Here’s a brief overview of the files in this project:

- `index.html`: The main HTML file for the web application. It contains the form where users enter their last name and pet name.
- `index.js`: The main server file using Express.js. It sets up the server, handles form submissions, and generates the band name.
- `style.css`: Contains the CSS styling for the application, making it visually appealing and responsive.
- `package.json`: Lists the project dependencies and scripts.

## How It Works

1. **User Input**: The user enters their last name and pet name into the form.
2. **Form Submission**: When the user submits the form, the data is sent to the server.
3. **Band Name Generation**: The server combines the last name and pet name to create a unique band name.
4. **Result Display**: The generated band name is sent back to the user and displayed on a new page.

## Screenshots

### Main Page

![Main Page](screenshot1.png)
*The main page where users can enter their last name and pet name.*

### Band Name Result

![Band Name Result](screenshot2.png)
*The generated band name displayed after form submission.*

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request. We welcome all contributions!

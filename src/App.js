import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const websites = [
    { name: "example.com", catchall: "info@example.com" },
    // Add more websites and their catch-all email addresses here
  ];

  async function verifyEmail(email) {
    // const validWebsites = [];
    // for (const website of websites) {
    //   const checkUrl = `https://${website.catchall}`;
    //   try {
    //     const response = await axios.head(checkUrl);
    //     if (response.status === 200) {
    //       validWebsites.push(website.name);
    //     }
    //   } catch (error) {
    //     // Catch-all email address not found for this website
    //   }
    // }
    // return validWebsites;
    //console.log(email);
  }

  // const emailToVerify = "user@example.com";

  // verifyEmail(emailToVerify)
  //   .then((validWebsites) => {
  //     if (validWebsites.length > 0) {
  //       console.log(
  //         `The email address '${emailToVerify}' is valid for the following websites: ${validWebsites.join(
  //           ", "
  //         )}`
  //       );
  //     } else {
  //       console.log(
  //         `The email address '${emailToVerify}' is not valid for any of the websites.`
  //       );
  //     }
  //   })
  //   .catch((error) => {
  //     console.error("Error occurred:", error);
  //   });

  return (
    <div className="App">
      <header className="App-header">
        <input className="email" id="email" default="Enter email"></input>
        <button
          onClick={() => {
            const input = document.getElementsByClassName("email");
            console.log(input, input.value);
            verifyEmail(input.value);
          }}
        >
          Check
        </button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

// Importing our css
import './App.css';
// import './fileLocation'
import Body from './components/Body';
import Footer from './components/Footer';
// Creating Components
// 1. inside of app.jsx
// 2. outside

// !Documentation
//react.dev/learn/describing-the-ui
//react.dev/learn/thinking-in-react
// Patterns books

//React Components starts captital letter
// 1. Creating and component inside of your App.jsx
function Header() {
  //Custom Html tag
  // name it (captital letter)
  // return html/js
  return (
    // React Components must return one child
    <>
      {/* Code HTML/JS */}
      <nav>
        <ul>
          <li>Home</li>
          <li>Page 1</li>
          <li>Page 2</li>
          <li>More...</li>
        </ul>
      </nav>
    </>
  );
}

function App() {
  return (
    // load a component
    // Run our Website - npm run dev // stop ctr c
    // React Component must be one child. React fragment <> </>
    <>
      {/* Function and Component name must match */}
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default App;

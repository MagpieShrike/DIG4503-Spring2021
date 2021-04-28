import './App.css';
import AddBook from './components/AddBook';
import ReadBook from './components/ReadBook';
import RemoveBook from './components/RemoveBook';

function App() {
  return (
    <div className="App">
        <img src="https://images-na.ssl-images-amazon.com/images/I/A1nHB8t757L.jpg" alt="The Book of Jhereg" height="20%" width="20%" />
        <br /> <br />
        <AddBook />
        <ReadBook />
        <RemoveBook />
    </div>
  );
}

export default App;

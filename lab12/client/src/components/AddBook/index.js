import Axios from 'axios';

function AddBook() {

    async function putBook() {
        const response = await Axios.put("http://localhost:45030/books/0441006159", {
            "title": "The Book of Jhereg",
            "author": "Steven Brust",
            "description": "Follows the antics of the wise-cracking Vlad Taltos and his dragon-like companion through their first three adventures—Jhereg, Yendi, and Teckla."
        });

        console.log(response.data);
    }

    return (
        <div>
            <p> Add this book to your library. </p>
            <button onClick={() => putBook()}>Add Book</button>
        </div>
    );
}

export default AddBook;
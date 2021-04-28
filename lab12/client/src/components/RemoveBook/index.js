import Axios from 'axios';

function AddBook() {

    const ISBN = "0441006159";

    async function putBook() {
        const response = await Axios.delete("http://localhost:45030/books/" + ISBN, {  
        });

        console.log(response.data);
    }

    return (
        <div>
            <p> Remove this book from your library. </p>
            <button onClick={() => putBook()}>Remove Book</button>
        </div>
    );
}

export default AddBook;
import Axios from 'axios';

function ReadBook() {

    const ISBN = "0441006159";

    async function getBook() {
        const response = await Axios.get("http://localhost:45030/books/" + ISBN, {
            params: { title: "test1"}
        });

        console.log(response.data);
    }

    return (
        <div>
            <p> Read this book. </p>
            <button onClick={() => getBook()}>Read Book</button>
        </div>
    );
}

export default ReadBook;
import Axios from 'axios';

function CreatePart() {

    const value = 999;

    const putPart = () => {
        const response = await Axios.put("http://localhost:45030/parts/" + value, {
            title: "test",
            description: "words"
        });

        console.log(response.data);
    }

    return (
        <div>
            <p> Click button!</p>
            <button onClick={() => putPart()}>Click me!</button>
        </div>
    );
}

export default CreatePart;
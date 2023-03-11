import React, {useState} from 'react';
import {FullInput} from "./Components/FullInput";
import {Input} from "./Components/Input/Input";
import {Button} from "./Components/Input/Button";


function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    let [title, setTitle] = useState('')
    console.log(title)
    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
    }

    const callBackButtonHandler = () => {
      addMessage(title)
        setTitle('')
    }
    return (
        <div className="App">
            <div>
                <Input setTitle={setTitle} title={title}/>
                <Button name={'ADD'} callBack={callBackButtonHandler}/>
                {/*<FullInput addMessage={addMessage}/>*/}
                {/* <input type="text"/>
                <button>+++++++</button>*/}
            </div>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}


export default App;
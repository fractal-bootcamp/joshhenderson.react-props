import { useState } from "react"
//Create a new react app
//Set up the App.tsx file
//Create a new component called InputField
//Pass a prop to InputField for placeholder text
//Make InputField a controlled component
//Add a submit button and display the entered name
//Create a new component called NameDisplay to show the submitted name
//Add error handling for empty input
//Stop destructuring props in the function signature on InputField. Verify to yourself that this works exactly the same as the previous example.
//Instead, destructure props in the function BODY of InputField. Verify to yourself that this works exactly the same as the previous TWO examples.

type InputFieldProps = {
    placeholder: string
    setter: (value: string) => void
    value: string
}

function InputField({ placeholder, value, setter }: InputFieldProps) {

    return (
        <>
            <input placeholder={placeholder} onChange={(e) => { setter(e.target.value) }} />
        </>
    )
}

function NameDisplay({ name }: { name: string }) {
    return (
        <>
            {name}
        </>
    )
}

export default function App3() {
    const [name, setName] = useState('')
    const [submittedName, setSubmittedName] = useState("")

    function submitHandler(name: string) {
        if (name.trim() === '') {
            return
        }
        return setSubmittedName(name)
    }

    return (
        <>
            <NameDisplay name={submittedName} />
            <InputField placeholder="enter your name" value={name} setter={setName} />
            <button onClick={() => submitHandler(name)}>Submit</button>
        </>
    )
}
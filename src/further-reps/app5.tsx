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

import { useState } from "react"

type InputFieldProps = {
    placeholderText: string
    setter: (e: string) => void
    name: string
    error?: string
}

function InputField(props: InputFieldProps) {
    return (
        <>
            <input placeholder={props.placeholderText}
                value={props.name}
                onChange={(e) => { props.setter(e.target.value) }}
                style={{ borderColor: props.error ? 'red' : undefined }}
            />
            {props.error && <p style={{ color: "red" }}>{props.error}</p>}
        </>
    )
}

function Display({ name }: { name: string }) {
    return (
        <>
            {name}
        </>
    )

}

export default function App5() {
    const [name, setName] = useState("")
    const [submittedName, setSubmittedName] = useState("")
    const [error, setError] = useState("")

    function submissionHandler() {
        if (name.trim() === "") {
            setError('Name cannot be empty')
        } else {
            setSubmittedName(name)
            setError('')
        }
    }
    return (
        <>
            <InputField placeholderText="Unlock the code, the code Unlock" name={name} setter={setName} error={error} />
            <button onClick={submissionHandler}>The Code Submits to Me</button>
            <Display name={submittedName} />
        </>
    )
}
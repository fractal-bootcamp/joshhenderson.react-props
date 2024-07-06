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
    placeholder: string
    value: string
    onChange: React.Dispatch<React.SetStateAction<string>>
    error?: string

}
function InputField({ placeholder, value, onChange, error }: InputFieldProps) {
    return (
        <>
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={(e) => { onChange(e.target.value) }}
                style={{ borderColor: error ? "red" : undefined }}
            />
            {error && <p style={{ color: 'red' }}> {error} </p>}
        </>
    )
}

function NameDisplay({ name }: { name: string }) { //component props are always an object... function paraments needn't be
    return <p>App1: Hello, {name}!</p>
}

export default function App2() {

    const [name, setName] = useState("")
    const [submittedName, setSubmittedName] = useState("")
    const [error, setError] = useState("")

    function handleSubmit() {
        if (name.trim() === "") {
            setError("Name cannot be empty")
        } else {
            setSubmittedName(name)
            setError("")
        }

    }

    return (
        <>
            <InputField
                placeholder="Enter thy name"
                value={name}
                onChange={setName}
                error={error}
            />
            <button onClick={handleSubmit}>Submit</button>
            {submittedName && <NameDisplay name={submittedName} />}
        </>
    )
}
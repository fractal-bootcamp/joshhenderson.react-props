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
    setter: (e: string) => void
}

function InputField({ placeholder, setter }: InputFieldProps) {
    return (
        <input type="text" placeholder={placeholder} onChange={(e) => setter(e.target.value)} />
    )
}

function Display({ submittedName }: { submittedName: string }) {
    return (
        <>
            {submittedName}
        </>
    )
}

export default function App4() {
    const [name, setName] = useState("")
    const [submittedName, setSubmittedName] = useState("")

    function submitHandler() {
        setSubmittedName(name)
    }

    return (
        <>
            <Display submittedName={submittedName} />
            <InputField placeholder="enter where you fear" setter={setName} />
            <button onClick={submitHandler}>Submit</button>
        </>
    )
}
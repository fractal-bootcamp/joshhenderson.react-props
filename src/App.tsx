import { useState } from 'react'

import './App.css'

type InputFieldProps = {
  placeholder: string;
  onchange: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  error?: string;
}

function InputField({ placeholder, value, onchange, error }: InputFieldProps) {

  return (
    <>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onchange(e.target.value)}
        style={{ borderColor: error ? 'red' : undefined }}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  )
}
type NameDisplayProps = {
  name: string;
}

function NameDisplay({ name }: NameDisplayProps) {
  return <p>App2: Hello, {name}!</p>
}


function App() {
  const [name, setName] = useState("")
  const [submittedName, setSubmittedName] = useState("")
  const [error, setError] = useState("")

  function handleSubmit() {
    if (name.trim() === '') { //prevents user error from interfering with code logic
      setError('Name cannot be empty')
    } else {
      setSubmittedName(name)
      setError('')
    }

  }

  return (
    <>
      <h1>Props and Controlled Components</h1>
      <InputField
        placeholder="Enter your name"
        value={name}
        onchange={setName}
        error={error}
      />
      <button onClick={handleSubmit}>Submit</button>
      {submittedName && <NameDisplay name={submittedName} />}
    </>
  )
}

export default App

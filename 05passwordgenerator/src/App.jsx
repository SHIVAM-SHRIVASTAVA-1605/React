import { useState, useCallback , useEffect, useRef} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false);
  const [characters, setCharacters] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGen = useCallback(() => {
    let pass = ""
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
    if(number) str+= '1234567890'
    if(characters) str+= '!@#$%^&*()'

    for(let i = 0; i<=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, number, characters. setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGen()
  }, [length, number, characters, passwordGen])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md 
      rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white txt-center my-3'> Password Generator</h1>
        <div className='flex shadow 
        rounded-lg overflow-hidden mb-4'>
          <input 
          type="text" 
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref = {passwordRef}
          />
          <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white 
          px- py-0.5 shrink-0'>
            copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='curser-pointer'
            onChange={(e) => {
              setLength(e.target.value)
            }}
            />
            <label>Lengnameth:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type='checkbox'
              defaultChecked={number}
              id="numberInput"
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type='checkbox'
              defaultChecked={characters}
              id="numberInput"
              onChange={() => {
                setCharacters((prev) => !prev);
              }}
            />
            <label htmlFor='characterInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

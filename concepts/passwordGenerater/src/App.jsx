import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'
import { use } from 'react';

function App() {
  const [length, setLength] = useState(0);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isSpecialCharactersAllowed, setIsSpecialCharactersAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%&*';
    
    let str = characters;
    
    if (isNumberAllowed) {
      str += numbers;
    }
    
    if (isSpecialCharactersAllowed) {
      str += specialCharacters;
    }
    
    let generatedPassword = '';
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      generatedPassword += str[randomIndex];
    }
    
    setPassword(generatedPassword);
  }, [length, isNumberAllowed, isSpecialCharactersAllowed, setPassword]);

  const copyToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    generatePassword();
  }, [length, isNumberAllowed, isSpecialCharactersAllowed, generatePassword]);

  return (
    <>
      <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">
        
        <div className="bg-slate-800 p-6 rounded-2xl shadow-lg w-[350px]">
          
          <h1 className="text-2xl font-bold text-center mb-4">
            Password Generator 🔐
          </h1>

          {/* Password + Copy */}
          <div className="flex mb-4">
            <input
              ref={passwordRef}
              type="text"
              value={password}
              readOnly
              className="w-full p-2 rounded-l-lg text-black outline-none bg-white"
            />
            <button
              onClick={copyToClipboard}
              className="bg-blue-500 px-3 rounded-r-lg hover:bg-blue-600"
            >
              Copy
            </button>
          </div>

          {/* Length Slider */}
          <div className="mb-4">
            <label className="block mb-1">
              Length: {length}
            </label>
            <input
              type="range"
              min={4}
              max={20}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full cursor-pointer"
            />
          </div>

          {/* Checkboxes */}
          <div className="flex justify-between mb-4">
            
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={isNumberAllowed}
                onChange={() => setIsNumberAllowed((prev) => !prev)}
              />
              Numbers
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={isSpecialCharactersAllowed}
                onChange={() => setIsSpecialCharactersAllowed((prev) => !prev)}
              />
              Special
            </label>

          </div>

          {/* Generate Button */}
          <button
            onClick={generatePassword}
            className="w-full bg-green-500 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Generate Password
          </button>

        </div>
      </div>
    </>
  )
}

export default App

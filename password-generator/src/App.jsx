import { useCallback, useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(15);
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState("");
  // useRef Hook to store the password
  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbers) str += "0123456789";
    if (characters) str += "!@#$%^&*()_+[]{};':,.<>?";
    for (let i = 0; i < length; i++) {
      password += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPassword(password);
  }, [length, numbers, characters, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numbers, characters, passwordGenerator]);
  const copyPasswordToClipboard = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select();
      passwordRef.current.setSelectionRange(0, 101);
      window.navigator.clipboard.writeText(password);
    }
  }, [password]);
  return (
    <div className="container">
      <h1 className="header">Password Generator</h1>
      <div className="password-box">
        <input
          type="text"
          value={password}
          className="custom-input"
          placeholder="Your password will appear here"
          readOnly
          ref={passwordRef}
        />
        <button
          className="copy-button"
          onClick={() => {
            copyPasswordToClipboard();
          }}
        >
          Copy
        </button>
      </div>

      <div className="controls">
        <div className="control-group">
          <input
            type="range"
            min={15}
            max={100}
            value={length}
            onChange={(e) => setLength(Math.max(15, Number(e.target.value)))}
          />
          <label>Length: {length}</label>
        </div>

        <div className="control-group">
          <input
            type="checkbox"
            checked={numbers}
            onChange={(e) => setNumbers((prev) => !prev)}
          />
          <label>Numbers</label>
        </div>

        <div className="control-group">
          <input
            type="checkbox"
            checked={characters}
            onChange={(e) => setCharacters((prev) => !prev)}
          />
          <label>Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;

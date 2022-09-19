import './App.css'
import { useEffect, useState } from 'react'
import { MnemonicLength } from './components/MnemonicLength'
import { WordSelector } from './components/WordSelector'
let loadedWasm = {} as any;

function App() {
  
  const [wasm, setWasm] = useState<typeof import('bip39-wasm')>()
  const [val, setValue] = useState('')
  
  useEffect(() => {
    ;(async () => {
      try {
        const wasm = await import('bip39-wasm')
        setWasm(wasm)
        loadedWasm = wasm;
      } catch (e) {
        console.error(e)
      }
    })()
  }, [])

  return (
    <div>
      <h1>rust monorepo wasm demo</h1>
      <MnemonicLength/>
      <WordSelector/>

      <label htmlFor="name">Your name?</label>
      <input
        value={val}
        onChange={event => setValue(event.target.value)}
        id="name"
      />
      <h2>Greeting from wasm: {!wasm ? 'Loading...' : wasm.greet(val)}</h2>
    </div>
  )
}

export {App, loadedWasm}

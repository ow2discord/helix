import { useState } from 'react'
import './App.css'
import ReactCodeMirror from '@uiw/react-codemirror'
import { yaml } from '@codemirror/lang-yaml'
import { catppuccinMocha } from '@catppuccin/codemirror'

function App() {
	const [value, setValue] = useState(`prefix: "!"

# role id: level
levels:
  "172949857164722176": 100 # Example admin
  "172950000412655616": 50 # Example mod

plugins:
  mod_actions:
    config:
      kick_message: 'You have been kicked'
      can_kick: false
    overrides:
      - level: '>=50'
        config:
          can_kick: true
      - level: '>=100'
        config:
          kick_message: 'You have been kicked by an admin'`)

	return (
		<div className="pageContent">
			<h1 className="pageTitle">Modify Hindenburg Config</h1>
			<ReactCodeMirror value={value} height="80vh" theme={catppuccinMocha} extensions={[yaml()]} />
		</div>
	)
}

export default App

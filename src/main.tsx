import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Arial'
}
`

ReactDOM.createRoot(document.getElementById('root')!).render( 
  <>
    <Global />
    <App />
  </>
)

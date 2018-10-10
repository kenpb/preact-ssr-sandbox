import { h, render } from 'preact'
import App from './client/app'

const root = document.getElementById('root')
render(<App />, root, root.lastChild as Element)

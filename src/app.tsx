import { h, render } from 'preact'

const Sample = () => (
  <h1>Hello Preact + Parcel + TS</h1>
)

const root = document.getElementById('root')
render(<Sample />, root, root.lastChild as Element)

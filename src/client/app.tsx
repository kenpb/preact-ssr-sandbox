import { h, Component } from 'preact'

interface State {
  count: number
}

const initialState = {
  count: 0
}

export default class App extends Component<any, State> {
  constructor() {
    super()
    this.state = initialState
  }

  private handleClick = () => {
    alert('You clicked me for some reason!')
  }

  private decrement = () => this.setState({ count: this.state.count - 1 })
  private increment = () => this.setState({ count: this.state.count + 1 })

  render(_, { count }: State) {
    return (
      <div>
        <h3 onClick={this.handleClick}>Preact + Parcel + SSR Test!</h3>
        <span>Look! a counter => {count}</span>
        <div>
          <button onClick={this.decrement}>decrement</button>
          <button onClick={this.increment}>increment</button>
        </div>
      </div>
    )
  }
}

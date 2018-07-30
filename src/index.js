import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      votes: [0, 0, 0, 0, 0, 0]
    }
  }

  arvoAnekdootti = () => {
      let random = Math.floor(Math.random() * (5 - 0 + 1)) + 0
    return () => {
        this.setState({ 
                selected: random
          })
  }
}

aanesta = () => {
    const kopio = [...this.state.votes]
    console.log(kopio)
    kopio[this.state.selected] = kopio[this.state.selected] + 1
    return () => {
        this.setState({
            votes: kopio
        })
    }
}

  render() {
      console.log(Math.max(...this.state.votes));
    return (
      <div>
        <div>{this.props.anecdotes[this.state.selected]}</div>
        <div>{this.state.votes[this.state.selected]}</div>
        <button onClick={this.arvoAnekdootti()}> Next Anecdote </button>
        <button onClick={this.aanesta()}> Vote </button>
        <br />
        <h1> Anecdote with most votes: </h1>
        <div>{this.props.anecdotes[this.state.votes.indexOf(Math.max(...this.state.votes))]}</div>
        <div>has {this.state.votes[this.state.votes.indexOf(Math.max(...this.state.votes))]} votes </div>
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
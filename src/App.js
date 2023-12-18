import { Component } from 'react';
import './App.css';

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      text: '+++',
      position: ''
    }
  }

  nextYear = () => {
    this.setState(state => ({
      years: state.years + 1
    }))
  }

  commitInputChanges = (e, color) => {
    console.log(color);
    this.setState({
      position: e.target.value
    })
  }


  render() {
    const {name, surname, link} = this.props;
    const {position, years, text} = this.state;

    return(
      <div>
        <button onClick={this.nextYear} >{text}</button>
        <h1>My name is {name}, surname - {surname}, 
            age - {years}, 
            position - {position}</h1>
        <a href={link}>My profile</a>
        <form>
          <span>Enter job title</span>
          <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />
        </form>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <WhoAmI name='Alex' surname='Syniak' link='facebook.com' />
      <WhoAmI name='Tania' surname='Bohdanova' link='instagram.com' />
    </div>
  );
}

export default App;

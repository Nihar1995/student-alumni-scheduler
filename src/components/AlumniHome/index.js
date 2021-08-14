import {Component} from 'react'

import './index.css'

class AlumniHome extends Component {
  state = {
    name: '',
    date: '',
    slot: '',
    decision: '',
  }

  componentDidMount() {
    let name = ''
    let selectedDate = ''
    let selectedSlot = ''
    if (localStorage && localStorage.getItem('name')) {
      name = JSON.parse(localStorage.getItem('name'))
    }
    if (localStorage && localStorage.getItem('date')) {
      selectedDate = JSON.parse(localStorage.getItem('date'))
    }
    if (localStorage && localStorage.getItem('slot')) {
      selectedSlot = JSON.parse(localStorage.getItem('slot'))
    }
    this.setState({name, date: selectedDate, slot: selectedSlot})
  }

  onChangeAlumniDecision = event => {
    this.setState({decision: event.target.value})
  }

  render() {
    const {name, date, slot} = this.state
    return (
      <div className="alumni-route-container">
        <h1 className="heading">Requested Slot</h1>
        <table className="appointment-table">
          <tr>
            <th>Student Name</th>
            <th>Date</th>
            <th>Slot</th>
          </tr>
          <tr>
            <td>{name}</td>
            <td>{date}</td>
            <td>{slot}</td>
          </tr>
        </table>
        <select
          className="alumni-response"
          onChange={this.onChangeAlumniDecision}
        >
          <option className="option" value="select">
            Select Appointment
          </option>
          <option className="option" value="reject">
            Reject Appointment
          </option>
        </select>
      </div>
    )
  }
}

export default AlumniHome

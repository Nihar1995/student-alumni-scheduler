import {Component} from 'react'
import {format} from 'date-fns'

import './index.css'

class StudentHome extends Component {
  state = {
    isDateSelected: false,
    dateInput: '',
    selectedSlot: '',
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {dateInput, selectedSlot} = this.state

    const formattedDate = dateInput
      ? format(new Date(dateInput), 'dd MMMM yyyy, EEEE')
      : ''

    this.setState({dateInput: formattedDate})

    const {history} = this.props
    history.replace('/alumni')
    localStorage.setItem('date', JSON.stringify(dateInput))
    localStorage.setItem('slot', JSON.stringify(selectedSlot))
  }

  onChangeDateInput = event => {
    this.setState({dateInput: event.target.value, isDateSelected: true})
  }

  onClickChangeSlot = value => {
    this.setState({selectedSlot: value})
  }

  renderSlots = () => (
    <div className="slots-container">
      <button type="button" onClick={this.onClickChangeSlot('1pm-2pm')}>
        1pm - 2pm
      </button>
      <button type="button" onClick={this.onClickChangeSlot('4pm-5pm')}>
        4pm - 5pm
      </button>
      <button type="button" onClick={this.onClickChangeSlot('6pm-7pm')}>
        6pm - 7pm
      </button>
    </div>
  )

  render() {
    const {dateInput, isDateSelected} = this.state

    return (
      <div className="student-route-container">
        <h1 className="heading">
          Select the date and slot according to your choice
        </h1>
        <div className="appointments-container">
          <form className="form" onSubmit={this.onAddAppointment}>
            <h1 className="add-appointment-heading">Add Appointment</h1>
            <label htmlFor="date" className="label">
              DATE
            </label>
            <input
              type="date"
              id="date"
              value={dateInput}
              onChange={this.onChangeDateInput}
              className="input"
            />
            {isDateSelected && this.renderSlots()}
            <button type="submit" className="add-button">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default StudentHome

import {Link} from 'react-router-dom'
import './index.css'

const Home = () => (
  <div className="slot-booking-home-container">
    <h1 className="heading">Student-Alumni Scheduling</h1>
    <p className="description">
      If you are a Student, book your slot for Alumni
    </p>
    <p className="description">
      If you are an Alumni, select or reject requested slot according to your
      availability
    </p>
    <Link to="/login">
      <button className="move-to-button" type="button">
        Head to Login Page
      </button>
    </Link>
  </div>
)

export default Home

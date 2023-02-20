// Write your code here
import './index.css'

function ActiveEventRegistraionDetails(props) {
  const {status} = props
  console.log(status)

  const yetToRegister = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt=" yet to register"
        className="css-status-image-itself"
      />
      <p>A live performance brings so much to your relationship with dance</p>
      <button type="button" className="css-registerhere-button-itself">
        Register Here
      </button>
    </div>
  )

  const registered = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="css-status-image-itself"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  const registrationsClosed = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="css-status-image-itself"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen</p>
    </div>
  )

  const clickOnEvent = () => (
    <div>
      <p>Click on an event, to view its registration details</p>
    </div>
  )

  const returnStatusFunction = () => {
    switch (status) {
      case 'YET_TO_REGISTER':
        return yetToRegister()
      case 'REGISTERED':
        return registered()
      case 'REGISTRATIONS_CLOSED':
        return registrationsClosed()
      default:
        return clickOnEvent()
    }
  }

  return <>{returnStatusFunction()}</>
}

export default ActiveEventRegistraionDetails

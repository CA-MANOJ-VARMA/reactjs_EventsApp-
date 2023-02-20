// Write your code here
import {Component} from 'react'
import './index.css'

class EventItem extends Component {
  eachEventFunction = () => {
    const {eachEvent, findingStatus} = this.props

    const clickEachEvent = id => {
      findingStatus(id)
    }
    return (
      <div className="css-eachItem-container">
        <button
          type="button"
          className="css-button-itself"
          onClick={() => clickEachEvent(eachEvent.id)}
        >
          <img
            src={eachEvent.imageUrl}
            alt="event"
            className="css-image-itself"
          />
          <p>{eachEvent.name}</p>
          <p>{eachEvent.location}</p>
        </button>
      </div>
    )
  }

  render() {
    console.log('Hello')
    return <>{this.eachEventFunction()}</>
  }
}

export default EventItem

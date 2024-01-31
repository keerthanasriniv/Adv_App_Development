// Write your React code here.
// Write your React code here.
import {Component} from 'react'
// import './index.css'
import './Feedback.css';
import Navbar from '../NavComponents/Navbar'
class Feedback extends Component {
  state = {
    isFeedBack: true,
  }

  onChangeResponse = () => {
    this.setState({isFeedBack: false})
  }

  originPage = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div>
      <div className='feednav'>
      <Navbar  style={{ marginTop: '-5000px' }}/>
      </div>
      <div className="emojis-container">
    
        <h1 className='feedh1'>
          How satisfied are you with our
          <br />
          customer support performance
        </h1>
        <ul className="emoji-container">
          {emojis.map(emoji => (
            <li key={emoji.id} className="list-container">
              <button
                type="button"
                onClick={this.onChangeResponse}
                className="button"
              >
                <img src={emoji.imageUrl} alt={emoji.name} className="img" />
                <p>{emoji.name}</p>
              </button>
            </li>
          ))}
        </ul>
        </div>
        </div>
    )
  }

  feedBackPage = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="tq-container">
      <Navbar/>
        <img src={loveEmojiUrl} alt="love emoji" className='love'/>
        <h2 className='fh1'>Thank You
        <br/>
        we will use your feedback to improve our customer support
        performance.</h2>
      </div>
    )
  }

  render() {
    const {isFeedBack} = this.state
    return (
      <div className="bg-container">
        <div className="sub-container">
          {isFeedBack ? this.originPage() : this.feedBackPage()}
        </div>
      </div>
    )
  }
}
export default Feedback
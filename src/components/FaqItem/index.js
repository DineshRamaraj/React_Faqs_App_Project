import {Component} from 'react'

import './index.css'

const PLUS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const MINUS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {
    isActive: false,
  }

  renderAnswer = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    const {isActive} = this.state

    if (isActive) {
      return (
        <div>
          <hr className="horizontal-line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onToggleIsActive = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  renderActiveImage = () => {
    const {isActive} = this.state
    const image = isActive ? MINUS_IMAGE : PLUS_IMAGE
    const altText = isActive ? 'minus' : 'plus'

    return (
      <button className="button" type="button" onClick={this.onToggleIsActive}>
        <img className="image" src={image} alt={altText} />
      </button>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails

    return (
      <li className="faq-item">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          {this.renderActiveImage()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem

// My Code

// // Write your code here.
// import './index.css'

// const FaqItem = props => {
//   const {eachFaq, onClickShowAnswer} = props
//   const {id, questionText, answerText, isPlus} = eachFaq

//   const faqsImage = isPlus
//     ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
//     : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

//   const faqsAlt = isPlus ? 'minus' : 'plus'

//   const showAnswer = () => {
//     onClickShowAnswer(id)
//   }

//   return (
//     <li className="each-faq-item">
//       <div className="each-faq-question-container">
//         <h1 className="each-faq-heading">{questionText}</h1>
//         <button type="button" className="button" onClick={showAnswer}>
//           <img src={faqsImage} alt={faqsAlt} className="each-faq-Image" />
//         </button>
//       </div>
//       {isPlus && (
//         <div className="each-faq-answer-container">
//           <hr className="hr-line" />
//           <p className="answer-item">{answerText}</p>
//         </div>
//       )}
//     </li>
//   )
// }

// export default FaqItem

import FaqItem from '../FaqItem'

import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="app-container">
      <div className="faqs-container">
        <h1 className="heading">FAQs</h1>
        <ul className="faqs-list">
          {faqsList.map(eachFaq => (
            <FaqItem key={eachFaq.id} faqDetails={eachFaq} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs

// // Write your code here.
// import {Component} from 'react'
// import FaqItem from '../FaqItem'
// import './index.css'

// class Faqs extends Component {
//   state = {
//     showAnswerList: [],
//   }

//   componentDidMount() {
//     const {faqsList} = this.props
//     const listItems = faqsList.map(eachItem => ({...eachItem, isPlus: false}))
//     // console.log(listItems)

//     this.setState({showAnswerList: [...listItems]})
//     console.log('Hello')
//   }

//   onClickShowAnswer = eachId => {
//     this.setState(prevState => ({
//       showAnswerList: prevState.showAnswerList.map(eachItem => {
//         if (eachId === eachItem.id) {
//           return {...eachItem, isPlus: !eachItem.isPlus}
//         }
//         return eachItem
//       }),
//     }))

//     console.log('button click')
//   }

//   render() {
//     const {showAnswerList} = this.state
//     return (
//       <div className="app-container">
//         <div className="faqs-container">
//           <h1 className="heading">FAQs</h1>
//           <ul className="faqs-list-container">
//             {showAnswerList.map(eachFaq => (
//               <FaqItem
//                 key={eachFaq.id}
//                 eachFaq={eachFaq}
//                 onClickShowAnswer={this.onClickShowAnswer}
//               />
//             ))}
//           </ul>
//         </div>
//       </div>
//     )
//   }
// }
// export default Faqs

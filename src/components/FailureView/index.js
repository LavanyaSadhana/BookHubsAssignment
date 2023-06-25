import './index.css'

const FailureView = props => {
  const {onClickTryAgain} = props

  const onClickTry = () => {
    onClickTryAgain()
  }
  return (
    <div className="failure-container">
      <img
        src="https://res.cloudinary.com/dvlheapjz/image/upload/v1687688129/failureViewImage_ppwjji.png"
        className="book-item-failure-view"
        alt="failure view"
      />
      <p className="failure-text">Something went wrong.please try again</p>
      <button type="button" className="failure-button" onClick={onClickTry}>
        Try Again
      </button>
    </div>
  )
}
export default FailureView

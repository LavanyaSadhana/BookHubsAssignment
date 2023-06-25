import {Link, withRouter} from 'react-router-dom'

import './index.css'

const NotFound = props => {
  const onClickBackToHome = () => {
    const {history} = props
    history.replace('/')
  }
  return (
    <div className="not-found-container">
      <img
        src="https://res.cloudinary.com/dvlheapjz/image/upload/v1687682032/pageNotFoundImage_uzs1dv.png"
        className="not-found-pic"
        alt="not found"
      />
      <h1 className="not-found-heading">Page Not Found</h1>
      <p className="not-found-text">
        we are sorry, the page you requested could not be found,please go back
        to the homepage
      </p>
      <Link to="/">
        <button
          type="button"
          className="not-found-button"
          onClick={onClickBackToHome}
        >
          Go Back to Home
        </button>
      </Link>
    </div>
  )
}
export default withRouter(NotFound)

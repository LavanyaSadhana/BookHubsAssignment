import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {FiMenu} from 'react-icons/fi'
import {RiCloseCircleFill} from 'react-icons/ri'
import './index.css'

class Header extends Component {
  state = {displayNavbar: false}

  onClickMenu = () => {
    this.setState(prevState => ({displayNavbar: !prevState.displayNavbar}))
  }

  onClickCross = () => {
    this.setState({displayNavbar: false})
  }

  onClickLogout = () => {
    const {history} = this.props
    history.replace('/')
    Cookies.remove('jwt_token')
  }

  render() {
    const {home, shelves, favorite} = this.props
    const activeHome = home ? 'active-tab' : ''
    const activeShelves = shelves ? 'active-tab' : ''
    const activeFavorite = favorite ? 'active-tab' : ''
    const {displayNavbar} = this.state
    return (
      <div>
        <div className="header-container">
          <div className="header-website-logo">
            <Link className="link" to="/">
              <>
                <img
                  src="https://res.cloudinary.com/dvlheapjz/image/upload/v1687689738/Logo_skg9bp.png"
                  className="header-website-logo"
                  alt="website logo"
                />
              </>
            </Link>
          </div>
          <ul className="tabs-container">
            <Link className="link" to="/">
              <li className="list-item">Home</li>
            </Link>
            <Link className="link" to="/">
              <li className="list-item">BookShelves</li>
            </Link>
            <Link className="link" to="/">
              <li className="list-item">MyFavorites</li>
            </Link>
            <li className="list-item">
              <button
                type="button"
                onClick={this.onClickLogout}
                className="logout-btn"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
        <div className="header-navbar-responsive-container">
          <div className="header-nav-container">
            <Link to="/">
              <img
                src="https://res.cloudinary.com/dvlheapjz/image/upload/v1687689738/Logo_skg9bp.png"
                className="header-nav-bar-website-logo"
                alt="website logo"
              />
            </Link>
            <button
              type="button"
              onClick={this.onClickMenu}
              className="cross-icon-btn"
            >
              <FiMenu className="menu-icon" />
            </button>
          </div>
          {displayNavbar && (
            <>
              <div className="header-navbar-tabs-container">
                <Link className="link" to="/">
                  <h1 className={`home-tab ${activeHome}`}>Home</h1>
                </Link>
                <Link className="link" to="/shelf">
                  <h1 className={`bookshelves-tab ${activeShelves}`}>
                    BookShelves
                  </h1>
                </Link>
                <Link className="link" to="/favorites">
                  <h1 className={`bookshelves-tab ${activeFavorite}`}>
                    MyFavorites
                  </h1>
                </Link>
              </div>
              <div className="header-navbar-tabs-container">
                <button
                  onClick={this.onClickLogout}
                  className="logout-btn"
                  type="button"
                >
                  Logout
                </button>
                <button
                  onClick={this.onClickCross}
                  className="cross-icon-btn"
                  type="button"
                >
                  <RiCloseCircleFill className="cross-icon" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    )
  }
}
export default withRouter(Header)

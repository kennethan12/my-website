import React, { Component } from 'react';
import NavbarItems from './NavbarItems';
import { Link } from 'react-scroll';

class Navbar extends Component {

  state = {
    clicked: false
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    return (
      <nav className="navbar-items">
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'} style={{ marginBottom: 0 }}>
          {NavbarItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url} smooth duration={700} onClick={this.handleClick}>
                  {item.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }
}

export default Navbar;
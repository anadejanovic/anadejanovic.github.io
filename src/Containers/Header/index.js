import React, { Component } from 'react';
import { SlideToggle } from 'react-slide-toggle';
import './Header.css';
import HeaderLogo from '../../assets/header.jpg';
import MenuIcon from '../../assets/menu-icon.png';
import CloseIcon from '../../assets/close-icon.png';

import { Link } from 'react-router-dom';

const HeaderItem = (prop) => {
  return <div className='header-item py-2'>{prop.name}</div>;
};

class Header extends Component {
  state = {
    src: MenuIcon,
  };

  menuSelect = () => {
    if (this.state.src === MenuIcon) this.setState({ src: CloseIcon });
    else this.setState({ src: MenuIcon });
  };

  render() {
    return (
      <div className='header d-md-none'>
        <SlideToggle
          duration={800}
          collapsed
          irreversible
          render={({ onToggle, setCollapsibleElement }) => (
            <div class='text-center'>
              <img
                className='menu pull-left'
                src={this.state.src}
                onClick={(event) => {
                  onToggle();
                  this.menuSelect();
                }}
                height='40px'
                alt='menu'
              />
              <img
                className='header-logo'
                src={HeaderLogo}
                height='40px'
                alt='logo'
              />
              <div className='collapsible-content' ref={setCollapsibleElement}>
                <div className='collapsible-content-inner text-center'>
                  <Link exact to='/'>
                    <HeaderItem name='artwork' />
                  </Link>
                  <Link exact to='/about'>
                    <HeaderItem name='about' />
                  </Link>
                  <Link exact to='/contact'>
                    <HeaderItem name='contact' />
                  </Link>
                </div>
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}

export default Header;

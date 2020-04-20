import React, { Component } from 'react';
import './Sidebar.css';
import logo from '../../assets/logo.jpg';
import { NavLink } from 'react-router-dom';

const SidebarItem = (prop) => {
  return <div className='sidebar-item h2 my-2'>{prop.name}</div>;
};

const Logo = () => {
  return (
    <div className='logo'>
      <img src={logo} height='290px' width='250px' alt='logo' />
    </div>
  );
};

class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar d-flex flex-column ml-3 text-center'>
        <Logo />
        <NavLink activeClassName="active-sidebar-item" exact to='/'>
          <SidebarItem name='artwork' />
        </NavLink>
        <NavLink activeClassName="active-sidebar-item" to='/about'>
          <SidebarItem name='about' />
        </NavLink>
        <NavLink activeClassName="active-sidebar-item" to='/contact'>
          <SidebarItem name='contact' />
        </NavLink>

        <div className='copyright mb-4 text-center'>
          All images &#169; Ana Dejanović
        </div>
      </div>
    );
  }
}

export default Sidebar;

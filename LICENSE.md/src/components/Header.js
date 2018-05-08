import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    const { location } = this.props;
    const indexClass = location.pathname === '/' ? 'active' : '';
    const clientClass = location.pathname === '/client' ? 'active' : '';
    return (
      <div className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <a href="../" className="navbar-brand">React Sample</a>
            <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="navbar-collapse collapse" id="navbar-main">
            <ul className="nav navbar-nav">
              <li className={ indexClass }><Link to='/'>Home</Link></li>
              <li className={ clientClass }><Link to='/client'>Client</Link></li>
            </ul>
          </div>
        </div>
      </div>      
    )
  }
}

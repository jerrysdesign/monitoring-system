import React from 'react'; // eslint-disable-line no-unused-vars

class Navbar {

  render() {
    return (
      <div className="navbar-top" role="navigation">
        <div className="row">
          <a className="navbar-brand" href="/">
            <img src={require('./owl-brand.png')} width="334" height="72" alt="OWL Monitioering System" />
          </a>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="javascript">个人信息维护</a></li>
            <li><a href="javascript">通讯录</a></li>
            <li><a href="javascript">用户组管理</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;

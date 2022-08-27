import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
const Header = ({count}) => {
  return (
    <div className="navbar navbar-light bg-dark ">
      <a href="#" className="navbar-brand text-white  mx-auto ">
        <span className="display-3">
          <img src="cook.png" alt="" width="150px" />
          <Link to="/" style={{color: "white", textDecoration: "none"}}>
            RESTAURANT
          </Link>
        </span>
      </a>
      <button className="btn btn-primary ">
        <Link to="/orders" style={{color: "white", textDecoration: "none"}}>
          Orders
        </Link>
        <span className="badge bg-secondary">{count}</span>
      </button>
    </div>
  );
};
const mapStateToProps = (state) => ({
  count: state.orderreducer.length,
});
export default connect(mapStateToProps)(Header);

import React from "react";
import { Outlet } from "react-router-dom";

class ShopPage extends React.Component {
  render() {
    return (
      <div className="shop-page">
        <Outlet />
      </div>
    );
  }
}

export default ShopPage;

import React from "react";
import { Outlet } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selector";

import WithSpinner from "../../components/with-spinner/with-spinner.comp";

const OutletWithSpinner = WithSpinner(Outlet);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render(props) {
    const { isCollectionLoaded } = this.props;
    return (
      <div className="shop-page">
        <OutletWithSpinner isLoading={!isCollectionLoaded} {...props} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);

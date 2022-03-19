import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selector";

import WithSpinner from "../../components/with-spinner/with-spinner.comp";
import CollectionsOverviewPage from "./collections-overview.comp";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverviewPage);

export default CollectionsOverviewContainer;

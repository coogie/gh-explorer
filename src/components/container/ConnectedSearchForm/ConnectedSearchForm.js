import { connect } from "react-redux";
import actions from "redux/actions/searchForm";
import { SearchForm } from "components/presentational/SearchForm";

const mapStateToProps = (state, ownProps) => {
  return {
    ...state.searchForm
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: event => dispatch(actions.changeSearchInput(event.target.value)),
    onSubmit: input => dispatch(actions.submitSearch(input))
  };
};

export const ConnectedSearchForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);

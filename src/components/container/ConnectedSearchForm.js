import { connect } from "react-redux";
import { changeSearchInput, submitSearch } from "../../redux/actions";
import { SearchForm } from "../presentational/SearchForm";

const mapStateToProps = (state, ownProps) => {
  return {
    ...state.searchForm
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: event => dispatch(changeSearchInput(event.target.value)),
    onSubmit: input => dispatch(submitSearch(input))
  };
};

export const ConnectedSearchForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);

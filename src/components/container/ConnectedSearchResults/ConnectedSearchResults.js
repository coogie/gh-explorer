import { connect } from "react-redux";
import { SearchResults } from "components/presentational/SearchResults";

const mapStateToProps = state => {
  return {
    isLoading: state.searchForm.isLoading,
    results: state.searchResults
  };
};

export const ConnectedSearchResults = connect(mapStateToProps)(SearchResults);

import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    type: "all",
  };

  handeKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.search);
    }
  };
  handleFilter = (event) => {
    this.setState( () => ({ type: event.target.dataset.type }), () => {
        this.props.searchMovies(this.state.search);
    });
};

  render() {
    return (
      <div className="row">
        <div className="input-field">
          <input
            placeholder="search"
            type="search"
            className="validate"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handeKey}
          />
          <button
            className="btn search-btn"
            onClick={() => this.props.searchMovies(this.state.search)}
          >
            Search
          </button>
        </div>
        <div>
          <p>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                data-type="all"
                onChange={this.handleFilter}
                checked={this.setState.type === 'all'}
              />
              <span>All</span>
            </label>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                data-type="movie"
                onChange={this.handleFilter}
                checked={this.setState.type === 'movie'}
              />
              <span>Movies Only</span>
            </label>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                data-type="series"
                onChange={this.handleFilter}
                checked={this.setState.type === 'series'}
              />
              <span>Series Only</span>
            </label>
          </p>
        </div>
      </div>
    );
  }
}

export { Search };

import React from 'react';

export default class FormRss extends React.Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="link" className="ml-3">Enter the link:</label>
          <div className="col-4 mb-3">
            <input type="text" name="addLink" id="link" className="form-control" placeholder="https://example.com" />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-info btn-lg " disabled>
              add link
            </button>
          </div>
        </div>
      </form>
    )
  }
}
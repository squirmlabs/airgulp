import React from "react";

export const Typography = () => {
  return (
    <div className="container-fluid">
      <div className="row row-eq-height my-3">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <i className="icon icon-text-width"></i>
              <h6>Headlines</h6>
            </div>
            <div className="card-body p-5">
              <h1>h1. Bootstrap heading</h1>
              <h2>h2. Bootstrap heading</h2>
              <h3>h3. Bootstrap heading</h3>
              <h4>h4. Bootstrap heading</h4>
              <h5>h5. Bootstrap heading</h5>
              <h6>h6. Bootstrap heading</h6>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <i className="icon icon-text-width"></i>
              <h6>Text Emphasis</h6>
            </div>
            <div className="card-body p-5">
              <p className="lead">Lead to emphasize importance</p>
              <p className="text-green">Text green to emphasize success</p>
              <p className="text-aqua">Text aqua to emphasize info</p>
              <p className="text-light-blue">
                Text light blue to emphasize info (2)
              </p>
              <p className="text-red">Text red to emphasize danger</p>
              <p className="text-yellow">Text yellow to emphasize warning</p>
              <p className="text-muted">Text muted to emphasize general</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";

export const Forms = () => {
  return (
    <div className="page has-sidebar-left">
      <header className="blue accent-3 relative">
        <div className="container-fluid text-white">
          <div className="row p-t-b-10 ">
            <div className="col">
              <h4>
                <i className="icon-package"></i>
                Form Elements
              </h4>
            </div>
          </div>
        </div>
      </header>
      <div className="animatedParent animateOnce">
        <div className="container-fluid my-3">
          <div className="row">
            <div className="col-md-7">
              <div className="card">
                <div className="card-body b-b">
                  <h4>Material Inputs</h4>
                  <form className="form-material">
                    <div className="body">
                      <h6>Basic Examples</h6>
                      <div className="row clearfix">
                        <div className="col-sm-12">
                          <div className="form-group">
                            <div className="form-line">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Username"
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="form-line">
                              <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <h6>Different Widths</h6>
                      <div className="row clearfix">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <div className="form-line">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="col-sm-6"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <div className="form-line">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="col-sm-6"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row clearfix">
                        <div className="col-sm-4">
                          <div className="form-group">
                            <div className="form-line">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="col-sm-4"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="form-group">
                            <div className="form-line">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="col-sm-4"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="form-group">
                            <div className="form-line">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="col-sm-4"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row clearfix">
                        <div className="col-sm-3">
                          <div className="form-group">
                            <div className="form-line">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="col-sm-3"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="form-group">
                            <div className="form-line">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="col-sm-3"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="form-group">
                            <div className="form-line">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="col-sm-3"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="form-group">
                            <div className="form-line">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="col-sm-3"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <h6>Different Sizes</h6>
                      <div className="row clearfix">
                        <div className="col-sm-12">
                          <div className="form-group form-group-lg">
                            <div className="form-line">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Large Input"
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="form-line">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Default Input"
                              />
                            </div>
                          </div>
                          <div className="form-group form-group-sm">
                            <div className="form-line">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Small Input"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <h6>Floating Label Examples</h6>
                      <div className="row clearfix">
                        <div className="col-sm-12">
                          <div className="form-group form-float">
                            <div className="form-line">
                              <input type="text" className="form-control" />
                              <label className="form-label">Username</label>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="form-group form-float">
                            <div className="form-line">
                              <input type="password" className="form-control" />
                              <label className="form-label">Password</label>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="form-group form-float form-group-lg">
                            <div className="form-line">
                              <input type="text" className="form-control" />
                              <label className="form-label">Large Input</label>
                            </div>
                          </div>
                          <div className="form-group form-float">
                            <div className="form-line">
                              <input type="text" className="form-control" />
                              <label className="form-label">
                                Default Input
                              </label>
                            </div>
                          </div>
                          <div className="form-group form-float form-group-sm">
                            <div className="form-line">
                              <input type="text" className="form-control" />
                              <label className="form-label">Small Input</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <h6>Input Status</h6>
                      <div className="row clearfix">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <div className="form-line focused">
                              <input
                                type="text"
                                className="form-control"
                                value="Focused"
                                placeholder="Statu Focused"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <div className="form-line disabled">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Disabled"
                                disabled
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="card-body b-b">
                  <p>Different Size</p>
                  <div className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder=".form-control-lg"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Default input"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control form-control-sm"
                      type="text"
                      placeholder=".form-control-sm"
                    />
                  </div>
                </div>
                <div className="card-body b-b">
                  <p>Square Inputs</p>
                  <div className="form-group">
                    <input
                      className="form-control form-control-lg r-0"
                      type="text"
                      placeholder=".form-control-lg"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control r-0"
                      type="text"
                      placeholder="Default input"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control form-control-sm r-0"
                      type="text"
                      placeholder=".form-control-sm"
                    />
                  </div>
                </div>
                <div className="card-body b-b">
                  <p>Different Size</p>
                  <div className="form-group">
                    <input
                      className="form-control form-control-lg r-30"
                      type="text"
                      placeholder=".form-control-lg"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control r-30"
                      type="text"
                      placeholder="Default input"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control form-control-sm r-30"
                      type="text"
                      placeholder=".form-control-sm"
                    />
                  </div>
                </div>
                <div className="card-body b-b">
                  <p>Background Inputs</p>
                  <div className="form-group">
                    <input
                      className="form-control form-control-lg r-0 bg-light"
                      type="text"
                      placeholder=".form-control-lg"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control r-0 bg-light"
                      type="text"
                      placeholder="Default input"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control form-control-sm r-0 bg-light"
                      type="text"
                      placeholder=".form-control-sm"
                    />
                  </div>
                </div>
                <div className="card-body b-b">
                  <p>Switches</p>
                  <ul className="list-group">
                    <li className="list-group-item">
                      Switch Default
                      <div className="material-switch float-right">
                        <input
                          id="someSwitchOptionDefault"
                          name="someSwitchOption001"
                          type="checkbox"
                        />
                        <label
                          for="someSwitchOptionDefault"
                          className="bg-secondary"
                        ></label>
                      </div>
                    </li>
                    <li className="list-group-item">
                      Switch Primary
                      <div className="material-switch float-right">
                        <input
                          id="someSwitchOptionPrimary"
                          name="someSwitchOption001"
                          type="checkbox"
                        />
                        <label
                          for="someSwitchOptionPrimary"
                          className="bg-primary"
                        ></label>
                      </div>
                    </li>
                    <li className="list-group-item">
                      Switch Success
                      <div className="material-switch float-right">
                        <input
                          id="someSwitchOptionSuccess"
                          name="someSwitchOption001"
                          type="checkbox"
                        />
                        <label
                          for="someSwitchOptionSuccess"
                          className="bg-success"
                        ></label>
                      </div>
                    </li>
                    <li className="list-group-item">
                      Switch Info
                      <div className="material-switch float-right">
                        <input
                          id="someSwitchOptionInfo"
                          name="someSwitchOption001"
                          type="checkbox"
                        />
                        <label
                          for="someSwitchOptionInfo"
                          className="bg-info"
                        ></label>
                      </div>
                    </li>
                    <li className="list-group-item">
                      Switch Warning
                      <div className="material-switch float-right">
                        <input
                          id="someSwitchOptionWarning"
                          name="someSwitchOption001"
                          type="checkbox"
                        />
                        <label
                          for="someSwitchOptionWarning"
                          className="bg-warning"
                        ></label>
                      </div>
                    </li>
                    <li className="list-group-item">
                      Switch Danger
                      <div className="material-switch float-right">
                        <input
                          id="someSwitchOptionDanger"
                          name="someSwitchOption001"
                          type="checkbox"
                        />
                        <label
                          for="someSwitchOptionDanger"
                          className="bg-danger"
                        ></label>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="card-body b-b">
                  <p>Inline forms</p>
                  <form className="form-inline">
                    <label className="sr-only" for="inlineFormInputName2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control mb-2 mr-sm-2"
                      id="inlineFormInputName2"
                      placeholder="Jane Doe"
                    />
                    <label
                      className="sr-only"
                      for="inlineFormInputGroupUsername2"
                    >
                      Username
                    </label>
                    <div className="input-group mb-2 mr-sm-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text">@</div>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="inlineFormInputGroupUsername2"
                        placeholder="Username"
                      />
                    </div>
                    <div className="form-check mb-2 mr-sm-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineFormCheck"
                      />
                      <label className="form-check-label" for="inlineFormCheck">
                        Remember me
                      </label>
                    </div>
                    <button type="submit" className="btn btn-primary mt-2">
                      <i className="icon-arrow_forward mr-2"></i>Submit
                    </button>
                  </form>
                </div>
                <div className="card-body b-b">
                  <form>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label for="inputEmail4" className="col-form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="inputEmail4"
                          placeholder="Email"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label for="inputPassword4" className="col-form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="inputPassword4"
                          placeholder="Password"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label for="inputAddress" className="col-form-label">
                        Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress"
                        placeholder="1234 Main St"
                      />
                    </div>
                    <div className="form-group">
                      <label for="inputAddress2" className="col-form-label">
                        Address 2
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress2"
                        placeholder="Apartment, studio, or floor"
                      />
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label for="inputCity" className="col-form-label">
                          City
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputCity"
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label for="inputState" className="col-form-label">
                          State
                        </label>
                        <select id="inputState" className="form-control">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                      <div className="form-group col-md-2">
                        <label for="inputZip" className="col-form-label">
                          Zip
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputZip"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="form-check">
                        <label className="form-check-label">
                          <input className="form-check-input" type="checkbox" />{" "}
                          Check me out
                        </label>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Sign in
                    </button>
                  </form>
                </div>
                <div className="card-body b-b">
                  <form>
                    <div className="form-group">
                      <label for="exampleFormControlInput12">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control r-0"
                        id="exampleFormControlInput12"
                        placeholder="name@example.com"
                      />
                    </div>
                    <div className="form-group">
                      <label for="exampleFormControlSelect4">
                        Example select
                      </label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect4"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label for="exampleFormControlSelect3">
                        Example multiple select
                      </label>
                      <select
                        multiple
                        className="form-control r-0"
                        id="exampleFormControlSelect3"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label for="exampleFormControlTextarea2">
                        Example textarea
                      </label>
                      <textarea
                        className="form-control r-0"
                        id="exampleFormControlTextarea2"
                        rows="3"
                      ></textarea>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <h3>Documentation</h3>
              <hr />
              <p>
                You can pass plugin options using data-options attribute. Please
                make sure to use valid json code.
              </p>
              <a
                href="https://alex-d.github.io/Trumbowyg/documentation/"
                target="_blank"
                className="btn btn-xs btn-primary"
              >
                Plugin Docs
              </a>
              <a
                href="https://jsonformatter.org/"
                target="_blank"
                className="btn btn-outline-primary btn-xs"
              >
                JSON Formatter
              </a>
              <h4 className="mt-5">Code Example</h4>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

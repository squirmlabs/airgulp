import React from "react";

export const Letters = () => {
  return (
    <div className="container-fluid relative animatedParent animateOnce">
      <div className="animated fadeInUpShort p-md-5 p-3">
        <div className="relative mb-5">
          <h1 className="mb-2 text-primary">Avatars</h1>
          <p>You can use image or letter avatar.</p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body b-b">
                <p className="card-title"> Size Variations </p>
                <figure className="avatar avatar-xl">
                  <img src="assets/img/demo/u5.png" alt="" />
                </figure>
                <figure className="avatar avatar-lg">
                  <img src="assets/img/demo/u5.png" alt="" />
                </figure>
                <figure className="avatar">
                  <img src="assets/img/demo/u5.png" alt="" />
                </figure>
                <figure className="avatar avatar-sm">
                  <img src="assets/img/demo/u5.png" alt="" />
                </figure>
                <figure className="avatar avatar-xs">
                  <img src="assets/img/demo/u5.png" alt="" />
                </figure>
                <hr />
                <p className="card-title"> With badge </p>
                <figure className="avatar blink">
                  <img src="assets/img/demo/u4.png" alt="" />
                  <span className="avatar-badge online"></span>
                </figure>
                <figure className="avatar">
                  <img src="assets/img/demo/u5.png" alt="" />
                  <span className="avatar-badge idle"></span>
                </figure>
                <figure className="avatar">
                  <img src="assets/img/demo/u6.png" alt="" />
                  <span className="avatar-badge busy"></span>
                </figure>
                <figure className="avatar">
                  <img src="assets/img/demo/u7.png" alt="" />
                  <span className="avatar-badge offline"></span>
                </figure>
                <hr />
                <p className="card-title"> Badge indicator </p>
                <figure className="avatar avatar-lg">
                  <img src="assets/img/demo/u4.png" alt="" />
                  <span className="avatar-badge has-indicator online blink">
                    <i className="icon icon-check"></i>
                  </span>
                </figure>
                <figure className="avatar avatar-lg">
                  <img src="assets/img/demo/u5.png" alt="" />
                  <span className="avatar-badge has-indicator idle">
                    <i className="icon icon-minus"></i>
                  </span>
                </figure>
                <figure className="avatar avatar-lg">
                  <img src="assets/img/demo/u6.png" alt="" />
                  <span className="avatar-badge has-indicator busy">
                    <i className="icon icon-times"></i>
                  </span>
                </figure>
                <figure className="avatar avatar-lg">
                  <img src="assets/img/demo/u7.png" alt="" />
                  <span className="avatar-badge has-indicator offline"></span>
                </figure>
              </div>
              <div className="card-body b-b">
                <p className="card-title"> Grouping </p>
                <div className="avatar-group">
                  <figure className="avatar">
                    <img src="assets/img/demo/u4.png" alt="" />
                  </figure>
                  <figure className="avatar">
                    <span className="avatar-letter avatar-letter-l circle"></span>
                  </figure>
                  <figure className="avatar">
                    <img src="assets/img/demo/u5.png" alt="" />
                  </figure>
                  <figure className="avatar">
                    <img src="assets/img/demo/u6.png" alt="" />
                  </figure>
                  <figure className="avatar">
                    <img src="assets/img/demo/u7.png" alt="" />
                  </figure>
                  <figure className="avatar">
                    <span className="avatar-letter avatar-letter-a circle"></span>
                  </figure>
                  <figure className="avatar">
                    <span className="avatar-letter avatar-letter-b circle"></span>
                  </figure>
                </div>
                <hr />
                <p className="card-title"> Anchor </p>
                <a href="#" className="avatar">
                  <img src="assets/img/demo/u4.png" alt="" />
                  <span className="avatar-badge online"></span>
                </a>
                <a href="#" className="avatar">
                  <img src="assets/img/demo/u5.png" alt="" />
                  <span className="avatar-badge idle"></span>
                </a>
                <a href="#" className="avatar">
                  <img src="assets/img/demo/u6.png" alt="" />
                  <span className="avatar-badge busy"></span>
                </a>
                <a href="#" className="avatar">
                  <img src="assets/img/demo/u7.png" alt="" />
                  <span className="avatar-badge offline"></span>
                </a>
                <a href="#" className="avatar">
                  <span className="avatar-letter avatar-letter-b circle"></span>
                  <span className="avatar-badge offline"></span>
                </a>
                <hr />
                <p className="card-title"> Anchor group </p>
                <div className="avatar-group">
                  <a href="#" className="avatar avatar-lg">
                    <img src="assets/img/demo/u4.png" alt="" />
                  </a>
                  <a href="#" className="avatar avatar-lg">
                    <img src="assets/img/demo/u5.png" alt="" />
                  </a>
                  <a href="#" className="avatar avatar-lg">
                    <img src="assets/img/demo/u6.png" alt="" />
                  </a>
                  <a href="#" className="avatar avatar-lg">
                    <img src="assets/img/demo/u7.png" alt="" />
                  </a>
                  <a href="#" className="avatar avatar-lg">
                    <span className="avatar-letter avatar-letter-b circle avatar-lg"></span>
                  </a>
                </div>
                <hr />
                <p className="card-title"> Dropdowns </p>
                <figure className="avatar avatar-lg dropdown">
                  <a href="#" data-toggle="dropdown">
                    <img src="assets/img/demo/u4.png" alt="" />
                    <span className="avatar-badge has-indicator online">
                      <i className="icon icon-check"></i>
                    </span>
                  </a>
                  <div className="dropdown-menu">
                    <a href="#" className="dropdown-item">
                      Online
                    </a>
                    <a href="#" className="dropdown-item">
                      Warning
                    </a>
                    <a href="#" className="dropdown-item">
                      Busy
                    </a>
                    <a href="#" className="dropdown-item">
                      Offline
                    </a>
                  </div>
                </figure>
                <figure className="avatar avatar-lg dropdown">
                  <a href="#" data-toggle="dropdown">
                    <img src="assets/img/demo/u5.png" alt="" />
                    <span className="avatar-badge has-indicator idle">
                      <i className="icon icon-minus"></i>
                    </span>
                  </a>
                  <div className="dropdown-menu">
                    <a href="#" className="dropdown-item">
                      Online
                    </a>
                    <a href="#" className="dropdown-item">
                      Warning
                    </a>
                    <a href="#" className="dropdown-item">
                      Busy
                    </a>
                    <a href="#" className="dropdown-item">
                      Offline
                    </a>
                  </div>
                </figure>
                <figure className="avatar avatar-lg dropdown">
                  <a href="#" data-toggle="dropdown">
                    <img src="assets/img/demo/u6.png" alt="" />
                    <span className="avatar-badge has-indicator busy">
                      <i className="icon icon-times"></i>
                    </span>
                  </a>
                  <div className="dropdown-menu">
                    <a href="#" className="dropdown-item">
                      Online
                    </a>
                    <a href="#" className="dropdown-item">
                      Warning
                    </a>
                    <a href="#" className="dropdown-item">
                      Busy
                    </a>
                    <a href="#" className="dropdown-item">
                      Offline
                    </a>
                  </div>
                </figure>
                <figure className="avatar avatar-lg dropdown">
                  <a href="#" data-toggle="dropdown">
                    <img src="assets/img/demo/u7.png" alt="" />
                    <span className="avatar-badge has-indicator offline">
                      <i className="icon icon-media-record"></i>
                    </span>
                  </a>
                  <div className="dropdown-menu">
                    <a href="#" className="dropdown-item">
                      Online
                    </a>
                    <a href="#" className="dropdown-item">
                      Warning
                    </a>
                    <a href="#" className="dropdown-item">
                      Busy
                    </a>
                    <a href="#" className="dropdown-item">
                      Offline
                    </a>
                  </div>
                </figure>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h3>Documentation</h3>
            <hr />
            <p>You can use image or letter placeholder for avatar.</p>

            <div className="avatar">
              <span className="avatar-letter avatar-letter-a circle"></span>
            </div>
            <p>
              Change last character to change letter{" "}
              <code>avatar-letter-a</code>
            </p>
            <pre className="mt-2">
              <code>
                &lt;div className="avatar"&gt; &nbsp;&nbsp;&nbsp;&lt;span
                className="avatar-letter avatar-letter-a
                circle"&gt;&lt;/span&gt; &lt;/div&gt;
              </code>
            </pre>

            <figure className="avatar avatar-lg">
              <img src="assets/img/demo/u5.png" alt="" />
            </figure>

            <pre className="mt-2">
              <code>
                &lt;figure className="avatar avatar-lg"&gt;
                &nbsp;&nbsp;&nbsp;&lt;img src="assets/img/demo/u5.png"
                alt=""&gt; &lt;/figure&gt;
              </code>
            </pre>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-md-4">
            <ul className="list-unstyled">
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-a circle"></span>
                    </div>
                    <div>
                      <div>
                        <strong>DNA</strong>
                      </div>
                      <small> alexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-b circle"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Blexander Pierce</strong>
                      </div>
                      <small> blexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-c circle"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Clexander Pierce</strong>
                      </div>
                      <small> clexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-d circle"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Dlexander Pierce</strong>
                      </div>
                      <small> dlexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-e circle"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Elexander Pierce</strong>
                      </div>
                      <small> elexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-f circle"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Flexander Pierce</strong>
                      </div>
                      <small> flexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-g circle"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Glexander Pierce</strong>
                      </div>
                      <small> glexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-h circle"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Hlexander Pierce</strong>
                      </div>
                      <small> hlexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-i circle"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Ilexander Pierce</strong>
                      </div>
                      <small> ilexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-j circle"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Jlexander Pierce</strong>
                      </div>
                      <small> jlexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-k circle"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Klexander Pierce</strong>
                      </div>
                      <small> klexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-l circle"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Llexander Pierce</strong>
                      </div>
                      <small> llexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-m circle"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Mlexander Pierce</strong>
                      </div>
                      <small> mlexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-n circle"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Nlexander Pierce</strong>
                      </div>
                      <small> nlexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-o circle"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Olexander Pierce</strong>
                      </div>
                      <small> olexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-p circle"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Plexander Pierce</strong>
                      </div>
                      <small> plexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-q circle"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Qlexander Pierce</strong>
                      </div>
                      <small> qlexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-r circle"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Rlexander Pierce</strong>
                      </div>
                      <small> rlexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-s circle"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Slexander Pierce</strong>
                      </div>
                      <small> slexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-t circle"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Tlexander Pierce</strong>
                      </div>
                      <small> tlexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-u circle"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Ulexander Pierce</strong>
                      </div>
                      <small> ulexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-v circle"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Vlexander Pierce</strong>
                      </div>
                      <small> vlexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-w circle"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Wlexander Pierce</strong>
                      </div>
                      <small> wlexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-x circle"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Xlexander Pierce</strong>
                      </div>
                      <small> xlexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-y circle"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Ylexander Pierce</strong>
                      </div>
                      <small> ylexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-z circle"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Zlexander Pierce</strong>
                      </div>
                      <small> zlexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="list-unstyled">
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-a"></span>
                    </div>
                    <div>
                      <div>
                        <strong>DNA</strong>
                      </div>
                      <small> alexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-b"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Blexander Pierce</strong>
                      </div>
                      <small> blexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-c"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Clexander Pierce</strong>
                      </div>
                      <small> clexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-d"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Dlexander Pierce</strong>
                      </div>
                      <small> dlexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-e"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Elexander Pierce</strong>
                      </div>
                      <small> elexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-f"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Flexander Pierce</strong>
                      </div>
                      <small> flexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-g"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Glexander Pierce</strong>
                      </div>
                      <small> glexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-h"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Hlexander Pierce</strong>
                      </div>
                      <small> hlexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-i"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Ilexander Pierce</strong>
                      </div>
                      <small> ilexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-j"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Jlexander Pierce</strong>
                      </div>
                      <small> jlexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-k"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Klexander Pierce</strong>
                      </div>
                      <small> klexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-l"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Llexander Pierce</strong>
                      </div>
                      <small> llexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-m"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Mlexander Pierce</strong>
                      </div>
                      <small> mlexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-n"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Nlexander Pierce</strong>
                      </div>
                      <small> nlexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-o"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Olexander Pierce</strong>
                      </div>
                      <small> olexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-p"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Plexander Pierce</strong>
                      </div>
                      <small> plexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-q"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Qlexander Pierce</strong>
                      </div>
                      <small> qlexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-r"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Rlexander Pierce</strong>
                      </div>
                      <small> rlexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-s"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Slexander Pierce</strong>
                      </div>
                      <small> slexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-t"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Tlexander Pierce</strong>
                      </div>
                      <small> tlexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-u"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Ulexander Pierce</strong>
                      </div>
                      <small> ulexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-v"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Vlexander Pierce</strong>
                      </div>
                      <small> vlexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-w"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Wlexander Pierce</strong>
                      </div>
                      <small> wlexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-x"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Xlexander Pierce</strong>
                      </div>
                      <small> xlexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-y"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Ylexander Pierce</strong>
                      </div>
                      <small> ylexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-left">
                      <span className="avatar-letter avatar-letter-z"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Zlexander Pierce</strong>
                      </div>
                      <small> zlexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="list-unstyled">
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-right">
                      <span className="avatar-letter avatar-letter-a r-0"></span>
                    </div>
                    <div>
                      <div>
                        <strong>DNA</strong>
                      </div>
                      <small> alexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-right">
                      <span className="avatar-letter avatar-letter-b r-0"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Blexander Pierce</strong>
                      </div>
                      <small> blexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-right">
                      <span className="avatar-letter avatar-letter-c r-0"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Clexander Pierce</strong>
                      </div>
                      <small> clexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-right">
                      <span className="avatar-letter avatar-letter-d r-0"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Dlexander Pierce</strong>
                      </div>
                      <small> dlexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-right">
                      <span className="avatar-letter avatar-letter-e r-0"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Elexander Pierce</strong>
                      </div>
                      <small> elexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-right">
                      <span className="avatar-letter avatar-letter-f r-0"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Flexander Pierce</strong>
                      </div>
                      <small> flexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-right">
                      <span className="avatar-letter avatar-letter-g r-0"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Glexander Pierce</strong>
                      </div>
                      <small> glexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-right">
                      <span className="avatar-letter avatar-letter-h r-0"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Hlexander Pierce</strong>
                      </div>
                      <small> hlexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-right">
                      <span className="avatar-letter avatar-letter-i r-0"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Ilexander Pierce</strong>
                      </div>
                      <small> ilexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-right">
                      <span className="avatar-letter avatar-letter-j r-0"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Jlexander Pierce</strong>
                      </div>
                      <small> jlexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-right">
                      <span className="avatar-letter avatar-letter-k r-0"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Klexander Pierce</strong>
                      </div>
                      <small> klexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-right">
                      <span className="avatar-letter avatar-letter-l r-0"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Llexander Pierce</strong>
                      </div>
                      <small> llexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-right">
                      <span className="avatar-letter avatar-letter-m r-0"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Mlexander Pierce</strong>
                      </div>
                      <small> mlexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-right">
                      <span className="avatar-letter avatar-letter-n r-0"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Nlexander Pierce</strong>
                      </div>
                      <small> nlexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-right">
                      <span className="avatar-letter avatar-letter-o r-0"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Olexander Pierce</strong>
                      </div>
                      <small> olexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-right">
                      <span className="avatar-letter avatar-letter-p r-0"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Plexander Pierce</strong>
                      </div>
                      <small> plexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-right">
                      <span className="avatar-letter avatar-letter-q r-0"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Qlexander Pierce</strong>
                      </div>
                      <small> qlexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-right">
                      <span className="avatar-letter avatar-letter-r r-0"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Rlexander Pierce</strong>
                      </div>
                      <small> rlexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-right">
                      <span className="avatar-letter avatar-letter-s r-0"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Slexander Pierce</strong>
                      </div>
                      <small> slexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-right">
                      <span className="avatar-letter avatar-letter-t r-0"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Tlexander Pierce</strong>
                      </div>
                      <small> tlexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-right">
                      <span className="avatar-letter avatar-letter-u r-0"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Ulexander Pierce</strong>
                      </div>
                      <small> ulexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-right">
                      <span className="avatar-letter avatar-letter-v r-0"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Vlexander Pierce</strong>
                      </div>
                      <small> vlexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-right">
                      <span className="avatar-letter avatar-letter-w r-0"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Wlexander Pierce</strong>
                      </div>
                      <small> wlexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-right">
                      <span className="avatar-letter avatar-letter-x r-0"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Xlexander Pierce</strong>
                      </div>
                      <small> xlexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-right">
                      <span className="avatar-letter avatar-letter-y r-0"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Ylexander Pierce</strong>
                      </div>
                      <small> ylexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="card no-b p-3">
                  <div>
                    <div className="image mr-3 float-right">
                      <span className="avatar-letter avatar-letter-z r-0"></span>
                    </div>
                    <div>
                      <div>
                        <strong>Zlexander Pierce</strong>
                      </div>
                      <small> zlexander@paper.com</small>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

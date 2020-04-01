import React from "react";

export const Preloaders = () => {
  return (
    <div className="container-fluid relative animatedParent animateOnce">
      <div className="animated fadeInUpShort p-md-5 p-3">
        <div className="relative mb-5">
          <h1 className="mb-2 text-primary">Preloaders</h1>
          <p>Preload spinner.</p>
        </div>
        <div className="row">
          <div className="col-md-7">
            <div className="card">
              <div className="card-header"> Circular Preloader Small </div>
              <div className="card-body text-center height-100">
                <div className="preloader-wrapper small active">
                  <div className="spinner-layer spinner-green-only">
                    <div className="circle-clipper left">
                      <div className="circle"></div>
                    </div>
                    <div className="gap-patch">
                      <div className="circle"></div>
                    </div>
                    <div className="circle-clipper right">
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>
                <div className="preloader-wrapper small active">
                  <div className="spinner-layer spinner-yellow-only">
                    <div className="circle-clipper left">
                      <div className="circle"></div>
                    </div>
                    <div className="gap-patch">
                      <div className="circle"></div>
                    </div>
                    <div className="circle-clipper right">
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>
                <div className="preloader-wrapper small active">
                  <div className="spinner-layer spinner-red-only">
                    <div className="circle-clipper left">
                      <div className="circle"></div>
                    </div>
                    <div className="gap-patch">
                      <div className="circle"></div>
                    </div>
                    <div className="circle-clipper right">
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>
                <div className="preloader-wrapper small active">
                  <div className="spinner-layer spinner-blue-only">
                    <div className="circle-clipper left">
                      <div className="circle"></div>
                    </div>
                    <div className="gap-patch">
                      <div className="circle"></div>
                    </div>
                    <div className="circle-clipper right">
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card my-3">
              <div className="card-header"> Circular Preloader Medium </div>
              <div className="card-body text-center height-100">
                <div className="preloader-wrapper active">
                  <div className="spinner-layer spinner-red-only">
                    <div className="circle-clipper left">
                      <div className="circle"></div>
                    </div>
                    <div className="gap-patch">
                      <div className="circle"></div>
                    </div>
                    <div className="circle-clipper right">
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card my-3">
              <div className="card-header"> Circular Preloader Large </div>
              <div className="card-body text-center height-100">
                <div className="preloader-wrapper big active">
                  <div className="spinner-layer spinner-blue-only">
                    <div className="circle-clipper left">
                      <div className="circle"></div>
                    </div>
                    <div className="gap-patch">
                      <div className="circle"></div>
                    </div>
                    <div className="circle-clipper right">
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header"> Circular Flashing Colors </div>
              <div className="card-body text-center height-100">
                <div className="preloader-wrapper big active">
                  <div className="spinner-layer spinner-blue">
                    <div className="circle-clipper left">
                      <div className="circle"></div>
                    </div>
                    <div className="gap-patch">
                      <div className="circle"></div>
                    </div>
                    <div className="circle-clipper right">
                      <div className="circle"></div>
                    </div>
                  </div>

                  <div className="spinner-layer spinner-red">
                    <div className="circle-clipper left">
                      <div className="circle"></div>
                    </div>
                    <div className="gap-patch">
                      <div className="circle"></div>
                    </div>
                    <div className="circle-clipper right">
                      <div className="circle"></div>
                    </div>
                  </div>

                  <div className="spinner-layer spinner-yellow">
                    <div className="circle-clipper left">
                      <div className="circle"></div>
                    </div>
                    <div className="gap-patch">
                      <div className="circle"></div>
                    </div>
                    <div className="circle-clipper right">
                      <div className="circle"></div>
                    </div>
                  </div>

                  <div className="spinner-layer spinner-green">
                    <div className="circle-clipper left">
                      <div className="circle"></div>
                    </div>
                    <div className="gap-patch">
                      <div className="circle"></div>
                    </div>
                    <div className="circle-clipper right">
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <h3>Documentation</h3>
            <hr />
            <p>
              With this proloader element template is also using Nprogress bar.
              You can see demo on page load.
            </p>
            <a
              href="https://github.com/rstacruz/nprogress"
              target="_blank"
              className="btn btn-xs btn-primary"
            >
              Nprogress Docs
            </a>
            <h4 className="mt-5">Disable Preloader</h4>
            Remove 'has-preloader' class from body tag to disable preloader.
            <h4 className="mt-5">Code Example</h4>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

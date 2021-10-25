import React, { useState } from "react";

const Brand = () => {
  const [brandName, setBrandName] = useState("");
  const addBrand = () => {
    console.log(brandName);
  };
  return (
    <div className="container ">
      <div className="row">
        <div className="col-md-10 offset-1 mt-2">
          <div className="card text-center">
            <div className="card-header bg-dark">
              <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="true" href="/">
                    Brand
                  </a>
                </li>
                {/* <li class="nav-item">
                  <a class="nav-link" aria-current="true" href="/">
                    Active
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" aria-current="true" href="/">
                    Active
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="card-body card">
              <div className="card-header bg-warning">
                <h5 className="card-title">Add new brand</h5>
              </div>
              <div className="card-body p-5">
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="New brand name ..."
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                    onChange={(e) => setBrandName(e.target.value)}
                  />
                  <button
                    class="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                    onClick={addBrand}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
            <div className="card-body card">
              <div className="card-body">
                <table class="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td colspan="2">Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card-footer bg-dark text-white">
              @Makfsdev All rights is reserved!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;

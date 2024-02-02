import React, { useState } from 'react';
import "./Dashboard.css";
import AddIcon from '@material-ui/icons/Add';

const SideDash = ({ handleSearch, setSearch }) => {

  const [show, setShow] = useState(false);
  const [showJoin, setShowJoin] = useState(false);
  const toggle = () => setShow(prevState => !prevState);
  const toggleJoin = () => setShowJoin(prevState => !prevState);
  const forum = [];

  const [filteredList, setFilteredList] = new useState(forum);


  return (
    <div className="col-3 d-none d-md-block Dashboard_Sidedrawer px-1 ps-4 width-20">
      <div className="row">
        <div className="col-lg-6 pt-5 pt-lg-0 mb-5 order-2 order-lg-1 d-flex flex-column justify-content-center">
          <div className="search-header searchInput">
            <div className="search-text">Search</div>

            <input id="search-box" placeholder='Enter Course Name' name="name"
              onChange={(e) => { setSearch((prev) => ({ ...prev, name: e.target.value })) }}
            />
          </div>

          <div>
            <button className="btn-submit" onClick={handleSearch}>Submit</button>
          </div>
          <div id="item-list">
            <ol>
              {filteredList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideDash;

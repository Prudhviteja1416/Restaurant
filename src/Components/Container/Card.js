import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {addorder, resetfilter, resettablenumber} from "../Action";

const Card = ({filter_name, addorder, table_number}) => {
  const [data, setData] = useState([]);
  const [cloneData, setCloneData] = useState([]);
  useEffect(() => {
    fetch(
      "https://restaurant-2fc64-default-rtdb.firebaseio.com/items/-N9pdIRbquJhrA9M2nSs.json"
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json.items);
        setCloneData(json.items);
      });
  }, []);
  useEffect(() => {
    if (filter_name !== "All Items") {
      let specific = cloneData.filter((item) => item.catagory === filter_name);
      setData(specific);
    } else {
      setData(cloneData);
    }
  }, [filter_name]);

  const Handler = async (id, name, price, url) => {
    if (table_number != null) {
      await addorder(id, name, price, table_number, url);
      await resettablenumber;
      await resetfilter;
      alert("Order Placed successfully");
    } else {
      alert("Please Select the table number");
    }
  };
  return (
    <center>
      <div>
        {data.length > 0 ? (
          <div className="container">
            <div className="row">
              {data.map((item) => (
                <div
                  className="col-md-4"
                  style={{
                    padding: "10px",
                  }}
                  key={item.id}
                >
                  <div
                    className="card"
                    style={{
                      width: "18rem",
                      padding: "3px",
                    }}
                  >
                    <img
                      src={item.url}
                      className="card-img-top"
                      alt=""
                      style={{height: "16rem"}}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <div className="card-text">Rs.{item.price}</div>
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          Handler(item.id, item.name, item.price, item.url)
                        }
                      >
                        Order
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="spinner-border text-primary"></div>
        )}
      </div>
    </center>
  );
};
const mapStateToProps = (state) => ({
  filter_name: state.filterreducer.filter_name,
  table_number: state.tablereducer.table_number,
});
export default connect(mapStateToProps, {addorder})(Card);

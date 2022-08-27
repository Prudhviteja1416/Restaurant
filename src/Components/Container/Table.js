import { connect } from "react-redux";
import { settablenumber } from "../Action";

const Table = ({ table_number, settablenumber }) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const inActiveBtn = "btn btn-outline-primary m-3";
  const activeBtn = "btn btn-outline-primary m-3 active";
  return (
    <div>
      <center>
        <div className="m-3">
          <h4 className="display-6 text-success">Please Select Your Order</h4>
        </div>
        {numbers.map((num, index) => (
          <div style={{ display: "inline" }} key={index}>
            <button
              className={table_number === num ? activeBtn : inActiveBtn}
              onClick={() => settablenumber(num)}
            >
              {num}
            </button>
          </div>
        ))}
      </center>
    </div>
  );
};
const mapStateToProps = (state) => ({
  table_number: state.tablereducer.table_number,
});
export default connect(mapStateToProps, { settablenumber })(Table);

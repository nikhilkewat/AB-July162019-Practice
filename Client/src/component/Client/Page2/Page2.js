import React from "react";
import { connect } from "react-redux";

import { getUserList } from "../../../action/Page2";
import { AgGridReact } from "@ag-grid-community/react";
import { AllCommunityModules } from "@ag-grid-community/all-modules";

import "@ag-grid-community/all-modules/dist/styles/ag-grid.css";
import "@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css";

class Page2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userlist: [],
      columnDefs: [
        {
          headerName: "Id",
          field: "id",
          sortable:true,
          filter: "agNumberColumnFilter",
          
        },
        {
          headerName: "User Name",
          field: "username"
        },
        {
          headerName: "Password",
          field: "password"
        }
      ]
    };
  }

  componentDidMount() {
    this.props.getusers();

  }

  render() {
      console.log(this.props.getUserList);
    return (
      <div>
        <div
          className="ag-theme-balham"
          style={{
            height: "500px",
            width: "600px"
          }}
        >
          <AgGridReact
            columnDefs={this.state.columnDefs}
            rowData={this.props.getUserList.data}
           modules={AllCommunityModules}
            floatingFilter={true}
          ></AgGridReact>
        </div>
      </div>
    );
  }
}

const mapdispatchtoprops = dispatch => {
  return {
    getusers: () => dispatch(getUserList())
  };
};

const mapStatetoProps = ({ getUserList }) => {
  return {
    getUserList
  };
};

export default connect(mapStatetoProps, mapdispatchtoprops)(Page2);

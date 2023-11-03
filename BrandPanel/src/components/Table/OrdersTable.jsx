import React from "react";
import { useEffect } from "react";
import MUIDataTable from "mui-datatables";
import axios from 'axios';
import { useState } from "react";
import { useSelector } from "react-redux";
import "./Table.css";
import EditIcon from "@material-ui/icons/Edit";

const BasicTable = () => {

  const [orders, setOrders] = useState([]);
  const user = useSelector((state) => state.user.user);
  const email = user.email;

  const handleStatusEdit = async (orderId) => {
   try{ 
    const status = "Confirm";
    const response = await axios.put(`http://localhost:5002/api/orders/${orderId}`, { status });
    fetchOrders();
    window.alert("Status updated successfully");
  } catch (error) {
    console.log("Error updating order status:", error);
  }
  }

  const makeStyle = (status) => {
    if (status === "Processing") {
      return {
        color: "orange",
      };
    } else if (status === "Confirm") {
      return {
        color: "green",
      };
    }  else if (status === "Cancelled") {
      return {
        color: "red",
    };
    }else {
      return {
        background: "#59bfff",
        color: "white",
      };
    }
  };

useEffect(() => {
  fetchOrders();
}, []);


const fetchOrders = ()=>{
  axios.get(`http://localhost:5002/api/orders`)
    .then(response => {
      setOrders(response.data);
      
    })
    .catch(error => {
    
    });
  }

const columns = [
  {
    name: "_id",
    label: "Id",
    options:{
      display: "excluded",
    },
  },
  {
    name: "rowNumber",
    label: "Order",
    options: {
      customBodyRender: (value, tableMeta) => (
        <span>{tableMeta.rowIndex + 1}</span>
      ),
    },
  },
  
    {
      name: "products",
      label: "Products",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (products) => (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {products.map((product, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <div style={{ position: 'relative' }}>
                  <img
                    src={`http://localhost:5002/${product.image}`}
                    alt={product.title}
                    style={{ width: "40px", height: "40px" }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      width: '20px',
                      height: '20px',
                      background: '#3b3e41',
                      borderRadius: '50%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontSize: "10px",
                      color: '#fff',
                    }}
                    className="p-2">
                    {product.quantity}
                  </div>
                </div>
                <div style={{ marginLeft: '10px' }}>
                  {product.title}
                </div>
              </div>
            ))}
          </div>
        ),
      },
    },    
  {
    name: "amount",
    label: "Total Price",
  },
  {
    name: "status",
    label: "Status",
    options:{
      customBodyRender: (value) => (
        <span style={makeStyle(value)}>{value}</span> 
      ),
    }
  },
  {
    name: "address",
    label: "Address",
  },
  {
    name: "customerName",
    label: "Customer Name",
  },
  {
    name: "createdAt",
    label: "Order Date",
    options: {
      filter: true,
      sort: true,
      customBodyRender: (value) => {
        // Create a Date object from the ISO 8601 date string
        const date = new Date(value);
  
        // Format the date into a human-readable format (e.g., "dd/mm/yyyy hh:mm:ss")
        const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  
        return formattedDate;
      },
    },
  },  
  {
    name: "edit",
    label: "Edit",
    options: {
      filter: false,
      sort: false,
      customBodyRender: (value, tableMeta) => {
        const isConfirmed = tableMeta.rowData[4] === "Confirm";
  
        const setStatus = () => {
          if (isConfirmed) {
            return (
              <span>Confirmed</span>
            );
          } else {
            return (
              <>
                <span>Confirm</span>
                <EditIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => handleStatusEdit(tableMeta.rowData[0])}
                />
              </>
            );
          }
        };
  
        return setStatus();
      },
    },
  }  

];

const options = {
  filter: true,
  filterType: "textField", 
  responsive: "standard",
  rowsPerPage: 10,
  search:true,
  rowsPerPageOptions: [10, 25, 50],
};

return (
  <div className="Table" >
    <MUIDataTable 
      title=""
      data={orders}
      columns={columns}
      options={options}
    />
  </div>
);

}

export default BasicTable;

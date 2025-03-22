import React from 'react';
import './CustomerTable.css';

const CustomerTable = ({ customers }) => {
  return (
    <div className="customer-table-container">
      <table className="customer-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Due Date</th>
            <th>Transaction ID</th>
            <th>Amount</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.type}</td>
              <td>{customer.dueDate}</td>
              <td>{customer.transactionId}</td>
              <td>{customer.amount}</td>
              <td>{customer.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
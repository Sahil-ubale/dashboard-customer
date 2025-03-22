import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import CustomerHeader from './components/CustomerHeader/CustomerHeader';
import CustomerTable from './components/CustomerTable/CustomerTable';
import Pagination from './components/Pagination/Pagination';
import './App.css';

function App() {
  // Customer data for different pages
  const customerPages = {
    1: [
      { id: 1, name: 'Taran', type: 'Dine In', dueDate: '01/07/2025', transactionId: '93833610', amount: '32987₹', phoneNumber: '3214567891' },
      { id: 2, name: 'Astha sharma', type: 'Reservation', dueDate: '01/06/2025', transactionId: '93833610', amount: '32987₹', phoneNumber: '1234567890' },
      { id: 3, name: 'Sahil Ubale', type: 'Dine In', dueDate: '01/06/2025', transactionId: '93833610', amount: '32987₹', phoneNumber: '0987654321' },
      { id: 4, name: 'Ryan Jones', type: 'Pickup', dueDate: '01/06/2025', transactionId: '93833610', amount: '32987₹', phoneNumber: '6543217890' },
      { id: 5, name: 'Pratham Sharma', type: 'Review', dueDate: '01/06/2025', transactionId: '93833610', amount: '32987₹', phoneNumber: '9807654321' },
      { id: 6, name: 'Anushka', type: 'Din-In', dueDate: '01/06/2025', transactionId: '93833610', amount: '32987₹', phoneNumber: '0987654321' },
      { id: 7, name: 'Anushka', type: 'Din-In', dueDate: '01/06/2025', transactionId: '93833610', amount: '32987₹', phoneNumber: '0987654321' },
      { id: 8, name: 'Anushka', type: 'Din-In', dueDate: '01/06/2025', transactionId: '93833610', amount: '32987₹', phoneNumber: '0987654321' },
      { id: 9, name: 'Anushka', type: 'Din-In', dueDate: '01/06/2025', transactionId: '93833610', amount: '32987₹', phoneNumber: '0987654321' },
    ],
    2: [
      { id: 10, name: 'John Smith', type: 'Dine In', dueDate: '01/08/2025', transactionId: '93833611', amount: '45987₹', phoneNumber: '7654321890' },
      { id: 11, name: 'Emily Johnson', type: 'Reservation', dueDate: '01/09/2025', transactionId: '93833612', amount: '28750₹', phoneNumber: '8765432109' },
      { id: 12, name: 'Michael Brown', type: 'Pickup', dueDate: '01/10/2025', transactionId: '93833613', amount: '36500₹', phoneNumber: '9876543210' },
      { id: 13, name: 'Sarah Davis', type: 'Review', dueDate: '01/11/2025', transactionId: '93833614', amount: '42300₹', phoneNumber: '6789012345' },
      { id: 14, name: 'David Wilson', type: 'Dine In', dueDate: '01/12/2025', transactionId: '93833615', amount: '31750₹', phoneNumber: '5678901234' },
      { id: 15, name: 'Jessica Taylor', type: 'Reservation', dueDate: '01/13/2025', transactionId: '93833616', amount: '29800₹', phoneNumber: '4567890123' },
      { id: 16, name: 'Daniel Martinez', type: 'Pickup', dueDate: '01/14/2025', transactionId: '93833617', amount: '38200₹', phoneNumber: '3456789012' },
      { id: 17, name: 'Jennifer Anderson', type: 'Review', dueDate: '01/15/2025', transactionId: '93833618', amount: '41500₹', phoneNumber: '2345678901' },
      { id: 18, name: 'Christopher Thomas', type: 'Dine In', dueDate: '01/16/2025', transactionId: '93833619', amount: '33900₹', phoneNumber: '1234567890' },
    ],
    3: [
      { id: 19, name: 'Lisa Jackson', type: 'Reservation', dueDate: '01/17/2025', transactionId: '93833620', amount: '27600₹', phoneNumber: '9012345678' },
      { id: 20, name: 'Matthew White', type: 'Pickup', dueDate: '01/18/2025', transactionId: '93833621', amount: '39400₹', phoneNumber: '8901234567' },
      { id: 21, name: 'Amanda Harris', type: 'Review', dueDate: '01/19/2025', transactionId: '93833622', amount: '43200₹', phoneNumber: '7890123456' },
      { id: 22, name: 'James Martin', type: 'Dine In', dueDate: '01/20/2025', transactionId: '93833623', amount: '32100₹', phoneNumber: '6789012345' },
      { id: 23, name: 'Ashley Thompson', type: 'Reservation', dueDate: '01/21/2025', transactionId: '93833624', amount: '30500₹', phoneNumber: '5678901234' },
      { id: 24, name: 'Robert Garcia', type: 'Pickup', dueDate: '01/22/2025', transactionId: '93833625', amount: '37800₹', phoneNumber: '4567890123' },
      { id: 25, name: 'Stephanie Martinez', type: 'Review', dueDate: '01/23/2025', transactionId: '93833626', amount: '40900₹', phoneNumber: '3456789012' },
      { id: 26, name: 'Kevin Robinson', type: 'Dine In', dueDate: '01/24/2025', transactionId: '93833627', amount: '34600₹', phoneNumber: '2345678901' },
      { id: 27, name: 'Michelle Clark', type: 'Reservation', dueDate: '01/25/2025', transactionId: '93833628', amount: '28300₹', phoneNumber: '1234567890' },
    ],
    4: [
      { id: 28, name: 'Brian Lewis', type: 'Pickup', dueDate: '01/26/2025', transactionId: '93833629', amount: '39800₹', phoneNumber: '9012345678' },
      { id: 29, name: 'Nicole Lee', type: 'Review', dueDate: '01/27/2025', transactionId: '93833630', amount: '44100₹', phoneNumber: '8901234567' },
      { id: 30, name: 'Jason Walker', type: 'Dine In', dueDate: '01/28/2025', transactionId: '93833631', amount: '32700₹', phoneNumber: '7890123456' },
      { id: 31, name: 'Heather Hall', type: 'Reservation', dueDate: '01/29/2025', transactionId: '93833632', amount: '31200₹', phoneNumber: '6789012345' },
      { id: 32, name: 'Andrew Allen', type: 'Pickup', dueDate: '01/30/2025', transactionId: '93833633', amount: '38600₹', phoneNumber: '5678901234' },
      { id: 33, name: 'Rebecca Young', type: 'Review', dueDate: '01/31/2025', transactionId: '93833634', amount: '42800₹', phoneNumber: '4567890123' },
      { id: 34, name: 'Joshua King', type: 'Dine In', dueDate: '02/01/2025', transactionId: '93833635', amount: '35300₹', phoneNumber: '3456789012' },
      { id: 35, name: 'Lauren Wright', type: 'Reservation', dueDate: '02/02/2025', transactionId: '93833636', amount: '29100₹', phoneNumber: '2345678901' },
      { id: 36, name: 'Brandon Scott', type: 'Pickup', dueDate: '02/03/2025', transactionId: '93833637', amount: '40200₹', phoneNumber: '1234567890' },
    ],
    5: [
      { id: 37, name: 'Megan Green', type: 'Review', dueDate: '02/04/2025', transactionId: '93833638', amount: '44700₹', phoneNumber: '9012345678' },
      { id: 38, name: 'Justin Adams', type: 'Dine In', dueDate: '02/05/2025', transactionId: '93833639', amount: '33400₹', phoneNumber: '8901234567' },
      { id: 39, name: 'Samantha Baker', type: 'Reservation', dueDate: '02/06/2025', transactionId: '93833640', amount: '31900₹', phoneNumber: '7890123456' },
      { id: 40, name: 'Ryan Nelson', type: 'Pickup', dueDate: '02/07/2025', transactionId: '93833641', amount: '39200₹', phoneNumber: '6789012345' },
      { id: 41, name: 'Katherine Carter', type: 'Review', dueDate: '02/08/2025', transactionId: '93833642', amount: '43500₹', phoneNumber: '5678901234' },
      { id: 42, name: 'Tyler Mitchell', type: 'Dine In', dueDate: '02/09/2025', transactionId: '93833643', amount: '36000₹', phoneNumber: '4567890123' },
      { id: 43, name: 'Olivia Perez', type: 'Reservation', dueDate: '02/10/2025', transactionId: '93833644', amount: '29700₹', phoneNumber: '3456789012' },
      { id: 44, name: 'Zachary Roberts', type: 'Pickup', dueDate: '02/11/2025', transactionId: '93833645', amount: '40800₹', phoneNumber: '2345678901' },
      { id: 45, name: 'Hannah Turner', type: 'Review', dueDate: '02/12/2025', transactionId: '93833646', amount: '45300₹', phoneNumber: '1234567890' },
    ],
  };

  // State for current page
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Object.keys(customerPages).length;

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">
        <CustomerHeader />
        <CustomerTable customers={customerPages[currentPage]} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </main>
    </div>
  );
}

export default App;
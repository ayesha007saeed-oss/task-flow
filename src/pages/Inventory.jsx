import React from 'react';
import Navbar from '../components/Navbar';
import InventoryTable from '../components/InventoryTable';

const Inventory = () => {
  return (
    <>
      <Navbar title="Inventory Management" />
      <InventoryTable />
    </>
  );
};

export default Inventory;
import React, { useState, useEffect, Fragment } from 'react';
import styles from './cart.module.css';

const menu = () => {
 

  return (
    <Fragment>
      <button>Profile</button>
      <button>Orders</button>
      <button>My List</button>
      <button>Messages</button>
    </Fragment>
  );
};

export default menu;

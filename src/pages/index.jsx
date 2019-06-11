
import React from 'react';
import Link from 'umi/link';
import styles from './index.css';

export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <Link to="/homePage/homePage">go to /homePage/homePage</Link><br/>
      <Link to="/products/products">go to /products/products</Link><br/>
      <Link to="/menuList/menuList">go to /menuList/menuList</Link>
      <ul className={styles.list}>
        <li>底部：To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <a href="#">umijs--- Getting Started</a>
        </li>
      </ul>
    </div>
  );
}

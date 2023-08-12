import React from 'react'
import styles from './style.module.css'

function Header() {
  return (
    <div className={styles['header']}>
        <span>menu</span>
        <button>X</button>
    </div>
  )
}

export default Header
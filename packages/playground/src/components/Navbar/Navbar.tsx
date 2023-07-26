import { ReactNode } from 'react'

import styles from './Navbar.module.scss'

interface NavbarProps {
  children?: ReactNode
}

export const Navbar = ({ children }: NavbarProps): JSX.Element => {
  return <div className={styles.root}>{children}</div>
}

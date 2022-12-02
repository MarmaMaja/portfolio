import React from 'react'
import styles from './contacts.module.scss'

type ContactsProps = {

}

const Contacts: React.FC<ContactsProps> = () => {
  return (
    <div className={styles.container}>
      <h1>Contacts</h1>
      <a href="https://www.linkedin.com/in/markus-mikael-maja/"> LinkedIn</a>
      <a> Discord: [Markus Maja#3230] </a>

    </div>
  )
}

export default Contacts

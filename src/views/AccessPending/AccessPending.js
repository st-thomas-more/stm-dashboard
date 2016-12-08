import React from 'react'
import { CONTACTS } from '../../constants/Constants'
import './AccessPending.css'

export class AccessPending extends React.Component {
  render() {
    return (
      <div className="root">
        Oops! Looks like your account is still pending access. Please check with {`${CONTACTS.main.firstName} ${CONTACTS.main.lastName}`} for more information.
      </div>
    )
  }
}

export default AccessPending
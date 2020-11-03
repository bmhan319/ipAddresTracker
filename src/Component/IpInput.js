import React from 'react'

export default function IpInput() {
  return (
    <div>
      <form className="ip-form">
        <input className="ip-input" placeholder="Search for any IP address" type="text" minlength="7" maxlength="15" size="15" pattern="^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$" />
        <button className="ip-submit" type="submit"></button>
      </form>
    </div>
  )
}


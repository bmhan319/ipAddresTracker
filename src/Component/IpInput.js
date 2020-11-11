import React from 'react'

export default function IpInput(props) {
  return (
    <div>
      <form className="ip-form" onSubmit={props.handleSubmit}>
        <input className="ip-input" title="IP Input" onChange={props.handleInput} placeholder="Search for any IP address" type="text" minLength="7" maxLength="15" size="15" pattern="^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$" />
        <button className="ip-submit" title="submit" type="submit"></button>
      </form>
    </div>
  )
}


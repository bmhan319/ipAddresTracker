import React from 'react'

export default function IpInput(props) {
  return (
    <div>
      <form className="ip-form" onSubmit={props.handleSubmit}>
        <input className="ip-input" onChange={props.handleInput} placeholder="Search for any IP address" type="number" /*type="text" minLength="7" maxLength="15" size="15" pattern="^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$"*/ />
        <button className="ip-submit" type="submit"></button>
      </form>
    </div>
  )
}


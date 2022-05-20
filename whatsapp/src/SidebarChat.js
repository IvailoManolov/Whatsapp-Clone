import React from 'react'
import { Avatar } from "@mui/material"
import "./SidebarChat.css"

function SidebarChat() {
  return (
    <div className="sidebarChat">
        <Avatar src="photo.jpg"/>
        <div className="siderbarChat__info">
            <h2> Ivaylo Manolov </h2>
            <p>This is the last message send</p>
        </div>
        </div>
  )
}

export default SidebarChat
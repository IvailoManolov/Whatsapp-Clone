import React from 'react'
import { Avatar, IconButton } from "@mui/material"
import DonutLargeIcon from '@mui/icons-material/DonutLarge'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import ChatIcon from '@mui/icons-material/Chat'
import CardHeader from '@mui/material/CardHeader';
import SearchOutlined from '@mui/icons-material/SearchOutlined'
import "./MainSideBar.css"
import SidebarChat from "./SidebarChat"

function MainSideBar()
{
    return(
        <div className="Sidebar">
            <div className="Sidebar__header">

                <div className="Sidebar__headerRight">
                
                    <IconButton disabled= "true">
                        <CardHeader
                            avatar=
                                {
                                <Avatar
                                    src="photo.jpg"
                                />
                                }
                        />
                        <DonutLargeIcon/>
                    </IconButton>
                    

                    <IconButton>
                        <ChatIcon/>
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>

                </div>
            </div>
            
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <div className="iconTest">

                    <SearchOutlined/>
                    </div>
                    <input placeholder='Search or start a new chat' type="text" />
                </div>
            </div>

            <div className="sidebar__Chats">
                <SidebarChat/>

                <SidebarChat/>

                <SidebarChat/>
            </div>
        </div>
    )
}

export default MainSideBar
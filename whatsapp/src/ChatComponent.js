import React from 'react'
import { Avatar, CardHeader, IconButton } from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert'
import ChatIcon from '@mui/icons-material/Chat'
import "./ChatComponent.css"
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon"
import MicIcon from "@mui/icons-material/Mic"

function ChatComponent()
{
    return(
        <div className="Chat">
            <div className="Chat__header">
            <CardHeader
                            avatar=
                                {
                                <Avatar
                                    src="photo.jpg"
                                />
                                }
                        />

            <div className="Chat__header__info">
                <h3>Room name</h3>
                <p>Last seen at...</p>
            </div>
            <div className="Chat__header__right">
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
            </div>
            </div>
            <div className="Chat__body">
                <p className='Chat__message'>
                    <span className = "Chat__name">Sonny </span>

                    This is a message

                    <span className = "Chat__timeStamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className='Chat__message Chat__receiver'>
                    <span className = "Chat__name">Sonny </span>

                    This is a message

                    <span className = "Chat__timeStamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className='Chat__message Chat__receiver'>
                    <span className = "Chat__name">Sonny </span>

                    This is a message

                    <span className = "Chat__timeStamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className='Chat__message'>
                    <span className = "Chat__name">Sonny </span>

                    This is a message

                    <span className = "Chat__timeStamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className='Chat__message'>
                    <span className = "Chat__name">Sonny </span>

                    This is a message

                    <span className = "Chat__timeStamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
            </div>

            <div className="Chat__footer">
                <InsertEmoticonIcon/>
                <form >
                    <input placeholder = "Type a message"
                    type = "text"/>
                    <button type = "submit">
                        Send a message
                    </button>
                </form>
                <MicIcon/>
            </div>
        </div>
    )
}

export default ChatComponent
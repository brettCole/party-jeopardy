'use client';
import React, { FC, PropsWithChildren, useState } from 'react';
import RoomButton from "@/app/designateRoom/RoomButton";
import CreateEnterRoom from "@/app/designateRoom/CreateEnterRoom";

const EnterRoomDetails: FC<PropsWithChildren> = () => {
    const [createRoom, setCreateRoom] = useState(false);
    const [enterRoom, setEnterRoom] = useState(false);
    // const [roomName, setRoomName] = useState('');

    const handleCreateRoom = () => {
        if (enterRoom) {
            setEnterRoom(!enterRoom);
            setCreateRoom(!createRoom);
        }
        setCreateRoom(!createRoom);
    }

    const handleEnterRoom = () => {
        if (createRoom) {
            setCreateRoom(!createRoom);
            setEnterRoom(!enterRoom);
        }
        setEnterRoom(!enterRoom);
    }

    const WhichRoomDetails = () => {
        if (createRoom) {
            return (
                <CreateEnterRoom
                    roomModalState={createRoom}
                    roomNameInstructions={'Create Room Name or Room #'}
                    roomPassword={'Create Password for Room'}
                    // clickFunction={}
                />
            )
        } else if (enterRoom) {
            return (
                <CreateEnterRoom
                    roomModalState={enterRoom}
                    roomNameInstructions={'Enter Room Name or Room #'}
                    roomPassword={'Enter if given Password'}
                    // clickFunction={}
                />
            )
        } else {
            return null;
        }
    }

    return (
        <>
            <div className='flex flex-col w-64 m-auto h-screen justify-center items-center gap-4'>
                <RoomButton clickFunction={handleCreateRoom}>Create Room</RoomButton>
                <RoomButton clickFunction={handleEnterRoom}>Enter Room</RoomButton>
            </div>
            <WhichRoomDetails />
        </>
    )
}

export default EnterRoomDetails;
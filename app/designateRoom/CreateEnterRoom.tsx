'use client';
import { ChangeEvent, FC, PropsWithChildren, SyntheticEvent, useState} from 'react';
import { useRouter } from "next/navigation";
import useJeopardyFunctionality from "@/appState/JeopardyFunctionality";

type CreateEnterRoomProps = {
  roomModalState: boolean,
  roomNameInstructions: string,
  roomPassword: string
};

const CreateEnterRoom: FC<PropsWithChildren<CreateEnterRoomProps>> = ({
  roomModalState,
  roomNameInstructions,
  roomPassword
}) => {
  const [formDetails, setFormDetails] = useState({
    roomName: "",
    roomPassword: ""
  });
  const updateName = useJeopardyFunctionality((state) => (state.updateRoomName))
  const { push } = useRouter();

  const handleFormDetails = (e:ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setFormDetails((formDetails) => ({
      ...formDetails,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e:SyntheticEvent) => {
    e.preventDefault();
    console.log(e);

    updateName(formDetails.roomName);
    push('/bible-jeopardy')
  }

  return (
    <>
      <input
        type='checkbox'
        id='create-enter-room'
        className='modal-toggle'
        defaultChecked={roomModalState}
      />
      <div className='modal'>
        <div className='modal-box w-8/12 flex flex-col'>
          <h3 className='text-xl text-center mb-8'>Room Details</h3>
          <form className='flex flex-col items-center' onSubmit={(e) => handleSubmit(e)}>
            <div className='my-3.5 flex flex-col items-center'>
              <label htmlFor='roomName'>{roomNameInstructions}</label>
              <input
                className='mt-2'
                name='roomName'
                type='text'
                value={formDetails.roomName}
                onChange={(e) => handleFormDetails(e)}
              />
            </div>
            <div className='my-3.5 flex flex-col items-center'>
              <label htmlFor='roomPassword'>{roomPassword}</label>
              <input
                className='mt-2'
                name='roomPassword'
                type='password'
                onChange={(e) => handleFormDetails(e)}
              />
            </div>
            <button className='mt-7 border border-jeopardyYellow py-2 w-1/2' type='submit'>Enter Room</button>
          </form>
          <div className='modal-action'>
            <label htmlFor='create-enter-room' className='btn'>Close!</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateEnterRoom;
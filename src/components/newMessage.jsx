import { ChatCircleText } from '@phosphor-icons/react';

function NewMessage({ addNewNode }) {
    // on clicking the button, creates a new node with a default message of 'random text'
    return <button className='outline-0 border-2 border-slate-400 border-solid p-2 rounded flex flex-col justify-center flex-nowrap items-center min-w-48 m-3' onClick={() => addNewNode('random text')}>
        <ChatCircleText size={32} color='#0284c7' />
        <div className='text-sky-600'>Message</div>
    </button>
}

export default NewMessage;
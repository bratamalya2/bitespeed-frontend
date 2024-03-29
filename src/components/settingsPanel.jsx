import { Rewind } from '@phosphor-icons/react';

function SettingsPanel({ setIsNodeSelected, nodes, setNodes, currentNodeSelected }) {
    return <div className={`w-80 h-[${window.innerHeight - 96}px] !border-l-2 !border-l-slate-400 !border-l-solid`}>
        <nav className='flex p-3 border-b border-b-black'>
            <Rewind size={32} weight='thin' onClick={() => setIsNodeSelected(false)} />
            {/* renders Nodes Panel if clicked above */}
            <div className='mx-auto'>Message</div>
        </nav>
        <main className='p-5'>
            <div className='font-light text-slate-400'>Text</div>
            <textarea onChange={e => {
                //modifying nodes and updating the corresponding node with a new label value
                setNodes(curr => {
                    const newArr = [...curr];
                    const i = newArr.findIndex(x => x.id === currentNodeSelected.toString());
                    newArr[i].data.label = e.target.value;
                    return newArr;
                });
            }} className='border border-black rounded w-full h-32 my-5 p-1' defaultValue={nodes.find(x => x.id === currentNodeSelected.toString()).data.label} />
        </main>
    </div>
}

export default SettingsPanel;
import { Handle, Position } from 'reactflow';

function CustomNode({ data }) {
    // custom node created with data object as props
    // data object has following keys -> id, label, setIsNodeSelected, setCurrentNodeSelected
    // setIsNodeSelected if set as true will render Settings Panel instead of Nodes Panel
    // setCurrentNodeSelected changes the value of underlying state to the id of the node which is selected
    return (
        <>
            <div className='border border-solid outline-0 border-black p-2.5 rounded bg-sky-600 text-white' onClick={() => {
                data.setIsNodeSelected(true);
                data.setCurrentNodeSelected(data.id)
            }}>
                <p>{data.label}</p>
            </div>
            <Handle type='target' position={Position.Top} />
            <Handle type='source' position={Position.Bottom} />
        </>
    );
};

export default CustomNode;
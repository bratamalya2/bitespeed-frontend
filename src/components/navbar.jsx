import { enqueueSnackbar } from 'notistack';

function Navbar({ nodes, edges }) {
    const validateNodesAndEdges = () => {
        //validates if there are more than one nodes with empty target handles
        if (nodes.length > 1) {
            if (nodes.length - nodes.filter(node => edges.filter(edge => edge.target === node.id).length > 0).length <= 1) {
                enqueueSnackbar('Changes saved!', {
                    variant: 'success',
                }); // success notification
            }
            else
                enqueueSnackbar('Cannot save flow!', {
                    variant: 'error'
                }); //failure notification
        }
    };

    return <div className='h-24 w-full bg-slate-400 flex items-center justify-end px-12'>
        <button className='outline-0 rounded-lg border-2 border-sky-600 border-solid bg-white p-2 text-sky-600' onClick={validateNodesAndEdges}>Save Changes</button>
    </div>
}

export default Navbar;
import { useState, useCallback, useMemo } from 'react';
import { SnackbarProvider } from 'notistack';
import ReactFlow, { Background, Controls, addEdge, applyNodeChanges, applyEdgeChanges } from 'reactflow';
import 'reactflow/dist/style.css';

import Navbar from './components/navbar';
import NodesPanel from './components/nodesPanel';
import SettingsPanel from './components/settingsPanel';
import CustomNode from './components/customNode';

function App() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [currentId, setCurrentId] = useState(1);
  const currentX = 20; //current X coordinate of the next node
  const [currentY, setCurrentY] = useState(20); // current Y coordinate of the next node
  const [currentNodeSelected, setCurrentNodeSelected] = useState(null); // used to the current node selected by the user
  const [isNodeSelected, setIsNodeSelected] = useState(false); // used to check if the user clicked a particular node

  const nodeTypes = useMemo(() => ({
    messageNode: CustomNode
  }), []);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  const addNewNode = (label) => {
    // adds a new node to the nodes state
    setNodes((curr) => [...curr, {
      id: currentId.toString(),
      type: 'messageNode',
      position: {
        x: currentX,
        y: currentY
      },
      data: {
        id: currentId,
        label,
        setIsNodeSelected,
        setCurrentNodeSelected
      }
    }]);
    setCurrentY(currY => currY + 100); // updates y coordinate for the next node
    setCurrentId(currId => currId + 1); // updates the id for the next node
  };

  return (
    <SnackbarProvider>
      <Navbar nodes={nodes} edges={edges} />
      <div className='flex w-screen h-full flex-nowrap justify-between'>
        <div style={{ width: `${window.innerWidth - 320}px`, height: `${window.innerHeight - 96}px` }}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}>
            <Background />
            <Controls />
          </ReactFlow>
        </div>
        {isNodeSelected ? <SettingsPanel setIsNodeSelected={setIsNodeSelected} nodes={nodes} setNodes={setNodes} currentNodeSelected={currentNodeSelected} /> : <NodesPanel addNewNode={addNewNode} />}
      </div>
    </SnackbarProvider>
  );
}

export default App;

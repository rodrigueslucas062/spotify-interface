import ReactFlow, { Controls, Background, addEdge } from 'reactflow';
import 'reactflow/dist/style.css';
import { zinc } from 'tailwindcss/colors'
import { Square } from './nodes/Square';
import { useCallback, useState } from 'react';
import NavButton from '../../utils/navegacao/NavButton';

const INITIAL_NODES = [
    {
        id: crypto.randomUUID(),
        type: 'square',
        position: {
            x: 400,
            y: 200,
        },
        data: {},
    },
    {
        id: crypto.randomUUID(),
        type: 'square',
        position: {
            x: 800,
            y: 200,
        },
        data: {},
    }
]

const initialEdges = [];

const Whiteboard = () => {
    const [nodes, setNodes] = useState(INITIAL_NODES);
    const [edges, setEdges] = useState(initialEdges);

    const NODE_TYPES = {
        square: Square,
    }

    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

    return (
        <div className='w-screen h-screen' style={{ position: 'relative' }}>
            <ReactFlow
                nodeTypes={NODE_TYPES}
                nodes={INITIAL_NODES}
                edges={edges}
                onConnect={onConnect}
                connectionMode="loose">
                <Background color={zinc[200]} />
                <Controls />
            </ReactFlow>
            <div className='p-3' style={{ position: 'absolute', top: '10px', left: '10px' }}>
                <NavButton />
            </div>
        </div>

    );
}

export default Whiteboard;

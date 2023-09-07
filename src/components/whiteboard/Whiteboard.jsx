import ReactFlow, { Controls, Background, useEdgesState } from 'reactflow';
import 'reactflow/dist/style.css';
import { zinc } from 'tailwindcss/colors'
import { Square } from './nodes/Square';
import { useCallback } from 'react';

const Whiteboard = () => {
    const NODE_TYPES = {
        square: Square,
    }

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

    const [edges, SetEdges, onEdgesChange] = useEdgesState([])

    const onConnect = useCallback((connection) => {
        return SetEdges(edges => addEdge(connection, edges))
    }, [])

    return (
        <div className='w-screen h-screen'>
            <ReactFlow
                nodeTypes={NODE_TYPES}
                nodes={INITIAL_NODES}
                edges={edges}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                connectionMode="loose">
                <Background color={zinc[200]} />
                <Controls />
            </ReactFlow>
        </div>
    );
}

export default Whiteboard;

import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';

const Whiteboard = () => {
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <ReactFlow >
                <Background />
                <Controls />
            </ReactFlow>
        </div>
    );
}

export default Whiteboard;

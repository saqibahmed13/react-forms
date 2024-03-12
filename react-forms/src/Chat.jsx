import React, { useState } from 'react';
import styled from 'styled-components';

const MessageNode = ({ text, onTextChange }) => (
  <div>
    <input value={text} onChange={(e) => onTextChange(e.target.value)} />
  </div>
);

const NodesPanel = ({ nodes }) => (
  <NodesPanelContainer>
    {nodes.map((NodeType) => (
      <NodeType key={NodeType.name} />
    ))}
  </NodesPanelContainer>
);

const Edge = ({ source, target }) => <EdgeContainer from={source} to={target} />;

const SourceHandle = ({ node, onConnectEdge }) => (
  <SourceHandleContainer onClick={() => onConnectEdge(node)} />
);

const TargetHandle = ({ node, connectedEdges }) => (
  <TargetHandleContainer>
    {connectedEdges.map((edge) => (
      <Edge key={`${edge.from.node.id}-${edge.to.node.id}`} {...edge} />
    ))}
  </TargetHandleContainer>
);

const SaveButton = ({ onSave }) => (
  <SaveButtonContainer onClick={onSave}>
    Save
  </SaveButtonContainer>
);

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const NodesPanelContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const EdgeContainer = styled.div`
  width: 1px;
  height: 100%;
  background-color: #ccc;
`;

const SourceHandleContainer = styled.div`
  width: 10px;
  height: 10px;
  background-color: #f00;
  border-radius: 50%;
  cursor: pointer;
`;

const TargetHandleContainer = styled.div`
  position: relative;
  width: 10px;
  height: 10px;
  background-color: #f00;
  border-radius: 50%;
`;

const SaveButtonContainer = styled.div`
  padding: 10px;
  background-color: #00f;
  color: #fff;
  cursor: pointer;
`;

const ChatbotFlowBuilder = () => {
  const [flow, setFlow] = useState([]);

  const addNode = (node) => {
    setFlow([...flow, node]);
  };

  const onSave = () => {
    const hasEmptyTargetHandles = flow.some((node) => node.targetHandles.some((handle) => !handle.connectedEdge));

    if (hasEmptyTargetHandles) {
      alert('Please connect all Target Handles before saving.');
      return;
    }

    // Save the flow
    console.log('Saved flow:', flow);
  };

  return (
    <Container>
      <NodesPanel nodes={[MessageNode]} />
      {flow.map((node, index) => (
        <div key={index}>
          {node}
          <SourceHandle node={node} onConnectEdge={addNode} />
          <TargetHandle node={node} connectedEdges={node.targetHandles.filter((handle) => handle.connectedEdge)} />
        </div>
      ))}
      <Edge source={{ node: flow[flow.length - 1], handle: 'source' }} target={{ node: null, handle: 'target' }} />
      <SaveButton onSave={onSave} />
    </Container>
  );
};

export default ChatbotFlowBuilder;

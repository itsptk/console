import * as React from 'react';
import { PlusIcon } from '@patternfly/react-icons';
import { chart_color_blue_300 as blueColor } from '@patternfly/react-tokens';
import { BUILDER_NODE_ADD_RADIUS } from './const';

import './PlusNodeDecorator.scss';

type PlusNodeProps = {
  x: number;
  y: number;
  onClick?: () => void;
};

const PlusNodeDecorator: React.FC<PlusNodeProps> = ({ x, y, onClick }) => {
  return (
    <g className="odc-plus-node-decorator" onClick={onClick} transform={`translate(${x}, ${y})`}>
      <circle cx={0} cy={0} r={BUILDER_NODE_ADD_RADIUS} fill={blueColor.value} />
      <g transform="translate(-6, -6)">
        <PlusIcon color="white" />
      </g>
    </g>
  );
};

export default PlusNodeDecorator;

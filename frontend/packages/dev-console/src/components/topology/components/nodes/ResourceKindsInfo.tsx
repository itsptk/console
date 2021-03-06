import * as React from 'react';
import * as _ from 'lodash';
import { modelFor, referenceForOwnerRef } from '@console/internal/module/k8s';
import { getTopologyResourceObject } from '../../topology-utils';
import { TopologyDataObject } from '../../topology-types';

type ResourceKindsInfoProps = {
  groupResources: TopologyDataObject;
  emptyKind?: string;
};

const TEXT_MARGIN = 10;
const ROW_HEIGHT = 20 + TEXT_MARGIN;

const ResourceKindsInfo: React.FC<ResourceKindsInfoProps> = ({ groupResources, emptyKind }) => {
  const resourcesData = {};
  _.forEach(groupResources, (res: TopologyDataObject) => {
    const a = getTopologyResourceObject(res);
    resourcesData[a.kind] = [...(resourcesData[a.kind] ? resourcesData[a.kind] : []), a];
  });

  const resourceTypes = _.keys(resourcesData);
  let resources = null;
  if (resourceTypes.length) {
    resources = _.map(resourceTypes, (key, index) => {
      const kindObj = modelFor(referenceForOwnerRef(resourcesData[key][0]));
      const rowY = ROW_HEIGHT * index;
      return (
        <g key={key}>
          <text y={rowY} textAnchor="end">
            {resourcesData[key].length}
          </text>
          <text x={TEXT_MARGIN} y={rowY}>
            {resourcesData[key].length > 1 ? kindObj.labelPlural : kindObj.label}
          </text>
        </g>
      );
    });
  } else if (emptyKind) {
    const kindObj = modelFor(emptyKind);
    resources = (
      <g>
        <text textAnchor="end">0</text>
        <text x={TEXT_MARGIN}>{kindObj ? kindObj.labelPlural : emptyKind}</text>
      </g>
    );
  }

  return <g className="odc-resource-kinds-info__resources">{resources}</g>;
};

export default ResourceKindsInfo;

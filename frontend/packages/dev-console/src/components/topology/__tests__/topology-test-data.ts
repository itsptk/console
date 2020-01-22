import { FirehoseResult } from '@console/internal/components/utils';
import { DeploymentKind, PodKind } from '@console/internal/module/k8s';
import { Model } from '@console/topology';
import { TopologyDataModel, TopologyDataResources } from '../topology-types';

export const resources: TopologyDataResources = {
  replicationControllers: { loaded: true, loadError: '', data: [] },
  pods: { loaded: true, loadError: '', data: [] },
  deploymentConfigs: { loaded: true, loadError: '', data: [] },
  services: { loaded: true, loadError: '', data: [] },
  routes: { loaded: true, loadError: '', data: [] },
  deployments: { loaded: true, loadError: '', data: [] },
  replicaSets: { loaded: true, loadError: '', data: [] },
  buildConfigs: { loaded: true, loadError: '', data: [] },
  builds: { loaded: true, loadError: '', data: [] },
  daemonSets: { loaded: true, loadError: '', data: [] },
  statefulSets: { loaded: true, loadError: '', data: [] },
  pipelineRuns: { loaded: true, loadError: '', data: [] },
  pipelines: { loaded: true, loadError: '', data: [] },
};

export const topologyData: TopologyDataModel = {
  graph: { nodes: [], edges: [], groups: [] },
  topology: {},
};

export const sampleDeploymentConfigs: FirehoseResult = {
  loaded: true,
  loadError: '',
  data: [
    {
      kind: 'DeploymentConfig',
      apiVersion: 'apps/v1',
      metadata: {
        name: 'nodejs',
        namespace: 'testproject1',
        selfLink: '/apis/apps.openshift.io/v1/namespaces/testproject1/deploymentconfigs/nodejs',
        uid: '02f680df-680f-11e9-b69e-5254003f9382',
        resourceVersion: '732186',
        generation: 2,
        creationTimestamp: '2019-04-22T11:58:33Z',
        labels: {
          app: 'nodejs',
          'app.kubernetes.io/instance': 'nodejs',
          'app.openshift.io/runtime': 'nodejs',
        },
        annotations: {
          'app.openshift.io/vcs-uri': 'https://github.com/redhat-developer/topology-example',
          'app.openshift.io/vcs-ref': 'master',
        },
      },
      spec: {
        strategy: {
          type: 'Rolling',
        },
        template: {
          metadata: {
            creationTimestamp: null,
            labels: {
              app: 'nodejs',
              deploymentconfig: 'nodejs',
            },
          },
          spec: {},
        },
      },
      status: {
        availableReplicas: 1,
        unavailableReplicas: 0,
        latestVersion: 1,
        updatedReplicas: 1,
        replicas: 1,
        readyReplicas: 1,
      },
    },
  ],
};
export const sampleDeployments: FirehoseResult<DeploymentKind[]> = {
  loaded: true,
  loadError: '',
  data: [
    {
      kind: 'Deployment',
      apiVersion: 'apps/v1',
      metadata: {
        annotations: {
          'app.openshift.io/connects-to': '["wit"]',
        },
        selfLink: '/apis/apps/v1/namespaces/testproject1/deployments/analytics-deployment',
        resourceVersion: '753748',
        name: 'analytics-deployment',
        uid: '5ca9ae28-680d-11e9-8c69-5254003f9382',
        creationTimestamp: '2019-04-22T11:35:37Z',
        generation: 5,
        namespace: 'testproject1',
        labels: {
          'app.kubernetes.io/component': 'backend',
          'app.kubernetes.io/instance': 'analytics',
          'app.kubernetes.io/name': 'python',
          'app.kubernetes.io/part-of': 'application-1',
          'app.kubernetes.io/version': '1.0',
        },
      },
      spec: {
        replicas: 3,
        selector: {
          matchLabels: {
            'app.kubernetes.io/component': 'backend',
            'app.kubernetes.io/instance': 'analytics',
            'app.kubernetes.io/name': 'python',
            'app.kubernetes.io/part-of': 'application-1',
            'app.kubernetes.io/version': '1.0',
          },
        },
        template: {
          metadata: {
            creationTimestamp: null,
            labels: {
              'app.kubernetes.io/component': 'backend',
              'app.kubernetes.io/instance': 'analytics',
              'app.kubernetes.io/name': 'python',
              'app.kubernetes.io/part-of': 'application-1',
              'app.kubernetes.io/version': '1.0',
            },
          },
          spec: {
            containers: [],
          },
        },
        strategy: {
          type: 'RollingUpdate',
          rollingUpdate: {
            maxUnavailable: '25%',
            maxSurge: '25%',
          },
        },
        revisionHistoryLimit: 10,
        progressDeadlineSeconds: 600,
      },
      status: {},
    },
    {
      apiVersion: 'apps/v1',
      kind: 'Deployment',
      metadata: {
        annotations: {
          'deployment.kubernetes.io/revision': '1',
        },
        selfLink: '/apis/apps/v1/namespaces/testproject1/deployments/wit-deployment',
        resourceVersion: '726179',
        name: 'wit-deployment',
        uid: '60a9b423-680d-11e9-8c69-5254003f9382',
        creationTimestamp: '2019-04-22T11:35:43Z',
        generation: 2,
        namespace: 'testproject1',
        labels: {
          'app.kubernetes.io/component': 'backend',
          'app.kubernetes.io/instance': 'wit',
          'app.kubernetes.io/name': 'nodejs',
          'app.kubernetes.io/part-of': 'application-1',
          'app.kubernetes.io/version': '1.0',
        },
      },
      spec: {
        replicas: 3,
        selector: {
          matchLabels: {
            'app.kubernetes.io/component': 'backend',
            'app.kubernetes.io/instance': 'wit',
            'app.kubernetes.io/name': 'nodejs',
            'app.kubernetes.io/part-of': 'application-1',
            'app.kubernetes.io/version': '1.0',
          },
        },
        template: {
          metadata: {
            creationTimestamp: null,
            labels: {
              'app.kubernetes.io/component': 'backend',
              'app.kubernetes.io/instance': 'wit',
              'app.kubernetes.io/name': 'nodejs',
              'app.kubernetes.io/part-of': 'application-1',
              'app.kubernetes.io/version': '1.0',
            },
          },
          spec: {
            containers: [],
          },
        },
        strategy: {
          type: 'RollingUpdate',
          rollingUpdate: {
            maxUnavailable: '25%',
            maxSurge: '25%',
          },
        },
        revisionHistoryLimit: 10,
        progressDeadlineSeconds: 600,
      },
      status: {},
    },
    {
      metadata: {
        annotations: {
          'deployment.kubernetes.io/revision': '1',
          'prometheus.io/port': '14269',
          'prometheus.io/scrape': 'true',
          'sidecar.istio.io/inject': 'false',
        },
        selfLink: '/apis/apps/v1/namespaces/myproj/deployments/jaeger-all-in-one-inmemory',
        resourceVersion: '120365',
        name: 'jaeger-all-in-one-inmemory',
        uid: 'c73277f2-e85c-477c-a43d-330a5d0b2cf6',
        creationTimestamp: '2019-12-15T17:31:52Z',
        generation: 1,
        namespace: 'myproj',
        ownerReferences: [
          {
            apiVersion: 'jaegertracing.io/v1',
            kind: 'Jaeger',
            name: 'jaeger-all-in-one-inmemory',
            uid: '3006a8f3-6e2b-4a19-b37e-fbddd9a41f51',
            controller: true,
          },
        ],
        labels: {
          app: 'jaeger',
          'app.kubernetes.io/component': 'all-in-one',
          'app.kubernetes.io/instance': 'jaeger-all-in-one-inmemory',
          'app.kubernetes.io/managed-by': 'jaeger-operator',
          'app.kubernetes.io/name': 'jaeger-all-in-one-inmemory',
          'app.kubernetes.io/part-of': 'jaeger',
        },
      },
      spec: {
        replicas: 1,
        selector: {
          matchLabels: {
            app: 'jaeger',
            'app.kubernetes.io/component': 'all-in-one',
            'app.kubernetes.io/instance': 'jaeger-all-in-one-inmemory',
            'app.kubernetes.io/managed-by': 'jaeger-operator',
            'app.kubernetes.io/name': 'jaeger-all-in-one-inmemory',
            'app.kubernetes.io/part-of': 'jaeger',
          },
        },
        template: {
          metadata: {
            creationTimestamp: null,
            labels: {
              app: 'jaeger',
              'app.kubernetes.io/component': 'all-in-one',
              'app.kubernetes.io/instance': 'jaeger-all-in-one-inmemory',
              'app.kubernetes.io/managed-by': 'jaeger-operator',
              'app.kubernetes.io/name': 'jaeger-all-in-one-inmemory',
              'app.kubernetes.io/part-of': 'jaeger',
            },
            annotations: {
              'prometheus.io/port': '14269',
              'prometheus.io/scrape': 'true',
              'sidecar.istio.io/inject': 'false',
            },
          },
          spec: {
            restartPolicy: 'Always',
            serviceAccountName: 'jaeger-all-in-one-inmemory-ui-proxy',
            schedulerName: 'default-scheduler',
            terminationGracePeriodSeconds: 30,
            securityContext: {},
            containers: [],
            serviceAccount: 'jaeger-all-in-one-inmemory-ui-proxy',
            volumes: [],
            dnsPolicy: 'ClusterFirst',
          },
        },
        strategy: {
          type: 'RollingUpdate',
          rollingUpdate: {
            maxUnavailable: '25%',
            maxSurge: '25%',
          },
        },
        revisionHistoryLimit: 10,
        progressDeadlineSeconds: 600,
      },
      status: {
        observedGeneration: 1,
        replicas: 1,
        updatedReplicas: 1,
        readyReplicas: 1,
        availableReplicas: 1,
        conditions: [],
      },
      apiVersion: 'apps/v1',
      kind: 'Deployment',
    },
  ],
};

export const samplePods: FirehoseResult<PodKind[]> = {
  loaded: true,
  loadError: '',
  data: [
    {
      apiVersion: 'v1',
      kind: 'Pod',
      metadata: {
        generateName: 'analytics-deployment-59dd7c47d4-',
        annotations: {
          'openshift.io/scc': 'restricted',
        },
        selfLink: '/api/v1/namespaces/testproject3/pods/analytics-deployment-59dd7c47d4-2jp7t',
        resourceVersion: '1395096',
        name: 'analytics-deployment-59dd7c47d4-2jp7t',
        uid: '5cec460e-680d-11e9-8c69-5254003f9382',
        creationTimestamp: '2019-04-26T10:23:41Z',
        namespace: 'testproject3',
        ownerReferences: [
          {
            apiVersion: 'apps/v1',
            kind: 'ReplicaSet',
            name: 'analytics-deployment-59dd7c47d4',
            uid: '5cad37cb-680d-11e9-8c69-5254003f9382',
            controller: true,
            blockOwnerDeletion: true,
          },
        ],
        labels: {
          'app.kubernetes.io/component': 'backend',
          'app.kubernetes.io/instance': 'analytics',
          'app.kubernetes.io/name': 'python',
          'app.kubernetes.io/part-of': 'application-1',
          'app.kubernetes.io/version': '1.0',
          'pod-template-hash': '1588370380',
        },
      },
      spec: {
        containers: [],
      },
      status: {
        phase: 'Running',
      },
    },
    {
      apiVersion: 'v1',
      kind: 'Pod',
      metadata: {
        generateName: 'analytics-deployment-59dd7c47d4-',
        annotations: {
          'openshift.io/scc': 'restricted',
        },
        selfLink: '/api/v1/namespaces/testproject3/pods/analytics-deployment-59dd7c47d4-6btjb',
        resourceVersion: '1394896',
        name: 'analytics-deployment-59dd7c47d4-6btjb',
        uid: 'c4592a49-683c-11e9-8c69-5254003f9382',
        creationTimestamp: '2019-04-26T16:03:01Z',
        namespace: 'testproject3',
        ownerReferences: [
          {
            apiVersion: 'apps/v1',
            kind: 'ReplicaSet',
            name: 'analytics-deployment-59dd7c47d4',
            uid: '5cad37cb-680d-11e9-8c69-5254003f9382',
            controller: true,
            blockOwnerDeletion: true,
          },
        ],
        labels: {
          'app.kubernetes.io/component': 'backend',
          'app.kubernetes.io/instance': 'analytics',
          'app.kubernetes.io/name': 'python',
          'app.kubernetes.io/part-of': 'application-1',
          'app.kubernetes.io/version': '1.0',
          'pod-template-hash': '1588370380',
        },
      },
      spec: {
        containers: [],
      },

      status: {
        phase: 'Running',
      },
    },
    {
      apiVersion: 'v1',
      kind: 'Pod',
      metadata: {
        generateName: 'analytics-deployment-59dd7c47d4-',
        annotations: {
          'openshift.io/scc': 'restricted',
        },
        selfLink: '/api/v1/namespaces/testproject3/pods/analytics-deployment-59dd7c47d4-n4zrh',
        resourceVersion: '1394826',
        name: 'analytics-deployment-59dd7c47d4-n4zrh',
        uid: '5cec1049-680d-11e9-8c69-5254003f9382',
        creationTimestamp: '2019-04-26T10:23:41Z',
        namespace: 'testproject3',
        ownerReferences: [
          {
            apiVersion: 'apps/v1',
            kind: 'ReplicaSet',
            name: 'analytics-deployment-59dd7c47d4',
            uid: '5cad37cb-680d-11e9-8c69-5254003f9382',
            controller: true,
            blockOwnerDeletion: true,
          },
        ],
        labels: {
          'app.kubernetes.io/component': 'backend',
          'app.kubernetes.io/instance': 'analytics',
          'app.kubernetes.io/name': 'python',
          'app.kubernetes.io/part-of': 'application-1',
          'app.kubernetes.io/version': '1.0',
          'pod-template-hash': '1588370380',
        },
      },
      spec: {
        containers: [],
      },

      status: {
        phase: 'Running',
      },
    },
    {
      apiVersion: 'v1',
      kind: 'Pod',
      metadata: {
        generateName: 'nodejs-1-',
        annotations: {
          'openshift.io/deployment-config.latest-version': '1',
          'openshift.io/deployment-config.name': 'nodejs',
          'openshift.io/deployment.name': 'nodejs-1',
          'openshift.io/scc': 'restricted',
        },
        selfLink: '/api/v1/namespaces/testproject3/pods/nodejs-1-2v82p',
        resourceVersion: '1161178',
        name: 'nodejs-1-2v82p',
        uid: '19e6c6a5-680f-11e9-8c69-5254003f9382',
        creationTimestamp: '2019-04-26T10:36:07Z',
        namespace: 'testproject3',
        ownerReferences: [
          {
            apiVersion: 'v1',
            kind: 'ReplicationController',
            name: 'nodejs-1',
            uid: '18c94ccd-680f-11e9-8c69-5254003f9382',
            controller: true,
            blockOwnerDeletion: true,
          },
        ],
        labels: {
          app: 'nodejs',
          deployment: 'nodejs-1',
          deploymentconfig: 'nodejs',
        },
      },
      spec: {
        containers: [],
      },

      status: {
        phase: 'Running',
      },
    },
    {
      apiVersion: 'v1',
      kind: 'Pod',
      metadata: {
        annotations: {
          'openshift.io/build.name': 'nodejs-1',
          'openshift.io/scc': 'privileged',
        },
        selfLink: '/api/v1/namespaces/testproject3/pods/nodejs-1-build',
        resourceVersion: '1161133',
        name: 'nodejs-1-build',
        uid: '0361f689-680f-11e9-8c69-5254003f9382',
        creationTimestamp: '2019-04-26T10:35:30Z',
        namespace: 'testproject3',
        ownerReferences: [
          {
            apiVersion: 'build.openshift.io/v1',
            kind: 'Build',
            name: 'nodejs-1',
            uid: '0335fc81-680f-11e9-b69e-5254003f9382',
            controller: true,
          },
        ],
        labels: {
          'openshift.io/build.name': 'nodejs-1',
        },
      },
      spec: {
        containers: [],
      },

      status: {
        phase: 'Succeeded',
      },
    },
    {
      apiVersion: 'v1',
      kind: 'Pod',
      metadata: {
        generateName: 'wit-deployment-656cc8b469-',
        annotations: {
          'openshift.io/scc': 'restricted',
        },
        selfLink: '/api/v1/namespaces/testproject3/pods/wit-deployment-656cc8b469-2n6nl',
        resourceVersion: '1394776',
        name: 'wit-deployment-656cc8b469-2n6nl',
        uid: '610c7d95-680d-11e9-8c69-5254003f9382',
        creationTimestamp: '2019-04-26T10:23:48Z',
        namespace: 'testproject3',
        ownerReferences: [
          {
            apiVersion: 'apps/v1',
            kind: 'ReplicaSet',
            name: 'wit-deployment-656cc8b469',
            uid: '60a9b423-680d-11e9-8c69-5254003f9382',
            controller: true,
            blockOwnerDeletion: true,
          },
        ],
        labels: {
          'app.kubernetes.io/component': 'backend',
          'app.kubernetes.io/instance': 'wit',
          'app.kubernetes.io/name': 'nodejs',
          'app.kubernetes.io/part-of': 'application-1',
          'app.kubernetes.io/version': '1.0',
          'pod-template-hash': '2127746025',
        },
      },
      spec: {
        containers: [],
      },

      status: {
        phase: 'Running',
      },
    },
    {
      apiVersion: 'v1',
      kind: 'Pod',
      metadata: {
        generateName: 'wit-deployment-656cc8b469-',
        annotations: {
          'openshift.io/scc': 'restricted',
        },
        selfLink: '/api/v1/namespaces/testproject3/pods/wit-deployment-656cc8b469-kzh9c',
        resourceVersion: '1394914',
        name: 'wit-deployment-656cc8b469-kzh9c',
        uid: '60dbfd78-680d-11e9-8c69-5254003f9382',
        creationTimestamp: '2019-04-26T10:23:48Z',
        namespace: 'testproject3',
        ownerReferences: [
          {
            apiVersion: 'apps/v1',
            kind: 'ReplicaSet',
            name: 'wit-deployment-656cc8b469',
            uid: '60a9b423-680d-11e9-8c69-5254003f9382',
            controller: true,
            blockOwnerDeletion: true,
          },
        ],
        labels: {
          'app.kubernetes.io/component': 'backend',
          'app.kubernetes.io/instance': 'wit',
          'app.kubernetes.io/name': 'nodejs',
          'app.kubernetes.io/part-of': 'application-1',
          'app.kubernetes.io/version': '1.0',
          'pod-template-hash': '2127746025',
        },
      },
      spec: {
        containers: [],
      },
      status: {
        phase: 'Running',
      },
    },
    {
      apiVersion: 'v1',
      kind: 'Pod',
      metadata: {
        generateName: 'wit-deployment-656cc8b469-',
        annotations: {
          'openshift.io/scc': 'restricted',
        },
        selfLink: '/api/v1/namespaces/testproject3/pods/wit-deployment-656cc8b469-r5nlj',
        resourceVersion: '1395115',
        name: 'wit-deployment-656cc8b469-r5nlj',
        uid: '610bbd96-680d-11e9-8c69-5254003f9382',
        creationTimestamp: '2019-04-26T10:23:48Z',
        namespace: 'testproject3',
        ownerReferences: [
          {
            apiVersion: 'apps/v1',
            kind: 'ReplicaSet',
            name: 'wit-deployment-656cc8b469',
            uid: '60a9b423-680d-11e9-8c69-5254003f9382',
            controller: true,
            blockOwnerDeletion: true,
          },
        ],
        labels: {
          'app.kubernetes.io/component': 'backend',
          'app.kubernetes.io/instance': 'wit',
          'app.kubernetes.io/name': 'nodejs',
          'app.kubernetes.io/part-of': 'application-1',
          'app.kubernetes.io/version': '1.0',
          'pod-template-hash': '2127746025',
        },
      },
      spec: {
        containers: [],
      },
      status: {
        phase: 'Running',
      },
    },
    {
      kind: 'Pod',
      apiVersion: 'v1',
      metadata: {
        generateName: 'daemonset-testing-',
        annotations: {
          'k8s.v1.cni.cncf.io/networks-status':
            '[{\n    "name": "openshift-sdn",\n    "interface": "eth0",\n    "ips": [\n        "10.128.0.89"\n    ],\n    "default": true,\n    "dns": {}\n}]',
          'openshift.io/scc': 'restricted',
        },
        selfLink: '/api/v1/namespaces/testing/pods/daemonset-testing-62h94',
        resourceVersion: '700638',
        name: 'daemonset-testing-62h94',
        uid: '0c4dd58f-a6e6-11e9-a20f-52fdfc072182',
        creationTimestamp: '2019-07-15T09:50:59Z',
        namespace: 'testing',
        ownerReferences: [
          {
            apiVersion: 'apps/v1',
            kind: 'DaemonSet',
            name: 'daemonset-testing',
            uid: '0c4a82c9-a6e6-11e9-a20f-52fdfc072182',
            controller: true,
            blockOwnerDeletion: true,
          },
        ],
        labels: {
          app: 'hello-openshift',
          'controller-revision-hash': '5b58864494',
          'pod-template-generation': '1',
        },
      },
      spec: {
        containers: [],
      },
      status: {
        phase: 'Pending',
        startTime: '2019-07-15T09:50:59Z',
      },
    },
    {
      kind: 'Pod',
      apiVersion: 'v1',
      metadata: {
        name: 'alertmanager-main-0',
        generateName: 'alertmanager-main-',
        namespace: 'openshift-monitoring',
        selfLink: '/api/v1/namespaces/openshift-monitoring/pods/alertmanager-main-0',
        uid: 'db4924ec-adfb-11e9-ac86-062ae0b85aca',
        resourceVersion: '14171',
        creationTimestamp: '2019-07-24T10:14:43Z',
        labels: {
          alertmanager: 'main',
          app: 'alertmanager',
          'controller-revision-hash': 'alertmanager-main-5b9d487b7f',
          'statefulset.kubernetes.io/pod-name': 'alertmanager-main-0',
        },
        annotations: {
          'openshift.io/scc': 'restricted',
        },
        ownerReferences: [
          {
            apiVersion: 'apps/v1',
            kind: 'StatefulSet',
            name: 'alertmanager-main',
            uid: 'db365c19-adfb-11e9-ac86-062ae0b85aca',
            controller: true,
            blockOwnerDeletion: true,
          },
        ],
      },
      spec: {
        containers: [],
      },
      status: {
        phase: 'Running',
        startTime: '2019-07-24T10:14:56Z',
      },
    },
  ],
};

export const sampleReplicationControllers: FirehoseResult = {
  loaded: true,
  loadError: '',
  data: [
    {
      apiVersion: 'v1',
      kind: 'ReplicationController',
      metadata: {
        annotations: {
          'openshift.io/deployment-config.name': 'nodejs',
          'openshift.io/deployer-pod.completed-at': '2019-04-26 10:36:10 +0000 UTC',
          'openshift.io/deployment.phase': 'Complete',
        },
        selfLink: '/api/v1/namespaces/testproject3/replicationcontrollers/nodejs-1',
        resourceVersion: '1161189',
        name: 'nodejs-1',
        uid: '18c94ccd-680f-11e9-8c69-5254003f9382',
        creationTimestamp: '2019-04-26T10:36:06Z',
        generation: 2,
        namespace: 'testproject3',
        ownerReferences: [
          {
            apiVersion: 'apps.openshift.io/v1',
            kind: 'DeploymentConfig',
            name: 'nodejs',
            uid: '02f680df-680f-11e9-b69e-5254003f9382',
            controller: true,
            blockOwnerDeletion: true,
          },
        ],
        labels: {
          app: 'nodejs',
          'openshift.io/deployment-config.name': 'nodejs',
        },
      },
      spec: {},
      status: {
        replicas: 1,
        fullyLabeledReplicas: 1,
        readyReplicas: 1,
        availableReplicas: 1,
        observedGeneration: 2,
      },
    },
  ],
};

export const sampleReplicaSets: FirehoseResult = {
  loaded: true,
  loadError: '',
  data: [
    {
      kind: 'ReplicaSet',
      apiVersion: 'apps/v1',
      metadata: {
        annotations: {
          'app.openshift.io/connects-to': '["wit"]',
          'deployment.kubernetes.io/desired-replicas': '3',
          'deployment.kubernetes.io/max-replicas': '4',
          'deployment.kubernetes.io/revision': '1',
          'deployment.kubernetes.io/revision-history': '1,1,1',
        },
        selfLink:
          '/apis/apps/v1/namespaces/testproject3/replicasets/analytics-deployment-59dd7c47d4',
        resourceVersion: '1398999',
        name: 'analytics-deployment-59dd7c47d4',
        uid: '5cad37cb-680d-11e9-8c69-5254003f9382',
        creationTimestamp: '2019-04-26T10:23:41Z',
        generation: 3,
        namespace: 'testproject3',
        ownerReferences: [
          {
            apiVersion: 'apps/v1',
            kind: 'Deployment',
            name: 'analytics-deployment',
            uid: '5ca9ae28-680d-11e9-8c69-5254003f9382',
            controller: true,
            blockOwnerDeletion: true,
          },
        ],
        labels: {
          'app.kubernetes.io/component': 'backend',
          'app.kubernetes.io/instance': 'analytics',
          'app.kubernetes.io/name': 'python',
          'app.kubernetes.io/part-of': 'application-1',
          'app.kubernetes.io/version': '1.0',
          'pod-template-hash': '1588370380',
        },
      },
      spec: {},
      status: {
        replicas: 3,
        fullyLabeledReplicas: 3,
        observedGeneration: 3,
      },
    },
    {
      kind: 'ReplicaSet',
      metadata: {
        annotations: {
          'deployment.kubernetes.io/desired-replicas': '3',
          'deployment.kubernetes.io/max-replicas': '4',
          'deployment.kubernetes.io/revision': '1',
        },
        selfLink: '/apis/apps/v1/namespaces/testproject3/replicasets/wit-deployment-656cc8b469',
        resourceVersion: '1389053',
        name: 'wit-deployment-656cc8b469',
        uid: '60a9b423-680d-11e9-8c69-5254003f9382',
        creationTimestamp: '2019-04-26T10:23:47Z',
        generation: 1,
        namespace: 'testproject3',
        ownerReferences: [
          {
            apiVersion: 'apps/v1',
            kind: 'Deployment',
            name: 'wit-deployment',
            uid: '60a9b423-680d-11e9-8c69-5254003f9382',
            controller: true,
            blockOwnerDeletion: true,
          },
        ],
        labels: {
          'app.kubernetes.io/component': 'backend',
          'app.kubernetes.io/instance': 'wit',
          'app.kubernetes.io/name': 'nodejs',
          'app.kubernetes.io/part-of': 'application-1',
          'app.kubernetes.io/version': '1.0',
          'pod-template-hash': '2127746025',
        },
      },
      spec: {},
      status: {
        replicas: 3,
        fullyLabeledReplicas: 3,
        observedGeneration: 1,
      },
    },
  ],
};

export const sampleServices: FirehoseResult = {
  loaded: true,
  loadError: '',
  data: [
    {
      kind: 'Service',
      metadata: {
        name: 'analytics-service',
        namespace: 'testproject3',
        selfLink: '/api/v1/namespaces/testproject3/services/analytics-service',
        uid: '5cb930e0-680d-11e9-8c69-5254003f9382',
        resourceVersion: '1157349',
        creationTimestamp: '2019-04-26T10:23:41Z',
        labels: {
          'app.kubernetes.io/component': 'backend',
          'app.kubernetes.io/instance': 'analytics',
          'app.kubernetes.io/name': 'python',
          'app.kubernetes.io/part-of': 'application-1',
          'app.kubernetes.io/version': '1.0',
        },
        annotations: {
          'kubectl.kubernetes.io/last-applied-configuration':
            '{"apiVersion":"v1","kind":"Service","metadata":{"annotations":{},"labels":{"app.kubernetes.io/component":"backend","app.kubernetes.io/instance":"analytics","app.kubernetes.io/name":"python","app.kubernetes.io/part-of":"application-1","app.kubernetes.io/version":"1.0"},"name":"analytics-service","namespace":"testproject3"},"spec":{"ports":[{"port":80}],"selector":{"app.kubernetes.io/component":"backend","app.kubernetes.io/instance":"analytics","app.kubernetes.io/name":"analytics","app.kubernetes.io/part-of":"application-1","app.kubernetes.io/version":"1.0"}}}\n',
        },
      },
      spec: {
        selector: {
          'app.kubernetes.io/component': 'backend',
          'app.kubernetes.io/instance': 'analytics',
          'app.kubernetes.io/name': 'python',
          'app.kubernetes.io/part-of': 'application-1',
          'app.kubernetes.io/version': '1.0',
        },
      },
      status: {
        loadBalancer: {},
      },
    },
    {
      kind: 'Service',
      metadata: {
        name: 'nodejs',
        namespace: 'testproject3',
        selfLink: '/api/v1/namespaces/testproject3/services/nodejs',
        uid: '02f53542-680f-11e9-8c69-5254003f9382',
        resourceVersion: '1160881',
        creationTimestamp: '2019-04-26T10:35:29Z',
        labels: {
          app: 'nodejs',
        },
      },
      spec: {
        selector: {
          app: 'nodejs',
          deploymentconfig: 'nodejs',
        },
      },
      status: {
        loadBalancer: {},
      },
    },
    {
      kind: 'Service',
      metadata: {
        name: 'wit-service',
        namespace: 'testproject3',
        selfLink: '/api/v1/namespaces/testproject3/services/wit-service',
        uid: '60e010cc-680d-11e9-8c69-5254003f9382',
        resourceVersion: '1157449',
        creationTimestamp: '2019-04-26T10:23:48Z',
        labels: {
          'app.kubernetes.io/component': 'backend',
          'app.kubernetes.io/instance': 'wit',
          'app.kubernetes.io/name': 'nodejs',
          'app.kubernetes.io/part-of': 'application-1',
          'app.kubernetes.io/version': '1.0',
        },
        annotations: {
          'kubectl.kubernetes.io/last-applied-configuration':
            '{"apiVersion":"v1","kind":"Service","metadata":{"annotations":{},"labels":{"app.kubernetes.io/component":"backend","app.kubernetes.io/instance":"wit","app.kubernetes.io/name":"nodejs","app.kubernetes.io/part-of":"application-1","app.kubernetes.io/version":"1.0"},"name":"wit-service","namespace":"testproject3"},"spec":{"ports":[{"port":80}],"selector":{"app.kubernetes.io/component":"backend","app.kubernetes.io/instance":"wit","app.kubernetes.io/name":"nodejs","app.kubernetes.io/part-of":"application-1","app.kubernetes.io/version":"1.0"}}}\n',
        },
      },
      spec: {
        selector: {
          'app.kubernetes.io/component': 'backend',
          'app.kubernetes.io/instance': 'wit',
          'app.kubernetes.io/name': 'nodejs',
          'app.kubernetes.io/part-of': 'application-1',
          'app.kubernetes.io/version': '1.0',
        },
      },
      status: {
        loadBalancer: {},
      },
    },
  ],
};
export const sampleRoutes: FirehoseResult = {
  loaded: true,
  loadError: '',
  data: [
    {
      kind: 'Route',
      metadata: {
        name: 'analytics-route',
        namespace: 'testproject3',
        selfLink: '/apis/route.openshift.io/v1/namespaces/testproject3/routes/analytics-route',
        uid: '5cb4135f-680d-11e9-b69e-5254003f9382',
        resourceVersion: '1157355',
        creationTimestamp: '2019-04-26T10:23:41Z',
        labels: {
          'app.kubernetes.io/component': 'backend',
          'app.kubernetes.io/instance': 'analytics',
          'app.kubernetes.io/name': 'python',
          'app.kubernetes.io/part-of': 'application-1',
          'app.kubernetes.io/version': '1.0',
        },
        annotations: {
          'kubectl.kubernetes.io/last-applied-configuration':
            '{"apiVersion":"route.openshift.io/v1","kind":"Route","metadata":{"annotations":{},"labels":{"app.kubernetes.io/component":"backend","app.kubernetes.io/instance":"analytics","app.kubernetes.io/name":"python","app.kubernetes.io/part-of":"application-1","app.kubernetes.io/version":"1.0"},"name":"analytics-route","namespace":"testproject3"},"spec":{"host":"analytics.io","path":"/","to":{"kind":"Service","name":"analytics-service"}}}\n',
        },
      },
      spec: {
        host: 'analytics.io',
        to: {
          kind: 'Service',
          name: 'analytics-service',
          weight: 100,
        },
      },
      status: {},
    },
    {
      kind: 'Route',
      metadata: {
        name: 'nodejs',
        namespace: 'testproject3',
        selfLink: '/apis/route.openshift.io/v1/namespaces/testproject3/routes/nodejs',
        uid: '02f63696-680f-11e9-b69e-5254003f9382',
        resourceVersion: '1160889',
        creationTimestamp: '2019-04-26T10:35:29Z',
        labels: {
          app: 'nodejs',
        },
        annotations: {
          'openshift.io/host.generated': 'true',
        },
      },
      spec: {
        host: 'nodejs-testproject3.192.168.42.60.nip.io',
        to: {
          kind: 'Service',
          name: 'nodejs',
          weight: 100,
        },
      },
      status: {},
    },
    {
      kind: 'Route',
      metadata: {
        name: 'wit-route',
        namespace: 'testproject3',
        selfLink: '/apis/route.openshift.io/v1/namespaces/testproject3/routes/wit-route',
        uid: '60dba9b8-680d-11e9-b69e-5254003f9382',
        resourceVersion: '1157450',
        creationTimestamp: '2019-04-26T10:23:48Z',
        labels: {
          'app.kubernetes.io/component': 'backend',
          'app.kubernetes.io/instance': 'wit',
          'app.kubernetes.io/name': 'nodejs',
          'app.kubernetes.io/part-of': 'application-1',
          'app.kubernetes.io/version': '1.0',
        },
        annotations: {
          'kubectl.kubernetes.io/last-applied-configuration':
            '{"apiVersion":"route.openshift.io/v1","kind":"Route","metadata":{"annotations":{},"labels":{"app.kubernetes.io/component":"backend","app.kubernetes.io/instance":"wit","app.kubernetes.io/name":"nodejs","app.kubernetes.io/part-of":"application-1","app.kubernetes.io/version":"1.0"},"name":"wit-route","namespace":"testproject3"},"spec":{"host":"wit.io","path":"/","to":{"kind":"Service","name":"wit-service"}}}\n',
        },
      },
      spec: {
        host: 'wit.io',
        to: {
          kind: 'Service',
          name: 'wit-service',
          weight: 100,
        },
      },
      status: {},
    },
  ],
};

export const sampleBuildConfigs: FirehoseResult = {
  loaded: true,
  loadError: '',
  data: [
    {
      kind: 'BuildConfig',
      metadata: {
        name: 'analytics-build',
        namespace: 'testproject3',
        selfLink:
          '/apis/build.openshift.io/v1/namespaces/testproject3/buildconfigs/analytics-build',
        uid: '5ca46c49-680d-11e9-b69e-5254003f9382',
        resourceVersion: '1772624',
        creationTimestamp: '2019-04-26T10:23:40Z',
        labels: {
          'app.kubernetes.io/component': 'backend',
          'app.kubernetes.io/instance': 'user-analytics',
          'app.kubernetes.io/name': 'python',
          'app.kubernetes.io/part-of': 'application-1',
          'app.kubernetes.io/version': '1.0',
        },
        annotations: {
          'app.openshift.io/vcs-ref': 'v1.0.0',
          'app.openshift.io/vcs-uri': 'git@github.com:redhat-developer/topology-example.git',
          'kubectl.kubernetes.io/last-applied-configuration':
            '{"apiVersion":"build.openshift.io/v1","kind":"BuildConfig","metadata":{"annotations":{"app.openshift.io/vcs-ref":"v1.0.0","app.openshift.io/vcs-uri":"git@github.com:redhat-developer/topology-example.git"},"labels":{"app.kubernetes.io/component":"backend","app.kubernetes.io/instance":"user-analytics","app.kubernetes.io/name":"python","app.kubernetes.io/part-of":"application-1","app.kubernetes.io/version":"1.0"},"name":"analytics-build","namespace":"testproject3"},"spec":{"output":{"to":{"kind":"ImageStreamTag","name":"analytics-build:latest"}},"source":{"git":{"uri":"git@github.com:DhritiShikhar/topology-example.git"},"type":"Git"},"strategy":{"dockerStrategy":{"noCache":true}}}}\n',
        },
      },
      spec: {},
      status: {
        lastVersion: 1,
      },
    },
    {
      kind: 'BuildConfig',
      metadata: {
        name: 'nodejs',
        namespace: 'testproject3',
        selfLink: '/apis/build.openshift.io/v1/namespaces/testproject3/buildconfigs/nodejs',
        uid: '02fc958f-680f-11e9-b69e-5254003f9382',
        resourceVersion: '1160891',
        creationTimestamp: '2019-04-26T10:35:29Z',
        labels: {
          app: 'nodejs',
        },
      },
      spec: {},
      status: {
        lastVersion: 1,
      },
    },
    {
      kind: 'BuildConfig',
      metadata: {
        name: 'wit-build',
        namespace: 'testproject3',
        selfLink: '/apis/build.openshift.io/v1/namespaces/testproject3/buildconfigs/wit-build',
        uid: '608914d2-680d-11e9-b69e-5254003f9382',
        resourceVersion: '1157436',
        creationTimestamp: '2019-04-26T10:23:47Z',
        labels: {
          'app.kubernetes.io/component': 'backend',
          'app.kubernetes.io/instance': 'wit',
          'app.kubernetes.io/name': 'nodejs',
          'app.kubernetes.io/part-of': 'application-1',
          'app.kubernetes.io/version': '1.0',
        },
        annotations: {
          'app.openshift.io/vcs-ref': 'v1.0.0',
          'app.openshift.io/vcs-uri': 'git@github.com:redhat-developer/topology-example.git',
          'kubectl.kubernetes.io/last-applied-configuration':
            '{"apiVersion":"build.openshift.io/v1","kind":"BuildConfig","metadata":{"annotations":{"app.openshift.io/vcs-ref":"v1.0.0","app.openshift.io/vcs-uri":"git@github.com:redhat-developer/topology-example.git"},"labels":{"app.kubernetes.io/component":"backend","app.kubernetes.io/instance":"wit","app.kubernetes.io/name":"nodejs","app.kubernetes.io/part-of":"application-1","app.kubernetes.io/version":"1.0"},"name":"wit-build","namespace":"testproject3"},"spec":{"output":{"to":{"kind":"ImageStreamTag","name":"wit-build:latest"}},"source":{"git":{"uri":"git@github.com:DhritiShikhar/topology-example.git"},"type":"Git"},"strategy":{"dockerStrategy":{"noCache":true}}}}\n',
        },
      },
      spec: {},
      status: {
        lastVersion: 0,
      },
    },
  ],
};

export const sampleBuilds: FirehoseResult = {
  loaded: true,
  loadError: '',
  data: [
    {
      kind: 'Builds',
      metadata: {
        annotations: {
          'openshift.io/build-config.name': 'analytics-build',
          'openshift.io/build.number': '1',
        },
        selfLink: '/apis/build.openshift.io/v1/namespaces/testproject3/builds/analytics-build-1',
        resourceVersion: '358822',
        name: 'analytics-build-1',
        uid: '58d6b528-9c89-11e9-80f4-0a580a82001a',
        creationTimestamp: '2019-07-02T05:22:12Z',
        namespace: 'testproject3',
        ownerReferences: [
          {
            apiVersion: 'build.openshift.io/v1',
            kind: 'BuildConfig',
            name: 'analytics-build',
            uid: '5ca46c49-680d-11e9-b69e-5254003f9382',
            controller: true,
          },
        ],
        labels: {
          app: 'analytics-build',
          'app.kubernetes.io/component': 'analytics-build',
          'app.kubernetes.io/instance': 'analytics-build',
          'app.kubernetes.io/name': 'nodejs',
          'app.kubernetes.io/part-of': 'myapp',
          buildconfig: 'analytics-build',
          'openshift.io/build-config.name': 'analytics-build',
          'openshift.io/build.start-policy': 'Serial',
        },
      },
      spec: {
        serviceAccount: 'builder',
        source: {
          type: 'Git',
          git: {
            uri: 'https://github.com/fabric8-ui/fabric8-ui',
          },
          contextDir: '/',
        },
        strategy: {
          type: 'Source',
          sourceStrategy: {
            from: {
              kind: 'DockerImage',
              name:
                'image-registry.openshift-image-registry.svc:5000/openshift/nodejs@sha256:0ad231dc2d1c34ed3fb29fb304821171155e0a1a23f0e0490b2cd8ca60915517',
            },
            pullSecret: {
              name: 'builder-dockercfg-tx6qx',
            },
          },
        },
        output: {
          to: {
            kind: 'ImageStreamTag',
            name: 'analytics-build:latest',
          },
        },
        resources: {},
        postCommit: {},
        nodeSelector: null,
        triggeredBy: [
          {
            message: 'Image change',
            imageChangeBuild: {
              imageID:
                'image-registry.openshift-image-registry.svc:5000/openshift/nodejs@sha256:0ad231dc2d1c34ed3fb29fb304821171155e0a1a23f0e0490b2cd8ca60915517',
              fromRef: {
                kind: 'ImageStreamTag',
                namespace: 'openshift',
                name: 'nodejs:10',
              },
            },
          },
        ],
      },
      status: {
        phase: 'New',
        reason: 'CannotCreateBuildPod',
        message: 'Failed creating build pod.',
        config: {
          kind: 'BuildConfig',
          namespace: 'testproject3',
          name: 'analytics-build',
        },
        output: {},
      },
    },
  ],
};

export const sampleDaemonSets: FirehoseResult = {
  loaded: true,
  loadError: '',
  data: [
    {
      metadata: {
        name: 'daemonset-testing',
        namespace: 'testing',
        selfLink: '/apis/apps/v1/namespaces/testing/daemonsets/daemonset-testing',
        uid: '0c4a82c9-a6e6-11e9-a20f-52fdfc072182',
        resourceVersion: '700614',
        generation: 1,
        creationTimestamp: '2019-07-15T09:50:59Z',
        annotations: {
          'deprecated.daemonset.template.generation': '1',
        },
      },
      spec: {
        selector: {
          matchLabels: {
            app: 'hello-openshift',
          },
        },
        template: {
          metadata: {
            creationTimestamp: null,
            labels: {
              app: 'hello-openshift',
            },
          },
          spec: {
            containers: [
              {
                name: 'hello-openshift',
                image: 'openshift/hello-openshift',
                ports: [
                  {
                    containerPort: 8080,
                    protocol: 'TCP',
                  },
                ],
                resources: {},
                terminationMessagePath: '/dev/termination-log',
                terminationMessagePolicy: 'File',
                imagePullPolicy: 'Always',
              },
            ],
            restartPolicy: 'Always',
            terminationGracePeriodSeconds: 30,
            dnsPolicy: 'ClusterFirst',
            securityContext: {},
            schedulerName: 'default-scheduler',
          },
        },
        updateStrategy: {
          type: 'RollingUpdate',
          rollingUpdate: {
            maxUnavailable: 1,
          },
        },
        revisionHistoryLimit: 10,
      },
      status: {
        currentNumberScheduled: 1,
        numberMisscheduled: 0,
        desiredNumberScheduled: 1,
        numberReady: 0,
        observedGeneration: 1,
        updatedNumberScheduled: 1,
        numberUnavailable: 1,
      },
      kind: 'DaemonSet',
      apiVersion: 'apps/v1',
    },
  ],
};

export const sampleStatefulSets: FirehoseResult = {
  loaded: true,
  loadError: '',
  data: [
    {
      metadata: {
        name: 'alertmanager-main',
        namespace: 'openshift-monitoring',
        selfLink: '/apis/apps/v1/namespaces/openshift-monitoring/statefulsets/alertmanager-main',
        uid: 'db365c19-adfb-11e9-ac86-062ae0b85aca',
        resourceVersion: '14506',
        generation: 1,
        creationTimestamp: '2019-07-24T10:14:43Z',
        labels: {
          alertmanager: 'main',
        },
        ownerReferences: [
          {
            apiVersion: 'monitoring.coreos.com/v1',
            kind: 'Alertmanager',
            name: 'main',
            uid: 'db2f029d-adfb-11e9-8783-0a4de0430898',
            controller: true,
            blockOwnerDeletion: true,
          },
        ],
      },
      spec: {
        replicas: 3,
        selector: {
          matchLabels: {
            alertmanager: 'main',
            app: 'alertmanager',
          },
        },
        template: {
          metadata: {
            creationTimestamp: null,
            labels: {
              alertmanager: 'main',
              app: 'alertmanager',
            },
          },
          spec: {
            containers: [
              {
                name: 'alertmanager',
                image:
                  'registry.svc.ci.openshift.org/ocp/4.2-2019-07-24-010407@sha256:7f17f55f2f3901d83ad1757ffb1c617963e713916e54c870531446e8f80edc8a',
                args: [
                  '--config.file=/etc/alertmanager/config/alertmanager.yaml',
                  '--cluster.listen-address=[$(POD_IP)]:6783',
                  '--storage.path=/alertmanager',
                  '--data.retention=120h',
                  '--web.listen-address=127.0.0.1:9093',
                  '--web.external-url=https://alertmanager-main-openshift-monitoring.apps.rorai-cluster3.devcluster.openshift.com/',
                  '--web.route-prefix=/',
                  '--cluster.peer=alertmanager-main-0.alertmanager-operated.openshift-monitoring.svc:6783',
                  '--cluster.peer=alertmanager-main-1.alertmanager-operated.openshift-monitoring.svc:6783',
                  '--cluster.peer=alertmanager-main-2.alertmanager-operated.openshift-monitoring.svc:6783',
                ],
                ports: [
                  {
                    name: 'mesh',
                    containerPort: 6783,
                    protocol: 'TCP',
                  },
                ],
                env: [
                  {
                    name: 'POD_IP',
                    valueFrom: {
                      fieldRef: {
                        apiVersion: 'v1',
                        fieldPath: 'status.podIP',
                      },
                    },
                  },
                ],
                resources: {
                  requests: {
                    memory: '200Mi',
                  },
                },
                volumeMounts: [
                  {
                    name: 'config-volume',
                    mountPath: '/etc/alertmanager/config',
                  },
                  {
                    name: 'alertmanager-main-db',
                    mountPath: '/alertmanager',
                  },
                  {
                    name: 'secret-alertmanager-main-tls',
                    readOnly: true,
                    mountPath: '/etc/alertmanager/secrets/alertmanager-main-tls',
                  },
                  {
                    name: 'secret-alertmanager-main-proxy',
                    readOnly: true,
                    mountPath: '/etc/alertmanager/secrets/alertmanager-main-proxy',
                  },
                ],
                terminationMessagePath: '/dev/termination-log',
                terminationMessagePolicy: 'File',
                imagePullPolicy: 'IfNotPresent',
              },
            ],
            restartPolicy: 'Always',
            terminationGracePeriodSeconds: 120,
            dnsPolicy: 'ClusterFirst',
            nodeSelector: {
              'beta.kubernetes.io/os': 'linux',
            },
            serviceAccountName: 'alertmanager-main',
            serviceAccount: 'alertmanager-main',
            securityContext: {},
            schedulerName: 'default-scheduler',
            priorityClassName: 'system-cluster-critical',
          },
        },
        serviceName: 'alertmanager-operated',
        podManagementPolicy: 'OrderedReady',
        updateStrategy: {
          type: 'RollingUpdate',
        },
        revisionHistoryLimit: 10,
      },
      status: {
        observedGeneration: 1,
        replicas: 3,
        readyReplicas: 3,
        currentReplicas: 3,
        updatedReplicas: 3,
        currentRevision: 'alertmanager-main-5b9d487b7f',
        updateRevision: 'alertmanager-main-5b9d487b7f',
        collisionCount: 0,
      },
      kind: 'StatefulSet',
    },
  ],
};

export const samplePipeline: FirehoseResult = {
  loaded: true,
  loadError: '',
  data: [
    {
      apiVersion: 'tekton.dev/v1alpha1',
      kind: 'Pipeline',
      metadata: {
        creationTimestamp: '2019-10-18T10:06:37Z',
        generation: 1,
        name: 'hello-world-pipeline',
        namespace: 't-s',
        resourceVersion: '371236',
        selfLink: '/apis/tekton.dev/v1alpha1/namespaces/t-s/pipelines/hello-world-pipeline',
        uid: '73d7842d-975f-44ab-99e4-727b7cf097b6',
        labels: {
          'app.kubernetes.io/instance': 'nodejs',
        },
      },
      spec: {
        tasks: [
          {
            name: 'hello-world',
            taskRef: {
              name: 'hello-world',
            },
          },
        ],
      },
    },
  ],
};

export const samplePipelineRun: FirehoseResult = {
  loaded: true,
  loadError: '',
  data: [
    {
      apiVersion: 'tekton.dev/v1alpha1',
      kind: 'PipelineRun',
      metadata: {
        creationTimestamp: '2019-10-18T10:07:28Z',
        generation: 1,
        labels: {
          'tekton.dev/pipeline': 'hello-world-pipeline',
        },
        name: 'hello-world-pipeline',
        namespace: 't-s',
        resourceVersion: '371822',
        selfLink: '/apis/tekton.dev/v1alpha1/namespaces/t-s/pipelineruns/hello-world-pipeline',
        uid: 'a049c81e-ba40-4248-ac54-a2728893afcb',
      },
      spec: {
        pipelineRef: {
          name: 'hello-world-pipeline',
        },
        podTemplate: {},
        timeout: '1h0m0s',
      },
      status: {
        completionTime: '2019-10-18T10:08:00Z',
        conditions: [
          {
            lastTransitionTime: '2019-10-18T10:08:00Z',
            message: 'All Tasks have completed executing',
            reason: 'Succeeded',
            status: 'True',
            type: 'Succeeded',
          },
        ],
        startTime: '2019-10-18T10:07:28Z',
        taskRuns: {
          'hello-world-pipeline-hello-world-6mbs6': {
            pipelineTaskName: 'hello-world',
            status: {
              completionTime: '2019-10-18T10:08:00Z',
              conditions: [
                {
                  lastTransitionTime: '2019-10-18T10:08:00Z',
                  message: 'All Steps have completed executing',
                  reason: 'Succeeded',
                  status: 'True',
                  type: 'Succeeded',
                },
              ],
              podName: 'hello-world-pipeline-hello-world-6mbs6-pod-ab38ef',
              startTime: '2019-10-18T10:07:28Z',
              steps: [
                {
                  container: 'step-echo',
                  imageID:
                    'docker.io/library/ubuntu@sha256:1bbdea4846231d91cce6c7ff3907d26fca444fd6b7e3c282b90c7fe4251f9f86',
                  name: 'echo',
                  terminated: {
                    containerID:
                      'cri-o://14b1d028e46e921b5fa3445def9fbeb35403ae3332da347d62c01807717eba49',
                    exitCode: 0,
                    finishedAt: '2019-10-18T10:07:59Z',
                    reason: 'Completed',
                    startedAt: '2019-10-18T10:07:57Z',
                  },
                },
              ],
            },
          },
        },
      },
    },
  ],
};

export const sampleClusterServiceVersions: FirehoseResult = {
  data: [
    {
      apiVersion: 'operators.coreos.com/v1alpha1',
      kind: 'ClusterServiceVersion',
      metadata: {
        annotations: {
          certified: 'false',
          repository: 'https://github.com/jaegertracing/jaeger-operator',
          support: 'Red Hat, Inc.',
          'alm-examples':
            '[\n  {\n    "apiVersion": "jaegertracing.io/v1",\n    "kind": "Jaeger",\n    "metadata": {\n      "name": "jaeger-all-in-one-inmemory"\n    }\n  },\n  {\n    "apiVersion": "jaegertracing.io/v1",\n    "kind": "Jaeger",\n    "metadata": {\n      "name": "jaeger-all-in-one-local-storage"\n    },\n    "spec": {\n      "storage": {\n        "options": {\n          "badger": {\n            "directory-key": "/badger/key",\n            "directory-value": "/badger/data",\n            "ephemeral": false\n          }\n        },\n        "type": "badger",\n        "volumeMounts": [\n          {\n            "mountPath": "/badger",\n            "name": "data"\n          }\n        ],\n        "volumes": [\n          {\n            "emptyDir": {},\n            "name": "data"\n          }\n        ]\n      }\n    }\n  },\n  {\n    "apiVersion": "jaegertracing.io/v1",\n    "kind": "Jaeger",\n    "metadata": {\n      "name": "jaeger-prod-elasticsearch"\n    },\n    "spec": {\n      "storage": {\n        "options": {\n          "es": {\n            "server-urls": "http://elasticsearch.default.svc:9200"\n          }\n        },\n        "type": "elasticsearch"\n      },\n      "strategy": "production"\n    }\n  }\n]',
          capabilities: 'Seamless Upgrades',
          'olm.operatorNamespace': 'openshift-operators',
          containerImage: 'registry.redhat.io/distributed-tracing/jaeger-rhel7-operator:1.13.1',
          createdAt: '2019-07-05T11:16:15+00:00',
          categories: 'Logging & Tracing',
          description:
            'Provides tracing, monitoring and troubleshooting microservices-based distributed systems',
          'olm.operatorGroup': 'global-operators',
        },
        selfLink:
          '/apis/operators.coreos.com/v1alpha1/namespaces/newproj/clusterserviceversions/jaeger-operator.v1.13.1',
        resourceVersion: '205414',
        name: 'jaeger-operator.v1.13.1',
        uid: '777f23e6-42fa-419d-b2ee-592c1b0001ae',
        creationTimestamp: '2019-12-13T13:54:41Z',
        generation: 1,
        namespace: 'newproj',
        labels: {
          'olm.api.c9f771e815ec55e': 'provided',
          'olm.api.e43efcaa45c9f8d0': 'required',
          'olm.copiedFrom': 'openshift-operators',
        },
      },
      spec: {
        customresourcedefinitions: {
          owned: [
            {
              description: 'A configuration file for a Jaeger custom resource.',
              displayName: 'Jaeger',
              kind: 'Jaeger',
              name: 'jaegers.jaegertracing.io',
              version: 'v1',
            },
          ],
          required: [
            {
              description: 'An Elasticsearch cluster instance',
              displayName: 'Elasticsearch',
              kind: 'Elasticsearch',
              name: 'elasticsearches.logging.openshift.io',
              version: 'v1',
            },
          ],
        },
        apiservicedefinitions: {},
        keywords: ['tracing', 'monitoring', 'troubleshooting'],
        displayName: 'Jaeger Operator',
        provider: {
          name: 'Red Hat, Inc.',
        },
        maturity: 'alpha',
        installModes: [
          {
            supported: true,
            type: 'OwnNamespace',
          },
          {
            supported: true,
            type: 'SingleNamespace',
          },
          {
            supported: true,
            type: 'MultiNamespace',
          },
          {
            supported: true,
            type: 'AllNamespaces',
          },
        ],
        version: '1.13.1',
        icon: [
          {
            base64data:
              'CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjM5NHB4IiBoZWlnaHQ9IjM5NHB4IiB2aWV3Qm94PSIwIDAgMzk0IDM5NCI+CjxkZWZzPgo8ZyBpZD0iTGF5ZXIxXzBfRklMTCI+CjxwYXRoIGZpbGw9IiM0QjRCNEIiIGZpbGwtb3BhY2l0eT0iMC45ODQzMTM3MjU0OTAxOTYiIHN0cm9rZT0ibm9uZSIgZD0iCk0gMjEwLjc1IDM0Mi42NQpRIDIxMC43IDM0Mi42NSAyMTAuNjUgMzQyLjcgMjA5LjY1IDM0Mi45IDIwOC44NSAzNDMuNSAyMDkuMTUgMzQ0LjkgMjEwLjQgMzQ0LjcKTCAyMTAuNCAzNDQuNgpRIDIxMi4zNSAzNDUuNyAyMTUuMTUgMzQ1LjQgMjE3LjYgMzQ1LjE1IDIyMC4xNSAzNDUuMiAyMjEuMTUgMzQ0LjggMjIxLjU1IDM0My42NQpMIDIyMS42IDM0My42NQpRIDIyMS40NSAzNDIuNzUgMjIwLjg1IDM0Mi4zNSAyMjAuOCAzNDIuMyAyMjAuNzUgMzQyLjMgMjE4LjQ1IDM0Mi40IDIxNS42NSAzNDIuMzUgMjEzLjEgMzQyLjM1IDIxMC43NSAzNDIuNjUgWiIvPgoKPHBhdGggZmlsbD0iIzNEM0QzRCIgZmlsbC1vcGFjaXR5PSIwLjY1ODgyMzUyOTQxMTc2NDciIHN0cm9rZT0ibm9uZSIgZD0iCk0gMjEwLjc1IDM0Mi42NQpMIDIxMC44NSAzNDIuNTUKUSAyMDkuNCAzNDIuNSAyMDguNiAzNDMuMyAyMDguNjUgMzQ1LjM1IDIxMC45IDM0NS40IDIxMS41NSAzNDUuNCAyMTIuMjUgMzQ1LjUgMjE0LjU1IDM0NS45IDIxNy4zNSAzNDUuODUgMjE4LjUgMzQ1LjggMjE5LjQgMzQ1LjY1IDIyMC4zIDM0NS40NSAyMjAuOTUgMzQ1LjE1IDIyMS4wNSAzNDUuMSAyMjEuMTUgMzQ1LjA1IDIyMS41IDM0NC44IDIyMS43IDM0NC41IDIyMi42IDM0Mi43NSAyMjAuNzUgMzQyLjI1CkwgMjIwLjc1IDM0Mi4zClEgMjIwLjggMzQyLjMgMjIwLjg1IDM0Mi4zNSAyMjEuNDUgMzQyLjc1IDIyMS42IDM0My42NQpMIDIyMS41NSAzNDMuNjUKUSAyMjEuMTUgMzQ0LjggMjIwLjE1IDM0NS4yIDIxNy42IDM0NS4xNSAyMTUuMTUgMzQ1LjQgMjEyLjM1IDM0NS43IDIxMC40IDM0NC42CkwgMjEwLjQgMzQ0LjcKUSAyMDkuMTUgMzQ0LjkgMjA4Ljg1IDM0My41IDIwOS42NSAzNDIuOSAyMTAuNjUgMzQyLjcgMjEwLjcgMzQyLjY1IDIxMC43NSAzNDIuNjUgWiIvPgoKPHBhdGggZmlsbD0iIzFBMUExQSIgZmlsbC1vcGFjaXR5PSIwLjU0NTA5ODAzOTIxNTY4NjIiIHN0cm9rZT0ibm9uZSIgZD0iCk0gMjEwLjg1IDM0Mi41NQpMIDIxMC43NSAzNDIuNjUKUSAyMTMuMSAzNDIuMzUgMjE1LjY1IDM0Mi4zNSAyMTguNDUgMzQyLjQgMjIwLjc1IDM0Mi4zCkwgMjIwLjc1IDM0Mi4yNQpRIDIyMi42IDM0Mi43NSAyMjEuNyAzNDQuNSAyMjEuNSAzNDQuOCAyMjEuMTUgMzQ1LjA1IDIyMS42IDM0NC44NSAyMjEuOTUgMzQ0LjYgMjIxLjk1IDM0NC41NSAyMjIgMzQ0LjUgMjIyLjQ1IDM0My45IDIyMi4yIDM0My4xNSAyMjIuMDUgMzQyLjc1IDIyMS44IDM0Mi41IDIyMSAzNDEuOCAyMTkuNTUgMzQxLjUgMjE3LjcgMzQxLjE1IDIxNS44NSAzNDEuNSAyMTQuNTUgMzQxLjc1IDIxMy4zNSAzNDEuNzUgMjA5LjkgMzQxLjc1IDIwOC4zNSAzNDMuNSAyMDguNSAzNDUuMiAyMTAuMTUgMzQ1LjQgMjExLjcgMzQ1LjY1IDIxMy4yIDM0NS44NSAyMTQuNTUgMzQ2IDIxNS42NSAzNDYuMDUgMjE3Ljc1IDM0Ni4wNSAyMTkuNCAzNDUuNjUgMjE4LjUgMzQ1LjggMjE3LjM1IDM0NS44NSAyMTQuNTUgMzQ1LjkgMjEyLjI1IDM0NS41IDIxMS41NSAzNDUuNCAyMTAuOSAzNDUuNCAyMDguNjUgMzQ1LjM1IDIwOC42IDM0My4zIDIwOS40IDM0Mi41IDIxMC44NSAzNDIuNTUgWiIvPgoKPHBhdGggZmlsbD0iIzQwNDA0MCIgZmlsbC1vcGFjaXR5PSIwLjk1Njg2Mjc0NTA5ODAzOTMiIHN0cm9rZT0ibm9uZSIgZD0iCk0gMTkyLjEgMzMxLjkKUSAxOTEuOTUgMzMxLjg1IDE5MS44IDMzMS44NQpMIDE5MS44IDMzMS45ClEgMTkxLjk1IDMzMS45IDE5Mi4xIDMzMS45Ck0gMjM3Ljg1IDMxMC44NQpRIDIzNi4zNSAzMTEuMzUgMjM0LjYgMzExLjM1IDIzMi4yIDMxMS40IDIzMS4yIDMxMC4wNSAyMjcuMSAzMTAuNCAyMjIuNiAzMDkuOTUgMjE0LjkgMzEwLjI1IDIwOC4yNSAzMTEuNiAyMDUuMiAzMTIuMiAyMDEuNzUgMzEyLjM1IDIwMS40NSAzMTIuNCAyMDEuMiAzMTIuNSAyMDEuNjUgMzEyLjU1IDIwMi4xNSAzMTIuNiAyMDIuMiAzMTIuNiAyMDIuMjUgMzEyLjYgMjAwLjQ1IDMxMy4zNSAxOTguMjUgMzEzLjggMTk2LjE1IDMxNC4yIDE5NS4zIDMxNS45IDE5NS4zIDMxNy44IDE5Ni4yNSAzMTguNzUgMTk2LjMgMzE4Ljc1IDE5Ni4zIDMxOC44IDE5NS42IDMxOC42IDE5NS4yNSAzMTguMDUgMTk1LjU1IDMxOC42NSAxOTYgMzE5LjE1IDE5OC45IDMyMC44NSAyMDIuNCAzMjEuODUgMjA4LjEgMzIzLjQ1IDIxMy42NSAzMjUuMSAyMTQuNDUgMzI1LjMgMjE0LjggMzI2IDIxNC41NSAzMjguMDUgMjEyLjc1IDMyOC42IDIxMi43IDMyOC42IDIxMi43IDMyOC42NSAyMTIuMDUgMzI5LjM1IDIxMC43IDMyOS45IDIwNi45IDMzMS40IDIwMi4yNSAzMzIuMDUgMTk5LjggMzMyLjM1IDE5OC4xIDMzMS44NSAxOTguNSAzMzEuOCAxOTguODUgMzMxLjY1CkwgMTk4Ljg1IDMzMS42ClEgMTk4LjggMzMxLjYgMTk4Ljc1IDMzMS42IDE5Ni4wNSAzMzIuMzUgMTkyLjkgMzMyIDE5My4zIDMzMi4xIDE5My42IDMzMi4zNSAxOTEuNyAzMzIuNTUgMTg5LjYgMzMyLjYgMTg3LjUgMzMyLjY1IDE4NS42IDMzMy4xIDE4NC4xNSAzMzMuNDUgMTgzLjQgMzMyLjk1IDE4My43NSAzMzIuNyAxODQuMiAzMzIuNSAxODQuMjUgMzMyLjUgMTg0LjI1IDMzMi40NSAxODIuOTUgMzMyLjggMTgxLjMgMzMyLjggMTc2LjY1IDMzMi43NSAxNzIuOCAzMzMuNTUgMTc1LjEgMzMzLjYgMTc3LjY1IDMzMy4yNSAxODAuNDUgMzMyLjkgMTgyLjMgMzMzLjggMTgxLjUgMzM0LjMgMTgwLjM1IDMzNC40IDE3Ni45IDMzNC43IDE3My4xNSAzMzQuODUgMTY4LjQgMzM1LjA1IDE2Ni4yNSAzMzcuOSAxNjYuNTUgMzM5LjI1IDE2Ny4zIDM0MC4xIDE2Ny41IDM0MC4zNSAxNjcuMzUgMzQwLjUgMTY3LjQgMzQwLjU1IDE2Ny40NSAzNDAuNiAxNjcuNDUgMzQwLjY1IDE2Ny40NSAzNDAuNyAxNzEgMzQyLjY1IDE3Ni40NSAzNDIuNzUgMTg2LjUgMzQzIDE5NyAzNDEuOTUgMjAxLjggMzQxLjQ1IDIwNi43NSAzNDEuMDUgMjA5LjM1IDM0MC44IDIxMiAzNDAuNjUgMjE3LjA1IDM0MC4zIDIyMS41IDMzOS40NSAyMjQuOCAzMzguOCAyMjcuOTUgMzM4LjM1IDIzMC4xNSAzMzguMDUgMjMxLjk1IDMzNy41NSAyMzMuMDUgMzM3LjIgMjM0LjYgMzM3LjMgMjM4IDMzNi41IDI0MC43NSAzMzQuOTUgMjQyLjA1IDMzNC4yIDI0Mi4xNSAzMzIuMyAyNDIuMjUgMzMwLjc1IDI0MS44IDMyOC45IDI0MC44NSAzMjcuNiAyMzkuNjUgMzI2LjU1IDIzOS42IDMyNi41NSAyMzkuNiAzMjYuNSAyMzguMiAzMjYuMDUgMjM3LjUgMzI0Ljk1IDIzNy41IDMyNC45IDIzNy40IDMyNC45IDIzNy4zNSAzMjQuOSAyMzcuMzUgMzI0Ljg1IDIzNi45NSAzMjQuMjUgMjM2Ljk1IDMyMy4yIDIzNy43IDMyMi4yNSAyMzguMjUgMzIxLjEgMjM4LjI1IDMyMS4wNSAyMzguMjUgMzIxIDIzOS41NSAzMjAgMjQwLjggMzE4LjkgMjQwLjg1IDMxOC45IDI0MC44NSAzMTguOCAyNDEuMjUgMzE4Ljg1IDI0MS40NSAzMTguNyAyNDEuNSAzMTguNyAyNDEuNTUgMzE4LjcgMjQzLjc1IDMxNy4zIDI0NSAzMTUgMjQ1LjU1IDMxMy45NSAyNDQuOTUgMzEyLjggMjQ0LjY1IDMxMi4zIDI0NC4zNSAzMTEuNzUgMjQxLjg1IDMxMC40IDIzNy45IDMxMC41CkwgMjM3LjkgMzEwLjU1IDIzOC4wNSAzMTAuNTUKUSAyMzguMDUgMzEwLjggMjM3Ljg1IDMxMC44NQpNIDIzOC4zNSAzMTkuMwpMIDIzOC4yNSAzMTkuMwpRIDIzNS44IDMxOS44IDIzNC43IDMyMi4yIDIzNC4xIDMyMy41NSAyMzQuOSAzMjQuNyAyMzUuNiAzMjUuNjUgMjM2LjQ1IDMyNi41IDIzOC43NSAzMjcuNyAyNDAuNzUgMzI5LjI1IDI0MC43NSAzMjkuMyAyNDAuODUgMzI5LjMgMjQxLjMgMzMwLjIgMjQxLjggMzMxLjEgMjQxLjggMzMxLjE1IDI0MS44IDMzMS4yNSAyNDEuNjUgMzMyLjY1IDI0MC43NSAzMzMuMzUgMjQwLjcgMzMzLjM1IDI0MC43IDMzMy40IDIzNS4xNSAzMzYgMjI4LjA1IDMzNy4wNSAyMjQuOTUgMzM3LjUgMjIyIDMzOC4xNSAyMTguNSAzMzguOTUgMjE0LjU1IDMzOS4yIDIxMyAzMzkuMyAyMTIuMSAzMzkuODUgMjEwLjA1IDMzOS43IDIwOS4yIDM0MC4xNQpMIDIwOS4yIDM0MC4yNQpRIDIwOS43IDM0MC40NSAyMDguNDUgMzQwLjU1IDIwNi42IDM0MC43NSAyMDQuNTUgMzQwLjcgMjA0LjQ1IDM0MS4wNSAyMDMuOTUgMzQxLjA1CkwgMjAzLjk1IDM0MS4xClEgMTk4LjYgMzQwLjg1IDE5My42IDM0MS4zNSAxOTAuNCAzNDEuNjUgMTg2LjkgMzQxLjY1IDE3OS44IDM0MS41NSAxNzMuNjUgMzQwLjY1IDE3Mi41IDM0MC40NSAxNzEuOTUgMzQwLjcgMTc0LjEgMzQyLjA1IDE3Ny4zIDM0Mi4zIDE3Ny4zNSAzNDIuMyAxNzcuNDUgMzQyLjMgMTczLjEgMzQyLjYgMTY5LjYgMzQxLjU1IDE2OC4zNSAzNDEuMiAxNjggMzQwLjU1IDE2Ny45NSAzNDAuNSAxNjcuOTUgMzQwLjM1IDE2OC4yNSAzMzkuMzUgMTY3IDMzOC43NSAxNjYuNjUgMzM4LjYgMTY2LjUgMzM4LjE1IDE2Ny4wNSAzMzcuNjUgMTY3LjY1IDMzNy4xNSAxNjcuNyAzMzcuMTUgMTY3LjcgMzM3LjA1IDE3MS4xNSAzMzYuMSAxNzQuOTUgMzM1LjM1IDE3NSAzMzUuMzUgMTc1LjA1IDMzNS4yNQpMIDE3NS4xIDMzNS4yNQpRIDE3OC44NSAzMzUuMyAxODIuNDUgMzM0Ljc1IDE4NC42IDMzNC40NSAxODcuMDUgMzM0LjQ1IDE5MC4zNSAzMzQuNSAxOTQuNiAzMzQuMzUgMjAyLjM1IDMzNC4xNSAyMDkuMDUgMzMyLjc1IDIxMS4xIDMzMi4zIDIxMy4xIDMzMS42IDIxNi42IDMyOS40NSAyMTcuNTUgMzI1LjQgMjE3LjYgMzI1LjM1IDIxNy42IDMyNS4yNSAyMTcuMzUgMzI0LjQgMjE2LjUgMzI0LjIgMjE2LjQ1IDMyNC4xNSAyMTYuMzUgMzI0LjE1IDIxNS45NSAzMjMuNiAyMTUuNDUgMzIzLjE1IDIxNS40IDMyMy4xNSAyMTUuNCAzMjMuMSAyMTIuOSAzMjEuNSAyMDkuMSAzMjEuMDUgMjA3LjMgMzIwLjg1IDIwNS41NSAzMjAuNjUgMjAyLjYgMzIwLjI1IDIwMC4yNSAzMTkuNSAxOTguMDUgMzE4LjggMTk2Ljg1IDMxNy4yNSAxOTYuNyAzMTcgMTk2LjggMzE2LjUgMTk4LjUgMzE0LjU1IDIwMS45IDMxNC4yNQpMIDIwMS45IDMxNC4yClEgMjA2LjggMzEzLjYgMjExLjI1IDMxMi43IDIxNS44NSAzMTEuNzUgMjIxLjEgMzExLjQgMjI1LjkgMzExLjEgMjMwLjYgMzExLjMgMjM2LjQgMzExLjU1IDI0MC45NSAzMTIuNDUgMjQyLjIgMzEyLjcgMjQzLjIgMzEzLjIgMjQzLjI1IDMxMy4yIDI0My4yIDMxMyAyNDMuMiAzMTIuOSAyNDMuMTUgMzEyLjg1IDI0My4zNSAzMTIuMiAyNDMuNyAzMTMuMQpMIDI0My43NSAzMTMuMQpRIDI0My44IDMxMy42NSAyNDMuOTUgMzE0LjEgMjQ0IDMxNC4xNSAyNDQgMzE0LjIgMjQyLjEgMzE3LjEgMjM4Ljg1IDMxOC42NSAyMzguOCAzMTguNyAyMzguNzUgMzE4LjcgMjM4LjUgMzE4Ljk1IDIzOC4zNSAzMTkuMwpNIDIwMi43NSAzMjEuNTUKTCAyMDIuNzUgMzIxLjUKUSAyMDYuNjUgMzIxLjk1IDIxMC4zIDMyMi42NSAyMTAuNjUgMzIyLjcgMjExIDMyMi43IDIxMi44NSAzMjMuNSAyMTQuMTUgMzI0LjggMjE0LjIgMzI0Ljg1IDIxNC4yIDMyNC45IDIwOC41IDMyMy41IDIwMi43NSAzMjEuNTUKTSAyMTQuNTUgMzI0LjU1ClEgMjE0LjU1IDMyNC41IDIxNC41NSAzMjQuNCAyMTMuMSAzMjMuNCAyMTEuNyAzMjIuMzUKTCAyMTEuNzUgMzIyLjM1ClEgMjE0LjUgMzIyLjY1IDIxNS43IDMyNS4xIDIxNS43IDMyNS4xNSAyMTUuNzUgMzI1LjE1IDIxNS43IDMzMC4xNSAyMTEuMDUgMzMxLjI1IDIxMC44IDMzMS4zIDIxMC41IDMzMS40IDIwNi40IDMzMi44IDIwMS40IDMzMy4yIDE5OCAzMzMuNSAxOTQuMzUgMzMzLjYgMTkwLjcgMzMzLjcgMTg3LjU1IDMzMy4zIDE4OS41NSAzMzIuODUgMTkyLjQgMzMyLjg1IDIwMS4zNSAzMzIuOTUgMjA4LjcgMzMxLjM1IDIxMC45NSAzMzAuNDUgMjEzIDMyOS4zCkwgMjEzLjEgMzI5LjMKUSAyMTQuNyAzMjguMSAyMTUgMzI1LjY1IDIxNS4wNSAzMjUuNTUgMjE1LjA1IDMyNS41IDIxNC43NSAzMjUuMDUgMjE0LjU1IDMyNC41NQpNIDIzMS43IDMxMApRIDIzMS41MTg3NSAzMTAuMDQ1MzEyNSAyMzEuMzUgMzEwLjA1IDIzMS40Njg3NSAzMTAuMDUgMjMxLjYgMzEwLjA1IDIzMS42NSAzMTAuMDUgMjMxLjcgMzEwLjA1CkwgMjMxLjcgMzEwIFoiLz4KCjxwYXRoIGZpbGw9IiM2QzZDNkMiIGZpbGwtb3BhY2l0eT0iMC45MDU4ODIzNTI5NDExNzY1IiBzdHJva2U9Im5vbmUiIGQ9IgpNIDE5My42IDMzMi4zNQpRIDE5My4zIDMzMi4xIDE5Mi45IDMzMiAxOTIuNTUgMzMxLjkgMTkyLjEgMzMxLjkgMTkxLjk1IDMzMS45IDE5MS44IDMzMS45CkwgMTkxLjggMzMxLjg1ClEgMTkxLjc1IDMzMS44NSAxOTEuNjUgMzMxLjg1IDE4Ny41NSAzMzEuNSAxODQuMjUgMzMyLjQ1IDE4NC4yNSAzMzIuNSAxODQuMiAzMzIuNSAxODMuNzUgMzMyLjcgMTgzLjQgMzMyLjk1IDE4NC4xNSAzMzMuNDUgMTg1LjYgMzMzLjEgMTg3LjUgMzMyLjY1IDE4OS42IDMzMi42IDE5MS43IDMzMi41NSAxOTMuNiAzMzIuMzUgWiIvPgoKPHBhdGggZmlsbD0iIzI1MjUyNSIgZmlsbC1vcGFjaXR5PSIwLjk4ODIzNTI5NDExNzY0NzEiIHN0cm9rZT0ibm9uZSIgZD0iCk0gMTcyLjQ1IDMzMy41NQpRIDE3Mi40IDMzMy41NSAxNzIuMzUgMzMzLjU1IDE3MC41IDMzNC4zIDE2OC41NSAzMzQuOSAxNjguNTUgMzM0Ljk1IDE2OC41IDMzNC45NSAxNjYuNyAzMzUuOSAxNjUuODUgMzM3LjggMTY1Ljg1IDMzOC45IDE2Ni4yIDMzOS41IDE2Ni4yNSAzMzkuNTUgMTY2LjI1IDMzOS42NSAxNjYuNzUgMzQwLjA1IDE2Ny4yNSAzNDAuNDUgMTY3LjI1IDM0MC41IDE2Ny4zNSAzNDAuNSAxNjcuNSAzNDAuMzUgMTY3LjMgMzQwLjEgMTY2LjU1IDMzOS4yNSAxNjYuMjUgMzM3LjkgMTY4LjQgMzM1LjA1IDE3My4xNSAzMzQuODUgMTc2LjkgMzM0LjcgMTgwLjM1IDMzNC40IDE4MS41IDMzNC4zIDE4Mi4zIDMzMy44IDE4MC40NSAzMzIuOSAxNzcuNjUgMzMzLjI1IDE3NS4xIDMzMy42IDE3Mi44IDMzMy41NSAxNzIuNzUgMzMzLjU1IDE3Mi43IDMzMy41NSAxNzIuNTUgMzMzLjU1IDE3Mi40NSAzMzMuNTUgWiIvPgoKPHBhdGggZmlsbD0iIzE0MTQxNCIgZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NTA5ODAzOTIxNTciIHN0cm9rZT0ibm9uZSIgZD0iCk0gMTcyLjM1IDMzMy41NQpRIDE3Mi40IDMzMy41NSAxNzIuNDUgMzMzLjU1IDE3Mi41NSAzMzMuNTUgMTcyLjcgMzMzLjU1IDE3Mi43NSAzMzMuNTUgMTcyLjggMzMzLjU1IDE3Mi44IDMzMy41IDE3Mi44IDMzMy40NSAxNzIuNyAzMzMuNCAxNzIuNTUgMzMzLjQgMTcyLjUgMzMzLjQgMTcyLjQ1IDMzMy40NSAxNjcuMDUgMzMzLjk1IDE2NC45IDMzNy43IDE2NC45IDMzOS4zNSAxNjUuOTUgMzM5LjkgMTY2IDMzOS45NSAxNjYgMzQwIDE2Ni42NSAzNDAuMzUgMTY3LjM1IDM0MC43IDE2Ny40IDM0MC43IDE2Ny40NSAzNDAuNyAxNjcuNDUgMzQwLjY1IDE2Ny40NSAzNDAuNiAxNjcuNCAzNDAuNTUgMTY3LjM1IDM0MC41IDE2Ny4yNSAzNDAuNSAxNjcuMjUgMzQwLjQ1IDE2Ni43NSAzNDAuMDUgMTY2LjI1IDMzOS42NSAxNjYuMjUgMzM5LjU1IDE2Ni4yIDMzOS41IDE2NS44NSAzMzguOSAxNjUuODUgMzM3LjggMTY2LjcgMzM1LjkgMTY4LjUgMzM0Ljk1IDE2OC41NSAzMzQuOTUgMTY4LjU1IDMzNC45IDE3MC41IDMzNC4zIDE3Mi4zNSAzMzMuNTUgWiIvPgoKPHBhdGggZmlsbD0iIzdFN0U3RSIgZmlsbC1vcGFjaXR5PSIwLjk2MDc4NDMxMzcyNTQ5MDIiIHN0cm9rZT0ibm9uZSIgZD0iCk0gMTk4LjI1IDMxMy44ClEgMjAwLjQ1IDMxMy4zNSAyMDIuMjUgMzEyLjYgMjAyLjIgMzEyLjYgMjAyLjE1IDMxMi42IDIwMS42NSAzMTIuNTUgMjAxLjIgMzEyLjUgMTk4Ljk1IDMxMy4yNSAxOTYuOCAzMTQuMTUgMTk2LjMgMzE0LjUgMTk1LjggMzE0Ljk1IDE5NS4yIDMxNS41IDE5NC45NSAzMTUuOTUgMTk0LjggMzE2LjMgMTk0Ljg1IDMxNi43IDE5NC44NSAzMTYuOTUgMTk0LjkgMzE3LjIgMTk1IDMxNy43IDE5NS4yNSAzMTguMDUgMTk1LjYgMzE4LjYgMTk2LjMgMzE4LjggMTk2LjMgMzE4Ljc1IDE5Ni4yNSAzMTguNzUgMTk1LjMgMzE3LjggMTk1LjMgMzE1LjkgMTk2LjE1IDMxNC4yIDE5OC4yNSAzMTMuOCBaIi8+Cgo8cGF0aCBmaWxsPSIjNTA1MDUwIiBmaWxsLW9wYWNpdHk9IjAuOTY4NjI3NDUwOTgwMzkyMiIgc3Ryb2tlPSJub25lIiBkPSIKTSAyMzkuNzUgMzQwLjMKTCAyMzkuNzUgMzQwLjM1ClEgMjQyLjEgMzQwLjQgMjQ0LjI1IDM0MC4yNSAyNDQuMyAzNDAuMjUgMjQ0LjM1IDM0MC4yNSAyNDUuMyAzMzkuOTUgMjQ1LjkgMzM5LjM1IDI0NS45NSAzMzkuMyAyNDUuOTUgMzM5LjI1CkwgMjQ1LjkgMzM5LjI1ClEgMjQ2LjA1IDMzOC4yNSAyNDUuMzUgMzM4Ljc1IDI0NC44NSAzMzguMDUgMjQzLjY1IDMzNy45NSAyNDAuMyAzMzcuNyAyMzcuNTUgMzM4LjQgMjM3Ljg1IDM0MC4xIDIzOS43NSAzNDAuMyBaIi8+Cgo8cGF0aCBmaWxsPSIjMzQzNDM0IiBmaWxsLW9wYWNpdHk9IjAuOTE3NjQ3MDU4ODIzNTI5NCIgc3Ryb2tlPSJub25lIiBkPSIKTSAyMzguMjUgMzM2Ljg1CkwgMjM4LjI1IDMzNi45ClEgMjM3LjM1IDMzNy4xNSAyMzcuMDUgMzM3LjkgMjM2Ljk1IDMzOC44NSAyMzcuMjUgMzM5LjMgMjM3LjMgMzM5LjMgMjM3LjMgMzM5LjQgMjM3Ljc1IDM0MCAyMzguNjUgMzQwLjE1CkwgMjM4LjY1IDM0MC4yNQpRIDIzOS4yNSAzNDAuMTUgMjM5LjYgMzQwLjM1IDIzOS42NSAzNDAuMzUgMjM5Ljc1IDM0MC4zNQpMIDIzOS43NSAzNDAuMwpRIDIzNy44NSAzNDAuMSAyMzcuNTUgMzM4LjQgMjQwLjMgMzM3LjcgMjQzLjY1IDMzNy45NSAyNDQuODUgMzM4LjA1IDI0NS4zNSAzMzguNzUgMjQ2LjA1IDMzOC4yNSAyNDUuOSAzMzkuMjUKTCAyNDUuOTUgMzM5LjI1ClEgMjQ2LjA1IDMzOS4yIDI0Ni4yIDMzOS4xNSAyNDYuMjUgMzM5LjE1IDI0Ni4zIDMzOS4xNSAyNDYuMyAzMzkuMSAyNDYuMyAzMzkgMjQ2LjMgMzM4LjcgMjQ2LjMgMzM4LjQgMjQ2LjI1IDMzOC40IDI0Ni4yIDMzOC40IDI0NS44IDMzOC4yIDI0NS42IDMzNy44IDI0NS41IDMzNy44IDI0NS40NSAzMzcuOCAyNDIuNyAzMzYuMiAyMzguMjUgMzM2Ljg1IFoiLz4KCjxwYXRoIGZpbGw9IiMxODE4MTgiIGZpbGwtb3BhY2l0eT0iMC41NjA3ODQzMTM3MjU0OTAyIiBzdHJva2U9Im5vbmUiIGQ9IgpNIDIwMy4zNSAzNDUuMzUKUSAyMDMuNCAzNDQuNyAyMDMuMTUgMzQ0LjM1IDIwMy4xIDM0NC4zIDIwMy4xIDM0NC4yNSAyMDIuOCAzNDQgMjAyLjU1IDM0My43NSAyMDIuNSAzNDMuNyAyMDIuNSAzNDMuNjUgMjAxLjMgMzQzLjEgMTk5LjcgMzQyLjg1CkwgMTk5LjcgMzQyLjgKUSAyMDEuNyAzNDIuMDUgMjA0LjcgMzQyLjEgMjA2LjU1IDM0Mi4xIDIwOC4zNSAzNDEuODUgMjE2LjYgMzQwLjg1IDIyNC40IDMzOS40IDIyMy43IDMzOS44IDIyMy41NSAzNDAuNyAyMjMuNTUgMzQwLjggMjIzLjU1IDM0MC44NSAyMjMuNjUgMzQxLjggMjI0LjQgMzQyLjI1CkwgMjI0LjQgMzQyLjMKUSAyMjUuMSAzNDIuNjUgMjI1Ljg1IDM0Mi45NQpMIDIyNS44NSAzNDMuMDUKUSAyMjguNjUgMzQzLjI1IDIzMS40NSAzNDIuOSAyMzEuNSAzNDIuOSAyMzEuNiAzNDIuOSAyMzMuMiAzNDIuNDUgMjM0LjQ1IDM0MS42NSAyMzQuNSAzNDEuNjUgMjM0LjUgMzQxLjU1IDIzNC45IDM0MC41IDIzNC4zIDMzOS44NSAyMzQuMjUgMzM5LjggMjM0LjI1IDMzOS43NSAyMzEuNDUgMzM4LjE1IDIyNy4zIDMzOSAyMjcuMjUgMzM5IDIyNy4yIDMzOSAyMjguMiAzMzguNSAyMjkuNiAzMzguMyAyMzEuMyAzMzguMSAyMzMuMTUgMzM3Ljg1IDIzNS4yNSAzMzcuNiAyMzcuMDUgMzM3LjIKTCAyMzcgMzM3LjMgMjM2Ljk1IDMzNy4zClEgMjM2LjU1IDMzNy44NSAyMzYuNDUgMzM4LjY1IDIzNi40NSAzMzguNyAyMzYuNDUgMzM4Ljc1IDIzNi42NSAzMzkuMjUgMjM2LjkgMzM5LjY1IDIzNi45NSAzMzkuNyAyMzYuOTUgMzM5Ljc1IDIzNy41IDM0MC4yIDIzOC4yNSAzNDAuNApMIDIzOC4yNSAzNDAuNQpRIDI0MS40IDM0MC44IDI0NC42IDM0MC41IDI0NC42NSAzNDAuNSAyNDQuNyAzNDAuNSAyNDUuOSAzNDAuMjUgMjQ2LjMgMzM5LjI1IDI0Ni4zIDMzOS4yIDI0Ni4zIDMzOS4xNSAyNDYuMjUgMzM5LjE1IDI0Ni4yIDMzOS4xNSAyNDYuMDUgMzM5LjIgMjQ1Ljk1IDMzOS4yNSAyNDUuOTUgMzM5LjMgMjQ1LjkgMzM5LjM1IDI0NS4zIDMzOS45NSAyNDQuMzUgMzQwLjI1IDI0NC4zIDM0MC4yNSAyNDQuMjUgMzQwLjI1IDI0Mi4xIDM0MC40IDIzOS43NSAzNDAuMzUgMjM5LjY1IDM0MC4zNSAyMzkuNiAzNDAuMzUgMjM5LjI1IDM0MC4xNSAyMzguNjUgMzQwLjI1CkwgMjM4LjY1IDM0MC4xNQpRIDIzNy43NSAzNDAgMjM3LjMgMzM5LjQgMjM3LjMgMzM5LjMgMjM3LjI1IDMzOS4zIDIzNi45NSAzMzguODUgMjM3LjA1IDMzNy45IDIzNy4zNSAzMzcuMTUgMjM4LjI1IDMzNi45CkwgMjM4LjI1IDMzNi44NQpRIDI0Mi43IDMzNi4yIDI0NS40NSAzMzcuOCAyNDUuNSAzMzcuOCAyNDUuNiAzMzcuOCAyNDUuOCAzMzguMiAyNDYuMiAzMzguNCAyNDYuMjUgMzM4LjQgMjQ2LjMgMzM4LjQgMjQ2LjMgMzM4LjI1IDI0Ni4zIDMzOC4wNSAyNDYuMyAzMzcuOCAyNDYuMDUgMzM3LjY1IDI0NC4yNSAzMzYuMyAyNDEuNDUgMzM2LjU1IDI0MC4xIDMzNi42NSAyMzkuMzUgMzM2LjIgMjM5LjQ1IDMzNi4yIDIzOS41IDMzNi4yIDI0MS4yIDMzNS41IDI0Mi4zIDMzNC4xNSAyNDMuNSAzMzEuODUgMjQyLjUgMzI5LjQgMjQyLjIgMzI4LjcgMjQxLjcgMzI4LjIgMjM5LjU1IDMyNi4zIDIzNy40IDMyNC40IDIzNy40NSAzMjQuNiAyMzcuNCAzMjQuOCAyMzcuNCAzMjQuODUgMjM3LjQgMzI0LjkgMjM3LjUgMzI0LjkgMjM3LjUgMzI0Ljk1IDIzOC4yIDMyNi4wNSAyMzkuNiAzMjYuNSAyMzkuNiAzMjYuNTUgMjM5LjY1IDMyNi41NSAyNDAuODUgMzI3LjYgMjQxLjggMzI4LjkgMjQyLjI1IDMzMC43NSAyNDIuMTUgMzMyLjMgMjQyLjA1IDMzNC4yIDI0MC43NSAzMzQuOTUgMjM4IDMzNi41IDIzNC42IDMzNy4zIDIzMy4wNSAzMzcuMiAyMzEuOTUgMzM3LjU1IDIzMC4xNSAzMzguMDUgMjI3Ljk1IDMzOC4zNSAyMjQuOCAzMzguOCAyMjEuNSAzMzkuNDUgMjE3LjA1IDM0MC4zIDIxMiAzNDAuNjUgMjA5LjM1IDM0MC44IDIwNi43NSAzNDEuMDUgMjAxLjggMzQxLjQ1IDE5NyAzNDEuOTUgMTg2LjUgMzQzIDE3Ni40NSAzNDIuNzUgMTcxIDM0Mi42NSAxNjcuNDUgMzQwLjcgMTY3LjQgMzQwLjcgMTY3LjM1IDM0MC43IDE2Ni42NSAzNDAuMzUgMTY2IDM0MCAxNjYgMzM5Ljk1IDE2NS45NSAzMzkuOSAxNjQuOSAzMzkuMzUgMTY0LjkgMzM3LjcgMTY3LjA1IDMzMy45NSAxNzIuNDUgMzMzLjQ1IDE3Mi41IDMzMy40IDE3Mi41NSAzMzMuNCAxNzIuNTUgMzMzLjM1IDE3Mi41NSAzMzMuMyAxNzUuMiAzMzIuODUgMTc3LjY1IDMzMi42NQpMIDE3Ny42NSAzMzIuNTUKUSAxNzYgMzMyLjY1IDE3NC40IDMzMi44NSAxNzIuODUgMzMzLjA1IDE3MS40NSAzMzMuMyAxNjYuNDUgMzM0LjA1IDE2NC41NSAzMzcuOCAxNjQuNTUgMzM4LjQgMTY0LjY1IDMzOC45IDE2NC42NSAzMzguOTUgMTY0LjY1IDMzOSAxNjguOCAzNDIuOTUgMTc2Ljk1IDM0Mi45NQpMIDE3Ni45NSAzNDMuMDUKUSAxNzIuOSAzNDMuNSAxNjguNDUgMzQzLjcgMTY1Ljk1IDM0My44NSAxNjUuMTUgMzQ1Ljg1IDE2Ni4xNSAzNDguMjUgMTY5LjQgMzQ4LjQgMTc2LjIgMzQ4LjcgMTgxLjcgMzQ3LjA1IDE4Mi40NSAzNDYuOCAxODMuMDUgMzQ2LjMgMTgzLjUgMzQ1LjI1IDE4My4wNSAzNDQuMjUgMTgzLjA1IDM0NC4yIDE4My4wNSAzNDQuMTUgMTgyLjA1IDM0My40NSAxODAuNyAzNDMuMTUgMTgwLjY1IDM0My4xNSAxODAuNiAzNDMuMTUgMTg1Ljc1IDM0Mi44NSAxOTAuOTUgMzQzLjIKTCAxOTAuOTUgMzQzLjMKUSAxOTAuMyAzNDMuOCAxOTAuMzUgMzQ1IDE5MC4zNSAzNDUuMDUgMTkwLjM1IDM0NS4xIDE5MS44IDM0Ny43NSAxOTYuNjUgMzQ2Ljk1IDE5OC40IDM0Ni42NSAyMDAuNTUgMzQ2LjcgMjAyLjY1IDM0Ni43IDIwMy4zNSAzNDUuMzUKTSAyMDIuNyAzNDUuMjUKUSAyMDIuNzUgMzQ1LjMgMjAyLjc1IDM0NS4zNSAyMDEuNyAzNDYuNTUgMTk5LjIgMzQ2LjUgMTk3Ljc1IDM0Ni41IDE5Ni4zIDM0Ni42IDE5NC4xIDM0Ni43NSAxOTIuMyAzNDYuNDUgMTkxIDM0NS45NSAxOTAuOCAzNDQuMzUgMTkwLjggMzQ0LjMgMTkwLjggMzQ0LjI1IDE5MS4wNSAzNDMuNzUgMTkxLjQgMzQzLjM1CkwgMTkxLjQgMzQzLjMKUSAxOTMuNTUgMzQyLjc1IDE5Ni4yNSAzNDMuMyAxOTguNDUgMzQzLjggMjAxLjE1IDM0My45IDIwMi4zNSAzNDQuMTUgMjAyLjcgMzQ1LjI1Ck0gMjMyLjcgMzM5LjQKUSAyMzIuNzUgMzM5LjQgMjMyLjggMzM5LjQgMjMzLjIgMzM5Ljc1IDIzMy45IDMzOS44NQpMIDIzMy45IDMzOS45NQpRIDIzNC4zNSAzNDAuMjUgMjM0LjI1IDM0MS4xCkwgMjM0LjI1IDM0MS4xNQpRIDIzMS40NSAzNDMuMyAyMjYgMzQyLjggMjI2IDM0Mi43NSAyMjUuOTUgMzQyLjc1IDIyNC4yIDM0Mi4zNSAyMjMuOCAzNDAuNiAyMjQuODUgMzM5LjA1IDIyNy43IDMzOS4yNSAyMjcuNzUgMzM5LjI1IDIyNy44IDMzOS4yNSAyMzAuMyAzMzkuMDUgMjMyLjY1IDMzOS4zIDIzMi43IDMzOS4zIDIzMi43IDMzOS40Ck0gMTY3LjIgMzQ0LjQKUSAxNjcuMjUgMzQ0LjM1IDE2Ny4zNSAzNDQuMzUgMTcwLjM1IDM0My41IDE3NCAzNDMuNSAxNzYuMDUgMzQzLjU1IDE3Ny40NSAzNDMuNSAxNzkuMzUgMzQzLjQ1IDE4MS4yIDM0My41IDE4Mi4xNSAzNDMuOTUgMTgyLjc1IDM0NC43NSAxODIuOCAzNDQuOCAxODIuOCAzNDQuODUgMTgyLjggMzQ1LjM1IDE4Mi43IDM0NS43IDE4Mi42NSAzNDUuNzUgMTgyLjY1IDM0NS44NSAxODIuMjUgMzQ2LjIgMTgxLjg1IDM0Ni42IDE4MS44IDM0Ni42IDE4MS44IDM0Ni43IDE4MSAzNDYuOSAxODAuMSAzNDcuMDUgMTgwLjA1IDM0Ny4wNSAxODAgMzQ3LjA1IDE3OC43IDM0Ny40IDE3Ny40IDM0Ny42NSAxNzMuNjUgMzQ4LjQ1IDE2OS45NSAzNDguMDUgMTY5LjM1IDM0OCAxNjguOCAzNDcuOQpMIDE2OC44IDM0Ny44NQpRIDE2OC41IDM0Ny44IDE2OC4yIDM0Ny44IDE2OC4xIDM0Ny44IDE2OC4wNSAzNDcuNzUgMTY2LjkgMzQ3LjY1IDE2Ni4yNSAzNDcuMDUgMTY2LjE1IDM0Ny4wNSAxNjYuMTUgMzQ3IDE2NS40IDM0Ni42NSAxNjUuNSAzNDUuNDUgMTY2IDM0NC41NSAxNjcuMiAzNDQuNCBaIi8+Cgo8cGF0aCBmaWxsPSIjMTkxOTE5IiBmaWxsLW9wYWNpdHk9IjAuOTQxMTc2NDcwNTg4MjM1MyIgc3Ryb2tlPSJub25lIiBkPSIKTSAxODAuMjUgMzQ0LjE1ClEgMTgwLjMgMzQ0LjE1IDE4MC4zNSAzNDQuMTUgMTgxLjM1IDM0NC40IDE4MS44IDM0NS4yNSAxODEuOCAzNDUuMyAxODEuOCAzNDUuMzUgMTgxLjIgMzQ2LjA1IDE4MC4xIDM0Ni4yNSAxNzguOCAzNDYuNDUgMTc3LjkgMzQ2Ljk1IDE3OC41IDM0Ny4yNSAxNzkuODUgMzQ3LjA1IDE3OS45IDM0Ny4wNSAxODAgMzQ3LjA1IDE4MC4wNSAzNDcuMDUgMTgwLjEgMzQ3LjA1IDE4MSAzNDYuOSAxODEuOCAzNDYuNyAxODEuOCAzNDYuNiAxODEuODUgMzQ2LjYgMTgyLjI1IDM0Ni4yIDE4Mi42NSAzNDUuODUgMTgyLjY1IDM0NS43NSAxODIuNyAzNDUuNyAxODIuOCAzNDUuMzUgMTgyLjggMzQ0Ljg1IDE4Mi44IDM0NC44IDE4Mi43NSAzNDQuNzUgMTgyLjE1IDM0My45NSAxODEuMiAzNDMuNSAxNzkuMzUgMzQzLjQ1IDE3Ny40NSAzNDMuNSAxNzYuMDUgMzQzLjU1IDE3NCAzNDMuNSAxNzAuMzUgMzQzLjUgMTY3LjM1IDM0NC4zNSAxNzMuNyAzNDQuMDUgMTgwLjI1IDM0NC4xNSBaIi8+Cgo8cGF0aCBmaWxsPSIjNjc2NzY3IiBmaWxsLW9wYWNpdHk9IjAuOTg4MjM1Mjk0MTE3NjQ3MSIgc3Ryb2tlPSJub25lIiBkPSIKTSAxNjkuMyAzNDQuNzUKUSAxNjkuMiAzNDQuNzUgMTY5LjE1IDM0NC43NSAxNjcuNzUgMzQ0LjkgMTY2Ljk1IDM0NS43IDE2Ny43IDM0Ni40NSAxNjcuNyAzNDcuMTUgMTY3LjcgMzQ3LjY1IDE2OC4yIDM0Ny44IDE2OC41IDM0Ny44IDE2OC44IDM0Ny44NQpMIDE2OC44IDM0Ny45ClEgMTY5LjM1IDM0OCAxNjkuOTUgMzQ4LjA1IDE3MS43IDM0OC4yIDE3My40IDM0OC4wNSAxNzMuNDUgMzQ4IDE3My41NSAzNDggMTczLjI1IDM0Ny44IDE3My44IDM0Ny40NSAxNzUgMzQ2LjYgMTc2Ljk1IDM0Ni4zNSAxNzkuMjUgMzQ2LjA1IDE4MS4xIDM0NS4yIDE3OS4yIDM0NC4zIDE3Ni4xIDM0NC42NSAxNzMuNiAzNDQuOSAxNzAuOSAzNDUuMiAxNjkuNyAzNDUuMzUgMTY5LjMgMzQ0Ljc1IFoiLz4KCjxwYXRoIGZpbGw9IiM0NTQ1NDUiIGZpbGwtb3BhY2l0eT0iMC45NzY0NzA1ODgyMzUyOTQxIiBzdHJva2U9Im5vbmUiIGQ9IgpNIDE2Ny4wNSAzNDUuMgpRIDE2Ni4zNSAzNDYuMSAxNjUuNzUgMzQ1LjYgMTY1LjY1IDM0Ni42NSAxNjYuMiAzNDYuOTUgMTY2LjI1IDM0NyAxNjYuMjUgMzQ3LjA1IDE2Ni45IDM0Ny42NSAxNjguMDUgMzQ3Ljc1IDE2OC4xIDM0Ny44IDE2OC4yIDM0Ny44IDE2Ny43IDM0Ny42NSAxNjcuNyAzNDcuMTUgMTY3LjcgMzQ2LjQ1IDE2Ni45NSAzNDUuNyAxNjcuNzUgMzQ0LjkgMTY5LjE1IDM0NC43NSAxNjkuMiAzNDQuNzUgMTY5LjMgMzQ0Ljc1IDE2OS43IDM0NS4zNSAxNzAuOSAzNDUuMiAxNzMuNiAzNDQuOSAxNzYuMSAzNDQuNjUgMTc5LjIgMzQ0LjMgMTgxLjEgMzQ1LjIgMTc5LjI1IDM0Ni4wNSAxNzYuOTUgMzQ2LjM1IDE3NSAzNDYuNiAxNzMuOCAzNDcuNDUgMTczLjI1IDM0Ny44IDE3My41NSAzNDggMTczLjYgMzQ4IDE3My42NSAzNDggMTc1LjMgMzQ3Ljc1IDE3Ny4wNSAzNDcuNTUKTCAxNzcuMDUgMzQ3LjUKUSAxNzYuMTUgMzQ3LjYgMTc1LjI1IDM0Ny40IDE3Ni43NSAzNDYuOCAxNzguNTUgMzQ2LjU1IDE4MC40NSAzNDYuMjUgMTgxLjU1IDM0NS4yIDE4MC44IDM0NC4xNSAxNzguOSAzNDQuMjUgMTczLjYgMzQ0LjQ1IDE2OC42NSAzNDQuNTUgMTY3LjU1IDM0NC42IDE2Ny4wNSAzNDUuMiBaIi8+Cgo8cGF0aCBmaWxsPSIjMkYyRjJGIiBmaWxsLW9wYWNpdHk9IjAuOTA5ODAzOTIxNTY4NjI3NCIgc3Ryb2tlPSJub25lIiBkPSIKTSAxNjUuNzUgMzQ1LjYKUSAxNjYuMzUgMzQ2LjEgMTY3LjA1IDM0NS4yIDE2Ny41NSAzNDQuNiAxNjguNjUgMzQ0LjU1IDE3My42IDM0NC40NSAxNzguOSAzNDQuMjUgMTgwLjggMzQ0LjE1IDE4MS41NSAzNDUuMiAxODAuNDUgMzQ2LjI1IDE3OC41NSAzNDYuNTUgMTc2Ljc1IDM0Ni44IDE3NS4yNSAzNDcuNCAxNzYuMTUgMzQ3LjYgMTc3LjA1IDM0Ny41CkwgMTc3LjA1IDM0Ny41NQpRIDE3NS4zIDM0Ny43NSAxNzMuNjUgMzQ4IDE3My42IDM0OCAxNzMuNTUgMzQ4IDE3My40NSAzNDggMTczLjQgMzQ4LjA1IDE3MS43IDM0OC4yIDE2OS45NSAzNDguMDUgMTczLjY1IDM0OC40NSAxNzcuNCAzNDcuNjUgMTc4LjcgMzQ3LjQgMTgwIDM0Ny4wNSAxNzkuOSAzNDcuMDUgMTc5Ljg1IDM0Ny4wNSAxNzguNSAzNDcuMjUgMTc3LjkgMzQ2Ljk1IDE3OC44IDM0Ni40NSAxODAuMSAzNDYuMjUgMTgxLjIgMzQ2LjA1IDE4MS44IDM0NS4zNSAxODEuOCAzNDUuMyAxODEuOCAzNDUuMjUgMTgxLjM1IDM0NC40IDE4MC4zNSAzNDQuMTUgMTgwLjMgMzQ0LjE1IDE4MC4yNSAzNDQuMTUgMTczLjcgMzQ0LjA1IDE2Ny4zNSAzNDQuMzUgMTY3LjI1IDM0NC4zNSAxNjcuMiAzNDQuNCAxNjYgMzQ0LjU1IDE2NS41IDM0NS40NSAxNjUuNCAzNDYuNjUgMTY2LjE1IDM0NyAxNjYuMTUgMzQ3LjA1IDE2Ni4yNSAzNDcuMDUgMTY2LjI1IDM0NyAxNjYuMiAzNDYuOTUgMTY1LjY1IDM0Ni42NSAxNjUuNzUgMzQ1LjYgWiIvPgoKPHBhdGggZmlsbD0iIzM0MzQzNCIgZmlsbC1vcGFjaXR5PSIwLjk4MDM5MjE1Njg2Mjc0NTEiIHN0cm9rZT0ibm9uZSIgZD0iCk0gMjMyLjUgMzM5LjQKTCAyMzIuNyAzMzkuNApRIDIzMi43IDMzOS4zIDIzMi42NSAzMzkuMyAyMzAuMyAzMzkuMDUgMjI3LjggMzM5LjI1CkwgMjI3LjkgMzM5LjQKUSAyMjUuNzUgMzM5LjcgMjI0LjQgMzQwLjcgMjI0Ljg1IDM0Mi40IDIyNy4yIDM0Mi4yIDIyNy4yNSAzNDIuMiAyMjcuMyAzNDIuMiAyMjYuMzUgMzQxLjY1IDIyNS4zIDM0MS4xNSAyMjUuMjUgMzQxLjE1IDIyNS4yNSAzNDEuMSAyMjYuMzUgMzQwLjE1IDIyOC45IDMzOS45NSAyMzEuMzUgMzM5LjcgMjMyLjkgMzQwLjcgMjMyLjM1IDM0MS41IDIzMS4yIDM0MS43IDIzMC45NSAzNDEuNzUgMjMwLjk1IDM0Mi4wNSAyMzIuNyAzNDIuMjUgMjMzLjQgMzQwLjg1IDIzMy40IDM0MC44IDIzMy40IDM0MC43IDIzMy4xNSAzMzkuNzUgMjMyLjUgMzM5LjQgWiIvPgoKPHBhdGggZmlsbD0iIzU0NTQ1NCIgZmlsbC1vcGFjaXR5PSIwLjk0NTA5ODAzOTIxNTY4NjIiIHN0cm9rZT0ibm9uZSIgZD0iCk0gMjMyLjggMzM5LjQKUSAyMzIuNzUgMzM5LjQgMjMyLjcgMzM5LjQKTCAyMzIuNSAzMzkuNApRIDIzMy4xNSAzMzkuNzUgMjMzLjQgMzQwLjcgMjMzLjQgMzQwLjggMjMzLjQgMzQwLjg1IDIzMi43IDM0Mi4yNSAyMzAuOTUgMzQyLjA1IDIzMC45NSAzNDEuNzUgMjMxLjIgMzQxLjcgMjMyLjM1IDM0MS41IDIzMi45IDM0MC43IDIzMS4zNSAzMzkuNyAyMjguOSAzMzkuOTUgMjI2LjM1IDM0MC4xNSAyMjUuMjUgMzQxLjEgMjI1LjI1IDM0MS4xNSAyMjUuMyAzNDEuMTUgMjI2LjM1IDM0MS42NSAyMjcuMyAzNDIuMiAyMjcuMjUgMzQyLjIgMjI3LjIgMzQyLjIgMjI0Ljg1IDM0Mi40IDIyNC40IDM0MC43IDIyNS43NSAzMzkuNyAyMjcuOSAzMzkuNApMIDIyNy44IDMzOS4yNQpRIDIyNy43NSAzMzkuMjUgMjI3LjcgMzM5LjI1IDIyNC44NSAzMzkuMDUgMjIzLjggMzQwLjYgMjI0LjIgMzQyLjM1IDIyNS45NSAzNDIuNzUgMjI2IDM0Mi43NSAyMjYgMzQyLjggMjMxLjQ1IDM0My4zIDIzNC4yNSAzNDEuMTUKTCAyMzQuMjUgMzQxLjEKUSAyMzQuMzUgMzQwLjI1IDIzMy45IDMzOS45NQpMIDIzMy45IDMzOS44NQpRIDIzMy4yIDMzOS43NSAyMzIuOCAzMzkuNCBaIi8+Cgo8cGF0aCBmaWxsPSIjNEM0QzRDIiBmaWxsLW9wYWNpdHk9IjAuOTY4NjI3NDUwOTgwMzkyMiIgc3Ryb2tlPSJub25lIiBkPSIKTSAyMDIuNzUgMzQ1LjM1ClEgMjAyLjc1IDM0NS4zIDIwMi43IDM0NS4yNSAyMDIuMzUgMzQ0LjE1IDIwMS4xNSAzNDMuOSAxOTguNDUgMzQzLjggMTk2LjI1IDM0My4zIDE5My41NSAzNDIuNzUgMTkxLjQgMzQzLjMKTCAxOTEuNCAzNDMuMzUKUSAxOTEuMDUgMzQzLjc1IDE5MC44IDM0NC4yNSAxOTAuOCAzNDQuMyAxOTAuOCAzNDQuMzUgMTkxIDM0NS45NSAxOTIuMyAzNDYuNDUgMTk0LjEgMzQ2Ljc1IDE5Ni4zIDM0Ni42IDE5Ny43NSAzNDYuNSAxOTkuMiAzNDYuNSAyMDEuNyAzNDYuNTUgMjAyLjc1IDM0NS4zNSBaIi8+Cgo8cGF0aCBmaWxsPSIjNjU2NTY1IiBmaWxsLW9wYWNpdHk9IjAuODAzOTIxNTY4NjI3NDUxIiBzdHJva2U9Im5vbmUiIGQ9IgpNIDIxMi42IDMyOC43ClEgMjEwLjQ1IDMyOS40IDIwOC4zNSAzMzAuMTUgMjA2LjkgMzMwLjc1IDIwNS4wNSAzMzAuOTUgMjAxLjk1IDMzMS4yNSAxOTguODUgMzMxLjQ1IDE5OC44NSAzMzEuNTUgMTk4Ljg1IDMzMS42CkwgMTk4Ljg1IDMzMS42NQpRIDE5OC41IDMzMS44IDE5OC4xIDMzMS44NSAxOTkuOCAzMzIuMzUgMjAyLjI1IDMzMi4wNSAyMDYuOSAzMzEuNCAyMTAuNyAzMjkuOSAyMTIuMDUgMzI5LjM1IDIxMi43IDMyOC42NSAyMTIuNjUgMzI4LjY1IDIxMi42IDMyOC43IFoiLz4KCjxwYXRoIGZpbGw9IiMyQzJDMkMiIGZpbGwtb3BhY2l0eT0iMC40IiBzdHJva2U9Im5vbmUiIGQ9IgpNIDIwOC4zNSAzMzAuMTUKUSAyMDguMzUgMzMwLjA1IDIwOC4zIDMzMC4wNSAyMDguMyAzMzAgMjA4LjIgMzMwIDIwNi4xNSAzMzAuNiAyMDMuODUgMzMwLjc1IDIwMS4yNSAzMzAuOSAxOTguOTUgMzMxLjI1IDE5OC4zIDMzMS4zNSAxOTcuNzUgMzMxLjQgMTk0LjM1IDMzMS43NSAxOTAuOCAzMzEuNSAxODcuNTUgMzMxLjI1IDE4NS4xIDMzMS45IDE4MS45NSAzMzIuNzUgMTc3LjY1IDMzMi41NQpMIDE3Ny42NSAzMzIuNjUKUSAxNzUuMiAzMzIuODUgMTcyLjU1IDMzMy4zIDE3Mi41NSAzMzMuMzUgMTcyLjU1IDMzMy40IDE3Mi43IDMzMy40IDE3Mi44IDMzMy40NSAxNzIuOCAzMzMuNSAxNzIuOCAzMzMuNTUgMTc2LjY1IDMzMi43NSAxODEuMyAzMzIuOCAxODIuOTUgMzMyLjggMTg0LjI1IDMzMi40NSAxODcuNTUgMzMxLjUgMTkxLjY1IDMzMS44NSAxOTEuNzUgMzMxLjg1IDE5MS44IDMzMS44NSAxOTEuOTUgMzMxLjg1IDE5Mi4xIDMzMS45IDE5Mi41NSAzMzEuOSAxOTIuOSAzMzIgMTk2LjA1IDMzMi4zNSAxOTguNzUgMzMxLjYgMTk4LjggMzMxLjYgMTk4Ljg1IDMzMS42IDE5OC44NSAzMzEuNTUgMTk4Ljg1IDMzMS40NSAyMDEuOTUgMzMxLjI1IDIwNS4wNSAzMzAuOTUgMjA2LjkgMzMwLjc1IDIwOC4zNSAzMzAuMTUgWiIvPgoKPHBhdGggZmlsbD0iIzI2MjYyNiIgZmlsbC1vcGFjaXR5PSIwLjMyOTQxMTc2NDcwNTg4MjM1IiBzdHJva2U9Im5vbmUiIGQ9IgpNIDIxNC44IDMyNgpRIDIxNC40NSAzMjUuMyAyMTMuNjUgMzI1LjEgMjA4LjEgMzIzLjQ1IDIwMi40IDMyMS44NSAxOTguOSAzMjAuODUgMTk2IDMxOS4xNSAxOTYuNTUgMzE5LjY1IDE5Ny4yNSAzMjAuMSAxOTcuNDUgMzIwLjIgMTk3LjU1IDMyMC4zIDE5OS41NSAzMjEuMzUgMjAxLjkgMzIyIDIwNi42IDMyMy4zNSAyMTEuMyAzMjQuNDUgMjEyLjg1IDMyNC44NSAyMTMuOTUgMzI1LjQ1IDIxNC4xNSAzMjUuNTUgMjE0LjIgMzI1Ljc1IDIxNC40IDMyNi40NSAyMTQuMSAzMjcuMSAyMTQuMDUgMzI3LjE1IDIxNC4wNSAzMjcuMiAyMTIuNSAzMjguOCAyMDkuODUgMzI5LjQgMjA4Ljk1IDMyOS42IDIwOC4yIDMzMCAyMDguMyAzMzAgMjA4LjMgMzMwLjA1IDIwOC4zNSAzMzAuMDUgMjA4LjM1IDMzMC4xNSAyMTAuNDUgMzI5LjQgMjEyLjYgMzI4LjcgMjEyLjY1IDMyOC42NSAyMTIuNyAzMjguNjUgMjEyLjcgMzI4LjYgMjEyLjc1IDMyOC42IDIxNC41NSAzMjguMDUgMjE0LjggMzI2IFoiLz4KCjxwYXRoIGZpbGw9IiMxOTE5MTkiIGZpbGwtb3BhY2l0eT0iMC45OTYwNzg0MzEzNzI1NDkiIHN0cm9rZT0ibm9uZSIgZD0iCk0gMjE0LjU1IDMyNC40ClEgMjE0LjU1IDMyNC41IDIxNC41NSAzMjQuNTUgMjE0Ljc1IDMyNS4wNSAyMTUuMDUgMzI1LjUgMjE1LjA1IDMyNS41NSAyMTUgMzI1LjY1IDIxNC43IDMyOC4xIDIxMy4xIDMyOS4zCkwgMjEzIDMyOS4zClEgMjEwLjk1IDMzMC40NSAyMDguNyAzMzEuMzUgMjAxLjM1IDMzMi45NSAxOTIuNCAzMzIuODUgMTg5LjU1IDMzMi44NSAxODcuNTUgMzMzLjMgMTkwLjcgMzMzLjcgMTk0LjM1IDMzMy42IDE5OCAzMzMuNSAyMDEuNCAzMzMuMiAyMDYuNCAzMzIuOCAyMTAuNSAzMzEuNCAyMTAuOCAzMzEuMyAyMTEuMDUgMzMxLjI1IDIxNS43IDMzMC4xNSAyMTUuNzUgMzI1LjE1IDIxNS43IDMyNS4xNSAyMTUuNyAzMjUuMSAyMTQuNSAzMjIuNjUgMjExLjc1IDMyMi4zNQpMIDIxMS43IDMyMi4zNQpRIDIxMy4xIDMyMy40IDIxNC41NSAzMjQuNCBaIi8+Cgo8cGF0aCBmaWxsPSIjN0Y3RjdGIiBmaWxsLW9wYWNpdHk9IjAuOTMzMzMzMzMzMzMzMzMzMyIgc3Ryb2tlPSJub25lIiBkPSIKTSAyMDIuNzUgMzIxLjUKTCAyMDIuNzUgMzIxLjU1ClEgMjA4LjUgMzIzLjUgMjE0LjIgMzI0LjkgMjE0LjIgMzI0Ljg1IDIxNC4xNSAzMjQuOCAyMTIuODUgMzIzLjUgMjExIDMyMi43IDIxMC42NSAzMjIuNyAyMTAuMyAzMjIuNjUgMjA2LjY1IDMyMS45NSAyMDIuNzUgMzIxLjUgWiIvPgoKPHBhdGggZmlsbD0iIzZFNkU2RSIgZmlsbC1vcGFjaXR5PSIwLjk5NjA3ODQzMTM3MjU0OSIgc3Ryb2tlPSJub25lIiBkPSIKTSAyMzguMjUgMzE5LjMKTCAyMzguMzUgMzE5LjMKUSAyMzguNSAzMTguOTUgMjM4Ljc1IDMxOC43IDIzOC44IDMxOC43IDIzOC44NSAzMTguNjUgMjQyLjEgMzE3LjEgMjQ0IDMxNC4yIDI0NCAzMTQuMTUgMjQzLjk1IDMxNC4xIDI0My44IDMxMy42NSAyNDMuNzUgMzEzLjEKTCAyNDMuNyAzMTMuMQpRIDI0My4zNSAzMTIuMiAyNDMuMTUgMzEyLjg1IDI0My4yIDMxMi45IDI0My4yIDMxMyAyNDMuMjUgMzEzLjIgMjQzLjIgMzEzLjIgMjQyLjIgMzEyLjcgMjQwLjk1IDMxMi40NSAyMzYuNCAzMTEuNTUgMjMwLjYgMzExLjMgMjI1LjkgMzExLjEgMjIxLjEgMzExLjQgMjE1Ljg1IDMxMS43NSAyMTEuMjUgMzEyLjcgMjA2LjggMzEzLjYgMjAxLjkgMzE0LjIKTCAyMDEuOSAzMTQuMjUKUSAxOTguNSAzMTQuNTUgMTk2LjggMzE2LjUgMTk2LjcgMzE3IDE5Ni44NSAzMTcuMjUgMTk4LjA1IDMxOC44IDIwMC4yNSAzMTkuNSAyMDIuNiAzMjAuMjUgMjA1LjU1IDMyMC42NSAyMDcuMyAzMjAuODUgMjA5LjEgMzIxLjA1IDIxMi45IDMyMS41IDIxNS40IDMyMy4xIDIxNS40IDMyMy4xNSAyMTUuNDUgMzIzLjE1IDIxNS45NSAzMjMuNiAyMTYuMzUgMzI0LjE1IDIxNi40NSAzMjQuMTUgMjE2LjUgMzI0LjIgMjE3LjM1IDMyNC40IDIxNy42IDMyNS4yNSAyMTcuNiAzMjUuMzUgMjE3LjU1IDMyNS40IDIxNi42IDMyOS40NSAyMTMuMSAzMzEuNiAyMTEuMSAzMzIuMyAyMDkuMDUgMzMyLjc1IDIwMi4zNSAzMzQuMTUgMTk0LjYgMzM0LjM1IDE5MC4zNSAzMzQuNSAxODcuMDUgMzM0LjQ1IDE4NC42IDMzNC40NSAxODIuNDUgMzM0Ljc1IDE3OC44NSAzMzUuMyAxNzUuMSAzMzUuMjUKTCAxNzUuMDUgMzM1LjI1ClEgMTc1IDMzNS4zNSAxNzQuOTUgMzM1LjM1IDE3MS4xNSAzMzYuMSAxNjcuNyAzMzcuMDUgMTY3LjcgMzM3LjE1IDE2Ny42NSAzMzcuMTUgMTY3LjA1IDMzNy42NSAxNjYuNSAzMzguMTUgMTY2LjY1IDMzOC42IDE2NyAzMzguNzUgMTY4LjI1IDMzOS4zNSAxNjcuOTUgMzQwLjM1IDE2Ny45NSAzNDAuNSAxNjggMzQwLjU1IDE2OC4zNSAzNDEuMiAxNjkuNiAzNDEuNTUgMTczLjEgMzQyLjYgMTc3LjQ1IDM0Mi4zIDE3Ny4zNSAzNDIuMyAxNzcuMyAzNDIuMyAxNzQuMSAzNDIuMDUgMTcxLjk1IDM0MC43IDE3Mi41IDM0MC40NSAxNzMuNjUgMzQwLjY1IDE3OS44IDM0MS41NSAxODYuOSAzNDEuNjUgMTkwLjQgMzQxLjY1IDE5My42IDM0MS4zNSAxOTguNiAzNDAuODUgMjAzLjk1IDM0MS4xCkwgMjAzLjk1IDM0MS4wNQpRIDIwNC40NSAzNDEuMDUgMjA0LjU1IDM0MC43IDIwNi42IDM0MC43NSAyMDguNDUgMzQwLjU1IDIwOS43IDM0MC40NSAyMDkuMiAzNDAuMjUKTCAyMDkuMiAzNDAuMTUKUSAyMTAuMDUgMzM5LjcgMjEyLjEgMzM5Ljg1IDIxMyAzMzkuMyAyMTQuNTUgMzM5LjIgMjE4LjUgMzM4Ljk1IDIyMiAzMzguMTUgMjI0Ljk1IDMzNy41IDIyOC4wNSAzMzcuMDUgMjM1LjE1IDMzNiAyNDAuNyAzMzMuNCAyNDAuNyAzMzMuMzUgMjQwLjc1IDMzMy4zNSAyNDEuNjUgMzMyLjY1IDI0MS44IDMzMS4yNSAyNDEuOCAzMzEuMTUgMjQxLjggMzMxLjEgMjQxLjMgMzMwLjIgMjQwLjg1IDMyOS4zIDI0MC43NSAzMjkuMyAyNDAuNzUgMzI5LjI1IDIzOC43NSAzMjcuNyAyMzYuNDUgMzI2LjUgMjM1LjYgMzI1LjY1IDIzNC45IDMyNC43IDIzNC4xIDMyMy41NSAyMzQuNyAzMjIuMiAyMzUuOCAzMTkuOCAyMzguMjUgMzE5LjMKTSA3NS40NSAzNjQuMQpRIDc1LjU1IDM2NS4zNSA3Ni45IDM2NS40IDgwLjM1IDM2NS41NSA4My45IDM2NC45NSA4OC40NSAzNjQuMiA5MS41IDM2MiA5MCAzNjEuMDUgODcuMjUgMzYxLjI1IDgwLjMgMzYxLjY1IDc1LjQ1IDM2NC4xIFoiLz4KCjxwYXRoIGZpbGw9IiMyNzI3MjciIGZpbGwtb3BhY2l0eT0iMC4zODgyMzUyOTQxMTc2NDcwNyIgc3Ryb2tlPSJub25lIiBkPSIKTSAyMjQuNCAzMDkuNwpRIDIyNC40IDMwOS42NSAyMjQuNCAzMDkuNTUgMjE1LjI1IDMwOS44IDIwNy41IDMxMS40NSAyMDUuNiAzMTEuOSAyMDMuNCAzMTEuODUgMjAyLjU1IDMxMi4wNSAyMDEuNzUgMzEyLjM1IDIwNS4yIDMxMi4yIDIwOC4yNSAzMTEuNiAyMTQuOSAzMTAuMjUgMjIyLjYgMzA5Ljk1IDIyMi42IDMwOS44NSAyMjIuNiAzMDkuOCAyMjMuNDUgMzA5Ljc1IDIyNC4zIDMwOS43IDIyNC4zNSAzMDkuNyAyMjQuNCAzMDkuNyBaIi8+Cgo8cGF0aCBmaWxsPSIjMTUxNTE1IiBmaWxsLW9wYWNpdHk9IjAuMzM3MjU0OTAxOTYwNzg0MzQiIHN0cm9rZT0ibm9uZSIgZD0iCk0gMjI0LjQgMzA5LjU1ClEgMjI0LjQgMzA5LjY1IDIyNC40IDMwOS43IDIyOS40NSAzMDkuOSAyMzQuNSAzMTAuMSAyMzguNCAzMTAuMjUgMjQyLjA1IDMxMC43IDI0NS45IDMxMS4yIDI0NS4yIDMxNC45IDI0NC45IDMxNi41NSAyNDMuNiAzMTcuMzUgMjQwLjg1IDMxOS4xIDIzOC41IDMyMS4zNSAyMzkuMDUgMzIxIDIzOS42IDMyMC43IDI0My40IDMxOC41NSAyNDUuNyAzMTQuOSAyNDUuNyAzMTQuODUgMjQ1LjcgMzE0LjggMjQ1LjcgMzEzLjk1IDI0NS43IDMxMy4xIDI0NC4zNSAzMTAuMyAyNDAuMzUgMzEwLjI1IDIzNy45IDMxMC4yIDIzNS44NSAzMTAgMjMzLjcgMzA5Ljc1IDIzMS45NSAzMDkuOCAyMjguMSAzMDkuODUgMjI0LjQgMzA5LjU1IFoiLz4KCjxwYXRoIGZpbGw9IiM2NjY2NjYiIGZpbGwtb3BhY2l0eT0iMC44OTAxOTYwNzg0MzEzNzI1IiBzdHJva2U9Im5vbmUiIGQ9IgpNIDIzMS4zNSAzMTAuMDUKTCAyMzEuMiAzMTAuMDUKUSAyMzIuMiAzMTEuNCAyMzQuNiAzMTEuMzUgMjM2LjM1IDMxMS4zNSAyMzcuODUgMzEwLjg1IDIzOC4wNSAzMTAuOCAyMzguMDUgMzEwLjU1CkwgMjM3LjkgMzEwLjU1ClEgMjM3Ljg1IDMxMC41NSAyMzcuOCAzMTAuNTUgMjM0LjY1IDMxMC4xIDIzMS43IDMxMC4wNSAyMzEuNjUgMzEwLjA1IDIzMS42IDMxMC4wNSAyMzEuNDY4NzUgMzEwLjA1IDIzMS4zNSAzMTAuMDUgWiIvPgoKPHBhdGggZmlsbD0iIzI5MjkyOSIgZmlsbC1vcGFjaXR5PSIwLjU2MDc4NDMxMzcyNTQ5MDIiIHN0cm9rZT0ibm9uZSIgZD0iCk0gMjMxLjIgMzEwLjA1CkwgMjMxLjM1IDMxMC4wNQpRIDIzMS41MTg3NSAzMTAuMDQ1MzEyNSAyMzEuNyAzMTAKTCAyMzEuNyAzMTAuMDUKUSAyMzQuNjUgMzEwLjEgMjM3LjggMzEwLjU1IDIzNy44NSAzMTAuNTUgMjM3LjkgMzEwLjU1CkwgMjM3LjkgMzEwLjUKUSAyNDEuODUgMzEwLjQgMjQ0LjM1IDMxMS43NSAyNDQuNjUgMzEyLjMgMjQ0Ljk1IDMxMi44IDI0NS41NSAzMTMuOTUgMjQ1IDMxNSAyNDMuNzUgMzE3LjMgMjQxLjU1IDMxOC43IDI0MS41IDMxOC43IDI0MS40NSAzMTguNyAyNDEuMjUgMzE4Ljg1IDI0MC44NSAzMTguOCAyNDAuODUgMzE4LjkgMjQwLjggMzE4LjkgMjM5LjU1IDMyMCAyMzguMjUgMzIxIDIzOC4yNSAzMjEuMDUgMjM4LjI1IDMyMS4xIDIzNy43IDMyMi4yNSAyMzYuOTUgMzIzLjIgMjM2Ljk1IDMyNC4yNSAyMzcuMzUgMzI0Ljg1IDIzNy4zNSAzMjQuOSAyMzcuNCAzMjQuOSAyMzcuNCAzMjQuODUgMjM3LjQgMzI0LjggMjM3LjQ1IDMyNC42IDIzNy40IDMyNC40IDIzNy40IDMyNC4zNSAyMzcuNCAzMjQuMyAyMzcuMjUgMzIzLjkgMjM3LjIgMzIzLjQ1IDIzNy43IDMyMi4zNSAyMzguNSAzMjEuNDUKTCAyMzguNSAzMjEuMzUKUSAyNDAuODUgMzE5LjEgMjQzLjYgMzE3LjM1IDI0NC45IDMxNi41NSAyNDUuMiAzMTQuOSAyNDUuOSAzMTEuMiAyNDIuMDUgMzEwLjcgMjM4LjQgMzEwLjI1IDIzNC41IDMxMC4xIDIyOS40NSAzMDkuOSAyMjQuNCAzMDkuNyAyMjQuMzUgMzA5LjcgMjI0LjMgMzA5LjcgMjIzLjQ1IDMwOS43NSAyMjIuNiAzMDkuOCAyMjIuNiAzMDkuODUgMjIyLjYgMzA5Ljk1IDIyNy4xIDMxMC40IDIzMS4yIDMxMC4wNSBaIi8+Cgo8cGF0aCBmaWxsPSIjMDgwODA4IiBmaWxsLW9wYWNpdHk9IjAuNDk0MTE3NjQ3MDU4ODIzNTUiIHN0cm9rZT0ibm9uZSIgZD0iCk0gODAuNjUgMzYwLjM1ClEgNzkuMiAzNjAuNjUgNzcuOTUgMzYxLjE1IDc1LjI1IDM2Mi4yIDczLjQgMzY0LjEgNzMuMjUgMzY1LjQgNzQuMDUgMzY1Ljg1IDc2LjQ1IDM2Ny4yIDgwLjEgMzY2Ljk1IDg0Ljc1IDM2Ni41NSA4OC4zIDM2NS4zNSA4OS40IDM2NC45NSA5MC4zNSAzNjQuNjUgOTIuNTUgMzYzLjk1IDkyLjc1IDM2MS40IDkyLjY1IDM2MS4yNSA5Mi41NSAzNjEuMTUgOTAuOCAzNTkuNCA4Ny4yNSAzNTkuNTUgODMuNzUgMzU5LjcgODAuNjUgMzYwLjM1Ck0gODAuMiAzNjYuNQpRIDc4IDM2Ni41IDc2LjIgMzY2LjM1IDczLjk1IDM2Ni4yIDczLjc1IDM2NC4xIDc1Ljc1IDM2Mi4xIDc4Ljc1IDM2MS4xNSA3OS45IDM2MC43NSA4MS4yNSAzNjAuNTUgODQuODUgMzU5LjkgODkuMSAzNjAgOTEuMSAzNjAuMDUgOTIuMTUgMzYxLjE1IDkyLjM1IDM2MS40IDkyLjUgMzYxLjY1IDkyLjYgMzYyLjYgOTIuMTUgMzYzIDkyLjE1IDM2My4wNSA5Mi4xNSAzNjMuMSA4OC4xIDM2NS43IDgyLjA1IDM2Ni40NSA4MS4yIDM2Ni41NSA4MC4yIDM2Ni41IFoiLz4KCjxwYXRoIGZpbGw9IiMxMjEyMTIiIGZpbGwtb3BhY2l0eT0iMC44NTQ5MDE5NjA3ODQzMTM3IiBzdHJva2U9Im5vbmUiIGQ9IgpNIDc2LjIgMzY2LjM1ClEgNzggMzY2LjUgODAuMiAzNjYuNSA4MS4yIDM2Ni41NSA4Mi4wNSAzNjYuNDUgODguMSAzNjUuNyA5Mi4xNSAzNjMuMSA5Mi4xNSAzNjMuMDUgOTIuMTUgMzYzIDkyLjYgMzYyLjYgOTIuNSAzNjEuNjUgOTIuMzUgMzYxLjQgOTIuMTUgMzYxLjE1IDkxLjEgMzYwLjA1IDg5LjEgMzYwIDg0Ljg1IDM1OS45IDgxLjI1IDM2MC41NSA3OS45IDM2MC43NSA3OC43NSAzNjEuMTUgNzUuNzUgMzYyLjEgNzMuNzUgMzY0LjEgNzMuOTUgMzY2LjIgNzYuMiAzNjYuMzUKTSA3NSAzNjQuMgpRIDc0Ljk1IDM2NC4xNSA3NC45NSAzNjQuMSA3NS4xNSAzNjMuNzUgNzUuNCAzNjMuNDUgNzUuNDUgMzYzLjQgNzUuNDUgMzYzLjM1IDc4Ljg1IDM2MS44NSA4My4wNSAzNjEuMTUgODUuMyAzNjAuNzUgODcuODUgMzYwLjYgOTAgMzYwLjQ1IDkxLjI1IDM2MS4xNSA5MS42NSAzNjEuNCA5MiAzNjEuNzUgOTIuMTUgMzYyLjY1IDkxLjY1IDM2Mi45IDkxLjY1IDM2Mi45NSA5MS42NSAzNjMgOTAuNzUgMzYzLjM1IDg5Ljg1IDM2My42NSA4OS4yIDM2My45NSA4OC40IDM2NC4xIDg4LjMgMzY0LjEgODguMjUgMzY0LjE1IDgzLjk1IDM2NS40NSA3OS4yIDM2Ni4yNSA3OS4xNSAzNjYuMyA3OS4xIDM2Ni4zIDc4LjY1IDM2Ni4xNSA3OC4zNSAzNjUuOCA3OC4zIDM2NS44IDc4LjI1IDM2NS44IDc1LjQgMzY2LjQ1IDc1IDM2NC4yIFoiLz4KCjxwYXRoIGZpbGw9IiM0RTRFNEUiIGZpbGwtb3BhY2l0eT0iMC45NzY0NzA1ODgyMzUyOTQxIiBzdHJva2U9Im5vbmUiIGQ9IgpNIDc1LjggMzYzLjUKTCA3NS44IDM2My41NQpRIDc1LjUgMzYzLjg1IDc1LjIgMzY0LjEgNzUuMiAzNjUuNCA3Ni4zIDM2NS40NSA3Ny42NSAzNjUuNSA3OC43NSAzNjUuNSA4Mi41IDM2NS42IDg1Ljk1IDM2NC42NSA4Ny4xNSAzNjQuMyA4OC4yNSAzNjQuMTUgODguMyAzNjQuMSA4OC40IDM2NC4xIDg5LjIgMzYzLjk1IDg5Ljg1IDM2My42NSA5MS4xNSAzNjMgOTEuNzUgMzYxLjc1IDkxLjE1IDM2MS4zIDkwLjI1IDM2MS4xNSA5MCAzNjEuMSA4OS43IDM2MS4xIDg4LjI1IDM2MS4xIDg2LjkgMzYxLjE1IDgwLjcgMzYxLjQ1IDc1LjggMzYzLjUKTSA3Ni45IDM2NS40ClEgNzUuNTUgMzY1LjM1IDc1LjQ1IDM2NC4xIDgwLjMgMzYxLjY1IDg3LjI1IDM2MS4yNSA5MCAzNjEuMDUgOTEuNSAzNjIgODguNDUgMzY0LjIgODMuOSAzNjQuOTUgODAuMzUgMzY1LjU1IDc2LjkgMzY1LjQgWiIvPgoKPHBhdGggZmlsbD0iIzJBMkEyQSIgZmlsbC1vcGFjaXR5PSIwLjkxNzY0NzA1ODgyMzUyOTQiIHN0cm9rZT0ibm9uZSIgZD0iCk0gNzUuOCAzNjMuNTUKTCA3NS44IDM2My41ClEgODAuNyAzNjEuNDUgODYuOSAzNjEuMTUgODguMjUgMzYxLjEgODkuNyAzNjEuMSA5MCAzNjEuMSA5MC4yNSAzNjEuMTUgOTEuMTUgMzYxLjMgOTEuNzUgMzYxLjc1IDkxLjE1IDM2MyA4OS44NSAzNjMuNjUgOTAuNzUgMzYzLjM1IDkxLjY1IDM2MyA5MS42NSAzNjIuOTUgOTEuNjUgMzYyLjkgOTIuMTUgMzYyLjY1IDkyIDM2MS43NSA5MS42NSAzNjEuNCA5MS4yNSAzNjEuMTUgOTAgMzYwLjQ1IDg3Ljg1IDM2MC42IDg1LjMgMzYwLjc1IDgzLjA1IDM2MS4xNSA3OC44NSAzNjEuODUgNzUuNDUgMzYzLjM1IDc1LjQ1IDM2My40IDc1LjQgMzYzLjQ1IDc1LjE1IDM2My43NSA3NC45NSAzNjQuMSA3NC45NSAzNjQuMTUgNzUgMzY0LjIgNzUuNCAzNjYuNDUgNzguMjUgMzY1LjggNzguMyAzNjUuOCA3OC4zNSAzNjUuOCA3OC42NSAzNjYuMTUgNzkuMSAzNjYuMyA3OS4xNSAzNjYuMyA3OS4yIDM2Ni4yNSA4My45NSAzNjUuNDUgODguMjUgMzY0LjE1IDg3LjE1IDM2NC4zIDg1Ljk1IDM2NC42NSA4Mi41IDM2NS42IDc4Ljc1IDM2NS41IDc3LjY1IDM2NS41IDc2LjMgMzY1LjQ1IDc1LjIgMzY1LjQgNzUuMiAzNjQuMSA3NS41IDM2My44NSA3NS44IDM2My41NSBaIi8+Cgo8cGF0aCBmaWxsPSIjMjgyODI4IiBmaWxsLW9wYWNpdHk9IjAuNDExNzY0NzA1ODgyMzUyOSIgc3Ryb2tlPSJub25lIiBkPSIKTSA2MC45NSAzNjQuNTUKUSA2NS40NSAzNjMuODUgNzAuNiAzNjMuNwpMIDcwLjYgMzYzLjY1ClEgNzEuODUgMzYzLjU1IDcyLjMgMzYyLjc1IDcyLjM1IDM2Mi43NSA3Mi40IDM2Mi43IDczLjE1IDM2Mi4yNSA3My42NSAzNjEuNTUgNzMuNjUgMzYxLjQ1IDczLjY1IDM2MS40IDczLjY1IDM2MS4yNSA3My43IDM2MS4xNSA3My43NSAzNjAuNSA3My42NSAzNjAuMDUgNzMuNjUgMzYwIDczLjYgMzU5Ljk1IDczLjMgMzU5LjQ1IDczIDM1OC45NSA3Mi4yIDM1OC41NSA3MC45NSAzNTguNTUgNjIuNCAzNTguNjUgNTQuOSAzNTkuOCA1My4wNSAzNjAuMDUgNTIuMDUgMzYxLjE1IDUxLjc1IDM2MS41IDUxLjUgMzYxLjkgNTEuNSAzNjEuOTUgNTEuNSAzNjIgNTEuNSAzNjIuODUgNTEuODUgMzYzLjM1IDU1LjMgMzY1LjQgNjAuOTUgMzY0LjU1Ck0gNzAuNDUgMzYzLjIKUSA2Ny40NSAzNjMuNSA2NC42IDM2My44NSA2NC41NSAzNjMuODUgNjQuNSAzNjMuODUgNjAuNDUgMzY0LjcgNTYuMzUgMzY0LjM1IDU2LjMgMzY0LjM1IDU2LjI1IDM2NC4zNSA1NC43IDM2NC40NSA1My40NSAzNjMuNyA1My4zNSAzNjMuNyA1My4zIDM2My43IDUxLjkgMzYzLjYgNTEuOTUgMzYyIDUyLjIgMzYxLjUgNTIuNTUgMzYxLjE1IDUzLjQ1IDM2MC4yIDU1LjEgMzYwIDU5IDM1OS41IDYyLjcgMzU5LjM1IDY0Ljk1IDM1OC45IDY3LjU1IDM1OC44IDcwLjM1IDM1OC43IDcyLjY1IDM1OS4xIDczLjEgMzU5LjYgNzMuNSAzNjAuMSA3My41IDM2MC4xNSA3My41IDM2MC4yIDczLjQgMzYwLjcgNzMuMyAzNjEuMTUgNzIuNiAzNjIuOTUgNzAuNDUgMzYzLjIgWiIvPgoKPHBhdGggZmlsbD0iIzY1NjU2NSIgZmlsbC1vcGFjaXR5PSIwLjgzNTI5NDExNzY0NzA1ODkiIHN0cm9rZT0ibm9uZSIgZD0iCk0gNTMuMyAzNjMuNwpRIDUzLjM1IDM2My43IDUzLjQ1IDM2My43IDUzLjQ1IDM2My42NSA1My40IDM2My42IDUzLjA1IDM2My4xNSA1Mi45NSAzNjIuNSA1My41NSAzNjEuNyA1NC40NSAzNjEuMTUgNTUuNTUgMzYwLjQ1IDU3LjEgMzYwLjI1IDU5Ljk1IDM1OS44NSA2Mi43IDM1OS4zNSA1OSAzNTkuNSA1NS4xIDM2MCA1My40NSAzNjAuMiA1Mi41NSAzNjEuMTUgNTIuMiAzNjEuNSA1MS45NSAzNjIgNTEuOSAzNjMuNiA1My4zIDM2My43IFoiLz4KCjxwYXRoIGZpbGw9IiM2NTY1NjUiIGZpbGwtb3BhY2l0eT0iMC45ODAzOTIxNTY4NjI3NDUxIiBzdHJva2U9Im5vbmUiIGQ9IgpNIDY2LjIgMzYyLjIKUSA2OC43NSAzNjEuOSA3MC44NSAzNjEuMTUgNzEuNCAzNjAuOTUgNzEuOTUgMzYwLjcgNzIgMzYwLjQ1IDcxLjggMzYwLjQgNjguMSAzNTkuOTUgNjQuMjUgMzYwLjUgNjIuMjUgMzYwLjg1IDYwLjIgMzYxLjE1IDU4LjUgMzYxLjQgNTYuODUgMzYxLjY1IDU2Ljg1IDM2MS43IDU2LjggMzYxLjcgNTUuNjUgMzYyLjA1IDU0LjY1IDM2Mi41IDU2LjA1IDM2My4wNSA1Ny4yIDM2My40CkwgNTcuMiAzNjMuNQpRIDU3IDM2NC4wNSA1Ni4zNSAzNjQuMjUKTCA1Ni4zNSAzNjQuMzUKUSA2MC40NSAzNjQuNyA2NC41IDM2My44NSA2NC41NSAzNjMuODUgNjQuNiAzNjMuODUgNjIuMzUgMzYzLjY1IDYwLjE1IDM2NC4wNSA1OC45IDM2NC4yNSA1OC4wNSAzNjMuMzUgNTguMSAzNjMuMzUgNTguMTUgMzYzLjM1IDYxLjI1IDM2Mi4xNSA2Ni4yIDM2Mi4yNQpMIDY2LjIgMzYyLjIgWiIvPgoKPHBhdGggZmlsbD0iIzM5MzkzOSIgZmlsbC1vcGFjaXR5PSIwLjk3NjQ3MDU4ODIzNTI5NDEiIHN0cm9rZT0ibm9uZSIgZD0iCk0gNjQuNiAzNjMuODUKUSA2Ny40NSAzNjMuNSA3MC40NSAzNjMuMiA3Mi42IDM2Mi45NSA3My4zIDM2MS4xNSA3My40IDM2MC43IDczLjUgMzYwLjIgNzMuNSAzNjAuMTUgNzMuNSAzNjAuMSA3My4xIDM1OS42IDcyLjY1IDM1OS4xIDcwLjM1IDM1OC43IDY3LjU1IDM1OC44IDY0Ljk1IDM1OC45IDYyLjcgMzU5LjM1IDU5Ljk1IDM1OS44NSA1Ny4xIDM2MC4yNSA1NS41NSAzNjAuNDUgNTQuNDUgMzYxLjE1IDUzLjU1IDM2MS43IDUyLjk1IDM2Mi41IDUzLjA1IDM2My4xNSA1My40IDM2My42IDUzLjQ1IDM2My42NSA1My40NSAzNjMuNyA1NC43IDM2NC40NSA1Ni4yNSAzNjQuMzUgNTYuMyAzNjQuMzUgNTYuMzUgMzY0LjM1CkwgNTYuMzUgMzY0LjI1ClEgNTcgMzY0LjA1IDU3LjIgMzYzLjUKTCA1Ny4yIDM2My40ClEgNTYuMDUgMzYzLjA1IDU0LjY1IDM2Mi41IDU1LjY1IDM2Mi4wNSA1Ni44IDM2MS43IDU2Ljg1IDM2MS43IDU2Ljg1IDM2MS42NSA1OC41IDM2MS40IDYwLjIgMzYxLjE1IDYyLjI1IDM2MC44NSA2NC4yNSAzNjAuNSA2OC4xIDM1OS45NSA3MS44IDM2MC40IDcyIDM2MC40NSA3MS45NSAzNjAuNyA3MS40IDM2MC45NSA3MC44NSAzNjEuMTUgNjguNzUgMzYxLjkgNjYuMiAzNjIuMgpMIDY2LjIgMzYyLjI1ClEgNjEuMjUgMzYyLjE1IDU4LjE1IDM2My4zNSA1OC4xIDM2My4zNSA1OC4wNSAzNjMuMzUgNTguOSAzNjQuMjUgNjAuMTUgMzY0LjA1IDYyLjM1IDM2My42NSA2NC42IDM2My44NSBaIi8+Cgo8cGF0aCBmaWxsPSIjMkQyRDJEIiBmaWxsLW9wYWNpdHk9IjAuNDM5MjE1Njg2Mjc0NTA5OCIgc3Ryb2tlPSJub25lIiBkPSIKTSAzNi4xNSAzNTIuNTUKUSAzNi4xIDM1Mi41NSAzNi4wNSAzNTIuNTUgMzQuNiAzNTIuOCAzMy4yNSAzNTIuNTUgMzMuMyAzNTIuNTUgMzMuMzUgMzUyLjUgMzQuMzUgMzUyLjMgMzQuNTUgMzUxLjMgMzQuNTUgMzUxLjI1IDM0LjU1IDM1MS4yIDM0LjE1IDM1MC4yNSAzMy4xIDM0OS45NSAzMy4wNSAzNDkuOTUgMzMgMzUwIDI3LjggMzUwLjQ1IDIyLjUgMzUwLjM1CkwgMjIuNSAzNTAuNApRIDIxLjc1IDM1MC44IDIxLjIgMzUxLjMgMjEuMiAzNTEuMzUgMjEuMiAzNTEuNCAyMS40NSAzNTIuMjUgMjIuMDUgMzUyLjc1IDIyLjEgMzUyLjc1IDIyLjE1IDM1Mi44IDI0Ljk1IDM1My4yNSAyOC4yNSAzNTMuMjUgMjYuNDUgMzUzLjQ1IDI0LjM1IDM1My40IDI0LjM1IDM1My40NSAyNC4zIDM1My40NSAyMy45IDM1My42NSAyMy41IDM1My44NSAyMy41IDM1My45IDIzLjQ1IDM1My45NSAyMy4xNSAzNTQuMjUgMjMuMjUgMzU0Ljk1IDI0Ljc1IDM1Ni42IDI4LjI1IDM1Ni4yNSAyOS40NSAzNTYuMTUgMzAuMDUgMzU2LjU1IDMwIDM1Ni41NSAyOS45NSAzNTYuNTUgMjkuMyAzNTYuOTUgMjguMzUgMzU3LjA1CkwgMjguMzUgMzU3LjEKUSAyNy44IDM1Ny4zIDI3LjY1IDM1Ny45CkwgMjcuNTUgMzU3LjkKUSAyNy40IDM1OC40IDI3LjY1IDM1OC42IDI3LjYgMzU5LjA1IDI3Ljk1IDM1OS4yIDMwLjA1IDM2MC40IDMzIDM1OS43NSAzMy43NSAzNTkuNTUgMzQuNDUgMzU5LjUgMzguNSAzNTkgNDEgMzU3LjE1CkwgNDEuMSAzNTcuMTUKUSA0MS4yIDM1Ni4wNSA0MC42NSAzNTUuNTUgNDAuNiAzNTUuNTUgNDAuNTUgMzU1LjU1IDM5LjQ1IDM1NS4xNSAzOC4xIDM1NS41NSAzOC4wNSAzNTUuNTUgMzggMzU1LjU1IDM3LjM1IDM1NS4xNSAzNy45NSAzNTQuNDUgMzcuOTUgMzU0LjQgMzcuOTUgMzU0LjM1IDM3Ljg1IDM1My4yIDM3IDM1Mi43NSAzNi45NSAzNTIuNzUgMzYuOSAzNTIuNzUgMzYuNSAzNTIuNjUgMzYuMTUgMzUyLjU1Ck0gMzMgMzUwLjQ1ClEgMzMuMzUgMzUwLjQ1IDMzLjc1IDM1MC43IDM0LjA1IDM1MC45IDM0LjMgMzUxLjIgMzMuMTUgMzUyLjUgMzEgMzUyLjggMjkuMjUgMzUzLjA1IDI3LjE1IDM1My4xIDI0Ljk1IDM1My4xNSAyMy4zNSAzNTIuNzUgMjMuMyAzNTIuNyAyMy4yNSAzNTIuNyAyMi44NSAzNTIuNiAyMi41IDM1Mi40NQpMIDIyLjQ1IDM1Mi40ClEgMjIuNDQyMTg3NSAzNTIuNCAyMi40IDM1Mi40IDIxLjggMzUyLjE1IDIxLjggMzUxLjMgMjMgMzUwLjIgMjUuNiAzNTAuNiAyNi4wNSAzNTAuNjUgMjYuOCAzNTAuNjUgMjkuOTUgMzUwLjYgMzMgMzUwLjQ1Ck0gMzQuODUgMzU1Ljk1ClEgMzQuOCAzNTYgMzQuOCAzNTYuMDUgMzYuNzUgMzU1LjcgMzguNyAzNTUuOTUgMzguNzUgMzU1Ljk1IDM4Ljg1IDM1NS45NSAzOS4yIDM1NS41IDQwLjA1IDM1NS42NQpMIDQwLjA1IDM1NS43ClEgNDEgMzU2IDQwLjggMzU2LjkgNDAuNzUgMzU2Ljk1IDQwLjc1IDM1Ny4wNSA0MC4xIDM1Ny42NSAzOS4wNSAzNTcuODUgMzkgMzU3LjkgMzguOTUgMzU3LjkgMzcuNyAzNTguNjUgMzUuOCAzNTguOSAzNC44NSAzNTkgMzMuOCAzNTkuMyAzMS4wNSAzNjAuMTUgMjguMzUgMzU5LjEgMjguMzUgMzU5LjA1IDI4LjM1IDM1OSAyNy44IDM1OC43NSAyNy44NSAzNTcuOSAyOC4xIDM1Ny43IDI4LjQgMzU3LjYgMzAuMTUgMzU3LjA1IDMxLjUgMzU2LjIgMzAuNSAzNTYgMjkuMiAzNTYuMDUgMjcuOSAzNTYuMSAyNi44IDM1Ni4xNSAyMy45IDM1Ni4zNSAyMy41IDM1NC4zNSAyNC45NSAzNTMuMjUgMjcuOSAzNTMuNCAyOS4yIDM1My41IDMwLjU1IDM1My4zIDMyLjQgMzUzLjA1IDM0LjQ1IDM1Mi44NSAzNS40IDM1Mi43NSAzNi4zIDM1Mi45NSAzNy4yIDM1My4xNSAzNy41IDM1My44NSAzNy41NSAzNTUuMSAzNi44IDM1NS41IDM2Ljc1IDM1NS41IDM2Ljc1IDM1NS41NSAzNS40IDM1NS4zNSAzNC44NSAzNTUuOTUgWiIvPgoKPHBhdGggZmlsbD0iIzNBM0EzQSIgZmlsbC1vcGFjaXR5PSIwLjk2NDcwNTg4MjM1Mjk0MTIiIHN0cm9rZT0ibm9uZSIgZD0iCk0gMzAuNTUgMzU4LjgKTCAzMC41NSAzNTguODUKUSAzMy42NSAzNTkgMzYuNzUgMzU4LjEgMzcuOSAzNTcuNzUgMzguOTUgMzU3LjkgMzkgMzU3LjkgMzkuMDUgMzU3Ljg1IDQwLjEgMzU3LjY1IDQwLjc1IDM1Ny4wNSA0MC43NSAzNTYuOTUgNDAuOCAzNTYuOSA0MSAzNTYgNDAuMDUgMzU1LjcKTCA0MC4wNSAzNTUuNjUKUSAzOS4yIDM1NS41IDM4Ljg1IDM1NS45NSAzOC43NSAzNTUuOTUgMzguNyAzNTUuOTUgMzYuNzUgMzU1LjcgMzQuOCAzNTYuMDUgMzQuNzUgMzU2LjA1IDM0LjcgMzU2LjEgMzQuMSAzNTYuMyAzMy42IDM1Ni42NSAzMy41NSAzNTYuNjUgMzMuNDUgMzU2LjY1IDMwLjggMzU2Ljg1IDI4Ljg1IDM1Ny43NSAyOS4yNSAzNTkgMzAuMDUgMzU3Ljc1IDMwLjA1IDM1Ny43IDMwLjA1IDM1Ny42NSAzMiAzNTcuNDUgMzMuNyAzNTcuMSAzNS45IDM1Ni42NSAzNy42IDM1Ny4yNSAzNC42IDM1OC41NSAzMC41NSAzNTguOCBaIi8+Cgo8cGF0aCBmaWxsPSIjNUY1RjVGIiBmaWxsLW9wYWNpdHk9IjAuOTMzMzMzMzMzMzMzMzMzMyIgc3Ryb2tlPSJub25lIiBkPSIKTSAzMC41NSAzNTguODUKTCAzMC41NSAzNTguOApRIDM0LjYgMzU4LjU1IDM3LjYgMzU3LjI1IDM1LjkgMzU2LjY1IDMzLjcgMzU3LjEgMzIgMzU3LjQ1IDMwLjA1IDM1Ny42NSAzMC4wNSAzNTcuNyAzMC4wNSAzNTcuNzUgMjkuMjUgMzU5IDI4Ljg1IDM1Ny43NSAzMC44IDM1Ni44NSAzMy40NSAzNTYuNjUgMzMuNTUgMzU2LjY1IDMzLjYgMzU2LjY1IDM0LjEgMzU2LjMgMzQuNyAzNTYuMSAzNC43NSAzNTYuMDUgMzQuOCAzNTYuMDUgMzQuOCAzNTYgMzQuODUgMzU1Ljk1IDM1LjQgMzU1LjM1IDM2Ljc1IDM1NS41NSAzNi43NSAzNTUuNSAzNi44IDM1NS41IDM3LjU1IDM1NS4xIDM3LjUgMzUzLjg1IDM3LjIgMzUzLjE1IDM2LjMgMzUyLjk1IDM1LjQgMzUyLjc1IDM0LjQ1IDM1Mi44NSAzMi40IDM1My4wNSAzMC41NSAzNTMuMyAyOS4yIDM1My41IDI3LjkgMzUzLjQgMjQuOTUgMzUzLjI1IDIzLjUgMzU0LjM1IDIzLjkgMzU2LjM1IDI2LjggMzU2LjE1IDI3LjkgMzU2LjEgMjkuMiAzNTYuMDUgMzAuNSAzNTYgMzEuNSAzNTYuMiAzMC4xNSAzNTcuMDUgMjguNCAzNTcuNiAyOC4xIDM1Ny43IDI3Ljg1IDM1Ny45IDI3LjggMzU4Ljc1IDI4LjM1IDM1OSAyOC4zNSAzNTkuMDUgMjguMzUgMzU5LjEgMzEuMDUgMzYwLjE1IDMzLjggMzU5LjMgMzQuODUgMzU5IDM1LjggMzU4LjkgMzcuNyAzNTguNjUgMzguOTUgMzU3LjkgMzcuOSAzNTcuNzUgMzYuNzUgMzU4LjEgMzMuNjUgMzU5IDMwLjU1IDM1OC44NQpNIDM0LjQ1IDM1My44NQpRIDM0LjUgMzUzLjg1IDM0LjU1IDM1My44NSAzNS40IDM1My4wNSAzNi42NSAzNTMuMjUgMzYuNyAzNTMuMjUgMzYuNzUgMzUzLjI1IDM3LjA1IDM1My42NSAzNi42NSAzNTMuOQpMIDM2LjY1IDM1NApRIDMyLjcgMzU1LjUgMjcuNjUgMzU1LjE1CkwgMjcuNjUgMzU1LjEKUSAyOCAzNTQuOSAyOC40NSAzNTQuOCAyOC41IDM1NC44IDI4LjUgMzU0LjcgMzAuNCAzNTQuNyAzMi4yNSAzNTQuNiAzMi4zIDM1NC42IDMyLjQgMzU0LjYgMzMuMjUgMzU0LjA1IDM0LjQ1IDM1My44NSBaIi8+Cgo8cGF0aCBmaWxsPSIjNDI0MjQyIiBmaWxsLW9wYWNpdHk9IjAuOTk2MDc4NDMxMzcyNTQ5IiBzdHJva2U9Im5vbmUiIGQ9IgpNIDM0LjU1IDM1My44NQpRIDM0LjUgMzUzLjg1IDM0LjQ1IDM1My44NSAzMy4yNSAzNTQuMDUgMzIuNCAzNTQuNiAzMi4zIDM1NC42IDMyLjI1IDM1NC42IDMwLjQgMzU0LjcgMjguNSAzNTQuNyAyOC41IDM1NC44IDI4LjQ1IDM1NC44IDI4IDM1NC45IDI3LjY1IDM1NS4xCkwgMjcuNjUgMzU1LjE1ClEgMzIuNyAzNTUuNSAzNi42NSAzNTQKTCAzNi42NSAzNTMuOQpRIDM3LjA1IDM1My42NSAzNi43NSAzNTMuMjUgMzYuNyAzNTMuMjUgMzYuNjUgMzUzLjI1IDM1LjQgMzUzLjA1IDM0LjU1IDM1My44NSBaIi8+Cgo8cGF0aCBmaWxsPSIjNjY2NjY2IiBmaWxsLW9wYWNpdHk9IjAuOTMzMzMzMzMzMzMzMzMzMyIgc3Ryb2tlPSJub25lIiBkPSIKTSAyOC4xIDM1MS43NQpRIDI2LjM1IDM1MSAyNS41NSAzNTIuMTUgMjUuNSAzNTIuMTUgMjUuNDUgMzUyLjIgMjQuMjUgMzUyLjY1IDIzLjE1IDM1Mi4xNSAyMy4xNSAzNTIuMSAyMy4xIDM1Mi4wNSAyMi42NSAzNTEuMyAyMy44NSAzNTEuMDUKTCAyNC4wNSAzNTEuMQpRIDIzLjA1IDM1MC40IDIyLjA1IDM1MS4yIDIyLjAwMDc4MTI1IDM1MS45ODc1IDIyLjQ1IDM1Mi40CkwgMjIuNSAzNTIuNDUKUSAyMi44NSAzNTIuNiAyMy4yNSAzNTIuNyAyMy4zIDM1Mi43IDIzLjM1IDM1Mi43NSAyNS4xIDM1Mi45NSAyNy40IDM1MyAzMC41NSAzNTMuMSAzMyAzNTEuOSAzMS4yNSAzNTIuMiAyOS4zNSAzNTIuNSAyNy45NSAzNTIuNyAyNy44NSAzNTEuOSAyOC4zNSAzNTEuODUgMjguMSAzNTEuNzUgWiIvPgoKPHBhdGggZmlsbD0iIzQ4NDg0OCIgZmlsbC1vcGFjaXR5PSIwLjkwOTgwMzkyMTU2ODYyNzQiIHN0cm9rZT0ibm9uZSIgZD0iCk0gMzMuNzUgMzUwLjcKUSAzMy4zNSAzNTAuNDUgMzMgMzUwLjQ1IDI5Ljk1IDM1MC42IDI2LjggMzUwLjY1IDI2LjA1IDM1MC42NSAyNS42IDM1MC42IDIzIDM1MC4yIDIxLjggMzUxLjMgMjEuOCAzNTIuMTUgMjIuNCAzNTIuNCAyMi40NDIxODc1IDM1Mi40IDIyLjQ1IDM1Mi40IDIyLjAwMDc4MTI1IDM1MS45ODc1IDIyLjA1IDM1MS4yIDIzLjA1IDM1MC40IDI0LjA1IDM1MS4xCkwgMjMuODUgMzUxLjA1ClEgMjIuNjUgMzUxLjMgMjMuMSAzNTIuMDUgMjMuMTUgMzUyLjEgMjMuMTUgMzUyLjE1IDI0LjI1IDM1Mi42NSAyNS40NSAzNTIuMiAyNS41IDM1Mi4xNSAyNS41NSAzNTIuMTUgMjYuMzUgMzUxIDI4LjEgMzUxLjc1IDI4LjM1IDM1MS44NSAyNy44NSAzNTEuOSAyNy45NSAzNTIuNyAyOS4zNSAzNTIuNSAzMS4yNSAzNTIuMiAzMyAzNTEuOSAzMC41NSAzNTMuMSAyNy40IDM1MyAyNS4xIDM1Mi45NSAyMy4zNSAzNTIuNzUgMjQuOTUgMzUzLjE1IDI3LjE1IDM1My4xIDI5LjI1IDM1My4wNSAzMSAzNTIuOCAzMy4xNSAzNTIuNSAzNC4zIDM1MS4yIDM0LjA1IDM1MC45IDMzLjc1IDM1MC43IFoiLz4KCjxwYXRoIGZpbGw9IiM0MjQyNDIiIGZpbGwtb3BhY2l0eT0iMC41MTM3MjU0OTAxOTYwNzg0IiBzdHJva2U9Im5vbmUiIGQ9IgpNIDk4LjE1IDM1MC40ClEgOTguNyAzNTAuNzUgOTkuMiAzNTEuMiA5OS45NSAzNTIuMzUgOTkuNDUgMzUzLjg1IDk5LjQ1IDM1My45IDk5LjQ1IDM1NCA5OC42IDM1NS4zNSA5Ni45IDM1NS44NSA5Ni44NSAzNTUuODUgOTYuODUgMzU1Ljk1IDk1LjA1IDM1NS45NSA5My4zNSAzNTYuMDUgOTMuMyAzNTYuMDUgOTMuMiAzNTYuMDUKTCA5My4yIDM1Ni4xClEgOTAuMyAzNTYuNyA4Ny4xNSAzNTcuMDUgODcuMTUgMzU3LjEgODcuMTUgMzU3LjE1IDg5LjEgMzU3LjA1IDkwLjggMzU2LjggOTIuMTUgMzU2LjY1IDkzLjUgMzU2LjU1IDk1LjEgMzU2LjMgOTYuNzUgMzU2LjA1IDk3LjEgMzU2IDk3LjQgMzU1Ljk1IDk5LjIgMzU1LjE1IDk5LjkgMzUzLjI1IDk5LjkgMzUzLjIgOTkuOSAzNTMuMTUgOTkuOSAzNTIuNjUgOTkuOSAzNTIuMTUgOTkuNjUgMzUxLjggOTkuNDUgMzUxLjM1IDk4LjggMzUwLjI1IDk3LjQ1IDM0OS45IDkyLjIgMzQ4Ljc1IDg2LjA1IDM0OC42NSA4Ni4wNSAzNDguNyA4NiAzNDguNyA4NiAzNDguNzUgODUuOSAzNDguNzUgODUuOSAzNDguOCA4NS45IDM0OC44NSA4NS45IDM0OC45NSA4NS45IDM0OSA5Mi4zNSAzNDkgOTcuOCAzNTAuMiA5Ny45NSAzNTAuMjUgOTguMTUgMzUwLjQgWiIvPgoKPHBhdGggZmlsbD0iIzFGMUYxRiIgZmlsbC1vcGFjaXR5PSIwLjI5ODAzOTIxNTY4NjI3NDUiIHN0cm9rZT0ibm9uZSIgZD0iCk0gOTguNyAzNTAuMQpRIDk3Ljg1IDM0OS41NSA5Ni43NSAzNDkuMgpMIDk2Ljc1IDM0OS4xClEgODkuMzUgMzQ4LjggODIuNCAzNDguMDUgODIuMzUgMzQ4IDgyLjI1IDM0OCA4Mi4yNSAzNDguMSA4Mi4yNSAzNDguMTUgODMuOSAzNDguNiA4NS45IDM0OC42NSA4NiAzNDguNjUgODYuMDUgMzQ4LjY1IDkyLjIgMzQ4Ljc1IDk3LjQ1IDM0OS45IDk4LjggMzUwLjI1IDk5LjQ1IDM1MS4zNSA5OS42NSAzNTEuOCA5OS45IDM1Mi4xNSA5OS45IDM1Mi42NSA5OS45IDM1My4xNSA5OS45IDM1My4yIDk5LjkgMzUzLjI1IDk5LjIgMzU1LjE1IDk3LjQgMzU1Ljk1IDk5LjE1IDM1NS40IDk5Ljc1IDM1My44IDEwMC40NSAzNTEuOTUgOTkuMzUgMzUwLjggOTkgMzUwLjQ1IDk4LjcgMzUwLjEKTSA3Ny4zIDM1OApRIDczLjU1IDM1OC4xIDY5LjkgMzU3Ljk1IDcwLjcgMzU4IDcxLjU1IDM1OC4wNSA3Ni45NSAzNTguNDUgODIuMDUgMzU4LjEgODQuOCAzNTcuOSA4Ny4wNSAzNTcuNTUgOTAuMjUgMzU3IDkzLjUgMzU2LjU1IDkyLjE1IDM1Ni42NSA5MC44IDM1Ni44IDg5LjEgMzU3LjA1IDg3LjE1IDM1Ny4xNSA4Ni4xNSAzNTcuNSA4NC44NSAzNTcuNiA4MS4yNSAzNTcuOSA3Ny4zIDM1OApNIDQzLjU1IDM0Ni40CkwgNDMuNTUgMzQ2LjMKUSA0My41IDM0Ni4zIDQzLjQ1IDM0Ni4zNSAzOS41IDM0Ny4xNSAzNy44NSAzNTAuMzUgMzguMDUgMzUyIDM5IDM1Mi44NSAzOSAzNTIuOSAzOS4wNSAzNTIuOSA0MC42IDM1My41NSA0MS44NSAzNTQuNSA0MS44NSAzNTQuNTUgNDEuODUgMzU0LjYgNDQuNyAzNTYuOCA0OS44IDM1Ni44NQpMIDQ5LjggMzU2LjkKUSA0OSAzNTcuMyA0Ny4zNSAzNTcuNSA0My4xIDM1Ny45NSAzOS4yIDM1OC44NSA0NS4xNSAzNTcuNzUgNTEuMSAzNTcuNCA1My4xIDM1Ny4zIDUzLjY1IDM1OC43NSA1Mi42NSAzNjAuMzUgNDkuOSAzNjAuMiA0OS44NSAzNjAuMiA0OS44IDM2MC4yIDQ5LjcgMzYwLjIgNDkuNjUgMzYwLjIgNDguOSAzNjAuMiA0OC4zIDM2MC40NSA0Ny41IDM2MC44IDQ2LjYgMzYxLjA1IDQ2LjQ1IDM2MS4xIDQ2LjI1IDM2MS4xNSA0NS44NSAzNjEuMjUgNDUuMzUgMzYxLjQgNDIuNiAzNjIuMTUgNDAuMTUgMzYxLjE1IDQwLjEgMzYxLjE1IDQwLjA1IDM2MS4yIDM5LjMgMzYxLjMgMzguODUgMzYxLjE1IDM4LjEgMzYwLjkgMzguMSAzNTkuODUgMzguMyAzNTkuNyAzOC4zNSAzNTkuNDUgMzguMzUgMzU5LjQgMzguMzUgMzU5LjM1IDM4LjMgMzU5LjM1IDM4LjI1IDM1OS4zNSAzOC4xIDM1OS43IDM3Ljg1IDM1OS45NSAzNy45IDM2MC44NSAzOC41IDM2MS4xNSAzOC45NSAzNjEuNCAzOS44IDM2MS4zIDM5Ljg1IDM2MS4zIDM5LjkgMzYxLjMgNDIuOCAzNjIuMjUgNDYgMzYxLjM1IDQ2LjM1IDM2MS4yNSA0Ni43NSAzNjEuMTUgNDkuMjUgMzYwLjUgNTIuMSAzNjAuMiA1My4zIDM1OS45IDUzLjc1IDM1OC44NSA1My44IDM1OC44IDUzLjggMzU4Ljc1IDUzLjI1IDM1Ny4xIDUxLjEgMzU2Ljk1CkwgNTEuMSAzNTYuOQpRIDU1LjkgMzU3LjIgNjEuMSAzNTcuNDUgNjQuMTUgMzU3LjYgNjcuMDUgMzU3Ljc1IDYxLjkgMzU3LjMgNTYuNiAzNTYuOTUgNTMuNiAzNTYuNyA1MC40IDM1Ni43NSA0NC42NSAzNTYuOCA0MS44NSAzNTQuMQpMIDQxLjg1IDM1NC4wNQpRIDQxLjUgMzUzLjg1IDQxLjI1IDM1My42IDQxLjIgMzUzLjYgNDEuMTUgMzUzLjYgNDAuNCAzNTMgMzkuMyAzNTIuNjUgMzkuMyAzNTIuNiAzOS4zIDM1Mi41NSAzOC44NSAzNTIuMiAzOC40NSAzNTEuOCAzOC40IDM1MS44IDM4LjQgMzUxLjc1IDM4LjA1IDM1MS4yIDM4LjEgMzUwLjM1IDM5LjcgMzQ3LjMgNDMuNTUgMzQ2LjQgWiIvPgoKPHBhdGggZmlsbD0iIzI5MjkyOSIgZmlsbC1vcGFjaXR5PSIwLjc5NjA3ODQzMTM3MjU0OSIgc3Ryb2tlPSJub25lIiBkPSIKTSA4NS4yIDM0My41CkwgODUuMiAzNDMuNTUKUSA4Ni42IDM0MyA4OC4xIDM0Mi41CkwgODguMSAzNDIuNDUKUSA4Ni40NSAzNDIuNzUgODUuMiAzNDMuNQpNIDgwLjIgMzQ1LjYKUSA4MCAzNDUuOSA3OS44NSAzNDYuMiA3OS44NSAzNDcuMTUgODAuMyAzNDcuNwpMIDgwLjMgMzQ3LjgKUSA4MC45IDM0OC40NSA4MS43NSAzNDguOCA4MS44IDM0OC44IDgxLjggMzQ4Ljg1IDgzLjg1IDM0OC44NSA4NS44IDM0OSA4NS44NSAzNDkgODUuOSAzNDkgODUuOSAzNDguOTUgODUuOSAzNDguODUgODUuOSAzNDguOCA4NS45IDM0OC43NSA4NiAzNDguNzUgODYgMzQ4LjcgODYuMDUgMzQ4LjcgODYuMDUgMzQ4LjY1IDg2IDM0OC42NSA4NS45IDM0OC42NSA4My45IDM0OC42IDgyLjI1IDM0OC4xNSA4Mi4yIDM0OC4xNSA4Mi4xNSAzNDguMTUgODEuMDUgMzQ3Ljg1IDgwLjggMzQ2LjcgODAuOTUgMzQ2LjM1IDgxLjA1IDM0NS45NSA4MS4wNSAzNDUuOSA4MS4wNSAzNDUuODUgODEuMjUgMzQ1LjU1IDgxLjUgMzQ1LjMgODEuNTUgMzQ1LjMgODEuNTUgMzQ1LjIgODIuOCAzNDQuNSA4NC4yIDM0My45NSA4My4zIDM0NC4yIDgyLjQgMzQ0IDgyLjM1IDM0NCA4Mi4zIDM0NC4wNSA4MS43IDM0NC4yNSA4MS4xNSAzNDQuNSA4MS4xNSAzNDQuNTUgODEuMTUgMzQ0LjYgODAuNyAzNDUuMDUgODAuMiAzNDUuNDUgODAuMiAzNDUuNTUgODAuMiAzNDUuNiBaIi8+Cgo8cGF0aCBmaWxsPSIjMTIxMjEyIiBmaWxsLW9wYWNpdHk9IjAuNDI3NDUwOTgwMzkyMTU2ODQiIHN0cm9rZT0ibm9uZSIgZD0iCk0gMTQ0LjU1IDMzMy4zClEgMTM3LjM1IDMzNC43NSAxMjkuNzUgMzM2IDEyNS4xNSAzMzYuNzUgMTIwLjI1IDMzNy41IDExMC45NSAzMzguOSAxMDAuNjUgMzM5LjUgMTAwLjYgMzM5LjUgMTAwLjU1IDMzOS41IDk4LjI1IDM0MC4xNSA5NS45IDM0MC43CkwgOTUuOSAzNDAuOApRIDkyLjIgMzQxLjg1IDg4LjEgMzQyLjQ1CkwgODguMSAzNDIuNQpRIDg2LjYgMzQzIDg1LjIgMzQzLjU1IDg1LjE1IDM0My41NSA4NS4xIDM0My41NSA4NC42NSAzNDMuOCA4NC4yIDM0My45NSA4Mi44IDM0NC41IDgxLjU1IDM0NS4yIDgxLjU1IDM0NS4zIDgxLjUgMzQ1LjMgODEuMjUgMzQ1LjU1IDgxLjA1IDM0NS44NSA4MS4wNSAzNDUuOSA4MS4wNSAzNDUuOTUgODAuOTUgMzQ2LjM1IDgwLjggMzQ2LjcgODEuMDUgMzQ3Ljg1IDgyLjE1IDM0OC4xNSA4Mi4yIDM0OC4xNSA4Mi4yNSAzNDguMTUgODIuMjUgMzQ4LjEgODIuMjUgMzQ4CkwgODIuMjUgMzQ3Ljk1ClEgODEuMDUgMzQ3Ljc1IDgxLjE1IDM0Ni4zIDgxLjUgMzQ1LjggODEuODUgMzQ1LjMgODEuOSAzNDUuMyA4MS45IDM0NS4yIDg1LjQgMzQzLjI1IDkwLjA1IDM0Mi4zIDk0LjUgMzQxLjQgOTguODUgMzQwLjM1IDEwMy4zIDMzOS4yNSAxMDguNjUgMzM5IDExMi40IDMzOC44IDExNS44NSAzMzguMiAxMTcuNjUgMzM3LjkgMTE5LjYgMzM3LjY1IDEyOS4xIDMzNi4zNSAxMzguMzUgMzM0Ljc1IDE0MS42IDMzNC4xNSAxNDQuNTUgMzMzLjMgWiIvPgoKPHBhdGggZmlsbD0iIzMyMzIzMiIgZmlsbC1vcGFjaXR5PSIwLjg3MDU4ODIzNTI5NDExNzciIHN0cm9rZT0ibm9uZSIgZD0iCk0gMTMzLjUgMzM0LjgKTCAxMzMuNSAzMzQuNzUKUSAxMzEuODUgMzM1IDEzMC4zIDMzNS4yIDEyMC42NSAzMzYuNiAxMTEuMjUgMzM4LjI1IDEwOS4yNSAzMzguNiAxMDcuOCAzMzguMDUgMTA3Ljc1IDMzOC4yIDEwNy44IDMzOC4yNQpMIDEwNy44IDMzOC4zClEgMTA2LjI1IDMzOC42NSAxMDQuNCAzMzguNzUgMTAyLjM1IDMzOC45IDEwMC4zIDMzOS4xNQpMIDEwMC4yIDMzOS4xNQpRIDk5Ljk1IDMzOS40IDk5LjU1IDMzOS41IDk5LjUgMzM5LjUgOTkuNDUgMzM5LjUgOTkgMzM5LjY1IDk4LjQ1IDMzOS42NSA5OC40IDMzOS42NSA5OC4zNSAzMzkuNjUgOTguMTUgMzM5LjkgOTcuODUgMzQwLjEgOTcuOCAzNDAuMSA5Ny43NSAzNDAuMSA5Ni43NSAzNDAuMyA5NS45IDM0MC42IDk1LjkgMzQwLjY1IDk1LjkgMzQwLjcgOTguMjUgMzQwLjE1IDEwMC41NSAzMzkuNSAxMDAuNiAzMzkuNSAxMDAuNjUgMzM5LjUgMTAwLjY1IDMzOS40NSAxMDAuNjUgMzM5LjQgMTA0LjggMzM4Ljc1IDEwOS41IDMzOC41NSAxMTEuOSAzMzguNCAxMTQuMTUgMzM4IDEyMy4yNSAzMzYuNCAxMzIuNjUgMzM1LjM1IDEzMi42NSAzMzQuOTUgMTMzLjUgMzM0LjggWiIvPgoKPHBhdGggZmlsbD0iIzI2MjYyNiIgZmlsbC1vcGFjaXR5PSIwLjgyNzQ1MDk4MDM5MjE1NjgiIHN0cm9rZT0ibm9uZSIgZD0iCk0gMTM0Ljg1IDMyOC4zClEgMTM0LjY1IDMyOC41IDEzMy43NSAzMjguNDUgMTI4Ljc1IDMyNy45NSAxMjMuOSAzMjcuNTUgMTE4Ljg1IDMyNy4xNSAxMTMuNTUgMzI3LjYgMTEzLjU1IDMyNy42NSAxMTMuNTUgMzI3LjcgMTE4Ljg1IDMyNy4zNSAxMjQuMSAzMjcuNzUgMTI4LjU1IDMyOC4xIDEzMyAzMjguNDUgMTM3LjcgMzI4LjggMTQyLjUgMzI4LjkgMTQ0LjQgMzI5LjQ1IDE0NS41IDMzMC43NSAxNDUuNTUgMzMwLjggMTQ1LjU1IDMzMC44NSAxNDUuNDUgMzMxLjQ1IDE0NS4xIDMzMS43NSAxNDUuMDUgMzMxLjggMTQ1LjA1IDMzMS44NSAxNDIuNzUgMzMyLjkgMTM5LjkgMzMzLjM1IDEzOS42NSAzMzMuNCAxMzkuMzUgMzMzLjM1IDEzOC4zIDMzMy4zIDEzNy43NSAzMzMuOCAxMzUuMjUgMzMzLjg1IDEzMy41IDMzNC43CkwgMTMzLjUgMzM0Ljc1IDEzMy41IDMzNC44ClEgMTMyLjY1IDMzNC45NSAxMzIuNjUgMzM1LjM1IDEyMy4yNSAzMzYuNCAxMTQuMTUgMzM4IDExMS45IDMzOC40IDEwOS41IDMzOC41NSAxMDQuOCAzMzguNzUgMTAwLjY1IDMzOS40IDEwMC42NSAzMzkuNDUgMTAwLjY1IDMzOS41IDExMC45NSAzMzguOSAxMjAuMjUgMzM3LjUgMTI1LjE1IDMzNi43NSAxMjkuNzUgMzM2IDEzNy4zNSAzMzQuNzUgMTQ0LjU1IDMzMy4zIDE0NC41NSAzMzMuMjUgMTQ0LjU1IDMzMy4yIDE0NC44IDMzMy4xNSAxNDQuOTUgMzMzLjEgMTQ1IDMzMy4wNSAxNDUuMDUgMzMzLjA1IDE0NS4wNSAzMzMgMTQ1LjEgMzMzIDE0NS41NSAzMzIuNjUgMTQ1LjkgMzMyLjM1IDE0NS45IDMzMi4yNSAxNDUuOTUgMzMyLjIgMTQ2LjYgMzMxIDE0NS45IDMyOS43NSAxNDQuNCAzMjguNTUgMTQxLjggMzI4LjM1IDEzOS4zIDMyOC4yIDEzNi43IDMyNy45IDEzNS4yIDMyNy43IDEzNC44NSAzMjguMyBaIi8+Cgo8cGF0aCBmaWxsPSIjNDY0NjQ2IiBmaWxsLW9wYWNpdHk9IjAuNTM3MjU0OTAxOTYwNzg0MyIgc3Ryb2tlPSJub25lIiBkPSIKTSA2Ny45IDM1Ny44ClEgNjguMzUgMzU3Ljg1IDY4Ljg1IDM1Ny45IDY5LjM1IDM1Ny45IDY5LjkgMzU3Ljk1IDczLjU1IDM1OC4xIDc3LjMgMzU4IDgxLjI1IDM1Ny45IDg0Ljg1IDM1Ny42IDg2LjE1IDM1Ny41IDg3LjE1IDM1Ny4xNSA4Ny4xIDM1Ny4xNSA4NyAzNTcuMTUgODIuNzUgMzU3Ljc1IDc3Ljc1IDM1Ny42NSA2Ny4yNSAzNTcuNjUgNTcuOCAzNTYuODUgNTQuMzUgMzU2LjU1IDUwLjUgMzU2LjU1IDQ0Ljk1IDM1Ni41IDQxLjg1IDM1NC4xIDQ0LjY1IDM1Ni44IDUwLjQgMzU2Ljc1IDUzLjYgMzU2LjcgNTYuNiAzNTYuOTUgNjEuOSAzNTcuMyA2Ny4wNSAzNTcuNzUgNjcuNDUgMzU3LjggNjcuOSAzNTcuOCBaIi8+Cgo8cGF0aCBmaWxsPSIjMzUzNTM1IiBmaWxsLW9wYWNpdHk9IjAuOTUyOTQxMTc2NDcwNTg4MiIgc3Ryb2tlPSJub25lIiBkPSIKTSA3Ny43NSAzNTcuNgpMIDc3Ljc1IDM1Ny42NQpRIDgyLjc1IDM1Ny43NSA4NyAzNTcuMTUgODcuMSAzNTcuMTUgODcuMTUgMzU3LjE1IDg3LjE1IDM1Ny4xIDg3LjE1IDM1Ny4wNSA5MC4zIDM1Ni43IDkzLjIgMzU2LjEKTCA5My4yIDM1Ni4wNSA5My4wNSAzNTYuMDUKUSA5My43NSAzNTUuNjUgOTQuNyAzNTUuMiA5NC43NSAzNTUuMiA5NC44IDM1NS4yIDk2LjM1IDM1NS4xIDk3LjM1IDM1NC40NSA5Ny4zNSAzNTQuNCA5Ny40IDM1NC40IDk4IDM1My45IDk3Ljk1IDM1My40IDk1IDM1NS4zIDkwLjU1IDM1NS45IDgwLjc1IDM1Ny4xNSA3MC4zNSAzNTYuOSA3My43NSAzNTcuMzUgNzcuNzUgMzU3LjYgWiIvPgoKPHBhdGggZmlsbD0iIzRCNEI0QiIgZmlsbC1vcGFjaXR5PSIwLjk3NjQ3MDU4ODIzNTI5NDEiIHN0cm9rZT0ibm9uZSIgZD0iCk0gMzguNDUgMzU5LjYKUSAzOC40IDM2MS4wNSAzOS45IDM2MS4wNSA0MC4zNSAzNjEuMDUgNDAuNyAzNjEuMTUgNDEgMzYxLjI1IDQxLjI1IDM2MS40IDQyLjcgMzYxLjUgNDMuNzUgMzYxLjE1IDQzLjk1IDM2MS4xIDQ0LjE1IDM2MSA0NC4yIDM2MSA0NC4yIDM2MC45IDQ2LjE1IDM2MC42NSA0OC4yIDM2MC40NSA0OC4yNSAzNjAuNDUgNDguMyAzNjAuNDUgNDguOSAzNjAuMiA0OS42NSAzNjAuMiA0OS43IDM2MC4yIDQ5LjggMzYwLjIKTCA0OS44IDM2MC4xNQpRIDUxLjUgMzU5Ljg1IDUyLjk1IDM1OS4zNSA1MyAzNTkuMzUgNTMuMDUgMzU5LjMgNTMuNDUgMzU4LjkgNTMuMyAzNTguNSA1Mi42NSAzNTcuNyA1MS4yNSAzNTcuNyA0OS42NSAzNTcuNjUgNDguMyAzNTcuOCA0NS43IDM1OC4wNSA0Mi44NSAzNTguNiA0MiAzNTguNzUgNDEuMjUgMzU4Ljc1IDM5LjYgMzU4Ljc1IDM4LjQ1IDM1OS42IFoiLz4KCjxwYXRoIGZpbGw9IiMzNzM3MzciIGZpbGwtb3BhY2l0eT0iMC42NjI3NDUwOTgwMzkyMTU3IiBzdHJva2U9Im5vbmUiIGQ9IgpNIDM4LjM1IDM1OS40NQpRIDM4LjMgMzU5LjcgMzguMSAzNTkuODUgMzguMSAzNjAuOSAzOC44NSAzNjEuMTUgMzkuMyAzNjEuMyA0MC4wNSAzNjEuMiA0MC4xIDM2MS4xNSA0MC4xNSAzNjEuMTUgNDIuNiAzNjIuMTUgNDUuMzUgMzYxLjQgNDUuODUgMzYxLjI1IDQ2LjI1IDM2MS4xNSA0Ni40NSAzNjEuMSA0Ni42IDM2MS4wNSA0Ny41IDM2MC44IDQ4LjMgMzYwLjQ1IDQ4LjI1IDM2MC40NSA0OC4yIDM2MC40NSA0Ni4xNSAzNjAuNjUgNDQuMiAzNjAuOSA0NC4yIDM2MSA0NC4xNSAzNjEgNDMuOTUgMzYxLjEgNDMuNzUgMzYxLjE1IDQyLjcgMzYxLjUgNDEuMjUgMzYxLjQgNDEgMzYxLjI1IDQwLjcgMzYxLjE1IDQwLjM1IDM2MS4wNSAzOS45IDM2MS4wNSAzOC40IDM2MS4wNSAzOC40NSAzNTkuNiAzOS42IDM1OC43NSA0MS4yNSAzNTguNzUgNDIgMzU4Ljc1IDQyLjg1IDM1OC42IDQ1LjcgMzU4LjA1IDQ4LjMgMzU3LjggNDkuNjUgMzU3LjY1IDUxLjI1IDM1Ny43IDUyLjY1IDM1Ny43IDUzLjMgMzU4LjUgNTMuNDUgMzU4LjkgNTMuMDUgMzU5LjMgNTMgMzU5LjM1IDUyLjk1IDM1OS4zNSA1MS41IDM1OS44NSA0OS44IDM2MC4xNQpMIDQ5LjggMzYwLjIKUSA0OS44NSAzNjAuMiA0OS45IDM2MC4yIDUyLjY1IDM2MC4zNSA1My42NSAzNTguNzUgNTMuMSAzNTcuMyA1MS4xIDM1Ny40IDQ1LjE1IDM1Ny43NSAzOS4yIDM1OC44NQpMIDM5LjIgMzU4LjkKUSAzOC42NSAzNTkgMzguMzUgMzU5LjM1IDM4LjM1IDM1OS40IDM4LjM1IDM1OS40NSBaIi8+Cgo8cGF0aCBmaWxsPSIjM0MzQzNDIiBmaWxsLW9wYWNpdHk9IjAuOTUyOTQxMTc2NDcwNTg4MiIgc3Ryb2tlPSJub25lIiBkPSIKTSAzOC40NSAzNTEuOApRIDM4Ljg1IDM1Mi4yIDM5LjMgMzUyLjU1IDM5LjMgMzUyLjYgMzkuMyAzNTIuNjUgNDAuNCAzNTMgNDEuMTUgMzUzLjYgNDEuMiAzNTMuNiA0MS4yNSAzNTMuNiA0MS41NSAzNTMuNDUgNDEuODUgMzUzLjQ1IDQyLjIgMzUzLjQ1IDQyLjE1IDM1My4zIDQxLjc1IDM1Mi40IDQwLjMgMzUxLjkgNDAuMyAzNTEuODUgNDAuMjUgMzUxLjg1IDM5LjUgMzUxLjM1IDM5LjQ1IDM1MC4yIDQwLjUgMzQ4LjggNDIuMzUgMzQ4LjE1IDQyLjQgMzQ4LjE1IDQyLjUgMzQ4LjE1IDQyLjUgMzQ3LjI1IDQzLjU1IDM0Ni43NQpMIDQzLjU1IDM0Ni43ClEgNDMuNSAzNDYuNyA0My40NSAzNDYuNyAzOS43NSAzNDcuNDUgMzguMzUgMzUwLjQ1IDM4LjM1IDM1MS4xIDM4LjQ1IDM1MS42NSAzOC40NSAzNTEuNzUgMzguNDUgMzUxLjggWiIvPgoKPHBhdGggZmlsbD0iIzY4Njg2OCIgZmlsbC1vcGFjaXR5PSIwLjk5MjE1Njg2Mjc0NTA5ODEiIHN0cm9rZT0ibm9uZSIgZD0iCk0gNzIuMDUgMzQxLjU1ClEgNjYuNjUgMzQyLjM1IDYxLjg1IDM0My45IDU3LjggMzQ1LjIgNTIuNyAzNDUuNjUgNDguMSAzNDYuMSA0My41NSAzNDYuNwpMIDQzLjU1IDM0Ni43NQpRIDQyLjUgMzQ3LjI1IDQyLjUgMzQ4LjE1IDQyLjQgMzQ4LjE1IDQyLjM1IDM0OC4xNSA0MC41IDM0OC44IDM5LjQ1IDM1MC4yIDM5LjUgMzUxLjM1IDQwLjI1IDM1MS44NSA0MC4zIDM1MS44NSA0MC4zIDM1MS45IDQxLjc1IDM1Mi40IDQyLjE1IDM1My4zIDQyLjIgMzUzLjQ1IDQxLjg1IDM1My40NSA0MS41NSAzNTMuNDUgNDEuMjUgMzUzLjYgNDEuNSAzNTMuODUgNDEuODUgMzU0LjA1CkwgNDEuODUgMzU0LjEKUSA0NC45NSAzNTYuNSA1MC41IDM1Ni41NSA1NC4zNSAzNTYuNTUgNTcuOCAzNTYuODUgNjcuMjUgMzU3LjY1IDc3Ljc1IDM1Ny42NQpMIDc3Ljc1IDM1Ny42ClEgNzMuNzUgMzU3LjM1IDcwLjM1IDM1Ni45IDgwLjc1IDM1Ny4xNSA5MC41NSAzNTUuOSA5NSAzNTUuMyA5Ny45NSAzNTMuNCA5OCAzNTMuOSA5Ny40IDM1NC40IDk3LjM1IDM1NC40IDk3LjM1IDM1NC40NSA5Ni4zNSAzNTUuMSA5NC44IDM1NS4yIDk0Ljc1IDM1NS4yIDk0LjcgMzU1LjIgOTMuNzUgMzU1LjY1IDkzLjA1IDM1Ni4wNQpMIDkzLjIgMzU2LjA1ClEgOTMuMyAzNTYuMDUgOTMuMzUgMzU2LjA1IDk1LjA1IDM1NS45NSA5Ni44NSAzNTUuOTUgOTYuODUgMzU1Ljg1IDk2LjkgMzU1Ljg1IDk4LjYgMzU1LjM1IDk5LjQ1IDM1NCA5OS40NSAzNTMuOSA5OS40NSAzNTMuODUgOTkuOTUgMzUyLjM1IDk5LjIgMzUxLjIgOTguNyAzNTAuNzUgOTguMTUgMzUwLjQgOTcuOTUgMzUwLjI1IDk3LjggMzUwLjIgOTIuMzUgMzQ5IDg1LjkgMzQ5IDg1Ljg1IDM0OSA4NS44IDM0OSA4My44NSAzNDguODUgODEuOCAzNDguODUgODEuOCAzNDguOCA4MS43NSAzNDguOCA4MC45IDM0OC40NSA4MC4zIDM0Ny44CkwgODAuMyAzNDcuNwpRIDc5Ljg1IDM0Ny4xNSA3OS44NSAzNDYuMiA4MCAzNDUuOSA4MC4yIDM0NS42IDgwLjIgMzQ1LjU1IDgwLjIgMzQ1LjQ1IDgwLjcgMzQ1LjA1IDgxLjE1IDM0NC42IDgxLjE1IDM0NC41NSA4MS4xNSAzNDQuNSA4MS43IDM0NC4yNSA4Mi4zIDM0NC4wNSA4Mi4zNSAzNDQgODIuNCAzNDQgODMuMyAzNDQuMiA4NC4yIDM0My45NSA4NC42NSAzNDMuOCA4NS4xIDM0My41NSA4NS4xNSAzNDMuNTUgODUuMiAzNDMuNTUKTCA4NS4yIDM0My41ClEgODYuNDUgMzQyLjc1IDg4LjEgMzQyLjQ1IDkyLjIgMzQxLjg1IDk1LjkgMzQwLjgKTCA5NS45IDM0MC43ClEgOTUuOSAzNDAuNjUgOTUuOSAzNDAuNiA5Ni43NSAzNDAuMyA5Ny43NSAzNDAuMSA5Ny44IDM0MC4xIDk3Ljg1IDM0MC4xIDk4LjE1IDMzOS45IDk4LjM1IDMzOS42NSA5OC40IDMzOS42NSA5OC40NSAzMzkuNjUgOTkgMzM5LjY1IDk5LjQ1IDMzOS41IDk5LjUgMzM5LjUgOTkuNTUgMzM5LjUgOTkuOTUgMzM5LjQgMTAwLjIgMzM5LjE1CkwgMTAwLjMgMzM5LjE1ClEgMTAyLjM1IDMzOC45IDEwNC40IDMzOC43NSAxMDYuMjUgMzM4LjY1IDEwNy44IDMzOC4zCkwgMTA3LjggMzM4LjI1ClEgMTA3Ljc1IDMzOC4yIDEwNy44IDMzOC4wNSAxMDkuMjUgMzM4LjYgMTExLjI1IDMzOC4yNSAxMjAuNjUgMzM2LjYgMTMwLjMgMzM1LjIgMTMxLjg1IDMzNSAxMzMuNSAzMzQuNzUKTCAxMzMuNSAzMzQuNwpRIDEzNS4yNSAzMzMuODUgMTM3Ljc1IDMzMy44IDEzOC4zIDMzMy4zIDEzOS4zNSAzMzMuMzUgMTM5LjY1IDMzMy40IDEzOS45IDMzMy4zNSAxNDIuNzUgMzMyLjkgMTQ1LjA1IDMzMS44NSAxNDUuMDUgMzMxLjggMTQ1LjEgMzMxLjc1IDE0NS40NSAzMzEuNDUgMTQ1LjU1IDMzMC44NSAxNDUuNTUgMzMwLjggMTQ1LjUgMzMwLjc1IDE0NC40IDMyOS40NSAxNDIuNSAzMjguOSAxMzcuNyAzMjguOCAxMzMgMzI4LjQ1IDEyOC41NSAzMjguMSAxMjQuMSAzMjcuNzUgMTE4Ljg1IDMyNy4zNSAxMTMuNTUgMzI3LjcgMTA3IDMyOC42IDEwMi4zNSAzMzEuMzUgOTguODUgMzMzLjM1IDk1LjMgMzM1LjI1IDk1LjI1IDMzNS4yNSA5NS4xNSAzMzUuMjUgOTIuNyAzMzUuNyA5MC42NSAzMzYuNgpMIDkwLjY1IDMzNi42NQpRIDkxLjk1IDMzNi4zIDkzLjIgMzM2LjQ1IDkzLjE1IDMzNi40NSA5My4xIDMzNi41IDg5LjUgMzM3LjcgODUuOCAzMzguOSA4Ni42NSAzMzcuOTUgODguMSAzMzcuNjUgODkuNSAzMzcuMzUgOTAuNTUgMzM2LjcgOTAuNSAzMzYuNyA5MC40IDMzNi43IDg1Ljk1IDMzNy41NSA4Mi42NSAzMzkuNSA4Mi41NSAzMzkuNSA4Mi41IDMzOS41IDgwLjEgMzM5LjYgNzguMzUgMzQwLjM1IDc4LjMgMzQwLjM1IDc4LjI1IDM0MC4zNSA3NyAzNDAuMzUgNzYuMyAzNDAuODUgNzQuMTUgMzQxLjIgNzIuMDUgMzQxLjU1IFoiLz4KCjxwYXRoIGZpbGw9IiMyOTI5MjkiIGZpbGwtb3BhY2l0eT0iMC41NTI5NDExNzY0NzA1ODgzIiBzdHJva2U9Im5vbmUiIGQ9IgpNIDYwLjIgMzQzLjg1ClEgNTIuMyAzNDUuNTUgNDMuNTUgMzQ2LjMKTCA0My41NSAzNDYuNApRIDM5LjcgMzQ3LjMgMzguMSAzNTAuMzUgMzguMDUgMzUxLjIgMzguNCAzNTEuNzUgMzguNCAzNTEuOCAzOC40NSAzNTEuOCAzOC40NSAzNTEuNzUgMzguNDUgMzUxLjY1IDM4LjM1IDM1MS4xIDM4LjM1IDM1MC40NSAzOS43NSAzNDcuNDUgNDMuNDUgMzQ2LjcgNDMuNSAzNDYuNyA0My41NSAzNDYuNyA0OC4xIDM0Ni4xIDUyLjcgMzQ1LjY1IDU3LjggMzQ1LjIgNjEuODUgMzQzLjkgNjYuNjUgMzQyLjM1IDcyLjA1IDM0MS41NSA3NC4xNSAzNDEuMiA3Ni4zIDM0MC44NSA3NyAzNDAuMzUgNzguMjUgMzQwLjM1IDc4LjMgMzQwLjM1IDc4LjM1IDM0MC4zNSA4MC4xIDMzOS42IDgyLjUgMzM5LjUgODIuNTUgMzM5LjUgODIuNjUgMzM5LjUgODUuOTUgMzM3LjU1IDkwLjQgMzM2LjcgOTAuNSAzMzYuNyA5MC41NSAzMzYuNyA4OS41IDMzNy4zNSA4OC4xIDMzNy42NSA4Ni42NSAzMzcuOTUgODUuOCAzMzguOSA4OS41IDMzNy43IDkzLjEgMzM2LjUgOTMuMTUgMzM2LjQ1IDkzLjIgMzM2LjQ1IDkxLjk1IDMzNi4zIDkwLjY1IDMzNi42NQpMIDkwLjY1IDMzNi42ClEgOTIuNyAzMzUuNyA5NS4xNSAzMzUuMjUgOTUuMjUgMzM1LjI1IDk1LjMgMzM1LjI1IDk4Ljg1IDMzMy4zNSAxMDIuMzUgMzMxLjM1IDEwNyAzMjguNiAxMTMuNTUgMzI3LjcgMTEzLjU1IDMyNy42NSAxMTMuNTUgMzI3LjYgMTE4Ljg1IDMyNy4xNSAxMjMuOSAzMjcuNTUgMTI4Ljc1IDMyNy45NSAxMzMuNzUgMzI4LjQ1IDEzNC42NSAzMjguNSAxMzQuODUgMzI4LjMgMTM1LjIgMzI3LjcgMTM2LjcgMzI3LjkgMTM5LjMgMzI4LjIgMTQxLjggMzI4LjM1IDE0NC40IDMyOC41NSAxNDUuOSAzMjkuNzUgMTQ2LjYgMzMxIDE0NS45NSAzMzIuMiAxNDUuOSAzMzIuMjUgMTQ1LjkgMzMyLjM1IDE0NS41NSAzMzIuNjUgMTQ1LjEgMzMzIDE0NS4wNSAzMzMgMTQ1LjA1IDMzMy4wNSAxNDUuMSAzMzMuMDUgMTQ1LjE1IDMzMy4wNSAxNDYuOCAzMzIuMjUgMTQ2LjQgMzMwIDE0Ni4zNSAzMzAgMTQ2LjMgMzMwIDE0Ni4wNSAzMjkuNSAxNDUuNjUgMzI5LjE1IDE0Mi4yIDMyOC4wNSAxMzggMzI3Ljg1IDEzNS4zNSAzMjcuNyAxMzMgMzI3LjU1IDEyNy45NSAzMjcuMyAxMjIuOCAzMjYuOTUgMTE4LjkgMzI2Ljc1IDExNS4xIDMyNy4wNSAxMDcuNCAzMjcuNjUgMTAyLjI1IDMzMC42IDEwMC41IDMzMS42NSA5OC44NSAzMzIuNiA5NS4zNSAzMzQuNjUgOTEuMTUgMzM2IDkxLjEgMzM2IDkxLjA1IDMzNiA5MC42NSAzMzUuOTUgOTAuMyAzMzYKTCA5MC4zIDMzNi4wNQpRIDg2LjYgMzM3LjA1IDgzLjM1IDMzOC41NSA4My4zIDMzOC41NSA4My4yNSAzMzguNTUgODIuOCAzMzguNSA4Mi40IDMzOC41NSA3OS4zIDMzOS43IDc1LjcgMzQwLjM1IDc0LjUgMzQwLjYgNzMuMzUgMzQwLjggNjguNyAzNDEuNjUgNjQuNSAzNDIuOCA2Mi40IDM0My40IDYwLjIgMzQzLjg1IFoiLz4KCjxwYXRoIGZpbGw9IiMwMzA0MDQiIGZpbGwtb3BhY2l0eT0iMC45NzI1NDkwMTk2MDc4NDMxIiBzdHJva2U9Im5vbmUiIGQ9IgpNIDIzNi4yIDMwMC41NQpRIDIzNi4yIDMwMC41IDIzNi4yIDMwMC40NSAyMzIuNTUgMzAwLjM1IDIyOC44IDMwMC4yIDIxOC4zNSAyOTkuODUgMjA3Ljc1IDI5OS42NSAxOTYuOCAyOTkuNDUgMTg2LjIgMjk5LjY1IDE3NS4zNSAyOTkuODUgMTY0Ljc1IDI5OS43NSAxNTMuODUgMjk5LjY1IDE0My4yNSAyOTkuNyAxNTMuNjUgMzAwLjIgMTY0LjQgMzAwLjM1IDE3NS4xIDMwMC41NSAxODYuMDUgMzAwLjQ1IDE5Ny4wNSAzMDAuMzUgMjA3Ljc1IDMwMC40NSAyMTguNiAzMDAuNTUgMjI5LjUgMzAwLjU1IDIzMi44NSAzMDAuNTUgMjM2LjIgMzAwLjU1IFoiLz4KCjxwYXRoIGZpbGw9IiMxMDFBMUMiIGZpbGwtb3BhY2l0eT0iMC45MTM3MjU0OTAxOTYwNzg0IiBzdHJva2U9Im5vbmUiIGQ9IgpNIDIzNi4yIDMwMC40NQpRIDIzNi4yIDMwMC41IDIzNi4yIDMwMC41NSAyNDYuOSAzMDAuNzUgMjU3Ljg1IDMwMC44IDI2OC44NSAzMDAuOCAyNzkuMyAzMDAuMzUgMjgxLjc1IDMwMC4yNSAyODQuMTUgMzAwLjEgMjg1LjE1IDI5OS40IDI4NC4wNSAyOTkuNCAyODIuOTUgMjk5LjQgMjgyLjIgMjk5LjQgMjc2LjQgMjk5LjcgMjcwLjkgMjk5LjkgMjYwLjQgMzAwLjM1IDI0OS44NSAzMDAuNTUgMjQ5Ljc1IDMwMC41NSAyNDkuNyAzMDAuNTUgMjQyLjg1IDMwMC42IDIzNi4yIDMwMC40NSBaIi8+Cgo8cGF0aCBmaWxsPSIjNDY4Qzk0IiBzdHJva2U9Im5vbmUiIGQ9IgpNIDMyMy4wNSAyOTQuMTUKUSAzMjIuNjUgMjkzLjcgMzIyLjI1IDI5My4zIDMyMS40IDI5Mi4zNSAzMjAuNTUgMjkxLjQ1IDMyMC41NSAyOTEuNSAzMjAuNTUgMjkxLjU1IDMyMS4wNSAyOTQuOTUgMzIxLjQgMjk4LjUgMzIxLjM1IDI5OC41IDMyMS4yNSAyOTguNSAzMTkuNTUgMjk4LjY1IDMxNy42IDI5OC42IDMxNy42IDI5OC43IDMxNy42IDI5OC43NSAzMjAuNTUgMjk4Ljc1IDMyMy4yIDI5OC41IDMyMy4yNSAyOTguNSAzMjMuMzUgMjk4LjUgMzIzLjIgMjk2LjYgMzIzLjA1IDI5NC4yNQpMIDMyMy4xIDI5NC4yNQpRIDMyMy4xIDI5NC4yIDMyMy4wNSAyOTQuMTUgWiIvPgoKPHBhdGggZmlsbD0iIzU4OTM5QyIgZmlsbC1vcGFjaXR5PSIwLjk5NjA3ODQzMTM3MjU0OSIgc3Ryb2tlPSJub25lIiBkPSIKTSAzMDEuMDUgMjY5LjA1CkwgMzAwLjU1IDI2OS43NQpRIDMwMC42IDI2OS43NSAzMDAuNyAyNjkuOCAzMDEuOCAyNzkuNTUgMzAzLjIgMjg5IDMwNCAyOTQuMiAzMDQuMDUgMjk5LjIKTCAzMDMuODUgMjk5LjIKUSAzMDMuMzUgMjk5LjE1IDMwMy4xNSAyOTkuMzUgMzEwLjUgMjk5LjMgMzE3LjUgMjk4Ljg1IDMxNy41NSAyOTguODUgMzE3LjYgMjk4Ljg1IDMxNy42IDI5OC44IDMxNy42IDI5OC43NSAzMTcuNiAyOTguNyAzMTcuNiAyOTguNiAzMTkuNTUgMjk4LjY1IDMyMS4yNSAyOTguNSAzMjEuMzUgMjk4LjUgMzIxLjQgMjk4LjUgMzIxLjA1IDI5NC45NSAzMjAuNTUgMjkxLjU1IDMyMC41NSAyOTEuNSAzMjAuNTUgMjkxLjQ1IDMyMS40IDI5Mi4zNSAzMjIuMjUgMjkzLjMKTCAzMjIuOCAyOTIuOApRIDMyMS4zIDI5MC45IDMyMC4xIDI4OC42IDMxNi40IDI4MS41IDMxMS4wNSAyNzYgMzA4LjcgMjczLjYgMzA1LjYgMjcxLjkgMzAzLjIgMjcwLjYgMzAxLjA1IDI2OS4wNQpNIDIxMS43NSAxNDEuMTUKUSAyMDcuNyAxNDQuNzUgMjAzLjcgMTQ4LjQ1IDIwMi4zNSAxNDkuNjUgMjAxLjA1IDE1MC45IDE5NyAxNTUgMTkxLjU1IDE1Ny43IDE5MC42NSAxNTcuNzUgMTg5Ljg1IDE1Ny44IDE4NC4zIDE1OC4yIDE4Mi4zIDE1NC40IDE4Mi4zIDE1NC4zNSAxODIuMyAxNTQuMyAxODIuMyAxNTMuOCAxODIuMyAxNTMuMyAxODIuNiAxNTIuNyAxODMuMSAxNTIuMyAxODMuMTUgMTUyLjMgMTgzLjE1IDE1Mi4yNSAxODMuNTUgMTUyLjA1IDE4NCAxNTEuOTUgMTg0IDE1MS45IDE4NCAxNTEuODUgMTg0LjM1IDE1MS44NSAxODQuNzUgMTUxLjg1IDE4NC44IDE1MS44NSAxODQuODUgMTUxLjg1IDE4Ni43NSAxNTMuMTUgMTg5Ljk1IDE1My4xIDE5MCAxNTMuMSAxOTAuMSAxNTMuMSAxOTMuNDUgMTUxIDE5Ni4yIDE0OC4zNSAxOTYuMjUgMTQ4LjM1IDE5Ni4zIDE0OC4zNSAxOTUuODUgMTQ3Ljg1IDE5NS4zIDE0Ny45NSAxOTQuMSAxNDguMSAxOTQuNyAxNDguMzUgMTk0LjUgMTQ4LjU1IDE5NC4zIDE0OC42IDE4OS42IDE0OS43IDE4NC44NSAxNTAuNyAxODAuMzUgMTUxLjY1IDE3NS4zNSAxNTIgMTcwLjQgMTUyLjM1IDE2NS4yNSAxNTIuNDUgMTU5Ljc1IDE1Mi41NSAxNTUuMjUgMTUxLjU1IDE1MC44IDE1MC41IDE0Ni41IDE0OS4zIDE0Ni40NSAxNDkuMyAxNDYuNCAxNDkuMyAxMzkuOTUgMTQ4LjM1IDEzNC44NSAxNDYuNjUgMTM1IDE0Ni45NSAxMzUuNCAxNDcuMTUgMTM3LjY1IDE0OC4yIDEzOS44NSAxNDkuNDUgMTQ2LjcgMTUzLjQ1IDE1NS41IDE1NS42IDE1OC42IDE1Ni4zIDE2MS41IDE1NS40IDE2MS41IDE1NS4zNSAxNjEuNSAxNTUuMyAxNjIuMzUgMTU0LjYgMTYzLjQ1IDE1NC4xNSAxNjMuNSAxNTQuMTUgMTYzLjU1IDE1NC4xNSAxNjQgMTU0LjE1IDE2NC40IDE1NC4xNQpMIDE2NC40IDE1NC4yNQpRIDE2NS4xIDE1NC40IDE2NS41IDE1NC44IDE2NS41IDE1NC44NSAxNjUuNTUgMTU0LjkgMTY1Ljg1IDE1NS40IDE2Ni4xIDE1NiAxNjYuMSAxNTYuMDUgMTY2LjEgMTU2LjEgMTY2LjEgMTU2LjY1IDE2Ni4xIDE1Ny4yIDE2Ni4wNSAxNTcuMiAxNjYuMDUgMTU3LjI1IDE2NC43NSAxNTkuODUgMTYxLjc1IDE2MC43NSAxNjEgMTYwLjc1IDE2MC40IDE2MC44NSAxNTguMzUgMTYxLjMgMTU2LjI1IDE2MC45NSAxNTMuNjUgMTYwLjU1IDE1MS4yNSAxNjAuMDUgMTQ2LjY1IDE1OS4wNSAxNDMuMjUgMTU3IDEzNi40NSAxNTIuOSAxMjkuNTUgMTQ4Ljg1IDEyMi43IDE0NC44NSAxMTUuNiAxNDEuMDUgMTE0LjYgMTQwLjggMTEzLjQ1IDE0MC41NSAxMDQuNSAxMzguNjUgOTQuMyAxMzguMzUgOTQuMjUgMTM4LjM1IDk0LjI1IDEzOC40IDkzIDE0MC4xNSA5MS41IDE0MS42NSA4OS4wNSAxNDUuOCA4Ni44IDE1MC4yNSA4My4xNSAxNTcuNDUgODEuMyAxNjYuNDUgODEuMyAxNjYuNSA4MS4zIDE2Ni42IDgwLjQgMTcyLjY1IDc5LjcgMTc5IDc5LjcgMTg2LjEgODAuNiAxOTIuMzUgODAuNjUgMTkyLjQgODAuNyAxOTIuNCA4MC43IDE5Mi4zIDgwLjcgMTkyLjI1IDgwLjM1IDE4OC41NSA4MC4yIDE4NC43IDgwLjQ1IDE4NC4yIDgwLjUgMTg1LjM1IDgwLjYgMTg3LjA1IDgwLjk1IDE4OC41IDgwLjUgMTc3LjkgODIuMiAxNjguNiA4My44NSAxNTkuMjUgODcuNTUgMTUyLjEgODguMTUgMTUwLjk1IDg4LjU1IDE0OS43NSA4OSAxNDguMzUgOTAuMiAxNDcuODUgOTAuMiAxNDcuOCA5MC4yIDE0Ny43IDkyLjkgMTQ1LjkgOTUuOCAxNDQuMiA5NS44NSAxNDQuMiA5NS45IDE0NC4yIDEwNS41IDE0NS4xIDExMy4yNSAxNDguMjUgMTE1LjMgMTQ5LjEgMTE3LjQgMTQ5LjggMTIyLjQgMTUxLjUgMTI3LjEgMTUzLjU1IDEzNC43NSAxNTYuOSAxNDMuNDUgMTU5LjE1IDE1MiAxNjEuNCAxNjIuMiAxNjIgMTY3LjUgMTYyLjMgMTcyLjcgMTYyLjQ1IDE3OC45IDE2Mi42IDE4My45IDE2MS41NSAxOTEuOTUgMTU5LjggMTk5LjEgMTU3LjggMjAyLjMgMTUzLjY1IDIwNy4yNSAxNTEuMyAyMDcuMyAxNTEuMjUgMjA3LjM1IDE1MS4yNSAyMDYuNTUgMTUxLjk1IDIwNS43IDE1Mi42NSAyMDUuNjUgMTUyLjY1IDIwNS42NSAxNTIuNyAyMTIuNCAxNDguNTUgMjIwLjQgMTQ1LjY1IDIyMi44IDE0NC44IDIyNS44NSAxNDQuNTUgMjI1Ljg1IDE0NC41IDIyNS44NSAxNDQuNDUgMjI2Ljg1IDE0NC40NSAyMjcuOCAxNDQuNDUgMjI3Ljg1IDE0NC40NSAyMjcuOTUgMTQ0LjQ1IDIzNS4wNSAxNDAuNyAyNDEuODUgMTM2LjY1IDI0OC43IDEzMi41NSAyNTYuMiAxMjkuMDUgMjU5LjggMTI3LjQgMjYzLjg1IDEyNi4xIDI2NS4yNSAxMjUuNyAyNjYuNjUgMTI1LjM1IDI3NC4wNSAxMjguOCAyNzkuMSAxMzQuNjUgMjg0LjE1IDE0MC41IDI4Ni4zIDE0OS4zIDI4OC40NSAxNTcuOTUgMjkwLjg1IDE2Ni40NSAyOTMuMyAxNzQuOSAyOTQuOSAxODQuMSAyOTYuMSAxOTEuMTUgMjk2LjU1IDE5OC44NSAyOTcuMiAyMDkuMzUgMjk3LjEgMjE5LjY1IDI5NyAyMzAuNiAyOTcuNzUgMjQwLjcgMjk3LjggMjQxLjA1IDI5Ny44IDI0MS40IDMwMS45IDIzOS45NSAzMDYuNCAyMzkuOTUgMzExLjggMjM5Ljk1IDMxNS44IDI0MS4yIDMxNS4xIDIzMS41IDMxNC44NSAyMjEuNiAzMTQuNTUgMjEwLjggMzE0LjIgMjAwLjIgMzE0IDE5NSAzMTMuNzUgMTg5Ljk1IDMxMy40NSAxODMuMyAzMTIuOCAxNzcuMTUgMzExLjg1IDE2Ny4yIDMwOS45IDE1OC4zIDMwOS40IDE1NiAzMDguNzUgMTUzLjc1IDMwNi40IDE0NS4zNSAzMDMuNDUgMTM3LjMgMzAwLjYgMTI5LjQgMjk1LjcgMTIzLjQgMjk0LjQ1IDEyMS45IDI5My4zIDEyMC4zNSAyOTAuOSAxMTcuMjUgMjg4LjEgMTE0LjYgMjg2Ljg1IDExMy40NSAyODUuOCAxMTIuMTUgMjgzLjkgMTA5Ljk1IDI4MSAxMDguOCAyNzguMjUgMTA5LjQgMjc1LjcgMTEwLjEgMjY3LjE1IDExMi41IDI2MC4wNSAxMTYuMyAyNTIuOSAxMjAuMSAyNDUuNyAxMjMuNzUgMjM4LjUgMTI3LjQ1IDIzMS40NSAxMzEuMyAyMzAuNjUgMTMyLjggMjI4LjkgMTMzLjM1IDIyNy4yIDEzMy45NSAyMjUuNTUgMTM0LjcgMjE4LjY1IDEzNy45IDIxMS43NSAxNDEuMTUgWiIvPgoKPHBhdGggZmlsbD0iIzIwMjEyMiIgc3Ryb2tlPSJub25lIiBkPSIKTSAyNDguOSAyMDEuNQpRIDI0OC45NSAyMDEuMzUgMjQ4LjYgMjAxLjUgMjQ2LjQ1IDIwMy4zIDI0My45NSAyMDQuOCAyMzcuMSAyMDguOCAyMjYuMzUgMjA4Ljk1IDIyMi45IDIwOSAyMTkuOCAyMDguNSAyMTAuNTUgMjA3LjA1IDIwNC4zIDIwMi4zNSAyMDQuMjUgMjAyLjM1IDIwNC4yIDIwMi4zNSAyMDMuNyAyMDIuMjUgMjAzLjI1IDIwMi4xIDIwOC45NSAyMDcuMjUgMjE4IDIwOS4wNSAyMjEuNDUgMjA5Ljc1IDIyNS41IDIwOS44IDIzNi41IDIwOS45IDI0My4yNSAyMDUuODUgMjQ1Ljc1IDIwNC4zIDI0OCAyMDIuNjUgMjQ4LjY1IDIwMi4yIDI0OC45IDIwMS41IFoiLz4KCjxwYXRoIGZpbGw9IiM0QjYyNjYiIGZpbGwtb3BhY2l0eT0iMC45OTYwNzg0MzEzNzI1NDkiIHN0cm9rZT0ibm9uZSIgZD0iCk0gMTQzLjEgMjk5LjcKUSAxNDMuMTUgMjk5LjcgMTQzLjI1IDI5OS43IDE1My44NSAyOTkuNjUgMTY0Ljc1IDI5OS43NSAxNzUuMzUgMjk5Ljg1IDE4Ni4yIDI5OS42NSAxOTYuOCAyOTkuNDUgMjA3Ljc1IDI5OS42NSAyMTguMzUgMjk5Ljg1IDIyOC44IDMwMC4yIDIzMi41NSAzMDAuMzUgMjM2LjIgMzAwLjQ1IDI0Mi44NSAzMDAuNiAyNDkuNyAzMDAuNTUgMjQ5Ljc1IDMwMC41NSAyNDkuODUgMzAwLjU1IDI0OS40IDMwMC4zNSAyNDguNiAzMDAuMzUgMjM3LjcgMzAwLjQ1IDIyNy4yIDMwMC4wNSAyMTYuNzUgMjk5LjY1IDIwNi4wNSAyOTkuNSAxOTUuMyAyOTkuMzUgMTg0LjM1IDI5OS41NSAxNzMuOCAyOTkuOCAxNjMuMDUgMjk5LjY1IDE1Mi4yIDI5OS40NSAxNDEuNTUgMjk5LjYgMTQyLjE1IDI5OS44IDE0My4xIDI5OS43IFoiLz4KCjxwYXRoIGZpbGw9IiM0Nzg4OTEiIGZpbGwtb3BhY2l0eT0iMC45ODgyMzUyOTQxMTc2NDcxIiBzdHJva2U9Im5vbmUiIGQ9IgpNIDEwMi40NSAyODcuMDUKUSAxMDIgMjg3LjE1IDEwMS42IDI4Ny4zIDEwMS45NSAyODkuMiAxMDIuNDUgMjkwLjk1IDEwMi40NSAyOTEgMTAyLjQ1IDI5MS4wNSAxMDMuMiAyOTQuNTUgMTA0LjE1IDI5Ny43NSAxMDQuMTUgMjk3Ljg1IDEwNC4xNSAyOTcuOSAxMTIuNiAyOTguNTUgMTIxLjM1IDI5OC44IDEyMi43NSAyOTguODUgMTIzLjkgMjk5LjEgMTI2Ljk1IDI5OS4zNSAxMzAuMiAyOTkuMzUgMTMwLjMgMjk5LjM1IDEzMC4zNSAyOTkuMzUgMTI1LjggMjk5IDEyMS43IDI5OC41NSAxMTcuOCAyOTguMTUgMTEzLjkgMjk4LjM1IDExMy44NSAyOTguMzUgMTEzLjggMjk4LjM1IDExMSAyOTguMSAxMDguMyAyOTguMTUgMTA4LjI1IDI5OC4xNSAxMDguMiAyOTguMSAxMDcuMzUgMjk3Ljk1IDEwNi43NSAyOTcuNSAxMDYuNzUgMjk3LjYgMTA2LjcgMjk3LjYgMTA1Ljc1IDI5OC4wNSAxMDUuNzUgMjk2LjkgMTA1LjUgMjk2LjkgMTA1LjUgMjk2Ljg1IDEwMy43IDI5Mi4yNSAxMDIuNiAyODcuMDUgMTAyLjU1IDI4Ny4wNSAxMDIuNDUgMjg3LjA1IFoiLz4KCjxwYXRoIGZpbGw9IiMwNTA2MDYiIGZpbGwtb3BhY2l0eT0iMC45ODQzMTM3MjU0OTAxOTYiIHN0cm9rZT0ibm9uZSIgZD0iCk0gOTIuMTUgMjk2LjA1ClEgOTIuMDUgMjk2LjA1IDkyLjA1IDI5Ni4xIDkxLjMgMjk3LjQgOTAuMyAyOTguNSA5MC4zIDI5OC41NSA5MC4zIDI5OC42IDk0LjQgMjk5LjE1IDk4LjQ1IDI5OS4wNQpMIDk4LjQ1IDI5OQpRIDk4LjU1IDI5OC4wNSA5OS45NSAyOTguMiAxMDIuNSAyOTguNSAxMDUuMjUgMjk4LjYgMTE0LjQ1IDI5OC45IDEyMy45IDI5OS4xIDEyMi43NSAyOTguODUgMTIxLjM1IDI5OC44IDExMi42IDI5OC41NSAxMDQuMTUgMjk3LjkgMTAyLjYgMjk3LjcgMTAxLjIgMjk3LjI1IDk3LjMgMjk2LjA1IDkyLjE1IDI5Ni4wNSBaIi8+Cgo8cGF0aCBmaWxsPSIjMzYzNzM3IiBmaWxsLW9wYWNpdHk9IjAuOTk2MDc4NDMxMzcyNTQ5IiBzdHJva2U9Im5vbmUiIGQ9IgpNIDkyLjE1IDI5NS45NQpRIDkyLjE1IDI5NiA5Mi4xNSAyOTYuMDUgOTcuMyAyOTYuMDUgMTAxLjIgMjk3LjI1IDEwMi42IDI5Ny43IDEwNC4xNSAyOTcuOSAxMDQuMTUgMjk3Ljg1IDEwNC4xNSAyOTcuNzUgMTAzLjIgMjk0LjU1IDEwMi40NSAyOTEuMDUgMTAyLjQgMjkxLjA1IDEwMi4zNSAyOTEuMSA5OS4xNSAyOTEuOTUgOTQuNyAyOTIuMTUgOTQuNyAyOTIuMjUgOTQuNjUgMjkyLjI1IDk0LjEgMjkzLjE1IDkzLjcgMjk0LjI1IDkzLjY1IDI5NC4yNSA5My42IDI5NC4yNSA5Mi45IDI5NS4xIDkyLjE1IDI5NS45NSBaIi8+Cgo8cGF0aCBmaWxsPSIjNUE1QzVDIiBmaWxsLW9wYWNpdHk9IjAuOTk2MDc4NDMxMzcyNTQ5IiBzdHJva2U9Im5vbmUiIGQ9IgpNIDk5LjMgMjg3LjgKUSA5Ny44IDI4OC4xNSA5Ni44NSAyODcuOApMIDk2LjggMjg3LjgKUSA5NS44IDI5MCA5NC43IDI5Mi4wNSA5NC43IDI5Mi4xIDk0LjcgMjkyLjE1IDk5LjE1IDI5MS45NSAxMDIuMzUgMjkxLjEgMTAyLjQgMjkxLjA1IDEwMi40NSAyOTEuMDUgMTAyLjQ1IDI5MSAxMDIuNDUgMjkwLjk1IDEwMS45NSAyODkuMiAxMDEuNiAyODcuMyAxMDAuNCAyODcuNSA5OS4zIDI4Ny44IFoiLz4KCjxwYXRoIGZpbGw9IiMwQTBDMEMiIGZpbGwtb3BhY2l0eT0iMC43Mjk0MTE3NjQ3MDU4ODIzIiBzdHJva2U9Im5vbmUiIGQ9IgpNIDk4LjQ1IDI4NC41ClEgOTguNDUgMjg0LjU1IDk4LjQ1IDI4NC42IDk3LjkgMjg2LjM1IDk2Ljg1IDI4Ny42NSA5Ni44NSAyODcuNzUgOTYuODUgMjg3LjggOTcuOCAyODguMTUgOTkuMyAyODcuOCAxMDAuNCAyODcuNSAxMDEuNiAyODcuMyAxMDIgMjg3LjE1IDEwMi40NSAyODcuMDUgMTAyLjU1IDI4Ny4wNSAxMDIuNiAyODcuMDUKTCAxMDIuNjUgMjg3LjA1ClEgMTAyLjY1IDI4Ni44IDEwMi42IDI4Ni41NQpMIDEwMi41NSAyODYuNTUKUSAxMDIuNzUgMjg1LjQ1IDEwMS44NSAyODUuNDUgMTAxLjYgMjg1LjQ1IDEwMS40IDI4NS40IDEwMC42IDI4NS4xIDEwMC40IDI4NC4xNSAxMDAuNCAyODQuMSAxMDAuNCAyODQgMTAwLjQgMjgzLjYgMTAwLjQgMjgzLjE1CkwgMTAwLjM1IDI4My4xNQpRIDEwMC4xIDI4Mi4zNSA5OS44IDI4MS43IDk5LjggMjgxLjc1IDk5Ljc1IDI4MS44IDk5LjcgMjgxLjkgOTkuNTUgMjgxLjk1IDk5LjU1IDI4MiA5OS41NSAyODIuMDUKTCA5OS41NSAyODIuMTUgOTkuNjUgMjgyLjIKUSA5OS4yIDI4My40NSA5OC40NSAyODQuNSBaIi8+Cgo8cGF0aCBmaWxsPSIjRTREMkI5IiBmaWxsLW9wYWNpdHk9IjAuOTk2MDc4NDMxMzcyNTQ5IiBzdHJva2U9Im5vbmUiIGQ9IgpNIDkyLjc1IDI1Ni4wNQpRIDg4Ljc1IDI1OC4yNSA4NSAyNjAuNzUgODEuNyAyNjIuOSA3OS4yNSAyNjUuOSA3OC40IDI2Ni45NSA3Ny43IDI2OC4xIDc1LjcgMjcxLjYgNzQuNiAyNzYgNzQuNiAyNzYuMjUgNzQuNjUgMjc2LjQ1CkwgNzQuNyAyNzYuNDUgNzQuOCAyNzYuNDUKUSA3NS4yIDI3NS4zIDc1LjggMjc0LjQKTCA3NS45IDI3NC40ClEgNzQuNzUgMjc5LjcgNzQuMzUgMjg1Ljg1IDc0IDI5Mi44IDc4LjA1IDI5NS4zIDc4LjA1IDI5NS4zNSA3OC4xNSAyOTUuMzUgNzcuNiAyOTAuOCA3OC41NSAyODYuMiA3OS40NSAyODEuOSA4MS4zIDI3OC41NSA4MC40IDI4Mi43IDc5LjYgMjg3LjQ1IDc4LjcgMjkzIDgwLjM1IDI5Ny4xIDgxLjI1IDI5OS4zNSA4My4yIDMwMC41NSA4My44NSAzMDAuOTUgODQuOCAzMDAuOTUgODYuNzUgMzAwLjg1IDg4LjEgMzAwLjEgOTMuMTUgMjk0LjI1IDk2LjU1IDI4Ni42NSA5NyAyODUuNyA5Ny42IDI4NC44IDk4LjUgMjgzLjQgOTkuNTUgMjgyLjA1IDk5LjU1IDI4MiA5OS41NSAyODEuOTUgOTkuNyAyODEuOSA5OS43NSAyODEuOCA5OS44IDI4MS43NSA5OS44IDI4MS43IDk4LjcgMjc3LjM1IDk3LjUgMjcyLjk1IDk1LjIgMjY0LjQ1IDkyLjc1IDI1Ni4wNSBaIi8+Cgo8cGF0aCBmaWxsPSIjQkVCMTlFIiBzdHJva2U9Im5vbmUiIGQ9IgpNIDkwLjY1IDI0NwpRIDkwLjYgMjQ3IDkwLjU1IDI0Ny4wNSA4OC4xIDI0Ny44IDg2LjA1IDI0OC45NSA4Mi45NSAyNTEuOSA4MC4wNSAyNTUuMDUgNzcuODUgMjU3LjUgNzYuMjUgMjYwLjUgNzIuNSAyNjcuNyA3MS43IDI3Ny44IDcxLjcgMjgyLjYgNzIuODUgMjg2LjMgNzIuODUgMjg2LjM1IDcyLjkgMjg2LjM1IDczLjEgMjg2LjE1IDczLjE1IDI4NS4xIDczLjQgMjgwLjM1IDc0LjcgMjc2LjQ1CkwgNzQuNjUgMjc2LjQ1ClEgNzQuNiAyNzYuMjUgNzQuNiAyNzYgNzUuNyAyNzEuNiA3Ny43IDI2OC4xIDc4LjQgMjY2Ljk1IDc5LjI1IDI2NS45IDgxLjcgMjYyLjkgODUgMjYwLjc1IDg4Ljc1IDI1OC4yNSA5Mi43NSAyNTYuMDUgOTIuNzUgMjU1Ljk1IDkyLjc1IDI1NS45IDkyLjA1IDI1MS4xNSA5MC42NSAyNDcKTSAzMzkuNjUgMjUzLjYKUSAzMzkuNjUgMjUzLjU1IDMzOS42IDI1My41IDMzNy45NSAyNTAuNiAzMzUuNCAyNDguNiAzMjkuOCAyNDQgMzIxLjUgMjQyLjMgMzE5LjEgMjQxLjg1IDMxNyAyNDEuMiAzMTYuOTUgMjQxLjIgMzE2LjkgMjQxLjIgMzE2LjQ1IDI0MS4zIDMxNS44IDI0MS4yIDMxMS44IDIzOS45NSAzMDYuNCAyMzkuOTUgMzAxLjkgMjM5Ljk1IDI5Ny44IDI0MS40IDI5Ny44IDI0MS41IDI5Ny43NSAyNDEuNSAyOTEuNjUgMjQzLjcgMjkwIDI1MC4zIDI5MCAyNTkuMTUgMjk0IDI2My45IDI5NS4wNSAyNjUuMiAyOTYuMjUgMjY2LjQgMjk2LjY1IDI2Ni44IDI5Ny4wNSAyNjcuMiAyOTguNiAyNjguNyAzMDAuNTUgMjY5Ljc1CkwgMzAxLjA1IDI2OS4wNQpRIDI5OC45IDI2Ny40NSAyOTYuOTUgMjY1LjY1IDI5Ny4yIDI2NC41IDI5Ni4zNSAyNjMuNDUgMjk0LjEgMjYwLjcgMjkzLjA1IDI1Ni45IDI5My40NSAyNTUuMiAyOTMuNSAyNTMgMjkzLjU1IDI1MS44NSAyOTQuMSAyNTEgMjk3LjE1IDI0Ni4zNSAzMDQuOTUgMjQ3LjMgMzA5LjcgMjQ3Ljg1IDMxMy44IDI0OS4zIDMxNy44IDI1MC43NSAzMjEuMzUgMjUyLjY1IDMyNy4xIDI1NS43IDMzMi40IDI1OS4zIDMzMy45NSAyNjAuMzUgMzM1LjE1IDI2MS43NSAzMzYuMzUgMjYzLjEgMzM3LjggMjY0LjIgMzM5LjcgMjY3LjMgMzQwLjkgMjcxLjE1IDM0MS4yIDI3Mi4xNSAzNDEuNDUgMjczLjIgMzQxLjQ1IDI3My4yNSAzNDEuNDUgMjczLjMgMzQwLjg1IDI3MiAzNDAgMjcwLjk1CkwgMzQwIDI3MQpRIDM0MC43NSAyNzUuMyAzNDEuNDUgMjgwLjI1IDM0MS45IDI4My41IDM0MS4zIDI4Ni40NSAzNDEuMiAyODYuOTUgMzQxLjA1IDI4Ny41IDM0MC44IDI4OC40IDM0MC40IDI4OS4xNSAzNDAgMjg5Ljg1IDMzOS41IDI5MC40NSAzMzguNjUgMjkxLjM1IDMzNy41NSAyOTEuOSAzMzcuNiAyOTEuNSAzMzcuNyAyOTEuMSAzMzcuNzUgMjkwLjc1IDMzNy44NSAyOTAuNDUgMzM4LjA1IDI4OS4xIDMzOC4zNSAyODcuNjUgMzM4LjkgMjg0Ljk1IDMzOC4zNSAyODIuNTUgMzM3LjcgMjc5Ljc1IDMzNi43IDI3Ny4zNSAzMzUuNSAyNzQuNSAzMzMuNjUgMjcyLjM1IDMzMi45IDI3MS41IDMzMi4xIDI3MC43NSAzMzEuOCAyNzAuNSAzMzEuNSAyNzAuNzUgMzMxLjI1IDI3Mi4yNSAzMzIuMTUgMjczLjY1IDMzNC4zIDI3Ny4wNSAzMzUuMyAyODEuNDUgMzM2LjI1IDI4NS43IDMzNS45NSAyOTAuNDUgMzM1LjkgMjkwLjU1IDMzNS45IDI5MC43CkwgMzM1LjkgMjkwLjc1ClEgMzM1LjkgMjkxLjE1IDMzNS43IDI5MS43NSAzMzQuOCAyOTUuMSAzMzIuNDUgMjk3LjE1IDMyOC43IDI5OC4zNSAzMjYuMiAyOTYuMjUgMzI0LjM1IDI5NC43IDMyMi44IDI5Mi44CkwgMzIyLjI1IDI5My4zClEgMzIyLjY1IDI5My43IDMyMy4wNSAyOTQuMTUgMzIzLjEgMjk0LjIgMzIzLjEgMjk0LjI1IDMyNC4xIDI5NS45IDMyNS41NSAyOTcuMTUgMzI2LjcgMjk4LjEgMzI4LjIgMjk4LjgKTCAzMjguMiAyOTguODUKUSAzMzAuMyAyOTguOTUgMzMyLjEgMjk4Ljc1IDMzMi4xNSAyOTguNzUgMzMyLjIgMjk4Ljc1IDMzMi4zIDI5OC43NSAzMzIuMzUgMjk4Ljc1IDMzMi40IDI5OC43NSAzMzIuNDUgMjk4Ljc1IDMzMi40NSAyOTguNyAzMzIuNDUgMjk4LjYgMzMyLjc1IDI5OC41IDMzMy4wNSAyOTguNCAzMzMuMyAyOTguMjUgMzMzLjUgMjk4LjE1IDMzNC4wNSAyOTcuNjUgMzM0LjYgMjk3LjE1IDMzNC42NSAyOTcuMSAzMzQuNjUgMjk3LjA1IDMzNC42NSAyOTYuOTUgMzM0LjY1IDI5Ni45IDMzNi4yNSAyOTUuNiAzMzcgMjkzLjQKTCAzMzcuMSAyOTMuNApRIDMzNy41IDI5My4zNSAzMzcuODUgMjkzLjMgMzM3LjkgMjkzLjI1IDMzNy45NSAyOTMuMjUgMzM4IDI5My4yIDMzOC4xIDI5My4yIDM0MC40IDI5Mi41NSAzNDEuNCAyOTAuNSAzNDEuNCAyOTAuNDUgMzQxLjQ1IDI5MC40NSAzNDEuNiAyOTAuMiAzNDEuOCAyODkuOTUgMzQyLjEgMjg5LjQ1IDM0Mi4zNSAyODguOSAzNDIuNCAyODguOSAzNDIuNDUgMjg4LjkgMzQyLjcgMjg4LjMgMzQyLjggMjg3LjU1IDM0Mi45IDI4Ni45IDM0My4wNSAyODYuOCAzNDMuMSAyODYuNyAzNDMuMTUgMjg2LjggMzQzLjQ1IDI4Ny4yNSAzNDMuODUgMjg2LjY1IDM0NC4xIDI4Ni4zIDM0NC4zNSAyODUuOSAzNDUuNDUgMjgzLjkgMzQ2LjA1IDI4MS40IDM0Ni4wNSAyODEuMiAzNDYuMSAyODEgMzQ2LjIgMjgwLjM3NSAzNDYuMyAyNzkuNzUgMzQ3IDI3NC42IDM0Ni4xNSAyNjkuNjUgMzQ0LjUgMjYwLjQ1IDM0MC4xNSAyNTMuOTUKTCAzNDAuMDUgMjUzLjk1ClEgMzM5LjkgMjUzLjcgMzM5LjY1IDI1My42IFoiLz4KCjxwYXRoIGZpbGw9IiM5Qzk2N0YiIGZpbGwtb3BhY2l0eT0iMC45ODgyMzUyOTQxMTc2NDcxIiBzdHJva2U9Im5vbmUiIGQ9IgpNIDkwLjIgMjQ2LjE1ClEgOTAuMSAyNDYuMTUgOTAuMDUgMjQ2LjE1IDkwIDI0Ni4xNSA4OS45NSAyNDYuMTUgODcuMjUgMjQ2LjkgODUuMSAyNDguMSA3OC4xIDI1Mi4wNSA3NC40NSAyNTkuMzUgNzAuOCAyNjYuNTUgNjkuODUgMjc2LjQ1IDY5LjQgMjg1LjM1IDcyLjg1IDI5MC4yNSA3MyAyOTAuNSA3MyAyOTAuMSA3My4zIDI4OS44NSA3My41IDI5MC44IDczLjk1IDI5MyA3NSAyOTQuNjUgNzYuMDUgMjk2LjM1IDc4LjUgMjk2LjU1IDc5LjU1IDMwMC4yIDgyLjcgMzAxLjggODQuMTUgMzAyLjU1IDg2IDMwMi4wNSA4Ny40NSAzMDEuNjUgODguNiAzMDAuOTUgODkuNCAyOTkuOCA5MC4yNSAyOTguNyA5MC4zIDI5OC43IDkwLjMgMjk4LjYgOTAuMyAyOTguNTUgOTAuMyAyOTguNSA5MS4zIDI5Ny40IDkyLjA1IDI5Ni4xIDkyLjA1IDI5Ni4wNSA5Mi4xNSAyOTYuMDUgOTIuMTUgMjk2IDkyLjE1IDI5NS45NSA5Mi45IDI5NS4xIDkzLjYgMjk0LjI1IDkzLjY1IDI5NC4yNSA5My43IDI5NC4yNSA5NC4xIDI5My4xNSA5NC42NSAyOTIuMjUgOTQuNyAyOTIuMjUgOTQuNyAyOTIuMTUgOTQuNyAyOTIuMSA5NC43IDI5Mi4wNSA5NS44IDI5MCA5Ni44IDI4Ny44CkwgOTYuODUgMjg3LjgKUSA5Ni44NSAyODcuNzUgOTYuODUgMjg3LjY1IDk3LjkgMjg2LjM1IDk4LjQ1IDI4NC42IDk4LjQ1IDI4NC41NSA5OC40NSAyODQuNSA5OS4yIDI4My40NSA5OS42NSAyODIuMgpMIDk5LjU1IDI4Mi4xNSA5OS41NSAyODIuMDUKUSA5OC41IDI4My40IDk3LjYgMjg0LjggOTcgMjg1LjcgOTYuNTUgMjg2LjY1IDkzLjE1IDI5NC4yNSA4OC4xIDMwMC4xIDg2Ljc1IDMwMC44NSA4NC44IDMwMC45NSA4My44NSAzMDAuOTUgODMuMiAzMDAuNTUgODEuMjUgMjk5LjM1IDgwLjM1IDI5Ny4xIDc4LjcgMjkzIDc5LjYgMjg3LjQ1IDgwLjQgMjgyLjcgODEuMyAyNzguNTUgNzkuNDUgMjgxLjkgNzguNTUgMjg2LjIgNzcuNiAyOTAuOCA3OC4xNSAyOTUuMzUgNzguMDUgMjk1LjM1IDc4LjA1IDI5NS4zIDc0IDI5Mi44IDc0LjM1IDI4NS44NSA3NC43NSAyNzkuNyA3NS45IDI3NC40CkwgNzUuOCAyNzQuNApRIDc1LjIgMjc1LjMgNzQuOCAyNzYuNDUKTCA3NC43IDI3Ni40NQpRIDczLjQgMjgwLjM1IDczLjE1IDI4NS4xIDczLjEgMjg2LjE1IDcyLjkgMjg2LjM1IDcyLjg1IDI4Ni4zNSA3Mi44NSAyODYuMyA3MS43IDI4Mi42IDcxLjcgMjc3LjggNzIuNSAyNjcuNyA3Ni4yNSAyNjAuNSA3Ny44NSAyNTcuNSA4MC4wNSAyNTUuMDUgODIuOTUgMjUxLjkgODYuMDUgMjQ4Ljk1IDg4LjEgMjQ3LjggOTAuNTUgMjQ3LjA1IDkwLjYgMjQ3IDkwLjY1IDI0NyA5MC42NSAyNDYuOTUgOTAuNjUgMjQ2LjkgOTAuNjUgMjQ2LjMgOTAuMiAyNDYuMTUgWiIvPgoKPHBhdGggZmlsbD0iIzIxM0Q0MSIgZmlsbC1vcGFjaXR5PSIwLjMyOTQxMTc2NDcwNTg4MjM1IiBzdHJva2U9Im5vbmUiIGQ9IgpNIDkwLjQ1IDI0NS44ClEgOTAuNCAyNDUuNzUgOTAuNCAyNDUuNyA4OC43NSAyMzkgODcuNDUgMjMyLjA1IDg1Ljc1IDIyMi43IDgzLjYgMjE0LjMgODQuNyAyMjQuMSA4NyAyMzIuNjUgODguNjUgMjM4LjggOTAgMjQ1LjIgOTAuMSAyNDUuOCA4OS45NSAyNDYuMTUgOTAgMjQ2LjE1IDkwLjA1IDI0Ni4xNSA5MC4xIDI0Ni4xNSA5MC4yIDI0Ni4xNSA5MC4yIDI0Ni4xIDkwLjIgMjQ2LjA1IDkwLjUgMjQ2LjE1IDkwLjQ1IDI0NS44IFoiLz4KCjxwYXRoIGZpbGw9IiMzMjYwNjYiIGZpbGwtb3BhY2l0eT0iMC41ODQzMTM3MjU0OTAxOTYxIiBzdHJva2U9Im5vbmUiIGQ9IgpNIDgyLjkgMjA5LjU1ClEgODIuOSAyMDkuNiA4Mi45IDIwOS42NSA4My4zIDIxMS44NSA4My41NSAyMTQuMwpMIDgzLjYgMjE0LjMKUSA4NS43NSAyMjIuNyA4Ny40NSAyMzIuMDUgODguNzUgMjM5IDkwLjQgMjQ1LjcgOTAuNCAyNDQuMSA5MC4wNSAyNDIuNzUgODguMiAyMzUuMSA4Ni43NSAyMjcuMTUgODUuMDUgMjE3Ljg1IDgyLjkgMjA5LjIgODIuOSAyMDkuMzUgODIuOSAyMDkuNTUgWiIvPgoKPHBhdGggZmlsbD0iIzhDOUU3MSIgZmlsbC1vcGFjaXR5PSIwLjk5NjA3ODQzMTM3MjU0OSIgc3Ryb2tlPSJub25lIiBkPSIKTSAxMDguNDUgMTA0LjA1CkwgMTA4LjQ1IDEwNApRIDEwNy4xIDEwNC43IDEwNS42NSAxMDUuNCAxMDUuNjUgMTA1Ljc1IDEwNS42NSAxMDYuMSAxMDUuNjUgMTA2LjE1IDEwNS42NSAxMDYuMjUgMTA2LjYgMTA3LjY1IDEwNy42IDEwOSAxMDcuNjUgMTA5LjA1IDEwNy43IDEwOS4wNSAxMDcuOCAxMDcuNSAxMDguMTUgMTA2LjI1IDEwOC41IDEwNC44NSAxMDguNDUgMTA0LjA1IFoiLz4KCjxwYXRoIGZpbGw9IiM0Rjk5QTMiIGZpbGwtb3BhY2l0eT0iMC45ODgyMzUyOTQxMTc2NDcxIiBzdHJva2U9Im5vbmUiIGQ9IgpNIDgwLjcgMTkyLjI1ClEgODAuNyAxOTIuMyA4MC43IDE5Mi40IDgwLjcgMTk3LjEgODEuNyAyMDAuOCA4Mi41IDIwMy42IDgyLjY1IDIwNy4xIDgyLjcgMjA4LjEgODIuOSAyMDkuMiA4NS4wNSAyMTcuODUgODYuNzUgMjI3LjE1IDg4LjIgMjM1LjEgOTAuMDUgMjQyLjc1IDkwLjQgMjQ0LjEgOTAuNCAyNDUuNyA5MC40IDI0NS43NSA5MC40NSAyNDUuOCA5MC41IDI0Ni4xNSA5MC4yIDI0Ni4wNSA5MC4yIDI0Ni4xIDkwLjIgMjQ2LjE1IDkwLjY1IDI0Ni4zIDkwLjY1IDI0Ni45IDkwLjY1IDI0Ni45NSA5MC42NSAyNDcgOTIuMDUgMjUxLjE1IDkyLjc1IDI1NS45IDkyLjc1IDI1NS45NSA5Mi43NSAyNTYuMDUgOTUuMiAyNjQuNDUgOTcuNSAyNzIuOTUgOTguNyAyNzcuMzUgOTkuOCAyODEuNyAxMDAuMSAyODIuMzUgMTAwLjM1IDI4My4xNQpMIDEwMC40IDI4My4xNQpRIDEwMC40IDI4My42IDEwMC40IDI4NCAxMDAuNCAyODQuMSAxMDAuNCAyODQuMTUgMTAwLjYgMjg1LjEgMTAxLjQgMjg1LjQgMTAxLjYgMjg1LjQ1IDEwMS44NSAyODUuNDUgMTAyLjc1IDI4NS40NSAxMDIuNTUgMjg2LjU1CkwgMTAyLjYgMjg2LjU1ClEgMTAyLjYgMjg2LjUgMTAyLjYgMjg2LjQ1IDEwMi42NSAyODUuNCAxMDIuMSAyODQuODUgMTAyLjEgMjg0LjIgMTAyIDI4My41NSAxMDEuNzUgMjgxLjkgMTAxLjMgMjgwLjU1IDk4LjY1IDI3Mi4yIDk2LjM1IDI2My42NSA5NC4xIDI1NSA5MS44IDI0Ni4zIDg5LjUgMjM3Ljc1IDg3Ljc1IDIyOC42NSA4NiAyMTkuNTUgODQuMiAyMTAuNSA4Mi40IDIwMS4xNSA4MS41NSAxOTEuNjUgODEuMyAxODkuMTUgODEuNCAxODcuMTUgODEuNCAxODcuMSA4MS40IDE4Ny4wNSA4MC45IDE4Mi44IDgxLjQgMTc4LjUKTCA4MS4zNSAxNzguNQpRIDgxLjIgMTc4LjEgODEuMTUgMTc3LjU1IDgyIDE3Mi40NSA4Mi42NSAxNjcuNTUgODIuNjUgMTY3LjUgODIuNjUgMTY3LjQ1IDgzLjA1IDE2Ni44NSA4MyAxNjYgODMgMTY1LjkgODMgMTY1Ljg1IDgzLjQgMTY1LjQgODMuMzUgMTY0LjUgODMuMzUgMTY0LjQ1IDgzLjM1IDE2NC40IDgzLjcgMTYzLjkgODMuNzUgMTYzLjA1IDgzLjc1IDE2MyA4My43NSAxNjIuOTUgODMuOSAxNjIuNSA4NC4xNSAxNjIuMQpMIDg0LjIgMTYyLjEKUSA4NC4yIDE2MS42NSA4NC4yIDE2MS4yNSA4NC4yIDE2MS4xNSA4NC4yIDE2MS4xIDg0LjQ1IDE2MC44NSA4NC42NSAxNjAuNTUgODQuNjUgMTYwLjUgODQuNyAxNjAuNSA4NC43IDE2MC4xNSA4NC43IDE1OS43NSA4NC43IDE1OS43IDg0LjcgMTU5LjY1IDg2Ljc1IDE1NSA4OC43IDE1MC4yNSA4OC43IDE1MC4yIDg4LjcgMTUwLjE1IDg5IDE1MC4wNSA4OS4xNSAxNDkuOApMIDg5LjIgMTQ5LjgKUSA4OS41IDE0OC43IDkwLjE1IDE0Ny45NSA5MC4yIDE0Ny45IDkwLjIgMTQ3Ljg1IDg5IDE0OC4zNSA4OC41NSAxNDkuNzUgODguMTUgMTUwLjk1IDg3LjU1IDE1Mi4xIDgzLjg1IDE1OS4yNSA4Mi4yIDE2OC42IDgwLjUgMTc3LjkgODAuOTUgMTg4LjUgODAuNiAxODcuMDUgODAuNSAxODUuMzUgODAuNDUgMTg0LjIgODAuMiAxODQuNyA4MC4zNSAxODguNTUgODAuNyAxOTIuMjUgWiIvPgoKPHBhdGggZmlsbD0iIzFCMzYzQSIgZmlsbC1vcGFjaXR5PSIwLjM2NDcwNTg4MjM1Mjk0MTE2IiBzdHJva2U9Im5vbmUiIGQ9IgpNIDgwLjYgMTkyLjM1ClEgNzkuNyAxODYuMSA3OS43IDE3OSA4MC40IDE3Mi42NSA4MS4zIDE2Ni42IDgxLjMgMTY2LjUgODEuMyAxNjYuNDUgODAuNSAxNjkuNyA4MC4xNSAxNzMuNCA3OS43NSAxNzcgNzkuMjUgMTc5LjUgNzkuNCAxODMuOTUgNzkuNzUgMTg4Ljk1IDgwLjIgMTk0LjU1IDgxLjA1IDIwMC45IDgxLjMgMjAzIDgxLjc1IDIwNS4wNSA4Mi4yNSAyMDcuNDUgODIuOSAyMDkuNjUgODIuOSAyMDkuNiA4Mi45IDIwOS41NSA4Mi45IDIwOS4zNSA4Mi45IDIwOS4yIDgyLjcgMjA4LjEgODIuNjUgMjA3LjEgODIuNSAyMDMuNiA4MS43IDIwMC44IDgwLjcgMTk3LjEgODAuNyAxOTIuNCA4MC42NSAxOTIuNCA4MC42IDE5Mi4zNSBaIi8+Cgo8cGF0aCBmaWxsPSIjM0Q0RjMyIiBmaWxsLW9wYWNpdHk9IjAuODk0MTE3NjQ3MDU4ODIzNiIgc3Ryb2tlPSJub25lIiBkPSIKTSA3MC4yIDEyNy42NQpRIDcwLjIgMTI3LjcgNzAuMiAxMjcuNzUgNzUuOTUgMTIzLjggODIuMSAxMjAuMyA4Mi4xNSAxMjAuMyA4Mi4xNSAxMjAuMiA4Mi42NSAxMjAuMiA4My4xIDEyMC4yIDgzLjIgMTIwLjIgODMuMjUgMTIwLjIgODMuMjUgMTIwLjE1IDgzLjI1IDEyMC4xIDgzLjA1IDExOS40IDgyLjY1IDExOC45CkwgODIuNTUgMTE4LjkKUSA3NiAxMjIuOSA3MC4yIDEyNy42NSBaIi8+Cgo8cGF0aCBmaWxsPSIjNDI1NzM5IiBmaWxsLW9wYWNpdHk9IjAuOTc2NDcwNTg4MjM1Mjk0MSIgc3Ryb2tlPSJub25lIiBkPSIKTSA3MC4zNSAxNDAuMDUKUSA3MC41IDE0MC42NSA3MS4zIDE0MC4zNQpMIDcxLjMgMTQwLjQKUSA3NC43NSAxMzkuNzUgNzkgMTM5Ljc1IDgwLjMgMTM5LjcgODEuNSAxMzkuMzUgODYuNTUgMTM3Ljc1IDkzLjcgMTM4LjEgOTIuNyAxMzkuOSA5MS41NSAxNDEuNTUgOTEuNSAxNDEuNiA5MS41IDE0MS42NSA5MyAxNDAuMTUgOTQuMjUgMTM4LjQgOTQuMjUgMTM4LjM1IDk0LjMgMTM4LjM1IDEwNC41IDEzOC42NSAxMTMuNDUgMTQwLjU1IDExNC42IDE0MC44IDExNS42IDE0MS4wNQpMIDExNS42IDE0MC45NQpRIDExMy4zNSAxMzkuODUgMTExLjQ1IDEzOC40NSAxMTAuMzUgMTM4LjYgMTA5LjE1IDEzOC4zNSAxMDUuNjUgMTM3LjU1IDEwMS44NSAxMzcuMTUgOTQuMSAxMzYuNCA4Ni41NSAxMzcuMTUgODUuMyAxMzcuMyA4NC4xNSAxMzcuNjUgODEuMDUgMTM4LjU1IDc3LjMgMTM4Ljc1IDczLjQgMTM5IDcwLjM1IDE0MC4wNSBaIi8+Cgo8cGF0aCBmaWxsPSIjMjMyQTFDIiBmaWxsLW9wYWNpdHk9IjAuMzcyNTQ5MDE5NjA3ODQzMTUiIHN0cm9rZT0ibm9uZSIgZD0iCk0gMTM1LjE1IDU0LjcKUSAxMzMuMjUgNTYuMiAxMzEuNSA1Ny40IDEyOS4zNSA1OS41NSAxMjcuNDUgNjEuNSAxMjguOCA2MC41IDEzMCA1OS40IDEzMC4wNSA1OS40IDEzMC4xIDU5LjQgMTMyLjY1IDU3LjEgMTM1LjE1IDU0LjcgWiIvPgoKPHBhdGggZmlsbD0iIzE5MjAxNCIgZmlsbC1vcGFjaXR5PSIwLjM2NDcwNTg4MjM1Mjk0MTE2IiBzdHJva2U9Im5vbmUiIGQ9IgpNIDExMy4yNSA4NS43ClEgMTEzLjEgODYuMSAxMTMgODYuNTUgMTEyLjk1IDg3LjQgMTEyLjk1IDg4LjIgMTEzIDg2LjkgMTEzLjI1IDg1LjcKTSAxMTYuMSA3NS44NQpRIDExNS43IDc2IDExNS40NSA3NiAxMTUuNCA3Ni4xIDExNS4zNSA3Ni4yNSAxMTQuNzUgNzcuOTUgMTE0LjU1IDc4Ljg1IDExNC40NSA3OS4xNSAxMTMuOTUgODIuMDUKTCAxMTMuOTUgODIuMQpRIDExNC4yIDgxLjEgMTE0LjU1IDgwLjEgMTE0LjYgODAuMDUgMTE0LjY1IDgwLjA1IDExNC42NSA4MCAxMTQuNjUgNzkuOTUgMTE0LjY1IDc5LjY1IDExNC42NSA3OS4zNSAxMTUuMSA3Ny40NSAxMTYuMDUgNzYuMDUgMTE2LjEgNzYgMTE2LjEgNzUuOTUKTCAxMTYuMSA3NS44NSBaIi8+Cgo8cGF0aCBmaWxsPSIjNkZDNUQzIiBzdHJva2U9Im5vbmUiIGQ9IgpNIDgyLjQgOTUuNQpRIDgyLjQgOTUuNiA4Mi4zNSA5NS42IDgwLjM1IDk3LjMgNzkuOTUgMTAwLjY1IDc5Ljg1IDEwOC44NSA4Mi42IDExNC4yNSA4NC4zIDExNy42IDg2LjI1IDEyMC42NSA4OC4yIDEyMy42NSA5MC41NSAxMjYuMyA5Mi43NSAxMjguNTUgOTUuNDUgMTMwLjMKTCA5NS41NSAxMzAuMwpRIDk2LjI1IDEzMC4zNSA5Ni43NSAxMzAuMiA5Ni44IDEzMC4yIDk2Ljg1IDEzMC4yIDk2Ljg1IDEzMC4xNSA5Ni44NSAxMzAuMSA5OS45IDEyNi45IDEwMyAxMjMuOCAxMDMgMTIzLjc1IDEwMy4xIDEyMy43NSAxMDMuMSAxMjMuNyAxMDMuMSAxMjMuNjUgMTA1LjIgMTIxIDEwOC4zIDExOS4zNSAxMDguMyAxMTkuMyAxMDguMyAxMTkuMjUgMTA3LjM1IDExNi42NSAxMDcuNyAxMTIuOCAxMDQuNCAxMDkuMDUgMTAxLjQ1IDEwNC45IDk2Ljk1IDk4LjU1IDg5LjEgOTUuNSA4NS42NSA5NC4xNSA4Mi40IDk1LjUKTSAxMDMuMTUgMTIwLjU1ClEgMTAzLjMgMTIwLjkgMTAzLjIgMTIxLjIgMTAzLjE1IDEyMS4zIDEwMy4xIDEyMS40NSAxMDEuNiAxMjAuODUgMTAwLjkgMTE5LjM1IDEwMC41NSAxMTguNSAxMDAgMTE3LjcgOTYuNCAxMTIuMzUgOTEuNjUgMTA4LjE1IDkwLjcgMTA3LjYgODkuNyAxMDcuMiA4OS42NSAxMDcuMiA4OS41NSAxMDcuMiA4OS45IDExMi4wNSA5MS41IDExNS42NSA5My44IDEyMC45IDk3LjI1IDEyNC45NSA5Ny41NSAxMjUuMyA5Ny4zNSAxMjUuNyA5Ni44IDEyNi4xIDk2LjI1IDEyNS43NSA5Ni4yIDEyNS43IDk2LjE1IDEyNS43IDkxLjEgMTE5LjggODguNzUgMTExLjM1IDg4LjI1IDEwOS40NSA4OCAxMDcuMyA4OC4xNSAxMDYuNSA4OC43IDEwNi4wNQpMIDg4LjcgMTA2ClEgOTEuNzUgMTA1Ljk1IDkzLjUgMTA3LjggOTMuOCAxMDguMiA5NC4yIDEwOC41IDk5LjggMTEzLjUgMTAzLjE1IDEyMC41NSBaIi8+Cgo8cGF0aCBmaWxsPSIjNDc4Rjk4IiBzdHJva2U9Im5vbmUiIGQ9IgpNIDEwMy4yIDEyMS4yClEgMTAzLjMgMTIwLjkgMTAzLjE1IDEyMC41NSA5OS44IDExMy41IDk0LjIgMTA4LjUgOTMuOCAxMDguMiA5My41IDEwNy44IDkxLjc1IDEwNS45NSA4OC43IDEwNgpMIDg4LjcgMTA2LjA1ClEgODguMTUgMTA2LjUgODggMTA3LjMgODguMjUgMTA5LjQ1IDg4Ljc1IDExMS4zNSA5MS4xIDExOS44IDk2LjE1IDEyNS43IDk2LjIgMTI1LjcgOTYuMjUgMTI1Ljc1IDk2LjggMTI2LjEgOTcuMzUgMTI1LjcgOTcuNTUgMTI1LjMgOTcuMjUgMTI0Ljk1IDkzLjggMTIwLjkgOTEuNSAxMTUuNjUgODkuOSAxMTIuMDUgODkuNTUgMTA3LjIgODkuNjUgMTA3LjIgODkuNyAxMDcuMiA5MC43IDEwNy42IDkxLjY1IDEwOC4xNSA5Ni40IDExMi4zNSAxMDAgMTE3LjcgMTAwLjU1IDExOC41IDEwMC45IDExOS4zNSAxMDEuNiAxMjAuODUgMTAzLjEgMTIxLjQ1IDEwMy4xNSAxMjEuMyAxMDMuMiAxMjEuMgpNIDI3NC44IDcyLjE1ClEgMjc0LjQgNzEuOTUgMjczLjg1IDcyLjEgMjY5LjYgNzMuMSAyNjYuOSA3NS44IDI2MS40NSA4MS4yNSAyNTguOTUgODkuNyAyNTguOTUgODkuNzUgMjU4Ljk1IDg5LjggMjU4Ljk1IDkwLjQ1IDI1OC45NSA5MS4xNSAyNTguOTUgOTEuMiAyNTkgOTEuMjUgMjU5LjE1IDkxLjY1IDI1OS41NSA5MS43NSAyNTkuODUgOTEuOCAyNTkuOSA5MS42NSAyNjAuNjUgOTAgMjYxLjMgODguMSAyNjIgODYuMTUgMjYyLjggODQuMzUgMjY2LjM1IDc2Ljc1IDI3My43IDczLjYgMjczLjc1IDc1LjI1IDI3My4yIDc2LjkgMjcxLjggODEuNCAyNzAgODUuNiAyNjkuMzUgODcuMiAyNzAuMDUgODguNDUgMjcyLjA1IDg2LjMgMjczLjA1IDgzIDI3NCA3OS44NSAyNzUuMDUgNzYuNiAyNzUuODUgNzQuMSAyNzQuOCA3Mi4xNSBaIi8+Cgo8cGF0aCBmaWxsPSIjNDg4RTk2IiBmaWxsLW9wYWNpdHk9IjAuOTg4MjM1Mjk0MTE3NjQ3MSIgc3Ryb2tlPSJub25lIiBkPSIKTSA5MC40IDkzLjU1ClEgODkuMSA5My40IDg3Ljc1IDkzLjIgODUuMTUgOTIuOCA4My4xNSA5My41NSA3OC4zIDk1LjM1IDc3LjkgMTAxLjYgNzcuOCAxMDguNSA3OS44NSAxMTMuMTUgODEuMiAxMTYuMSA4Mi42NSAxMTguOSA4My4wNSAxMTkuNCA4My4yNSAxMjAuMSA4My4yNSAxMjAuMTUgODMuMjUgMTIwLjIgODcuNzUgMTI2LjYgOTMuMiAxMzIuMDUgOTMuNSAxMzIuMzUgOTMuNyAxMzIuNzUgOTQuMyAxMzIuMSA5NSAxMzEuNiA5NS4wNSAxMzEuNiA5NS4wNSAxMzEuNTUgOTIuNzUgMTI5LjA1IDkwLjU1IDEyNi40IDkwLjU1IDEyNi4zNSA5MC41NSAxMjYuMyA4OC4yIDEyMy42NSA4Ni4yNSAxMjAuNjUgODQuMyAxMTcuNiA4Mi42IDExNC4yNSA3OS44NSAxMDguODUgNzkuOTUgMTAwLjY1IDgwLjM1IDk3LjMgODIuMzUgOTUuNiA4Mi40IDk1LjYgODIuNCA5NS41IDg1LjY1IDk0LjE1IDg5LjEgOTUuNSA5Ni45NSA5OC41NSAxMDEuNDUgMTA0LjkgMTA0LjQgMTA5LjA1IDEwNy43IDExMi44IDEwNy4zNSAxMTYuNjUgMTA4LjMgMTE5LjI1IDEwOC4zIDExOS4zIDEwOC4zIDExOS4zNSAxMDUuMiAxMjEgMTAzLjEgMTIzLjY1IDEwMy4xIDEyMy43IDEwMy4xIDEyMy43NSAxMDUuNzUgMTIxLjI1IDEwOC45IDExOS4yCkwgMTA4LjkgMTE5LjE1ClEgMTA3LjQgMTE2Ljg1IDEwOC4wNSAxMTMuMDUKTCAxMDguMTUgMTEzClEgMTA4LjIgMTEzIDEwOC4yIDExMi45IDEwNy44IDExMS41IDEwOC4wNSAxMDkuOSAxMDguMDUgMTA5LjggMTA4LjA1IDEwOS43NSAxMDcuOSAxMDkuNCAxMDcuNzUgMTA5LjE1IDEwNy43IDEwOS4xIDEwNy43IDEwOS4wNSAxMDcuNjUgMTA5LjA1IDEwNy42IDEwOSAxMDYuNiAxMDcuNjUgMTA1LjY1IDEwNi4yNSAxMDUuNTUgMTA2LjI1IDEwNS41NSAxMDYuMiAxMDUuMTUgMTA1Ljc1IDEwNC44IDEwNS4yNSAxMDQuOCAxMDUuMiAxMDQuNzUgMTA1LjE1IDEwMC45IDEwMC4xNSA5NS45IDk2LjI1IDk1Ljg1IDk2LjI1IDk1LjggOTYuMiA5NS4zIDk1Ljk1IDk0LjcgOTUuNzUgOTQuNyA5NS43IDk0LjY1IDk1LjcgOTQuNCA5NS41NSA5NC4zIDk1LjMgOTQuMjUgOTUuMyA5NC4yIDk1LjI1IDkyLjQ1IDk0LjMgOTAuNCA5My41NSBaIi8+Cgo8cGF0aCBmaWxsPSIjM0Y1MTMzIiBmaWxsLW9wYWNpdHk9IjAuOTEzNzI1NDkwMTk2MDc4NCIgc3Ryb2tlPSJub25lIiBkPSIKTSAxMTkuOCA2OS4yClEgMTE4LjQgNzAuOSAxMTcuNDUgNzIuMyAxMTYuNjUgNzMuNDUgMTE2LjA1IDc0LjU1IDExNS43NSA3NS4yNSAxMTUuNDUgNzYgMTE1LjcgNzYgMTE2LjEgNzUuODUKTCAxMTYuMSA3NS45NQpRIDEyMC4xNSA2OS4wNSAxMjUuOTUgNjMuOTUgMTI3LjE1IDYyLjkgMTI4LjMgNjEuNzUgMTI5LjU1IDYwLjQ1IDEzMC4xIDU5LjQgMTMwLjA1IDU5LjQgMTMwIDU5LjQgMTI4LjggNjAuNSAxMjcuNDUgNjEuNSAxMjMuMDUgNjUuOTUgMTE5LjggNjkuMiBaIi8+Cgo8cGF0aCBmaWxsPSIjMkIzMjIyIiBmaWxsLW9wYWNpdHk9IjAuMzY4NjI3NDUwOTgwMzkyMiIgc3Ryb2tlPSJub25lIiBkPSIKTSAxNTUuNiAzNi4zNQpRIDE1NS42NSAzNi4zIDE1NS42NSAzNi4yNSAxNTQuMDUgMzcuNTUgMTUyLjQgMzguOCAxNTAuODUgNDAuMSAxNDkuNTUgNDEuMyAxNDkuMjUgNDEuNiAxNDguOTUgNDEuOSAxNTEuMzUgNDAgMTUzLjkgMzguMTUgMTUzLjk1IDM4LjE1IDE1My45NSAzOC4xIDE1My45NSAzOCAxNTMuOTUgMzcuOTUgMTU0Ljk1IDM3LjM1IDE1NS42IDM2LjM1IFoiLz4KCjxwYXRoIGZpbGw9IiMyNzJEMkUiIHN0cm9rZT0ibm9uZSIgZD0iCk0gMjQzLjI1IDE0Ny4yNQpRIDI0My4yIDE0Ny4yNSAyNDMuMTUgMTQ3LjIgMjQyLjcgMTQ3LjA1IDI0Mi4wNSAxNDcuMSAyNTAuMDUgMTUwIDI1NSAxNTUuOTUgMjU4LjcgMTYwLjQgMjYwLjUgMTY2LjcgMjYxLjg1IDE3MS4zNSAyNjEuMyAxNzcuMyAyNjEuMDUgMTgwLjQgMjYwLjMgMTgzLjE1IDI2MC4yNSAxODMuNyAyNjAuMzUgMTgzLjQ1IDI2MS4zNSAxODEuMTUgMjYxLjc1IDE3OC4yNSAyNjIuNiAxNzIuNSAyNjEuMjUgMTY3LjI1IDI1OS42IDE2MC44NSAyNTYuMDUgMTU2LjI1IDI1MS4zIDE1MC4xIDI0My4yNSAxNDcuMjUgWiIvPgoKPHBhdGggZmlsbD0iIzFBMUQxQSIgc3Ryb2tlPSJub25lIiBkPSIKTSAxNjQuNCAxNTQuMTUKUSAxNjQgMTU0LjE1IDE2My41NSAxNTQuMTUgMTYzLjUgMTU0LjE1IDE2My40NSAxNTQuMTUgMTYyLjM1IDE1NC42IDE2MS41IDE1NS4zIDE2MS41IDE1NS4zNSAxNjEuNSAxNTUuNCAxNTguNiAxNTYuMyAxNTUuNSAxNTUuNiAxNDYuNyAxNTMuNDUgMTM5Ljg1IDE0OS40NSAxMzcuNjUgMTQ4LjIgMTM1LjQgMTQ3LjE1IDEzNSAxNDYuOTUgMTM0Ljg1IDE0Ni42NSAxMzkuOTUgMTQ4LjM1IDE0Ni40IDE0OS4zIDE0Ni40NSAxNDkuMyAxNDYuNSAxNDkuMyAxNDYuNiAxNDkuMyAxNDYuNjUgMTQ5LjMgMTQ3Ljg1IDE0OS41NSAxNDguODUgMTQ5LjQ1IDE0OC43NSAxNDkuNDUgMTQ4LjcgMTQ5LjQgMTQ2LjkgMTQ4LjcgMTQ0Ljk1IDE0OC4xIDE0MS40IDE0NyAxMzggMTQ1Ljc1IDEzMy4wNSAxNDMuOSAxMjcuODUgMTQyLjQgMTIzLjU1IDE0MS4xNSAxMTkuNzUgMTM5LjQgMTE2IDEzNy43IDExMi4yNSAxMzUuOSAxMTAuNDUgMTM1LjA1IDEwNy44IDEzNC45NSAxMDkuMSAxMzcuMiAxMTEuMzUgMTM4LjQ1IDExMS40IDEzOC40NSAxMTEuNDUgMTM4LjQ1IDExMy4zNSAxMzkuODUgMTE1LjYgMTQwLjk1CkwgMTE1LjYgMTQxLjA1ClEgMTIyLjcgMTQ0Ljg1IDEyOS41NSAxNDguODUgMTM2LjQ1IDE1Mi45IDE0My4yNSAxNTcgMTQ2LjY1IDE1OS4wNSAxNTEuMjUgMTYwLjA1IDE1My42NSAxNjAuNTUgMTU2LjI1IDE2MC45NSAxNTguMzUgMTYxLjMgMTYwLjQgMTYwLjg1IDE2MSAxNjAuNzUgMTYxLjc1IDE2MC43NSAxNjQuNzUgMTU5Ljg1IDE2Ni4wNSAxNTcuMjUgMTY2LjA1IDE1Ny4yIDE2Ni4xIDE1Ny4yIDE2Ni4xIDE1Ni42NSAxNjYuMSAxNTYuMSAxNjYuMSAxNTYuMDUgMTY2LjEgMTU2IDE2NS44NSAxNTUuNCAxNjUuNTUgMTU0LjkgMTY1LjUgMTU0Ljg1IDE2NS41IDE1NC44IDE2NS4xIDE1NC40IDE2NC40IDE1NC4yNQpMIDE2NC40IDE1NC4xNSBaIi8+Cgo8cGF0aCBmaWxsPSIjQUJBREFEIiBzdHJva2U9Im5vbmUiIGQ9IgpNIDE5Ni41NSAxNjIuNDUKUSAxOTYuNTUgMTYyLjUgMTk2LjUgMTYyLjU1IDE5NS4zIDE2NS40IDE5My43NSAxNjcuOSAxOTMuNzUgMTY4IDE5My43IDE2OC4wNSAxOTMgMTcxLjQ1IDE5Mi41IDE3NS4xIDE5Mi41IDE3Ni41NSAxOTIuNSAxNzggMTkyLjUgMTc4LjEgMTkyLjUgMTc4LjE1CkwgMTkyLjY1IDE3Ny40ClEgMTkyLjcgMTc4LjQgMTkyLjkgMTc4LjUgMTkzLjI1IDE3NS40NSAxOTMuNSAxNzIuNTUgMTkzLjc1IDE2OS41NSAxOTQuODUgMTY3LjcgMTk0Ljk1IDE2OC4xNSAxOTUuMzUgMTY3LjIgMTk4LjM1IDE1OS4zNSAyMDQuMSAxNTQuMTUgMjA0LjQgMTUzLjkgMjA0LjU1IDE1My40NSAyMDQuNSAxNTMuNDUgMjA0LjQ1IDE1My40NSAxOTkuNzUgMTU3LjIgMTk2LjU1IDE2Mi40NSBaIi8+Cgo8cGF0aCBmaWxsPSIjMjEyNzI4IiBzdHJva2U9Im5vbmUiIGQ9IgpNIDE5Ni41NSAxNjIuNDUKUSAxOTYuNTUgMTYyLjQgMTk2LjUgMTYyLjM1IDE5Ni40NSAxNjIuMzUgMTk2LjQgMTYyLjM1CkwgMTk2LjQgMTYyLjQKUSAxOTIuNSAxNjcuMjUgMTkxLjkgMTc1LjM1IDE5MS42NSAxODEuMzUgMTkyLjc1IDE4NS41NSAxOTIuNzUgMTg0LjQgMTkyLjY1IDE4Mi43NSAxOTIuNjUgMTgyLjcgMTkyLjY1IDE4Mi42NSAxOTIuNjUgMTgyLjYgMTkyLjY1IDE4Mi41NSAxOTIuNSAxODAuNDUgMTkyLjUgMTc4LjE1IDE5Mi41IDE3OC4xIDE5Mi41IDE3OCAxOTIuNSAxNzYuNTUgMTkyLjUgMTc1LjEgMTkzIDE3MS40NSAxOTMuNyAxNjguMDUgMTkzLjc1IDE2OCAxOTMuNzUgMTY3LjkgMTk1LjMgMTY1LjQgMTk2LjUgMTYyLjU1IDE5Ni41NSAxNjIuNSAxOTYuNTUgMTYyLjQ1IFoiLz4KCjxwYXRoIGZpbGw9IiMyODJFMkYiIHN0cm9rZT0ibm9uZSIgZD0iCk0gMTk5LjEgMTU3LjgKUSAxOTkuMSAxNTcuOSAxOTkuMDUgMTU3Ljk1IDE5Ny43NSAxNjAuMDUgMTk2LjQgMTYyLjIgMTk2LjQgMTYyLjI1IDE5Ni40IDE2Mi4zNSAxOTYuNDUgMTYyLjM1IDE5Ni41IDE2Mi4zNSAxOTYuNTUgMTYyLjQgMTk2LjU1IDE2Mi40NSAxOTkuNzUgMTU3LjIgMjA0LjQ1IDE1My40NSAyMDQuNSAxNTMuNDUgMjA0LjU1IDE1My40NSAyMDUuMSAxNTMuMTUgMjA1LjY1IDE1Mi44IDIwNS42NSAxNTIuNzUgMjA1LjY1IDE1Mi43IDIwNS42NSAxNTIuNjUgMjA1LjcgMTUyLjY1IDIwNi41NSAxNTEuOTUgMjA3LjM1IDE1MS4yNSAyMDcuMyAxNTEuMjUgMjA3LjI1IDE1MS4zIDIwMi4zIDE1My42NSAxOTkuMSAxNTcuOCBaIi8+Cgo8cGF0aCBmaWxsPSIjNTE2MjQzIiBzdHJva2U9Im5vbmUiIGQ9IgpNIDE5Ni4xNSAxNDUuMDUKUSAxOTUuNTUgMTQ1LjI1IDE5NC45IDE0NS40IDE4Ni4yNSAxNDcuNyAxNzYuOCAxNDkuMiAxNzQuNDUgMTQ5LjU1IDE3Mi4wNSAxNDkuNzUgMTY0Ljk1IDE1MC40IDE1OC4xIDE0OS45NSAxNTQuODUgMTQ5Ljc1IDE1MiAxNDkuMSAxNDguOCAxNDguMyAxNDQuOTUgMTQ4LjEgMTQ2LjkgMTQ4LjcgMTQ4LjcgMTQ5LjQgMTQ4Ljc1IDE0OS40NSAxNDguODUgMTQ5LjQ1IDE0Ny44NSAxNDkuNTUgMTQ2LjY1IDE0OS4zIDE0Ni42IDE0OS4zIDE0Ni41IDE0OS4zIDE1MC44IDE1MC41IDE1NS4yNSAxNTEuNTUgMTU5Ljc1IDE1Mi41NSAxNjUuMjUgMTUyLjQ1IDE3MC40IDE1Mi4zNSAxNzUuMzUgMTUyIDE4MC4zNSAxNTEuNjUgMTg0Ljg1IDE1MC43IDE4OS42IDE0OS43IDE5NC4zIDE0OC42IDE5NC41IDE0OC41NSAxOTQuNyAxNDguMzUgMTk0LjEgMTQ4LjEgMTk1LjMgMTQ3Ljk1IDE5NS44NSAxNDcuODUgMTk2LjMgMTQ4LjM1IDE5OC44NSAxNDYgMjAxLjUgMTQzLjggMjAxLjUgMTQzLjc1IDIwMS41IDE0My43IDIwMC4yNSAxNDQuMyAxOTkgMTQ0Ljk1IDE5Ny40NSAxNDUuNzUgMTk2LjE1IDE0NS4wNQpNIDE3MS4zNSAxNTEuNQpRIDE2Ny43IDE1MS45NSAxNjMuMDUgMTUxLjY1IDE2MS4zIDE1MS41NSAxNTkuNjUgMTUxLjU1IDE1Ni44NSAxNTEuNTUgMTU0LjY1IDE1MC43NSAxNjIuOCAxNTEuMiAxNzEuMzUgMTUxLjUgWiIvPgoKPHBhdGggZmlsbD0iIzdEOTM3MCIgc3Ryb2tlPSJub25lIiBkPSIKTSAxNjMuMDUgMTUxLjY1ClEgMTY3LjcgMTUxLjk1IDE3MS4zNSAxNTEuNSAxNjIuOCAxNTEuMiAxNTQuNjUgMTUwLjc1IDE1Ni44NSAxNTEuNTUgMTU5LjY1IDE1MS41NSAxNjEuMyAxNTEuNTUgMTYzLjA1IDE1MS42NSBaIi8+Cgo8cGF0aCBmaWxsPSIjRDFEMUQxIiBzdHJva2U9Im5vbmUiIGQ9IgpNIDIzNy44IDE0NS40NQpRIDIzNi42NSAxNDUuNDUgMjM1LjU1IDE0NS4yIDIzMS4yNSAxNDQuMyAyMjUuODUgMTQ0LjU1IDIyMi44IDE0NC44IDIyMC40IDE0NS42NSAyMTIuNCAxNDguNTUgMjA1LjY1IDE1Mi43IDIwNS42NSAxNTIuNzUgMjA1LjY1IDE1Mi44IDIwNS4xIDE1My4xNSAyMDQuNTUgMTUzLjQ1IDIwNC40IDE1My45IDIwNC4xIDE1NC4xNSAxOTguMzUgMTU5LjM1IDE5NS4zNSAxNjcuMiAxOTQuOTUgMTY4LjE1IDE5NC44NSAxNjcuNyAxOTMuNzUgMTY5LjU1IDE5My41IDE3Mi41NSAxOTMuMjUgMTc1LjQ1IDE5Mi45IDE3OC41IDE5Mi43IDE3OC40IDE5Mi42NSAxNzcuNApMIDE5Mi41IDE3OC4xNQpRIDE5Mi41IDE4MC40NSAxOTIuNjUgMTgyLjU1IDE5Mi42NSAxODIuNiAxOTIuNjUgMTgyLjY1IDE5My41NSAxODYuNCAxOTQuMyAxOTAuMDUgMTk0LjY1IDE5MS44NSAxOTUuNSAxOTMuMjUgMTk2LjQgMTk0LjcgMTk3LjE1IDE5Ni4zIDE5OS42IDE5OS4yIDIwMi40NSAyMDEuNjUgMjAyLjUgMjAxLjcgMjAyLjUgMjAxLjc1IDIwMy41IDIwMS45IDIwNC4zIDIwMi4zCkwgMjA0LjMgMjAyLjM1ClEgMjEwLjU1IDIwNy4wNSAyMTkuOCAyMDguNSAyMjIuOSAyMDkgMjI2LjM1IDIwOC45NSAyMzcuMSAyMDguOCAyNDMuOTUgMjA0LjggMjQ2LjQ1IDIwMy4zIDI0OC42IDIwMS41IDI0OC42IDIwMS40NSAyNDguNiAyMDEuNCAyNTUuMyAxOTcuMTUgMjU4LjUgMTg5LjQgMjU5Ljc1IDE4Ni41IDI2MC4zIDE4My4xNSAyNjEuMDUgMTgwLjQgMjYxLjMgMTc3LjMgMjYxLjg1IDE3MS4zNSAyNjAuNSAxNjYuNyAyNTguNyAxNjAuNCAyNTUgMTU1Ljk1IDI1MC4wNSAxNTAgMjQyLjA1IDE0Ny4xIDI0Mi43IDE0Ny4wNSAyNDMuMTUgMTQ3LjIgMjQzLjIgMTQ3LjI1IDI0My4yNSAxNDcuMjUgMjQzLjA1IDE0Ni45IDI0Mi4yNSAxNDYuNDUgMjQwLjQ1IDE0NS41IDIzNy44IDE0NS40NQpNIDE5NC45NSAxNzAuMTUKUSAxOTUuNCAxNjcuNDUgMTk2LjggMTY1LjYgMTk4LjU1IDE2MS45IDIwMS41NSAxNTkuNCAyMDMuNzUgMTU3LjU1IDIwNS44IDE1NS41NSAyMDYuNTUgMTU0Ljg1IDIwNy40NSAxNTQuMzUgMjE0LjUgMTUwLjU1IDIyNS4zNSAxNTAuNTUgMjMyLjggMTUwLjU1IDIzOC4yNSAxNTIuNjUgMjQ0LjEgMTU0LjkgMjQ3Ljc1IDE1OS40NSAyNTEuMSAxNjMuNTUgMjUzLjMgMTY4LjggMjU0LjU1IDE3MS43IDI1NC44IDE3NS42IDI1NS4xIDE3OS41IDI1NC41NSAxODMuMjUgMjU0LjE1IDE4NS40NSAyNTMuMiAxODcuMjUgMjQ5LjQgMTk0LjMgMjQzLjYgMTk5LjQgMjQxLjQ1IDIwMS4zIDIzOC45NSAyMDIuODUgMjM1LjUgMjA0Ljk1IDIzMS4zIDIwNi4xNSAyMjkuMTUgMjA2LjggMjI2LjQ1IDIwNi45IDIyNC4yNSAyMDYuOTUgMjIxLjUgMjA2LjkgMjE3LjY1IDIwNi44NSAyMTQuNSAyMDYgMjEwLjIgMjA0LjggMjA2LjggMjAyLjc1IDIwMy4zNSAyMDAuNjUgMjAwLjYgMTk3Ljk1IDE5NC45NSAxOTIuNSAxOTQuMyAxODIuNjUgMTk0LjEgMTc5LjM1IDE5NC4xIDE3NS44NSAxOTQuNSAxNzMgMTk0Ljk1IDE3MC4xNSBaIi8+Cgo8cGF0aCBmaWxsPSIjRkVGRUZFIiBzdHJva2U9Im5vbmUiIGQ9IgpNIDE5Ni44IDE2NS42ClEgMTk1LjQgMTY3LjQ1IDE5NC45NSAxNzAuMTUgMTk0LjUgMTczIDE5NC4xIDE3NS44NSAxOTQuMSAxNzkuMzUgMTk0LjMgMTgyLjY1IDE5NC45NSAxOTIuNSAyMDAuNiAxOTcuOTUgMjAzLjM1IDIwMC42NSAyMDYuOCAyMDIuNzUgMjEwLjIgMjA0LjggMjE0LjUgMjA2IDIxNy42NSAyMDYuODUgMjIxLjUgMjA2LjkgMjI0LjI1IDIwNi45NSAyMjYuNDUgMjA2LjkgMjI5LjE1IDIwNi44IDIzMS4zIDIwNi4xNSAyMzUuNSAyMDQuOTUgMjM4Ljk1IDIwMi44NSAyNDEuNDUgMjAxLjMgMjQzLjYgMTk5LjQgMjQ5LjQgMTk0LjMgMjUzLjIgMTg3LjI1IDI1NC4xNSAxODUuNDUgMjU0LjU1IDE4My4yNSAyNTUuMSAxNzkuNSAyNTQuOCAxNzUuNiAyNTQuNTUgMTcxLjcgMjUzLjMgMTY4LjggMjUxLjEgMTYzLjU1IDI0Ny43NSAxNTkuNDUgMjQ0LjEgMTU0LjkgMjM4LjI1IDE1Mi42NSAyMzIuOCAxNTAuNTUgMjI1LjM1IDE1MC41NSAyMTQuNSAxNTAuNTUgMjA3LjQ1IDE1NC4zNSAyMDYuNTUgMTU0Ljg1IDIwNS44IDE1NS41NSAyMDMuNzUgMTU3LjU1IDIwMS41NSAxNTkuNCAxOTguNTUgMTYxLjkgMTk2LjggMTY1LjYKTSAyMTMuMiAxOTMuOQpRIDIxMi4zIDE5My4zNSAyMTEuODUgMTkyLjI1IDIxMS4wNSAxOTAuNSAyMTEuMjUgMTg3Ljc1IDIxMS40NSAxODcgMjExLjYgMTg2LjMgMjExLjYgMTg2LjI1IDIxMS42IDE4Ni4yIDIxMy42IDE4Mi42NSAyMTcuMyAxODAuOTUgMjE5LjU1IDE3OS45IDIyMi4yIDE4MC41NSAyMjQuNDUgMTgxLjE1IDIyNi4yNSAxODIuMyAyMjYuNiAxODIuOTUgMjI3LjIgMTgzLjM1IDIyNy4yNSAxODMuNCAyMjcuMyAxODMuNCAyMjkuNCAxODUuNTUgMjI5LjMgMTg5LjcgMjI5LjMgMTkwLjQ1IDIyOC45NSAxOTEuMDUgMjI4Ljc1IDE5MS40IDIyOC42NSAxOTEuOSAyMjcuNyAxOTMuMjUgMjI2LjQgMTk0LjI1IDIyNi4zNSAxOTQuMjUgMjI2LjM1IDE5NC4zNSAyMjUuNiAxOTQuOCAyMjQuNjUgMTk1LjA1IDIyNC42IDE5NS4wNSAyMjQuNSAxOTUuMDUgMjIxLjUgMTk3IDIxNy4xIDE5Ni4yNSAyMTYuNiAxOTYuMiAyMTYgMTk2LjA1IDIxNC43IDE5NC45IDIxMy4yIDE5My45Ck0gMTE5LjY1IDE2NgpRIDExNC4zIDE2OC44IDExMC41IDE3My4xNSAxMDkuMiAxNzQuOSAxMDggMTc2LjcgMTA2LjcgMTc4LjU1IDEwNS40NSAxODAuNDUgMTAyLjMgMTg1LjQgMTAxLjc1IDE5MyAxMDEuNzUgMTkzLjA1IDEwMS43NSAxOTMuMSAxMDEuOSAxOTcuNyAxMDIgMjAyLjM1IDEwMi4wNSAyMDIuMzUgMTAyLjA1IDIwMi40IDEwMi42IDIwMyAxMDIuNiAyMDQuMiAxMDIuNiAyMDQuMjUgMTAyLjYgMjA0LjMgMTAyLjk1IDIwNC44IDEwMy40NSAyMDUuMTUgMTAzLjMgMjA2LjI1IDEwMy42NSAyMDYuODUgMTA0IDIwNy41IDEwNC4zNSAyMDguMDUgMTA4LjY1IDIxNC43NSAxMTYuMSAyMTguMTUgMTE5Ljg1IDIxOS45IDEyNSAyMjAuMiAxMjcuNTUgMjIwLjM1IDEyOS44IDIxOS44IDEzMi40NSAyMTkuMSAxMzQuODUgMjE4LjE1IDEzNS45IDIxNy43NSAxMzYuOTUgMjE3LjMgMTQxLjcgMjE1LjM1IDE0NS44IDIxMi42CkwgMTQ1LjggMjEyLjUKUSAxNDkuODUgMjA5LjY1IDE1MS42NSAyMDQuNTUgMTUxLjcgMjA0LjU1IDE1MS43IDIwNC41IDE1Mi4yIDIwNC4wNSAxNTIuMSAyMDMuMSAxNTIuMSAyMDMuMDUgMTUyLjE1IDIwMyAxNTIuOCAyMDIuMDUgMTUyLjc1IDIwMC40CkwgMTUyLjggMjAwLjQKUSAxNTMuNyAxOTguMTUgMTU0LjA1IDE5NS40NSAxNTQuMTUgMTk1LjQ1IDE1NC4xNSAxOTUuNCAxNTQuMyAxOTQuOTUgMTU0LjU1IDE5NC41NSAxNTQuNzUgMTkxLjg1IDE1NC44NSAxODkuNDUgMTU1IDE4Ni40NSAxNTQuNDUgMTg0IDE1Mi44NSAxNzcuNTUgMTQ4Ljg1IDE3My40CkwgMTQ4Ljc1IDE3My40ClEgMTQ4LjY1IDE3Mi44NSAxNDguNDUgMTcyLjQ1IDE0OC40IDE3Mi40NSAxNDguMzUgMTcyLjQgMTQ3LjQ1IDE3MS45IDE0NyAxNzAuODUgMTQyLjkgMTY2LjIgMTM1LjggMTY0LjU1IDEyOS44NSAxNjMuMTUgMTIzLjY1IDE2NC41NSAxMjEuNDUgMTY1LjA1IDExOS42NSAxNjYKTSAxMjcuMDUgMTkzLjA1CkwgMTI3LjA1IDE5MwpRIDEyOS45NSAxOTIuNCAxMzIuNTUgMTkzLjEgMTMyLjYgMTkzLjEgMTMyLjY1IDE5My4xIDEzMy4wNSAxOTMuNzUgMTM0IDE5My44NSAxMzQuMDUgMTkzLjg1IDEzNC4xIDE5My44NSAxMzQuMyAxOTQuMTUgMTM0LjU1IDE5NC4zNSAxMzQuNiAxOTQuNCAxMzQuNiAxOTQuNDUgMTM0Ljk1IDE5NC40NSAxMzUuMSAxOTQuNjUgMTM1LjE1IDE5NC43IDEzNS4yIDE5NC43IDEzNi41NSAxOTYuNSAxMzcuNTUgMTk4LjcgMTM3LjYgMTk4LjcgMTM3LjY1IDE5OC43IDEzNy44NSAyMDAuNCAxMzcuNjUgMjAyIDEzNy42NSAyMDIuMDUgMTM3LjY1IDIwMi4xIDEzNi41IDIwNS4wNSAxMzQuMjUgMjA2Ljg1IDEzMy41NSAyMDcuMzUgMTMyLjg1IDIwNy44NSAxMzAuOCAyMDkuMTUgMTI3LjMgMjA4Ljg1IDEyNC40IDIwOC42IDEyMi41NSAyMDcuMSAxMjEuMiAyMDUuNjUgMTIwLjU1IDIwMy40NQpMIDEyMC41IDIwMy40NQpRIDEyMC4zNSAyMDIgMTIwLjM1IDIwMC40IDEyMC4zNSAyMDAuMzUgMTIwLjM1IDIwMC4zIDEyMC43IDIwMCAxMjAuNiAxOTkuMyAxMjAuNiAxOTkuMjUgMTIwLjYgMTk5LjIgMTIyLjQ1IDE5NC44IDEyNy4wNSAxOTMuMDUgWiIvPgoKPHBhdGggZmlsbD0iIzAxMDIwMiIgc3Ryb2tlPSJub25lIiBkPSIKTSAyMTEuODUgMTkyLjI1ClEgMjEyLjMgMTkzLjM1IDIxMy4yIDE5My45IDIxNC43IDE5NC45IDIxNiAxOTYuMDUgMjE2LjYgMTk2LjIgMjE3LjEgMTk2LjI1IDIyMS41IDE5NyAyMjQuNSAxOTUuMDUgMjI0LjYgMTk1LjA1IDIyNC42NSAxOTUuMDUgMjI1LjYgMTk0LjggMjI2LjM1IDE5NC4zNSAyMjYuMzUgMTk0LjI1IDIyNi40IDE5NC4yNSAyMjcuNyAxOTMuMjUgMjI4LjY1IDE5MS45IDIyOC43NSAxOTEuNCAyMjguOTUgMTkxLjA1IDIyOS4zIDE5MC40NSAyMjkuMyAxODkuNyAyMjkuNCAxODUuNTUgMjI3LjMgMTgzLjQgMjI3LjI1IDE4My40IDIyNy4yIDE4My4zNSAyMjYuNiAxODIuOTUgMjI2LjI1IDE4Mi4zIDIyNC40NSAxODEuMTUgMjIyLjIgMTgwLjU1IDIxOS41NSAxNzkuOSAyMTcuMyAxODAuOTUgMjEzLjYgMTgyLjY1IDIxMS42IDE4Ni4yIDIxMS42IDE4Ni4yNSAyMTEuNiAxODYuMyAyMTEuNDUgMTg3IDIxMS4yNSAxODcuNzUgMjExLjA1IDE5MC41IDIxMS44NSAxOTIuMjUgWiIvPgoKPHBhdGggZmlsbD0iIzc2Q0NEQiIgZmlsbC1vcGFjaXR5PSIwLjk5NjA3ODQzMTM3MjU0OSIgc3Ryb2tlPSJub25lIiBkPSIKTSAyMjcuOCAxNDQuNDUKUSAyMjYuODUgMTQ0LjQ1IDIyNS44NSAxNDQuNDUgMjI1Ljg1IDE0NC41IDIyNS44NSAxNDQuNTUgMjMxLjI1IDE0NC4zIDIzNS41NSAxNDUuMiAyMzYuNjUgMTQ1LjQ1IDIzNy44IDE0NS40NSAyNDAuNDUgMTQ1LjUgMjQyLjI1IDE0Ni40NSAyNDMuMDUgMTQ2LjkgMjQzLjI1IDE0Ny4yNSAyNTEuMyAxNTAuMSAyNTYuMDUgMTU2LjI1IDI1OS42IDE2MC44NSAyNjEuMjUgMTY3LjI1IDI2Mi42IDE3Mi41IDI2MS43NSAxNzguMjUgMjYxLjM1IDE4MS4xNSAyNjAuMzUgMTgzLjQ1IDI2MC4yNSAxODMuNyAyNjAuMyAxODMuMTUgMjU5Ljc1IDE4Ni41IDI1OC41IDE4OS40IDI1NS4zIDE5Ny4xNSAyNDguNiAyMDEuNCAyNDguNiAyMDEuNDUgMjQ4LjYgMjAxLjUgMjQ4Ljk1IDIwMS4zNSAyNDguOSAyMDEuNSAyNDguNjUgMjAyLjIgMjQ4IDIwMi42NSAyNDUuNzUgMjA0LjMgMjQzLjI1IDIwNS44NSAyMzYuNSAyMDkuOSAyMjUuNSAyMDkuOCAyMjEuNDUgMjA5Ljc1IDIxOCAyMDkuMDUgMjA4Ljk1IDIwNy4yNSAyMDMuMjUgMjAyLjEgMjAzLjcgMjAyLjI1IDIwNC4yIDIwMi4zNSAyMDQuMjUgMjAyLjM1IDIwNC4zIDIwMi4zNQpMIDIwNC4zIDIwMi4zClEgMjAzLjUgMjAxLjkgMjAyLjUgMjAxLjc1IDIwMi41IDIwMS43IDIwMi40NSAyMDEuNjUgMTk5LjYgMTk5LjIgMTk3LjE1IDE5Ni4zIDE5Ni40IDE5NC43IDE5NS41IDE5My4yNSAxOTQuNjUgMTkxLjg1IDE5NC4zIDE5MC4wNSAxOTMuNTUgMTg2LjQgMTkyLjY1IDE4Mi42NSAxOTIuNjUgMTgyLjcgMTkyLjY1IDE4Mi43NSAxOTIuNzUgMTg0LjQgMTkyLjc1IDE4NS41NSAxOTEuNjUgMTgxLjM1IDE5MS45IDE3NS4zNSAxOTIuNSAxNjcuMjUgMTk2LjQgMTYyLjQKTCAxOTYuNCAxNjIuMzUKUSAxOTYuNCAxNjIuMjUgMTk2LjQgMTYyLjIgMTk3Ljc1IDE2MC4wNSAxOTkuMDUgMTU3Ljk1IDE5OS4xIDE1Ny45IDE5OS4xIDE1Ny44IDE5MS45NSAxNTkuOCAxODMuOSAxNjEuNTUgMTc4LjkgMTYyLjYgMTcyLjcgMTYyLjQ1IDE2Ny41IDE2Mi4zIDE2Mi4yIDE2MiAxNTIgMTYxLjQgMTQzLjQ1IDE1OS4xNSAxMzQuNzUgMTU2LjkgMTI3LjEgMTUzLjU1IDEyMi40IDE1MS41IDExNy40IDE0OS44IDExNS4zIDE0OS4xIDExMy4yNSAxNDguMjUgMTA1LjUgMTQ1LjEgOTUuOSAxNDQuMiA5NS44NSAxNDQuMiA5NS44IDE0NC4yIDkyLjkgMTQ1LjkgOTAuMiAxNDcuNyA5MC4yIDE0Ny44IDkwLjIgMTQ3Ljg1IDkwLjIgMTQ3LjkgOTAuMTUgMTQ3Ljk1IDg5LjUgMTQ4LjcgODkuMiAxNDkuOApMIDg5LjE1IDE0OS44ClEgODkgMTUwLjA1IDg4LjcgMTUwLjE1IDg4LjcgMTUwLjIgODguNyAxNTAuMjUgODYuNzUgMTU1IDg0LjcgMTU5LjY1IDg0LjcgMTU5LjcgODQuNyAxNTkuNzUgODQuNyAxNjAuMTUgODQuNyAxNjAuNSA4NC42NSAxNjAuNSA4NC42NSAxNjAuNTUgODQuNDUgMTYwLjg1IDg0LjIgMTYxLjEgODQuMiAxNjEuMTUgODQuMiAxNjEuMjUgODQuMiAxNjEuNjUgODQuMiAxNjIuMQpMIDg0LjE1IDE2Mi4xClEgODMuOSAxNjIuNSA4My43NSAxNjIuOTUgODMuNzUgMTYzIDgzLjc1IDE2My4wNSA4My43IDE2My45IDgzLjM1IDE2NC40IDgzLjM1IDE2NC40NSA4My4zNSAxNjQuNSA4My40IDE2NS40IDgzIDE2NS44NSA4MyAxNjUuOSA4MyAxNjYgODMuMDUgMTY2Ljg1IDgyLjY1IDE2Ny40NSA4Mi42NSAxNjcuNSA4Mi42NSAxNjcuNTUgODIgMTcyLjQ1IDgxLjE1IDE3Ny41NSA4MS4yIDE3OC4xIDgxLjM1IDE3OC41CkwgODEuNCAxNzguNQpRIDgwLjkgMTgyLjggODEuNCAxODcuMDUgODEuNCAxODcuMSA4MS40IDE4Ny4xNSA4MS4zIDE4OS4xNSA4MS41NSAxOTEuNjUgODIuNCAyMDEuMTUgODQuMiAyMTAuNSA4NiAyMTkuNTUgODcuNzUgMjI4LjY1IDg5LjUgMjM3Ljc1IDkxLjggMjQ2LjMgOTQuMSAyNTUgOTYuMzUgMjYzLjY1IDk4LjY1IDI3Mi4yIDEwMS4zIDI4MC41NSAxMDEuNzUgMjgxLjkgMTAyIDI4My41NSAxMDIuMSAyODQuMiAxMDIuMSAyODQuODUgMTAyLjY1IDI4NS40IDEwMi42IDI4Ni40NSAxMDIuNiAyODYuNSAxMDIuNiAyODYuNTUgMTAyLjY1IDI4Ni44IDEwMi42NSAyODcuMDUKTCAxMDIuNiAyODcuMDUKUSAxMDMuNyAyOTIuMjUgMTA1LjUgMjk2Ljg1IDEwNS41IDI5Ni45IDEwNS43NSAyOTYuOSAxMDUuNzUgMjk4LjA1IDEwNi43IDI5Ny42IDEwNi43NSAyOTcuNiAxMDYuNzUgMjk3LjUgMTA3LjM1IDI5Ny45NSAxMDguMiAyOTguMSAxMDguMjUgMjk4LjE1IDEwOC4zIDI5OC4xNSAxMTEgMjk4LjEgMTEzLjggMjk4LjM1IDExMy44NSAyOTguMzUgMTEzLjkgMjk4LjM1IDExNy44IDI5OC4xNSAxMjEuNyAyOTguNTUgMTI1LjggMjk5IDEzMC4zNSAyOTkuMzUgMTM1LjggMjk5LjU1IDE0MS40IDI5OS42IDE0MS40NSAyOTkuNiAxNDEuNTUgMjk5LjYgMTUyLjIgMjk5LjQ1IDE2My4wNSAyOTkuNjUgMTczLjggMjk5LjggMTg0LjM1IDI5OS41NSAxOTUuMyAyOTkuMzUgMjA2LjA1IDI5OS41IDIxNi43NSAyOTkuNjUgMjI3LjIgMzAwLjA1IDIzNy43IDMwMC40NSAyNDguNiAzMDAuMzUgMjQ5LjQgMzAwLjM1IDI0OS44NSAzMDAuNTUgMjYwLjQgMzAwLjM1IDI3MC45IDI5OS45IDI3Ni40IDI5OS43IDI4Mi4yIDI5OS40IDI4Mi45NSAyOTkuNCAyODQuMDUgMjk5LjQgMjg1LjE1IDI5OS40IDI4NC4xNSAzMDAuMSAyODYuMjUgMjk5LjY1IDI4OC45IDI5OS43IDI5Ni4yIDI5OS44IDMwMy4xNSAyOTkuMzUgMzAzLjM1IDI5OS4xNSAzMDMuODUgMjk5LjIKTCAzMDQuMDUgMjk5LjIKUSAzMDQgMjk0LjIgMzAzLjIgMjg5IDMwMS44IDI3OS41NSAzMDAuNyAyNjkuOCAzMDAuNiAyNjkuNzUgMzAwLjU1IDI2OS43NSAyOTguNiAyNjguNyAyOTcuMDUgMjY3LjIgMjk2LjY1IDI2Ni44IDI5Ni4yNSAyNjYuNCAyOTUuMDUgMjY1LjIgMjk0IDI2My45IDI5MCAyNTkuMTUgMjkwIDI1MC4zIDI5MS42NSAyNDMuNyAyOTcuNzUgMjQxLjUgMjk3LjggMjQxLjUgMjk3LjggMjQxLjQgMjk3LjggMjQxLjA1IDI5Ny43NSAyNDAuNyAyOTcgMjMwLjYgMjk3LjEgMjE5LjY1IDI5Ny4yIDIwOS4zNSAyOTYuNTUgMTk4Ljg1IDI5Ni4xIDE5MS4xNSAyOTQuOSAxODQuMSAyOTMuMyAxNzQuOSAyOTAuODUgMTY2LjQ1IDI4OC40NSAxNTcuOTUgMjg2LjMgMTQ5LjMgMjg0LjE1IDE0MC41IDI3OS4xIDEzNC42NSAyNzQuMDUgMTI4LjggMjY2LjY1IDEyNS4zNSAyNjUuMjUgMTI1LjcgMjYzLjg1IDEyNi4xIDI1OS44IDEyNy40IDI1Ni4yIDEyOS4wNSAyNDguNyAxMzIuNTUgMjQxLjg1IDEzNi42NSAyMzUuMDUgMTQwLjcgMjI3Ljk1IDE0NC40NSAyMjcuODUgMTQ0LjQ1IDIyNy44IDE0NC40NQpNIDk5LjcgMTk1LjY1ClEgOTkuNTUgMTk0LjYgOTkuNTUgMTkzLjUgMTAwLjU1IDE4My41NSAxMDQuODUgMTc3LjA1IDEwNS4yNSAxNzYuNDUgMTA1LjU1IDE3NS45IDEwNi4xNSAxNzQuOTUgMTA2Ljg1IDE3NC4xNSAxMDYuODUgMTc0LjA1IDEwNi44NSAxNzQgMTA2Ljg1IDE3My45IDEwNi44NSAxNzMuNzUgMTExLjQ1IDE2Ny41IDExOC4yNSAxNjMuNDUgMTIxLjI1IDE2MS42NSAxMjUuMiAxNjAuNjUgMTI4LjM1IDE1OS44NSAxMzIuMyAxNTkuNyAxMzYuNSAxNTkuNSAxMzkuNyAxNjAuNCAxNDguOSAxNjIuMDUgMTUzLjUgMTY4LjQgMTUzLjkgMTY5IDE1NC40IDE2OS41IDE1OS42NSAxNzUuMiAxNjEuMTUgMTg0LjYgMTYxLjk1IDE4OS43IDE2MSAxOTQuOCAxNTkuMzUgMjAzLjk1IDE1NC41IDIxMCAxNDkuNjUgMjE2IDE0Mi42NSAyMTkuOCAxNDEuNDUgMjIwLjQ1IDE0MC4wNSAyMjAuODUgMTMzLjggMjIzLjkgMTI0LjE1IDIyMy40IDEyMyAyMjMuMzUgMTIyLjIgMjIyLjggMTI0LjggMjIzLjEgMTI3LjggMjIzLjA1IDEyNy44NSAyMjMuMDUgMTI3LjkgMjIzLjA1CkwgMTI3LjkgMjIzClEgMTIzLjA1IDIyMi45NSAxMTkuNCAyMjEuODUgMTIxIDIyMi42IDExOS4xNSAyMjIuMSAxMTUuNiAyMjEuMiAxMTIuODUgMjE5LjQ1IDEwNi4yIDIxNS4yNSAxMDIuMjUgMjA4LjI1IDEwMC4yNSAyMDQuOCA5OS45IDE5OS43IDk5Ljk1IDE5OS43IDEwMC4wNSAxOTkuNyA5OS44NSAxOTguMjUgOTkuOTUgMTk2LjY1IDEwMCAxOTUuMTUgOTkuNyAxOTUuNjUKTSAxNTguMiAyMTUuODUKUSAxNTguNCAyMTUuNiAxNTguMzUgMjE1IDE1OC4zIDIxNC45NSAxNTguMyAyMTQuOSAxNjIuNCAyMDguMDUgMTcxLjkgMjA2LjUgMTc0LjEgMjA2LjE1IDE3Ni42IDIwNS45IDE4NC43IDIwNS4wNSAxOTAuNjUgMjA3LjU1IDE5Mi43IDIwOC40IDE5NCAyMDkuOSAxOTUuMyAyMTEuMzUgMTk1LjcgMjEzLjcgMTk1LjcgMjEzLjc1IDE5NS43IDIxMy44IDE5NS43IDIxNC4wNSAxOTUuNyAyMTQuMyAxOTUuOSAyMTQuOSAxOTYuOSAyMTQuNyAxOTcuNCAyMTQuNiAxOTcuNiAyMTQuNiAyMDQuNiAyMTQuMSAyMDkuNyAyMTYuNSAyMTUuMiAyMTkuMSAyMTkuMyAyMjMuMTUgMjIyLjA1IDIyNS45IDIyMi41IDIzMS4wNSAyMjMuMjUgMjM5LjM1IDIxOC43NSAyNDMuMzUgMjE1Ljg1IDI0NS45IDIxMS41IDI0Ny4wNSAyMTAuNCAyNDcuMzUgMjA5LjMgMjQ3LjQ1IDIwMS4yNSAyNDguMzUgMTk0Ljg1IDI0Ni4zIDE5NC44NSAyNDcuMSAxOTQuODUgMjQ3Ljg1IDE5NC44NSAyNDcuOTUgMTk0Ljg1IDI0OCAxOTUuMSAyNDguNjUgMTk1LjE1IDI0OS40NSAxOTUuNDUgMjU1LjE1IDE5NS42NSAyNjEgMTk1LjcgMjYzLjU1IDE5NC45IDI2NSAxOTEuODUgMjcwLjM1IDE4NC4xIDI3MC40CkwgMTg0LjEgMjcwLjMKUSAxODMuMiAyNzAgMTgyLjQgMjY5LjY1IDE4Mi40IDI2OS42IDE4Mi40IDI2OS41NSAxODEuMSAyNjguNiAxODAuNDUgMjY3IDE3OC4wNSAyNzEuNTUgMTcyLjA1IDI3MCAxNzAuMyAyNjkuNTUgMTY5LjYgMjY4LjIgMTY3LjU1IDI2NC40IDE2Ny4zNSAyNTkuOSAxNjcuMTUgMjU5LjY1IDE2Ny4xIDI1OS4zIDE2Ni4yIDI1NC43NSAxNjUuNzUgMjQ5LjcgMTY1LjggMjQ5LjcgMTY1Ljg1IDI0OS42NQpMIDE2NS44NSAyNDkuNgpRIDE2MS41NSAyNTIuMiAxNTUuNCAyNTMgMTQ5LjY1IDI1My43NSAxNDUuODUgMjUxLjQgMTQ0LjYgMjUwLjY1IDE0My41IDI0OS43IDE0MC41NSAyNDcuMTUgMTQwLjU1IDI0MS42NSAxNDEuNiAyMzEuOCAxNDcuNzUgMjI3LjA1IDE0OSAyMjYuMSAxNTAuMzUgMjI1LjI1IDE1NC41NSAyMjIuNjUgMTU4Ljk1IDIyMC4yNSAxNTguOTUgMjIwLjIgMTU4LjkgMjIwLjE1IDE1OC41NSAyMTkuMjUgMTU4LjIgMjE4LjQgMTU4LjIgMjE4LjM1IDE1OC4yIDIxOC4zIDE1OC4yIDIxNy4xIDE1OC4yIDIxNS44NSBaIi8+Cgo8cGF0aCBmaWxsPSIjNjk2QTY4IiBzdHJva2U9Im5vbmUiIGQ9IgpNIDE5NC40NSAyNDYuMjUKUSAxOTMuNTUgMjQ1LjkgMTkyLjQgMjQ1LjggMTkyLjM1IDI0Ny40NSAxOTIuNSAyNDguODUgMTkyLjUgMjQ4LjkgMTkyLjUgMjQ4Ljk1IDE5Mi44NSAyNDkuOTUgMTkyLjg1IDI1MS40IDE5Mi44IDI1NS4yIDE5MyAyNTguNyAxOTMuMSAyNjAuNTUgMTkyLjc1IDI2Mi4xIDE5MiAyNjUuMyAxODkuOTUgMjY3LjM1IDE4OC4zNSAyNjguOSAxODUuNSAyNjguNTUgMTgzLjE1IDI2OC4yNSAxODEuNyAyNjcgMTgxLjY1IDI2NyAxODEuNjUgMjY2Ljk1IDE4MS41IDI2Ni4yIDE4MS4xIDI2NS43NSAxODEuMSAyNjUuNCAxODEuMDUgMjY1LjA1IDE4MS4wNSAyNjQuNjUgMTgxIDI2NC40IDE4MC43NSAyNjIuMzUgMTgwIDI2MC45CkwgMTc5LjkgMjYwLjkKUSAxNzkuOCAyNjMuMyAxODAuMzUgMjY1Ljc1IDE4MC4zIDI2NS43NSAxODAuMjUgMjY1LjggMTc5LjkgMjY2LjUgMTc5LjUgMjY3LjIgMTc4Ljk1IDI2Ny43NSAxNzguMiAyNjguMSAxNzcuNCAyNjguNSAxNzYuNTUgMjY4LjYgMTcyLjA1IDI2OS4yIDE2OS44NSAyNjYuNjUgMTY5LjM1IDI2Ni4xIDE2OS4xNSAyNjUuMzUgMTY3LjU1IDI1OS40IDE2Ny4xIDI1Mi40IDE2Ny4wNSAyNTIuNCAxNjcgMjUyLjM1IDE2Ni44NSAyNTEgMTY2LjcgMjQ5LjcKTCAxNjYuNjUgMjQ5LjcKUSAxNjYuNDUgMjUwLjIgMTY1Ljg1IDI0OS42CkwgMTY1Ljg1IDI0OS42NQpRIDE2NS44IDI0OS43IDE2NS43NSAyNDkuNyAxNjYuMiAyNTQuNzUgMTY3LjEgMjU5LjMgMTY3LjE1IDI1OS42NSAxNjcuMzUgMjU5LjkgMTY3LjU1IDI2NC40IDE2OS42IDI2OC4yIDE3MC4zIDI2OS41NSAxNzIuMDUgMjcwIDE3OC4wNSAyNzEuNTUgMTgwLjQ1IDI2NyAxODEuMSAyNjguNiAxODIuNCAyNjkuNTUgMTgyLjQgMjY5LjYgMTgyLjQgMjY5LjY1IDE4My4yIDI3MCAxODQuMSAyNzAuMwpMIDE4NC4xIDI3MC40ClEgMTkxLjg1IDI3MC4zNSAxOTQuOSAyNjUgMTk1LjcgMjYzLjU1IDE5NS42NSAyNjEgMTk1LjQ1IDI1NS4xNSAxOTUuMTUgMjQ5LjQ1IDE5NS4xIDI0OC42NSAxOTQuODUgMjQ4CkwgMTk0Ljc1IDI0OApRIDE5NC44IDI0NyAxOTQuNiAyNDYuMyAxOTQuNTUgMjQ2LjMgMTk0LjQ1IDI0Ni4yNSBaIi8+Cgo8cGF0aCBmaWxsPSIjRjFGMUYxIiBzdHJva2U9Im5vbmUiIGQ9IgpNIDE3OS41IDI0NS4zClEgMTc5LjUgMjQ1LjQgMTc5LjUgMjQ1LjQ1IDE3OS41IDI0NS41IDE3OS41IDI0NS41NSAxODAgMjUwLjM1IDE3OS43NSAyNTUuMyAxNzkuMSAyNTMuMTUgMTc5IDI1MC40NSAxNzkgMjUwLjM1IDE3OSAyNTAuMyAxNzkgMjQ4LjM1IDE3OSAyNDYuNApMIDE3OC45NSAyNDYuNApRIDE3OC43IDI0NS45IDE3OC41IDI0NS4zIDE3OC40NSAyNDUuMyAxNzguNCAyNDUuMyAxNzEuNDUgMjQ2LjI1IDE2Ni42IDI0OS4yIDE2Ni43IDI0OS4zNSAxNjYuNyAyNDkuNiAxNjYuNyAyNDkuNjUgMTY2LjcgMjQ5LjcgMTY2Ljg1IDI1MSAxNjcgMjUyLjM1IDE2Ny4wNSAyNTIuNCAxNjcuMSAyNTIuNCAxNjcuNTUgMjU5LjQgMTY5LjE1IDI2NS4zNSAxNjkuMzUgMjY2LjEgMTY5Ljg1IDI2Ni42NSAxNzIuMDUgMjY5LjIgMTc2LjU1IDI2OC42IDE3Ny40IDI2OC41IDE3OC4yIDI2OC4xIDE3OC45NSAyNjcuNzUgMTc5LjUgMjY3LjIgMTc5LjkgMjY2LjUgMTgwLjI1IDI2NS44IDE4MC4zIDI2NS43NSAxODAuMzUgMjY1Ljc1IDE3OS44IDI2My4zIDE3OS45IDI2MC45CkwgMTgwIDI2MC45ClEgMTgwLjc1IDI2Mi4zNSAxODEgMjY0LjQgMTgxLjA1IDI2NC42NSAxODEuMDUgMjY1LjA1IDE4MS4xIDI2NS40IDE4MS4xIDI2NS43NSAxODEuNSAyNjYuMiAxODEuNjUgMjY2Ljk1IDE4MS42NSAyNjcgMTgxLjcgMjY3IDE4My4xNSAyNjguMjUgMTg1LjUgMjY4LjU1IDE4OC4zNSAyNjguOSAxODkuOTUgMjY3LjM1IDE5MiAyNjUuMyAxOTIuNzUgMjYyLjEgMTkzLjEgMjYwLjU1IDE5MyAyNTguNyAxOTIuOCAyNTUuMiAxOTIuODUgMjUxLjQgMTkyLjg1IDI0OS45NSAxOTIuNSAyNDguOTUKTCAxOTIuNDUgMjQ4Ljk1ClEgMTkyLjIgMjQ3LjI1IDE5Mi4xNSAyNDUuOApMIDE5Mi4xNSAyNDUuNzUKUSAxODYgMjQ0LjYgMTc5LjUgMjQ1LjA1IDE3OS41IDI0NS4yIDE3OS41IDI0NS4zIFoiLz4KCjxwYXRoIGZpbGw9IiM3MDZGNkMiIHN0cm9rZT0ibm9uZSIgZD0iCk0gMTc4LjUgMjQ1LjIKUSAxNzguNSAyNDUuMjUgMTc4LjUgMjQ1LjMgMTc4LjcgMjQ1LjkgMTc4Ljk1IDI0Ni40CkwgMTc5IDI0Ni40ClEgMTc5IDI0OC4zNSAxNzkgMjUwLjMgMTc5IDI1MC4zNSAxNzkgMjUwLjQ1IDE3OS4xIDI1My4xNSAxNzkuNzUgMjU1LjMgMTgwIDI1MC4zNSAxNzkuNSAyNDUuNTUgMTc5LjUgMjQ1LjUgMTc5LjUgMjQ1LjQ1IDE3OS40NSAyNDUuNDUgMTc5LjQ1IDI0NS40IDE3OS4zIDI0NC45IDE3OC41IDI0NS4yIFoiLz4KCjxwYXRoIGZpbGw9IiNFNkQ0QkEiIHN0cm9rZT0ibm9uZSIgZD0iCk0gMTU4Ljc1IDIyMS4yNQpMIDE1OC43IDIyMS40NQpRIDE1Ni4zIDIyMi42IDE1NC4wNSAyMjMuOSAxNTEuMyAyMjUuNDUgMTQ4Ljg1IDIyNy4yNSAxNDIuNSAyMzEuOSAxNDEuNzUgMjQyLjA1IDE0MS43NSAyNDQuNCAxNDIuNSAyNDUuOTUgMTQyLjUgMjQ2IDE0Mi41IDI0Ni4wNSAxNDQuNiAyNDkuNCAxNDguMyAyNTEuMSAxNDkuNiAyNTEuNyAxNTEuMDUgMjUxLjQgMTUzLjYgMjUwLjkgMTU2LjI1IDI1MC42NSAxNTggMjUwLjQ1IDE1OS40IDI1MC4wNSAxNjUuNSAyNDUuMjUgMTc0LjI1IDI0My4xIDE3OS45NSAyNDEuNyAxODYuNyAyNDIuMyAxOTEuOTUgMjQyLjggMTk2LjkgMjQyLjUgMTk5LjUgMjQyLjMgMjAyIDI0Mi4xNSAyMDQuNCAyNDEuOTUgMjA2Ljg1IDI0MS42IDIwOS4yIDI0MS4yNSAyMTAuNzUgMjQwLjEgMjEyLjMgMjM4LjkgMjEzLjUgMjM3LjM1IDIxNS42IDIzNC43IDIxNC43IDIzMC41IDIxNC40NSAyMjkuMiAyMTMuOCAyMjguMiAyMTEuMjUgMjI0LjU1IDIwNy41IDIyMi4yNSAyMDUuNiAyMjEuMSAyMDMuMiAyMjAuNSAxOTkuMTUgMjE5LjUgMTk0LjEgMjE5LjUgMTkxLjUgMjIzIDE4Ny4wNSAyMjQuNiAxODMgMjI2LjA1IDE3Ny44IDIyNi40NSAxNjcuMiAyMjcuMiAxNjAuOSAyMjMuMTUgMTYwLjkgMjIzLjEgMTYwLjg1IDIyMy4xIDE1OS44IDIyMi4yIDE1OS4zIDIyMC44NSAxNTguODUgMjIwLjkgMTU4Ljc1IDIyMS4yNSBaIi8+Cgo8cGF0aCBmaWxsPSIjQjFBNjkxIiBzdHJva2U9Im5vbmUiIGQ9IgpNIDE1OS4zIDIyMC44NQpRIDE1OS4zIDIyMC44IDE1OS4yNSAyMjAuNzUgMTU5LjEgMjIwLjUgMTU4Ljk1IDIyMC4yNSAxNTQuNTUgMjIyLjY1IDE1MC4zNSAyMjUuMjUgMTQ5IDIyNi4xIDE0Ny43NSAyMjcuMDUgMTQxLjYgMjMxLjggMTQwLjU1IDI0MS42NSAxNDAuNTUgMjQ3LjE1IDE0My41IDI0OS43IDE0NC42IDI1MC42NSAxNDUuODUgMjUxLjQgMTQ5LjY1IDI1My43NSAxNTUuNCAyNTMgMTYxLjU1IDI1Mi4yIDE2NS44NSAyNDkuNiAxNjYuNDUgMjUwLjIgMTY2LjY1IDI0OS43CkwgMTY2LjcgMjQ5LjcKUSAxNjYuNyAyNDkuNjUgMTY2LjcgMjQ5LjYgMTY2LjcgMjQ5LjM1IDE2Ni42IDI0OS4yIDE3MS40NSAyNDYuMjUgMTc4LjQgMjQ1LjMgMTc4LjQ1IDI0NS4zIDE3OC41IDI0NS4zIDE3OC41IDI0NS4yNSAxNzguNSAyNDUuMiAxNzkuMyAyNDQuOSAxNzkuNDUgMjQ1LjQgMTc5LjQ1IDI0NS40NSAxNzkuNSAyNDUuNDUgMTc5LjUgMjQ1LjQgMTc5LjUgMjQ1LjMgMTc5LjUgMjQ1LjIgMTc5LjUgMjQ1LjA1IDE4NiAyNDQuNiAxOTIuMTUgMjQ1Ljc1CkwgMTkyLjE1IDI0NS44ClEgMTkyLjIgMjQ3LjI1IDE5Mi40NSAyNDguOTUKTCAxOTIuNSAyNDguOTUKUSAxOTIuNSAyNDguOSAxOTIuNSAyNDguODUgMTkyLjM1IDI0Ny40NSAxOTIuNCAyNDUuOCAxOTMuNTUgMjQ1LjkgMTk0LjQ1IDI0Ni4yNSAxOTQuNTUgMjQ2LjMgMTk0LjYgMjQ2LjMgMTk0LjggMjQ3IDE5NC43NSAyNDgKTCAxOTQuODUgMjQ4ClEgMTk0Ljg1IDI0Ny45NSAxOTQuODUgMjQ3Ljg1IDE5NC44NSAyNDcuMSAxOTQuODUgMjQ2LjMgMjAxLjI1IDI0OC4zNSAyMDkuMyAyNDcuNDUgMjEwLjQgMjQ3LjM1IDIxMS41IDI0Ny4wNSAyMTUuODUgMjQ1LjkgMjE4Ljc1IDI0My4zNSAyMjMuMjUgMjM5LjM1IDIyMi41IDIzMS4wNSAyMjIuMDUgMjI1LjkgMjE5LjMgMjIzLjE1IDIxNS4yIDIxOS4xIDIwOS43IDIxNi41IDIwNC42IDIxNC4xIDE5Ny42IDIxNC42IDE5Ny40IDIxNC42IDE5Ni45IDIxNC43IDE5NS45IDIxNC45IDE5NS43IDIxNC4zIDE5NS43NSAyMTcuNjUgMTk0LjEgMjE5LjQgMTk0LjEgMjE5LjQ1IDE5NC4xIDIxOS41IDE5OS4xNSAyMTkuNSAyMDMuMiAyMjAuNSAyMDUuNiAyMjEuMSAyMDcuNSAyMjIuMjUgMjExLjI1IDIyNC41NSAyMTMuOCAyMjguMiAyMTQuNDUgMjI5LjIgMjE0LjcgMjMwLjUgMjE1LjYgMjM0LjcgMjEzLjUgMjM3LjM1IDIxMi4zIDIzOC45IDIxMC43NSAyNDAuMSAyMDkuMiAyNDEuMjUgMjA2Ljg1IDI0MS42IDIwNC40IDI0MS45NSAyMDIgMjQyLjE1IDE5OS41IDI0Mi4zIDE5Ni45IDI0Mi41IDE5MS45NSAyNDIuOCAxODYuNyAyNDIuMyAxNzkuOTUgMjQxLjcgMTc0LjI1IDI0My4xIDE2NS41IDI0NS4yNSAxNTkuNCAyNTAuMDUgMTU4IDI1MC40NSAxNTYuMjUgMjUwLjY1IDE1My42IDI1MC45IDE1MS4wNSAyNTEuNCAxNDkuNiAyNTEuNyAxNDguMyAyNTEuMSAxNDQuNiAyNDkuNCAxNDIuNSAyNDYuMDUgMTQyLjUgMjQ2IDE0Mi41IDI0NS45NSAxNDEuNzUgMjQ0LjQgMTQxLjc1IDI0Mi4wNSAxNDIuNSAyMzEuOSAxNDguODUgMjI3LjI1IDE1MS4zIDIyNS40NSAxNTQuMDUgMjIzLjkgMTU2LjMgMjIyLjYgMTU4LjcgMjIxLjQ1CkwgMTU4Ljc1IDIyMS4yNQpRIDE1OC44NSAyMjAuOSAxNTkuMyAyMjAuODUgWiIvPgoKPHBhdGggZmlsbD0iIzI2MjcyNyIgc3Ryb2tlPSJub25lIiBkPSIKTSAxNTguMzUgMjE1ClEgMTU4LjQgMjE1LjYgMTU4LjIgMjE1Ljg1IDE1OC4yIDIxNy4xIDE1OC4yIDIxOC4zIDE1OC4yIDIxOC4zNSAxNTguMiAyMTguNCAxNTguNTUgMjE5LjI1IDE1OC45IDIyMC4xNSAxNTguOTUgMjIwLjIgMTU4Ljk1IDIyMC4yNSAxNTkuMSAyMjAuNSAxNTkuMjUgMjIwLjc1IDE1OS4zIDIyMC44IDE1OS4zIDIyMC44NSAxNTkuOCAyMjIuMiAxNjAuODUgMjIzLjEgMTYwLjkgMjIzLjEgMTYwLjkgMjIzLjE1IDE2Ny4yIDIyNy4yIDE3Ny44IDIyNi40NSAxODMgMjI2LjA1IDE4Ny4wNSAyMjQuNiAxOTEuNSAyMjMgMTk0LjEgMjE5LjUgMTk0LjEgMjE5LjQ1IDE5NC4xIDIxOS40IDE5NS43NSAyMTcuNjUgMTk1LjcgMjE0LjMgMTk1LjcgMjE0LjA1IDE5NS43IDIxMy44IDE5NS43IDIxMy43NSAxOTUuNyAyMTMuNyAxOTUuMyAyMTEuMzUgMTk0IDIwOS45IDE5Mi43IDIwOC40IDE5MC42NSAyMDcuNTUgMTg0LjcgMjA1LjA1IDE3Ni42IDIwNS45IDE3NC4xIDIwNi4xNSAxNzEuOSAyMDYuNSAxNjIuNCAyMDguMDUgMTU4LjMgMjE0LjkgMTU4LjMgMjE0Ljk1IDE1OC4zNSAyMTUKTSAxNjEgMjE1Ljg1ClEgMTYxIDIxNS44IDE2MSAyMTUuNzUgMTYzLjE1IDIxMS43IDE2OC44IDIxMS4xNSAxNjguODUgMjExLjEgMTY4LjkgMjExLjEgMTY4LjI1IDIxMS44NSAxNjcuMyAyMTIuMyAxNjcuMjUgMjEyLjM1IDE2Ny4yIDIxMi4zNSAxNjYgMjE0LjQgMTY0LjYgMjE2LjIgMTY0LjYgMjE2LjI1IDE2NC41NSAyMTYuMjUgMTY0LjcgMjE3LjcgMTY0LjMgMjE4LjU1IDE2NC4zIDIxOC42IDE2NC4zIDIxOC42NSAxNjMuOSAyMTkuMTUgMTYyLjg1IDIxOS4wNSAxNjIuNzUgMjE5LjA1IDE2Mi43IDIxOS4wNSAxNjIuMSAyMTguNjUgMTYxLjYgMjE4LjIgMTYxLjU1IDIxOC4yIDE2MS41IDIxOC4yIDE2MS4zNSAyMTcuNiAxNjEuMSAyMTcuMSAxNjEuMDUgMjE3LjEgMTYxIDIxNy4xIDE2MSAyMTYuNSAxNjEgMjE1Ljg1IFoiLz4KCjxwYXRoIGZpbGw9IiNGOUY5RjkiIHN0cm9rZT0ibm9uZSIgZD0iCk0gMTYxIDIxNS43NQpRIDE2MSAyMTUuOCAxNjEgMjE1Ljg1IDE2MSAyMTYuNSAxNjEgMjE3LjEgMTYxLjA1IDIxNy4xIDE2MS4xIDIxNy4xIDE2MS4zNSAyMTcuNiAxNjEuNSAyMTguMiAxNjEuNTUgMjE4LjIgMTYxLjYgMjE4LjIgMTYyLjEgMjE4LjY1IDE2Mi43IDIxOS4wNSAxNjIuNzUgMjE5LjA1IDE2Mi44NSAyMTkuMDUgMTYzLjkgMjE5LjE1IDE2NC4zIDIxOC42NSAxNjQuMyAyMTguNiAxNjQuMyAyMTguNTUgMTY0LjcgMjE3LjcgMTY0LjU1IDIxNi4yNSAxNjQuNiAyMTYuMjUgMTY0LjYgMjE2LjIgMTY2IDIxNC40IDE2Ny4yIDIxMi4zNSAxNjcuMjUgMjEyLjM1IDE2Ny4zIDIxMi4zIDE2OC4yNSAyMTEuODUgMTY4LjkgMjExLjEgMTY4Ljg1IDIxMS4xIDE2OC44IDIxMS4xNSAxNjMuMTUgMjExLjcgMTYxIDIxNS43NSBaIi8+Cgo8cGF0aCBmaWxsPSIjMjkyRjMwIiBzdHJva2U9Im5vbmUiIGQ9IgpNIDEwNy44NSAyMTUKUSAxMDcuNSAyMTQuNjUgMTA3LjIgMjE0LjM1IDEwMS42NSAyMDkgMTAwLjA1IDE5OS43IDk5Ljk1IDE5OS43IDk5LjkgMTk5LjcgMTAwLjI1IDIwNC44IDEwMi4yNSAyMDguMjUgMTA2LjIgMjE1LjI1IDExMi44NSAyMTkuNDUgMTE1LjYgMjIxLjIgMTE5LjE1IDIyMi4xIDEyMSAyMjIuNiAxMTkuNCAyMjEuODUgMTEyLjI1IDIxOS44IDEwNy44NSAyMTUgWiIvPgoKPHBhdGggZmlsbD0iIzI3MkIyQyIgc3Ryb2tlPSJub25lIiBkPSIKTSAxMzkuOTUgMjIwLjc1ClEgMTM5LjkgMjIwLjc1IDEzOS44NSAyMjAuNzUgMTM5LjQgMjIwLjc1IDEzOSAyMjAuNzUgMTM5IDIyMC44IDEzOC45NSAyMjAuOCAxMzYuNiAyMjEuOTUgMTMzLjQgMjIyLjIgMTMzLjQgMjIyLjI1IDEzMy4zNSAyMjIuMjUgMTMxLjA1IDIyMy4xIDEyNy45IDIyMy4wNSAxMjcuODUgMjIzLjA1IDEyNy44IDIyMy4wNSAxMjQuOCAyMjMuMSAxMjIuMiAyMjIuOCAxMjMgMjIzLjM1IDEyNC4xNSAyMjMuNCAxMzMuOCAyMjMuOSAxNDAuMDUgMjIwLjg1IDE0MC4wNSAyMjAuOCAxNDAuMDUgMjIwLjc1IDE0MCAyMjAuNzUgMTM5Ljk1IDIyMC43NSBaIi8+Cgo8cGF0aCBmaWxsPSIjMjEyNDI1IiBzdHJva2U9Im5vbmUiIGQ9IgpNIDE1NC40IDE2OS41ClEgMTUzLjkgMTY5IDE1My41IDE2OC40IDE0OC45IDE2Mi4wNSAxMzkuNyAxNjAuNCAxMzkuNjUgMTYwLjQgMTM5LjYgMTYwLjQgMTM5LjM1IDE2MC40IDEzOS4xIDE2MC40IDEzOS40IDE2MC42NSAxMzkuNyAxNjAuOSAxMzkuNyAxNjAuOTUgMTM5LjcgMTYxIDE0OC44NSAxNjIuNzUgMTUzLjM1IDE2OS4xNSAxNTMuNiAxNjkuNSAxNTMuOSAxNjkuOCAxNTcuMDUgMTcyLjkgMTU4LjM1IDE3Ny45IDE1OC44IDE3OS41IDE1OS40IDE4MC45NSAxNTkuNCAxODEuMyAxNTkuNCAxODEuNjUgMTU5LjQgMTgxLjc1IDE1OS40IDE4MS44IDE2MC43IDE4NiAxNjAuNjUgMTkxLjQgMTYwLjYgMTk2Ljc1IDE1OSAyMDAuNSAxNTYuNTUgMjA2LjMgMTUyLjkgMjEwLjggMTQ4LjY1IDIxNi4wNSAxNDIuNjUgMjE5LjU1IDE0MS40NSAyMjAuMjUgMTM5Ljk1IDIyMC43NSAxNDAgMjIwLjc1IDE0MC4wNSAyMjAuNzUgMTQwLjA1IDIyMC44IDE0MC4wNSAyMjAuODUgMTQxLjQ1IDIyMC40NSAxNDIuNjUgMjE5LjggMTQ5LjY1IDIxNiAxNTQuNSAyMTAgMTU5LjM1IDIwMy45NSAxNjEgMTk0LjggMTYxLjk1IDE4OS43IDE2MS4xNSAxODQuNiAxNTkuNjUgMTc1LjIgMTU0LjQgMTY5LjUgWiIvPgoKPHBhdGggZmlsbD0iI0QxRDJEMiIgc3Ryb2tlPSJub25lIiBkPSIKTSAxMTMuMyAxNjcuODUKUSAxMTEuNyAxNjkuMDUgMTEwLjQgMTcwLjYgMTA5LjQgMTcxLjc1IDEwOC4zIDE3Mi4yIDEwOC4zIDE3Mi4yNSAxMDguMyAxNzIuMyAxMDcuNSAxNzMuMSAxMDYuODUgMTc0LjE1IDEwNi4xNSAxNzQuOTUgMTA1LjU1IDE3NS45IDEwNS4yNSAxNzYuNDUgMTA0Ljg1IDE3Ny4wNSAxMDAuNTUgMTgzLjU1IDk5LjU1IDE5My41IDk5LjU1IDE5NC42IDk5LjcgMTk1LjY1IDEwMCAxOTUuMTUgOTkuOTUgMTk2LjY1IDk5Ljg1IDE5OC4yNSAxMDAuMDUgMTk5LjcgMTAxLjY1IDIwOSAxMDcuMiAyMTQuMzUgMTA3LjUgMjE0LjY1IDEwNy44NSAyMTUgMTEyLjI1IDIxOS44IDExOS40IDIyMS44NSAxMjMuMDUgMjIyLjk1IDEyNy45IDIyMwpMIDEyNy45IDIyMy4wNQpRIDEzMS4wNSAyMjMuMSAxMzMuMzUgMjIyLjI1IDEzMy40IDIyMi4yNSAxMzMuNCAyMjIuMiAxMzYuNiAyMjEuOTUgMTM4Ljk1IDIyMC44IDEzOSAyMjAuOCAxMzkgMjIwLjc1IDEzOS40IDIyMC43NSAxMzkuODUgMjIwLjc1IDEzOS45IDIyMC43NSAxMzkuOTUgMjIwLjc1IDE0MS40NSAyMjAuMjUgMTQyLjY1IDIxOS41NSAxNDguNjUgMjE2LjA1IDE1Mi45IDIxMC44IDE1Ni41NSAyMDYuMyAxNTkgMjAwLjUgMTYwLjYgMTk2Ljc1IDE2MC42NSAxOTEuNCAxNjAuNyAxODYgMTU5LjQgMTgxLjggMTU5LjQgMTgxLjc1IDE1OS40IDE4MS42NSAxNTkuNCAxODEuMyAxNTkuNCAxODAuOTUgMTU4LjggMTc5LjUgMTU4LjM1IDE3Ny45IDE1Ny4wNSAxNzIuOSAxNTMuOSAxNjkuOCAxNTMuNiAxNjkuNSAxNTMuMzUgMTY5LjE1IDE0OC44NSAxNjIuNzUgMTM5LjcgMTYxIDEzNi43NSAxNjAuMiAxMzMuMTUgMTYwLjM1IDEyMi44NSAxNjAuNyAxMTYuNDUgMTY1LjI1IDExNC45NSAxNjYuNiAxMTMuMyAxNjcuODUKTSAxMTAuNSAxNzMuMTUKUSAxMTQuMyAxNjguOCAxMTkuNjUgMTY2IDEyMS40NSAxNjUuMDUgMTIzLjY1IDE2NC41NSAxMjkuODUgMTYzLjE1IDEzNS44IDE2NC41NSAxNDIuOSAxNjYuMiAxNDcgMTcwLjg1IDE0Ny40NSAxNzEuOSAxNDguMzUgMTcyLjQgMTQ4LjQgMTcyLjQ1IDE0OC40NSAxNzIuNDUgMTQ4LjY1IDE3Mi44NSAxNDguNzUgMTczLjQKTCAxNDguODUgMTczLjQKUSAxNTIuODUgMTc3LjU1IDE1NC40NSAxODQgMTU1IDE4Ni40NSAxNTQuODUgMTg5LjQ1IDE1NC43NSAxOTEuODUgMTU0LjU1IDE5NC41NSAxNTQuMyAxOTQuOTUgMTU0LjE1IDE5NS40IDE1NC4xNSAxOTUuNDUgMTU0LjA1IDE5NS40NSAxNTMuNyAxOTguMTUgMTUyLjggMjAwLjQKTCAxNTIuNzUgMjAwLjQKUSAxNTIuOCAyMDIuMDUgMTUyLjE1IDIwMyAxNTIuMSAyMDMuMDUgMTUyLjEgMjAzLjEgMTUyLjIgMjA0LjA1IDE1MS43IDIwNC41IDE1MS43IDIwNC41NSAxNTEuNjUgMjA0LjU1IDE0OS44NSAyMDkuNjUgMTQ1LjggMjEyLjUKTCAxNDUuOCAyMTIuNgpRIDE0MS43IDIxNS4zNSAxMzYuOTUgMjE3LjMgMTM1LjkgMjE3Ljc1IDEzNC44NSAyMTguMTUgMTMyLjQ1IDIxOS4xIDEyOS44IDIxOS44IDEyNy41NSAyMjAuMzUgMTI1IDIyMC4yIDExOS44NSAyMTkuOSAxMTYuMSAyMTguMTUgMTA4LjY1IDIxNC43NSAxMDQuMzUgMjA4LjA1IDEwNCAyMDcuNSAxMDMuNjUgMjA2Ljg1IDEwMy4zIDIwNi4yNSAxMDMuNDUgMjA1LjE1IDEwMi45NSAyMDQuOCAxMDIuNiAyMDQuMyAxMDIuNiAyMDQuMjUgMTAyLjYgMjA0LjIgMTAyLjYgMjAzIDEwMi4wNSAyMDIuNCAxMDIuMDUgMjAyLjM1IDEwMiAyMDIuMzUgMTAxLjkgMTk3LjcgMTAxLjc1IDE5My4xIDEwMS43NSAxOTMuMDUgMTAxLjc1IDE5MyAxMDIuMyAxODUuNCAxMDUuNDUgMTgwLjQ1IDEwNi43IDE3OC41NSAxMDggMTc2LjcgMTA5LjIgMTc0LjkgMTEwLjUgMTczLjE1IFoiLz4KCjxwYXRoIGZpbGw9IiMxQTFBMUEiIHN0cm9rZT0ibm9uZSIgZD0iCk0gMTI3LjA1IDE5MwpMIDEyNy4wNSAxOTMuMDUKUSAxMjIuNDUgMTk0LjggMTIwLjYgMTk5LjIgMTIwLjYgMTk5LjI1IDEyMC42IDE5OS4zIDEyMC43IDIwMCAxMjAuMzUgMjAwLjMgMTIwLjM1IDIwMC4zNSAxMjAuMzUgMjAwLjQgMTIwLjM1IDIwMiAxMjAuNSAyMDMuNDUKTCAxMjAuNTUgMjAzLjQ1ClEgMTIxLjIgMjA1LjY1IDEyMi41NSAyMDcuMSAxMjQuNCAyMDguNiAxMjcuMyAyMDguODUgMTMwLjggMjA5LjE1IDEzMi44NSAyMDcuODUgMTMzLjU1IDIwNy4zNSAxMzQuMjUgMjA2Ljg1IDEzNi41IDIwNS4wNSAxMzcuNjUgMjAyLjEgMTM3LjY1IDIwMi4wNSAxMzcuNjUgMjAyIDEzNy44NSAyMDAuNCAxMzcuNjUgMTk4LjcgMTM3LjYgMTk4LjcgMTM3LjU1IDE5OC43IDEzNi41NSAxOTYuNSAxMzUuMiAxOTQuNyAxMzUuMTUgMTk0LjcgMTM1LjEgMTk0LjY1IDEzNC45NSAxOTQuNDUgMTM0LjYgMTk0LjQ1IDEzNC42IDE5NC40IDEzNC41NSAxOTQuMzUgMTM0LjMgMTk0LjE1IDEzNC4xIDE5My44NSAxMzQuMDUgMTkzLjg1IDEzNCAxOTMuODUgMTMzLjA1IDE5My43NSAxMzIuNjUgMTkzLjEgMTMyLjYgMTkzLjEgMTMyLjU1IDE5My4xIDEyOS45NSAxOTIuNCAxMjcuMDUgMTkzIFoiLz4KCjxwYXRoIGZpbGw9IiM3MTg1ODgiIHN0cm9rZT0ibm9uZSIgZD0iCk0gMTEwLjQgMTcwLjYKUSAxMTEuNyAxNjkuMDUgMTEzLjMgMTY3Ljg1IDExNC45NSAxNjYuNiAxMTYuNDUgMTY1LjI1IDEyMi44NSAxNjAuNyAxMzMuMTUgMTYwLjM1IDEzNi43NSAxNjAuMiAxMzkuNyAxNjEgMTM5LjcgMTYwLjk1IDEzOS43IDE2MC45IDEzOS40IDE2MC42NSAxMzkuMSAxNjAuNCAxMzkuMzUgMTYwLjQgMTM5LjYgMTYwLjQgMTM5LjY1IDE2MC40IDEzOS43IDE2MC40IDEzNi41IDE1OS41IDEzMi4zIDE1OS43IDEyOC4zNSAxNTkuODUgMTI1LjIgMTYwLjY1IDEyMS4yNSAxNjEuNjUgMTE4LjI1IDE2My40NSAxMTEuNDUgMTY3LjUgMTA2Ljg1IDE3My43NSAxMDYuODUgMTczLjkgMTA2Ljg1IDE3NCAxMDYuODUgMTc0LjA1IDEwNi44NSAxNzQuMTUgMTA3LjUgMTczLjEgMTA4LjMgMTcyLjMgMTA4LjMgMTcyLjI1IDEwOC4zIDE3Mi4yIDEwOS40IDE3MS43NSAxMTAuNCAxNzAuNiBaIi8+Cgo8cGF0aCBmaWxsPSIjNDQ1ODM5IiBmaWxsLW9wYWNpdHk9IjAuOTkyMTU2ODYyNzQ1MDk4MSIgc3Ryb2tlPSJub25lIiBkPSIKTSAyMTEuNzUgMTQxLjA1ClEgMjExLjc1IDE0MS4xIDIxMS43NSAxNDEuMTUgMjE4LjY1IDEzNy45IDIyNS41NSAxMzQuNyAyMjcuMiAxMzMuOTUgMjI4LjkgMTMzLjM1IDIzMC42NSAxMzIuOCAyMzEuNDUgMTMxLjMgMjM4LjUgMTI3LjQ1IDI0NS43IDEyMy43NSAyNTIuOSAxMjAuMSAyNjAuMDUgMTE2LjMgMjY3LjE1IDExMi41IDI3NS43IDExMC4xIDI3OC4yNSAxMDkuNCAyODEgMTA4LjggMjgxIDEwOC43IDI4MSAxMDguNjUgMjg1LjYgMTA3LjggMjkwLjI1IDEwNy4wNSAyOTQuNyAxMDYuNCAyOTguOSAxMDUuNjUgMzAxLjE1IDEwNS4yNSAzMDMuMTUgMTA0Ljg1IDMwNS4xIDEwNC40NSAzMDYuMSAxMDMuMwpMIDMwNi4yIDEwMy4wNQpRIDI5OS4yNSAxMDMuOCAyOTIuOSAxMDQuOTUgMjg4LjEgMTA1LjggMjgzLjQ1IDEwNi44IDI3NC43IDEwOC43NSAyNjcgMTExLjk1IDI2My4xNSAxMTMuNTUgMjU5LjQ1IDExNS40NSAyNTIuMjUgMTE5LjA1IDI0NS4xIDEyMi43NSAyMzguNCAxMjYuMjUgMjMxLjg1IDEyOS44NSAyMjkuNjUgMTMxLjA1IDIyNy40IDEzMi4zIDIyMC40IDEzNi4zIDIxMy4xIDEzOS40NQpMIDIxMyAxMzkuNDUKUSAyMTIuNSAxNDAuNCAyMTEuNzUgMTQxLjA1IFoiLz4KCjxwYXRoIGZpbGw9IiMxNjE2MTYiIHN0cm9rZT0ibm9uZSIgZD0iCk0gMjMwLjg1IDEyMy4wNQpRIDIzNi43NSAxMTguMDUgMjQxLjIgMTExLjYgMjM4LjggMTEyLjM1IDIzNyAxMTMuNyAyMzAuNyAxMTguMyAyMjQuNiAxMjMuMSAyMTguNSAxMjcuODUgMjEyLjggMTMzLjEgMjA3LjE1IDEzOC4zIDIwMS41IDE0My42IDIwMS41IDE0My42NSAyMDEuNSAxNDMuNyAyMDEuNSAxNDMuNzUgMjAxLjUgMTQzLjggMTk4Ljg1IDE0NiAxOTYuMyAxNDguMzUgMTk2LjI1IDE0OC4zNSAxOTYuMiAxNDguMzUgMTkzLjQ1IDE1MSAxOTAuMSAxNTMuMSAxOTAgMTUzLjEgMTg5Ljk1IDE1My4xIDE4Ni43NSAxNTMuMTUgMTg0Ljg1IDE1MS44NSAxODQuOCAxNTEuODUgMTg0Ljc1IDE1MS44NSAxODQuMzUgMTUxLjg1IDE4NCAxNTEuODUgMTg0IDE1MS45IDE4NCAxNTEuOTUgMTgzLjU1IDE1Mi4wNSAxODMuMTUgMTUyLjI1IDE4My4xNSAxNTIuMyAxODMuMSAxNTIuMyAxODIuNiAxNTIuNyAxODIuMyAxNTMuMyAxODIuMyAxNTMuOCAxODIuMyAxNTQuMyAxODIuMyAxNTQuMzUgMTgyLjMgMTU0LjQgMTg0LjMgMTU4LjIgMTg5Ljg1IDE1Ny44IDE5MC42NSAxNTcuNzUgMTkxLjU1IDE1Ny43IDE5NyAxNTUgMjAxLjA1IDE1MC45IDIwMi4zNSAxNDkuNjUgMjAzLjcgMTQ4LjQ1IDIwNy43IDE0NC43NSAyMTEuNzUgMTQxLjE1IDIxMS43NSAxNDEuMSAyMTEuNzUgMTQxLjA1IDIxMi41IDE0MC40IDIxMyAxMzkuNDUKTCAyMTMuMSAxMzkuNDUKUSAyMTMuMSAxMzkuNCAyMTMuMSAxMzkuMzUgMjE0LjM1IDEzOC4yIDIxNS41NSAxMzcuMDUgMjE1LjYgMTM3IDIxNS42NSAxMzcgMjE1LjY1IDEzNi45NSAyMTUuNjUgMTM2LjkgMjE1LjY1IDEzNi44NSAyMTUuNjUgMTM2Ljc1IDIxNi43IDEzNi4wNSAyMTcuNSAxMzUuMSAyMTcuNTUgMTM1LjA1IDIxNy42IDEzNS4wNSAyMjIuNjUgMTMwLjIgMjI3Ljk1IDEyNS42IDIyOS40IDEyNC4zIDIzMC44NSAxMjMuMDUgWiIvPgoKPHBhdGggZmlsbD0iIzg1OTM2RSIgc3Ryb2tlPSJub25lIiBkPSIKTSAyMzIuOCA3MC45ClEgMjMyLjI1IDcwLjQgMjMxLjggNjkuNyAyMzIuNCA3MS44NSAyMzMgNzMuOTUgMjMzIDc0IDIzMy4wNSA3NCAyMzUuNSA3Mi45NSAyMzguNCA3My41IDIzOC40NSA3My41IDIzOC41IDczLjUgMjM5IDcyLjkgMjQwLjEgNzIuOTUKTCAyNDAuMSA3MwpRIDI0MC4xIDc0IDI0MS4yIDc0LjQ1IDI0MS4yNSA3NC40NSAyNDEuMyA3NC40NSAyNDEuMyA3NC40IDI0MS4zIDc0LjM1IDI0MS4wNSA3My41IDI0MS4wNSA3Mi40IDI0MS4zIDcxLjUgMjQxLjUgNzAuNDUKTCAyNDEuNTUgNzAuNDUKUSAyNDEuNTUgNzAgMjQxLjU1IDY5LjYKTCAyNDEuNTUgNjkuNApRIDI0MC41NSA2OS42IDIzOS4xNSA3MC4yIDIzOS4xNSA3MC4yNSAyMzkuMTUgNzAuMzUKTCAyMzkuMiA3MC4zNQpRIDIzOS4wNSA3MS40IDIzNy45IDcyLjE1IDIzNy44NSA3Mi4xNSAyMzcuOCA3Mi4xNSAyMzUuMjUgNzIuOCAyMzMuNzUgNzEuMyAyMzMuNzUgNzEuMzUgMjMzLjc1IDcxLjQgMjMzLjEgNzIuMTUgMjMyLjggNzAuOApMIDIzMi44IDcwLjkgWiIvPgoKPHBhdGggZmlsbD0iI0U0RTdERSIgc3Ryb2tlPSJub25lIiBkPSIKTSAyMzEuNiA1OS43NQpRIDIzMS41IDU5Ljc1IDIzMS40NSA1OS43NSAyMjkuOTUgNjAuNDUgMjI5LjUgNjIuMiAyMjkuNSA2Mi42NSAyMjkuNSA2My4xNSAyMjkuNSA2My4yIDIyOS41IDYzLjI1IDIzMC43IDY2LjQgMjMxLjggNjkuNiAyMzEuOCA2OS42NSAyMzEuOCA2OS43IDIzMi4yNSA3MC40IDIzMi44IDcwLjkKTCAyMzIuOCA3MC44ClEgMjMyLjggNzAuNzUgMjMyLjggNzAuNyAyMzEuNjUgNjUuNzUgMjMxLjYgNTkuNzUgWiIvPgoKPHBhdGggZmlsbD0iIzQwNTAzNCIgZmlsbC1vcGFjaXR5PSIwLjgxOTYwNzg0MzEzNzI1NDkiIHN0cm9rZT0ibm9uZSIgZD0iCk0gMTYzLjU1IDMwLjgKUSAxNjIuOTUgMzEuMSAxNjIuNCAzMS41IDE1OS4xNSAzMy45NSAxNTUuNjUgMzYuMjUgMTU1LjY1IDM2LjMgMTU1LjYgMzYuMzUgMTU0Ljk1IDM3LjM1IDE1My45NSAzNy45NSAxNTMuOTUgMzggMTUzLjk1IDM4LjEgMTYwLjI1IDMzLjUgMTY4LjQgMzAuNyAxNzAuMzUgMzAuMDUgMTcyLjU1IDI5LjU1IDE2Ni4zNSAzMC42NSAxNjEgMzMuMiAxNjAuOTUgMzMuMiAxNjAuOSAzMy4yIDE2Mi4yIDMyLjA1IDE2My41NSAzMC44NQpMIDE2My41NSAzMC44IFoiLz4KCjxwYXRoIGZpbGw9IiM4QzlENzEiIGZpbGwtb3BhY2l0eT0iMC45OTYwNzg0MzEzNzI1NDkiIHN0cm9rZT0ibm9uZSIgZD0iCk0gMjE3Ljk1IDQ2LjQ1ClEgMjE3IDQ1Ljc1IDIxNS43IDQ1LjIgMjEwLjk1IDQzLjIgMjA2LjUgNDAuNyAxOTkuNTUgMzYuODUgMTkyLjE1IDMzLjM1IDE5Mi44IDMzLjQgMTkzLjM1IDMzLjUKTCAxOTMuMzUgMzMuNDUgMTkzLjM1IDMzLjQKUSAxOTIuNiAzMy4xNSAxOTIuMyAzMi41IDE4OC4xIDMxIDE4NC4xIDI5LjM1IDE4MSAyOC4xIDE3Ni45NSAyOCAxNjguOCAyNy44NSAxNjMuNTUgMzAuOApMIDE2My41NSAzMC44NQpRIDE2Mi4yIDMyLjA1IDE2MC45IDMzLjIgMTYwLjk1IDMzLjIgMTYxIDMzLjIgMTY2LjM1IDMwLjY1IDE3Mi41NSAyOS41NSAxNzAuMzUgMzAuMDUgMTY4LjQgMzAuNyAxNjAuMjUgMzMuNSAxNTMuOTUgMzguMSAxNTMuOTUgMzguMTUgMTUzLjkgMzguMTUgMTUxLjM1IDQwIDE0OC45NSA0MS45IDE0Mi45NSA0Ny43NSAxMzkuOCA1MC42NSAxMzcuMzUgNTIuOSAxMzUuMTUgNTQuNyAxMzIuNjUgNTcuMSAxMzAuMSA1OS40IDEyOS41NSA2MC40NSAxMjguMyA2MS43NSAxMjcuMTUgNjIuOSAxMjUuOTUgNjMuOTUgMTIwLjE1IDY5LjA1IDExNi4xIDc1Ljk1IDExNi4xIDc2IDExNi4wNSA3Ni4wNSAxMTUuMSA3Ny40NSAxMTQuNjUgNzkuMzUgMTE0LjY1IDc5LjY1IDExNC42NSA3OS45NSAxMTQuNjUgODAgMTE0LjY1IDgwLjA1IDExNS4wNSA3OS40NSAxMTUgODAuMDUgMTE0LjYgODMuNDUgMTE0LjI1IDg3IDExMy42IDk0LjYgMTEzLjIgMTAyLjM1IDExMy4xIDEwMy45NSAxMTMuMyAxMDUuMjUgMTEzLjMgMTA1LjMgMTEzLjMgMTA1LjQgMTEzLjg1IDEwNS42NSAxMTQuNCAxMDUuNCAxMTQuNDUgMTA1LjQgMTE0LjUgMTA1LjQgMTE4LjggMTA3LjkgMTI1LjIgMTA4LjQgMTI3LjY1IDEwOC42IDEzMC4xIDEwOC45NSAxMzUuMDUgMTA5LjcgMTQwLjIgMTA5LjE1IDE0Mi43NSAxMDguODUgMTQ1LjQgMTA4LjY1IDE0OS4xNSAxMDguNCAxNTIuOTUgMTA4LjI1IDE1OCAxMDggMTYyLjcgMTA3Ljk1IDE2NC41NSAxMDcuOTUgMTY2LjM1IDEwNy43NSAxNzEuMzUgMTA3LjI1IDE3NS44NSAxMDYuMzUgMTgzLjg1IDEwNC43NSAxOTIuMjUgMTAzLjUgMTk5LjA1IDEwMi41IDIwNi4wNSAxMDEuNTUgMjA4LjM1IDEwMS4yNSAyMTAuNDUgMTAwLjgKTCAyMTAuNCAxMDAuNzUKUSAyMDkuODUgMTAwLjI1IDIxMS4yNSAxMDAuMDUgMjEyLjggOTkuOCAyMTMuOCA5OC45NSAyMTUgOTguODUgMjE1LjggOTguMzUgMjE1LjggOTguMyAyMTUuOSA5OC4zIDIxNiA5OC4wNSAyMTYuMiA5Ny45IDIxNi4yNSA5Ny45IDIxNi4yNSA5Ny44NSAyMTguNjUgOTYuNyAyMjAuOSA5NS4zNSAyMjEgOTUuMyAyMjEgOTUuMDUgMjIxLjI1IDk0LjY1IDIyMS40NSA5NC4zIDIyMS41IDk0LjI1IDIyMS41IDk0LjIgMjIwLjkgODguOTUgMjIyLjYgODQuOCAyMjUuNCA3OCAyMzEuNyA3NC43IDIyOS43IDY5IDIyOC4zIDYzLjIgMjI4LjA1IDYyLjIgMjI4LjMgNjEuMiAyMjkuMiA2MS45IDIyOS40NSA2My4yNQpMIDIyOS41IDYzLjI1ClEgMjI5LjUgNjMuMiAyMjkuNSA2My4xNSAyMjkuNSA2Mi42NSAyMjkuNSA2Mi4yIDIyOS45NSA2MC40NSAyMzEuNDUgNTkuNzUgMjMxLjUgNTkuNzUgMjMxLjYgNTkuNzUgMjMxLjYgNTkuNyAyMzEuNiA1OS42IDIzMS41NSA1OC41NSAyMzEuOCA1Ny44CkwgMjMxLjkgNTcuOApRIDIzMi4zNSA1OC43NSAyMzIuNTUgNTkuODUgMjMyLjU1IDU5LjggMjMyLjU1IDU5Ljc1IDIzMi41NSA1Ny4yIDIzMi41NSA1NC42NSAyMzIuNSA1NC42NSAyMzIuNDUgNTQuNiAyMzEuOTUgNTQuMSAyMzEuNDUgNTMuNTUgMjMxLjQgNTMuNTUgMjMxLjM1IDUzLjUgMjI1LjEgNTAuMiAyMTguNDUgNDcuMiAyMTguMyA0Ni43NSAyMTcuOTUgNDYuNDUKTSAxOTEgNDYuMTUKUSAxODcuNiA0My40NSAxODQuOTUgMzkuOSAxODkuOSA0NS44NSAxOTYuOCA0OS45NSAyMDMuNTUgNTQuMDUgMjEyIDU2LjQ1IDIxNC42IDU3LjE1IDIxNy4yIDU3LjggMjA4IDU2LjU1IDIwMC44NSA1Mi43IDE5NS41IDQ5LjggMTkxIDQ2LjE1IFoiLz4KCjxwYXRoIGZpbGw9IiM0NjU5MzkiIHN0cm9rZT0ibm9uZSIgZD0iCk0gMTg0Ljk1IDM5LjkKUSAxODcuNiA0My40NSAxOTEgNDYuMTUgMTk1LjUgNDkuOCAyMDAuODUgNTIuNyAyMDggNTYuNTUgMjE3LjIgNTcuOCAyMTQuNiA1Ny4xNSAyMTIgNTYuNDUgMjAzLjU1IDU0LjA1IDE5Ni44IDQ5Ljk1IDE4OS45IDQ1Ljg1IDE4NC45NSAzOS45Ck0gMjgxIDg4Ljk1ClEgMjgyIDg5LjQgMjgzLjMgODkuNTUgMjg3LjIgOTAuMSAyOTAuOCA5MS4wNSAyOTUuMTUgOTIuMjUgMjk5Ljc1IDkyLjcgMjk5LjUgOTIuNiAyOTkuMjUgOTIuNSAyOTAuOSA4OS45IDI4MSA4OC45NSBaIi8+Cgo8cGF0aCBmaWxsPSIjMTkxQzE0IiBmaWxsLW9wYWNpdHk9IjAuMTk2MDc4NDMxMzcyNTQ5MDIiIHN0cm9rZT0ibm9uZSIgZD0iCk0gMjIyLjM1IDQ3Ljk1ClEgMjE4LjQ1IDQ1LjUgMjE0LjQgNDMuMiAyMTMuOCA0Mi45IDIxMy4zIDQyLjQ1IDIxMS45IDQxLjI1IDIwOS44IDQxLjg1IDIxNiA0NC45IDIyMi4yIDQ3LjkgMjIyLjI1IDQ3Ljk1IDIyMi4zNSA0Ny45NSBaIi8+Cgo8cGF0aCBmaWxsPSIjNEE0OTI3IiBmaWxsLW9wYWNpdHk9IjAuOTY4NjI3NDUwOTgwMzkyMiIgc3Ryb2tlPSJub25lIiBkPSIKTSAyMDkuOCA0MS44NQpRIDIwOC4wNSA0MC45NSAyMDYuMzUgNDAuMDUgMjAzLjU1IDM4LjU1IDIwMC44NSAzNi45NSAxOTcuNCAzNC45IDE5My4zNSAzMy40NQpMIDE5My4zNSAzMy41ClEgMTkyLjggMzMuNCAxOTIuMTUgMzMuMzUgMTk5LjU1IDM2Ljg1IDIwNi41IDQwLjcgMjEwLjk1IDQzLjIgMjE1LjcgNDUuMiAyMTcgNDUuNzUgMjE3Ljk1IDQ2LjQ1IDIxOC4zIDQ2Ljc1IDIxOC40NSA0Ny4yIDIyNS4xIDUwLjIgMjMxLjM1IDUzLjUgMjMxLjQgNTMuNTUgMjMxLjQ1IDUzLjU1IDIzMS45NSA1NC4xIDIzMi40NSA1NC42IDIzMi41IDU0LjY1IDIzMi41NSA1NC42NSAyMzIuNTUgNTcuMiAyMzIuNTUgNTkuNzUgMjMyLjU1IDU5LjggMjMyLjU1IDU5Ljg1IDIzMi4zNSA1OC43NSAyMzEuOSA1Ny44CkwgMjMxLjggNTcuOApRIDIzMS41NSA1OC41NSAyMzEuNiA1OS42IDIzMS42IDU5LjcgMjMxLjYgNTkuNzUgMjMxLjY1IDY1Ljc1IDIzMi44IDcwLjcgMjMyLjggNzAuNzUgMjMyLjggNzAuOCAyMzMuMSA3Mi4xNSAyMzMuNzUgNzEuNCAyMzMuNzUgNzEuMzUgMjMzLjc1IDcxLjMgMjMzLjc1IDcxLjI1IDIzMy43NSA3MS4yIDIzMy41NSA3MC4zIDIzMy42NSA2OS4xIDIzNC40NSA2OC40NSAyMzQuMiA2Ni42NSAyMzQuMTUgNjYuMTUgMjM0LjE1IDY1LjYgMjM0Ljc1IDYzLjk1IDIzNC42NSA2MS41NSAyMzQuNiA1OS4zIDIzNS4zNSA1Ny44IDIzNS4yIDU5Ljg1IDIzNS4zIDYyLjA1CkwgMjM1LjM1IDYyLjA1ClEgMjM2LjI1IDYxLjI1IDIzNi4yNSA1OS41IDIzNi4zIDU4Ljk1IDIzNi43IDU4Ljc1IDIzNi43NSA1NS43IDIzNy41NSA1MyAyMzguNCA1MC4xNSAyMzkuMjUgNDcuNDUgMjM5LjI1IDQ3LjQgMjM5LjI1IDQ3LjM1IDIzOS4yNSA0Ny4yNSAyMzkuMjUgNDcuMiAyNDAuMSA0NSAyNDAuMSA0Mi43IDIzOS44NSA0My4zIDIzOS41IDQzLjc1CkwgMjM5LjUgNDMuNwpRIDIzOS40NSA0My43IDIzOS40IDQzLjcgMjM3LjUgNDkuNyAyMzUuOTUgNTYuMSAyMzUuOTUgNTYuMTUgMjM1Ljk1IDU2LjIgMjM1Ljg1IDU2LjcgMjM1LjUgNTYuNDUgMjM0LjU1IDU1LjQ1IDIzNC44NSA1My4xNSAyMzUuMSA1MS4wNSAyMzQuNSA0OS43NSAyMzQuNSA0OS44IDIzNC41IDQ5LjkgMjM0LjA1IDUyLjE1IDIzMy42NSA1NC41IDIzMy42NSA1NC40NSAyMzMuNjUgNTQuNCAyMzMuNyA1MS44NSAyMzMuMTUgNDkuOSAyMzMuMTUgNDkuOTUgMjMzLjE1IDUwIDIzMi43IDUxLjcgMjMyLjU1IDUzLjYgMjI3LjYgNTAuNiAyMjIuMzUgNDcuOTUgMjIyLjI1IDQ3Ljk1IDIyMi4yIDQ3LjkgMjE2IDQ0LjkgMjA5LjggNDEuODUgWiIvPgoKPHBhdGggZmlsbD0iIzQ0NTgzOCIgc3Ryb2tlPSJub25lIiBkPSIKTSAzMDcuNSA5NS40ClEgMzExLjA1IDk0LjQgMzEzLjYgOTIuNTUgMzE1LjYgOTEuMSAzMTUuOSA4OC4yIDMxNi4wNSA4Ny4xIDMxNS4zIDg2Ljc1IDMxNC44NSA4Ni41NSAzMTQuNSA4Ni44IDMxNC40NSA4Ni44IDMxNC40NSA4Ni45IDMxNC41IDg3LjcgMzE0LjU1IDg4LjQ1IDMxNC41NSA4OC41IDMxNC41NSA4OC42IDMxMi4yIDkzLjMgMzA2LjIgOTQuNjUgMzA1LjIgOTQuODUgMzA0LjEgOTUuMTUgMjk1LjUgOTcuNDUgMjg3LjA1IDk5LjkgMjc4LjYgMTAyLjMgMjcwLjg1IDEwNS40IDI2NS45IDEwNy4zNSAyNjEuMzUgMTA5LjcgMjU0LjI1IDExMy4zNSAyNDcuMiAxMTcuMjUgMjQwLjIgMTIxLjEgMjMzLjQ1IDEyNS4yIDIyNy4xIDEyOS4wNSAyMjEuMDUgMTMzLjE1IDIxOS45NSAxMzMuOSAyMTguNyAxMzQuNDUgMjE4LjYgMTM0Ljc1IDIxOC40NSAxMzQuOTUgMjE4LjQ1IDEzNSAyMTguNDUgMTM1LjA1IDIxNy4xNSAxMzUuODUgMjE3LjY1IDEzNS4wNQpMIDIxNy42IDEzNS4wNQpRIDIxNy41NSAxMzUuMDUgMjE3LjUgMTM1LjEgMjE2LjcgMTM2LjA1IDIxNS42NSAxMzYuNzUgMjE1LjY1IDEzNi44NSAyMTUuNjUgMTM2LjkgMjE1LjY1IDEzNi45NSAyMTUuNjUgMTM3IDIyMi40IDEzMi45IDIyOS4zNSAxMjkuMDUgMjM2LjQ1IDEyNS4xNSAyNDMuMzUgMTIxLjE1IDI1MC4yIDExNy4xNSAyNTcuMzUgMTEzLjMgMjY0LjQgMTA5LjU1IDI3Mi4xNSAxMDYuMyAyNzMuMSAxMDUuOTUgMjc0LjA1IDEwNS41IDI4MS43IDEwMi4yNSAyOTAuNDUgMTAwIDI5OSA5Ny43NSAzMDcuNSA5NS40IFoiLz4KCjxwYXRoIGZpbGw9IiM0NDU4MzgiIGZpbGwtb3BhY2l0eT0iMC45NzY0NzA1ODgyMzUyOTQxIiBzdHJva2U9Im5vbmUiIGQ9IgpNIDMxNi4zIDg0LjU1ClEgMzE2LjMgODQuNSAzMTYuMyA4NC40NSAzMTQuOTUgODQuMiAzMTMuODUgODMuNzUgMzEzLjggODMuNyAzMTMuNyA4My43CkwgMzEzLjcgODMuOApRIDMxMi40IDgzLjcgMzExLjE1IDgzLjQ1IDMxMS42NSA4My43IDMxMi4xNSA4My45NSAzMTIuNyA4NC4xNSAzMTMuMSA4NC41NSAzMTQuMDUgODUuNiAzMTQuOTUgODUuMDUgMzE1LjYgODUuMzUgMzE2IDg1Ljg1IDMxNy41NSA4Ny42NSAzMTYuMjUgODkuOCAzMTQuMDUgOTMuNTUgMzExLjI1IDk2LjcgMzA5Ljk1IDk4LjE1IDMwOC45IDk5Ljc1IDMwNy44IDEwMS41IDMwNi40IDEwMi44IDMwNi40IDEwMi45IDMwNi40IDEwMi45NSAzMDguMSAxMDIuOTUgMzA4Ljg1IDEwMS40IDMwOS41IDEwMC4wNSAzMTAuNTUgOTkgMzE0LjkgOTQuNTUgMzE4LjEgODguODUgMzE4LjA1IDg1LjggMzE2LjMgODQuNTUgWiIvPgoKPHBhdGggZmlsbD0iIzg5OUE2RSIgZmlsbC1vcGFjaXR5PSIwLjk5NjA3ODQzMTM3MjU0OSIgc3Ryb2tlPSJub25lIiBkPSIKTSAyNzcuMSA5NC4yClEgMjc3LjEgOTQuMjUgMjc3LjEgOTQuMyAyNzcuMTUgOTQuMyAyNzcuMiA5NC4zIDI4MC40NSA5My44NSAyODMuMyA5NC40IDI4Mi42NSA5NC43NSAyODEuOTUgOTQuOSAyNzYuMyA5Ni4yNSAyNzAuMTUgOTcuMDUgMjYwLjY1IDk4LjM1IDI1Mi4yNSAxMDAuODUgMjUxLjE1IDEwMS4xNSAyNDkuOTUgMTAxLjE1IDI0OC43IDEwMS4xIDI0OC4zNSAxMDEuNiAyNDguMzUgMTAxLjY1IDI0OC4zNSAxMDEuNyAyNDcuNDUgMTAyLjc1IDI0NS45NSAxMDMuMiAyNDQuOSAxMDQuOSAyNDMgMTA1LjggMjQxLjE1IDEwNi42NSAyMzkuMSAxMDcuMzUgMjM2LjUgMTA4LjIgMjM0LjIgMTA5LjI1IDIzMC41IDExMC45NSAyMjUuNzUgMTExLjcgMjIzLjc1IDExMi44NSAyMjEuMjUgMTEzLjYgMjE0Ljk1IDExNS40IDIwOC4zNSAxMTcgMTk5LjY1IDExOS4xNSAxOTAuOCAxMjEuMSAxODEuOCAxMjMuMSAxNzIuMSAxMjQuNCAxNjUuMDUgMTI1LjM1IDE1Ny4yNSAxMjUuNiAxNDYuNCAxMjUuOTUgMTM1LjcgMTI1LjcgMTMzIDEyNS42NSAxMzAuNDUgMTI1LjY1IDExOS40NSAxMjUuNTUgMTExLjk1IDEyMi4xNQpMIDExMS45NSAxMjIuMQpRIDExMS4zIDEyMS43IDExMi4yIDEyMS45NQpMIDExMi40IDEyMS45NQpRIDExMC45NSAxMjAuODUgMTA5LjU1IDExOS42IDEwNy44IDEyMS43IDEwNS44IDEyMy41NSAxMDAuMTUgMTI4Ljc1IDk1LjQgMTM0Ljk1CkwgOTUuNCAxMzUKUSA5NC4yNSAxMzUuMyA5NC4zIDEzMy43NSA5NS4zIDEzMS43NSA5Ni44NSAxMzAuMyA5Ni44NSAxMzAuMjUgOTYuODUgMTMwLjIgOTYuOCAxMzAuMiA5Ni43NSAxMzAuMiA5Ni4yNSAxMzAuMzUgOTUuNTUgMTMwLjMKTCA5NS40NSAxMzAuMwpRIDkyLjc1IDEyOC41NSA5MC41NSAxMjYuMyA5MC41NSAxMjYuMzUgOTAuNTUgMTI2LjQgOTIuNzUgMTI5LjA1IDk1LjA1IDEzMS41NSA5NS4wNSAxMzEuNiA5NSAxMzEuNiA5NC4zIDEzMi4xIDkzLjcgMTMyLjc1IDkzLjUgMTMyLjM1IDkzLjIgMTMyLjA1IDg3Ljc1IDEyNi42IDgzLjI1IDEyMC4yIDgzLjIgMTIwLjIgODMuMSAxMjAuMiA4Mi42NSAxMjAuMiA4Mi4xNSAxMjAuMiA4Mi4xNSAxMjAuMyA4Mi4xIDEyMC4zIDc1Ljk1IDEyMy44IDcwLjIgMTI3Ljc1IDY2LjE1IDEzMC42IDYyLjkgMTM0LjIgNjAuOTUgMTM2LjM1IDU5Ljc1IDEzOS4yIDYwIDE0MC45IDYxLjU1IDE0MS4zNSA2NC40NSAxNDIuMTUgNjcuOSAxNDEuMyA2OS42IDE0MC44NSA3MS4zIDE0MC40CkwgNzEuMyAxNDAuMzUKUSA3MC41IDE0MC42NSA3MC4zNSAxNDAuMDUgNzMuNCAxMzkgNzcuMyAxMzguNzUgODEuMDUgMTM4LjU1IDg0LjE1IDEzNy42NSA4NS4zIDEzNy4zIDg2LjU1IDEzNy4xNSA5NC4xIDEzNi40IDEwMS44NSAxMzcuMTUgMTA1LjY1IDEzNy41NSAxMDkuMTUgMTM4LjM1IDExMC4zNSAxMzguNiAxMTEuNDUgMTM4LjQ1IDExMS40IDEzOC40NSAxMTEuMzUgMTM4LjQ1IDEwOS4xIDEzNy4yIDEwNy44IDEzNC45NSAxMTAuNDUgMTM1LjA1IDExMi4yNSAxMzUuOSAxMTYgMTM3LjcgMTE5Ljc1IDEzOS40IDEyMy41NSAxNDEuMTUgMTI3Ljg1IDE0Mi40IDEzMy4wNSAxNDMuOSAxMzggMTQ1Ljc1IDE0MS40IDE0NyAxNDQuOTUgMTQ4LjEgMTQ4LjggMTQ4LjMgMTUyIDE0OS4xIDE1NC44NSAxNDkuNzUgMTU4LjEgMTQ5Ljk1IDE2NC45NSAxNTAuNCAxNzIuMDUgMTQ5Ljc1IDE3NC40NSAxNDkuNTUgMTc2LjggMTQ5LjIgMTg2LjI1IDE0Ny43IDE5NC45IDE0NS40IDE5NS41NSAxNDUuMjUgMTk2LjE1IDE0NS4wNSAxOTcuNDUgMTQ1Ljc1IDE5OSAxNDQuOTUgMjAwLjI1IDE0NC4zIDIwMS41IDE0My43IDIwMS41IDE0My42NSAyMDEuNSAxNDMuNiAyMDcuMTUgMTM4LjMgMjEyLjggMTMzLjEgMjE4LjUgMTI3Ljg1IDIyNC42IDEyMy4xIDIzMC43IDExOC4zIDIzNyAxMTMuNyAyMzguOCAxMTIuMzUgMjQxLjIgMTExLjYgMjM2Ljc1IDExOC4wNSAyMzAuODUgMTIzLjA1IDIyOS40IDEyNC4zIDIyNy45NSAxMjUuNiAyMjIuNjUgMTMwLjIgMjE3LjYgMTM1LjA1CkwgMjE3LjY1IDEzNS4wNQpRIDIxNy4xNSAxMzUuODUgMjE4LjQ1IDEzNS4wNSAyMTguNDUgMTM1IDIxOC40NSAxMzQuOTUgMjE4LjYgMTM0Ljc1IDIxOC43IDEzNC40NSAyMTkuOTUgMTMzLjkgMjIxLjA1IDEzMy4xNSAyMjcuMSAxMjkuMDUgMjMzLjQ1IDEyNS4yIDI0MC4yIDEyMS4xIDI0Ny4yIDExNy4yNSAyNTQuMjUgMTEzLjM1IDI2MS4zNSAxMDkuNyAyNjUuOSAxMDcuMzUgMjcwLjg1IDEwNS40IDI3OC42IDEwMi4zIDI4Ny4wNSA5OS45IDI5NS41IDk3LjQ1IDMwNC4xIDk1LjE1IDMwNS4yIDk0Ljg1IDMwNi4yIDk0LjY1IDMxMi4yIDkzLjMgMzE0LjU1IDg4LjYgMzE0LjU1IDg4LjUgMzE0LjU1IDg4LjQ1IDMxNC41IDg3LjcgMzE0LjQ1IDg2LjkgMzE0LjQ1IDg2LjggMzE0LjUgODYuOCAzMTQuODUgODYuNTUgMzE1LjMgODYuNzUgMzE2LjA1IDg3LjEgMzE1LjkgODguMiAzMTUuNiA5MS4xIDMxMy42IDkyLjU1IDMxMS4wNSA5NC40IDMwNy41IDk1LjQgMjk5IDk3Ljc1IDI5MC40NSAxMDAgMjgxLjcgMTAyLjI1IDI3NC4wNSAxMDUuNSAyNzMuMSAxMDUuOTUgMjcyLjE1IDEwNi4zIDI2NC40IDEwOS41NSAyNTcuMzUgMTEzLjMgMjUwLjIgMTE3LjE1IDI0My4zNSAxMjEuMTUgMjM2LjQ1IDEyNS4xNSAyMjkuMzUgMTI5LjA1IDIyMi40IDEzMi45IDIxNS42NSAxMzcgMjE1LjYgMTM3IDIxNS41NSAxMzcuMDUgMjE0LjM1IDEzOC4yIDIxMy4xIDEzOS4zNSAyMTMuMSAxMzkuNCAyMTMuMSAxMzkuNDUgMjIwLjQgMTM2LjMgMjI3LjQgMTMyLjMgMjI5LjY1IDEzMS4wNSAyMzEuODUgMTI5Ljg1IDIzOC40IDEyNi4yNSAyNDUuMSAxMjIuNzUgMjUyLjI1IDExOS4wNSAyNTkuNDUgMTE1LjQ1IDI2My4xNSAxMTMuNTUgMjY3IDExMS45NSAyNzQuNyAxMDguNzUgMjgzLjQ1IDEwNi44IDI4OC4xIDEwNS44IDI5Mi45IDEwNC45NSAyOTkuMjUgMTAzLjggMzA2LjIgMTAzLjA1IDMwNi4yNSAxMDMgMzA2LjMgMTAyLjk1IDMwNi4zNSAxMDIuOTUgMzA2LjQgMTAyLjk1IDMwNi40IDEwMi45IDMwNi40IDEwMi44IDMwNy44IDEwMS41IDMwOC45IDk5Ljc1IDMwOS45NSA5OC4xNSAzMTEuMjUgOTYuNyAzMTQuMDUgOTMuNTUgMzE2LjI1IDg5LjggMzE3LjU1IDg3LjY1IDMxNiA4NS44NSAzMTUuNiA4NS4zNSAzMTQuOTUgODUuMDUgMzE0LjA1IDg1LjYgMzEzLjEgODQuNTUgMzEyLjcgODQuMTUgMzEyLjE1IDgzLjk1IDMxMS42NSA4My43IDMxMS4xNSA4My40NSAzMTIuNCA4My43IDMxMy43IDgzLjgKTCAzMTMuNyA4My43ClEgMzEyLjQ1IDgzLjI1IDMxMS4yIDgyLjc1IDMwOC43IDgxLjggMzA2LjA1IDgxIDMwMiA3OS43NSAyOTcuOSA3OC42NSAyOTYuOCA3OC4zNSAyOTUuNjUgNzcuOTUgMjkxLjE1IDc2LjQ1IDI4NS42IDc1LjggMjg1LjA1IDc3Ljc1IDI4NC40IDc5LjU1IDI4MS40IDg3LjUgMjc3LjEgOTQuMDUgMjc3LjEgOTQuMSAyNzcuMSA5NC4yCk0gMjgzLjMgODkuNTUKUSAyODIgODkuNCAyODEgODguOTUgMjkwLjkgODkuOSAyOTkuMjUgOTIuNSAyOTkuNSA5Mi42IDI5OS43NSA5Mi43IDI5NS4xNSA5Mi4yNSAyOTAuOCA5MS4wNSAyODcuMiA5MC4xIDI4My4zIDg5LjU1Ck0gMzAxLjMgODAuNjUKUSAyOTguOTUgNzkuOTUgMjk2LjU1IDc5LjY1IDI5My43NSA3OS4zIDI5MS43IDc4LjUgMzAyIDc5LjEgMzA5LjMgODIuNyAzMDkuMzk2ODc1IDgyLjc5Njg3NSAzMDkuNiA4Mi44NSAzMDUuNTQzNTU0Njg3NSA4MS44OTgwNDY4NzUgMzAxLjMgODAuNjUgWiIvPgoKPHBhdGggZmlsbD0iIzQ1NTkzOSIgc3Ryb2tlPSJub25lIiBkPSIKTSAyOTYuNTUgNzkuNjUKUSAyOTguOTUgNzkuOTUgMzAxLjMgODAuNjUgMzA1LjU0MzU1NDY4NzUgODEuODk4MDQ2ODc1IDMwOS42IDgyLjg1IDMwOS4zOTY4NzUgODIuNzk2ODc1IDMwOS4zIDgyLjcgMzAyIDc5LjEgMjkxLjcgNzguNSAyOTMuNzUgNzkuMyAyOTYuNTUgNzkuNjUgWiIvPgoKPHBhdGggZmlsbD0iIzhDOUY3MSIgc3Ryb2tlPSJub25lIiBkPSIKTSAyNjQuNTUgOTYKUSAyNjQuNSA5NiAyNjQuNDUgOTYgMjU1LjYgOTYuNTUgMjQ5LjEgOTkuNCAyNDkuNSAxMDAgMjUwLjQ1IDk5LjUgMjUwLjg1IDk5LjI1IDI1MS4yIDk5LjIgMjUxLjYgOTkuMTUgMjUxLjA1IDk5LjQgMjUwLjcgMTAwIDI1MS45IDk5LjU1IDI1Ny44IDk3LjM1IDI2NC41NSA5NiBaIi8+Cgo8cGF0aCBmaWxsPSIjNUM3MzNGIiBmaWxsLW9wYWNpdHk9IjAuOTk2MDc4NDMxMzcyNTQ5IiBzdHJva2U9Im5vbmUiIGQ9IgpNIDI0OS44NSA4My4yNQpMIDI0OS44NSA4My4xNQpRIDI0Ni4xIDg1LjQ1IDI0Mi4xNSA4NyAyNDQuMDUgODIuNiAyNDIuNyA3Ny4zIDI0Mi42IDc2Ljk1IDI0Mi41NSA3Ni41NSAyNDIuNDUgNzYuNTUgMjQyLjQ1IDc2LjUgMjQyIDc1LjM1IDI0MS4zIDc0LjQ1IDI0MS4yNSA3NC40NSAyNDEuMiA3NC40NSAyNDAuMSA3NCAyNDAuMSA3MwpMIDI0MC4xIDcyLjk1ClEgMjM5IDcyLjkgMjM4LjUgNzMuNSAyMzguNDUgNzMuNSAyMzguNCA3My41IDIzNS41IDcyLjk1IDIzMy4wNSA3NCAyMzMgNzQgMjMzIDczLjk1IDIzMi40IDcxLjg1IDIzMS44IDY5LjcgMjMxLjggNjkuNjUgMjMxLjggNjkuNiAyMzAuNyA2Ni40IDIyOS41IDYzLjI1CkwgMjI5LjQ1IDYzLjI1ClEgMjI5LjIgNjEuOSAyMjguMyA2MS4yIDIyOC4wNSA2Mi4yIDIyOC4zIDYzLjIgMjI5LjcgNjkgMjMxLjcgNzQuNyAyMjUuNCA3OCAyMjIuNiA4NC44IDIyMC45IDg4Ljk1IDIyMS41IDk0LjIgMjIxLjUgOTQuMjUgMjIxLjQ1IDk0LjMgMjIxLjI1IDk0LjY1IDIyMSA5NS4wNSAyMjEgOTUuMyAyMjAuOSA5NS4zNSAyMTguNjUgOTYuNyAyMTYuMjUgOTcuODUgMjE2LjI1IDk3LjkgMjE2LjIgOTcuOSAyMTYgOTguMDUgMjE1LjkgOTguMyAyMTUuOCA5OC4zIDIxNS44IDk4LjM1IDIxNSA5OC44NSAyMTMuOCA5OC45NSAyMTIuOCA5OS44IDIxMS4yNSAxMDAuMDUgMjA5Ljg1IDEwMC4yNSAyMTAuNCAxMDAuNzUKTCAyMTAuNDUgMTAwLjgKUSAyMDguMzUgMTAxLjI1IDIwNi4wNSAxMDEuNTUgMTk5LjA1IDEwMi41IDE5Mi4yNSAxMDMuNSAxODMuODUgMTA0Ljc1IDE3NS44NSAxMDYuMzUgMTcxLjM1IDEwNy4yNSAxNjYuMzUgMTA3Ljc1IDE2NC41NSAxMDcuOTUgMTYyLjcgMTA3Ljk1IDE1OCAxMDggMTUyLjk1IDEwOC4yNSAxNDkuMTUgMTA4LjQgMTQ1LjQgMTA4LjY1IDE0Mi43NSAxMDguODUgMTQwLjIgMTA5LjE1IDEzNS4wNSAxMDkuNyAxMzAuMSAxMDguOTUgMTI3LjY1IDEwOC42IDEyNS4yIDEwOC40IDExOC44IDEwNy45IDExNC41IDEwNS40IDExNC40NSAxMDUuNCAxMTQuNCAxMDUuNCAxMTMuODUgMTA1LjY1IDExMy4zIDEwNS40IDExMy4zIDEwNS4zIDExMy4zIDEwNS4yNSAxMTMuMSAxMDMuOTUgMTEzLjIgMTAyLjM1IDExMy42IDk0LjYgMTE0LjI1IDg3IDExNC42IDgzLjQ1IDExNSA4MC4wNSAxMTUuMDUgNzkuNDUgMTE0LjY1IDgwLjA1IDExNC42IDgwLjA1IDExNC41NSA4MC4xIDExNC4yIDgxLjEgMTEzLjk1IDgyLjEgMTEzLjUgODMuOCAxMTMuMjUgODUuNyAxMTMgODYuOSAxMTIuOTUgODguMgpMIDExMi45IDg4LjQKUSAxMTIuODUgODguOCAxMTIuODUgODkuMjUgMTEyLjggODkuOCAxMTIuOCA5MC4zIDExMi44IDkwLjM1IDExMi44IDkwLjQgMTEyLjcgOTIuNTUgMTEyLjYgOTQuNTUgMTEyLjQgOTguMTUgMTExLjQ1IDEwMC44NSAxMTEuNCAxMDAuODUgMTExLjM1IDEwMC45IDEwOS4yNSAxMDIgMTA2Ljk1IDEwMi45NSAxMDYuOTUgMTAzIDEwNi45NSAxMDMuMDUgMTA1Ljk1IDEwNC4yNSAxMDQuOCAxMDUuMjUgMTA1LjE1IDEwNS43NSAxMDUuNTUgMTA2LjIgMTA1LjU1IDEwNi4yNSAxMDUuNjUgMTA2LjI1IDEwNS42NSAxMDYuMTUgMTA1LjY1IDEwNi4xIDEwNS42NSAxMDUuNzUgMTA1LjY1IDEwNS40IDEwNy4xIDEwNC43IDEwOC40NSAxMDQKTCAxMDguNDUgMTA0LjA1ClEgMTA4LjUgMTA0Ljg1IDEwOC4xNSAxMDYuMjUgMTA3LjggMTA3LjUgMTA3LjcgMTA5LjA1IDEwNy43IDEwOS4xIDEwNy43NSAxMDkuMTUgMTA3LjkgMTA5LjQgMTA4LjA1IDEwOS43NSAxMDguMDUgMTA5LjggMTA4LjA1IDEwOS45IDEwNy44IDExMS41IDEwOC4yIDExMi45IDEwOC4yIDExMyAxMDguMTUgMTEzCkwgMTA4LjA1IDExMy4wNQpRIDEwNy40IDExNi44NSAxMDguOSAxMTkuMTUKTCAxMDguOSAxMTkuMgpRIDEwNS43NSAxMjEuMjUgMTAzLjEgMTIzLjc1IDEwMyAxMjMuNzUgMTAzIDEyMy44IDk5LjkgMTI2LjkgOTYuODUgMTMwLjEgOTYuODUgMTMwLjE1IDk2Ljg1IDEzMC4yIDk2Ljg1IDEzMC4yNSA5Ni44NSAxMzAuMyA5NS4zIDEzMS43NSA5NC4zIDEzMy43NSA5NC4yNSAxMzUuMyA5NS40IDEzNQpMIDk1LjQgMTM0Ljk1ClEgMTAwLjE1IDEyOC43NSAxMDUuOCAxMjMuNTUgMTA3LjggMTIxLjcgMTA5LjU1IDExOS42IDExMC45NSAxMjAuODUgMTEyLjQgMTIxLjk1CkwgMTEyLjIgMTIxLjk1ClEgMTExLjMgMTIxLjcgMTExLjk1IDEyMi4xCkwgMTExLjk1IDEyMi4xNQpRIDExOS40NSAxMjUuNTUgMTMwLjQ1IDEyNS42NSAxMzMgMTI1LjY1IDEzNS43IDEyNS43IDE0Ni40IDEyNS45NSAxNTcuMjUgMTI1LjYgMTY1LjA1IDEyNS4zNSAxNzIuMSAxMjQuNCAxODEuOCAxMjMuMSAxOTAuOCAxMjEuMSAxOTkuNjUgMTE5LjE1IDIwOC4zNSAxMTcgMjE0Ljk1IDExNS40IDIyMS4yNSAxMTMuNiAyMjMuNzUgMTEyLjg1IDIyNS43NSAxMTEuNyAyMzAuNSAxMTAuOTUgMjM0LjIgMTA5LjI1IDIzNi41IDEwOC4yIDIzOS4xIDEwNy4zNSAyNDEuMTUgMTA2LjY1IDI0MyAxMDUuOCAyNDQuOSAxMDQuOSAyNDUuOTUgMTAzLjIgMjQ3LjQ1IDEwMi43NSAyNDguMzUgMTAxLjcgMjQ4LjM1IDEwMS42NSAyNDguMzUgMTAxLjYgMjQ4LjcgMTAxLjEgMjQ5Ljk1IDEwMS4xNSAyNTEuMTUgMTAxLjE1IDI1Mi4yNSAxMDAuODUgMjYwLjY1IDk4LjM1IDI3MC4xNSA5Ny4wNSAyNzYuMyA5Ni4yNSAyODEuOTUgOTQuOSAyODIuNjUgOTQuNzUgMjgzLjMgOTQuNCAyODAuNDUgOTMuODUgMjc3LjIgOTQuMyAyNzcuMTUgOTQuMyAyNzcuMSA5NC4zIDI3Ny4wNSA5NC4zIDI3NyA5NC4zNSAyNzYuMiA5NC43IDI3NSA5NC40CkwgMjc1IDk0LjUKUSAyNjkuNjUgOTUuMTUgMjY0LjU1IDk2IDI1Ny44IDk3LjM1IDI1MS45IDk5LjU1IDI1MC43IDEwMCAyNTEuMDUgOTkuNCAyNTEuNiA5OS4xNSAyNTEuMiA5OS4yIDI1MC44NSA5OS4yNSAyNTAuNDUgOTkuNSAyNDkuNSAxMDAgMjQ5LjEgOTkuNCAyNDkuMSA5OS4zNSAyNDkuMSA5OS4zIDI0OC42NSA5OC40NSAyNDguNiA5Ny4yIDI0OC43IDk3LjE1IDI0OC43IDk3LjEKTCAyNDguOCA5Ni45ClEgMjQ4LjMgOTYuNSAyNDguMjUgOTUuNQpMIDI0OC4yIDk1LjUKUSAyNDguMTUgOTYuNSAyNDggOTcuMzUgMjQ3Ljk1IDk3LjM1IDI0Ny45NSA5Ny4zIDI0Ny40IDk2LjQgMjQ3LjMgOTUuMDUgMjQ3LjQgODguMDUgMjQ5LjggODMuMzUgMjQ5Ljg1IDgzLjMgMjQ5Ljg1IDgzLjI1Ck0gMjM2LjggODIuMTUKUSAyMzcuMDUgODIuNjUgMjM3LjI1IDgzLjIgMjM3LjI1IDgzLjI1IDIzNy4zIDgzLjI1IDIzNy4wNSA4Ny45IDIzNS4wNSA5MC43NSAyMzQuNjUgOTEuMyAyMzQuNCA5MS45IDIzNC4xNSA5Mi41IDIzMy45IDkzLjEgMjMzLjM1IDkzLjY1IDIzMi41NSA5My45IDIzMi41IDkzLjk1IDIzMi40NSA5My45NSAyMzMuOTUgOTIuMDUgMjM0Ljc1IDg5LjQ1IDIzNC43NSA4OS4zNSAyMzQuNzUgODkuMyAyMzMuOCA5MC40NSAyMzIuOTUgOTEuNyAyMzIuMSA5Mi45IDIzMC41IDkzLjQ1IDIyOS44IDkyLjYgMjI5LjM1IDkxLjQKTCAyMjkuMjUgOTEuNApRIDIyOS4yNSA5MC43NSAyMjkuMjUgOTAuMTUgMjI5LjI1IDkwLjEgMjI5LjI1IDkwLjA1IDIzMC44IDg1LjcgMjMzLjkgODMgMjM0LjE1IDgyLjc1IDIzNC43NSA4Mi44NSAyMzUuNTUgODMuNiAyMzUuOCA4My4xIDIzNS44NSA4My4wNSAyMzUuODUgODMgMjM1LjQgODIuMiAyMzQuNSA4MgpMIDIzNC42IDgyClEgMjM0Ljk1IDgyIDIzNS4yNSA4MiAyMzUuNyA4MS43IDIzNC43NSA4MS42NSAyMzQuNyA4MS42NSAyMzQuNiA4MS42NSAyMzMuNSA4MiAyMzIuNzUgODIuNjUgMjMyLjk1IDgxLjc1IDIzNC4xIDgxLjM1IDIzNC4xNSA4MS4zNSAyMzQuMTUgODEuMyAyMzQuODUgODEuMyAyMzUuNiA4MS4zIDIzNS42NSA4MS4zIDIzNS43IDgxLjMgMjM2LjMgODEuNiAyMzYuNzUgODIuMSAyMzYuNzUgODIuMTUgMjM2LjggODIuMTUgWiIvPgoKPHBhdGggZmlsbD0iI0U3RUFFMSIgc3Ryb2tlPSJub25lIiBkPSIKTSAyMzcuMjUgODMuMgpRIDIzNy4wNSA4Mi42NSAyMzYuOCA4Mi4xNSAyMzYuNzUgODIuMTUgMjM2Ljc1IDgyLjEgMjM2LjMgODEuNiAyMzUuNyA4MS4zIDIzNS42NSA4MS4zIDIzNS42IDgxLjMgMjM0Ljg1IDgxLjMgMjM0LjE1IDgxLjMgMjM0LjE1IDgxLjM1IDIzNC4xIDgxLjM1IDIzMi45NSA4MS43NSAyMzIuNzUgODIuNjUgMjMzLjUgODIgMjM0LjYgODEuNjUgMjM0LjcgODEuNjUgMjM0Ljc1IDgxLjY1IDIzNS43IDgxLjcgMjM1LjI1IDgyIDIzNC45NSA4MiAyMzQuNiA4MgpMIDIzNC41IDgyClEgMjM1LjQgODIuMiAyMzUuODUgODMgMjM1Ljg1IDgzLjA1IDIzNS44IDgzLjEgMjM1LjU1IDgzLjYgMjM0Ljc1IDgyLjg1IDIzNC4xNSA4Mi43NSAyMzMuOSA4MyAyMzAuOCA4NS43IDIyOS4yNSA5MC4wNSAyMjkuMjUgOTAuMSAyMjkuMjUgOTAuMTUgMjI5LjI1IDkwLjc1IDIyOS4yNSA5MS40CkwgMjI5LjM1IDkxLjQKUSAyMjkuOCA5Mi42IDIzMC41IDkzLjQ1IDIzMi4xIDkyLjkgMjMyLjk1IDkxLjcgMjMzLjggOTAuNDUgMjM0Ljc1IDg5LjMgMjM0Ljc1IDg5LjM1IDIzNC43NSA4OS40NSAyMzMuOTUgOTIuMDUgMjMyLjQ1IDkzLjk1IDIzMi41IDkzLjk1IDIzMi41NSA5My45IDIzMy4zNSA5My42NSAyMzMuOSA5My4xIDIzNC4xNSA5Mi41IDIzNC40IDkxLjkgMjM0LjY1IDkxLjMgMjM1LjA1IDkwLjc1IDIzNy4wNSA4Ny45IDIzNy4zIDgzLjI1IDIzNy4yNSA4My4yNSAyMzcuMjUgODMuMiBaIi8+Cgo8cGF0aCBmaWxsPSIjN0M4ODY3IiBmaWxsLW9wYWNpdHk9IjAuOTk2MDc4NDMxMzcyNTQ5IiBzdHJva2U9Im5vbmUiIGQ9IgpNIDI1MS41NSA3MS44ClEgMjUxLjUgNzEuOCAyNTEuNDUgNzEuOCAyNDkuNSA3NCAyNDUuNiA3NC4yIDI0NS42IDc0LjMgMjQ1LjU1IDc0LjM1IDI0NS4zNSA3NS4xIDI0Ni41NSA3NS4wNSAyNDcuMiA3NS4yIDI0Ni41IDc1LjcgMjQ2LjE1IDc1Ljk1IDI0NS43IDc2LjI1IDI0NC4xNSA3Ny4yNSAyNDIuNTUgNzYuNTUgMjQyLjYgNzYuOTUgMjQyLjcgNzcuMyAyNDQuMDUgODIuNiAyNDIuMTUgODcgMjQ2LjEgODUuNDUgMjQ5Ljg1IDgzLjE1CkwgMjQ5Ljg1IDgzLjI1ClEgMjUyLjI1IDc3LjMgMjU1LjkgNzIuNgpMIDI1NS45IDcyLjUKUSAyNTUuNyA3Mi41IDI1NS41NSA3Mi40IDI1NS40NSA3Mi4yNSAyNTUuNCA3Mi4yNSAyNTMuMjUgNzIuMTUgMjUxLjU1IDcxLjggWiIvPgoKPHBhdGggZmlsbD0iIzY0NjMzRiIgZmlsbC1vcGFjaXR5PSIwLjk4ODIzNTI5NDExNzY0NzEiIHN0cm9rZT0ibm9uZSIgZD0iCk0gMjQzLjQgNjIuNApMIDI0My40NSA2Mi40ClEgMjQzLjQ1IDYxLjY1IDI0Mi44IDYyLjMgMjQyLjcgNjIuMyAyNDIuNjUgNjIuMjUgMjQyLjEgNjEuOSAyNDEuNDUgNjAuOTUgMjQxLjQgNjAuOTUgMjQxLjMgNjAuOTUgMjQwLjkgNjAuOTUgMjQwLjYgNjEuMSAyNDAuNiA2MS4xNSAyNDAuNiA2MS4yIDI0MC44NSA2Mi43NSAyNDAuNDUgNjQuMjUgMjQwLjQ1IDY0LjMgMjQwLjQ1IDY0LjM1IDIzOS4zIDY1LjQgMjM4LjA1IDY2LjMgMjM4LjcgNjcuMjUgMjM5LjcgNjYuMyAyNDAuMTUgNjUuODUgMjQwLjYgNjUuNDUgMjQwLjYgNjUuNCAyNDAuNiA2NS4zNSAyNDEuODUgNjQuNSAyNDIuOCA2My4zIDI0Mi44NSA2My4yNSAyNDIuOSA2My4yNSAyNDIuOSA2My4yIDI0Mi45NSA2My4yIDI0My4yNSA2Mi45IDI0My40IDYyLjQgWiIvPgoKPHBhdGggZmlsbD0iIzhEOTg3OSIgZmlsbC1vcGFjaXR5PSIwLjk5NjA3ODQzMTM3MjU0OSIgc3Ryb2tlPSJub25lIiBkPSIKTSAyNDMuNDUgNjQuNQpRIDI0My40NSA2NC40NSAyNDMuNCA2NC4zNSAyNDMuNCA2NC4zIDI0My4zNSA2NC4yNSAyNDMuMDUgNjMuODUgMjQyLjkgNjMuMjUgMjQyLjg1IDYzLjI1IDI0Mi44IDYzLjMgMjQxLjg1IDY0LjUgMjQwLjYgNjUuMzUgMjQwLjYgNjUuNCAyNDAuNiA2NS40NSAyNDAuNiA2NS41IDI0MC42IDY1LjYgMjQwLjM1IDY3IDI0MCA2OC4yNSAyNDAgNjguMyAyNDAgNjguNCAyNDAgNjguNDUgMjQwIDY4LjUgMjQxLjMgNjguMjUgMjQxLjc1IDY3LjE1IDI0MS44IDY3IDI0MS44IDY2LjggMjQyLjIgNjUuOTUgMjQyLjEgNjcuNCAyNDIuMSA2Ny43NSAyNDIuNCA2Ny42NSAyNDMuMjUgNjYuODUgMjQzLjQ1IDY1LjI1IDI0My41IDY0Ljk1IDI0My40NSA2NC41IFoiLz4KCjxwYXRoIGZpbGw9IiM0RjQ0MjEiIGZpbGwtb3BhY2l0eT0iMC45ODAzOTIxNTY4NjI3NDUxIiBzdHJva2U9Im5vbmUiIGQ9IgpNIDI0NS4yIDYyLjE1ClEgMjQ1LjIgNjIuMSAyNDUuMiA2Mi4wNQpMIDI0NS4xNSA2Mi4wNQpRIDI0Ni4wNSA1OS44IDI0Ni4wNSA1Ny4yIDI0NC42IDYwLjY1IDI0My40IDY0LjM1IDI0My40NSA2NC40NSAyNDMuNDUgNjQuNSAyNDMuNSA2NC45NSAyNDMuNDUgNjUuMjUgMjQzLjI1IDY2Ljg1IDI0Mi40IDY3LjY1IDI0Mi4xIDY3Ljc1IDI0Mi4xIDY3LjQgMjQyLjIgNjUuOTUgMjQxLjggNjYuOCAyNDEuOCA2NyAyNDEuNzUgNjcuMTUgMjQxLjMgNjguMjUgMjQwIDY4LjUgMjM5LjkgNjguNSAyMzkuODUgNjguNTUgMjM3Ljk1IDY5LjYgMjM2LjEgNzAuNyAyMzYuNSA3MS45NSAyMzcuODUgNzEgMjM4LjQgNzAuNiAyMzkuMTUgNzAuMzUgMjM5LjE1IDcwLjI1IDIzOS4xNSA3MC4yIDI0MC41NSA2OS42IDI0MS41NSA2OS40CkwgMjQxLjU1IDY5LjYKUSAyNDEuNTUgNzAgMjQxLjU1IDcwLjQ1IDI0MS4zNSA3Mi4zIDI0MS45NSA3My4zNSAyNDIgNzMuMzUgMjQyLjA1IDczLjM1IDI0Mi43NSA3MyAyNDIuNzUgNzEuOSAyNDIuNzUgNzEuOCAyNDIuOCA3MS41NSAyNDIuMiA3MC44NSAyNDIuMiA2OS4zNSAyNDIuMiA2OS4xIDI0Mi4zIDY4LjYgMjQyLjMgNjguMyAyNDIuNjUgNjguMjUgMjQyLjM1IDY5LjQ1IDI0My4xNSA2OS41NQpMIDI0My4xNSA2OS41ClEgMjQzLjggNjUuNDUgMjQ1LjIgNjIuMTUgWiIvPgoKPHBhdGggZmlsbD0iIzUwNDUyMiIgZmlsbC1vcGFjaXR5PSIwLjk4NDMxMzcyNTQ5MDE5NiIgc3Ryb2tlPSJub25lIiBkPSIKTSAyNTAuODUgNjcuMTUKUSAyNTEgNjcuMDUgMjUxLjE1IDY3IDI1NC40NSA2NS44NSAyNTcuODUgNjUuNDUKTCAyNTcuODUgNjUuNgpRIDI1Ny45NSA2NS42IDI1Ny45NSA2NS41NSAyNTggNjUuNDUgMjU4LjA1IDY1LjQ1IDI1OS4wNSA2NC45IDI1OS45NSA2NC4yNSAyNTkuOTUgNjQuMiAyNTkuOSA2NC4yIDI1OC45IDYzLjkgMjU3Ljc1IDY0LjEKTCAyNTcuNzUgNjQuMgpRIDI1My4xIDY1LjIgMjQ5LjM1IDY3LjA1IDI0OS45IDY3Ljc1IDI1MC44NSA2Ny4xNSBaIi8+Cgo8cGF0aCBmaWxsPSIjNDczQzE5IiBmaWxsLW9wYWNpdHk9IjAuOTQxMTc2NDcwNTg4MjM1MyIgc3Ryb2tlPSJub25lIiBkPSIKTSAyNDcuOSA0OS45ClEgMjQ1LjYgNTIuMSAyNDMuODUgNTQuOSAyNDIuMSA1Ny43NSAyNDAuNiA2MC4yNSAyNDAuNTUgNjAuMjUgMjQwLjQ1IDYwLjI1IDI0MC40NSA2MC42NSAyNDAuNSA2MS4wNSAyNDAuNTUgNjEuMSAyNDAuNiA2MS4xIDI0MC45IDYwLjk1IDI0MS4zIDYwLjk1IDI0MS40IDYwLjk1IDI0MS40NSA2MC45NSAyNDEuNDUgNjAuOSAyNDEuNCA2MC45CkwgMjQxLjMgNjAuODUKUSAyNDEuNzUgNTkuNyAyNDIuNzUgNTguNCAyNDUuNyA1NC41NSAyNDcuOSA0OS45IFoiLz4KCjxwYXRoIGZpbGw9IiM4NzczNDkiIGZpbGwtb3BhY2l0eT0iMC45NjA3ODQzMTM3MjU0OTAyIiBzdHJva2U9Im5vbmUiIGQ9IgpNIDI1My4zNSA1NS4zNQpRIDI1My42IDU0LjA1IDI1My43NSA1Mi44NQpMIDI1My43IDUyLjkKUSAyNTIuOCA1NC4xIDI1Mi4wNSA1NS41IDI1Mi40IDU0LjYgMjUyLjI1IDUzLjkgMjUxLjU1IDU1LjE1IDI1MC45NSA1Ni40IDI1MC4zIDU3LjcgMjQ5LjM1IDU4LjY1IDI0OS40NSA1Ny43NSAyNDkuOSA1Ni43IDI1MC40NSA1NS40NSAyNDkuOTUgNTQuNCAyNDkuNiA1NC45IDI0OS40IDU1LjcgMjQ4LjkgNTcuNjUgMjQ3LjkgNTkuMTUgMjQ3LjkgNTkuMiAyNDcuOSA1OS4yNQpMIDI0Ny45NSA1OS4yNQpRIDI0OC4xNSA2MC4yIDI0Ny42NSA2MS4xIDI0Ny45NSA2Mi42IDI0OC40IDYwLjcgMjQ4LjY1IDU5LjU1IDI0OS4zNSA1OC43NSAyNDkuNTUgNTguOTUgMjQ5LjEgNTkuNjUgMjQ4LjEgNjEuMiAyNDguMzUgNjMuNCAyNDkuMDUgNjIuODUgMjQ5LjM1IDYxLjk1IDI0OS41IDYxLjUgMjQ5LjQ1IDYyLjMgMjUwLjA1IDYyLjY1IDI1MC40IDYxLjQgMjUwLjU1IDYwLjggMjUwLjggNjAuMiAyNTEuMSA1OS40NSAyNTEuNjUgNTkuMTUKTCAyNTEuNiA1OS4xNQpRIDI1Mi40NSA1Ny4zIDI1My4zNSA1NS41IDI1My4zNSA1NS40IDI1My4zNSA1NS4zNSBaIi8+Cgo8cGF0aCBmaWxsPSIjRTJFNERBIiBmaWxsLW9wYWNpdHk9IjAuOTk2MDc4NDMxMzcyNTQ5IiBzdHJva2U9Im5vbmUiIGQ9IgpNIDI2NC40NSA1NS42CkwgMjY0LjQ1IDU1LjU1ClEgMjYyLjYgNTYuNCAyNjEuMTUgNTcuNjUgMjYxLjEgNTcuNjUgMjYxLjA1IDU3LjcgMjU4LjUgNTkuMDUgMjU1LjQ1IDYwLjQ1IDI1NS4zNSA2MC40NSAyNTUuMzUgNjAuNSAyNTUgNjEuOTUgMjU0LjEgNjIuMwpMIDI1NC4wNSA2Mi4zClEgMjUzLjg1IDYxLjQgMjUzLjM1IDYwLjk1CkwgMjUzLjUgNjAuODUKUSAyNTIuNjUgNjEuMTUgMjUxLjc1IDYyLjI1IDI1MS4xIDYzLjEgMjUwLjU1IDYyLjkgMjUyLjYgNjAuOSAyNTQuMiA1OC41IDI1NC4yIDU4LjQ1IDI1NC4yIDU4LjQgMjU0LjE1IDU4LjQgMjU0LjEgNTguNCAyNTMuNTUgNTguNiAyNTMuMjUgNTguNTUgMjUzLjIgNTguNTUgMjUzLjE1IDU4LjU1IDI1Mi40IDU4Ljg1IDI1MS42NSA1OS4xNSAyNTEuMSA1OS40NSAyNTAuOCA2MC4yIDI1MC41NSA2MC44IDI1MC40IDYxLjQgMjUwLjA1IDYyLjY1IDI0OS40NSA2Mi4zIDI0OS41IDYxLjUgMjQ5LjM1IDYxLjk1IDI0OS4wNSA2Mi44NSAyNDguMzUgNjMuNCAyNDguMSA2MS4yIDI0OS4xIDU5LjY1IDI0OS41NSA1OC45NSAyNDkuMzUgNTguNzUgMjQ4LjY1IDU5LjU1IDI0OC40IDYwLjcgMjQ3Ljk1IDYyLjYgMjQ3LjY1IDYxLjEgMjQ4LjE1IDYwLjIgMjQ3Ljk1IDU5LjI1CkwgMjQ3LjkgNTkuMjUKUSAyNDcgNjAuNjUgMjQ2Ljk1IDYyLjggMjQ2Ljg1IDY1IDI0NS45NSA2Ni4zIDI0NS45NSA2Ni4yNSAyNDUuOTUgNjYuMiAyNDYuMjUgNjMuMzUgMjQ2LjggNjAuMSAyNDYuNzUgNjAuMSAyNDYuNyA2MC4xNSAyNDYuMDUgNjEuMSAyNDUuMiA2MS45NSAyNDUuMiA2MiAyNDUuMiA2Mi4wNSAyNDUuMiA2Mi4xIDI0NS4yIDYyLjE1IDI0My44IDY1LjQ1IDI0My4xNSA2OS41CkwgMjQzLjE1IDY5LjU1ClEgMjQyLjM1IDY5LjQ1IDI0Mi42NSA2OC4yNSAyNDIuMyA2OC4zIDI0Mi4zIDY4LjYgMjQyLjIgNjkuMSAyNDIuMiA2OS4zNSAyNDIuMiA3MC44NSAyNDIuOCA3MS41NSAyNDIuNzUgNzEuOCAyNDIuNzUgNzEuOSAyNDIuNzUgNzMgMjQyLjA1IDczLjM1IDI0MiA3My4zNSAyNDEuOTUgNzMuMzUgMjQxLjM1IDcyLjMgMjQxLjU1IDcwLjQ1CkwgMjQxLjUgNzAuNDUKUSAyNDEuMyA3MS41IDI0MS4wNSA3Mi40IDI0MS4wNSA3My41IDI0MS4zIDc0LjM1IDI0MS4zIDc0LjQgMjQxLjMgNzQuNDUgMjQyIDc1LjM1IDI0Mi40NSA3Ni41IDI0Mi40NSA3Ni41NSAyNDIuNTUgNzYuNTUgMjQ0LjE1IDc3LjI1IDI0NS43IDc2LjI1IDI0Ni4xNSA3NS45NSAyNDYuNSA3NS43IDI0Ny4yIDc1LjIgMjQ2LjU1IDc1LjA1IDI0NS4zNSA3NS4xIDI0NS41NSA3NC4zNSAyNDUuNiA3NC4zIDI0NS42IDc0LjIgMjQ5LjUgNzQgMjUxLjQ1IDcxLjggMjUxLjUgNzEuOCAyNTEuNTUgNzEuOCAyNTMgNzAuOCAyNTQuMDUgNjkuNDUgMjU0LjEgNjkuNCAyNTQuMSA2OS4zNSAyNTYuNjUgNjguMiAyNTcuODUgNjUuNyAyNTcuODUgNjUuNjUgMjU3Ljg1IDY1LjYKTCAyNTcuODUgNjUuNDUKUSAyNTQuNDUgNjUuODUgMjUxLjE1IDY3IDI1MSA2Ny4wNSAyNTAuODUgNjcuMTUgMjQ5LjkgNjcuNzUgMjQ5LjM1IDY3LjA1IDI1My4xIDY1LjIgMjU3Ljc1IDY0LjIKTCAyNTcuNzUgNjQuMQpRIDI1Ny43IDY0LjEgMjU3LjY1IDY0LjEgMjU3IDYzLjg1IDI1Ni41NSA2My41IDI1Ny44NSA2Mi4yNSAyNTkuMTUgNjAuOTUgMjU5LjIgNjAuOSAyNTkuMiA2MC44NSAyNTkuMTUgNjAuODUgMjU5LjEgNjAuODUgMjU4IDYxLjIgMjU3LjI1IDYwLjcgMjU5LjA1IDYwLjI1IDI2MC41NSA1OS41IDI2MC42IDU5LjUgMjYwLjY1IDU5LjUgMjYwLjg1IDU5LjI1IDI2MS4wNSA1OS4wNSAyNjEuMSA1OSAyNjEuMTUgNTkgMjYxLjE1IDU4Ljk1IDI2MS4xNSA1OC45IDI2Mi44IDU3LjMgMjY0LjQgNTUuNyAyNjQuNDUgNTUuNjUgMjY0LjQ1IDU1LjYgWiIvPgoKPHBhdGggZmlsbD0iIzQ4M0QxQiIgZmlsbC1vcGFjaXR5PSIwLjkzMzMzMzMzMzMzMzMzMzMiIHN0cm9rZT0ibm9uZSIgZD0iCk0gMjY5LjMgNTUuNTUKTCAyNjkuMyA1NS41ClEgMjY3LjEgNTUuOSAyNjUuMSA1Ny4xIDI2My4wNSA1OC4zIDI2MS4xNSA1OSAyNjEuMSA1OSAyNjEuMDUgNTkuMDUgMjYwLjg1IDU5LjI1IDI2MC42NSA1OS41IDI2MC42IDU5LjUgMjYwLjU1IDU5LjUgMjU5LjA1IDYwLjI1IDI1Ny4yNSA2MC43IDI1OCA2MS4yIDI1OS4xIDYwLjg1IDI1OS4xNSA2MC44NSAyNTkuMiA2MC44NSAyNjQuNiA1OC41NSAyNjkuMyA1NS41NSBaIi8+Cgo8cGF0aCBmaWxsPSIjNzBDN0Q2IiBmaWxsLW9wYWNpdHk9IjAuOTk2MDc4NDMxMzcyNTQ5IiBzdHJva2U9Im5vbmUiIGQ9IgpNIDI3Ny40NSA2MS4wNQpRIDI3NS4yNSA2MS4xNSAyNzMuNiA2MS43NSAyNzAuMDUgNjMuMDUgMjY3LjE1IDY0LjggMjYzLjY1IDY2LjkgMjYxIDY5LjcgMjU1LjY1IDc1LjI1IDI1Mi4wNSA4Mi41NSAyNTAuMjUgODYuMiAyNDkuMiA5MC43NSAyNDguNzUgOTIuOSAyNDguMjUgOTUuMTUgMjQ4LjI1IDk1LjMgMjQ4LjI1IDk1LjQgMjQ4LjI1IDk1LjQ1IDI0OC4yNSA5NS41IDI0OC4zIDk2LjUgMjQ4LjggOTYuOQpMIDI0OC43IDk3LjEKUSAyNDguNyA5Ny4xNSAyNDguNiA5Ny4yIDI0OC42NSA5OC40NSAyNDkuMSA5OS4zIDI0OS4xIDk5LjM1IDI0OS4xIDk5LjQgMjU1LjYgOTYuNTUgMjY0LjQ1IDk2IDI2NC41IDk2IDI2NC41NSA5NiAyNjkuNjUgOTUuMTUgMjc1IDk0LjUKTCAyNzUgOTQuNApRIDI3NS4wNSA5My42IDI3NS40IDkzLjA1IDI3OS40NSA4Ni4yNSAyODIuNyA3OC42IDI4Mi43IDc4LjU1IDI4Mi43IDc4LjUgMjgyLjcgNzcuOCAyODIuNyA3Ny4xNSAyODIuNyA3Ny4xIDI4Mi43IDc3LjA1IDI4My4xNSA3Ni4xNSAyODMuNCA3Ni4zIDI4My41IDc2LjMgMjgzLjUgNzYuMjUgMjg0LjYgNzMuNTUgMjg1LjEgNzAuMiAyODQuNDUgNzAgMjg0LjQ1IDY5IDI4NC40NSA2My45IDI4MS4zNSA2MS43IDI3OS44IDYwLjk1IDI3Ny40NSA2MS4wNQpNIDI3My44NSA3Mi4xClEgMjc0LjQgNzEuOTUgMjc0LjggNzIuMTUgMjc1Ljg1IDc0LjEgMjc1LjA1IDc2LjYgMjc0IDc5Ljg1IDI3My4wNSA4MyAyNzIuMDUgODYuMyAyNzAuMDUgODguNDUgMjY5LjM1IDg3LjIgMjcwIDg1LjYgMjcxLjggODEuNCAyNzMuMiA3Ni45IDI3My43NSA3NS4yNSAyNzMuNyA3My42IDI2Ni4zNSA3Ni43NSAyNjIuOCA4NC4zNSAyNjIgODYuMTUgMjYxLjMgODguMSAyNjAuNjUgOTAgMjU5LjkgOTEuNjUgMjU5Ljg1IDkxLjggMjU5LjU1IDkxLjc1IDI1OS4xNSA5MS42NSAyNTkgOTEuMjUgMjU4Ljk1IDkxLjIgMjU4Ljk1IDkxLjE1IDI1OC45NSA5MC40NSAyNTguOTUgODkuOCAyNTguOTUgODkuNzUgMjU4Ljk1IDg5LjcgMjYxLjQ1IDgxLjI1IDI2Ni45IDc1LjggMjY5LjYgNzMuMSAyNzMuODUgNzIuMSBaIi8+Cgo8cGF0aCBmaWxsPSIjNDc4RTk1IiBmaWxsLW9wYWNpdHk9IjAuOTg4MjM1Mjk0MTE3NjQ3MSIgc3Ryb2tlPSJub25lIiBkPSIKTSAyODMuMyA2MC4yNQpRIDI4My4yNSA2MC4yNSAyODMuMiA2MC4yIDI4MC44NSA1OC4yNSAyNzYuMSA1OC42NSAyNzEuNDUgNjAuMDUgMjY3LjU1IDYyLjE1IDI2MC40IDY1Ljk1IDI1NS45IDcyLjQgMjU1LjkgNzIuNDUgMjU1LjkgNzIuNQpMIDI1NS45IDcyLjYKUSAyNTIuMjUgNzcuMyAyNDkuODUgODMuMjUgMjQ5Ljg1IDgzLjMgMjQ5LjggODMuMzUgMjQ3LjQgODguMDUgMjQ3LjMgOTUuMDUgMjQ3LjQgOTYuNCAyNDcuOTUgOTcuMyAyNDcuOTUgOTcuMzUgMjQ4IDk3LjM1IDI0OC4xNSA5Ni41IDI0OC4yIDk1LjUKTCAyNDguMjUgOTUuNQpRIDI0OC4yNSA5NS40NSAyNDguMjUgOTUuNCAyNDguMjUgOTUuMyAyNDguMjUgOTUuMTUgMjQ4Ljc1IDkyLjkgMjQ5LjIgOTAuNzUgMjUwLjI1IDg2LjIgMjUyLjA1IDgyLjU1IDI1NS42NSA3NS4yNSAyNjEgNjkuNyAyNjMuNjUgNjYuOSAyNjcuMTUgNjQuOCAyNzAuMDUgNjMuMDUgMjczLjYgNjEuNzUgMjc1LjI1IDYxLjE1IDI3Ny40NSA2MS4wNSAyNzkuOCA2MC45NSAyODEuMzUgNjEuNyAyODQuNDUgNjMuOSAyODQuNDUgNjkgMjg0LjQ1IDcwIDI4NS4xIDcwLjIgMjg0LjYgNzMuNTUgMjgzLjUgNzYuMjUgMjgzLjUgNzYuMyAyODMuNCA3Ni4zIDI4My4xNSA3Ni4xNSAyODIuNyA3Ny4wNSAyODIuNyA3Ny4xIDI4Mi43IDc3LjE1IDI4Mi43IDc3LjggMjgyLjcgNzguNSAyODIuNyA3OC41NSAyODIuNyA3OC42IDI3OS40NSA4Ni4yNSAyNzUuNCA5My4wNSAyNzUuMDUgOTMuNiAyNzUgOTQuNCAyNzYuMiA5NC43IDI3NyA5NC4zNSAyNzcuMDUgOTQuMyAyNzcuMSA5NC4zIDI3Ny4xIDk0LjI1IDI3Ny4xIDk0LjIgMjc3LjEgOTQuMSAyNzcuMSA5NC4wNSAyODEuNCA4Ny41IDI4NC40IDc5LjU1IDI4NS4wNSA3Ny43NSAyODUuNiA3NS44IDI4NiA3My43NSAyODYuMDUgNzEuMyAyODYuMjUgNjQuNDUgMjgzLjMgNjAuMjUgWiIvPgoKPHBhdGggZmlsbD0iI0U4RUFFMSIgZmlsbC1vcGFjaXR5PSIwLjk5NjA3ODQzMTM3MjU0OSIgc3Ryb2tlPSJub25lIiBkPSIKTSAyNzcuMSAzNy4yNQpRIDI3Ny4wNSAzNy4yNSAyNzYuOTUgMzcuMjUgMjc2Ljk1IDM3LjMgMjc2Ljk1IDM3LjM1IDI3Mi44IDQzLjQ1IDI2OC4yIDQ5LjE1IDI3MS43NSA0Ni45IDI3NS40IDQ0LjA1IDI3NS40NSA0NC4wNSAyNzUuNSA0NC4wNSAyNzUuNSA0NCAyNzUuNSA0My45IDI3Ny4yIDQyLjEgMjc4LjI1IDM5LjU1CkwgMjc4LjMgMzkuNTUKUSAyNzguNjUgMzcuNCAyNzcuMSAzNy4yNSBaIi8+Cgo8cGF0aCBmaWxsPSIjREVEQ0NFIiBzdHJva2U9Im5vbmUiIGQ9IgpNIDI2OC44NSA0Ni4yNQpRIDI3MC4xNSA0NC40NSAyNzEuMzUgNDIuNiAyNjkuNjUgNDQuMzUgMjY4LjA1IDQ2LjIgMjYyLjk1IDUxLjk1IDI1Ny4yNSA1Ny4yIDI1Ny4yNSA1Ny40IDI1Ny4xNSA1Ny41IDI1Ni4yNSA1OC4yNSAyNTUuOCA1OS41IDI1Ni41IDU5LjQ1IDI1Ny4wNSA1OC43NQpMIDI1NyA1OC43NQpRIDI1Ni45NSA1OC43NSAyNTYuOSA1OC43NSAyNTYuNyA1OC43NSAyNTYuNzUgNTguNCAyNTkuMDUgNTYuODUgMjYxLjI1IDU1LjIKTCAyNjEuMjUgNTUuMQpRIDI2MS4yNSA1NS4wNSAyNjEuMjUgNTUgMjY1LjQ1IDUxIDI2OC44NSA0Ni4yNSBaIi8+Cgo8cGF0aCBmaWxsPSIjNTE0NTIwIiBmaWxsLW9wYWNpdHk9IjAuOTg4MjM1Mjk0MTE3NjQ3MSIgc3Ryb2tlPSJub25lIiBkPSIKTSAyNzMuMSA0Ni44NQpRIDI3MyA0Ni44NSAyNzIuOTUgNDYuODUgMjY3IDUwLjkgMjYxLjI1IDU1LjEKTCAyNjEuMjUgNTUuMgpRIDI1OS4wNSA1Ni44NSAyNTYuNzUgNTguNCAyNTYuNyA1OC43NSAyNTYuOSA1OC43NSAyNTYuOTUgNTguNzUgMjU3IDU4Ljc1IDI1NyA1OC43IDI1NyA1OC42NSAyNjEuMyA1Ni42IDI2NC42NSA1My42IDI2NC43IDUzLjYgMjY0LjcgNTMuNTUgMjY3LjM1IDUxLjc1IDI2OS45NSA0OS45CkwgMjcwLjA1IDQ5LjkKUSAyNzIuMTUgNDguNiAyNzMuNTUgNDYuODUKTCAyNzMuNCA0Ni45NQpRIDI3My4yIDQ3LjE1IDI3My4xIDQ2Ljg1IFoiLz4KCjxwYXRoIGZpbGw9IiNCQ0E1NzgiIGZpbGwtb3BhY2l0eT0iMC45NzY0NzA1ODgyMzUyOTQxIiBzdHJva2U9Im5vbmUiIGQ9IgpNIDI2NC4xNSA0OC4zClEgMjY0LjIgNDguMjUgMjY0LjIgNDguMiAyNjEuMTUgNTEuMDUgMjU4LjQ1IDU0LjI1IDI1Ny45IDU0LjkgMjU3LjYgNTQuNjUgMjU4LjEgNTMuNzUgMjU4LjM1IDUyLjcgMjU4LjM1IDUyLjYgMjU4LjM1IDUyLjU1CkwgMjU4LjM1IDUyLjUKUSAyNTcuNjUgNTMuMDUgMjU2Ljc1IDU0IDI1Ni43NSA1NC4xIDI1Ni43NSA1NC4xNSAyNTYuMTUgNTUuOSAyNTUuMyA1Ny40NSAyNTUuMyA1Ny4zNSAyNTUuMzUgNTcuMyAyNTUuOCA1Ni4yNSAyNTYuMTUgNTUgMjU2LjEgNTUgMjU2LjEgNTUuMDUgMjU0Ljk1IDU2LjUgMjU0LjIgNTguMyAyNTQuMiA1OC4zNSAyNTQuMiA1OC40IDI1NC4yIDU4LjQ1IDI1NC4yIDU4LjUgMjUyLjYgNjAuOSAyNTAuNTUgNjIuOSAyNTEuMSA2My4xIDI1MS43NSA2Mi4yNSAyNTIuNjUgNjEuMTUgMjUzLjUgNjAuODUKTCAyNTMuMzUgNjAuOTUKUSAyNTMuODUgNjEuNCAyNTQuMDUgNjIuMwpMIDI1NC4xIDYyLjMKUSAyNTUgNjEuOTUgMjU1LjM1IDYwLjUgMjU1LjM1IDYwLjQ1IDI1NS40NSA2MC40NSAyNTguNSA1OS4wNSAyNjEuMDUgNTcuNyAyNjEuMSA1Ny42NSAyNjEuMTUgNTcuNjUgMjYyLjYgNTYuNCAyNjQuNDUgNTUuNTUKTCAyNjQuNDUgNTUuNgpRIDI2OS4yIDUyLjYgMjczLjU1IDQ5LjEKTCAyNzMuNTUgNDkuMDUKUSAyNzAuODUgNTAuMjUgMjY4LjQ1IDUxLjggMjY4LjQgNTEuODUgMjY4LjM1IDUxLjg1IDI2OS4xNSA1MC45IDI3MCA1MCAyNzAuMDUgNDkuOTUgMjcwLjA1IDQ5LjkKTCAyNjkuOTUgNDkuOQpRIDI2Ny4zNSA1MS43NSAyNjQuNyA1My41NSAyNjQuNyA1My42IDI2NC42NSA1My42IDI2MS4zIDU2LjYgMjU3IDU4LjY1IDI1NyA1OC43IDI1NyA1OC43NQpMIDI1Ny4wNSA1OC43NQpRIDI1Ni41IDU5LjQ1IDI1NS44IDU5LjUgMjU2LjI1IDU4LjI1IDI1Ny4xNSA1Ny41IDI1Ny4yNSA1Ny40IDI1Ny4yNSA1Ny4yIDI1Ny4yIDU3LjIgMjU3LjE1IDU3LjIgMjU2LjY1IDU3LjMgMjU2Ljc1IDU2LjggMjYwLjQ1IDUyLjU1IDI2NC4xNSA0OC4zIFoiLz4KCjxwYXRoIGZpbGw9IiM0RjQzMUUiIGZpbGwtb3BhY2l0eT0iMC45ODQzMTM3MjU0OTAxOTYiIHN0cm9rZT0ibm9uZSIgZD0iCk0gMjc3LjYgMzUuMgpRIDI3Ny42NSAzNS4xNSAyNzcuNyAzNS4xNSAyNzcuNyAzNS4xIDI3Ny43IDM1LjA1IDI3Ny43IDM1IDI3Ny43IDM0LjkgMjc5LjEgMzMuMjUgMjgwIDMxIDI4MCAzMC45NSAyODAgMzAuOSAyNzkuOTUgMzAuOSAyNzkuOTUgMzAuOTUgMjc1LjkgMzUuNiAyNzIgMzkuOApMIDI3MS45IDM5LjgKUSAyNjguNCA0NC4zIDI2NC4yIDQ4LjA1IDI2NC4yIDQ4LjEgMjY0LjIgNDguMiAyNjQuMiA0OC4yNSAyNjQuMTUgNDguMyAyNjAuNDUgNTIuNTUgMjU2Ljc1IDU2LjggMjU2LjY1IDU3LjMgMjU3LjE1IDU3LjIgMjU3LjIgNTcuMiAyNTcuMjUgNTcuMiAyNjIuOTUgNTEuOTUgMjY4LjA1IDQ2LjIgMjY5LjY1IDQ0LjM1IDI3MS4zNSA0Mi42IDI3MS4zNSA0Mi41IDI3MS4zNSA0Mi40NSAyNzQuNzUgMzkuMDUgMjc3LjYgMzUuMiBaIi8+Cgo8cGF0aCBmaWxsPSIjQjA5NjY2IiBmaWxsLW9wYWNpdHk9IjAuOTQxMTc2NDcwNTg4MjM1MyIgc3Ryb2tlPSJub25lIiBkPSIKTSAyODAgMzAuOQpRIDI4MCAzMC44NSAyODAuMDUgMzAuOCAyODIuNSAyOCAyODQuMTUgMjQuOTUgMjgyLjggMjYuMTUgMjgxLjY1IDI3LjU1IDI3Ni45IDMzLjcgMjcyIDM5LjY1IDI3MiAzOS43IDI3MiAzOS44IDI3NS45IDM1LjYgMjc5Ljk1IDMwLjk1IDI3OS45NSAzMC45IDI4MCAzMC45IFoiLz4KCjxwYXRoIGZpbGw9IiNCQkEwNkYiIGZpbGwtb3BhY2l0eT0iMC45ODQzMTM3MjU0OTAxOTYiIHN0cm9rZT0ibm9uZSIgZD0iCk0gMjgzLjQgMjkuOApRIDI4My40IDI5Ljc1IDI4My40IDI5LjcgMjgwLjQ1IDMyLjI1IDI3Ny44IDM1LjE1IDI3Ny43NSAzNS4xNSAyNzcuNyAzNS4xNSAyNzcuNjUgMzUuMTUgMjc3LjYgMzUuMiAyNzQuNzUgMzkuMDUgMjcxLjM1IDQyLjQ1IDI3MS4zNSA0Mi41IDI3MS4zNSA0Mi42IDI3MC4xNSA0NC40NSAyNjguODUgNDYuMjUgMjY1LjQ1IDUxIDI2MS4yNSA1NSAyNjEuMjUgNTUuMDUgMjYxLjI1IDU1LjEgMjY3IDUwLjkgMjcyLjk1IDQ2Ljg1IDI3MyA0Ni44NSAyNzMuMSA0Ni44NSAyNzUuNCA0NS4xNSAyNzcuNTUgNDMuMyAyNzcuNiA0My4yNSAyNzcuNiA0My4yIDI3Ni41NSA0My4zNSAyNzUuNSA0NC4xCkwgMjc1LjUgNDQuMDUKUSAyNzUuNDUgNDQuMDUgMjc1LjQgNDQuMDUgMjcxLjc1IDQ2LjkgMjY4LjIgNDkuMTUgMjcyLjggNDMuNDUgMjc2Ljk1IDM3LjM1IDI3Ni45NSAzNy4zIDI3Ni45NSAzNy4yNSAyNzYuOTUgMzcuMTUgMjc2Ljk1IDM3LjEgMjgwLjMgMzMuNTUgMjgzLjQgMjkuOCBaIi8+Cgo8cGF0aCBmaWxsPSIjNzI2MTNBIiBmaWxsLW9wYWNpdHk9IjAuOTA5ODAzOTIxNTY4NjI3NCIgc3Ryb2tlPSJub25lIiBkPSIKTSAyNjAuOSA0OC44ClEgMjYwLjg1IDQ4LjggMjYwLjggNDguOCAyNTkuOTUgNDkuNiAyNTkuMSA1MC4zNSAyNTkuMSA1MC4zIDI1OS4xIDUwLjI1IDI2MCA0OCAyNTkuOTUgNDUuNCAyNTkuOTUgNDUuNDUgMjU5LjkgNDUuNSAyNTguNCA0OC44IDI1Ny4yNSA1Mi40NQpMIDI1Ny4yIDUyLjQ1ClEgMjU2LjggNTMuMDUgMjU3IDUyLjIgMjU2LjggNTEuNSAyNTYuNCA1Mi40IDI1NSA1NS41IDI1My4yNSA1OC40IDI1My4yNSA1OC40NSAyNTMuMjUgNTguNTUgMjUzLjU1IDU4LjYgMjU0LjEgNTguNCAyNTQuMTUgNTguNCAyNTQuMiA1OC40IDI1NC4yIDU4LjM1IDI1NC4yIDU4LjMgMjU0Ljk1IDU2LjUgMjU2LjEgNTUuMDUgMjU2LjEgNTUgMjU2LjE1IDU1IDI1NS44IDU2LjI1IDI1NS4zNSA1Ny4zIDI1NS4zIDU3LjM1IDI1NS4zIDU3LjQ1IDI1Ni4xNSA1NS45IDI1Ni43NSA1NC4xNSAyNTYuNzUgNTQuMSAyNTYuNzUgNTQgMjU3LjY1IDUzLjA1IDI1OC4zNSA1Mi41CkwgMjU4LjM1IDUyLjU1ClEgMjU4LjQgNTIuNTUgMjU4LjQ1IDUyLjU1IDI1OS45IDUwLjU1IDI2MC45IDQ4LjggWiIvPgoKPHBhdGggZmlsbD0iIzRCNDAxRCIgZmlsbC1vcGFjaXR5PSIwLjk2MDc4NDMxMzcyNTQ5MDIiIHN0cm9rZT0ibm9uZSIgZD0iCk0gMjQ5Ljk1IDM5LjMKUSAyNDcuMyA0MyAyNDUuMSA0Ny4wNQpMIDI0NS4xIDQ2Ljk1ClEgMjQ1LjA1IDQ2Ljk1IDI0NSA0NyAyNDIuMSA1Mi4zNSAyMzkuMzUgNTcuOSAyMzkuNTUgNTkuMzUgMjQwLjI1IDU3Ljg1IDI0MS4yNSA1NS44IDI0Mi40IDUzLjkgMjQ2LjU1IDQ3LjE1IDI1MCAzOS42IDI1MC4wNSAzOS41NSAyNDkuOTUgMzkuMyBaIi8+Cgo8cGF0aCBmaWxsPSIjREJEREQzIiBmaWxsLW9wYWNpdHk9IjAuOTg0MzEzNzI1NDkwMTk2IiBzdHJva2U9Im5vbmUiIGQ9IgpNIDI0My45NSAzMS4yNQpMIDI0My44NSAzMS4yNQpRIDI0My44NSAzMS4zNSAyNDMuODUgMzEuNCAyNDEuMSAzNi44NSAyMzkuNSA0My40NSAyMzkuNSA0My41IDIzOS41IDQzLjU1IDIzOS41IDQzLjYgMjM5LjUgNDMuNwpMIDIzOS41IDQzLjc1ClEgMjM5Ljg1IDQzLjMgMjQwLjEgNDIuNyAyNDAuMSA0NSAyMzkuMjUgNDcuMiAyMzkuMjUgNDcuMjUgMjM5LjI1IDQ3LjM1IDIzOS4yNSA0Ny40IDIzOS4yNSA0Ny40NSAyMzkuMyA0Ny41IDIzOS4zNSA0Ny42IDIzOS4zNSA0Ny42NSAyMzkuMzUgNDcuNyAyNDEuNTUgMzkuMzUgMjQzLjk1IDMxLjI1IFoiLz4KCjxwYXRoIGZpbGw9IiNFNEU2REQiIGZpbGwtb3BhY2l0eT0iMC45OTIxNTY4NjI3NDUwOTgxIiBzdHJva2U9Im5vbmUiIGQ9IgpNIDI1MC4yIDIxLjQKTCAyNTAuMiAyMS4zClEgMjQ4LjYgMjUuNjUgMjQ3LjQ1IDMwLjU1IDI0Ny4wNSAzMi4yNSAyNDYuNyAzMy44NSAyNDQuOCA0Mi45NSAyNDEuNyA1MC43NSAyNDEuNyA1MC44IDI0MS43IDUwLjg1IDI0MS45IDUyLjggMjQwLjEgNTIuNyAyNDAuMSA1Mi43NSAyNDAuMSA1Mi44IDIzOS4zIDU1IDIzOC45IDU3LjU1CkwgMjM4LjggNTcuNTUKUSAyMzguNjUgNTguMTUgMjM4LjI1IDU3LjkKTCAyMzguMiA1Ny45ClEgMjM3LjUgNTcuMiAyMzcuNjUgNTUuNiAyMzguNCA1MS42IDIzOS4zNSA0Ny44IDIzOS4zNSA0Ny43NSAyMzkuMzUgNDcuNyAyMzkuMzUgNDcuNjUgMjM5LjM1IDQ3LjYgMjM5LjMgNDcuNSAyMzkuMjUgNDcuNDUgMjM4LjQgNTAuMTUgMjM3LjU1IDUzIDIzNi43NSA1NS43IDIzNi43IDU4Ljc1IDIzNi4zIDU4Ljk1IDIzNi4yNSA1OS41IDIzNi4yNSA2MS4yNSAyMzUuMzUgNjIuMDUKTCAyMzUuMyA2Mi4wNQpRIDIzNS4yIDU5Ljg1IDIzNS4zNSA1Ny44IDIzNC42IDU5LjMgMjM0LjY1IDYxLjU1IDIzNC43NSA2My45NSAyMzQuMTUgNjUuNiAyMzQuMTUgNjYuMTUgMjM0LjIgNjYuNjUgMjM0LjQ1IDY4LjQ1IDIzMy42NSA2OS4xIDIzMy41NSA3MC4zIDIzMy43NSA3MS4yIDIzMy43NSA3MS4yNSAyMzMuNzUgNzEuMyAyMzUuMjUgNzIuOCAyMzcuOCA3Mi4xNSAyMzcuODUgNzIuMTUgMjM3LjkgNzIuMTUgMjM5LjA1IDcxLjQgMjM5LjIgNzAuMzUKTCAyMzkuMTUgNzAuMzUKUSAyMzguNCA3MC42IDIzNy44NSA3MSAyMzYuNSA3MS45NSAyMzYuMSA3MC43IDIzNy45NSA2OS42IDIzOS44NSA2OC41NSAyMzkuOSA2OC41IDI0MCA2OC41IDI0MCA2OC40NSAyNDAgNjguNCAyNDAgNjguMyAyNDAgNjguMjUgMjQwLjM1IDY3IDI0MC42IDY1LjYgMjQwLjYgNjUuNSAyNDAuNiA2NS40NSAyNDAuMTUgNjUuODUgMjM5LjcgNjYuMyAyMzguNyA2Ny4yNSAyMzguMDUgNjYuMyAyMzkuMyA2NS40IDI0MC40NSA2NC4zNSAyNDAuNDUgNjQuMyAyNDAuNDUgNjQuMjUgMjQwLjg1IDYyLjc1IDI0MC42IDYxLjIgMjQwLjYgNjEuMTUgMjQwLjYgNjEuMSAyNDAuNTUgNjEuMSAyNDAuNSA2MS4wNSAyNDAuNDUgNjAuNjUgMjQwLjQ1IDYwLjI1IDI0MC41NSA2MC4yNSAyNDAuNiA2MC4yNSAyNDAuNiA2MC4xNSAyNDAuNiA2MC4xIDI0MC42IDYwLjA1IDI0MC42IDYwIDI0MS44IDU3Ljk1IDI0Mi4wNSA1NSAyNDIuMDUgNTQuOTUgMjQyLjA1IDU0Ljg1IDI0Mi4zIDU0LjUgMjQyLjQgNTQgMjQyLjQgNTMuOTUgMjQyLjQgNTMuOSAyNDEuMjUgNTUuOCAyNDAuMjUgNTcuODUgMjM5LjU1IDU5LjM1IDIzOS4zNSA1Ny45IDI0Mi4xIDUyLjM1IDI0NSA0NyAyNDUuMDUgNDYuOTUgMjQ1LjEgNDYuOTUgMjQ1LjEgNDYuOSAyNDUuMSA0Ni44NSAyNDUuMSA0Ni44IDI0NS4xIDQ2LjcgMjQ3LjU1IDQxLjY1IDI0Ny4yNSAzNC4zIDI0Ny4xNSAzMS42NSAyNDguMSAyOS40NSAyNDkuNjUgMjUuOSAyNTAuMiAyMS40IFoiLz4KCjxwYXRoIGZpbGw9IiNCQkEwNkUiIGZpbGwtb3BhY2l0eT0iMC45OTIxNTY4NjI3NDUwOTgxIiBzdHJva2U9Im5vbmUiIGQ9IgpNIDI1MS40NSAxNC44NQpRIDI1MS41IDE0LjA1IDI1MS41NSAxMy4yNSAyNTEuNTUgMTMuMiAyNTEuNTUgMTMuMTUgMjUxLjE1IDE0IDI1MC44NSAxNC44NSAyNTAuMTUgMTYuNTUgMjQ5LjYgMTguNCAyNDcuMiAyNyAyNDUgMzUuODUgMjQyLjg1IDQ0LjQgMjQwLjEgNTIuNTUgMjQwLjEgNTIuNiAyNDAuMSA1Mi43IDI0MS45IDUyLjggMjQxLjcgNTAuODUgMjQxLjcgNTAuOCAyNDEuNyA1MC43NSAyNDQuOCA0Mi45NSAyNDYuNyAzMy44NSAyNDcuMDUgMzIuMjUgMjQ3LjQ1IDMwLjU1IDI0OC42IDI1LjY1IDI1MC4yIDIxLjMKTCAyNTAuMiAyMS40IDI1MC4yNSAyMS40ClEgMjUwLjUgMjAuOCAyNTAuMiAyMC40NSAyNTEuMTUgMTcuOTUgMjUxLjQ1IDE0Ljg1IFoiLz4KCjxwYXRoIGZpbGw9IiNCNTlBNjkiIGZpbGwtb3BhY2l0eT0iMC45ODgyMzUyOTQxMTc2NDcxIiBzdHJva2U9Im5vbmUiIGQ9IgpNIDI0OS40NSAxNC40NQpRIDI0OS4zNSAxNC42NSAyNDkuMyAxNC44NSAyNDYuNzUgMjEuNjUgMjQ0LjcgMjguODUgMjQ0Ljc1IDI5IDI0NC43NSAyOS4yIDI0NC43IDI5LjI1IDI0NC43IDI5LjMgMjQ0LjcgMjkuNCAyNDQuNyAyOS40NSAyNDMuNTUgMzcuNDUgMjQxLjQ1IDQ0LjU1IDI0MS41IDQ1LjMgMjQxLjg1IDQ0LjIgMjQ0LjM1IDM1LjggMjQ2LjI1IDI2Ljg1IDI0Ny42IDIwLjMgMjQ5LjggMTQuODUgMjUwLjQgMTMuMzUgMjUxLjA1IDExLjkgMjUwLjY1IDEyLjU1IDI1MC4yIDEzLjEgMjQ5LjcgMTMuNzUgMjQ5LjQ1IDE0LjQ1IFoiLz4KCjxwYXRoIGZpbGw9IiM1MDQ0MUYiIGZpbGwtb3BhY2l0eT0iMC45OTYwNzg0MzEzNzI1NDkiIHN0cm9rZT0ibm9uZSIgZD0iCk0gMjUxLjA1IDExLjgKUSAyNTEuMDUgMTEuODUgMjUxLjA1IDExLjkgMjUwLjQgMTMuMzUgMjQ5LjggMTQuODUgMjQ3LjYgMjAuMyAyNDYuMjUgMjYuODUgMjQ0LjM1IDM1LjggMjQxLjg1IDQ0LjIgMjQxLjUgNDUuMyAyNDEuNDUgNDQuNTUgMjQzLjU1IDM3LjQ1IDI0NC43IDI5LjQ1IDI0NC43IDI5LjQgMjQ0LjcgMjkuMyAyNDQuNjUgMjkuMyAyNDQuNjUgMjkuMzUgMjQ0LjQ1IDMwLjQ1IDI0My44NSAzMS4xNSAyNDMuODUgMzEuMiAyNDMuODUgMzEuMjUKTCAyNDMuOTUgMzEuMjUKUSAyNDEuNTUgMzkuMzUgMjM5LjM1IDQ3LjcgMjM5LjM1IDQ3Ljc1IDIzOS4zNSA0Ny44IDIzOC40IDUxLjYgMjM3LjY1IDU1LjYgMjM3LjUgNTcuMiAyMzguMiA1Ny45CkwgMjM4LjI1IDU3LjkKUSAyMzguNjUgNTguMTUgMjM4LjggNTcuNTUKTCAyMzguOSA1Ny41NQpRIDIzOS4zIDU1IDI0MC4xIDUyLjggMjQwLjEgNTIuNzUgMjQwLjEgNTIuNyAyNDAuMSA1Mi42IDI0MC4xIDUyLjU1IDI0Mi44NSA0NC40IDI0NSAzNS44NSAyNDcuMiAyNyAyNDkuNiAxOC40IDI1MC4xNSAxNi41NSAyNTAuODUgMTQuODUgMjUxLjE1IDE0IDI1MS41NSAxMy4xNSAyNTEuNzUgMTIuMyAyNTIgMTEuNTUgMjUyLjA1IDExLjM1IDI1MiAxMS4zNSAyNTEuNyAxMS4zNSAyNTEuMDUgMTEuOCBaIi8+Cgo8cGF0aCBmaWxsPSIjMjYyODI3IiBmaWxsLW9wYWNpdHk9IjAuOTY0NzA1ODgyMzUyOTQxMiIgc3Ryb2tlPSJub25lIiBkPSIKTSAzMzEuOTUgMjk4Ljk1ClEgMzMyLjI1IDI5OC45NSAzMzIuMiAyOTguNzUgMzMyLjE1IDI5OC43NSAzMzIuMSAyOTguNzUgMzMwLjMgMjk4Ljk1IDMyOC4yIDI5OC44NQpMIDMyOC4yIDI5OC44ClEgMzI2LjcgMjk4LjEgMzI1LjU1IDI5Ny4xNSAzMjQuMSAyOTUuOSAzMjMuMSAyOTQuMjUKTCAzMjMuMDUgMjk0LjI1ClEgMzIzLjIgMjk2LjYgMzIzLjM1IDI5OC41IDMyMy4yNSAyOTguNSAzMjMuMiAyOTguNSAzMjAuNTUgMjk4Ljc1IDMxNy42IDI5OC43NSAzMTcuNiAyOTguOCAzMTcuNiAyOTguODUgMzIxLjIgMjk4LjcgMzI0LjU1IDI5OS4wNSAzMjQuNyAyOTkuMDUgMzI0LjggMjk5LjI1IDMyNi4zIDI5OS41IDMyOC4zNSAyOTkuMiAzMzAuMTUgMjk5IDMzMS45NSAyOTguOTUgWiIvPgoKPHBhdGggZmlsbD0iIzA0MDQwNCIgZmlsbC1vcGFjaXR5PSIwLjk4NDMxMzcyNTQ5MDE5NiIgc3Ryb2tlPSJub25lIiBkPSIKTSAzNDIuNDUgMjg4LjkKUSAzNDIuNCAyODguOSAzNDIuMzUgMjg4LjkgMzQyLjEgMjg5LjQ1IDM0MS44IDI4OS45NSAzNDEuNiAyOTAuMiAzNDEuNDUgMjkwLjQ1IDM0MS45NSAyOTAuOSAzNDIuOCAyOTEgMzQ1LjMgMjkxLjI1IDM0Ny41NSAyOTEuNyAzNTAuNyAyOTIuMzUgMzUyLjkgMjkzLjg1CkwgMzUyLjkgMjkzLjk1ClEgMzQ0LjYgMjk2LjMgMzM0LjY1IDI5Ny4wNSAzMzQuNjUgMjk3LjEgMzM0LjYgMjk3LjE1IDMzNC4wNSAyOTcuNjUgMzMzLjUgMjk4LjE1IDMzMy4zIDI5OC4yNSAzMzMuMDUgMjk4LjQgMzMyLjc1IDI5OC41IDMzMi40NSAyOTguNiAzMzIuNDUgMjk4LjcgMzMyLjQ1IDI5OC43NSAzNDIuODUgMjk4LjI1IDM1MS44IDI5Ni4yNSAzNTMuMzUgMjk1LjkgMzU0Ljc1IDI5NS4zNSAzNTUuNjUgMjkzLjIgMzUzLjkgMjkyLjA1IDM1MS40IDI5MC40IDM0Ny44IDI4OS44IDM0Ni41NSAyODkuNiAzNDUuMTUgMjg5LjI1IDM0My45IDI4OSAzNDIuNDUgMjg4LjkgWiIvPgoKPHBhdGggZmlsbD0iIzRCNEE0QSIgZmlsbC1vcGFjaXR5PSIwLjk5NjA3ODQzMTM3MjU0OSIgc3Ryb2tlPSJub25lIiBkPSIKTSAzNDEuNDUgMjkwLjQ1ClEgMzQxLjQgMjkwLjQ1IDM0MS40IDI5MC41IDM0MC40IDI5Mi41NSAzMzguMSAyOTMuMiAzMzggMjkzLjIgMzM3Ljk1IDI5My4yNSAzMzcuOSAyOTMuMjUgMzM3Ljg1IDI5My4zIDMzNy41IDI5My4zNSAzMzcuMSAyOTMuNApMIDMzNyAyOTMuNApRIDMzNi4yNSAyOTUuNiAzMzQuNjUgMjk2LjkgMzM0LjY1IDI5Ni45NSAzMzQuNjUgMjk3LjA1IDM0NC42IDI5Ni4zIDM1Mi45IDI5My45NQpMIDM1Mi45IDI5My44NQpRIDM1MC43IDI5Mi4zNSAzNDcuNTUgMjkxLjcgMzQ1LjMgMjkxLjI1IDM0Mi44IDI5MSAzNDEuOTUgMjkwLjkgMzQxLjQ1IDI5MC40NSBaIi8+Cgo8cGF0aCBmaWxsPSIjRTZENEJBIiBmaWxsLW9wYWNpdHk9IjAuOTk2MDc4NDMxMzcyNTQ5IiBzdHJva2U9Im5vbmUiIGQ9IgpNIDMzMS41IDI3MC43NQpRIDMzMS44IDI3MC41IDMzMi4xIDI3MC43NSAzMzIuOSAyNzEuNSAzMzMuNjUgMjcyLjM1IDMzNS41IDI3NC41IDMzNi43IDI3Ny4zNSAzMzcuNyAyNzkuNzUgMzM4LjM1IDI4Mi41NSAzMzguOSAyODQuOTUgMzM4LjM1IDI4Ny42NSAzMzguMDUgMjg5LjEgMzM3Ljg1IDI5MC40NSAzMzcuNzUgMjkwLjc1IDMzNy43IDI5MS4xIDMzNy42IDI5MS41IDMzNy41NSAyOTEuOSAzMzguNjUgMjkxLjM1IDMzOS41IDI5MC40NSAzNDAgMjg5Ljg1IDM0MC40IDI4OS4xNSAzNDAuOCAyODguNCAzNDEuMDUgMjg3LjUgMzQxLjIgMjg2Ljk1IDM0MS4zIDI4Ni40NSAzNDEuOSAyODMuNSAzNDEuNDUgMjgwLjI1IDM0MC43NSAyNzUuMyAzNDAgMjcxCkwgMzQwIDI3MC45NQpRIDM0MC44NSAyNzIgMzQxLjQ1IDI3My4zIDM0MS40NSAyNzMuMjUgMzQxLjQ1IDI3My4yIDM0MS4yIDI3Mi4xNSAzNDAuOSAyNzEuMTUgMzM5LjcgMjY3LjMgMzM3LjggMjY0LjIgMzM2LjM1IDI2My4xIDMzNS4xNSAyNjEuNzUgMzMzLjk1IDI2MC4zNSAzMzIuNCAyNTkuMyAzMjcuMSAyNTUuNyAzMjEuMzUgMjUyLjY1IDMxNy44IDI1MC43NSAzMTMuOCAyNDkuMyAzMDkuNyAyNDcuODUgMzA0Ljk1IDI0Ny4zIDI5Ny4xNSAyNDYuMzUgMjk0LjEgMjUxIDI5My41NSAyNTEuODUgMjkzLjUgMjUzIDI5My40NSAyNTUuMiAyOTMuMDUgMjU2LjkgMjk0LjEgMjYwLjcgMjk2LjM1IDI2My40NSAyOTcuMiAyNjQuNSAyOTYuOTUgMjY1LjY1IDI5OC45IDI2Ny40NSAzMDEuMDUgMjY5LjA1IDMwMy4yIDI3MC42IDMwNS42IDI3MS45IDMwOC43IDI3My42IDMxMS4wNSAyNzYgMzE2LjQgMjgxLjUgMzIwLjEgMjg4LjYgMzIxLjMgMjkwLjkgMzIyLjggMjkyLjggMzI0LjM1IDI5NC43IDMyNi4yIDI5Ni4yNSAzMjguNyAyOTguMzUgMzMyLjQ1IDI5Ny4xNSAzMzQuOCAyOTUuMSAzMzUuNyAyOTEuNzUgMzM1LjkgMjkxLjE1IDMzNS45IDI5MC43NQpMIDMzNS45IDI5MC43ClEgMzM1LjkgMjkwLjU1IDMzNS45NSAyOTAuNDUgMzM2LjI1IDI4NS43IDMzNS4zIDI4MS40NSAzMzQuMyAyNzcuMDUgMzMyLjE1IDI3My42NSAzMzEuMjUgMjcyLjI1IDMzMS41IDI3MC43NSBaIi8+CjwvZz4KCjxnIGlkPSJMYXllcjBfMF9GSUxMIj4KPHBhdGggZmlsbD0iIzA1MDYwNiIgZmlsbC1vcGFjaXR5PSIwLjk4NDMxMzcyNTQ5MDE5NiIgc3Ryb2tlPSJub25lIiBkPSIKTSAyMjguNCAzMDAuNApRIDIyOC40IDMwMC4yIDIyOC4xIDMwMC4yIDIyNyAzMDAuMDUgMjI1LjggMzAwLjA1CkwgMjI1LjY1IDMwMC4xClEgMjI1LjM1IDMwMC4yNSAyMjQuODUgMzAwLjIgMjI0LjIgMzAwLjE1IDIyNCAzMDAuMgpMIDIyNC4wNSAzMDAuMyAyMjUuMTUgMzAwLjU1IDIyNS4zNSAzMDAuNTUgMjI1LjUgMzAwLjQgMjI1Ljc1IDMwMC4zNSAyMjcuNiAzMDAuNDUKUSAyMjguMTUgMzAwLjQ1IDIyOC40IDMwMC40Ck0gMTA3LjY1IDI5OC43ClEgMTA4Ljc1IDI5OC44NSAxMTAuMTUgMjk4LjkKTCAxNDggMzAwLjMKUSAxNjEuMzUgMzAwLjggMTY4LjA1IDMwMC4yNSAxNjUuOSAyOTkuMjUgMTYzLjU1IDI5OS41NQpMIDE2My41IDI5OS43NQpRIDE1Ni42IDI5OS42IDEzNC4xNSAyOTguNjUgMTE1Ljk1IDI5Ny45IDEwNC44IDI5Ny45NSAxMDUuMDUgMjk4LjA1IDEwNS4zIDI5OC4xNQpMIDEwNC4wNSAyOTguMDUKUSAxMDMuMDUgMjk3LjY1IDEwMi41NSAyOTcuOApMIDEwMi41IDI5Ny44ClEgMTAyIDI5Ny44IDEwMS43IDI5Ny44NQpMIDEwMS4xNSAyOTcuOTUKUSAxMDEuMDUgMjk3Ljk1IDEwMC45IDI5OApMIDk5Ljc1IDI5Ny44NQpRIDk5LjQ1IDI5Ny43NSA5OS4zIDI5Ny44NSA5OC42NSAyOTcuNzUgOTguMiAyOTcuOQpMIDk3LjggMjk4IDk3LjQ1IDI5Ny44NQpRIDk3LjEgMjk3LjcgOTYuNiAyOTcuNwpMIDk0LjkgMjk3LjY1ClEgOTQuMyAyOTcuNjUgOTQgMjk3LjcKTCA5My40IDI5Ny45ClEgOTMuMjUgMjk4LjA1IDkzLjI1IDI5OC4xIDkzLjE1IDI5OC40IDkzLjUgMjk4LjQKTCA5My45NSAyOTguNApRIDk0LjIgMjk4LjQgOTQuNyAyOTguNiA5NS40IDI5OC44IDk2LjggMjk4LjggOTcuNyAyOTkuMDUgOTcuODUgMjk5LjA1CkwgOTguNSAyOTguODUgOTkuMiAyOTguODUgMTAwLjUgMjk5ClEgMTAxIDI5OS4xIDEwMS4zNSAyOTguOTUgMTAxLjUgMjk4Ljk1IDEwMS43NSAyOTguOApMIDEwMy4yIDI5OC44ClEgMTAzLjg1IDI5OC44IDEwNC4xNSAyOTguNwpMIDEwNi40IDI5OC44NQpRIDEwNi44NSAyOTguOCAxMDcuNjUgMjk4LjcKTSAzMjQuOSAyOTguMgpMIDMyNC44NSAyOTguMTUgMjgwLjg1IDI5OS42NQpRIDI3OS44NSAyOTkuNjUgMjc5LjY1IDMwMC4xNSAyOTEuNyAzMDAuOSAzMDQuMTUgMzAwLjA1IDMwOC45IDI5OS43NSAzMDkgMjk5Ljc1IDMwOS41NSAyOTkuNzUgMzIwIDI5OS44IDMyNi41NSAyOTkuODUgMzMwLjggMjk4Ljk1IDMyNy45NSAyOTguMiAzMjQuOSAyOTguMiBaIi8+Cgo8cGF0aCBmaWxsPSIjMjYyNzI3IiBzdHJva2U9Im5vbmUiIGQ9IgpNIDE3My4zNSAyMTAuMgpRIDE3MyAyMDkuOSAxNzIuMyAyMDkuOQpMIDE3Mi4yNSAyMDkuOQpRIDE2OS4xNSAyMTAuMyAxNjcgMjEyLjQ1IDE2Ni41IDIxMi45IDE2NS4zIDIxNC41NSAxNjQuMSAyMTYuMjUgMTYzLjk1IDIxNy4zNQpMIDE2My45IDIxOC41NSAxNjIuNTUgMjE5LjMKUSAxNjIuMzUgMjE5LjU1IDE2Mi4zIDIxOS42CkwgMTYyLjI1IDIxOS45IDE2Mi40IDIyMC4zClEgMTYyLjQ1IDIyMC4zNSAxNjIuNSAyMjAuNCAxNjIuNCAyMjAuNDUgMTYyLjQgMjIwLjU1IDE2Mi40IDIyMSAxNjIuOSAyMjEuMSAxNjMuMTUgMjIxLjE1IDE2My43IDIyMS4xNSAxNjQuNCAyMjEuMTUgMTY0LjU1IDIyMS4wNQpMIDE2NS40IDIyMC4yIDE2NiAyMTgKUSAxNjYuMiAyMTcuMSAxNjYuNDUgMjE2Ljc1CkwgMTY3IDIxNi4yIDE2Ny41NSAyMTUuNDUKUSAxNjguNiAyMTMuODUgMTcwLjQgMjEzIDE3MS4xNSAyMTIuNjUgMTcyLjcgMjEyLjEgMTczLjYgMjExLjcgMTczLjcgMjExLjI1IDE3My45IDIxMC42NSAxNzMuMzUgMjEwLjIgWiIvPgoKPHBhdGggZmlsbD0iIzlDOTY3RiIgZmlsbC1vcGFjaXR5PSIwLjk4ODIzNTI5NDExNzY0NzEiIHN0cm9rZT0ibm9uZSIgZD0iCk0gMjExLjcgMjE2LjM1ClEgMjEwLjIgMjE1LjUgMjA3Ljk1IDIxNC45IDIwMy41NSAyMTMuNjUgMTk4LjcgMjE0LjA1IDE5OC4zIDIxNC4xIDE5OCAyMTQuMzUgMTk3LjY1IDIxNC42IDE5Ny44IDIxNC45IDIwMy42NSAyMTQuOTUgMjA5LjA1IDIxNy42NSAyMTQuNSAyMjAuMzUgMjE4LjA1IDIyNSAyMTkuMDUgMjI2LjQgMjE5LjU1IDIyNy4zNSAyMjEuMDUgMjMwLjQ1IDIyMC40NSAyMzQuNjUgMjE5Ljc1IDI0MCAyMTYuNDUgMjQyLjggMjE0LjU1IDI0NC40NSAyMTEuMjUgMjQ1LjUgMjA1LjQgMjQ3LjM1IDE5OS4zNSAyNDYuNSAxOTUuNTUgMjQ1Ljc1IDE5My42NSAyNDUuNCAxOTAuMjUgMjQ0LjcgMTg3Ljk1IDI0NC45CkwgMTg4IDI0NS4wNSAxOTMuOSAyNDYuNDUKUSAxOTguMzUgMjQ3LjU1IDIwMC43IDI0Ny45NSAyMDQuNTUgMjQ4LjU1IDIwNy42IDI0OC40IDIxMS4zIDI0OC4yIDIxNC40IDI0Ni44IDIxNy44IDI0NS4zIDIxOS44IDI0Mi42NSAyMjIuMyAyMzkuNCAyMjIuOSAyMzMuOApMIDIyMi43IDIzMy43NQpRIDIyMy43IDIyOS40NSAyMjEgMjI1LjA1IDIxOSAyMjEuODUgMjE0LjggMjE4LjU1IDIxMy4wNSAyMTcuMTUgMjExLjcgMjE2LjM1Ck0gMzMxLjMgMjQ1LjIKUSAzMjguOTUgMjQzLjk1IDMyNS44IDI0Mi44NSAzMTYuMTUgMjM5LjQ1IDMwNS45NSAyMzkuNgpMIDMwNS43NSAyMzkuNDUKUSAzMDUuNCAyMzkuNSAzMDUuMjUgMjM5LjUgMzA0Ljk1IDIzOS42IDMwNC41IDIzOS41IDMwMy45NSAyMzkuMzUgMzAzLjggMjM5LjM1CkwgMzAzLjEgMjM5LjQ1IDMwMi40IDIzOS40ClEgMzAyLjEgMjM5LjQgMzAxLjcgMjM5LjU1IDMwMS4xNSAyMzkuNzUgMzAwLjk1IDIzOS44IDMwMC40NSAyMzkuOCAzMDAuMiAyMzkuODUgMjk5Ljc1IDIzOS44NSAyOTkuNDUgMjQwCkwgMjk4LjkgMjQwLjM1ClEgMjk4LjggMjQwLjQgMjk3LjggMjQwLjcgMjk2LjggMjQxLjIgMjk2LjYgMjQxLjIgMjk2LjU1IDI0MS40NSAyOTYuMTUgMjQxLjU1IDI5NS42IDI0MS43IDI5NS41NSAyNDEuNzUgMjk1LjIgMjQyLjMgMjk0LjkgMjQyLjMKTCAyOTUuMDUgMjQyLjU1ClEgMjk1LjI1IDI0Mi42NSAyOTUuNSAyNDIuNSAyOTUuNjUgMjQyLjQ1IDI5NS45NSAyNDIuMjUgMjk2IDI0Mi4yIDI5Ni42NSAyNDIuMDUgMjk3LjA1IDI0MS45NSAyOTcuMTUgMjQxLjcKTCAyOTkuMTUgMjQxLjQKUSAyOTkuODUgMjQxLjMgMzAwLjEgMjQxLjA1IDMwMC4zIDI0MS4xNSAzMDAuOCAyNDEuMDUKTCAzMDMuNyAyNDAuNyAzMDQuNiAyNDAuNwpRIDMwNC44NSAyNDAuNyAzMDUuMyAyNDAuNjUKTCAzMDUuODUgMjQwLjcKUSAzMDUuOTUgMjQwLjcgMzA2LjQgMjQwLjU1CkwgMzA2Ljc1IDI0MC41NQpRIDMwNy4yIDI0MC43IDMwNy43IDI0MC44IDMwOC44IDI0MS4wNSAzMTEuMSAyNDEuMyAzMjguMDUgMjQzLjM1IDMzNi4wNSAyNTEuMjUgMzQxLjc1IDI1Ni44IDM0My45NSAyNjUuNDUgMzQ1Ljg1IDI3Mi45NSAzNDQuNyAyODEuODUgMzQ0LjQgMjg0LjM1IDM0My4zNSAyODUuMzUgMzQyLjY1IDI4NS45NSAzNDIuNSAyODYuMiAzNDIuNCAyODYuNSAzNDIuNDUgMjg2LjggMzQyLjU1IDI4Ny4xNSAzNDIuODUgMjg3LjIgMzQ0LjEgMjg2LjUgMzQ0LjkgMjg1LjE1IDM0NS42NSAyODMuODUgMzQ1LjcgMjgyLjM1CkwgMzQ1LjU1IDI4Mi4zNQpRIDM0Ni43NSAyNzQuOTUgMzQ2LjYgMjcwLjQgMzQ2LjI1IDI2Mi42IDM0Mi4yIDI1NS44IDMzOCAyNDguODUgMzMxLjMgMjQ1LjIgWiIvPgoKPHBhdGggZmlsbD0iI0IxQTY5MSIgc3Ryb2tlPSJub25lIiBkPSIKTSAxNjEuMyAyNDkuMzUKUSAxNjAuNjUgMjQ5LjU1IDE1OS44IDI0OS44IDE1OC45IDI1MC4wNSAxNTguMiAyNTAuMwpMIDE1OC4xIDI1MC4zClEgMTU3LjY1IDI1MC40NSAxNTcuNDUgMjUwLjUgMTU3LjMgMjUwLjU1IDE1NyAyNTAuNiAxNTYuOSAyNTAuNjUgMTU2Ljg1IDI1MC43NQpMIDE1Ni44NSAyNTAuOCAxNTYuMiAyNTEKUSAxNTYgMjUxLjIgMTU2LjA1IDI1MS4zNSAxNTYuMzUgMjUxLjQgMTU2LjkgMjUxLjQKTCAxNTguOSAyNTEuMDUgMTU5LjQgMjUwLjkgMTU5LjggMjUwLjcgMTYwLjY1IDI1MC40NQpRIDE2MS43IDI1MC4xNSAxNjIuOCAyNDkuNwpMIDE2OC4xNSAyNDYuNjUKUSAxNjguOCAyNDYuMjUgMTY4LjggMjQ1LjggMTY3Ljc1IDI0Ni4wNSAxNjYuNzUgMjQ2LjU1CkwgMTYyLjUgMjQ4LjkgMTYyLjQgMjQ4LjkgMTYxLjMgMjQ5LjM1IFoiLz4KCjxwYXRoIGZpbGw9IiM0Rjk5QTMiIGZpbGwtb3BhY2l0eT0iMC45ODgyMzUyOTQxMTc2NDcxIiBzdHJva2U9Im5vbmUiIGQ9IgpNIDEwMS4wNSAyODIuNzUKUSAxMDAuOTUgMjgyLjIgMTAwLjcgMjgyLjA1IDEwMC42IDI4MS44NSAxMDAuNDUgMjgyLjE1CkwgMTAwLjM1IDI4Mi41ClEgMTAwLjQ1IDI4Mi42NSAxMDAuNCAyODMuMDUKTCAxMDAuNSAyODMuMiAxMDAuNSAyODMuNDUKUSAxMDAuNSAyODMuOCAxMDAuOCAyODQuMgpMIDEwMC44NSAyODQuNjUgMTAxLjE1IDI4NS40IDEwMS4yIDI4NS44IDEwMS4zNSAyODYuMTUKUSAxMDEuNDUgMjg2LjQ1IDEwMS40NSAyODcuMQpMIDEwMS43IDI4Ny42IDEwMS43NSAyODguMSAxMDIuMzUgMjkwLjA1IDEwMi41IDI5MC40ClEgMTAyLjYgMjkwLjU1IDEwMi43NSAyOTAuNjUKTCAxMDIuNzUgMjkwLjcKUSAxMDIuOCAyOTEgMTAzLjMgMjkxLjQKTCAxMDMuNDUgMjkxLjQgMTAzLjQgMjkxLjMKUSAxMDMuNTUgMjkwLjkgMTAzLjQ1IDI5MC4xCkwgMTAzLjM1IDI4OS42ClEgMTAzLjI1IDI4OS40NSAxMDMuMjUgMjg5LjMKTCAxMDMuMiAyODkuMSAxMDMuMSAyODguNCAxMDIuOCAyODcuNTUgMTAyLjc1IDI4Ny4yNQpRIDEwMi43IDI4Ni45NSAxMDIuNjUgMjg2LjgKTCAxMDIuMyAyODUgMTAyLjE1IDI4NC42NQpRIDEwMi4xIDI4NC4wNSAxMDEuOTUgMjgzLjc1CkwgMTAxLjggMjgzLjU1IDEwMS44IDI4My4yNQpRIDEwMS43NSAyODIuOTUgMTAxLjIgMjgyLjYKTCAxMDEuMiAyODIuNjUgMTAxLjA1IDI4Mi43NSBaIi8+Cgo8cGF0aCBmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiIGQ9IgpNIDEyNC4zNSAyMjMKUSAxMjMuNiAyMjMuMSAxMjIuODUgMjIyLjg1CkwgMTIxLjc1IDIyMi43IDEyMS4zNSAyMjIuNQpRIDEyMC45IDIyMi4zIDEyMC40NSAyMjIuMgpMIDExOS43IDIyMiAxMTkuMSAyMjEuNzUKUSAxMTguOCAyMjEuNyAxMTguMiAyMjEuNyAxMTcuNyAyMjEuNiAxMTcuNjUgMjIxLjU1IDExNy4zIDIyMS40NSAxMTcuMiAyMjEuNTUKTCAxMTcuMjUgMjIxLjU1ClEgMTE3LjY1IDIyMS44IDExOC4wNSAyMjEuODUgMTE4LjM1IDIyMS45NSAxMTguOTUgMjIxLjk1CkwgMTE5LjU1IDIyMi4xNQpRIDExOS42NSAyMjIuMiAxMjAuNCAyMjIuMzUgMTIwLjkgMjIyLjUgMTIxLjE1IDIyMi43CkwgMTIxLjM1IDIyMi44NSAxMjEuNjUgMjIyLjkKUSAxMjEuNyAyMjIuOSAxMjIuNiAyMjMuMDUKTCAxMjIuOTUgMjIzLjE1ClEgMTIzLjI1IDIyMy4yIDEyMy45IDIyMy4yCkwgMTI0LjQgMjIzLjE1IDEyNC4zNSAyMjMKTSAxMTMuNTUgMTY3LjMKTCAxMTMuNSAxNjcuMgpRIDEwNiAxNzIuOSAxMDIuODUgMTgwLjQ1IDEwMiAxODIuMzUgMTAxLjI1IDE4NS4xIDk5LjggMTg5Ljc1IDk5LjQ1IDE5My4wNSA5OC45NSAxOTcuNTUgMTAwLjIgMjAxLjEgMTAwLjQgMjAwLjc1IDEwMC4yIDIwMCA5OS40IDE5Ni42NSAxMDAgMTkyLjU1IDEwMC40IDE4OS41NSAxMDEuNyAxODUuMiAxMDMgMTgwLjY1IDEwNC42NSAxNzcuNyAxMDYuMDUgMTc1LjIgMTA4LjggMTcyLjEgMTEwLjk1IDE2OS42NSAxMTMuNTUgMTY3LjMKTSAyNTcuNyAxODkuNwpRIDI1Ni4zIDE5Mi45NSAyNTQuNjUgMTk1LjI1IDI1My4zNSAxOTcuMDUgMjUxLjYgMTk4LjggMjQ5LjE1IDIwMS4yNSAyNDYuOSAyMDIuOTUgMjUwLjcgMjAwLjggMjUzLjcgMTk3LjQgMjU2LjY1IDE5NC4wNSAyNTguNCAxOTAKTCAyNTkuMDUgMTg4LjQKUSAyNjAuNzUgMTg0LjEgMjYwLjc1IDE4MS44CkwgMjYwLjY1IDE4MS43NSAyNTkuOTUgMTgzLjgKUSAyNTguNSAxODcuOSAyNTcuNyAxODkuNwpNIDE5Mi40NSAxODUuMwpRIDE5NCAxOTEuMzUgMTk3LjU1IDE5Ni4zNSAyMDEuMyAyMDEuNiAyMDYuNSAyMDQuNTUgMjA2LjQ1IDIwNC4yIDIwNS42IDIwMy41IDIwMS4yNSAyMDAuNDUgMTk4LjE1IDE5Ni4yNSAxOTQuOSAxOTEuOTUgMTkzLjUgMTg3LjA1IDE5Mi40IDE4My4yNSAxOTIuNCAxNzkuMTUgMTkxLjc1IDE4MS4xNSAxOTIuNDUgMTg1LjMKTSAyMTguMyAxNDYuNjUKTCAyMjEuMDUgMTQ1LjgKUSAyMjcgMTQ0LjIgMjMzLjI1IDE0NC44IDIzNy45NSAxNDUuMiAyNDIuMiAxNDYuODUgMjQyLjUgMTQ2LjkgMjQzIDE0Ny4yIDI0My4xIDE0Ny4yIDI0My4xNSAxNDcuMjUgMjQzLjIgMTQ3LjI1IDI0My4yNSAxNDcuMyAyNDMuNDUgMTQ3LjM1IDI0My42NSAxNDcuNDUgMjQ0LjMgMTQ3Ljc1IDI0NC45NSAxNDguMDUgMjQ0Ljk1IDE0OC4xIDI0NSAxNDguMQpMIDI0NS4wNSAxNDgKUSAyMzcuNCAxNDMuMTUgMjI1LjY1IDE0NC40NSAyMjMuNDUgMTQ0LjcgMjIxLjg1IDE0NS4xIDIxOC43IDE0NS44IDIxNS4wNSAxNDcuNDUgMjEyLjc1IDE0OC40NSAyMDguNSAxNTAuNjUgMjA1LjggMTUyLjEgMjA0Ljg1IDE1My4yIDIwNS40IDE1My4wNSAyMDYuNjUgMTUyLjMgMjEyLjIgMTQ4LjggMjE4LjMgMTQ2LjY1IFoiLz4KCjxwYXRoIGZpbGw9IiNEMUQyRDIiIHN0cm9rZT0ibm9uZSIgZD0iCk0gMTQzLjQ1IDIxOC4zNQpRIDE0My43NSAyMTguMDUgMTQzLjggMjE3Ljc1IDE0My44IDIxNy4zIDE0My40NSAyMTcuMwpMIDE0My40NSAyMTcuMjUKUSAxNDIuNiAyMTcuNSAxNDEuNCAyMTguMTUgMTM5LjcgMjE5LjE1IDEzOS40NSAyMTkuMjUgMTM5LjQgMjE5LjEgMTM5LjMgMjE5LjEKTCAxMzkuMyAyMTkuMDUKUSAxMzguNDUgMjE5LjUgMTM4IDIxOS42NQpMIDEzNy42IDIxOS43IDEzNi45IDIyMC4wNSAxMzUuMjUgMjIwLjY1ClEgMTMzLjQgMjIxLjA1IDEzMC4yIDIyMS41CkwgMTI4LjIgMjIxLjc1IDEyNS45IDIyMS43NQpRIDEyNC40IDIyMS44NSAxMjMuNjUgMjIyIDEyMy4zIDIyMi4xIDEyMy4zIDIyMi4zIDEyMy4yIDIyMi41NSAxMjMuNyAyMjIuNjUKTCAxMjUuMyAyMjIuODUKUSAxMjguNSAyMjMuMDUgMTMwLjYgMjIyLjg1CkwgMTMyLjEgMjIyLjYgMTMyLjE1IDIyMi42IDEzMy42IDIyMi4zNSAxMzMuNyAyMjIuMzUgMTM1LjQgMjIyLjA1ClEgMTQwLjkgMjIwLjkgMTQzLjQ1IDIxOC4zNSBaIi8+Cgo8cGF0aCBmaWxsPSIjRkVGRUZFIiBzdHJva2U9Im5vbmUiIGQ9IgpNIDE1MS40IDE5MC41NQpRIDE1MC45NSAxOTAuNCAxNTAuNjUgMTkwLjk1IDE1MC40IDE5MS4yIDE1MC41IDE5MS42CkwgMTUwLjU1IDE5MS44IDE1MC41NSAxOTEuOSAxNTAuNDUgMTkyLjQKUSAxNTAuNCAxOTIuNTUgMTUwLjUgMTkyLjg1CkwgMTUwLjUgMTkzLjIgMTUwLjQ1IDE5My42NSAxNTAuNDUgMTk0LjI1IDE1MC43IDE5NC44IDE1MS4zIDE5NSAxNTEuNSAxOTUgMTUxLjcgMTk0Ljg1IDE1MS45IDE5NC43NSAxNTEuOTUgMTk0LjcKUSAxNTEuOSAxOTQuOSAxNTEuOSAxOTUuMTUgMTUxLjM1IDE5OC4xNSAxNTAuNCAyMDEgMTUwLjE1IDIwMS44IDE0OS44IDIwMi40NSAxNDkuNyAyMDIuNjUgMTQ4LjkgMjAzLjg1IDE0Ny4zNSAyMDUuOSAxNDUuOSAyMDcuNTUgMTQ1LjA1IDIwOC42IDE0NSAyMDkuMjUgMTQ0LjkgMjEwLjI1IDE0NC42NSAyMTAuNCAxNDQuNzUgMjEwLjYgMTQ1IDIxMC41IDE0NS4xIDIxMC40NSAxNDUuMyAyMTAuMjUKTCAxNDUuOSAyMTAuMQpRIDE0Ni40NSAyMTAuMDUgMTQ2Ljk1IDIwOS43NSAxNDcuMTUgMjA5LjY1IDE0Ny41IDIwOS41IDE0OS43IDIwOC4yNSAxNTAuNzUgMjA2LjcgMTUxLjI1IDIwNiAxNTEuODUgMjA0Ljc1CkwgMTUyLjYgMjAzLjIKUSAxNTQuMzUgMTk5LjMgMTU0LjM1IDE5NS4wNQpMIDE1NC4xNSAxOTEuMTUKUSAxNTQuMTUgMTkwLjc1IDE1NCAxOTAuNTUgMTUzLjg1IDE5MC4yNSAxNTMuNiAxOTAuMyAxNTMuNSAxOTAuMTUgMTUzLjQgMTkwLjA1CkwgMTUzLjM1IDE5MC4wNQpRIDE1My4xIDE5MC4xNSAxNTIuOSAxOTAuNCAxNTIuODUgMTkwLjQgMTUyLjggMTkwLjQ1IDE1Mi43NSAxOTAuNiAxNTIuNyAxOTAuNyAxNTIuNjUgMTkwLjggMTUyLjYgMTkwLjkgMTUyLjU1IDE5MSAxNTIuNSAxOTEuMSAxNTIuMzUgMTkxLjU1IDE1Mi4yNSAxOTIuMgpMIDE1Mi4yNSAxOTIKUSAxNTIuMzUgMTkxLjY1IDE1Mi4yIDE5MS4zNQpMIDE1Mi4xIDE5MS4xNSAxNTIuMDUgMTkxIDE1MS45IDE5MC43NSAxNTEuNCAxOTAuNSAxNTEuNCAxOTAuNTUKTSAxMDYuMTUgMTg0Ljg1ClEgMTA2LjE1IDE4NC42IDEwNiAxODQuNDUgMTA1Ljc1IDE4NC4xNSAxMDUuMSAxODQuNTUgMTAzLjQgMTg1Ljg1IDEwMi43IDE4Ny45NSAxMDIuNSAxODguNTUgMTAyLjMgMTg5LjU1IDEwMS44NSAxOTIuMiAxMDEuNyAxOTQuOApMIDEwMS43NSAxOTQuOApRIDEwMS4yNSAxOTguOCAxMDIuNyAyMDQuNgpMIDEwMy4yIDIwNi4xClEgMTAzLjggMjA3LjQ1IDEwNC43NSAyMDguMiAxMDUuNTUgMjA4LjkgMTA2LjIgMjA4LjYgMTA2LjkgMjA4LjMgMTA2LjcgMjA3LjI1IDEwNi42IDIwNi45NSAxMDYgMjA1Ljg1CkwgMTA1LjQgMjA0LjM1ClEgMTAzLjU1IDE5Ny45NSAxMDUgMTg5Ljg1IDEwNS4zIDE4OC4yNSAxMDUuNTUgMTg3LjQgMTA2LjE1IDE4NS4zNSAxMDYuMTUgMTg0Ljg1IFoiLz4KCjxwYXRoIGZpbGw9IiM0ODhFOTYiIGZpbGwtb3BhY2l0eT0iMC45ODgyMzUyOTQxMTc2NDcxIiBzdHJva2U9Im5vbmUiIGQ9IgpNIDk1LjMgMTMxLjQKUSA5NS4yNSAxMzEuMzUgOTUgMTMxLjIgOTQuOCAxMzEuMDUgOTQuNDUgMTMxLjA1IDk0LjMgMTMxLjA1IDk0LjIgMTMxLjEgOTQuMDUgMTMxLjE1IDkzLjk1IDEzMS4yNSA5My43NSAxMzEuNDUgOTMuNzUgMTMxLjgKTCA5My44IDEzMi4yNSA5My43NSAxMzIuNQpRIDkzLjY1IDEzMy4wNSA5NC4yIDEzMy4yNQpMIDk0LjU1IDEzMy4zIDk0Ljc1IDEzMy4zIDk0LjkgMTMzLjIKUSA5NS4yIDEzMi45NSA5NS4yIDEzMi44NSA5NS4yNSAxMzIuOCA5NS4zNSAxMzIuNQpMIDk1LjU1IDEzMi4yClEgOTUuNiAxMzEuOTUgOTUuNSAxMzEuNzUKTCA5NS40NSAxMzEuNyA5NS4zIDEzMS40Ck0gMTAxLjY1IDExOC42NQpRIDEwMS43NSAxMTguMjUgMTAxLjMgMTE3LjY1IDEwMC42IDExNi43IDk5Ljk1IDExNi4yIDk5LjcgMTE0LjQgOTguMiAxMTMuMyA5Ny4yNSAxMTIuNjUgOTcuMTUgMTEyLjQ1CkwgOTYuNjUgMTExLjY1ClEgOTYuNDUgMTExLjQgOTYgMTExLjIKTCA5NC4xIDExMC4xNQpRIDkzLjc1IDEwOS45IDkzLjI1IDEwOS4yCkwgOTIuNjUgMTA4LjMKUSA5Mi4yIDEwNy42IDkxLjggMTA3LjI1IDkxLjIgMTA2LjcgOTAuNiAxMDYuNzUgODkuNiAxMDYuOSA4OS4yIDEwNy43NSA4OC44NSAxMDguMyA4OC45NSAxMDkuMzUgODkuMDUgMTEwIDg5LjQ1IDExMC45NQpMIDg5Ljc1IDExMS44NQpRIDg5Ljc1IDExMi4yNSA4OS45IDExMi41NQpMIDkwLjE1IDExMwpRIDkwLjMgMTEzLjMgOTAuNCAxMTQuMQpMIDkwLjY1IDExNC43NSA5MC45IDExNS43NQpRIDkwLjkgMTE2LjU1IDkxLjA1IDExNi45IDkxLjQ1IDExNy42IDkyIDExNy4zIDkyLjI1IDExNy4xNSA5Mi4zNSAxMTYuNzUKTCA5Mi4zIDExNi4wNQpRIDkyLjI1IDExNS41NSA5Mi4zNSAxMTUuMTUKTCA5Mi44NSAxMTUuMiA5My4zNSAxMTUuMQpRIDkzLjU1IDExNS4wNSA5NC4wNSAxMTUuMjUKTCA5Ny42NSAxMTYuNyA5OS44NSAxMTguNDUKUSAxMDAuMzUgMTE4Ljk1IDEwMC43NSAxMTkgMTAxLjQgMTE5LjIgMTAxLjY1IDExOC42NQpNIDI3Mi4yNSA3My44NQpMIDI3Mi4yIDczLjc1ClEgMjcxLjI1IDc0LjE1IDI2OC45NSA3NS45IDI2Ny45NSA3Ni43IDI2Ny40NSA3Ny4yCkwgMjY2LjE1IDc4LjUgMjY1LjA1IDc5LjMKUSAyNjQuNyA3OS41NSAyNjMuNiA4MC42NSAyNjEuOTUgODIuNSAyNjAuNyA4NC45NSAyNjAuNSA4NS4zIDI2MC40IDg1LjggMjYwLjQgODYuMzUgMjYwLjc1IDg2LjU1IDI2MS4xNSA4Ni43NSAyNjEuNjUgODYuNDUgMjYxLjc1IDg2LjM1IDI2Mi4yNSA4NS43NSAyNjUuMDUgODEuNzUgMjY5LjU1IDc5LjkgMjY5LjcgODAuMzUgMjcwLjE1IDgxLjE1IDI3MC40NSA4MS44NSAyNzAuNDUgODMuMDUgMjcwLjM1IDg0LjcgMjcwLjQgODUuMDUgMjcwLjQgODUuMyAyNzAuNSA4NS4zNSAyNzAuNjUgODUuNDUgMjcwLjk1IDg1LjM1IDI3MS42NSA4NC45NSAyNzIuMSA4My43NSAyNzIuMzUgODIuODUgMjcyLjcgODIuMTUKTCAyNzMuMiA4MS4zNQpRIDI3My40NSA4MC45NSAyNzMuNzUgODAuMDUgMjczLjkgNzkuNiAyNzQgNzguNQpMIDI3NC4zNSA3NS41IDI3NC41IDc0LjkKUSAyNzQuNSA3NC4xNSAyNzMuNjUgNzMuODUgMjczLjEgNzMuNjUgMjcyLjI1IDczLjg1IFoiLz4KCjxwYXRoIGZpbGw9IiM2RkM1RDMiIHN0cm9rZT0ibm9uZSIgZD0iCk0gOTcuOTUgMTI3LjE1CkwgOTcuOSAxMjcuMTUKUSA5Ny43NSAxMjcuNDUgOTcuNjUgMTI3LjYKTCA5Ny42IDEyNy41NQpRIDk3LjQgMTI3LjMgOTcuMSAxMjcuMjUKTCA5Ni42NSAxMjcuMzUKUSA5NS43NSAxMjcuNjUgOTUuMyAxMjguNDUgOTQuOTUgMTI5LjA1IDk0Ljc1IDEyOS4xNSA5NC4zIDEyOC45IDk0LjE1IDEyOC43IDk0LjA1IDEyOC42IDkzLjkgMTI4LjIgOTMuNyAxMjcuODUgOTMuMyAxMjcuNgpMIDkyLjkgMTI3LjI1IDkyLjY1IDEyNi44NQpRIDkyLjM1IDEyNi42NSA5Mi4yNSAxMjYuNSA5Mi4wNSAxMjYuMSA5MS44NSAxMjYKTCA5MS42IDEyNS44NSA5MS40IDEyNS41NQpRIDkxLjE1IDEyNS4yIDkwLjQ1IDEyNS4xCkwgOTAuMjUgMTI1LjI1ClEgOTAuMyAxMjUuNDUgOTAuMSAxMjUuNzUKTCA5MC4yIDEyNS45IDkwLjQgMTI2LjQgOTAuNiAxMjYuNzUgOTEuNiAxMjguMQpRIDkxLjk1IDEyOC41NSA5Mi4wNSAxMjguNiA5Mi40NSAxMjguODUgOTIuNSAxMjguOTUgOTIuNTUgMTI5LjA1IDkyLjY1IDEyOS4zIDkyLjc1IDEyOS40NSA5My4wNSAxMjkuNjUKTCA5My4zIDEzMCA5My42IDEzMC4xNQpRIDkzLjg1IDEzMC4zIDk0LjA1IDEzMC45CkwgOTQuMiAxMzEuMQpRIDk0LjMgMTMxLjA1IDk0LjQ1IDEzMS4wNSA5NC44IDEzMS4wNSA5NSAxMzEuMiA5NS4yNSAxMzEuMzUgOTUuMyAxMzEuNApMIDk1LjQ1IDEzMS43IDk1LjUgMTMxLjc1ClEgOTUuOCAxMzEuNyA5NiAxMzEuNSA5Ni4yIDEzMS4zIDk2LjMgMTMxCkwgOTYuNTUgMTMwLjQgOTcgMTMwLjE1ClEgOTcuMTUgMTMwIDk3LjE1IDEyOS43NQpMIDk3Ljg1IDEyOC40NQpRIDk4IDEyOC4yIDk3Ljk1IDEyOC4xCkwgOTcuOCAxMjcuODUKUSA5Ny45IDEyNy40IDk3Ljk1IDEyNy4xNSBaIi8+Cgo8cGF0aCBmaWxsPSIjMDEwMjAyIiBzdHJva2U9Im5vbmUiIGQ9IgpNIDIxMi4yNSAxOTAuNjUKUSAyMTIgMTkwLjk1IDIxMi4yIDE5MS44NQpMIDIxMi42NSAxOTMuMDUKUSAyMTIuOSAxOTMuNjUgMjEzLjA1IDE5My44IDIxMy4xIDE5My44NSAyMTMuMiAxOTMuOTUgMjEzLjQ1IDE5NC4zNSAyMTMuNzUgMTk0LjcgMjE0LjUgMTk1LjUgMjE1LjYgMTk1LjggMjE3LjQgMTk2LjUgMjE4LjY1IDE5Ni42NSAyMjAuNSAxOTYuOCAyMjMuNiAxOTUuNjUgMjI0LjggMTk1LjE1IDIyNS4yNSAxOTQuNzUgMjI1LjcgMTk0LjQgMjI2LjI1IDE5My42IDIyNi43NSAxOTIuOSAyMjYuOSAxOTIuNDUgMjI3LjEgMTkxLjg1IDIyNyAxOTAuNSAyMjcgMTg5Ljk1IDIyNi44NSAxODkuNSAyMjYuNTUgMTg4Ljk1IDIyNi4yIDE4OC43NQpMIDIyNS45IDE4OC45NQpRIDIyNS40NSAxODkuMjUgMjI1LjEgMTg5LjkgMjI0Ljc1IDE5MC43IDIyNC41NSAxOTEuMTUgMjI0LjUgMTkxIDIyNC41NSAxOTAuOQpMIDIyNC4zNSAxOTAuOTUKUSAyMjQuMzUgMTkxLjE1IDIyNC4xNSAxOTEuMjUKTCAyMjMuNzUgMTkxLjMKUSAyMjMuMDUgMTkxLjM1IDIyMi4wNSAxOTIuMTUgMjIwLjkgMTkzLjA1IDIyMC40NSAxOTMuMiAyMTkuNyAxOTMuNDUgMjE4LjQ1IDE5My4yNQpMIDIxNi4zIDE5Mi45ClEgMjE2IDE5Mi43NSAyMTUuNTUgMTkyLjMgMjE0LjcgMTkxLjM1IDIxNC41NSAxOTEuMDUgMjE0LjIgMTkwLjQ1IDIxNC4xNSAxOTAuNCAyMTMuODUgMTkwIDIxMy41NSAxOTAuMDUgMjEzLjIgMTkwLjE1IDIxMy4wNSAxOTAuMiAyMTIuODUgMTkwLjI1IDIxMi43IDE5MC40NSAyMTIuNDUgMTkwLjQ1IDIxMi4yNSAxOTAuNjUgWiIvPgoKPHBhdGggZmlsbD0iIzUxNjI0MyIgc3Ryb2tlPSJub25lIiBkPSIKTSAxNzcuMiAxNTAuNwpMIDE3Ny40IDE1MC41NQpRIDE3Ny41IDE1MC4zIDE3Ny4yNSAxNTAuMiAxNzcgMTUwLjEgMTc2Ljg1IDE1MC4xNQpMIDE3Ni44NSAxNTAuMSAxNjcuNyAxNTAuODUKUSAxNjUuNzUgMTUwLjk1IDE2My43NSAxNTAuODUgMTU4LjU1IDE1MC43IDE1NCAxNTAuMiAxNTMuNCAxNTAuMSAxNTMuNCAxNTAuNSAxNTMuNCAxNTAuNjUgMTUzLjYgMTUwLjc1IDE1NC4zNSAxNTEuMyAxNTYuMiAxNTEuNiAxNjQuNDUgMTUyLjg1IDE3Mi41NSAxNTEuODUgMTc1LjYgMTUxLjQ1IDE3Ny4yIDE1MC43Ck0gMjM2LjE1IDcyLjUKTCAyMzYuMSA3Mi41ClEgMjMwLjUgNzMuNSAyMjYuNyA3Ny43CkwgMjI0LjIgODAuOApRIDIyMy4yIDgyLjEgMjIyLjc1IDgyLjg1IDIyMi4xIDg0LjA1IDIyMS40IDg2LjI1IDIyMSA4Ny40IDIyMC44IDg4LjMgMjIwLjU1IDg5LjY1IDIyMC43NSA5Mi40CkwgMjIwLjg1IDkzLjUKUSAyMjAuODUgOTUuMiAyMjEuMTUgOTYuNDUgMjIwLjYgOTYuNiAyMjAuMSA5Ni44IDIxMy40IDk4Ljg1IDIwNi42NSAxMDAuNiAxNzguNjUgMTA3Ljc1IDE0OS43IDEwOC44IDEzOSAxMDkuMiAxMjguOSAxMDguNzUgMTI1IDEwOC41NSAxMjIuNyAxMDguMiAxMTkuMyAxMDcuNyAxMTYuOCAxMDYuNiAxMTYuMzUgMTA2LjQgMTE1LjQ1IDEwNS45NSAxMTUuNCAxMDUuNyAxMTUgMTA1LjUKTCAxMTQuMjUgMTA1LjI1IDExMy40NSAxMDQuNiAxMTMuMiAxMDQuNDUgMTEyLjg1IDEwNC4zClEgMTEyLjU1IDEwNC4xNSAxMTIuMTUgMTAzLjc1IDExMS43IDEwMy4yNSAxMTEuNDUgMTAzLjEgMTExLjggMTAyLjQ1IDExMS41IDEwMi4xIDExMS4zIDEwMS43NSAxMTAuNyAxMDEuNzUKTCAxMTAuNyAxMDEuNwpRIDExMC42OTc2NTYyNSAxMDEuOCAxMTAuNTUgMTAxLjggMTEwLjM1IDEwMS43NSAxMDkuOSAxMDEuODUKTCAxMDkuMyAxMDIuMQpRIDEwOC44NSAxMDIuNCAxMDguNzUgMTAyLjkgMTA4LjYgMTAzLjQgMTA4Ljc1IDEwMy44NSAxMDguODUgMTA0LjEgMTA5LjIgMTA0LjQ1CkwgMTA5LjU1IDEwNC44ClEgMTEwLjIgMTA1LjQ1IDExMS4yIDEwNS41NQpMIDExMS40IDEwNS41NQpRIDExNS44IDEwOC4zIDEyMS45NSAxMDkuNDUgMTI2LjggMTEwLjM1IDEzNC41IDExMC40IDE3NC42IDExMC44IDIxMy40NSAxMDAuMiAyMTguNCA5OC44IDIyMS40NSA5Ny40IDIyMS42NSA5OCAyMjIgOTguNDUgMjIyLjY1IDk5LjMgMjIzLjg1IDEwMC4xNSAyMjUuMzUgMTAxLjI1IDIyNi4zNSAxMDEuNDUgMjI3LjQ1IDEwMS43IDIyOS4yNSAxMDEuMyAyMzQuNjUgMTAwLjIgMjM3LjQ1IDk3LjUgMjM4LjU1IDk2LjQ1IDIzOS41NSA5NC45CkwgMjQxLjE1IDkyLjMKUSAyNDQuMSA4Ni43IDI0My40IDgwLjQgMjQzLjIgNzguNjUgMjQyLjc1IDc3LjM1IDI0Mi45NSA3Ny41NSAyNDMuMjUgNzcuODUgMjQzLjMgNzYuNjUgMjQyLjY1IDc1LjQ1IDI0Mi4wNSA3NC4zNSAyNDAuOTUgNzMuNiAyMzguOTUgNzIuMjUgMjM2LjE1IDcyLjUKTSAyMjIuMTUgOTIuOTUKTCAyMjEuODUgOTAuNTUKUSAyMjIuMTUgODcuNjUgMjIzIDg1LjcgMjIzLjYgODQuMTUgMjI0Ljk1IDgyLjIgMjI3LjM1IDc4Ljc1IDIyOS45IDc2LjggMjMzLjE1IDc0LjMgMjM2LjYgNzMuOTUgMjM5LjA1IDczLjc1IDI0MC4zNSA3NC43NSAyNDAuNiA3NC45NSAyNDEuMDUgNzUuNDUgMjQxLjkgNzYuOCAyNDIuMTUgNzkuNSAyNDIuMyA4MC4zNSAyNDIuMyA4MS4yIDI0Mi4zNSA4My4xNSAyNDEuNTUgODUuOTUgMjQwLjQ1IDkwLjI1IDIzOS4wNSA5Mi42IDIzNy4xIDk2LjE1IDIzNC4yIDk3Ljc1IDIzMi45IDk4LjUgMjMwLjYgOTkuMjUgMjI4LjYgOTkuODUgMjI3LjUgOTkuNzUgMjI2LjEgOTkuNyAyMjQuODUgOTguOCAyMjMuNjUgOTcuOSAyMjMuMDUgOTYuNiAyMjIuNiA5NS42IDIyMi4xNSA5Mi45NQpNIDI5My42IDEwNS4xClEgMjkyLjM1IDEwNS4zIDI5MC43NSAxMDUuNjUgMjkwLjcgMTA1LjY1IDI5MC42IDEwNS42NSAyODguNDUgMTA2LjEgMjg1LjcgMTA2LjcKTCAyOTMuOSAxMDUuMTUgMjkzLjYgMTA1LjEKTSAyMjAuOTUgMTMzLjYKUSAyMjAuNTUgMTMzLjggMjIwLjIgMTM0LjA1CkwgMjE2LjcgMTM2LjIgMjE1IDEzNy41NQpRIDIxMy41IDEzOC43NSAyMTMuMDUgMTM5LjU1IDIxMi45NSAxMzkuOCAyMTIuOTUgMTM5Ljg1IDIxMy4wNSAxNDAuMjUgMjEzLjQgMTQwIDIxMy42IDEzOS45NSAyMTMuODUgMTM5LjY1IDIxNC4yIDEzOS4zIDIxNS4xNSAxMzguOSAyMTUuMyAxMzguOCAyMTUuNDUgMTM4LjcgMjE1LjU1IDEzOC43IDIxNS42NSAxMzguNyAyMTYgMTM4LjcgMjE2LjggMTM4LjMKTCAyMjEuMiAxMzUuOQpRIDIyMi43NSAxMzUgMjI1LjEgMTMzLjk1IDIyNi40NSAxMzMuMyAyMjkuMDUgMTMyLjEKTCAyMjkuOTUgMTMxLjYKUSAyMzAuMzUgMTMxLjM1IDIzMS4xIDEzMC43NQpMIDIzMS4zNSAxMzAuNgpRIDIzMi43IDEyOS43NSAyMzQuMzUgMTI4LjcKTCAyMzYuNjUgMTI3LjI1ClEgMjM3LjU1IDEyNi44NSAyMzguOSAxMjYuMDUKTCAyNDAuNTUgMTI1LjEKUSAyNDEuNTUgMTI0LjYgMjQyLjU1IDEyNC4xNSAyNDguMSAxMjEuNDUgMjU5LjA1IDExNS42NSAyNjcuOTUgMTExLjIgMjc0LjkgMTA5LjE1IDI3MS42NSAxMDkuOCAyNjkuMSAxMTAuMiAyNjIuOCAxMTIuNTUgMjU0LjUgMTE2LjkgMjQwIDEyNC41NSAyMzUuODUgMTI2LjMgMjM0LjY1IDEyNi44IDIzNC4xIDEyNi4zNSAyMzMuMDUgMTI2LjggMjMyLjA1IDEyNy4yNSAyMzEuNTUgMTI3LjQ1IDIzMS4zNSAxMjcuNwpMIDIzMC43NSAxMjcuOTUKUSAyMjkuNSAxMjguNSAyMjkuMiAxMjguNwpMIDIyMi4xNSAxMzIuOApRIDIyMS41IDEzMy4yIDIyMC45NSAxMzMuNgpNIDI0OS41IDgzLjQKUSAyNDguOTUgODMuNTUgMjQ4LjY1IDg0LjQKTCAyNDYuOSA4OS4yClEgMjQ2LjMgOTAuODUgMjQ2LjEgOTEuNzUgMjQ2LjIgOTEuODUgMjQ2LjIgOTIuMTUgMjQ1Ljk1IDk1LjcgMjQ3LjkgOTguNyAyNDguMDUgOTguOTUgMjQ4LjIgOTkuMTUgMjQ0LjQ1IDEwMi43NSAyMzguODUgMTA1LjY1IDIzNC4yNSAxMDggMjI2Ljc1IDExMC41IDE3OS45IDEyNi4xNSAxMzAuOSAxMjQuNjUgMTIzLjQ1IDEyNC40IDExOC44NSAxMjMuNDUgMTEyLjM1IDEyMi4xIDEwOC4wNSAxMTguOApMIDEwNy43NSAxMTkuMTUKUSAxMDkuODUgMTIyLjM1IDExNC4zNSAxMjMuODUgMTE3LjYgMTI0Ljk1IDEyMi44IDEyNS4zIDE0OS44NSAxMjcuMzUgMTc2LjkgMTIzLjY1IDIwNCAxMjAgMjI5LjUgMTEwLjc1IDIzNy44NSAxMDcuNyAyNDMuMiAxMDQuOSAyNDMuNjUgMTA0LjY1IDI0NC4xIDEwNC40IDI0Ni40NSAxMDMuMTUgMjQ3Ljc1IDEwMS43NSAyNDggMTAxLjQ1IDI0OC4yIDEwMS4yIDI0OC44IDEwMC4zNSAyNDkuMSA5OS41IDI0OS4yIDk5LjUgMjQ5LjM1IDk5LjQ1IDI0OS45NSA5OS4yIDI1MCA5OC43NSAyNDkuOTUgOTguNjUgMjQ5Ljk1IDk4LjYKTCAyNDkuOCA5OApRIDI0OS42NSA5Ny4zIDI0OS41NSA5Ni45IDI0OS4yIDk2LjE1IDI0OS4wNSA5NS43CkwgMjQ4LjQ1IDkzLjI1ClEgMjQ4LjMgOTIuNzUgMjQ4LjQgOTIuMTUgMjQ4LjQgOTAuMzUgMjQ4LjY1IDg5LjUKTCAyNDkuMSA4OC4xNQpRIDI0OS41NSA4Ni43IDI1MCA4NS43NSAyNTAuNDUgODQuNzUgMjUwLjQgODQuMzUgMjUwLjQgODMuOTUgMjUwLjE1IDgzLjY1IDI0OS44NSA4My4zNSAyNDkuNSA4My40IFoiLz4KCjxwYXRoIGZpbGw9IiNEMUQxRDEiIHN0cm9rZT0ibm9uZSIgZD0iCk0gMjQxLjggMTQ4LjI1ClEgMjQyLjIgMTQ4LjQ1IDI0Mi4zNSAxNDguNDUgMjQyLjg1IDE0OC4zNSAyNDIuNjUgMTQ4LjA1IDI0My4xNSAxNDguMSAyNDMuOCAxNDguNyAyNDQuNTUgMTQ5LjMgMjQ0Ljk1IDE0OS40CkwgMjQ1LjEgMTQ5LjIKUSAyNDYuODUgMTUwLjEgMjQ4IDE1MS4yIDI0OS4xNSAxNTIuMjUgMjUwLjk1IDE1NC43NQpMIDI1Mi4xIDE1Ni40ClEgMjUyLjM1IDE1Ni44IDI1Mi44NSAxNTcuNTUgMjUzLjI1IDE1OC4yIDI1My43IDE1OC41NSAyNTMuNCAxNTcuMzUgMjUzIDE1Ni41NQpMIDI1My4wNSAxNTYuNTUKUSAyNTAuMzUgMTUyLjI1IDI0OC40IDE1MC41IDI0Ny42NSAxNDkuODUgMjQ1IDE0OC4xIDI0NC45NSAxNDguMSAyNDQuOTUgMTQ4LjA1IDI0NC4zIDE0Ny43NSAyNDMuNjUgMTQ3LjQ1CkwgMjQzLjQgMTQ3LjQKUSAyNDMuMzUgMTQ3LjM1IDI0My4yNSAxNDcuMyAyNDMuMiAxNDcuMjUgMjQzLjE1IDE0Ny4yNSAyNDMuMSAxNDcuMiAyNDMgMTQ3LjIgMjQyLjUgMTQ2LjkgMjQyLjIgMTQ2Ljg1IDI0MS42NSAxNDYuNyAyNDEuMDUgMTQ2Ljg1IDI0MC43IDE0Ni44NSAyNDAuNDUgMTQ3LjA1IDI0MC4xNSAxNDcuMiAyNDAuMTUgMTQ3LjYgMjQxLjEgMTQ3Ljg1IDI0MS44IDE0OC4yNSBaIi8+Cgo8cGF0aCBmaWxsPSIjNTg5MzlDIiBmaWxsLW9wYWNpdHk9IjAuOTk2MDc4NDMxMzcyNTQ5IiBzdHJva2U9Im5vbmUiIGQ9IgpNIDIyMC40NSAxMzguNApRIDIyMC4xIDEzOC45IDIyMCAxMzkuNjUgMjIwLjU1IDEzOS44NSAyMjEuNjUgMTM5LjEKTCAyMjUuMzUgMTM2LjM1ClEgMjI1LjY1IDEzNi4xNSAyMjUuODUgMTM2LjIgMjI1Ljk1IDEzNi4yIDIyNi4yIDEzNi40NSAyMjYuNTUgMTM2LjY1IDIyNi45IDEzNi40NSAyMjcuMDUgMTM2LjQgMjI3LjUgMTM2LjA1IDIyOC4xIDEzNS41NSAyMjkuMSAxMzUgMjI5LjY1IDEzNC43IDIzMC43NSAxMzQuMQpMIDIzNC45IDEzMS4yNQpRIDIzNS40NSAxMzAuODUgMjM1LjUgMTMwLjY1IDIzNS42IDEzMC4zIDIzNS40IDEzMCAyMzUuMTUgMTI5LjY1IDIzNC44IDEyOS42NSAyMjcuODUgMTMzIDIyNC4yNSAxMzUuNDUgMjIzLjIgMTM2LjE1IDIyMS4xIDEzNy43NSAyMjAuNiAxMzguMTUgMjIwLjQ1IDEzOC40Ck0gMzAwLjc1IDI3MC4wNQpRIDMwMC44IDI3MC4xIDMwMC44IDI3MC4yCkwgMzAwLjggMjcwLjI1IDMwMC45IDI3MC40IDMwMC45NSAyNzAuNDUgMzAwLjkgMjcwLjc1ClEgMzAxLjE1IDI3MS4wNSAzMDEuNjUgMjcxLjM1IDMwMy4yIDI3Mi40NSAzMDYuMzUgMjc0LjY1IDMwOS4wNSAyNzYuNjUgMzEwLjc1IDI3OC4zNSAzMTMuMyAyODAuOSAzMTUuOSAyODUgMzE3LjQgMjg3LjQgMzIwLjIgMjkyLjI1CkwgMzIwLjg1IDI5My4yClEgMzIxLjA1IDI5My42IDMyMS4zNSAyOTMuNiAzMjEuNzUgMjkzLjcgMzIxLjc1IDI5My4xIDMyMS44IDI5MyAzMjEuNjUgMjkyLjY1IDMyMS4yIDI5MiAzMjAuOCAyOTEuMjUgMzIwLjYgMjkwLjg1IDMyMC40NSAyOTAuNQpMIDMxOC40IDI4Ny4xNQpRIDMxNi4yNSAyODMuNTUgMzE0Ljg1IDI4MS42IDMxMy42IDI3OS44NSAzMTEuOSAyNzggMzEwLjIgMjc2LjMgMzA5LjMgMjc1LjU1IDMwOC4yNSAyNzQuNyAzMDUuNTUgMjcyLjk1CkwgMzAxLjY1IDI3MC41IDMwMS41NSAyNzAuNDUKUSAzMDEuMSAyNzAuMjUgMzAwLjc1IDI3MC4wNSBaIi8+Cgo8cGF0aCBmaWxsPSIjOEM5RDcxIiBmaWxsLW9wYWNpdHk9IjAuOTk2MDc4NDMxMzcyNTQ5IiBzdHJva2U9Im5vbmUiIGQ9IgpNIDIxNi40IDg1LjU1ClEgMjE2LjM1IDg1LjYgMjE2LjQgODUuNwpMIDIxNy4xNSA4OS4zClEgMjE2LjQ1IDg5Ljk1IDIxNi4zNSA5MC45IDIxNi4yNSA5MS42NSAyMTYuNyA5Mi42IDIxNi45NSA5My4xNSAyMTcuNTUgOTQuMjUgMjE3Ljc1IDk0LjcgMjE3LjY1IDk0LjkgMjE3LjU1IDk1LjE1IDIxNy4yIDk1LjI1IDIxMi42NSA5Ny40NSAyMDcuNTUgOTkgMjA2Ljg1IDk5LjI1IDIwNi42NSA5OS40IDIwNi4yIDk5Ljc1IDIwNi4zNSAxMDAuMyAyMDYuNDUgMTAwLjQ1IDIwNi42NSAxMDAuNiAyMTMuNCA5OC44NSAyMjAuMSA5Ni44IDIyMC40IDk2LjQ1IDIyMC41NSA5Ni4yIDIyMSA5NS40IDIyMC42IDk0LjEgMjIwLjI1IDkyLjcgMjE5LjYgOTIgMjE5LjIgOTEuNiAyMTkgOTEuMzUgMjE4LjYgOTEgMjE4LjUgOTAuNyAyMTguMzUgOTAuMDUgMjE4LjI1IDg5LjcgMjE3Ljk1IDg5LjEgMjE3LjQ1IDg5LjI1CkwgMjE2LjYgODUuNDUgMjE2LjU1IDg1LjUKUSAyMTYuNSA4NS40NSAyMTYuNCA4NS41NSBaIi8+Cgo8cGF0aCBmaWxsPSIjRTdFQUUxIiBzdHJva2U9Im5vbmUiIGQ9IgpNIDIzNi44NSA4Mi4zClEgMjM2LjY1IDgxLjkgMjM2IDgxLjY1IDIzNS43IDgxLjQ1IDIzNS40IDgxLjQ1IDIzNS4yNSA4MS40IDIzNS4xIDgxLjM1CkwgMjM0Ljg1IDgxLjQ1ClEgMjMzLjc1IDgxLjYgMjMyLjggODIuMzUKTCAyMzEuMzUgODMuOQpRIDIzMC4yNSA4NS4zIDIyOS40NSA4Ny41NQpMIDIyOSA4OC45ClEgMjI4Ljg1IDg5LjU1IDIyOC45IDg5LjcKTCAyMjguOSA5MC43NQpRIDIyOC45IDkxLjY1IDIyOS4zIDkyLjU1IDIyOS42NSA5My4xNSAyMjkuOTUgOTMuNDUKTCAyMzAuMjUgOTMuNzUKUSAyMzAuNjUgOTQuMTUgMjMxLjE1IDk0LjMgMjMxLjcgOTQuNCAyMzIuNyA5My44CkwgMjMzLjI1IDkzLjQgMjMzLjYgOTIuNwpRIDIzMy43IDkyLjUgMjMzLjg1IDkyLjI1IDIzNC40IDkxLjYgMjM0Ljc1IDkwLjggMjM0LjggOTAuNyAyMzQuODUgOTAuNiAyMzQuOSA5MC42IDIzNSA5MC4yCkwgMjM1LjIgODkuMzUKUSAyMzUuMzUgODguODUgMjM1LjI1IDg4LjI1IDIzNS4yNSA4Ny41IDIzNSA4Ny4yNSAyMzUuMDUgODcuMDUgMjM0Ljk1IDg2LjkKTCAyMzUuNyA4NS44NQpRIDIzNi43IDg0LjMgMjM2LjkgODMuNiAyMzcuMTUgODIuOSAyMzYuODUgODIuMwpNIDIzMy4zIDg1ClEgMjMzLjMgODUuNzUgMjMzLjUgODYuMzUKTCAyMzMuNiA4Ni44NQpRIDIzMy42NSA4NyAyMzMuNjUgODcuMzUgMjMzLjY1IDg3LjYgMjMzLjggODcuNjUgMjM0LjIgODcuNzUgMjM0LjY1IDg3LjI1CkwgMjM0LjY1IDg3LjMgMjM0LjcgODcuNgpRIDIzNC44IDg3Ljg1IDIzNC44IDg4LjI1CkwgMjM0Ljc1IDg4LjYKUSAyMzQuNiA4OC41IDIzNC40IDg4LjYgMjM0LjE1IDg4LjY1IDIzNC4wNSA4OS4wNQpMIDIzMy43IDkwLjEKUSAyMzMuMjUgOTAuODUgMjMyLjM1IDkxLjQKTCAyMzIuMzUgOTEuMzUgMjMyLjMgOTEuMiAyMzIuMSA5MS4yClEgMjMyLjEgOTEuMjUgMjMxLjg1IDkxLjUKTCAyMzEuNyA5MS44ClEgMjMxLjUgOTEuNyAyMzEuMzUgOTEuNSAyMzAuODUgOTAuOSAyMzAuOSA5MC4yNSAyMzAuOSA4OS44IDIzMS4wNSA4OS4yNQpMIDIzMS40IDg4LjEgMjMxLjggODcuMjUKUSAyMzIgODYuOCAyMzIuNiA4NS45CkwgMjMzLjMgODUKTSAyMzIuMDUgOTMuNApRIDIzMS45NSA5My40NSAyMzEuODUgOTMuNSAyMzEuNzUzMTI1IDkzLjUgMjMxLjcgOTMuNTUKTCAyMzEuNzUgOTMuNSAyMzEuODUgOTMuNDUKUSAyMzEuOTUgOTMuNCAyMzIuMDUgOTMuNApNIDIzMC44NSA5My40ClEgMjMwLjY1IDkzLjIgMjMwLjQgOTIuOSAyMzAuNTUgOTMuMDUgMjMwLjc1IDkzLjE1IDIzMC44IDkzLjE1IDIzMC44IDkzLjIKTCAyMzAuOCA5My4yNQpRIDIzMC44IDkzLjMgMjMwLjg1IDkzLjQgWiIvPgoKPHBhdGggZmlsbD0iIzQ0NTgzOSIgZmlsbC1vcGFjaXR5PSIwLjk5MjE1Njg2Mjc0NTA5ODEiIHN0cm9rZT0ibm9uZSIgZD0iCk0gMzA1LjUgMTA0LjU1CkwgMzA2LjA1IDEwNC4zNSAzMDYuMyAxMDQuMyAzMDYuNSAxMDQuMSAzMDYuOTUgMTAzLjggMzA3LjMgMTAzLjUKUSAzMDcuOCAxMDMuMSAzMDcuOSAxMDIuOApMIDMwOC4xIDEwMi40ClEgMzA4LjMgMTAyLjEgMzA4LjMgMTAyIDMwNy42NSAxMDIuNjUgMzA3LjEgMTAyLjk1IDMwNi4xIDEwMy40NSAzMDQuMTUgMTAzLjcKTCAzMDQuMDUgMTAzLjc1ClEgMzAzLjk1IDEwMy45NSAzMDQgMTA0LjA1CkwgMzAzLjQ1IDEwNC4wNQpRIDMwMy4zIDEwNC4wNSAzMDMuMiAxMDQuMTUgMzAzLjEgMTA0LjMgMzAzLjE1IDEwNC40IDMwMy4yIDEwNC41IDMwMy40NSAxMDQuNiAzMDMuOTUgMTA0Ljc1IDMwNC45NSAxMDQuNjUgMzA1LjM1IDEwNC42NSAzMDUuNSAxMDQuNTUKTSAyOTIuNzUgNzYuOApMIDI4Ny4wNSA3NS43NQpRIDI4Ni40NSA3NS42NSAyODYuMSA3NS43CkwgMzA5LjUgODIuMSAzMDkuNSA4MS45NQpRIDMwNC45IDgwLjMgMzAwLjIgNzguODUKTCAyOTIuNzUgNzYuOCBaIi8+Cgo8cGF0aCBmaWxsPSIjNjY3NTRGIiBzdHJva2U9Im5vbmUiIGQ9IgpNIDI5OS41NSA5Ny40NQpRIDI5NS4zNSA5OC43NSAyOTQuNiA5OC45CkwgMjkwLjQgOTkuNzUKUSAyODIuNiAxMDEuNCAyNzMuOSAxMDUuMjUgMjcxLjkgMTA2LjE1IDI3MC43NSAxMDcuMDUgMjY5IDEwNy42IDI2Ny4yNSAxMDguMyAyNTkuNjUgMTExLjMgMjQ2LjYgMTE4LjkKTCAyMzQuMDUgMTI2LjM1IDIzNC4xIDEyNi4zNQpRIDIzNC42NSAxMjYuOCAyMzUuODUgMTI2LjMgMjQwIDEyNC41NSAyNTQuNSAxMTYuOSAyNjIuOCAxMTIuNTUgMjY5LjEgMTEwLjIgMjcxLjY1IDEwOS44IDI3NC45IDEwOS4xNSAyNzcuNzUgMTA4LjU1IDI4MS4xNSAxMDcuNzUgMjgzLjYgMTA3LjIgMjg1LjcgMTA2LjcgMjg4LjQ1IDEwNi4xIDI5MC42IDEwNS42NSAyOTAuNyAxMDUuNjUgMjkwLjc1IDEwNS42NSAyOTIuMzUgMTA1LjMgMjkzLjYgMTA1LjEgMjk0LjYgMTA0Ljg1IDI5NS40IDEwNC43NSAyOTcuOTUgMTA0LjM1IDMwMy41NSAxMDMuNzUgMzAzLjg1IDEwMy43IDMwNC4xNSAxMDMuNyAzMDYuMSAxMDMuNDUgMzA3LjEgMTAyLjk1IDMwNy42NSAxMDIuNjUgMzA4LjMgMTAyIDMwOC4zNSAxMDEuOTUgMzA4LjQgMTAxLjkgMzA4LjUgMTAxLjg1IDMwOC41NSAxMDEuNzUgMzA5LjMgMTAwLjk1IDMxMC4xIDk5LjcKTCAzMTUuOCA5MS4xClEgMzE1Ljk1IDkwLjkgMzE2LjEgOTAuNwpMIDMxNi4xIDkwLjY1IDMxNi4xNSA5MC41NQpRIDMxNi4yNSA5MC4zIDMxNi4zNSA5MC4wNQpMIDMxNi40IDg5Ljk1ClEgMzE2LjY1IDg5LjYgMzE2LjYgODkuNQpMIDMxNi42IDg5LjM1IDMxNi43IDg5LjEKUSAzMTYuOSA4OC42IDMxNi44NSA4OC4zNSAzMTYuOCA4OC4xIDMxNi43IDg3Ljk1IDMxNi44IDg3LjUgMzE2Ljg1IDg3LjA1IDMxNi45NSA4Ni43IDMxNi43NSA4Ni4zIDMxNi41IDg1Ljk1IDMxNi4yIDg2LjEKTCAzMTYuMTUgODUuOQpRIDMxNS42IDg2LjIgMzE1LjI1IDg3LjYgMzE0LjQ1IDkwLjkgMzEwLjggOTMuMiAzMDguNiA5NC42IDMwNC4wNSA5NgpMIDI5OS41NSA5Ny40NQpNIDMxMS4yNSA5NC42NQpRIDMxMS4xIDk0LjggMzExIDk0Ljk1CkwgMzEwLjk1IDk0LjkKUSAzMTAuOTUgOTQuODUgMzEwLjkgOTQuODUgMzExLjA1IDk0Ljc1IDMxMS4yNSA5NC42NQpNIDI4MC4yNSAxMDQuNTUKUSAyODAuMDUgMTA0LjY1IDI3OS45IDEwNC44IDI3OS41NSAxMDQuODUgMjc5LjIgMTA0LjkgMjc5LjcgMTA0LjcgMjgwLjI1IDEwNC41NSBaIi8+Cgo8cGF0aCBmaWxsPSIjODk5QTZFIiBmaWxsLW9wYWNpdHk9IjAuOTk2MDc4NDMxMzcyNTQ5IiBzdHJva2U9Im5vbmUiIGQ9IgpNIDI4My4wNSA5NC4yClEgMjgzIDk0IDI4Mi45IDkzLjggMjgyLjc1IDkzLjQgMjgyLjI1IDkzLjQKTCAyODIuMiA5My40ClEgMjgxLjg1IDkzLjQgMjgxLjYgOTMuNzUgMjgxLjQ1IDkzLjk1IDI4MS40IDk0LjM1IDI3Ni40IDk0LjggMjcxLjUgOTUuNiAyNjMuNjUgOTYuOCAyNTYuMSA5OC45IDI1NS44IDk4Ljk1IDI1NS41IDk5LjA1IDI1NC42IDk5LjI1IDI1My41NSA5OS42IDI1My4xIDk5Ljc1IDI1Mi42IDk5LjkgMjUyLjE1IDEwMC4wNSAyNTEuOCAxMDAuMTUgMjQ5LjQgMTAwLjk1IDI0Ny43NSAxMDEuNzUgMjQ2LjQ1IDEwMy4xNSAyNDQuMSAxMDQuNCAyNDMuNjUgMTA0LjY1IDI0My4yIDEwNC45IDI0Mi4wNSAxMDUuOSAyNDAuOCAxMDcuMTUgMjQwLjM1IDEwNy42IDI0MC4zNSAxMDcuOTUgMjQwLjQgMTA4Ljc1IDI0MS43NSAxMDguNSAyNDIuNTUgMTA4LjMgMjQzLjUgMTA3LjY1IDI0NCAxMDcuMyAyNDUuMDUgMTA2LjUgMjQ3LjcgMTA0LjU1IDI1MS42NSAxMDMuMTUgMjUzLjg1IDEwMi40IDI1OC44IDEwMS4xNSAyNjYuOTUgOTkuMiAyNzAuOCA5OC41NSAyNzYuMiA5Ny43IDI4Ny4xIDk2LjggMjg4LjEgOTYuNyAyODguNDUgOTYuMjUgMjg4Ljc1IDk1Ljg1IDI4OC42IDk1LjMgMjg4LjQgOTQuNzUgMjg3Ljk1IDk0LjQ1IDI4Ny4zIDk0LjA1IDI4NS45NSA5NC4wNQpMIDI4NS45NSA5NApRIDI4NC41IDk0LjEgMjgzLjA1IDk0LjIgWiIvPgoKPHBhdGggZmlsbD0iIzVDNzMzRiIgZmlsbC1vcGFjaXR5PSIwLjk5NjA3ODQzMTM3MjU0OSIgc3Ryb2tlPSJub25lIiBkPSIKTSAyNTIuODUgOTcuODUKTCAyNTAuMiA5OC42NQpRIDI1MC4xIDk4LjcgMjUwIDk4Ljc1IDI0OS45NSA5OS4yIDI0OS4zNSA5OS40NSAyNDkuMiA5OS41IDI0OS4xIDk5LjUgMjQ4LjggMTAwLjM1IDI0OC4yIDEwMS4yIDI0OS4wNSAxMDEgMjUxLjggMTAwLjE1IDI1Mi4xNSAxMDAuMDUgMjUyLjYgOTkuOSAyNTMuMSA5OS43NSAyNTMuNTUgOTkuNiAyNTQuNiA5OS4yNSAyNTUuNSA5OS4wNSAyNTUuOCA5OC45NSAyNTYuMSA5OC45IDI2My42NSA5Ni44IDI3MS41IDk1LjYKTCAyNzEuOCA5NS40NSAyNzEuNzUgOTUuNDUKUSAyNzAuMiA5NS4zIDI2OC41NSA5NS4zIDI2Ni42NSA5NS4zNSAyNjIuOTUgOTUuODUKTCAyNTkuMiA5Ni40ClEgMjU3LjIgOTYuNjUgMjU1LjYgOTcuMDUgMjU0LjY1IDk3LjI1IDI1Mi44NSA5Ny44NSBaIi8+Cgo8cGF0aCBmaWxsPSIjNzZDQ0RCIiBmaWxsLW9wYWNpdHk9IjAuOTk2MDc4NDMxMzcyNTQ5IiBzdHJva2U9Im5vbmUiIGQ9IgpNIDI5OC41NSAyNjkuMgpMIDI5OC40NSAyNjkuNApRIDI5OC40IDI2OS41NSAyOTguNDUgMjY5LjcKTCAyOTguOSAyNzAuMDUgMjk5LjEgMjcwLjEgMjk5LjMgMjcwLjMgMjk5LjQgMjcwLjQ1IDI5OS44IDI3MC44NSAyOTkuOSAyNzEuMDUgMzAwLjA1IDI3MS4xNSAzMDAuMTUgMjcxLjIgMzAwLjMgMjcxLjI1IDMwMC40NSAyNzEuMgpRIDMwMC42NSAyNzEuMSAzMDAuNyAyNzEuMTUKTCAzMDAuNzUgMjcxLjA1ClEgMzAwLjkgMjcxIDMwMC45IDI3MC43NQpMIDMwMC45NSAyNzAuNDUgMzAwLjkgMjcwLjQgMzAwLjggMjcwLjI1IDMwMC44IDI3MC4yClEgMzAwLjggMjcwLjEgMzAwLjc1IDI3MC4wNSAzMDAuMyAyNjkuNzUgMzAwLjA1IDI2OS41CkwgMjk5Ljg1IDI2OS40NSAyOTkuODUgMjY5LjQgMjk5Ljc1IDI2OS4zNQpRIDI5OS42IDI2OS4yIDI5OS41NSAyNjkuMgpMIDI5OS40IDI2OS4yIDI5OS4zNSAyNjkuMjUKUSAyOTkuMyAyNjkuMTUgMjk5LjE1IDI2OS4xNQpMIDI5OC45IDI2OS4wNSAyOTguNTUgMjY5LjIgWiIvPgoKPHBhdGggZmlsbD0iI0JFQjE5RSIgc3Ryb2tlPSJub25lIiBkPSIKTSAzMjQuMjUgMjk0LjkKTCAzMjQuMTUgMjk0LjkgMzIwLjg1IDI4OS4zClEgMzE2LjI1IDI4MS42NSAzMTMuMzUgMjc4LjEgMzExLjkgMjc2LjQgMzEwLjggMjc1LjQgMzA4LjY1IDI3My41IDMwNSAyNzEuNDUKTCAyOTkuMzUgMjY4LjEKUSAyOTkuMzUgMjY4LjggMzAwLjA1IDI2OS41IDMwMC4zIDI2OS43NSAzMDAuNzUgMjcwLjA1IDMwMS4xIDI3MC4yNSAzMDEuNTUgMjcwLjQ1CkwgMzAxLjY1IDI3MC41ClEgMzA4LjQ1IDI3My45NSAzMTEuODUgMjc3LjY1IDMxMy4yIDI3OS4xIDMxNC45NSAyODEuNyAzMTcgMjg0LjQgMzE4LjMgMjg2LjY1IDMxOS4xIDI4Ny45NSAzMjAuNDUgMjkwLjUgMzIwLjYgMjkwLjg1IDMyMC44IDI5MS4yNSAzMjEuMiAyOTIgMzIxLjY1IDI5Mi42NSAzMjIuNzUgMjk0LjI1IDMyMy44NSAyOTUuMzUgMzI0LjI1IDI5NS4yNSAzMjQuMjUgMjk0LjkgWiIvPgoKPHBhdGggZmlsbD0iI0U2RDRCQSIgZmlsbC1vcGFjaXR5PSIwLjk5NjA3ODQzMTM3MjU0OSIgc3Ryb2tlPSJub25lIiBkPSIKTSAzMjguMzUgMjU2LjY1ClEgMzI3LjI1IDI1NS44IDMyNC42IDI1NC4xNSAzMTcuMiAyNDkuOCAzMTIuNyAyNDguNDUgMzEwLjU1IDI0Ny44IDMwNy40IDI0Ny4yNSAzMDIuOSAyNDYuNiAzMDAuMiAyNDcuMDUgMjk2LjEgMjQ3Ljc1IDI5NC4wNSAyNTAuNiAyOTEuODUgMjU0LjA1IDI5My4wNSAyNTguNjUgMjkzLjk1IDI2Mi4yIDI5Ny4yIDI2NS44NSAyOTcuNzUgMjY2LjQgMjk4LjE1IDI2Ni41NSAyOTguNiAyNjYuNzUgMjk4LjkgMjY2LjYgMjk5LjI1IDI2Ni42IDI5OS40IDI2Ni4zNSAyOTkuNyAyNjYuMDUgMjk5LjU1IDI2NS42IDI5OS41NSAyNjUuNDUgMjk5LjM1IDI2NS4yNSAyOTguOSAyNjQuOTUgMjk4LjcgMjY0LjgKTCAyOTguMiAyNjQuMTUgMjk3LjE1IDI2Mi4zIDI5Ni44IDI2MC45NQpRIDI5Ni43IDI2MC41IDI5Ni4zNSAyNjAuMyAyOTYuMDUgMjYwLjIgMjk1LjggMjYwLjMgMjk1LjY1IDI2MC40IDI5NS41NSAyNjAuNSAyOTUuNSAyNjAuNCAyOTUuNDUgMjYwLjMgMjkzLjE1IDI1NS4xNSAyOTUuMjUgMjUxLjggMjk2Ljg1IDI0OS40NSAzMDAuMTUgMjQ4Ljc1IDMwMi40IDI0OC4zIDMwNi4wNSAyNDguNzUgMzA4Ljk1IDI0OS4xNSAzMTAuMzUgMjQ5LjUgMzE1LjYgMjUwLjggMzIxLjkgMjU0LjQ1IDMyNC42NSAyNTYgMzI2LjggMjU3LjY1IDMyNi43IDI1Ny45NSAzMjcuMDUgMjU4LjQKTCAzMjcuMSAyNTguNDUKUSAzMjYuNCAyNTguNDUgMzI2LjIgMjU4LjkgMzI2LjA1IDI1OS4xIDMyNi4xIDI1OS4zNSAzMjYuMTUgMjU5LjY1IDMyNi40IDI1OS44IDMyNi43IDI2MC4wNSAzMjcuNDUgMjYwLjE1IDMyOS4yIDI2MC40IDMzMC44IDI2MS4yIDMzMC44IDI2MS40NSAzMzEuMDUgMjYxLjcgMzMxLjE1IDI2MS43NSAzMzEuNDUgMjYxLjg1IDMzMi4yNSAyNjIuNzUgMzMyLjg1IDI2My42NSAzMzMuNCAyNjQuNDUgMzMzLjg1IDI2NC43IDMzNCAyNjQuOSAzMzQuMjUgMjY1LjEgMzM1LjQ1IDI2Ni4wNSAzMzYuMTUgMjY2LjcKTCAzMzcuMTUgMjY4LjI1ClEgMzM3LjYgMjY5LjEgMzM3Ljg1IDI2OS45NSAzMzggMjcwLjUgMzM4LjA1IDI3MC41NSAzMzguMjUgMjcwLjggMzM4LjU1IDI3MC45CkwgMzM4LjU1IDI3MQpRIDMzOC44IDI3MS42NSAzMzguODUgMjcxLjcgMzM4Ljk1IDI3MS44NSAzMzkuMDUgMjcxLjkgMzM5LjE1IDI3Mi4xNSAzMzkuMTUgMjcyLjIgMzM5LjMgMjczIDMzOS4zIDI3My4wNSAzMzkuMzUgMjczLjIgMzM5LjQ1IDI3My4zNQpMIDMzOS41NSAyNzMuOTUKUSAzMzkuOSAyNzUuNCAzMzkuODUgMjc2LjM1CkwgMzM5LjY1IDI3OApRIDMzOS42IDI3OC4yIDMzOS41IDI3OS41IDMzOS40IDI4MC4zNSAzMzkuMjUgMjgwLjkgMzM4Ljk1IDI4MS44NSAzMzkuMTUgMjgyLjE1IDMzOS4zNSAyODIuNDUgMzM5Ljc1IDI4Mi40NQpMIDMzOS43IDI4MwpRIDMzOS42NSAyODMuNyAzMzkuNzUgMjg0LjEgMzM5LjYgMjg0LjUgMzM5LjQgMjg1LjEgMzM5LjMgMjg2IDM0MC4wNSAyODYuMTUgMzQwLjcgMjg2LjIgMzQxLjEgMjg1LjIgMzQxLjYgMjgzLjk1IDM0MS44IDI4MS43NSAzNDIgMjc5LjMgMzQxLjkgMjc3LjA1IDM0MS45NSAyNzYuMTUgMzQxLjkgMjc1LjkgMzQxLjkgMjc1LjI1IDM0MS43IDI3NC4wNSAzNDEuMzUgMjcxLjMgMzQwLjQ1IDI2OS4yIDM0MC4xIDI2OC4zNSAzMzkuNjUgMjY3LjYgMzM5LjEgMjY1LjggMzM3LjQ1IDI2My43NSAzMzYuNTUgMjYyLjU1IDMzNS43NSAyNjEuOSAzMzUuNCAyNjEuNiAzMzMuOCAyNjAuMzUgMzMyLjIgMjU5LjI1IDMzMS4zIDI1OC44NSAzMzEuMiAyNTguOCAzMzEuMSAyNTguNzUgMzMwLjQgMjU4LjMgMzI5Ljk1IDI1OCAzMjkuMSAyNTcuMiAzMjguMzUgMjU2LjY1IFoiLz4KPC9nPgoKPGZvbnQgaG9yaXotYWR2LXg9IjIwNDgiPgo8IS0tICBGb250IE5hbWU6IEdpbGwgU2FucyBNVCBQcm8gSGVhdnkgSXRhbGljClZlbmRvciBJRDogTU9OTwpGb250IHNvZnR3YXJlIENvcHlyaWdodCAxOTkwLCAxOTkxLCAxOTk4IEFkb2JlIFN5c3RlbXMgSW5jb3Jwb3JhdGVkLiBUeXBlZmFjZSBkZXNpZ25zIENvcHlyaWdodCBUaGUgTW9ub3R5cGUgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuCmh0dHA6Ly93d3cubW9ub3R5cGVpbWFnaW5nLmNvbS9odG1sL3R5cGUvbGljZW5zZS5odG1sLgpVUkwgZm9yIG1vcmUgSW5mb3JtYXRpb246IGh0dHA6Ly93d3cuYWRvYmUuY29tL2dvL2ZvbnRfdmVuZG9yX2lkP0lEPU1PTk8mTmFtZT1HaWxsJTIwU2FucyUyME1UJTIwUHJvJlBTTmFtZT1HaWxsU2Fuc01UUHJvLUhlYXZ5SXRhbGljJmFwcGxhbmd1YWdlPWVuX1VTLS0+Cjxmb250LWZhY2UgZm9udC1mYW1pbHk9IkdpbGxfU2Fuc19NVF9Qcm9fSGVhdnlfSXRhbGljIiB1bml0cy1wZXItZW09IjIwNDgiIGFzY2VudD0iMTkwNiIgZGVzY2VudD0iNDkyIi8+Cgo8aGtlcm4gdTE9IlAiIHUyPSJvIiBrPSI0NyIvPgoKPGhrZXJuIHUxPSJiIiB1Mj0ieSIgaz0iMjMiLz4KCjxoa2VybiB1MT0iayIgdTI9Im8iIGs9IjI5Ii8+Cgo8aGtlcm4gdTE9ImwiIHUyPSJ5IiBrPSItMjkiLz4KCjxoa2VybiB1MT0ibyIgdTI9ImciIGs9Ii0yOSIvPgoKPGhrZXJuIHUxPSJvIiB1Mj0idiIgaz0iMjAiLz4KCjxoa2VybiB1MT0iciIgdTI9Im8iIGs9IjI5Ii8+Cgo8aGtlcm4gdTE9InYiIHUyPSJwIiBrPSIyNyIvPgoKPGhrZXJuIHUxPSJ3IiB1Mj0iLiIgaz0iODgiLz4KCjxoa2VybiB1MT0ieSIgdTI9ImEiIGs9Ii0yOSIvPgoKPGdseXBoIHVuaWNvZGU9IkwiIGhvcml6LWFkdi14PSIxMTU5IiBkPSIKTSAxMTI4IDI0OApMIDQ5NSAyNDggNjYxIDEzODYgMzA1IDEzODYgMTA0IDAgMTA5MSAwIDExMjggMjQ4IFoiLz4KCjxnbHlwaCB1bmljb2RlPSJvIiBob3Jpei1hZHYteD0iMTIzNyIgZD0iCk0gNjQ1IDc1MApRIDcyMSA3NTAgNzcwIDY5OSA4MTkgNjQ5IDgyMSA1NTMgODIxIDQ4NSA3OTQgNDIwIDc2NyAzNTUgNzE2IDMxMiA2NjYgMjY5IDU5NiAyNjggNTM5IDI2OSA0OTggMjk2IDQ1OCAzMjMgNDM3IDM2NyA0MTYgNDEyIDQxNiA0NjUgNDE2IDUwMyA0MjggNTUxIDQzOSA1OTkgNDY2IDY0NCA0OTMgNjkwIDUzNyA3MTkgNTgxIDc0OSA2NDUgNzUwIFoKTSA2NjYgMTAzNwpRIDQ5NyAxMDM1IDM2NCA5NTggMjMyIDg4MiAxNTUgNzU1IDc4IDYyOCA3NiA0NzUgNzggMzIyIDE0OSAyMTEgMjIwIDEwMSAzMzYgNDEgNDUzIC0xOCA1OTIgLTE5IDc1MiAtMTggODgwIDU0IDEwMDkgMTI2IDEwODQgMjUzIDExNTkgMzgwIDExNjEgNTQ3IDExNTkgNzE0IDEwODggODIzIDEwMTYgOTMxIDkwNCA5ODQgNzkyIDEwMzcgNjY2IDEwMzcgWiIvPgoKPGdseXBoIHVuaWNvZGU9ImciIGhvcml6LWFkdi14PSIxMDgzIiBkPSIKTSA0MzQgLTExMwpRIDU2MSAtMTI4IDYxNSAtMTQ3IDY3MCAtMTY2IDY2OCAtMjEzIDY2OSAtMjM1IDY1NCAtMjUyIDYzOCAtMjY5IDU5NSAtMjc5IDU1MiAtMjg5IDQ3MSAtMjg5IDM1OCAtMjkwIDMwMyAtMjY5IDI0OCAtMjQ5IDI0OCAtMjAzIDI0NyAtMTcyIDI3NiAtMTUxIDMwNCAtMTMxIDM3MSAtMTA1CkwgNDM0IC0xMTMgWgpNIDExMjQgMTAxOApMIDUxOSAxMDE4ClEgMzkzIDEwMTcgMzA4IDk4MiAyMjMgOTQ4IDE3MyA4OTMgMTIzIDgzOCAxMDEgNzc2IDgwIDcxNCA4MCA2NTggODAgNjAzIDEwMSA1NDIgMTIyIDQ4MSAxNjQgNDI5IDIwNyAzNzYgMjcyIDM0OSAxNzYgMzM1IDExNiAyOTMgNTUgMjUwIDUzIDE3MiA1NCAxMjAgNzYgODYgOTggNTIgMTI2IDMxIDE1NSAxMSAxNzggMCAxMjIgLTE4IDcwIC00NyAxOSAtNzYgLTE1IC0xMjAgLTQ4IC0xNjMgLTQ5IC0yMjYgLTQ4IC0zMzIgMTcgLTM4OCA4MiAtNDQzIDE5NyAtNDYzIDMxMiAtNDgzIDQ2MyAtNDgyIDYzNSAtNDgxIDczOSAtNDQ5IDg0MyAtNDE3IDg5NSAtMzY3IDk0NyAtMzE3IDk2MyAtMjY0IDk4MCAtMjEwIDk3OSAtMTY2IDk4MCAtOTcgOTQ2IC0zOSA5MTIgMTkgODM0IDYzIDc1NSAxMDYgNjIzIDEzMSA1MDMgMTUzIDQ0NyAxNjYgMzkyIDE4MCAzNzcgMTkzIDM2MiAyMDcgMzY0IDIzMCAzNjUgMjYwIDM5MyAyNzYgNDIyIDI5MSA0NzEgMjkxCkwgNTMwIDI5MQpRIDY4MCAyOTIgNzc5IDMzOCA4NzcgMzg0IDkyNiA0NjQgOTc1IDU0NCA5NzUgNjQ4IDk3NCA2OTggOTY1IDczNCA5NTcgNzcwIDk0OCA3OTEKTCAxMDkyIDc5MSAxMTI0IDEwMTggWgpNIDU0MyA4MjUKUSA1OTkgODI1IDYzMSA3ODkgNjYzIDc1NCA2NjQgNjg2IDY2NSA2NTAgNjUyIDYwMyA2NDAgNTU2IDYwNyA1MjEgNTc0IDQ4NiA1MTQgNDg0IDQ2MyA0ODQgNDI4IDUxOSAzOTIgNTU0IDM5MSA2MjUgMzkxIDY0MSAzOTYgNjczIDQwMSA3MDUgNDE2IDc0MCA0MzEgNzc1IDQ2MiA3OTkgNDkyIDgyNCA1NDMgODI1IFoiLz4KCjxnbHlwaCB1bmljb2RlPSIgIiBob3Jpei1hZHYteD0iNTk4Ii8+Cgo8Z2x5cGggdW5pY29kZT0iYiIgaG9yaXotYWR2LXg9IjEyNDMiIGQ9IgpNIDI2MiAxMzg2CkwgNjMgMjAKUSAxNDUgOCAyMTMgLTEgMjgxIC0xMCAzNDggLTE0IDQxNiAtMTkgNDk1IC0xOSA3MjUgLTE3IDg3NSA1NyAxMDI0IDEzMiAxMDk3IDI2MiAxMTY5IDM5MiAxMTY5IDU1OSAxMTY3IDcwMyAxMTEyIDgxMCAxMDU3IDkxNyA5NjcgOTc2IDg3OCAxMDM2IDc3NCAxMDM3IDcyNiAxMDM5IDY1OSAxMDE1IDU5MiA5OTIgNTI2IDkyMApMIDU5NCAxMzg2IDI2MiAxMzg2IFoKTSA0ODMgNjM3ClEgNDk3IDY1NSA1MjIgNjgwIDU0OCA3MDUgNTg1IDcyNSA2MjIgNzQ1IDY3MCA3NDYgNzI5IDc0NyA3NzQgNzAzIDgxOSA2NTkgODIxIDU1NyA4MjIgNDE5IDc1MiAzNDAgNjgxIDI2MSA1MjQgMjYwIDQ5NyAyNjAgNDc0IDI2MCA0NTIgMjYxIDQyOCAyNjQKTCA0ODMgNjM3IFoiLz4KCjxnbHlwaCB1bmljb2RlPSJ5IiBob3Jpei1hZHYteD0iMTA1NyIgZD0iCk0gMjkgMTAxOApMIDM1NSA4NCA4NiAtNDYzIDQwOCAtNDYzIDExMzMgMTAxOCA4MDkgMTAxOCA1MzUgNDUzIDMzOCAxMDE4IDI5IDEwMTggWiIvPgoKPGdseXBoIHVuaWNvZGU9ImUiIGhvcml6LWFkdi14PSIxMTMwIiBkPSIKTSAxMDQ3IDQyMgpRIDEwNTAgNDM4IDEwNTUgNDc0IDEwNjAgNTEwIDEwNjEgNTcxIDEwNTkgNzMwIDEwMDAgODM0IDk0MCA5MzcgODQyIDk4NyA3NDQgMTAzNyA2MjcgMTAzNyA0NjMgMTAzNSAzMzggOTU2IDIxNCA4NzggMTQ0IDc0NiA3MyA2MTUgNzIgNDU1IDcxIDM4OCA5MiAzMDggMTEyIDIyNyAxNjkgMTUzIDIyNSA3OSAzMzAgMzEgNDM2IC0xNyA2MDQgLTE5IDY3NyAtMTkgNzMwIC0xMCA3ODQgLTIgODMyIDE1IDg4MSAzMSA5MzggNTUKTCA5ODkgMzA1ClEgOTIwIDI3MyA4MjUgMjQzIDczMCAyMTIgNjEwIDIxMCA1MjkgMjExIDQ4NiAyNDAgNDQyIDI2OCA0MjUgMzA4IDQwOCAzNDcgNDA1IDM3OSA0MDMgNDEyIDQwNCA0MjIKTCAxMDQ3IDQyMiBaCk0gNDMwIDYwMgpRIDQ0NSA2NDUgNDY5IDY5MiA0OTIgNzM5IDUyOSA3NzMgNTY2IDgwNyA2MjEgODA4IDY2OCA4MDcgNjk0IDc4MiA3MTkgNzU3IDcyOSA3MjIgNzM5IDY4NyA3NDAgNjUzIDc0MCA2MjAgNzM5IDYwMgpMIDQzMCA2MDIgWiIvPgoKPGdseXBoIHVuaWNvZGU9InYiIGhvcml6LWFkdi14PSIxMDYxIiBkPSIKTSA2MiAxMDE4CkwgMzIwIC0xOSA1NDUgLTE5IDExMDAgMTAxOCA3NzYgMTAxOCA0OTAgNDg1IDM1NyAxMDE4IDYyIDEwMTggWiIvPgoKPGdseXBoIHVuaWNvZGU9IlAiIGhvcml6LWFkdi14PSIxMzU2IiBkPSIKTSA2NjggMTE4MwpRIDgwOSAxMTgxIDg3OSAxMTE0IDk0OCAxMDQ4IDk0OCA5NDYgOTQ3IDgxNCA4NzAgNzU1IDc5NCA2OTUgNjYxIDY5NgpMIDU2MyA2OTYgNjM1IDExODMgNjY4IDExODMgWgpNIDQ2MSAwCkwgNTMyIDQ5MyA4MTkgNDkzClEgOTk3IDQ5NSAxMTA2IDU2MyAxMjE1IDYzMCAxMjY2IDczNyAxMzE2IDg0NCAxMzE1IDk2NCAxMzE2IDEwNzUgMTI2OSAxMTcxIDEyMjMgMTI2NiAxMTE2IDEzMjUgMTAwOSAxMzg0IDgyNyAxMzg2CkwgMzA3IDEzODYgMTA0IDAgNDYxIDAgWiIvPgoKPGdseXBoIHVuaWNvZGU9ImwiIGhvcml6LWFkdi14PSI2MzciIGQ9IgpNIDQxOCAwCkwgNjIzIDEzODYgMjg1IDEzODYgODAgMCA0MTggMCBaIi8+Cgo8Z2x5cGggdW5pY29kZT0iYSIgaG9yaXotYWR2LXg9IjEyMTQiIGQ9IgpNIDExNTMgMTAwNApRIDEwODcgMTAxNSAxMDM3IDEwMjMgOTg2IDEwMzAgOTM4IDEwMzMgODg5IDEwMzcgODI4IDEwMzcgNTkxIDEwMzUgNDQxIDk3NCAyOTEgOTEzIDIxMCA4MTcgMTI4IDcyMiA5NyA2MTggNjcgNTEzIDY4IDQyNCA2OSAzMDUgMTEyIDIwNSAxNTYgMTA1IDIzOCA0NCAzMTkgLTE3IDQzMyAtMTkgNTI1IC0xNyA1ODUgMTggNjQ0IDUyIDY4NCA5MgpMIDY2OCAwIDEwMDAgMCAxMTUzIDEwMDQgWgpNIDcxOSAzMjIKUSA2NTIgMjc4IDYxMiAyNjMgNTcyIDI0NyA1NDMgMjQ4IDQ3NCAyNTAgNDQxIDI5OCA0MDggMzQ2IDQwOCA0MTQgNDA5IDUxOCA0NTAgNjAzIDQ5MiA2ODggNTY1IDczOSA2MzggNzkwIDczMiA3OTEKTCA3OTMgNzkxIDcxOSAzMjIgWiIvPgoKPGdseXBoIHVuaWNvZGU9ImsiIGhvcml6LWFkdi14PSIxMTY3IiBkPSIKTSAzOTYgMApMIDQ2NyA0NzkgODAzIDAgMTE2NiAwIDgwMyA1MTAgMTIyMyAxMDE4IDgzOCAxMDE4IDQ4NiA1OTQgNjAxIDEzODYgMjczIDEzODYgNjIgMCAzOTYgMCBaIi8+Cgo8Z2x5cGggdW5pY29kZT0idyIgaG9yaXotYWR2LXg9IjE1NzMiIGQ9IgpNIDYyIDEwMTgKTCAzMTAgLTE5IDUxNyAtMTkgNzc1IDQ4MSA4NzMgLTE5IDEwODIgLTE5IDE2NTEgMTAxOCAxMzMyIDEwMTggMTA0MSA0NjEgOTM2IDEwMTggNzUwIDEwMTggNDc2IDQ2MSAzNDcgMTAxOCA2MiAxMDE4IFoiLz4KCjxnbHlwaCB1bmljb2RlPSIuIiBob3Jpei1hZHYteD0iNjE4IiBkPSIKTSAyNjAgLTE5ClEgMzQ4IC0xNyA0MDcgNDMgNDY3IDEwMiA0NjkgMTkwIDQ2NyAyNzggNDA3IDMzNyAzNDggMzk3IDI2MCAzOTkgMTcyIDM5NyAxMTMgMzM3IDUzIDI3OCA1MSAxOTAgNTMgMTAyIDExMyA0MyAxNzIgLTE3IDI2MCAtMTkgWiIvPgoKPGdseXBoIHVuaWNvZGU9InAiIGhvcml6LWFkdi14PSIxMjcyIiBkPSIKTSAzMDUgMTE5OApMIDI0OCA4MjQKUSAyMTIgNzkyIDE3NyA3NTcgMTQyIDcyMyAxMDkgNjgwIDY1IDYyNCAyOSA1NTQgLTYgNDg1IC04IDQzMiAtOCA0MTYgMCA0MDQgNyAzOTMgMjMgMzkzIDM3IDM5MyA0OCA0MDMgNTkgNDEzIDc0IDQzMApMIDIxMyA1OTYgNTMgLTQ2MyAzODUgLTQ2MyA0NTkgMTYKUSA1MDIgMCA1NDUgLTkgNTg3IC0xOSA2NDMgLTE5IDgxOCAtMTcgOTQzIDYyIDEwNjggMTQxIDExMzQgMjczIDEyMDEgNDA0IDEyMDIgNTYzIDEyMDIgNjkzIDExNTIgODAwIDExMDIgOTA3IDEwMDIgOTcxIDkwMSAxMDM1IDc1MCAxMDM3IDczMyAxMDM3IDcxNSAxMDM1IDY5NiAxMDM0IDY3OCAxMDMxIDY2MSAxMDI5IDY0MyAxMDI2IDYyNSAxMDIzIDYwOCAxMDE4CkwgNjM1IDExOTggMzA1IDExOTggWgpNIDU3NiA3ODkKUSA1ODkgNzkyIDYwNiA3OTUgNjI0IDc5NyA2NDkgNzk3IDcyOCA3OTYgNzczIDc2MyA4MTggNzMwIDgzNiA2NzggODU1IDYyNiA4NTQgNTY3IDg1NSA0OTcgODMwIDQyNCA4MDQgMzUxIDc0MyAzMDAgNjgxIDI0OSA1NzMgMjQ3IDU0NiAyNDcgNTI4IDI1MCA1MTAgMjUzIDQ5NCAyNTcKTCA1NzYgNzg5IFoiLz4KCjxnbHlwaCB1bmljb2RlPSJyIiBob3Jpei1hZHYteD0iODg5IiBkPSIKTSAzOTEgMApMIDQ3NyA1ODIKUSA1MTUgNjQ4IDU2MSA2ODUgNjA3IDcyMiA2NTcgNzIzIDY5NiA3MjIgNzIzIDcwMyA3NTEgNjg0IDc2OSA2NTggNzg4IDYzMiA4MDAgNjEwCkwgOTU4IDkzMgpRIDkxOSA5NzMgODcyIDEwMDQgODI2IDEwMzUgNzY1IDEwMzcgNzExIDEwMzUgNjYxIDEwMDMgNjExIDk3MCA1NzQgOTMyIDUzOCA4OTMgNTIyIDg3MwpMIDU0MiAxMDE4IDIxMyAxMDE4IDYxIDAgMzkxIDAgWiIvPgoKPGdseXBoIHVuaWNvZGU9ImQiIGhvcml6LWFkdi14PSIxMjI3IiBkPSIKTSA4OTkgMTM4NgpMIDg0NiAxMDI4ClEgODE4IDEwMzIgNzgzIDEwMzQgNzQ3IDEwMzcgNzA5IDEwMzcgNTMyIDEwMzUgNDEwIDk4MCAyODkgOTI1IDIxNSA4MzkgMTQxIDc1MyAxMDggNjU3IDc1IDU2MSA3NiA0NzcgNzYgMzI3IDE0NSAyMTYgMjE0IDEwNCAzNDcgNDMgNDc5IC0xOCA2NzAgLTE5IDc5NyAtMTggODkxIC02IDk4NiA1IDEwMzQgMTQKTCAxMjI5IDEzODYgODk5IDEzODYgWgpNIDczNSAyNjYKUSA3MTYgMjYyIDcwMiAyNjEgNjg5IDI2MCA2NzAgMjYwIDU3OCAyNjEgNTI0IDI5NSA0NzAgMzI4IDQ0NyAzNzYgNDIzIDQyNSA0MjQgNDcxIDQyMyA1MDAgNDM3IDU0OSA0NTEgNTk3IDQ5MSA2NDggNTMxIDY5OCA2MDcgNzMwIDY4MyA3NjMgODA3IDc1OApMIDczNSAyNjYgWiIvPgoKPGdseXBoIHVuaWNvZGU9InUiIGhvcml6LWFkdi14PSIxMjM3IiBkPSIKTSAxMDIzIDAKTCAxMTc1IDEwMTggODQxIDEwMTggNzUxIDQwMQpRIDY3NiAzMjggNjIyIDI5MCA1NjcgMjUxIDUxNCAyNTEgNDY0IDI1MyA0NDcgMjgwIDQyOSAzMDggNDI5IDMzOSA0MzAgMzcwIDQzMiAzODIKTCA1MjQgMTAxOCAxOTIgMTAxOCAxMDIgNDAzClEgOTkgMzc3IDk2IDM0NiA5MiAzMTUgOTIgMjkwIDkyIDI0NiAxMDQgMTkzIDExNiAxNDEgMTQ3IDkzIDE3NyA0NCAyMzMgMTMgMjg4IC0xOCAzNzUgLTE5IDQ1NCAtMTggNTE3IDYgNTc5IDI5IDYyNiA2MSA2NzQgOTIgNzA4IDExOApMIDY5MiAwIDEwMjMgMCBaIi8+Cgo8Z2x5cGggdW5pY29kZT0iYyIgaG9yaXotYWR2LXg9IjEwMzYiIGQ9IgpNIDk3NSAzNzAKUSA4OTkgMzM1IDg0MyAzMTQgNzg3IDI5MyA3NDEgMjg0IDY5NSAyNzYgNjQ3IDI3NiA1NDEgMjc4IDQ5MSAzMTUgNDQxIDM1MiA0MjggMzk3IDQxNCA0NDIgNDE2IDQ2OSA0MTUgNTE3IDQ0NSA1NzggNDc2IDY0MCA1NDggNjg3IDYyMCA3MzQgNzQ0IDczNiA3NzMgNzM2IDgwMiA3MzIgODMyIDcyOCA4NjIgNzIyIDg5MiA3MTIgOTIyIDcwMiA5NTMgNjkzIDk4NSA2ODIKTCAxMDMwIDEwMDAKUSA5NzAgMTAxNCA4OTggMTAyNSA4MjYgMTAzNiA3MjkgMTAzNyA1MzAgMTAzNSA0MDIgOTc0IDI3MyA5MTMgMjAyIDgyMiAxMzEgNzMxIDEwMyA2MzcgNzUgNTQyIDc2IDQ3MyA3NSA0MTUgOTQgMzMzIDExNCAyNTEgMTcyIDE3MSAyMjkgOTEgMzQzIDM3IDQ1NyAtMTcgNjQzIC0xOSA3MDkgLTE5IDc3NSAtOSA4NDAgMSA5MjIgMjgKTCA5NzUgMzcwIFoiLz4KCjxnbHlwaCB1bmljb2RlPSJ0IiBob3Jpei1hZHYteD0iODM2IiBkPSIKTSAzMTUgMTIyMQpMIDI3NiAxMDE4IDg2IDEwMTggNDEgNzY4IDIyOSA3NjggMTU5IDM5NQpRIDEzOCAyNzUgMTU3IDIwMyAxNzUgMTMwIDIxMSA5MiAyNzAgMjMgMzM1IDEgMzk5IC0yMSA0NTQgLTE5IDUxOSAtMTkgNTkzIDAgNjY3IDE5IDc0MyA2MwpMIDc2MSAzNzAKUSA2OTMgMzIxIDY0NSAzMDIgNTk4IDI4MyA1NjUgMjg0IDUxOSAyODMgNTAwIDMxNyA0ODEgMzUxIDQ5NyA0MzYKTCA1NjUgNzY4IDc2MSA3NjggODE1IDEwMTggNjEyIDEwMTggNjUxIDEyMjEgMzE1IDEyMjEgWiIvPgoKPGdseXBoIHVuaWNvZGU9ImkiIGhvcml6LWFkdi14PSI2MzciIGQ9IgpNIDQxOCAwCkwgNTY0IDEwMTggMjI2IDEwMTggODEgMCA0MTggMCBaCk0gNDI5IDE0MDUKUSAzNjQgMTQwMyAzMjAgMTM2MCAyNzcgMTMxNiAyNzUgMTI1MiAyNzcgMTE4NyAzMjAgMTE0MyAzNjQgMTEwMCA0MjkgMTA5OCA0OTMgMTEwMCA1MzcgMTE0MyA1ODAgMTE4NyA1ODIgMTI1MiA1ODAgMTMxNiA1MzcgMTM2MCA0OTMgMTQwMyA0MjkgMTQwNSBaIi8+Cgo8Z2x5cGggdW5pY29kZT0ibiIgaG9yaXotYWR2LXg9IjEyMzciIGQ9IgpNIDIxNCAxMDE4CkwgNjIgMCAzOTYgMCA0ODYgNjE3ClEgNTYxIDY5MCA2MTUgNzI4IDY3MCA3NjcgNzIzIDc2NyA3NzMgNzY1IDc5MCA3MzggODA4IDcxMCA4MDggNjc5IDgwNyA2NDggODA1IDYzNgpMIDcxMyAwIDEwNDUgMCAxMTM1IDYxNQpRIDExMzggNjQxIDExNDEgNjcyIDExNDUgNzAzIDExNDUgNzI4IDExNDUgNzcyIDExMzMgODI1IDExMjEgODc3IDEwOTAgOTI1IDEwNjAgOTc0IDEwMDQgMTAwNSA5NDkgMTAzNiA4NjIgMTAzNyA3ODMgMTAzNiA3MjAgMTAxMiA2NTggOTg5IDYxMSA5NTcgNTYzIDkyNiA1MjkgOTAwCkwgNTQ1IDEwMTggMjE0IDEwMTggWiIvPgoKPGdseXBoIHVuaWNvZGU9InMiIGhvcml6LWFkdi14PSI4NDQiIGQ9IgpNIDEwIDcxClEgOTIgMzAgMTYzIDExIDIzNSAtOSAyODUgLTE0IDMzNSAtMjAgMzUyIC0xOSA0ODggLTE3IDU3NSAzMyA2NjMgODMgNzA1IDE1NyA3NDcgMjMxIDc0NyAzMDUgNzQ4IDMzNSA3MzcgMzc0IDcyNiA0MTQgNjg5IDQ2NiA2NTMgNTE3IDU3NyA1ODIgNTA0IDYzOSA0NTUgNjc1IDQwNSA3MTAgNDAzIDc1MiA0MDMgNzc4IDQyMCA3ODkgNDM3IDc5OSA0NzEgNzk5IDUxMCA3OTkgNTY0IDc4NCA2MTcgNzcwIDY3MyA3NDggNzI5IDcyNiA3NzYgNzAzCkwgODAwIDk0MwpRIDczNiA5NzkgNjU5IDEwMDcgNTgyIDEwMzUgNDcxIDEwMzcgMzM2IDEwMzUgMjUxIDk4OSAxNjYgOTQ0IDEyNiA4NzQgODYgODA0IDg2IDcyOSA4NyA2NjMgMTE5IDYwOCAxNTAgNTUzIDE5NSA1MTAgMjQwIDQ2NyAyODIgNDM2IDM1NCAzODMgMzk1IDM0OCA0MzcgMzEyIDQzOCAyODAgNDM4IDI1OCA0MTYgMjM5IDM5MyAyMjAgMzUyIDIxOSAyNzMgMjIxIDE5MyAyNTAgMTEzIDI3OCA1MyAzMDUKTCAxMCA3MSBaIi8+Cgo8Z2x5cGggdW5pY29kZT0ibSIgaG9yaXotYWR2LXg9IjE3OTYiIGQ9IgpNIDM5NSAwCkwgNDg4IDY0NgpRIDU1MCA3MDggNTk5IDc0MiA2NDggNzc3IDY5MiA3NzcgNzM3IDc3NiA3NTIgNzQ4IDc2NiA3MjAgNzYzIDY3MyA3NTkgNjI3IDc1MCA1NzIKTCA2NjYgMCAxMDAwIDAgMTA5NCA2NjgKUSAxMTQ2IDcxNiAxMTk1IDc0NiAxMjQ0IDc3NiAxMjkwIDc3NyAxMzMyIDc3NiAxMzQ4IDc0NyAxMzY0IDcxOCAxMzY0IDY3NyAxMzY0IDYzNyAxMzU4IDYwMQpMIDEyNzAgMCAxNjA0IDAgMTY5MCA1OTUKUSAxNjk1IDYyNyAxNjk5IDY2MyAxNzA0IDY5OCAxNzA0IDczNCAxNzA1IDc3MyAxNjkzIDgyNCAxNjgxIDg3NSAxNjQ5IDkyMyAxNjE3IDk3MiAxNTU1IDEwMDQgMTQ5NCAxMDM2IDEzOTUgMTAzNyAxMzE4IDEwMzYgMTI1NSAxMDEwIDExOTMgOTg1IDExNDcgOTUxIDExMDEgOTE2IDEwNzMgODg4IDEwMzQgOTY1IDk3MSAxMDAxIDkwOCAxMDM3IDgyNyAxMDM3IDc2MCAxMDM2IDcwMiAxMDEzIDY0MyA5OTEgNTk3IDk1OSA1NTEgOTI4IDUyNCA5MDAKTCA1NDMgMTAxOCAyMTEgMTAxOCA2MiAwIDM5NSAwIFoiLz4KPC9mb250Pgo8L2RlZnM+Cgo8ZyB0cmFuc2Zvcm09Im1hdHJpeCggMSwgMCwgMCwgMSwgMCwwKSAiPgo8dXNlIHhsaW5rOmhyZWY9IiNMYXllcjFfMF9GSUxMIi8+CjwvZz4KCjxnIHRyYW5zZm9ybT0ibWF0cml4KCAxLCAwLCAwLCAxLCAwLDApICI+Cjx1c2UgeGxpbms6aHJlZj0iI0xheWVyMF8wX0ZJTEwiLz4KPC9nPgoKPGcgdHJhbnNmb3JtPSJtYXRyaXgoIDAuNzI3Mjc5NjYzMDg1OTM3NSwgMCwgMCwgMC43MjcyNzk2NjMwODU5Mzc1LCAxMjUuOTUsMzE3LjgpICI+CjxjbGlwUGF0aCBpZD0iTWFza19NYXNrXzEiPgo8cmVjdCB4PSIxNzQuOCIgeT0iLTIiIHdpZHRoPSIxNTYuMTUiIGhlaWdodD0iODAuMiIgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSJub25lIi8+CjwvY2xpcFBhdGg+Cgo8dGV4dCBjbGlwLXBhdGg9InVybCgjTWFza19NYXNrXzEpIiB3cml0aW5nLW1vZGU9ImxyIj48dHNwYW4geD0iMjI1LjkiIHk9IjkuMyIgYmFzZWxpbmUtc2hpZnQ9IjAlIiBrZXJuaW5nPSIwIiBmb250LWZhbWlseT0iR2lsbF9TYW5zX01UX1Byb19IZWF2eV9JdGFsaWMiIGZvbnQtc3R5bGU9Iml0YWxpYyIgZm9udC1zaXplPSIxMCIgZmlsbD0iIzMzMzMzMyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+TG9nbyBieSBMZXYgUG9seWFrb3YgPC90c3Bhbj48dHNwYW4geD0iMTc5LjUiIHk9IjIzIiBiYXNlbGluZS1zaGlmdD0iMCUiIGtlcm5pbmc9IjAiIGZvbnQtZmFtaWx5PSJHaWxsX1NhbnNfTVRfUHJvX0hlYXZ5X0l0YWxpYyIgZm9udC1zdHlsZT0iaXRhbGljIiBmb250LXNpemU9IjEwIiBmaWxsPSIjMzMzMzMzIiB4bWw6c3BhY2U9InByZXNlcnZlIj53d3cucG9seWFrb3Zwcm9kdWN0aW9ucy5jb208L3RzcGFuPjwvdGV4dD4KPC9nPgo8L3N2Zz4K',
            mediatype: 'image/svg+xml',
          },
        ],
        links: [
          {
            name: 'Jaeger Operator Source Code',
            url: 'https://github.com/jaegertracing/jaeger-operator',
          },
        ],
        install: {
          spec: {
            clusterPermissions: [
              {
                rules: [
                  {
                    apiGroups: [''],
                    resources: [
                      'pods',
                      'services',
                      'endpoints',
                      'persistentvolumeclaims',
                      'events',
                      'configmaps',
                      'secrets',
                      'serviceaccounts',
                    ],
                    verbs: ['*'],
                  },
                  {
                    apiGroups: ['apps'],
                    resources: ['deployments', 'daemonsets', 'replicasets', 'statefulsets'],
                    verbs: ['*'],
                  },
                  {
                    apiGroups: ['monitoring.coreos.com'],
                    resources: ['servicemonitors'],
                    verbs: ['get', 'create'],
                  },
                  {
                    apiGroups: ['io.jaegertracing'],
                    resources: ['*'],
                    verbs: ['*'],
                  },
                  {
                    apiGroups: ['extensions'],
                    resources: ['ingresses'],
                    verbs: ['*'],
                  },
                  {
                    apiGroups: ['batch'],
                    resources: ['jobs', 'cronjobs'],
                    verbs: ['*'],
                  },
                  {
                    apiGroups: ['route.openshift.io'],
                    resources: ['routes'],
                    verbs: ['*'],
                  },
                  {
                    apiGroups: ['logging.openshift.io'],
                    resources: ['elasticsearches'],
                    verbs: ['*'],
                  },
                  {
                    apiGroups: ['jaegertracing.io'],
                    resources: ['*'],
                    verbs: ['*'],
                  },
                ],
                serviceAccountName: 'jaeger-operator',
              },
            ],
            deployments: [
              {
                name: 'jaeger-operator',
                spec: {
                  replicas: 1,
                  selector: {
                    matchLabels: {
                      name: 'jaeger-operator',
                    },
                  },
                  strategy: {},
                  template: {
                    metadata: {
                      creationTimestamp: null,
                      labels: {
                        name: 'jaeger-operator',
                      },
                    },
                    spec: {
                      containers: [
                        {
                          args: [
                            'start',
                            '--jaeger-agent-image=registry.redhat.io/distributed-tracing/jaeger-agent-rhel7',
                            '--jaeger-query-image=registry.redhat.io/distributed-tracing/jaeger-query-rhel7',
                            '--jaeger-collector-image=registry.redhat.io/distributed-tracing/jaeger-collector-rhel7',
                            '--jaeger-ingester-image=registry.redhat.io/distributed-tracing/jaeger-ingester-rhel7',
                            '--jaeger-all-in-one-image=registry.redhat.io/distributed-tracing/jaeger-all-in-one-rhel7',
                            '--jaeger-es-index-cleaner-image=registry.redhat.io/distributed-tracing/jaeger-es-index-cleaner-rhel7',
                            '--openshift-oauth-proxy-image=registry.redhat.io/openshift4/ose-oauth-proxy:latest',
                          ],
                          env: [
                            {
                              name: 'WATCH_NAMESPACE',
                              valueFrom: {
                                fieldRef: {
                                  fieldPath: "metadata.annotations['olm.targetNamespaces']",
                                },
                              },
                            },
                            {
                              name: 'POD_NAME',
                              valueFrom: {
                                fieldRef: {
                                  fieldPath: 'metadata.name',
                                },
                              },
                            },
                            {
                              name: 'OPERATOR_NAME',
                              value: 'jaeger-operator',
                            },
                          ],
                          image:
                            'registry.redhat.io/distributed-tracing/jaeger-rhel7-operator:1.13.1',
                          imagePullPolicy: 'Always',
                          name: 'jaeger-operator',
                          ports: [
                            {
                              containerPort: 8383,
                              name: 'metrics',
                            },
                          ],
                          resources: {},
                        },
                      ],
                      serviceAccountName: 'jaeger-operator',
                    },
                  },
                },
              },
            ],
            permissions: [
              {
                rules: [
                  {
                    apiGroups: [''],
                    resources: [
                      'pods',
                      'services',
                      'endpoints',
                      'persistentvolumeclaims',
                      'events',
                      'configmaps',
                      'secrets',
                      'serviceaccounts',
                    ],
                    verbs: ['*'],
                  },
                  {
                    apiGroups: ['apps'],
                    resources: ['deployments', 'daemonsets', 'replicasets', 'statefulsets'],
                    verbs: ['*'],
                  },
                  {
                    apiGroups: ['monitoring.coreos.com'],
                    resources: ['servicemonitors'],
                    verbs: ['get', 'create'],
                  },
                  {
                    apiGroups: ['io.jaegertracing'],
                    resources: ['*'],
                    verbs: ['*'],
                  },
                  {
                    apiGroups: ['extensions'],
                    resources: ['ingresses'],
                    verbs: ['*'],
                  },
                  {
                    apiGroups: ['batch'],
                    resources: ['jobs', 'cronjobs'],
                    verbs: ['*'],
                  },
                  {
                    apiGroups: ['rbac.authorization.k8s.io'],
                    resources: ['clusterrolebindings'],
                    verbs: ['*'],
                  },
                ],
                serviceAccountName: 'jaeger-operator',
              },
            ],
          },
          strategy: 'deployment',
        },
        maintainers: [
          {
            email: 'jaeger-tracing@googlegroups.com',
            name: 'Jaeger Google Group',
          },
        ],
        description:
          'Jaeger, inspired by [Dapper](https://research.google.com/pubs/pub36356.html) and [OpenZipkin](http://zipkin.io/), is a distributed tracing system released as open source by Uber Technologies. It is used for monitoring and troubleshooting microservices-based distributed systems.\n\n### Core capabilities\n\nJaeger is used for monitoring and troubleshooting microservices-based distributed systems, including:\n\n* Distributed context propagation\n* Distributed transaction monitoring\n* Root cause analysis\n* Service dependency analysis\n* Performance / latency optimization\n* OpenTracing compatible data model\n* Multiple storage backends: Elasticsearch, Memory.\n\n### Operator features\n\n* **Multiple modes** - Supports `allInOne` and `production`[modes of deployment](https://www.jaegertracing.io/docs/latest/operator/#deployment-strategies).\n\n* **Configuration** - The Operator manages [configuration information](https://www.jaegertracing.io/docs/latest/operator/#configuring-the-custom-resource) when installing Jaeger instances.\n\n* **Storage** - [Configure storage](https://www.jaegertracing.io/docs/latest/operator/#storage-options) used by Jaeger. By default, `memory` is used. Other options include `elasticsearch`. The operator can delegate creation of an Elasticsearch cluster to the Elasticsearch Operator if deployed.\n\n* **Agent** - can be deployed as [sidecar](https://www.jaegertracing.io/docs/latest/operator/#auto-injecting-jaeger-agent-sidecars) (default) and/or [daemonset](https://www.jaegertracing.io/docs/latest/operator/#installing-the-agent-as-daemonset).\n\n* **UI** - Optionally setup secure route to provide [access to the Jaeger UI](https://www.jaegertracing.io/docs/latest/operator/#accessing-the-jaeger-console-ui).\n\n### Before you start\n\n1. Ensure that the appropriate storage solution, that will be used by the Jaeger instance, is available and configured.\n2. If intending to deploy an Elasticsearch cluster via the Jaeger custom resource, then the Elasticsearch Operator must first be installed.\n\n### Troubleshooting\n\n* https://www.jaegertracing.io/docs/latest/troubleshooting/',
        selector: {
          matchLabels: {
            name: 'jaeger-operator',
          },
        },
        labels: {
          name: 'jaeger-operator',
        },
      },
      status: {
        reason: 'Copied',
        message: 'The operator is running in openshift-operators but is managing this namespace',
        lastUpdateTime: '2019-12-13T14:25:20Z',
        requirementStatus: [
          {
            group: 'apiextensions.k8s.io',
            kind: 'CustomResourceDefinition',
            message: 'CRD is present and Established condition is true',
            name: 'elasticsearches.logging.openshift.io',
            status: 'Present',
            uuid: '58fe3dc1-0670-48f6-8382-27aadcb7eadb',
            version: 'v1beta1',
          },
          {
            group: 'apiextensions.k8s.io',
            kind: 'CustomResourceDefinition',
            message: 'CRD is present and Established condition is true',
            name: 'jaegers.jaegertracing.io',
            status: 'Present',
            uuid: 'f68d706b-7807-453f-91bf-ead0e2fcefcb',
            version: 'v1beta1',
          },
          {
            dependents: [
              {
                group: 'rbac.authorization.k8s.io',
                kind: 'PolicyRule',
                message:
                  'namespaced rule:{"verbs":["*"],"apiGroups":[""],"resources":["pods","services","endpoints","persistentvolumeclaims","events","configmaps","secrets","serviceaccounts"]}',
                status: 'Satisfied',
                version: 'v1beta1',
              },
              {
                group: 'rbac.authorization.k8s.io',
                kind: 'PolicyRule',
                message:
                  'namespaced rule:{"verbs":["*"],"apiGroups":["apps"],"resources":["deployments","daemonsets","replicasets","statefulsets"]}',
                status: 'Satisfied',
                version: 'v1beta1',
              },
              {
                group: 'rbac.authorization.k8s.io',
                kind: 'PolicyRule',
                message:
                  'namespaced rule:{"verbs":["get","create"],"apiGroups":["monitoring.coreos.com"],"resources":["servicemonitors"]}',
                status: 'Satisfied',
                version: 'v1beta1',
              },
              {
                group: 'rbac.authorization.k8s.io',
                kind: 'PolicyRule',
                message:
                  'namespaced rule:{"verbs":["*"],"apiGroups":["io.jaegertracing"],"resources":["*"]}',
                status: 'Satisfied',
                version: 'v1beta1',
              },
              {
                group: 'rbac.authorization.k8s.io',
                kind: 'PolicyRule',
                message:
                  'namespaced rule:{"verbs":["*"],"apiGroups":["extensions"],"resources":["ingresses"]}',
                status: 'Satisfied',
                version: 'v1beta1',
              },
              {
                group: 'rbac.authorization.k8s.io',
                kind: 'PolicyRule',
                message:
                  'namespaced rule:{"verbs":["*"],"apiGroups":["batch"],"resources":["jobs","cronjobs"]}',
                status: 'Satisfied',
                version: 'v1beta1',
              },
              {
                group: 'rbac.authorization.k8s.io',
                kind: 'PolicyRule',
                message:
                  'namespaced rule:{"verbs":["*"],"apiGroups":["rbac.authorization.k8s.io"],"resources":["clusterrolebindings"]}',
                status: 'Satisfied',
                version: 'v1beta1',
              },
              {
                group: 'rbac.authorization.k8s.io',
                kind: 'PolicyRule',
                message:
                  'cluster rule:{"verbs":["*"],"apiGroups":[""],"resources":["pods","services","endpoints","persistentvolumeclaims","events","configmaps","secrets","serviceaccounts"]}',
                status: 'Satisfied',
                version: 'v1beta1',
              },
              {
                group: 'rbac.authorization.k8s.io',
                kind: 'PolicyRule',
                message:
                  'cluster rule:{"verbs":["*"],"apiGroups":["apps"],"resources":["deployments","daemonsets","replicasets","statefulsets"]}',
                status: 'Satisfied',
                version: 'v1beta1',
              },
              {
                group: 'rbac.authorization.k8s.io',
                kind: 'PolicyRule',
                message:
                  'cluster rule:{"verbs":["get","create"],"apiGroups":["monitoring.coreos.com"],"resources":["servicemonitors"]}',
                status: 'Satisfied',
                version: 'v1beta1',
              },
              {
                group: 'rbac.authorization.k8s.io',
                kind: 'PolicyRule',
                message:
                  'cluster rule:{"verbs":["*"],"apiGroups":["io.jaegertracing"],"resources":["*"]}',
                status: 'Satisfied',
                version: 'v1beta1',
              },
              {
                group: 'rbac.authorization.k8s.io',
                kind: 'PolicyRule',
                message:
                  'cluster rule:{"verbs":["*"],"apiGroups":["extensions"],"resources":["ingresses"]}',
                status: 'Satisfied',
                version: 'v1beta1',
              },
              {
                group: 'rbac.authorization.k8s.io',
                kind: 'PolicyRule',
                message:
                  'cluster rule:{"verbs":["*"],"apiGroups":["batch"],"resources":["jobs","cronjobs"]}',
                status: 'Satisfied',
                version: 'v1beta1',
              },
              {
                group: 'rbac.authorization.k8s.io',
                kind: 'PolicyRule',
                message:
                  'cluster rule:{"verbs":["*"],"apiGroups":["route.openshift.io"],"resources":["routes"]}',
                status: 'Satisfied',
                version: 'v1beta1',
              },
              {
                group: 'rbac.authorization.k8s.io',
                kind: 'PolicyRule',
                message:
                  'cluster rule:{"verbs":["*"],"apiGroups":["logging.openshift.io"],"resources":["elasticsearches"]}',
                status: 'Satisfied',
                version: 'v1beta1',
              },
              {
                group: 'rbac.authorization.k8s.io',
                kind: 'PolicyRule',
                message:
                  'cluster rule:{"verbs":["*"],"apiGroups":["jaegertracing.io"],"resources":["*"]}',
                status: 'Satisfied',
                version: 'v1beta1',
              },
            ],
            group: '',
            kind: 'ServiceAccount',
            message: '',
            name: 'jaeger-operator',
            status: 'Present',
            version: 'v1',
          },
        ],
        certsLastUpdated: null,
        lastTransitionTime: '2019-12-13T13:54:47Z',
        conditions: [
          {
            lastTransitionTime: '2019-12-13T13:54:15Z',
            lastUpdateTime: '2019-12-13T13:54:15Z',
            message: 'requirements not yet checked',
            phase: 'Pending',
            reason: 'RequirementsUnknown',
          },
          {
            lastTransitionTime: '2019-12-13T13:54:20Z',
            lastUpdateTime: '2019-12-13T13:54:20Z',
            message: 'all requirements found, attempting install',
            phase: 'InstallReady',
            reason: 'AllRequirementsMet',
          },
          {
            lastTransitionTime: '2019-12-13T13:54:22Z',
            lastUpdateTime: '2019-12-13T13:54:22Z',
            message: 'waiting for install components to report healthy',
            phase: 'Installing',
            reason: 'InstallSucceeded',
          },
          {
            lastTransitionTime: '2019-12-13T13:54:22Z',
            lastUpdateTime: '2019-12-13T13:54:23Z',
            message:
              'installing: Waiting: waiting for deployment jaeger-operator to become ready: Waiting for rollout to finish: 0 of 1 updated replicas are available...\n',
            phase: 'Installing',
            reason: 'InstallWaiting',
          },
          {
            lastTransitionTime: '2019-12-13T13:54:47Z',
            lastUpdateTime: '2019-12-13T13:54:47Z',
            message: 'install strategy completed with no errors',
            phase: 'Succeeded',
            reason: 'InstallSucceeded',
          },
        ],
        phase: 'Succeeded',
        certsRotateAt: null,
      },
    },
  ],
  loadError: '',
  loaded: true,
};

export const topologyDataModel: TopologyDataModel = {
  graph: {
    nodes: [
      { id: 'e187afa2-53b1-406d-a619-cf9ff1468031', type: 'workload', name: 'hello-openshift' },
    ],
    edges: [],
    groups: [],
  },
  topology: {
    'e187afa2-53b1-406d-a619-cf9ff1468031': {
      data: {},
      id: 'e187afa2-53b1-406d-a619-cf9ff1468031',
      name: 'hello-openshift',
      operatorBackedService: false,
      type: 'workload',
      resources: {
        buildConfigs: [],
        obj: sampleDeployments.data[0],
        routes: [],
        services: [],
      },
    },
    'e187afa2-53b1-406d-a619-cf9ff1468032': {
      data: {},
      id: 'e187afa2-53b1-406d-a619-cf9ff1468032',
      name: 'hello-openshift-1',
      operatorBackedService: true,
      type: 'workload',
      resources: {
        buildConfigs: [],
        obj: sampleDeployments.data[1],
        routes: [],
        services: [],
      },
    },
  },
};

export const dataModel: Model = {
  nodes: [
    {
      data: topologyDataModel.topology['e187afa2-53b1-406d-a619-cf9ff1468031'],
      height: 104,
      id: 'e187afa2-53b1-406d-a619-cf9ff1468031',
      label: 'hello-openshift',
      type: 'workload',
      width: 104,
    },
  ],
  edges: [],
};

export const sampleHelmChartDeploymentConfig = {
  kind: 'DeploymentConfig',
  apiVersion: 'apps/v1',
  metadata: {
    name: 'nodejs-helm',
    namespace: 'testproject1',
    selfLink: '/apis/apps.openshift.io/v1/namespaces/testproject1/deploymentconfigs/nodejs',
    uid: 'b69ey0df-3f9382-11e9-02f68-525400680f2',
    resourceVersion: '732186',
    generation: 2,
    creationTimestamp: '2019-04-22T11:58:33Z',
    labels: {
      app: 'nodejs-helm',
      heritage: 'Helm',
      chart: 'Nodejs',
      release: 'nodejs-helm-12345',
    },
    annotations: {
      'app.openshift.io/vcs-uri': 'https://github.com/redhat-developer/topology-example',
      'app.openshift.io/vcs-ref': 'master',
    },
  },
  spec: {
    strategy: {
      type: 'Rolling',
    },
    template: {
      metadata: {
        creationTimestamp: null,
        labels: {
          app: 'nodejs-helm',
          deploymentconfig: 'nodejs-helm',
        },
      },
      spec: {},
    },
  },
  status: {
    availableReplicas: 1,
    unavailableReplicas: 0,
    latestVersion: 1,
    updatedReplicas: 1,
    replicas: 1,
    readyReplicas: 1,
  },
};

export const MockResources: TopologyDataResources = {
  deployments: sampleDeployments,
  deploymentConfigs: sampleDeploymentConfigs,
  replicationControllers: sampleReplicationControllers,
  replicaSets: sampleReplicaSets,
  pods: samplePods,
  services: sampleServices,
  routes: sampleRoutes,
  buildConfigs: sampleBuildConfigs,
  builds: sampleBuilds,
  daemonSets: sampleDaemonSets,
  statefulSets: sampleStatefulSets,
  pipelines: samplePipeline,
  pipelineRuns: samplePipelineRun,
  clusterServiceVersions: sampleClusterServiceVersions,
};

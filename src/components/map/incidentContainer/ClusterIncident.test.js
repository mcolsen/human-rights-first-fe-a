import React from 'react';
import { render, cleanup } from '../../../utils/test-utils';
import ClusterIncident from './ClusterIncident';

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

const props = {
  incidents: {
    properties: {
      incident: {
        incident_id: 'example',
        src: ['https://www.example.com'],
        categories: ['less-lethal'],
        city: 'San Jose',
        state: 'California',
        lat: 37.33532,
        long: -121.88931,
        title: 'Example',
        desc: 'Example',
        date: '2000-01-01T06:00:00.000Z',
        verbalization: false,
        empty_hand_soft: false,
        empty_hand_hard: false,
        less_lethal_methods: true,
        lethal_force: false,
        uncategorized: false,
      },
      i: 0,
    },
  },
};

describe('<ClusterIncident />', () => {
  test('Component renders', async () => {
    const { container } = await render(<ClusterIncident {...props} />);
    expect(container).toContainElement(container.firstChild);
  });
});

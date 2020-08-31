import { Selector } from 'components/Select/Select.component';

export default {
  title: 'CSF/Selector',
  component: Selector,
  parameters: {
    onChange: (c: string[]): void => {
      console.log(c);
    },
    options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
  },
};

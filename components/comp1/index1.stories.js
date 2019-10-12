import {storiesOf} from '@storybook/vue'
import comp1 from './index.vue'

storiesOf('Components', module)
  .add('Comp1', () => ({
    components: {comp1},
    template:
      `
      <comp1
      />
    `
  }))
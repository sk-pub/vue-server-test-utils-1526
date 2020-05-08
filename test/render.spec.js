import { render } from '@vue/server-test-utils';
import demo from '@/components/demo.vue';

describe('render', () => {
  it('of hello world should have hello world', async () => {
    const output = await render(demo);
    expect(output.text()).toBe('Hello world!');
  });
});

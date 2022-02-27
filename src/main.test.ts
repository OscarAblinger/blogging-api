import { foo } from './main'

test('that foo is foo', () => {
    expect(foo()).toBe('foo')
});

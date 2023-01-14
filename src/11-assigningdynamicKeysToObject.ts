/*
Challenge
Your challenge is to reference the TypeScript docs and work out what could be causing this problem.

Update cache to be typed properly so the errors go away.
*/
import { it } from 'mocha';
import { expect } from 'chai';
import assert from 'assert';
interface ICache {
    [someKey: string]: any;
}
const cacheX: Record<string, string> = {}; // one way to fix the error (Record is a generic type)
const createCache = () => {
    const cache: { [someKey: string]: string } = {}; // another way to fix the error
    const cache1 = {}; // another way to fix the error
    const cache2 = {} as { [someKey: string]: any }; // another way to fix the error
    const cache3: ICache = {}; // another way to fix the error
    cache3.ok = 'ok';

    const add = (id: string, value: string) => {
        cache[id] = value;
    };

    // cache.ok = "ok";
    // cache.myKey = 12

    const remove = (id: string) => {
        delete cache[id];
    };

    return {
        cache,
        add,
        remove,
    };
};

describe('Assign dynamic keys to object', () => {
    it('Should add values to the cache', () => {
        const cache = createCache();

        cache.add('123', 'Matt');

        expect(cache.cache['123']).to.be.equal('Matt');
    });

    it('Should remove values from the cache', () => {
        const cache = createCache();

        cache.add('123', 'Matt');
        cache.remove('123');

        expect(cache.cache['123']).to.be.equal(undefined);
    });
});

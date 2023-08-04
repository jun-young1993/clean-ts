import TestModel from '@model/test.model'
import NeDB from 'nedb-promises';
describe('test model',() => {
	it('construct test model', async () => {
		expect(await TestModel instanceof NeDB).toBe(true);
	})
})
import fs from 'node:fs';

import BaseModel from "@model/base.model";
// https://github.com/bajankristof/nedb-promises/blob/master/test/a.create.test.js
describe('base model', () => {
	
	it('create db file', async () => {

		const model = new BaseModel({table: 'foo'});
		await model.getDB().load();
		
		const checkFile = fs.existsSync(model.getPath());
		
		expect(checkFile).toBe(true);
		
		if(checkFile){
			fs.unlinkSync(model.getPath());
		}
	})
})

import { Request, Response } from 'express';
import TestModel from '@app/models/test.model';
export const index = async (_: Request, res: Response) => {
	console.log('index');
	const result = await TestModel.insert({
		test: 'test'
	})
	console.log('result',result);

	// console.log('db read',TestModel.read());
	res.json({ message: 'GET /api/tests!' });
}
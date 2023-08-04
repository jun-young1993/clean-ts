
import { Request, Response } from 'express';
import TestModel from '@app/models/test.model';
export const index = async (_: Request, res: Response) => {
	const result = await TestModel.insert({
		test: 'test'
	})
	res.json({ message: 'GET /api/tests!' });
}
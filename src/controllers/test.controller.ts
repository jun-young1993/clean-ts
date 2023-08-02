
import { Request, Response } from 'express';
import TestModel from '@app/models/test.model';
export const index = async (_: Request, res: Response) => {
	console.log('db read',TestModel.read());
	res.json({ message: 'GET /api/tests' });
}
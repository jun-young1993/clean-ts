import Routes from '@interfaces/routes.interface';
import express, { Express } from 'express';
export class App {
	private app: Express;
	private port: number;

	constructor(routes: Routes[]){
		this.app = express();
		this.port = 3000;
	}

	public listen(): void {
		this.app.listen(this.port)
	}
}
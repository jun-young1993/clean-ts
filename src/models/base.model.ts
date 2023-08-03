


import NeDB from 'nedb-promises';
import { BaseModelOptions } from "@interface/base-model.interface";




export default class BaseModel<TDocument = {_id: string}> {
	
	private options: BaseModelOptions;
	private db: NeDB<TDocument>;

	constructor(options: BaseModelOptions){
		this.options = options;	
		this.db = this.initialize();
		this.getDB().load();
	}

	public getPath(): string {
		return `${process.cwd()}/storage/${this.getOptions('table')}.db`;
	}

	private getOptions<T extends keyof BaseModelOptions>(name: T): BaseModelOptions[T] {
		return this.options[name];
	}

	private initialize():NeDB<TDocument> {
		return NeDB.create({
			filename: this.getPath(),
			autoload: true
		});
	}

	public getDB(): NeDB<TDocument> {
		return this.db;
	}
}
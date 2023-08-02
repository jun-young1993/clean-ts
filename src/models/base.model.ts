import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';



import { BaseModelOptions } from "@interface/base-model.interface";




export default class BaseModel {
	
	private options: BaseModelOptions;
	private modelOptions!: Required<BaseModelOptions>;

	constructor(options: BaseModelOptions){
		this.options = options;	
		// const db = new LowSync(modelOptions.adapter,{})
		this.mergeOptions();
	}

	public read() {
		return this.getDb().read();
	}

	private getDb(){

		return new Low(this.getOptions().adapter, { posts: [] })
	}

	private mergeOptions(): void {
		const defaultOptions = this.defaultOptions();
		const modelOptions = Object.assign({},this.options,defaultOptions)
		this.modelOptions = modelOptions;	
	}

	private getOptions(): Required<BaseModelOptions> {
		if(!this.modelOptions){
			this.mergeOptions();
		}

		return this.modelOptions;
		
	}

	private defaultOptions(): Required<BaseModelOptions> {
		return {	
			adapter: new JSONFile('db.json'),
			table: "unknwon"
		}
	}
}
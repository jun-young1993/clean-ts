import { Adapter } from "lowdb/lib";

export interface BaseModelOptions {
	adapter?: Adapter<unknown>
	table: string
}



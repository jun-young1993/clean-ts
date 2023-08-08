export const getEnv = (
	key:string, 
	defaultValue?: string
): string => {
	const env = process.env;
	const value =  env[key];

	if(value !== undefined){
		return value;
	}

	if(defaultValue !== undefined){
		return defaultValue;
	}

	throw new Error(`Config error: missing required env variable "${key}"`);
}
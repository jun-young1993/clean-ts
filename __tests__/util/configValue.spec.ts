import { getEnv } from '@util/configValue';

describe('testing config value', () => {


	it('should return process.env or "2000" if process.env.PORT is defined', async () => {
		
		const port = getEnv('PORT','2000');
		expect(port).toBeDefined();
		expect(port).toMatch(/^(3000|2000)$/);
	})
});
      
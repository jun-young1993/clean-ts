import * as axios from 'axios';

describe('GET /posts', () => {
  it('should get posts', async () => {
    const response = await axios.get('http://localhost:3000/posts');
    expect(response.status).toEqual(200);
    expect(response.data).toBeTruthy();
  });
});


describe('GET /', () => {
  it('should get root', async () => {
    const response = await axios.get('http://localhost:3000/');
    expect(response.status).toEqual(200);
    expect(response.data).toBeTruthy();
  });
});
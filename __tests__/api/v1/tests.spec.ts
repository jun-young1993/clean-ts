import request from "supertest";
import app from "@app/app";


/**
 * 이 함수는 일련의 관련 테스트를 그룹화하는데 사용됩니다. 첫 번째 매개변수는 테스트 그룹에 대한 설명(일반적으로 문자열)이며, 두 번째 매개변수는 해당 테스트 그룹에 속한 테스트들을 정의하는 콜백 함수입니다.
 */
describe('GET /api/v1/tests', () => {
  /**
   * it (또는 test): 이 함수는 개별 테스트를 정의하는데 사용됩니다. describe 함수와 마찬가지로 첫 번째 매개변수는 테스트에 대한 설명이며, 두 번째 매개변수는 테스트 실행을 위한 콜백 함수입니다.
   */
  it('returns status code 200', async () => {
    /**
     * expect: 이 함수는 테스트에서 어떤 것을 검증하는데 사용됩니다. 테스트 대상에 대한 "expectation"을 생성하며, 이를 "matcher" 함수와 함께 사용하여 실제 값이 예상한 값과 일치하는지 확인합니다.
     */
    const response = await request(app).get('/api/v1/tests');
    expect(response.statusCode).toEqual(200);

  })
});



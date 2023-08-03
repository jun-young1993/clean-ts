import BaseModel from "@model/base.model";
const TestModel = new BaseModel({table: 'test'});
export default TestModel.getDB();
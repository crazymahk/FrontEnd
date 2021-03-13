import { responseModel } from './ResponseModel';
export interface ListResponseModel<T> extends responseModel{

data: T [];
}

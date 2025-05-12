import request from "../index";

class UsersServices {
  static UsersList = () => {
    return request.get("users");
  };
  static UsersDetail = (id) => {
    return request.get(`/users/${id}`);
  };
  static UsersCreate = (params) => {
    return request.post("users", params);
  };
  static UsersUpdate = (params, id) => {
    return request.put(`/users/${id}`, params);
  };
  static UsersDelete = (params, id) => {
    return request.delete(`/users/${id}`, params);
  };
}
export default UsersServices;

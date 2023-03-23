import axios from 'axios';

const API_URL = '/usuarios';

const UserService = {
  getUsers() {
    return axios.get(`http://localhost:8080${API_URL}`)
      .then(response => response.data);
  },
  getUser(id) {
    return axios.get(`${API_URL}/users/${id}`)
      .then(response => response.data);
  },
  createUser(userData) {
    return axios.post(`${API_URL}/users`, userData)
      .then(response => response.data);
  },
  // other user-related methods
};

export default UserService;
import axiosInstance from "../../apiConfig/api/Api";

const AuthService = {
  login: function (username, password) {
    return axiosInstance({
      url: "/api/login",
      method: "POST",
      data: {
        username: username,
        password: password
      }
    });
  },
  passwordForget: function (formData) {
    return axiosInstance({
      url: `/password/forget`,
      method: "POST",
      data: formData
    });
  },
  passwordChange: function (formData) {
    return axiosInstance({
      url: `/password/change`,
      method: "POST",
      data: formData
    });
  },
  passwordReset: function (uniqueId, formData) {
    return axiosInstance({
      url: `/password/reset/${uniqueId}`,
      method: "POST",
      data: formData
    });
  },
  forgetPasswordOtpVerify: function (formData) {
    return axiosInstance({
      url: `/otp/verify`,
      method: "POST",
      data: formData
    });
  }
};

export default AuthService;

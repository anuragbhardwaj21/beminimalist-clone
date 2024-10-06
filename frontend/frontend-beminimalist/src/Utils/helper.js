import toast, { Toaster } from "react-hot-toast";

export const getLocalStorageItem = (key) => localStorage.getItem(key);
export const setLocalStorageItem = (key, value) =>
  localStorage.setItem(key, value);
export const removeLocalStorageItem = (key) => localStorage.removeItem(key);

export const notifySuccess = (message) => {
  toast.success(message, {
    duration: 2000, 
    position: "top-center",
  });
};
export const notifyError = (message) => {
  toast.error(message, {
    duration: 2000, 
    position: "top-center",
  });
};

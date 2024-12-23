import axios, {AxiosResponse} from "axios";
import {NavigateFunction} from "react-router-dom";

const API_URL = 'http://localhost'

export function constructUrl(params: Record<string, any> | undefined, url: string) {
  const parameterString = Object.entries(params || {}).map(([key, value]) => `${key}=${encodeURI(value)}`).join('&') || '';
  return `${API_URL}/api/${url}${params ? '?' : ''}${parameterString}`;
}

export default function apiCall(url: string, params?: Record<string, any>) {
  const token = localStorage.getItem('token')
  const constructedUrl = encodeURI(constructUrl(params, url));
  return axios.get(constructedUrl, {headers: {'Authorization': 'Bearer ' + token}});
}

export function redirectOnApiError(axiosCall: Promise<void | AxiosResponse<any, any>>, navigate: NavigateFunction) {
  axiosCall.catch(error => {
    if (error.response && error.response.status === 401) {
      // Token expired, remove it from localstorage and prompt user to log in again
      localStorage.removeItem('token');
      localStorage.setItem('name', 'invitado');
      alert('Su sesión ha expirado. Por favor, inicie sesión de nuevo.');
      // Redirect user to the login page or prompt for login credentials
      navigate('/');
    } else {
      console.log(error);
      alert('Hubo un error en la carga de datos del usuario. Por favor intente nuevamente.');
    }
  })
}
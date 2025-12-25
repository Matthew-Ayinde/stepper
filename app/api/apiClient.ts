import axios from "axios";
import { ApiRoutes } from "./apiRoutes";
import { CreateCustomer } from "@/models/auth";

const API = axios.create({
  baseURL: ApiRoutes.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});


export function useCreateCustomer() {
  async function createCustomer(payload: CreateCustomer) {
    return API.post(ApiRoutes.USER.REGISTERCUSTOMER, payload);
  }

  return createCustomer;
}

// login customer
export function useLoginCustomer() {
  async function loginCustomer(email: string, password: string) {
    return API.post(ApiRoutes.USER.LOGIN, { email, password });
  }

  return loginCustomer;
}

// get customer profile
export function useGetCustomerProfile() {
  async function getCustomerProfile(token: string) {
    return API.get(ApiRoutes.USER.PROFILE, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  return getCustomerProfile;
}
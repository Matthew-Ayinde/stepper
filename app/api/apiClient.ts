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
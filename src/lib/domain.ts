export interface Customer {
  id: number | null,
  name: string,
  zip: string,
  address: string,
  tel: string,
  email: string,
}

export const DefaultCustomer: Customer = {
  id: null,
  name: "",
  zip: "",
  address: "",
  tel: "",
  email: "",
}

export interface Product {
  id: number | null,
  name: string,
  price: number,
  cost: number,
  tax_rate: number,
}

export const DefaultProduct: Product = {
  id: null,
  name: "",
  price: 0,
  cost: 0,
  tax_rate: 0,
}

export interface Project {
  id: number | null,
  name: string,
  phase: number,
}

export const DefaultProject: Project = {
  id: null,
  name: "",
  phase: 0,
}

export const API_URL_CUSTOMER = "http://localhost/api/customer/";
export const API_URL_PRODUCT = "http://localhost/api/product/";
export const API_URL_PROJECT = "http://localhost/api/project/";
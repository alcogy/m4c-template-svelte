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

export const API_URL = "http://localhost:9000/";
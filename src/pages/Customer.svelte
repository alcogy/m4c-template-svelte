<script lang="ts">
  import { type Customer, API_URL, DefaultCustomer } from '../lib/domain';
  import Header from '../components/Header.svelte';
  import List from '../components/customer/List.svelte';
  import Detail from '../components/customer/Detail.svelte';
  import Form from '../components/customer/Form.svelte';

  let customers: Customer[];
  let detail: Customer = DefaultCustomer;

  const getCustomerById = async(id: number) => {
    const result = await fetch(`${API_URL}${id.toString()}`);
    detail = await result.json() as Customer;
  }

  const fetchCustomers = async() => {
    const result = await fetch(API_URL);
    customers = await result.json() as Customer[];
  }

  const showNewForm = () => {
    detail = DefaultCustomer;
  }

  // Initialize
  fetchCustomers();
</script>

<Header modular="customer" />
<main>
  <div class="new-button-wrap">
    <button on:click={showNewForm}>New</button>
  </div>
  
  <List customers={customers} onClickDetail={getCustomerById} />

  <div class="detail-wrap">
    <Form customer={detail} />
  </div>
  
</main>

<style>
  main {
    max-width: 500px;
    margin: 40px auto;
  }

  .new-button-wrap {
    padding: 8px 0;
    display: flex;
    justify-content: flex-end;
  }

  .detail-wrap {
    margin-top: 48px;
  }
</style>
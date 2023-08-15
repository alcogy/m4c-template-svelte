<script lang="ts">
  import { type Customer, API_URL_PRODUCT } from '../../lib/domain';
  export let customer: Customer;

  const onClickEdit = async() => {

  }
  
  const onClickDelete = async() => {
    await fetch(API_URL_PRODUCT, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customer),
    });
    
    location.reload();
  }
</script>

<div class="buttons-wrap">
  <button on:click={onClickEdit}>Edit</button>
  <button on:click={onClickDelete}>Delete</button>
</div>
<table>
  <tr>
    <td>ID</td>
    <td>{customer.id}</td>
  </tr>
  <tr>
    <td>Name</td>
    <td>{customer.name}</td>
  </tr>
  <tr>
    <td>Zip</td>
    <td>{customer.zip}</td>
  </tr>
  <tr>
    <td>Address</td>
    <td>{customer.address}</td>
  </tr>
  <tr>
    <td>Tel</td>
    <td>{customer.tel}</td>
  </tr>
  <tr>
    <td>E-Mail</td>
    <td>{customer.email}</td>
  </tr>
</table>

<style>
  .buttons-wrap {
    margin-bottom: 16px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  table td {
    padding: 8px;
    border: 1px solid #999;
  }
</style>
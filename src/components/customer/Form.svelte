<script lang="ts">
  import { type Customer, API_URL } from '../../lib/domain';

  export let customer: Customer;

  const onClickDelete = async() => {
    await fetch(API_URL, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customer),
    });
    
    location.reload();
  }

  const submit = async() => {
    const method = customer.id === null ? "POST" : "PUT";
    await fetch(API_URL, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customer),
    });

    location.reload();
  }

  const onChangeName = (e) => customer.name = e.target.value;
  const onChangeZip = (e) => customer.zip = e.target.value;
  const onChangeAddress = (e) => customer.address = e.target.value;
  const onChangeTel = (e) => customer.tel = e.target.value;
  const onChangeEmail = (e) => customer.email = e.target.value;
</script>

{#if customer.id !== null}
<div class="buttons-wrap">
  <button on:click={onClickDelete}>Delete</button>
</div>
{/if}
<table>
  <tr>
    <td>Name</td>
    <td><input type="text" value={customer.name} on:change={onChangeName} /></td>
  </tr>
  <tr>
    <td>Zip</td>
    <td><input type="text" value={customer.zip} on:change={onChangeZip} /></td>
  </tr>
  <tr>
    <td>Address</td>
    <td><input type="text" value={customer.address} on:change={onChangeAddress} /></td>
  </tr>
  <tr>
    <td>Tel</td>
    <td><input type="text" value={customer.tel} on:change={onChangeTel} /></td>
  </tr>
  <tr>
    <td>Email</td>
    <td><input type="text" value={customer.email} on:change={onChangeEmail} /></td>
  </tr>
</table>
<button on:click={submit}>Submit</button>

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
  input {
    width: 100%;
    padding: 4px 8px;
  }
</style>
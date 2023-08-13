<script lang="ts">
  import { type Product, API_URL_PRODUCT } from '../../lib/domain';

  export let product: Product;

  const onClickDelete = async() => {
    await fetch(API_URL_PRODUCT, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: product.id }),
    });
    
    location.reload();
  }

  const submit = async() => {
    console.log(product);
    const method = product.id === null ? "POST" : "PUT";
    await fetch(API_URL_PRODUCT, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
    
    location.reload();
  }

  const onChangeName = (e) => product.name = e.target.value;
  const onChangePrice = (e) => product.price = Number(e.target.value);
  const onChangeCost = (e) => product.cost = Number(e.target.value);
  const onChangeTaxRate = (e) => product.tax_rate = Number(e.target.value);
</script>

{#if product.id !== null}
<div class="buttons-wrap">
  <button on:click={onClickDelete}>Delete</button>
</div>
{/if}
<table>
  <tr>
    <td>Name</td>
    <td><input type="text" value={product.name} on:change={onChangeName} /></td>
  </tr>
  <tr>
    <td>Price</td>
    <td><input type="number" min="0" value={product.price} on:change={onChangePrice} /></td>
  </tr>
  <tr>
    <td>Cost</td>
    <td><input type="number" min="0" value={product.cost} on:change={onChangeCost} /></td>
  </tr>
  <tr>
    <td>Tax Rate</td>
    <td><input type="number" min="0" value={product.tax_rate} on:change={onChangeTaxRate} /></td>
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
<script lang="ts">
  import { type Product, API_URL_PRODUCT, DefaultProduct } from '../lib/domain';
  import Header from '../components/Header.svelte';
  import List from '../components/product/List.svelte';
  import Form from '../components/product/Form.svelte';

  let products: Product[];
  let detail: Product = DefaultProduct;

  const getProductById = async(id: number) => {
    const result = await fetch(`${API_URL_PRODUCT}${id.toString()}`);
    detail = await result.json() as Product;
  }

  const fetchProducts = async() => {
    const result = await fetch(API_URL_PRODUCT);
    products = await result.json() as Product[];
  }

  const showNewForm = () => {
    detail = DefaultProduct;
  }

  // Initialize
  fetchProducts();
</script>

<Header modular="product" />
<main>
  <div class="new-button-wrap">
    <button on:click={showNewForm}>New</button>
  </div>
  
  <List products={products} onClickDetail={getProductById} />

  <div class="detail-wrap">
    <Form product={detail} />
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
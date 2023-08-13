<script lang="ts">
  import { type Product } from '../../lib/domain';
  export let products: Product[];
  export let onClickDetail: (id: number) => void;
</script>

<div class="wrap">
  {#if products}
    <ul>
      {#each products as product}
        <li>
          <button on:click={() => onClickDetail(product.id)}>Detail</button>
          <p>{product.name}</p>
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  li {
    display: flex;
    justify-content: flex-start;
    gap: 16px;
  }

  li p {
    margin: 0;
  }


</style>
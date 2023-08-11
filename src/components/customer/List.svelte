<script lang="ts">
  import { type Customer } from '../../lib/domain';
  export let customers: Customer[];
  export let onClickDetail: (id: number) => void;
</script>

<div class="wrap">
  {#if customers}
    <ul>
      {#each customers as customer}
        <li>
          <button on:click={() => onClickDetail(customer.id)}>Detail</button>
          <p>{customer.name}</p>
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
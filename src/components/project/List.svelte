<script lang="ts">
  import { type Project } from '../../lib/domain';
  export let projects: Project[];
  export let onClickDetail: (id: number) => void;
</script>

<div class="wrap">
  {#if projects}
    <ul>
      {#each projects as project}
        <li>
          <button on:click={() => onClickDetail(project.id)}>Detail</button>
          <p>{project.name}</p>
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
<script lang="ts">
  import { type Project, API_URL_PROJECT } from '../../lib/domain';

  export let project: Project;

  const onClickDelete = async() => {
    await fetch(API_URL_PROJECT, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: project.id }),
    });
    
    location.reload();
  }

  const submit = async() => {
    console.log(project);
    const method = project.id === null ? "POST" : "PUT";
    await fetch(API_URL_PROJECT, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    });
    
    location.reload();
  }

  const onChangeName = (e) => project.name = e.target.value;
  const onChangePhase = (e) => project.phase = Number(e.target.value);
</script>

{#if project.id !== null}
<div class="buttons-wrap">
  <button on:click={onClickDelete}>Delete</button>
</div>
{/if}
<table>
  <tr>
    <td>Name</td>
    <td><input type="text" value={project.name} on:change={onChangeName} /></td>
  </tr>
  <tr>
    <td>Phase</td>
    <td><input type="number" min="0" value={project.phase} on:change={onChangePhase} /></td>
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
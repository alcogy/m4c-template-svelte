<script lang="ts">
  import { type Project, API_URL_PROJECT, DefaultProject } from '../lib/domain';
  import Header from '../components/Header.svelte';
  import List from '../components/project/List.svelte';
  import Form from '../components/project/Form.svelte';

  let projects: Project[];
  let detail: Project = DefaultProject;

  const getById = async(id: number) => {
    const result = await fetch(`${API_URL_PROJECT}${id.toString()}`);
    detail = await result.json() as Project;
  }

  const fetcAll = async() => {
    const result = await fetch(API_URL_PROJECT);
    projects = await result.json() as Project[];
    console.log(projects);
  }

  const showNewForm = () => {
    detail = DefaultProject;
  }

  // Initialize
  fetcAll();
</script>

<Header modular="project" />
<main>
  <div class="new-button-wrap">
    <button on:click={showNewForm}>New</button>
  </div>
  
  <List projects={projects} onClickDetail={getById} />

  <div class="detail-wrap">
    <Form project={detail} />
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
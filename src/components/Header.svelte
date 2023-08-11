<script lang="ts">
  export let modular: string;
</script>

<header class="global-header">
  <h1>M4C - Experimental</h1>
  <p>{modular}</p>
</header>


<style>
  .global-header {
    width: 100%;
    background-color: #232323;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    line-height: 1;
    color: #f2f2f2;
    margin: 0;
    font-size: 1.3rem;
  }

  p {
    color: #f2f2f2;
    margin: 0;
  }
</style>
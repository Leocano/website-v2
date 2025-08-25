<script lang="ts">
  import { setup } from "./setup";

  const initialState = setup();
</script>

<div>
  {#each initialState as row}
    {#each row as a}
      <span> | {a.content} | </span>
    {/each}
    <br />
  {/each}
</div>

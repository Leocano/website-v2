<script lang="ts">
  import { boardState } from "./boardState.svelte";
  import Cell from "../Cell.svelte";
</script>

<div class="grid grid-cols-9 gap-2">
  {#each boardState as row, i}
    {#each row as cell, j}
      <Cell {...cell} row={i} col={j} />
    {/each}
  {/each}
</div>

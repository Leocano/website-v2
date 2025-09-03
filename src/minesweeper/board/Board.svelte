<script lang="ts">
  import { boardState } from "./boardState.svelte";
  import Cell from "../Cell.svelte";
</script>

<div
  class="grid grid-cols-[repeat(12,64px)] grid-rows-[repeat(22,64px)] gap-2 bg-slate-500"
>
  {#each boardState as row, i}
    {#each row as cell, j}
      <Cell {...cell} row={i} col={j} />
    {/each}
  {/each}
</div>

<script lang="ts">
  import { getBoardState } from "../board/boardStore.svelte";
  import Cell from "./Cell.svelte";

  const board = getBoardState();
</script>

<div
  class="grid grid-cols-[repeat(12,64px)] grid-rows-[repeat(22,64px)] gap-2 bg-slate-500"
>
  {#each board as row, i}
    {#each row as cell, j}
      <Cell {...cell} row={i} col={j} />
    {/each}
  {/each}
</div>

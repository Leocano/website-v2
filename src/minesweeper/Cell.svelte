<script lang="ts">
  import type { Cell } from "./types";
  import { boardState } from "./board/boardState.svelte";

  type Props = Cell & {
    row: number;
    col: number;
  };

  function showCellContent() {
    boardState[row][col].status = "clicked";
  }

  const { content, status, row, col }: Props = $props();
</script>

<button
  type="button"
  class="h-16 w-16 bg-red-200 border-2"
  onclick={showCellContent}
>
  {#if status === "clicked"}
    {content}
  {/if}
</button>

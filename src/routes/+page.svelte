<script lang="ts">
  import List from "$lib/components/List.svelte";
  import SelectedNotes from "$lib/components/SelectedNotes.svelte";
  import Timeline from "$lib/components/Timeline.svelte";
  import Filter from "$lib/components/Filter.svelte";
  import { mockDocuments } from "$lib/data/mockDocuments";
</script>
<Filter />
<aside>
  <List items={mockDocuments} />
</aside>

<main>
  <SelectedNotes />
  <Timeline />
</main>

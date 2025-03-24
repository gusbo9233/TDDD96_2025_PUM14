<script lang="ts">
  import type { document } from "../models/note";
  import { fetchData } from "../utils/fetchBot";

  // Props 
  const props = $props<{
    journalmall?: string;
    vardenhet?: string;
    yrkesroll?: string;
    searchTerm?: string;
    dateFrom?: string;
    dateTo?: string;
  }>();

  // Derived state
  const journalmall = $derived(props.journalmall ?? "Journalmall");
  const vardenhet = $derived(props.vardenhet ?? "Vårdenhet");
  const yrkesroll = $derived(props.yrkesroll ?? "Yrkesroll");
  const searchTerm = $derived(props.searchTerm ?? "");
  const dateFrom = $derived(props.dateFrom ?? "");
  const dateTo = $derived(props.dateTo ?? "");

  const documents = $state<document[]>([]);
  const filteredDocs = $state<document[]>([]);

  // Load documents on mount
  $effect(() => {
    const loadDocs = async () => {
      const data = await fetchData("documents");
      documents.length = 0;
      documents.push(...data);
      updateFilteredDocs();
    };
    
    loadDocs();
  });

  // Filter documents when props change
  $effect(() => {
    updateFilteredDocs();
  });

  // Update filtered documents
  function updateFilteredDocs() {
    const filtered = documents.filter(doc => {
      const matchesType = journalmall === "Journalmall" || doc.type === journalmall;
      const matchesUnit = vardenhet === "Vårdenhet" || doc.unit === vardenhet;
      const matchesRole = yrkesroll === "Yrkesroll" || doc.professional === yrkesroll;
      const matchesSearch = !searchTerm || 
        doc.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        doc.abstract.toLowerCase().includes(searchTerm.toLowerCase());
      
      let matchesDate = true;
      if (dateFrom) {
        matchesDate = matchesDate && new Date(doc.date) >= new Date(dateFrom);
      }
      if (dateTo) {
        matchesDate = matchesDate && new Date(doc.date) <= new Date(dateTo);
      }
      
      return matchesType && matchesUnit && matchesRole && matchesSearch && matchesDate;
    });
    
    filteredDocs.length = 0;
    filteredDocs.push(...filtered);
  }
  
  function handleDocumentClick(doc: document) {
    // Can be expanded to handle document selection/navigation
    console.log("Selected document:", doc);
  }
</script>

<div class="bg-white rounded-lg shadow-sm border border-gray-200 h-full">
  <div class="p-4">
    {#if filteredDocs.length === 0}
      <div class="p-4 text-center text-gray-500">
        Inga dokument hittades
      </div>
    {:else}
      {#each filteredDocs as doc}
        <div
          class="p-4 mb-2 rounded-lg border border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors"
          on:click={() => handleDocumentClick(doc)}
          on:keydown={(e) => e.key === 'Enter' && handleDocumentClick(doc)}
          tabindex="0"
          role="button"
        >
          <div class="flex justify-between">
            <h3 class="text-lg font-semibold text-gray-900 mb-1">{doc.title}</h3>
            <span class="text-sm text-gray-500">{doc.type}</span>
          </div>
          <p class="text-sm text-gray-600 mb-1">Enhet: {doc.unit}</p>
          <p class="text-sm text-gray-600 mb-1">Yrkesroll: {doc.professional}</p>
          <p class="text-sm text-gray-600 line-clamp-2 mb-2">{doc.abstract}</p>
          <time class="text-xs text-gray-500" datetime={doc.date}>
            {new Date(doc.date).toLocaleDateString()}
          </time>
        </div>
      {/each}
    {/if}
  </div>
</div>

<script>
  // import * as animateScroll from "svelte-scrollto";
  import { scrollto } from "svelte-scrollto";

  export let toggleShowHandler, showMore;
</script>

<!-- <button class="section__show-more-btn" 
    on:click={
            showMore?
            ()=>animateScroll.scrollTo({
                element:'.section.gallery',
                onStart:toggleShowHandler,
                duration:300,
            })
            :toggleShowHandler}>              
    
        {#if showMore}
            Pokaż mniej
        {:else}
            Pokaż więcej!
        {/if}
    </button> -->
<button
  class="section__show-more-btn"
  on:click={showMore ? () => scrollto({
          element: '.section.gallery',
          onStart: toggleShowHandler,
          duration: 300
        }) : toggleShowHandler}>

  {#if showMore}Pokaż mniej{:else}Pokaż więcej!{/if}
</button>

<script>
  import * as animateScroll from "svelte-scrollto";

  const list = [
    "_home",
    "o mnie",
    "galeria",
    "aktualności",
    "cennik",
    "kontakt"
  ];
  const listEng = ["home", "about", "gallery", "news", "price", "contact"];

  let isActive = false;

  const setActiveHandler = () => (isActive = !isActive);
</script>

<style type="text/scss">
  @import "./Nav.scss";
</style>

<button
  class=" hamburger hamburger--collapse {isActive ? 'is-active' : null}"
  type="button"
  on:click={setActiveHandler}>
  <span class="hamburger-box">
    <span class="hamburger-inner" />
  </span>
</button>
<nav class="nav {isActive ? 'active' : null}" on:click={setActiveHandler}>

  <ul class="nav__list">
    {#each list as element, i}
      <li class="nav__list-element">
        <button
          class="nav__link"
          on:click={e => animateScroll.scrollTo({
              element: `[data-section='${listEng[i]}']`
            })}>
          {element}
        </button>
      </li>
    {/each}
  </ul>
</nav>

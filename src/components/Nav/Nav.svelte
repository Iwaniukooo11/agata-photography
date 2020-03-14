<script>
  import * as animateScroll from "svelte-scrollto";
  // import { scrollTo } from "svelte-scrollto";
  const data = [
    {
      id: "photography",
      list: ["home", "o mnie", "galeria", "aktualności", "cennik", "kontakt"],
      listEng: ["home", "about", "gallery", "news", "price", "contact"]
    },
    {
      id: "copywriting",
      list: ["home", "o mnie", "artykuły", "cennik", "kontakt"],
      listEng: ["home", "about", "news", "price", "contact"]
    },
    {
      id: "graphic",
      list: ["home", "o mnie", "galeria", "cennik", "kontakt"],
      listEng: ["home", "about", "gallery", "price", "contact"]
    }
  ];
  // const wr_list = ["home", "o mnie", "artykuły", "cennik", "kontakt"];
  // const wr_listEng = ["home", "about", "news", "price", "contact"];
  // const gr_list = ["home", "o mnie", "galeria", "cennik", "kontakt"];
  // const gr_listEng = ["home", "about", "gallery", "price", "contact"];
  // let list,listEng
  export let current;

  const list = data.filter(el => el.id == current)[0].list;
  const listEng = data.filter(el => el.id == current)[0].listEng;

  let isActive = false;

  const setActiveHandler = () => (isActive = !isActive);
  // export let current;
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
  <img class="nav__logo" src="logo-final.png" alt="logo-image" />

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
<!-- {#if }
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
</nav> -->

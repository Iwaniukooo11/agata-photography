<script>
  import Header from "../../components/Header/Header.svelte";
  export let icon, content;
  import { afterUpdate } from "svelte";

  $: showMore = false;
  let listLength = 0;

  for (let key in content.list) {
    listLength++;
    let str = "";
    const arr = content.list[key].description.split(" ");
    for (let i = 0; i < 15; i++) {
      str += `${arr[i]} `;
    }

    content.list[key].desc_short = str;
    str = "";
    for (let i = 15; i < arr.length; i++) {
      str += `${arr[i]} `;
    }
    content.list[key].desc_long = str;
  }

  let index = 0;
  let element = content.list[index];
  let is960 = false;
  if (window.innerWidth >= 960) {
    is960 = true;
  }

  $: element = content.list[index];

  const showMoreHandler = () => (showMore = !showMore);

  const incrementIndexHandler = () => {
    if (index < listLength - 1) index = index + 1;
    else index = 0;
  };

  const decrementIndexHandler = () => {
    if (index > 0) index = index - 1;
    else index = listLength - 1;
  };

  const resizeHandler = e => {
    if (window.innerWidth >= 960) showMore = true;
    is960 = true;
  };

  console.log(content.phNews);
</script>

<style type="text/scss">
  @import "./News.scss";
</style>

<svelte:window on:resize={resizeHandler} />
<section
  class="section news"
  data-section="news"
  data-aos="-"
  data-aos-once="true">
  <div class="container">
    <Header title="Aktualności" {icon} />
    <p class="section__desc">{content.description}</p>
    <article class="news__card card ">
      <img class="card__img " src={element.image.url} alt="zdjęcie tytułowe" />
      <i class="card__icon far fa-clock" />
      <time class="card__time" datetime={element.time}>{element.time}</time>
      <h3 class="card__head">{element.header}</h3>

      <p class="section__desc card__desc">{element.desc_short}</p>
      <span
        class="collapse card__long-txt-wrap {is960 ? 'show' : null}"
        id="news-card">
        <p class="card__desc section__desc ">{element.desc_long}</p>
      </span>
      <button
        on:click={showMoreHandler}
        data-toggle="collapse"
        data-target="#news-card"
        aria-expanded="false"
        class="section__show-more-btn card__show-more-btn">
        {#if showMore}Czytaj mniej{:else}Czytaj więcej{/if}

      </button>

      <i
        on:click={decrementIndexHandler}
        class="card__nav card__nav--left fas fa-chevron-left" />
      <i
        on:click={incrementIndexHandler}
        class="card__nav card__nav--right fas fa-chevron-right" />
    </article>
  </div>
</section>

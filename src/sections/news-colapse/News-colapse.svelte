<script>
  import Header from "../../components/Header/Header.svelte";
  export let icon, content;
  console.log(icon, content);
</script>

<style lang="scss">
  @import "./News-colapse.scss";
</style>

<section
  class="section news"
  data-section="news"
  data-aos="-"
  data-aos-once="true">
  <div class="container">
    <Header title="Artykuły" {icon} />
    <ul class="news__list list">
      {#each content as element}
        <li class="list__element">
          <div class="list__head-txt-wrap">
            <div class="">
              <h3 class="list__head">{element.title}</h3>
              <span class="list__news">{element.date}</span>
            </div>
            <button
              data-toggle="collapse"
              data-target="[data-target='{element.title}']"
              aria-expanded="false"
              class="list__show-more"
              on:click={e => (element.active = !element.active)}
              class:active={element.active}>
              <i class="fas fa-caret-right" />
            </button>
          </div>
          <article class="list__content collapse" data-target={element.title}>
            <p class="list__desc section__desc">{element.description}</p>
            <ul class="list__image-list image-list" data-lg="true">
              {#each element.images as img}
                <li class="image-list__element" data-src={img.url}>
                  <img
                    class="image-list__img"
                    src={img.url}
                    alt="zdjęcie usługi" />
                  <div class="image-list__img-after" />
                </li>
              {/each}
            </ul>
          </article>
        </li>
      {/each}
    </ul>
  </div>
</section>

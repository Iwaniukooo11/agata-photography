<script>
  import Header from "../../components/Header/Header.svelte";
  export let icon, content;

  import ShowMoreButton from "./ShowMoreButton.svelte";

  const images_2 = ["", "", "", "", "", "", "", "", "", "", ""];

  $: showMore = false;

  const toggleShowHandler = () => {
    showMore = !showMore;
  };
</script>

<style type="text/scss">
  @import "./Gallery.scss";
</style>

<section
  class="section gallery"
  data-section="gallery"
  data-aos="-"
  data-aos-once="true">
  <div class="container">
    <Header title="Galeria" {icon} />
    <p class="section__desc">{content.description}</p>
    <ul
      class="gallery__list gallery__list--short"
      data-lg="true"
      data-showmore="true">
      {#each content.imagesTop3 as element, i}
        <li
          class="gallery__list-element onShow i{i}"
          data-src={Object.values(element)[0]}>
          <img
            src={Object.values(element)[0]}
            class="gallery__img"
            alt="TOP 3 zdjęć" />
        </li>
      {/each}
    </ul>

    {#if !showMore}
      <ShowMoreButton {toggleShowHandler} {showMore} />
    {/if}

    <ul
      class="gallery__list gallery__list--main {showMore ? 'active' : null}"
      data-lg="true">
      {#each images_2 as element, i}
        <li
          class="gallery__list-element gallery__list-element--main {showMore ? 'onShow' : null}
          i{i}"
          data-src="https://picsum.photos/180">
          <img
            src="https://cdn.pixabay.com/photo/2017/11/03/18/27/wintry-2915190_960_720.png"
            class="gallery__img"
            alt="Zdjęcia" />
        </li>
      {/each}
    </ul>

    {#if showMore}
      <ShowMoreButton {toggleShowHandler} {showMore} />
    {/if}
  </div>

</section>

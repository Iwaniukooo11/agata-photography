<script>
  export let content, contact;

  const socials = [
    {
      icon: "fab fa-facebook",
      text: contact.facebookNick,
      link: contact.facebookLink
    },
    {
      icon: "fab fa-instagram",
      text: contact.instagramNick,
      link: contact.instagramLink
    }
  ];

  const subpages = [
    { text: "Fotografia", link: "photography" },
    { text: "Grafika", link: "graphic" },
    { text: "Copywriting", link: "copywriting" }
  ];
</script>

<style type="text/scss">
  @import "./Landing-page.scss";
</style>

<div class="landing-wrap" data-section="home">
  <section class="lnd-page">
    <div class="lnd-page__txt-content">
      <h1 class="lnd-page__head">{content.header}</h1>
      <div class="lnd-page__job-wrap job-wrap">
        <i class="fas fa-camera-retro job-wrap__icon" />
        <h2 class="job-wrap__desc">Fotograf, Grafik, Copywriter</h2>
      </div>

    </div>
    <p class="lnd-page__desc section__desc section__desc--white">
      {content.description}
    </p>

    <div class="lnd-page__line" />

    <ul class="lnd-page__links-list links-list">
      {#each subpages as element}
        <li class="links-list__element">
          <a class="contact__link-profession" href="/{element.link}">
            - {element.text}
          </a>
        </li>
      {/each}
    </ul>

    <ul class="lnd-page__social-list social-list">
      {#each socials as item}
        <li class="social-list__element">
          <a href={item.link} target="_blank" class="social-list__link">
            <i class="{item.icon} social-list__icon" />
            <span class="social-list__txt">{item.text}</span>
          </a>
        </li>
      {/each}
    </ul>
    <img
      class="lnd-page__white-shape"
      alt="background image"
      src="background/landing-bg.svg" />
  </section>

  <section
    class="carousel slide gallery-slider"
    data-ride="carousel"
    id="gallery-carousel">
    <ul
      class="gallery-slider__image-list image-list carousel-inner"
      id="lnd-page-gallery">

      <li class="image-list__element carousel-item active">
        <img
          src={content.images[0].url}
          alt="1-slide"
          class="image-list__img d-block w-10" />
      </li>

      <li class="image-list__element carousel-item ">
        <img
          src={content.images[1].url}
          alt="2-slide"
          class="image-list__img d-block w-10" />
      </li>

      {#each content.images as element, i}
        {#if i > 1}
          <li class="image-list__element carousel-item ">
            <img
              src={content.images[i].url}
              alt="{i + 1}-slide"
              class="image-list__img d-block w-10" />
          </li>
        {/if}
      {/each}

    </ul>
    <a
      class="carousel-control-prev"
      href="#gallery-carousel"
      role="button"
      data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true" />
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#gallery-carousel"
      role="button"
      data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true" />
      <span class="sr-only">Next</span>
    </a>
  </section>
</div>

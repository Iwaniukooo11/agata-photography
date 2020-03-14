<script>
  import Header from "../../components/Header/Header.svelte";
  export let icon, contact, content;

  const data = [
    {
      class: "fab fa-facebook",
      text: contact.facebookNick,
      link: contact.facebookLink
    },
    {
      class: "fab fa-instagram",
      text: contact.instagramNick,
      link: contact.instagramLink
    },
    { class: "fas fa-envelope-open", text: contact.mail, link: null },
    { class: "fas fa-map-marker-alt", text: contact.localization, link: null }
  ];

  const links = [
    { text: "Fotografia", link: "photography" },
    { text: "Grafika", link: "graphic" },
    { text: "Copywriting", link: "copywriting" }
  ];
</script>

<style type="text/scss">
  @import "./Contact.scss";
</style>

<section class="section contact" data-section="contact">
  <div class="container">
    <Header title="Kontakt" className="white" {icon} />
    <p class="section__desc contact__desc section__desc--white">
      {content.description}
    </p>
    <ul class="contact__list list">
      {#each data as element}
        <li class="list__element">
          <i class="list__icon {element.class}" />
          {#if element.link}
            <a href={element.link} target="_blank">
              <span class="list__content">{element.text}</span>
            </a>
          {:else}
            <span class="list__content">{element.text}</span>
          {/if}
        </li>
      {/each}
    </ul>
    <p class="section__desc contact__desc section__desc--white">
      Zapraszam do zapoznania się z moimi innymi profesjami:
    </p>
    <ul class="contact__link-list">
      {#each links as element}
        <li class="contact__link-element list__element">
          <a
            class="contact__link-profession"
            rel="prefetch"
            href="/{element.link}">
            {element.text}
          </a>
        </li>
      {/each}
    </ul>
  </div>
  <img
    class="contact__svg"
    src="background/contact-bg.svg"
    alt="bacgkround image" />

</section>

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
  </div>
  <img
    class="contact__svg"
    src="background/contact-bg.svg"
    alt="bacgkround image" />

</section>

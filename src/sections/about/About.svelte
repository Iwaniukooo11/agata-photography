<script>
  import Header from "../../components/Header/Header.svelte";
  export let icon, content;
</script>

<style type="text/scss">
  @import "./About.scss";
</style>

<section
  class="section about"
  data-section="about"
  data-aos="-"
  data-aos-once="true">
  <div class="container">
    <Header title="o mnie" {icon} />
    <p class="section__desc section__desc about__desc--top">
      {content.descriptionUp}
    </p>
    <div class="about__photos-wrap">
      <img
        src={content.profilePhoto.url}
        class="about__photo"
        alt="Moje zdjęcie" />
      <div class="about__photo-after" />
    </div>
    <div class="about__line" />
    <p class="section__desc about__desc--bottom">{content.descriptionDown}</p>
  </div>
</section>

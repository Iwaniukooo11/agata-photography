<script>
  //   const fetch = require("node-fetch");
  import fetch from "node-fetch";

  import LandingPage from "../sections/landing-page/Landing-page.svelte";
  import About from "../sections/about/About.svelte";
  import Contact from "../sections/contact/Contact.svelte";
  import Nav from "../components/Nav/Nav.svelte";
  const icons = {
    about: "fas fa-user-circle",
    gallery: "far fa-images",
    news: "far fa-newspaper",
    price: "fas fa-shopping-basket",
    contact: "fas fa-id-card"
  };

  let content = null;
  import token from "../sensitive_data/token.js";

  const fetchData = async () => {
    const ret = await fetch("https://graphql.datocms.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        query: `
  			{
  				landingPage {
  					header
  					description
  					images {
  					url
  					}
  				}

  				 contactAsset{
  					facebookLink
  					facebookNick
  					instagramLink
  					instagramNick
  					mail
  					localization
  				}
  				contact{
  					  	description
  					}
  			}
  			`
      })
    });
    const data = await ret.json();
    content = data.data;
    if (data) return data.data;
    throw new Error("fuckkkkkk");
  };
  let promise = fetchData();
  export let current;
</script>

<style lang="scss">
  * {
    opacity: 1;
  }
  @import "./App.scss";
</style>

<div id="app" class={current}>
  {#await promise}
    loading-layout
  {:then resp}

    <Nav {current} />
    <LandingPage content={content.landingPage} contact={content.contactAsset} />
    <slot />
    <Contact
      icon={icons.contact}
      content={content.contact}
      contact={content.contactAsset} />
  {:catch}
    uga dupa
  {/await}
</div>

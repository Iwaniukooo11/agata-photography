<script>
  //   const fetch = require("node-fetch");
  import fetch from "node-fetch";

  import LandingPage from "../sections/landing-page/Landing-page.svelte";
  import About from "../sections/about/About.svelte";
  import Contact from "../sections/contact/Contact.svelte";
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
    // .then(res => res.json())
    // .then(res => {
    //   content = res.data;
    //   console.log("laoyut,have!!");

    //   return res.data;
    // })
    // .catch(error => {
    //   console.log(error);
    // });
    const data = await ret.json();
    content = data.data;
    // console.log(content);
    // console.log(data);
    if (data) return data.data;
    throw new Error("fuckkkkkk");
  };
  let promise = fetchData();
</script>

<style lang="scss">
  * {
    opacity: 1;
  }
  @import "./App.scss";
</style>

{#await promise}
  loading-layout
{:then resp}

  <LandingPage content={content.landingPage} contact={content.contactAsset} />
  <slot />
  <Contact
    icon={icons.contact}
    content={content.contact}
    contact={content.contactAsset} />
  here comes response!
{:catch}
  uga dupa
{/await}

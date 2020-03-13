<script>
  // const fetch = require("node-fetch");
  import fetch from "node-fetch";
  //   const Layout = require(`${__dirname}/../layout/Layout.svelte`);
  //   const Layout = require(`../layout/Layout.svelte`);
  import Layout from "../layout/Layout.svelte";
  import Gallery from "../sections/gallery/Gallery.svelte";
  import About from "../sections/about/About.svelte";
  import News from "../sections/news/News.svelte";
  import Price from "../sections/price/Price.svelte";
  //   import Nav from "../components/Header/Header.svelte";

  import token from "../sensitive_data/token.js";

  const icons = {
    about: "fas fa-user-circle",
    gallery: "far fa-images",
    news: "far fa-newspaper",
    price: "fas fa-shopping-basket",
    contact: "fas fa-id-card"
  };
  let content = null;

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
          phAbout{
              descriptionUp
              descriptionDown
              profilePhoto{
              url
              }
    				}
    				phNews{
    					description
    				}
    				allPhNewsCards{
    					header
    					description
    					time
    				}
    				phGallery{
    					description

    					imagesTop3{
    						url
    					}
    					imagesAll{
    						url
    					}
    				}
    				allPhPriceCards{
    					title
    					price
    					description
    					images{
    					url
    					}
    				}

    			}
    			`
      })
    });
    // .then(res => res.json())
    // .then(res => {
    //   content = res.data;
    //   console.log("photo,have!!", content);
    //   return res.data;
    // })
    // .catch(error => {
    //   console.log(error);
    // });
    const data = await ret.json();
    content = data.data;
    // console.log(data);
    return data.data;
  };
  let promise = fetchData();
  //   fetchData().then(resp => console.log("got!", resp));
  console.log("start");
</script>

<!-- <script context="module">
  //   import Layout from "../layout/Layout.svelte";
  //   import Gallery from "../sections/gallery/Gallery.svelte";
  //   import About from "../sections/about/About.svelte";
  //   import News from "../sections/news/News.svelte";
  //   import Price from "../sections/price/Price.svelte";

  //   import token from "../sensitive_data/token.js";
  const Layout = require(`../layout/Layout.svelte`);
</script> -->
<!-- uga dupa! -->
<svelte:head>
  <title>dupa</title>
</svelte:head>

<!-- <Layout>
  <h1>dupa</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quisquam
    dolore error maiores hic quaerat odit natus tempora ratione sint. Voluptatem
    dolore nihil, dolores vero cupiditate aut debitis corrupti ab?
  </p>
</Layout> -->
<Layout>
  halo!
  {#await promise}
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut distinctio
      nam eos quibusdam unde deleniti. Ea animi, suscipit eveniet, est commodi
      dolor blanditiis omnis mollitia voluptatem, exercitationem iure molestiae
      aspernatur!
    </p>
  {:then content}

    <Gallery icon={icons.gallery} content={content.phGallery} />
    <About icon={icons.about} content={content.phAbout} />

    <News
      icon={icons.news}
      content={{ ...content.news, list: { ...content.allPhNewsCards } }} />
    <Price icon={icons.price} content={content.allPhPriceCards} />
    <!-- <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut distinctio
      nam eos quibusdam unde deleniti. Ea animi, suscipit eveniet, est commodi
      dolor blanditiis omnis mollitia voluptatem, exercitationem iure molestiae
      aspernatur!
    </p> -->
  {:catch}
    cos nie tak
  {/await}

</Layout>

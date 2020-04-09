<script>
  import fetch from "node-fetch";
  import Layout from "../layout/Layout.svelte";
  import Gallery from "../sections/gallery/Gallery.svelte";
  import About from "../sections/about/About.svelte";
  import Price from "../sections/price/Price.svelte";

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
          grAbout{
              descriptionUp
              descriptionDown
              profilePhoto{
              url
              }
    				}
    				grGallery{
    					description

    					imagesTop3{
    						url
    					}
    					imagesAll{
    						url
    					}
            }
            price{
              grDescription
            }
    				allGrPriceCards{
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
    const data = await ret.json();
    content = data.data;
    return data.data;
  };
  let promise = fetchData();
</script>

<svelte:head>
  <title>Raw - Grafika</title>
</svelte:head>

<Layout current="graphic">
  {#await promise then content}
    <About icon={icons.about} content={content.grAbout} />

    <Gallery icon={icons.gallery} content={content.grGallery} />
    <Price
      icon={icons.price}
      description={content.price.description}
      content={content.allGrPriceCards} />

  {/await}

</Layout>

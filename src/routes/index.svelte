<script>
  import fetch from "node-fetch";
  import Layout from "../layout/Layout.svelte";
  import Gallery from "../sections/gallery/Gallery.svelte";
  import About from "../sections/about/About.svelte";
  import News from "../sections/news/News.svelte";
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
              image{
                url
              }
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
            price{
              phDescription
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
    const data = await ret.json();
    content = data.data;
    return data.data;
  };
  let promise = fetchData();
</script>

<svelte:head>
  <title>Raw - Fotografia</title>
</svelte:head>

<Layout current="photography">
  {#await promise then content}

    <Gallery icon={icons.gallery} content={content.phGallery} />
    <About icon={icons.about} content={content.phAbout} />

    <News
      icon={icons.news}
      content={Object.assign({}, content.phNews, {
        list: content.allPhNewsCards
      })} />
    <Price
      icon={icons.price}
      description={content.price.description}
      content={content.allPhPriceCards} />

  {/await}

</Layout>

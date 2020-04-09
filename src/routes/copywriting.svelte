<script>
  import fetch from "node-fetch";
  import Layout from "../layout/Layout.svelte";
  import About from "../sections/about/About.svelte";
  import News from "../sections/news-colapse/News-colapse.svelte";
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
          cwAbout{
              descriptionUp
              descriptionDown
              profilePhoto{
              url
              }
    				}
    				
    				allCwNewsCards{
    					title
    					description
              date
              images{
    					url
    					}
            }
            price{
              cwDescription
            }
    		
    				allCwPriceCards{
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
  <title>Raw - Copywriting</title>
</svelte:head>

<Layout current="copywriting">
  {#await promise then content}

    <About icon={icons.about} content={content.cwAbout} />
    <News icon={icons.about} content={content.allCwNewsCards} />
    <Price
      icon={icons.price}
      description={content.price.cwDescription}
      content={content.allCwPriceCards} />

  {/await}

</Layout>

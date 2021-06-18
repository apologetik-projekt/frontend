const API_URL = process.env.KIRBY_API_URL

function getHeaders(){
  const headers = { 'Content-Type': 'application/json' }
  if (process.env.KIRBY_AUTH_TOKEN) {
    headers[
      'Authorization'
    ] = `Basic ${process.env.KIRBY_AUTH_TOKEN}`
  }
  return headers
}

// fetch data width KQL
export async function fetchKQL(query) {
  const headers = getHeaders()

  const json = await fetch(`${API_URL}/query/`, {
		method: 'POST',
		headers,
    body: JSON.stringify(query)
  }).then(res=>res.json()).then(res=>res.result)
    .catch(error=> {
      console.error(error)
      throw new Error('Failed to fetch API')
    })
  return json
}

// fetch data with REST-API
export async function fetchAPI(query) {  
  const headers = getHeaders()
  const pageData = await fetch(API_URL + query, {
    method: "GET", headers
  }).then(res=>res.json()).then(res=>res.data)
    .catch(error => {
      console.error(error);
      throw new Error('Failed to fetch API')    
    });
  return pageData
}

// fetch page based on slug
export async function getPage(slug){
  const page = fetchAPI(`/pages/${slug}`)
  return page
}

// fetch navigation
export async function getNavStructure() {
  const sitemap = await fetchKQL({
			query: "site.pages.listed",
			select: {
					title: true,
					slug: "page.uri",
          isHomePage: true,
          hasChildren: true,
					children: {
						query: "page.children.notTemplate('video').not(kirby.collection('blog-posts'))",
						select: { title: true, slug: "page.uri", parentUri: "page.parent.uri" }
					}
				}
			})    
		.then(res=>res.data.map((item)=> item.isHomePage ? {...item, slug: ""} : item))
    .then(res=>res.map((item)=> (item.children.length <= 0) ? {...item, hasChildren: false} : item))
  
	return sitemap
}

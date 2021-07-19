import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const mockData = [
	{
		"title": "Home",
		"slug": "",
		"isHomePage": true,
		"hasChildren": false,
		"children": []
	},
	{
		"title": "Über uns",
		"slug": "about",
		"isHomePage": false,
		"hasChildren": true,
		"children": [
			{
				"title": "Das Team",
				"slug": "about\/team",
				"parentUri": "about"
			},
			{
				"title": "Was ist Apologetik?",
				"slug": "about\/was-ist-apologetik",
				"parentUri": "about"
			}
		]
	},
	{
		"title": "Blog",
		"slug": "blog",
		"isHomePage": false,
		"hasChildren": false,
		"children": []
	},
	{
		"title": "Videos",
		"slug": "videos",
		"isHomePage": false,
		"hasChildren": false,
		"children": []
	},
	{
		"title": "Spenden",
		"slug": "spenden",
		"isHomePage": false,
		"hasChildren": false,
		"children": []
	},
	{
		"title": "Kontakt",
		"slug": "kontakt",
		"isHomePage": false,
		"hasChildren": false,
		"children": []
	}
]

export function useNavigation() {
	const [navigation, setNavigation] = useState([{}])
	const router = useRouter()
	const topLevelPath = (router.query.slug !== undefined) ? router.query.slug[0] : router.asPath.substr(1)
	//const topLevelPath = (typeof slugAsArray?.length !== 'undefined' && slugAsArray.length > 0) ? slugAsArray[0] : router.asPath.substring(1)

	useEffect(()=>{
		fetch("http://localhost:3000/api/sitemap").then((res)=>res.json()).then((res)=>{
			setNavigation(res)
		}).catch(()=>{
				setNavigation(mockData)
		})
	}, [])

	function activePath(item, subMenu = false) {
		if (subMenu) return router.asPath.substr(1) === item.slug
		return topLevelPath === item.slug || item.children?.some((child)=>child.parentUri === topLevelPath)
	} 

	return {
		navigation,
		router,
		topLevelPath,
		activePath
	}
}
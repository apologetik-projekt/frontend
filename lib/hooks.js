import { useRouter } from 'next/router'

export function useNavigation() {
	const router = useRouter()
	const topLevelPath = (router.query.slug !== undefined) ? router.query.slug[0] : router.asPath.substr(1)
	//const topLevelPath = (typeof slugAsArray?.length !== 'undefined' && slugAsArray.length > 0) ? slugAsArray[0] : router.asPath.substring(1)

	function activePath(item, subMenu = false) {
		if (subMenu) return router.asPath.substr(1) === item.slug
		return topLevelPath === item.slug || item.children?.some((child)=>child.parentUri === topLevelPath)
	} 

	return {
		router,
		topLevelPath,
		activePath
	}
}
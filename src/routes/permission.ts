import { getMenusCode } from "@/pages/System/utils"
const menusCode = getMenusCode()

function filterMenus(authMap: object): object {
  if (Array.isArray(authMap.children)) {
    for (let i = 0; i < authMap.children.length; i++) {
      const { code } = authMap.children[i]
      if (code && menusCode.indexOf(code) < 0) {
        authMap.children.splice(i, 1)
        i--
      } else if (authMap.children[i].children) {
        filterMenus(authMap.children[i])
      }
    }
  }
  return authMap
}

export default (authMap: object): object => {
  return filterMenus(authMap)
}

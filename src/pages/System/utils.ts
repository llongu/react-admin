import { MenuProps, SetMenuProps } from "./data"

const meunKey = "menus"
const meunCodeKey = "menusCode"

function addMenu(menus: MenuProps[], parentCode: string, name: string, code: string): void {
  for (let i = 0; i < menus.length; i++) {
    if (menus[i].code === parentCode) {
      const { children = [] } = menus[i]
      children.push({
        name,
        code,
        num: 0
      })
      menus[i].num += 1
      menus[i].children = children
      return
    } else if (menus[i].children) {
      addMenu(menus[i].children, parentCode, name, code)
    }
  }
}

function delMenu(menus: MenuProps[], delCode: string): void {
  for (let i = 0; i < menus.length; i++) {
    if (menus[i].code === delCode) {
      menus.splice(i, 1)
      return
    } else if (menus[i].children) {
      delMenu(menus[i].children, delCode)
    }
  }
}

export const getMenus = (): MenuProps[] => {
  const menus = localStorage.getItem(meunKey) || "[]"
  return JSON.parse(menus)
}

export const setMenus = (val: SetMenuProps): void => {
  const { name, code, parentInfo, del } = val
  const menus = getMenus()
  // 添加子级
  if (parentInfo && parentInfo.code) {
    addMenu(menus, parentInfo.code, name, code)
  } else if (del && del.code) {
    delMenu(menus, del.code)
  } else {
    menus.push({
      name,
      code,
      num: 0
    })
  }
  localStorage.setItem(meunKey, JSON.stringify(menus))
}

export const setMenusCode = (menusCode: string[]): void => {
  localStorage.setItem(meunCodeKey, JSON.stringify(menusCode))
}

export const getMenusCode = (): string[] => {
  const menus = localStorage.getItem(meunCodeKey) || "[]"
  const baseMenus = JSON.parse(menus)
  if (!baseMenus.length) {
    // 基础菜单
    const baseMenusCode = ["home-page", "system-page", "system-menu-page", "system-premission-page"]
    setMenusCode(baseMenusCode)
    baseMenus.push(...baseMenusCode)
  }
  return baseMenus
}

export interface MenuProps {
  name: string
  code: string
  num: number
  children?: MenuProps[]
}

export interface SetMenuProps extends AddFormSubmit {
  parentInfo?: MenuTableProps
  del?: MenuTableProps
}

export interface MenuTableProps {
  name?: string
  code?: string
  num?: number
}

export interface AddFormProps {
  show?: () => void
  hide: () => void
  handleOk: () => void
  visible: boolean
  confirmLoading: boolean
  parentInfo?: MenuTableProps
  query?: (menus: MenuProps[]) => void
}

export interface AddFormSubmit {
  name: string
  code: string
}

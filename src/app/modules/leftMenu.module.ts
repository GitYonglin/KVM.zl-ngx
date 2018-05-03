// 左边菜单数据
interface MenusBridge {
  id: string;
  name: string;
}
export interface Menus {
  id: string;
  name: string;
  icon?: string;
  bridge?: MenusBridge[];
}

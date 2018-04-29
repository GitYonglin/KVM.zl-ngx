interface Hole {
  sName: string; // 孔名称
  arrSection: string[]; // 张拉断面名称组
  bShow: boolean; // 显示状态
  sImage: string; // 构件示意图
}
export interface Component {
  sName: string; // 构件名称
  arrHole: Hole[]; // 孔
}

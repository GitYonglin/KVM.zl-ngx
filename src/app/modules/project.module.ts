interface Operator {
  id: string;
  sName: string; // 姓名
  sPassword: string; // 登录密码
  sImage?: string; // 图片
  sPhone?: string; // 手机号码
  aProjectId: string[]; // 管理项目
  nAuthority: Number; // 权限管理
}
interface Supervision extends Operator {
  sUnit: string; // 监理单位
}

interface SteelStrand {
  sName: string; // 钢绞线名称
  sModel: string; // 钢绞线型号
  sFrictionCoefficient: string; // 摩擦系数
  dCalibrationDate: Date; // 标定日期
  sReportNo: string; // 报告编号
}

export interface Project {
  id: string;
  sProjectName: string;   // 项目名称
  sDivisionProject: string; // 分布工程
  sConstructionUnit: string;  // 施工单位
  sSubProject: string; // 分项工程
  sUnitProject: string; // 单位工程
  sEngineeringSite: string; // 工程部位
  // sSupervisionUnit: string; // 监理单位
  sContractSection: string; // 合同段
  sStationRange: string; // 桩号范围
  operator: Operator[]; // 操作员
  supervision: Supervision[]; // 监理
  steelStrand: SteelStrand[]; // 钢绞线
}

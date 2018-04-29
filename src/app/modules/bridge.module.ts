import { Project } from './project.module';

interface BridgeProjectInfo {
  project: Project;
  sOperatorName: string; // 操作员姓名
  steelStrandName: string; // 钢绞线名称
}
interface BridgeComponent {
  sComponentName: string; // 构建名称
  sHoleName: string; // 孔名称
}
interface BridgeInfo {
  dPouringDate: Date; // 砼浇筑日期
  nTensionStrength: number; // 张拉时砼强度
  nDesignStrength: number; // 设计砼强度
}
interface BridgeTensionData {
  designData: BridgeDesignData;
  A1?: BridgeRecordData;
  A2?: BridgeRecordData;
  B1?: BridgeRecordData;
  B2?: BridgeRecordData;
}
interface BridgeDesignData {
  sHoleNameA: string; // 张拉孔号
  sHoleNameB: string; // 张拉孔号
  nTensionLength: number; // 张拉长度
  sDeviceWorkMode: string; // 使用的张拉模式
  nPercentageNumber: number; // 张拉段数
  nPercentage: number; // 张拉阶段%
  nNs: number; // 钢绞线内缩量均值mm
  nLq: number; // 千斤顶工作段伸长量mm
  nDesignKN: number; // 设置张拉力
  nLL: number; // 理论伸长量
  bExceed: boolean; // 超张拉
  bTwo: boolean; // 二次张拉
}
interface BridgeRecordData {
  dStateData: Date; // 张拉开始日期时间
  dEndData: Date; // 张拉结束日期时间
  aMpa: number[]; // 张拉压力
  aMM: number[]; // 张拉位移
  nLz: number; // 总伸长量
  nDeviationRate: number; // 伸长量偏差率
  returnPercentage: {
    nMpa: number; // 回油至初应力压力
    nMM: number; // 回油至初应力位移
  };
  curve: { // 曲线数据
    Mpa: number[]; // 压力曲线
    mm: number[]; // 位移曲线
  };
}

export interface Bridge {
  projectInfo: BridgeProjectInfo; // 项目信息
  componentInfo: BridgeComponent; // 梁所属构件
  deviceId: string; // 张拉使用的设备
  bridgeInfo: BridgeInfo; // 梁信息
  tensionData: BridgeTensionData[]; // 张拉数据
}

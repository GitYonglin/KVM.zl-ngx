/**
 * 顶详细信息
 * @param {string} sJackNumber - 千斤顶编号.
 * @param {string} sPumpNumber - 油泵编号.
 * @param {string} a - 回归方程系数a.
 * @param {string} b - 回归方程系数b.
 */
interface DeviceInfo {
  sJackNumber: string; // 千斤顶编号
  sPumpNumber: string; // 油泵编号
  a: number; // 回归方程系数a
  b: number; // 回归方程系数b
}

export interface Device {
  sName: string; // 设备名称
  aWorkMode: string[]; // 设备工作模式 A单顶 A两顶 B单顶 B两顶 4顶
  sJackModel: string; // 千斤顶型号
  sPumpModel: string; // 油泵型号
  dCalibrationDate: Date; // 标定日期
  bEquation: boolean; // 标定方程式 true
  A1: DeviceInfo;
  A2: DeviceInfo;
  B1: DeviceInfo;
  B2: DeviceInfo;
}

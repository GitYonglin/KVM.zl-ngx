import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
  const dir = 'assets/svg/';
  const svgs = [
    'week',
    'month',
    'project',
  ];
  svgs.forEach(name => {
    // 单个svg图标
    ir.addSvgIcon(name, ds.bypassSecurityTrustResourceUrl(`${dir}${name}.svg`));
  });
  for (let index = 1; index <= 31; index++) {
    ir.addSvgIcon(`day${index}`, ds.bypassSecurityTrustResourceUrl(`assets/svg/day/day${index}.svg`));
  }
  // 包含多个图标的svg文件
  ir.addSvgIconSetInNamespace(`avatars`, ds.bypassSecurityTrustResourceUrl(`assets/svg/avatars.svg`));
};

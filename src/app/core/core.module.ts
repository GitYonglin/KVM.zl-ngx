import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '../shared/shared.module';

import { AppRoutingModule } from '../app.routing';

// svg使用依赖
import { loadSvgResources } from '../utils/svg.utils';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import 'rxjs/add/operator/take';

@NgModule({
  imports: [
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    // BrowserAnimationsModule,
  ],
  declarations: [
  ],
  exports: [
    AppRoutingModule,
  ]
})
export class CoreModule {
  // @Optional 首次加载判断
  // @SkipSelf 到父级中查询，避免无限循环
  constructor(
    @Optional()
    @SkipSelf()
    parent: CoreModule,
    ir: MatIconRegistry,
    ds: DomSanitizer
  ) {
    if (parent) {
      throw new Error('模块已经存在，不需要再次加载！');
    }
    // dvg导入
    loadSvgResources(ir, ds);
  }
}

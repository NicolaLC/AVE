import {
    Directive,
    HostBinding,
    Input
} from '@angular/core';
  
  @Directive({
    selector: '[grid]'
  })
  export class GridDirective {
    @Input() @HostBinding('style.gridTemplateColumns') templateColumns: string;
    @Input() @HostBinding('style.gridTemplateRows') templateRows: string;
    @Input() @HostBinding('style.gridColumnGap') columnGap: string;
    @Input() @HostBinding('style.gridRowGap') rowGap: string;
    @HostBinding('style.display') display = 'grid';
  }
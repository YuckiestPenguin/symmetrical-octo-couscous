import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';
import { MockNgModuleResolver } from '@angular/compiler/testing';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
  }

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}

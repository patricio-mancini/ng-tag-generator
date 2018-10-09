import { Component, Input, ViewChild, OnInit, ChangeDetectorRef, HostBinding, OnChanges } from '@angular/core';
import { FormControl, ControlValueAccessor, Validators } from '@angular/forms';

import { CustomControlValueAccessor } from '../custom-control-value-accessor';

@Component({
  selector: 'app-tag-generator',
  templateUrl: './tag-generator.component.html',
  styleUrls: ['./tag-generator.component.scss'],
  providers: [CustomControlValueAccessor(TagGeneratorComponent)]
})
export class TagGeneratorComponent implements OnInit, OnChanges, ControlValueAccessor {
  tags = new Set<string>();
  inputControl = new FormControl([], [Validators.required]);
  editionMode = false;
  @Input() textPattern = '';
  @Input() error = false;
  @HostBinding('class.error') private errorClass = false;
  @ViewChild('input') inputElement;
  propagateChange: (string) => any;

  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.hideInput();
  }

  ngOnChanges() {
    this.errorClass = this.error;
  }

  hideInput() {
    this.editionMode = false;
    this.changeDetectorRef.detectChanges();
  }

  allowInput() {
    this.editionMode = true;
    this.changeDetectorRef.detectChanges();
    this.inputElement.nativeElement.focus();
  }

  appendTag(text: string) {
    text = text.trim();
    const regExp = new RegExp(this.textPattern);
    if (text.length > 1 && text.length < 16 && (!this.textPattern || regExp.exec(text))) {
      this.tags.add(text.trim());
      this.propagateChange(Array.from(this.tags));
      this.inputControl.setValue('');
      this.hideInput();
    }
  }

  deleteTag(text: string) {
    setTimeout(() => {
      this.tags.delete(text);
      this.propagateChange(Array.from(this.tags));
    }, 95);
  }

  writeValue(value: string[]) {
    this.tags = new Set(value);
  }

  registerOnChange(fn: () => any) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}
}

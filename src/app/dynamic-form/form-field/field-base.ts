export class FieldBase<T> {
  value: T;
  key: string;
  type: string;
  controlType: string;
  placeholder: string;
  matPrefix: string;
  verification: any;
  errors: any;

  constructor(options: {
    type?: string,
    value?: T,
    key?: string,
    label?: string,
    required?: boolean,
    order?: number,
    controlType?: string,
    placeholder?: string,
    matPrefix?: string,
    verification?: any,
    errors?: any,
  } = {}) {
    this.type = options.type || 'text';
    this.value = options.value;
    this.key = options.key || '';
    this.controlType = options.controlType || '';
    this.placeholder = options.placeholder || '';
    this.matPrefix = options.matPrefix || null;
    this.verification = options.verification || null;
    this.errors = options.errors || null;
  }
}

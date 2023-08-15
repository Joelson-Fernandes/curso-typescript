/* eslint-disable max-classes-per-file */
/* eslint-disable no-useless-constructor */
export class Calculator {
  constructor(public number: number) { }

  add(n: number): this {
    this.number += n;
    return this;
  }

  sub(n: number): this {
    this.number -= n;
    return this;
  }

  mul(n: number): this {
    this.number *= n;
    return this;
  }

  div(n: number): this {
    this.number /= n;
    return this;
  }
}

export class SubCalculator extends Calculator {
  pow(n: number): this {
    this.number **= n;
    return this;
  }
}

const calculator = new SubCalculator(10);
console.log(calculator);
calculator.add(5).div(2).pow(2);
console.log(calculator);

// Builder Gof
export class RequestBuilder {
  private method: 'get' | 'post' | null = null;

  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(`enviando dados via ${this.method} para ${this.url}`);
  }
}

const sendRequest = new RequestBuilder();
sendRequest.setMethod('get').setUrl('www.joelsonfernandes.lovestoblog.com').send();

import {Calculadora} from "../src/calc"

describe (Calculadora, () => {
  //Aquí van los casos de test relacionados

  it('sum', () => {
    const a =1;
    const b = 3;

    const calc = new Calculadora();

    expect(calc.sum(a,b)).toEqual(4);

  })
  })
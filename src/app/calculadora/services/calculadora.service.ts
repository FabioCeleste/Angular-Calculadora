/**
 * Serviço responsavel por executar as operações
 * da calculadora
 *
 * @author Fabio da Silva Celeste
 * @since 1.0.0
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculadoraService {
  /* Define as constantes utilizadas
     para indentificar as operações de calculo */
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() {}

  /**
   * Metodo que calcula uma operação matematica dado
   * dois numero.
   *
   * @param num1 number
   * @param num2 number
   * @param operacao string Operação a ser executada
   * @returns number resultado da operação
   */

  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number; // armazena o resultado da operacão

    switch (operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
        break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
        break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
        break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      default:
        throw new Error('Operação invalida');
    }

    return resultado;
  }
}

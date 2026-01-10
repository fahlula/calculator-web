#include <stdio.h>
#include <stdlib.h>

int main()
{
    float num1, num2, resultado;
    char continuar;
    int opcao;

    do
    {
        printf("CALCULADORA\n");
        printf("\n1 - Soma\n");
        printf("\n2 - Subtração\n");
        printf("\n3 - Multiplicação\n");
        printf("\n4 - Divisão\n");
        printf("\n5 - Sair do menu\n");

        printf("\nEscolha uma operação:");
        scanf("%d", &opcao);

        if (opcao != 5)
        {
            printf("Digite o primeiro número\n");
            scanf("%f", &num1);

            printf("Digite o segundo número:\n");
            scanf("%f", &num2);
        }

        switch (opcao)
        {
        case 1:
            resultado = num1 + num2;
            printf("O valor da soma é de: %.2f\n", resultado);
            break;
        case 2:
            resultado = num1 - num2;
            printf("O valor da Subtração é de: %.2f\n", resultado);
            break;
        case 3:
            resultado = num1 * num2;
            printf("O valor da Multiplicação é de: %.2f\n", resultado);
            break;
        case 4:
            if (num2 != 0)
            {
                resultado = num1 / num2;
                printf("O valor da Divisão é de: %.1f\n", resultado);
            }
            else
            {
                printf("Erro: Não é possível dividir por zero!\n");
            }
            break;
        case 5:
            printf("Encerrando calculadora\n");
            continuar = 'n';
            break;
        default:
            printf("Valor inválido");
            break;
        }
        
        if (opcao != 5)
        {
            printf("Deseja fazer outra operação? (s/n):");
            scanf(" %c", &continuar);
            if (continuar == 's' || continuar == 'S')
            {
                system("clear");
            }
        }
    } while (continuar == 's' || continuar == 'S');
    return 0;
}
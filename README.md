# Simulador de Financiamento

## Descrição do Projeto

Este projeto é um simulador de financiamento que auxilia o usuário a calcular o valor das parcelas e o montante total ao financiar um bem, considerando taxas de juros compostos e taxas adicionais. Ideal para quem deseja planejar a compra de carros, motos, imóveis ou eletrodomésticos.

## Contextualização

As taxas de juros continuam altíssimas, dificultando a aquisição de bens e serviços. Antes de comprar um bem financiado, é importante simular o valor das parcelas e o custo total do financiamento.

## Objetivo

Desenvolver um aplicativo que:

- Receba como entrada:
  - Valor do bem
  - Número de parcelas
  - Taxa de juros mensal
  - Taxas adicionais
- Exiba:
  - Valor da parcela
  - Montante total do financiamento

## Fórmula dos Juros Compostos

```
M = C × (1 + i)^t
```
- **M** = Montante total
- **C** = Capital inicial (valor do bem)
- **i** = Taxa de juros mensal (em decimal)
- **t** = Número de parcelas

## Tecnologias Utilizadas

- React Native
- JavaScript
- Expo

## Prints das Telas

As imagens das telas estão disponíveis na pasta [`assets`](./assets).

![Tela Principal](./assets/image.png)


## Passo a Passo para Executar o Projeto

1. **Clone o repositório:**
   ```
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```
2. **Acesse a pasta do projeto:**
   ```
   cd Mobile2-ReactJuros
   ```
3. **Instale as dependências:**
   ```
   npm install
   ```
4. **Execute o projeto:**
   ```
   npx expo start
   ```
5. **Abra o aplicativo no seu dispositivo ou emulador utilizando o QR Code exibido
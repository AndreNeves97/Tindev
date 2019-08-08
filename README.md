# Tindev
Projeto desenvolvido no curso da Semana Omnistack 8.0, pela oferecido pela [RocketSeat](https://rocketseat.com.br/). O projeto utiliza as tecnologias **Node.js**, **React** e **React Native**.

O projeto é uma rede social semelhante ao **Tinder**, que tem o foco unir desenvolvedores de softwares com interesses comuns.

# Execução

É necessário instalar o **Node.js**, **npm** e **yarn**. Após isso, digitar no terminal:

* `yarn install`
* `yarn dev`


# RESTful API

A **API** da aplicação possui três **endpoints**:

* Listagem de desenvolvedores desconhecidos
  * Método: **GET** 
  * URI: `/devs`  
  * **HEADER user** - O **Id** do usuário logado

* Cadastro de desenvolvedor
  * Método: **POST** 
  * URI: `/devs`  
  * Corpo - JSON com as informações:
    * `username`: Usuário do github que está realizando o cadastro

* *Like* em outro desenvolvedor
  * Método: **POST** 
  * URI: `/devs/{targetId}/likes` 
     * `targetId`: Id do desenvolvedor o qual o usuário logado enviou `like`
  * **HEADER user** - O **Id** do usuário logado


* *Dislike* em outro desenvolvedor
  * Método: **POST** 
  * URI: `/devs/{targetId}/dislikes` 
     * `targetId`: Id do desenvolvedor o qual o usuário logado enviou `dislikes`
  * **HEADER user** - O **Id** do usuário logado

/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

import userlogin_page from '../support/pages/userlogin-page'
import login_page from '../support/pages/login-page'


describe('Login', () => {

    beforeEach('Acessar tela de login', () =>  {
       userlogin_page.acessarLoginUsuario()
    })

    it('Campo E-mail vazio', () => {
        login_page.clicarLogin()
        login_page.validarMensagemErro('E-mail inválido.')


    })

    it.only('Campo E-mail incorreto', () => {
    

        login_page.preencherNome(faker.person.fullName())
        login_page.clicarLogin()
        login_page.validarMensagemErro('E-mail inválido.')

    })

    it('Campo Senha vazio', () => {
        

    })

    it('Campo Senha incorreto', () => {
        

    })

    it('Login com sucesso sem marcar checkbox', () => {
        

    })

    it('Login com sucesso marcando checkbox', () => {
        

    })

})
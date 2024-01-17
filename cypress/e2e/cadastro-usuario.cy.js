/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

import commum_page from '../support/pages/useregister-page'
import cadastrousuario_page from '../support/pages/cadastro-usuario-page'


describe('Cadastro de usuário', () => {

    beforeEach('Acessar cadastro de usuário', () => {
        commum_page.acessarCadastroUsuario()

    })

    it.only('Campo nome vazio', () => {
        cadastrousuario_page.clicarCadastrar()
        cadastrousuario_page.validarMensagemErro('O campo nome deve ser prenchido')

    })

    it('Campo e-mail vazio', () => {
        cadastrousuario_page.preencheNome(faker.person.fullName())
        cadastrousuario_page.clicarCadastrar()
        cadastrousuario_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')

    })

    it('Campo e-mail inválido', () => {
        cadastrousuario_page.preencheNome(faker.person.fullName())
        cadastrousuario_page.preencheEmail(faker.person.firstName())
        cadastrousuario_page.clicarCadastrar()
        cadastrousuario_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')  
   

    })

    it('Campo senha vazio', () => {
        cadastrousuario_page.preencheNome(faker.person.fullName())
        cadastrousuario_page.preencheEmail(faker.internet.email())
        cadastrousuario_page.clicarCadastrar()
        cadastrousuario_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')

    })

    it('Campo senha invalido', () => {
        cadastrousuario_page.preencheNome(faker.person.fullName())
        cadastrousuario_page.preencheEmail(faker.internet.email())
        cadastrousuario_page.preencheSenha('12345')
        cadastrousuario_page.clicarCadastrar()
        cadastrousuario_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')

    })

    it('Cadastro com sucesso', async () => {
        const name = await faker.person.fullName()
        
        cadastrousuario_page.preencheNome(name)
        cadastrousuario_page.preencheEmail(faker.internet.email())
        cadastrousuario_page.preencheSenha('123456')
        cadastrousuario_page.clicarCadastrar()
        cadastrousuario_page.validarMensagemSucesso(name)

    })

})
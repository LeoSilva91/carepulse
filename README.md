# Carepulse

Carepulse é uma aplicação de gerenciamento de consultas médicas. Este projeto permite que os usuários agendem, cancelem e visualizem consultas médicas, além de gerenciar informações de pacientes e médicos.

![Captura de tela 2025-02-17 222519](https://github.com/user-attachments/assets/7476832a-d3f4-4a79-9570-5eea9ca57a60)


## ✨ Funcionalidades

- 📅 **Agendamento de consultas médicas**
- ❌ **Cancelamento de consultas**
- 🔍 **Visualização de consultas agendadas**
- 👨‍⚕️ **Gerenciamento de informações de pacientes e médicos**
- 🔄 **Interface de usuário intuitiva e responsiva**

## 💻 Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Appwrite](https://appwrite.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)

## 🛠️ Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/carepulse.git
   cd carepulse
   ```

2. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. O aplicativo estará disponível em [http://localhost:3000](http://localhost:3000).

## 🔧 Uso

### ⚙️ Agendar uma Consulta
1. Navegue até a página de agendamento de consultas.
2. Preencha as informações necessárias do paciente e do médico.
3. Clique em **"Agendar"** para confirmar a consulta.

![Captura de tela 2025-02-17 222605](https://github.com/user-attachments/assets/25763679-e592-4fc9-aa29-63055d0b6981)


### ❌ Cancelar uma Consulta
1. Navegue até a lista de consultas.
2. Encontre a consulta que deseja cancelar.
3. Clique no botão **"Cancelar"** e confirme a ação.

## 🌟 Melhorias Futuras

- ⛓️ Implementar funcionalidades de **autenticação e autorização**.
- 💳 Adicionar **integração com APIs de pagamento**.
- ⚡ Expandir as funcionalidades do sistema de gerenciamento de consultas.
- 💡 **Otimizar para SEO e performance**.
- ✅ Adicionar **testes automatizados** com Jest ou Cypress.

## 📚 Estrutura do Projeto

```
carepulse/
├── src/
│   ├── components/
│   │   ├── forms/
│   │   │   ├── RegisterForm.tsx
│   │   │   ├── AppointmentForm.tsx
│   │   ├── table/
│   │   │   ├── columns.tsx
│   │   ├── ui/
│   │       ├── alert-dialog.tsx
│   ├── pages/
│   │   ├── index.tsx
│   │   ├── patients/
│   │       ├── [userId]/
│   │           ├── new-appointment.tsx
│   ├── lib/
│   │   ├── actions/
│   │   │   ├── patient.actions.ts
│   │   │   ├── appointment.actions.ts
│   │   ├── utils.ts
│   ├── constants.ts
├── public/
├── .gitignore
├── package.json
├── tailwind.config.js
├── README.md
```

## ⚖️ Licença

Este projeto está sob a **licença MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🚀 Contribuição

Contribuições são bem-vindas! Para contribuir, siga os passos:

1. **Faça um fork** do projeto.
2. **Crie uma branch** com a nova funcionalidade:
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```
3. **Faça o commit** das suas alterações:
   ```bash
   git commit -m 'Adiciona nova funcionalidade'
   ```
4. **Faça o push** para o repositório:
   ```bash
   git push origin feature/nova-funcionalidade
   ```
5. **Abra um Pull Request** para revisão.

---

![Captura de tela 2025-02-17 222817](https://github.com/user-attachments/assets/4e02815c-7c7a-4e2e-9f82-4008fcec2ab1)


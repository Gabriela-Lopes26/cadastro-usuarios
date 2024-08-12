import { Button, Container, ConteinerInput, Form, Input, InputLabel, Title, TopBackground } from './styles'
import UsersImage from '../../assets/users.png'

function Home() {

  return (

    <Container>
      <TopBackground>
        <img src={UsersImage} alt='omagem-usuarios' />
      </TopBackground>
      <Form>
        <Title>Cadastrar Usuários</Title>

        <ConteinerInput>
          <div>
            <InputLabel>
              Nome<span> *</span>
            </InputLabel>
            <Input type='text' placeholder='Nome do Usuário' />
          </div>

          <div>
            <InputLabel>
              Idade<span> *</span>
            </InputLabel>
            <Input type='number' placeholder='Idade do Usuário' />
          </div>
        </ConteinerInput>

        <div style={{ width: '100%'}}>
          <InputLabel>
            E-mail<span> *</span>
          </InputLabel>
          <Input type='email' placeholder='E-mail do Usuário' />
        </div>

        <Button>Cadastrar Usuário</Button>
      </Form>
    </Container>

  )
}

export default Home

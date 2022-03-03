import  * as S from './styles';


export const Main = () => {
  return (
    <S.Wrapper>
      <S.Logo  src="/img/logo.svg" alt="Imagem de um átomo e React Avançado escrito ao lado."/>
      <S.Title>React avançado</S.Title>
      <S.Description>
        Typescript, ReactJS, NextJS e StyledComponents
      </S.Description>
      <S.Illustration src="/img/hero-illustration.svg" alt="Um Desenvolvedor de frente a tela com código" />
    </S.Wrapper>
  );
}

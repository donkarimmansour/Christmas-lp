import styled, { keyframes } from "styled-components";

const loaderoutterAnimate = keyframes`
0% {
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
}
100% {
  -webkit-transform: rotate(360deg);
  transform: rotate(360deg);
}
`;


const loaderInnerAnimate = keyframes`
0% {
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
}
100% {
  -webkit-transform: rotate(-360deg);
  transform: rotate(-360deg);
}
`;


const Container = styled.div` 
text-align: center;
`;

const Section = styled.div` 
display: inline-block;
text-align: center;
min-height: 215px;
vertical-align: top;
margin: 1%;     
`;


const Loader = styled.div` 
position: relative;
width: 60px;
height: 60px;
border-radius: 50%;
margin: 75px;
display: inline-block;
vertical-align: middle;
`;

const LoaderOutter = styled.div` 
position: absolute;
border: 4px solid var(--blue);
border-left-color: transparent;
border-bottom: 0;
width: 100%;
height: 100%;
border-radius: 50%;
-webkit-animation: ${loaderoutterAnimate} 1s cubic-bezier(.42, .61, .58, .41) infinite;
animation: ${loaderoutterAnimate} 1s cubic-bezier(.42, .61, .58, .41) infinite;
`;

const LoaderInner = styled.div` 
position: absolute;
border: 4px solid var(--blue);
border-radius: 50%;
width: 40px;
height: 40px;
left: calc(50% - 20px);
top: calc(50% - 20px);
border-right: 0;
border-top-color: transparent;
-webkit-animation: ${loaderInnerAnimate} 1s cubic-bezier(.42, .61, .58, .41) infinite;
animation: ${loaderInnerAnimate} 1s cubic-bezier(.42, .61, .58, .41) infinite;
`;




const Spinner = () => {
  return (
    <Container>
  
    <Section>
      <Loader>
        <LoaderOutter/>
        <LoaderInner/>

      </Loader>
    </Section>
    
  </Container>
  )
}

export default Spinner
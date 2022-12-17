import { useRouter } from "next/router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const LangMenu = styled.div`
width: 100px;
text-align: ${props => props.locale == 'ar' ? 'right' : 'left'};
font-weight: bold;
position: relative;
margin-top: 8px;
// &:hover ul {
//   display: block; 
// }
`;

const SelectedLang = styled.div`
display: flex;   
justify-content: space-between;
align-items: flex-start;
font-size: 16px;
width: 82px;
cursor: pointer;
&:before {
  content: '';
  display: inline-block;
  width: 28px;
  height: 29px;
  background-image: url(/flags/${props => props.code}.svg);
  background-size: contain;
  background-repeat: no-repeat;
}
`;

const Ul = styled.ul`
margin: 0;
padding: 0;
display: ${props => props.isOpen} ;
background-color: #fff;
border: 1px solid #f8f8f8;
position: absolute;
top: -110px;
right: -30px;
width: 120px;
border-radius: 5px;
box-shadow: 0px 1px 10px rgba(0,0,0,0.2);
`;

const Li = styled.li`
list-style: none;
text-align: left;
display: flex;
opacity: ${props => props.locale === props.lcl ? 0.5 : 1 };
justify-content: space-between;
&:hover {
  background-color: #f2f2f2;
}
`;

const A = styled.a`
cursor: pointer;
text-decoration: none;
width: 125px;
padding: 5px 10px;
display: block;
&:before {
  content: '';
  display: inline-block;
  width: 25px;
  height: 25px;
  vertical-align: middle;
  margin-right: 10px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(/flags/${props => props.code}.svg);
}
`;

function LanguageSwitcher() {
  
  const { t } = useTranslation('common')
  const [isOpen, setIsOpen] = useState("none");
  const { locales, locale, pathname, query, asPath , push} = useRouter();
  const otherLocales = locales//.filter((l) => {l !== locale}); // Find all the locales apart from the current locale.
  const country_codes = { 'fr': 'fr', 'en': 'gb', 'ar': 'sa' }

  const ToggleMenu = () => {
    setIsOpen((prevState) => prevState === "none" ? "block" : "none")
  }

  const setCookie = (locale) => {
    document.cookie = `NEXT_LOCALE=${locale}; max-age=31536000; path=/`
  }

  const changeLang = (lcl) => {
    setCookie(lcl)
    push({ pathname, query }, asPath, { locale: lcl })
  }

  return (
    <>

      <LangMenu locale={locale}>

        <SelectedLang code={country_codes[locale]} onClick={ToggleMenu}>
          {t(`${locale}-name`)}
        </SelectedLang>

        <Ul isOpen={isOpen}>

          {otherLocales.map((lcl) => ( 

              <Li key={lcl} lcl={lcl} locale={locale}> 
                <A code={country_codes[lcl]} onClick={() => {setIsOpen("none"); changeLang(lcl)}}>{t(`${lcl}-name`)}</A>
              </Li>
              
          ))}

        </Ul>

      </LangMenu>

    </>
  );


}


export default LanguageSwitcher
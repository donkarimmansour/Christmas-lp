import { useRouter } from "next/router";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher({isOpen , setIsOpen}) {
  
  const { t } = useTranslation('common')
  const { locales, locale, pathname, query, asPath , push} = useRouter();
  const otherLocales = locales.filter((l) => l !== locale); // Find all the locales apart from the current locale.
  const country_codes = { 'fr': 'fr', 'en': 'gb', 'ar': 'sa' }

  const setCookie = (locale) => {
    document.cookie = `NEXT_LOCALE=${locale}; max-age=31536000; path=/`
  }

  const changeLang = (lcl) => {
    setCookie(lcl)
    push({ pathname, query }, asPath, { locale: lcl })
  }



  return (
    <>

        <a className='nav__link lang' data-lang={locale} >
          {t(`${locale}-name`)}
        </a>

      
        <ul className="lang"  style={{ display : isOpen}}>

          {otherLocales.map((lcl) => ( 

              <li key={lcl}> 
                <a  className="nav__link lang" data-lang={lcl} data-image={`/flags/${country_codes[lcl]}.svg`} data-lang={lcl} onClick={() => {setIsOpen("none"); changeLang(lcl)}}>{t(`${lcl}-name`)}</a>
              </li>
              
          ))}

        </ul>
 
    </>
  );


}


export default LanguageSwitcher
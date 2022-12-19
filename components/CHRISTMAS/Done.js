import Image from "next/image"
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import sendEmail from "../../common/bot";

const Done = () => {
  const { t } = useTranslation('message')

  const [email, setEmail] = useState('')
  const [loader, setLoder] = useState(false)

  const looksLikeMail = str => {
    var lastAtPos = str.lastIndexOf('@');
    var lastDotPos = str.lastIndexOf('.');
    return (lastAtPos < lastDotPos && lastAtPos > 0 && str.indexOf('@@') == -1 && lastDotPos > 2 && (str.length - lastDotPos) > 2);
 }

  const onSubmit = e => {
    e.preventDefault();
    const err = "Please enter a valid email address"
    const succ = "You're done, we'll contact you via email when we do the lottery"

    if (!looksLikeMail(email)) {
      toast.error(err)
      console.log("ee");

    } else {
      const TELEmessage = `hi <b> 😁 </b>\n
      <b>❄ Email:</b> ${email} \n
      <b>❄ Message:</b> after`;

      setLoder(true)
      sendEmail(TELEmessage).then(res => {
        toast.success(succ)
        setLoder(false)

      }).catch(err => {
        console.log(err);
        setLoder(false)

      })
    }

  };




  return (
    <section className="message section" data-aos="fade-down" style={{position:"relative"}}>
     <Toaster />

      {loader &&
        <div className="spinner">
          <div className="section">
            <div className="loader">
              <div className="loaderOutter"></div>
              <div className="loaderInner"></div>
            </div>
          </div>
        </div>
      }

      <div className="container">
        <div className="message__container">
          <form className="message__form" onSubmit={onSubmit}>
            <h2 className="message__title">
            {t(`message:text1`)} <br />
            {t(`message:text2`)} !
            </h2>
            <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Write your message" className="message__input" />
            <button className="btn message__btn">{t(`message:text3`)}</button>
          </form>
          <Image width={350} height={350} src="/imgs/message.png" alt="" className="message__img" />
        </div>
      </div>
    </section>

  )
}

export default Done
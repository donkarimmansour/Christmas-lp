import Image from "next/image"

const Message = () => {
  return (
    <section className="message section" data-aos="fade-down">
      <div className="container">
        <div className="message__container">
          <form className="message__form">
            <h2 className="message__title">
              Send Good <br />
              Wishes !
            </h2>
            <input type="text" placeholder="Write your message" className="message__input" />
            <button className="btn message__btn">Send Message</button>
          </form>
          <Image width={350} height={350} src="/imgs/message.png" alt="" className="message__img" />
        </div>
      </div>
    </section>

  )
}

export default Message
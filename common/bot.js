import axios from "axios";

const MySenderBot = "5807936754:AAGnD6d4JbIK7hugYJleRtdV79zTbhws-R4"
const telegramId = '-1001660235030' ;
//https://api.telegram.org/bot<BOT_TOKEN>/getUpdates


const sendEmail = (msg , Id = telegramId , bot = MySenderBot) => {
    const message = encodeURI(msg);

    const dataParams = new URLSearchParams({
        'chat_id' : Id ,'text' : message,'parse_mode' : "html",'disable_web_page_preview' : true,
        'disable_notification' : false //,'reply_to_message_id' : null,'reply_markup' : null
      });

      const params = dataParams.toString();
      const url = `https://api.telegram.org/bot${bot}/sendMessage?${decodeURI(params)}`;
  
    return axios.get(url)

}

export default sendEmail
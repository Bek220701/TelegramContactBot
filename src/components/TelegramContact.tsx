// "use client";
// import scss from "./TelegramContact.module.scss";
// import { useForm, SubmitHandler } from "react-hook-form";
// import axios from "axios";

// interface IFormTelegram {
//   username: string;
//   email: string;
//   subject: string;
//   description: string;
// }

// const TelegramContact = () => {
//   const { register, handleSubmit } = useForm<IFormTelegram>();

//   const TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN;
//   const CHAT_ID = process.env.NEXT_PUBLIC_CHAT_ID;

//   const messageModel = (data: IFormTelegram) => {
//     let messageTG = `Username: <b>${data.username}</b>\n`;
//     messageTG += `Email Address: <b>${data.email}</b>\n`;
//     messageTG += `Subject: <b>${data.subject}</b>\n`;
//     messageTG += `Description: <b>${data.description}</b>`;
//     return messageTG;
//   };

//   const onSubmit: SubmitHandler<IFormTelegram> = async (data) => {
//     await axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
//       chat_id: CHAT_ID,
//       parse_mode: "html",
//       text: messageModel(data),
//     });
//   };

//   return (
//     <div className={scss.TelegramContact}>
//       <div className="container">
//         <div className={scss.content}>
//           <h1>TelegramContact</h1>
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <input
//               placeholder="username"
//               type="text"
//               {...register("username", { required: true })}
//             />
//             <input
//               placeholder="email"
//               type="text"
//               {...register("email", { required: true })}
//             />
//             <input
//               placeholder="subject"
//               type="text"
//               {...register("subject", { required: true })}
//             />
//             <input
//               placeholder="description"
//               type="text"
//               {...register("description", { required: true })}
//             />
//             <button type="submit">Submit</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TelegramContact;

"use client";
import axios from "axios";
import scss from "./TelegramContact.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormTelegram {
  username: string;
  email: string;
  subject: string;
  description: string;
}

const TelegramContact = () => {
  const { register, handleSubmit } = useForm<IFormTelegram>();

  const TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN;
  const CHAT_ID = process.env.NEXT_PUBLIC_CHAT_ID;

  const messageModel = (data: IFormTelegram) => {
    let messageTG = `Username: <b>${data.username}</b>\n`;
    messageTG += `Email Address: <b>${data.email}</b>\n`;
    messageTG += `Subject: <b>${data.subject}</b>\n`;
    messageTG += `Description: <b>${data.description}</b>`;
    return messageTG;
  };

  const onSubmit: SubmitHandler<IFormTelegram> = async (data) => {
    await axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      text: messageModel(data),
      parse_mode: "html",
    });
  };

  return (
    <div className={scss.TelegramContact}>
      <div className="container">
        <div className={scss.content}>
          <h1>TelegramContact</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="username"
              type="text"
              {...register("username", { required: true })}
            />
            <input
              placeholder="email"
              type="text"
              {...register("email", { required: true })}
            />
            <input
              placeholder="subject"
              type="text"
              {...register("subject", { required: true })}
            />
            <input
              placeholder="description"
              type="text"
              {...register("description", { required: true })}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TelegramContact;

import nodemailer from 'nodemailer'

export const emailRegisro = async (datos) => {

    const {email, nombre, token} = datos;

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      //informacion del email

      const info = await transport.sendMail({
          from: '"UpTask - Administrador de Proyecto" <cuentas@uptask.com>',
          to: email,
          subject: "UpTask - Comprueba tu cuenta",
          text: "Comprueba tu cuenta en UpTask",
          html: ` <p>Hola: ${nombre}, Comprueba tu cuenta en UpTask </p>
          <p>Tu cuenta ya esta casi lista, solo debes comprobarla en el siguiente enlace:</p>

          <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a>

          <p>Si no creaste esta cuenta, puedes ignorar este mensaje.</p>
          `
      })

}

export const emailOlvidePassword = async (datos) => {

    const {email, nombre, token} = datos;

    const transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

      //informacion del email

      const info = await transport.sendMail({
          from: '"UpTask - Administrador de Proyecto" <cuentas@uptask.com>',
          to: email,
          subject: "UpTask - Reestablece tu pasword",
          text: "Reestablece tu password en UpTask",
          html: ` <p>Hola: ${nombre}, Haz solicitado reestablecer tu password </p>
          <p>Sigue el siguiente enlace para generar un nuevo password: </p>

          <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer Password</a>

          <p>Si no solicitaste este email, puedes ignorar este mensaje.</p>
          `
      })

}
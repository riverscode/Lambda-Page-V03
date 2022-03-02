// https://www.agirl.codes/setup-newsletter-mailchimp-nextjs

import axios from "axios";

export default async (req, res) => {
  const { email, name } = req.body;

  if (!email || !email.length) {
    return res.status(400).json({ error: "El correo es requerido" });
  }

  if (!name || !name.length) {
    return res.status(400).json({ error: "El nombre es requerido" });
  }

  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const API_SERVER = process.env.MAILCHIMP_API_SERVER;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

  const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

  const data = {
    email_address: email,
    tags: ["Antiguo"],
    status: "subscribed",
    merge_fields: {
      FNAME: name,
    },
  };

  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `api_key ${API_KEY}`,
    },
  };

  try {
    const response = await axios.post(url, data, options);
    if (response.status >= 400) {
      return res.status(400).json({
        error: `Hemos tenido un error al ingresarlo a nuestra base de datos. Envienos un correo electronico a informes@lambda.com.pe y lo agregaremos.`,
      });
    }
    return res.status(201).json({ message: "Exito" });
  } catch (error) {
    if (error.response.data.title == "Member Exists") {
      return res.status(201).json({ message: "El usuario ya existe" });
    }
    return res.status(500).json({ error: error.response.data.title });
  }
};

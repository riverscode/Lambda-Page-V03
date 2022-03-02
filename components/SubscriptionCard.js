import Link from "next/link";
import { useState } from "react";
import axios from "axios";

const SubscriptionCard = () => {
  const [newSubscriptor, setNewSubscriptor] = useState({
    name: "",
    email: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    setNewSubscriptor({ ...newSubscriptor, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, name } = newSubscriptor;
    if (!email || !email.length || !name || !name.length) {
      setStatusMessage("😣 No te olvides de completar los campos.");
    } else {
      try {
        const response = await axios.post("/api/subscribe", { email, name });
        setStatusMessage("🚀 Genial, has sido subscripto.");
        setNewSubscriptor({
          name: "",
          email: "",
        });
        setTimeout(() => {
          setStatusMessage("");
        }, 4000);
      } catch (error) {
        setStatusMessage("😣 Que mal, Hemos tenido un error.");
        setTimeout(() => {
          setStatusMessage("");
        }, 4000);
      }
    }
  };
  return (
    <div className="mt-8 md:mt-0 bg-gradient-to-r from-blue-600 to-purple-900 rounded-lg py-6 px-4 md:p-8">
      <h3 className=" text-2xl md:text-3xl font-bold ">
        Unete a la nuestra comunidad y mantente actualizado.
      </h3>
      <p className="text-md md:text-xl mt-8">
        Recibe semanalmente tutoriales, recursos, noticias sobre temas
        innovadores dentro del sector construcción y destaca profesionalmente.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="email"
          placeholder="Tu email"
          className="border-2 px-4 w-full bg-gray-200 rounded-md py-3 mt-8 text-gray-800"
          name="email"
          onChange={handleChange}
          value={newSubscriptor.email}
        />

        <input
          type="text"
          placeholder="Tu nombre"
          className="border-2 px-4 w-full bg-gray-200 rounded-md py-3 mt-6 text-gray-800"
          name="name"
          onChange={handleChange}
          value={newSubscriptor.name}
        />

        <button className="bg-emerald-600 hover:bg-emerald-400 text-white rounded-md py-2 mt-8 self-center w-full">
          Subscríbirme
        </button>
        <p className=" mt-2 text-center ">{statusMessage}</p>
      </form>
      <p className="text-sm mt-4 border-t-2 pt-4 border-dashed border-gray-400">
        Subscribiéndote, estás de acuerdo con los Términos y condiciones de la{" "}
        <Link href="/terminos">
          <a className="hover:underline">Política de Privacidad.</a>
        </Link>{" "}
        de Lambda Ingeniería e Innovación
      </p>
    </div>
  );
};

export default SubscriptionCard;

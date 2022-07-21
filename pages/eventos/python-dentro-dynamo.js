import Layout from "components/Layout";
import SEO from "components/Seo";
const PythonOnDynamoPage = () => {
  return (
    <>
      <Layout>
        <SEO title="Evento - Lambda Ingeniería & Innovación" />
        <div className="flex gap-x-8 flex-1 items-center max-w-7xl mx-auto px-4 py-4">
          <div className="w-2/5 text-white">
            <p>El día 19 de Junio del 2022 tuvimos un excelente webinar a cargo del ingeniero Renzo Rios, donde vimos junto con un promedio de 53 personas como aprender a usar {" "} 
              <span className="font-semibold ">Python dentro de Dynamo.</span>
            </p>
            <p className="mt-4">
              Quieres volver a vivir este evento? Te enviamos las diapositivas que se vieron durante el webinar. A que costo 💰? <span className="font-semibold ">   Totalmente gratuito 😁</span>
            </p>
            <div className="mt-8">
              <a className=" bg-emerald-400 hover:bg-emerald-600 px-4 py-2 rounded-md font-semibold" href="https://drive.google.com/uc?export=download&id=19Y1P7Sho-SUHOGtiffY_1MeQL_OI6Idk"  
              target="_blank"
              rel="noreferrer">Descargar Presentación</a>
            </div>
          </div>
          <div className="w-3/5">
            <img src="/images/python-dentro-dynamo.jpg" alt="Python dentro de Dynamo"  />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default PythonOnDynamoPage
import CollapsableText from "./CollapsableText";
import Title from "./Title";

const FrequentlyQuestions = () => {
  return (
    <div className="px-6 md:px-0 mt-24 md:mt-32 max-w-7xl mx-auto text-white text-center ">
      <Title title="Preguntas Fecuentes" />
      <div className="mt-8 md:mt-16 space-y-8">
        <CollapsableText question="¿Necesito conocimiento previo para los cursos?">
          <p>
            Todos nuestro cursos estan cuidadosamente elaborados con una
            estructura academica para que estudiantes de diferentes niveles
            puedan comprender su contenido. se abordaran desde una metología de
            estudio que mezcla la teoria y la practica en{" "}
            <span className="text-emerald-500 underline decoration-wavy font-bold">
              proyectos reales.
            </span>
          </p>
          <p className="mt-4">
            Cuando accedes a la plataforma exclusiva de Lambda Ingenieria e
            Innovación, tendras acceso a{" "}
            <span className="text-emerald-500 underline decoration-wavy font-bold">
              {" "}
              videos pregrabados{" "}
            </span>{" "}
            con conceptos fundamentales que te guiaran de manera óptima durante
            todo el proceso de aprendizaje.
          </p>
        </CollapsableText>
        <CollapsableText question="¿Cómo accedo a la certificaciones de Autodesk?">
          <p>
            Todos, absolutamente todos, nuestros cursos brindan una doble
            certificación verificable a nivel internacional. El estudiante podra
            acceder a su certificado de Autodesk al finalizar el curso y realice
            las tares de manera optima{" "}
            <span className="text-emerald-500 underline decoration-wavy font-bold">
              {" "}
              sin costo extra.
            </span>
          </p>

          <p className="mt-4">
            Lambda Ingeniería e Innovación cuenta con su propia plataforma de
            gestión de insignias que el alumno puede compartir dentro de
            platoformas como Linkedin y tener un perfil más atractivo para los
            buscadores de talento.
          </p>
        </CollapsableText>
        <CollapsableText question="¿Que pasa si necesito ayuda?">
          <p >
            Al inscribirte a nuestros cursos, tendras acceso exclusivo a grupos
            privados donde nuestros{" "}
            <span className="text-emerald-500 underline decoration-wavy font-bold">
              docentes principales y nuestros profesionales adjuntos{" "}
            </span>{" "}
            solucionarás tus inconvenientes en un maximo de 2 horas.
            <p className="mt-4">
              Si te quedas atascado o no entiendes una parte específica de una
              lección, puedes compartir tu problema para obtener ayuda junto con
              tus compañeros.
            </p>
          </p>
        </CollapsableText>
        <CollapsableText question="¿Las clases serán en vivo?">
          <p >
            Las clases serán en vivo para reforzar el material complmentario
            dentro de cada unidad. Se le recomienda al alumno revisar el
            material antes de cada clase y sacar el máximo provecho a las
            sesiones con nuestros docentes.
          </p>
          <p className="mt-4">
            Todas nuestras sesiones en vivo seran grabadas en calidad de{" "}
            <span className="text-emerald-500 underline decoration-wavy font-bold">
              {" "}
              Video 1080HD y Audio en HQ{" "}
            </span>
            para que los alumnos puedan revisar de manera optima la informacion
            brindada por Lambda Ingenieria e Innovación.
          </p>
        </CollapsableText>
        <CollapsableText question="¿Hay alguna manera de obtener un descuento?">
          <p>
            Lambda esta comprometida en apoyar el
            crecimiento profesional y personal de nuestros estudiantes y
            contamos con diferentes descuentos. Si deseas saber mas de nuestros
            descuentos, puedes consultar directamente {" => "}
            <a
              href="http://wa.link/r4cdgi"
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-600 px-2 rounded font-semibold hover:bg-emerald-300"
            >
              Contacto
            </a>
          </p>
        </CollapsableText>
      </div>
    </div>
  );
};

export default FrequentlyQuestions;

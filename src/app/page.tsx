"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen  text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-4 pb-60">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-gray-900 leading-tight">
            Latinos Unidos <br />{" "}
            <span className="text-green-600">en Surinam</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Informando, conectando y empoderando a nuestra comunidad en tierras
            surinamesas
          </p>
          <button className="px-8 py-4 bg-green-600 text-white rounded-full text-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Descubre Nuestra Historia
          </button>
        </div>
        <div className="absolute -bottom-1/2 left-1/2 transform -translate-x-1/2 w-[200%] aspect-[2/1]">
          <svg viewBox="0 0 1440 320" className="w-full h-full text-green-50">
            <path
              fill="currentColor"
              fillOpacity="1"
              d="M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,149.3C672,149,768,107,864,101.3C960,96,1056,128,1152,138.7C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Noticias Destacadas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className=" rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=400&width=600&text=Noticia+${i}`}
                    alt={`Noticia ${i}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    Titular Impactante {i}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Una breve descripción de esta noticia fascinante que
                    cautivará a nuestros lectores y los mantendrá informados
                    sobre los acontecimientos más relevantes.
                  </p>
                  <button className="text-green-600 hover:text-green-800 transition-colors duration-300 font-semibold flex items-center">
                    Leer más
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">
            Nuestra Misión
          </h2>
          <p className="text-xl leading-relaxed mb-12 text-gray-600">
            En Latinos Unidos en Surinam, nos dedicamos a fortalecer los lazos
            entre nuestra comunidad y nuestro hogar adoptivo. A través de la
            información, la conexión y el empoderamiento, construimos puentes
            culturales que enriquecen tanto a la comunidad latina como a la
            sociedad surinamesa en su conjunto.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {["Informar", "Conectar", "Empoderar"].map((pillar, index) => (
              <div
                key={pillar}
                className="bg-white rounded-lg p-6 w-64 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    index === 0
                      ? "bg-green-100 text-green-600"
                      : index === 1
                      ? "bg-teal-100 text-teal-600"
                      : "bg-emerald-100 text-emerald-600"
                  }`}
                >
                  {index === 0 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                      />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {pillar}
                </h3>
                <p className="text-gray-600">
                  Descripción breve de cómo llevamos a cabo este pilar de
                  nuestra misión en la comunidad.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4 ">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Nuestro Impacto
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "20+", label: "Miembros de la comunidad" },
              { number: "1", label: "Eventos organizados" },
              { number: "2", label: "Proyectos comunitarios" },
              { number: "1 mes", label: "Tiempo de servicio" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-lg ${
                  isVisible ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <span className="block text-4xl font-bold text-green-600 mb-2">
                  {stat.number}
                </span>
                <span className="text-gray-600">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto bg-green-50 rounded-2xl p-8 md:p-12 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800">
            Mantente Conectado
          </h2>
          <p className="text-lg mb-8 text-center text-gray-600">
            Suscríbete a nuestro boletín y sé parte de una comunidad vibrante y
            unida. Recibe las últimas noticias, eventos y oportunidades
            directamente en tu bandeja de entrada.
          </p>
          <form className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-grow px-6 py-4 rounded-full bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors duration-300 transform hover:scale-105 shadow-md"
            >
              Suscribirse
            </button>
          </form>
        </div>
      </section>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </main>
  );
}

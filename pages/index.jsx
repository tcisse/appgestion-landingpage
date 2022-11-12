import next from "next";
import Image from "next/image";
import circle from "../public/images/circle.png";
import cover from "../public/images/cover.png";
import Toggle from "../public/images/Toggle.png";

export default function Home() {
  return (
    <>
      <div className="py-3">
        <div className="text-lg">
          <ul className="flex justify-between">
            <div className="text-blue-800 ml-10 mt-2.5">Logo</div>
            <nav>
              <div className="flex justify-center space-x-10 mr-20">
                <a href="">
                  <li className="hover:text-blue-800 mt-2.5">Accueil</li>
                </a>
                <a href="">
                  <li className="hover:text-blue-800 mt-2.5">Fonctionalités</li>
                </a>
                <a href="">
                  <li className="hover:text-blue-800 mt-2.5">Tarifs</li>
                </a>
                <button className="bg-blue-700 px-3 py-2 rounded-lg hover:bg-pink-700">
                  Démarer 🚀
                </button>
              </div>
            </nav>
          </ul>
        </div>
      </div>
      <div className="bg-circle lg:w-full lg:h-[600px] text-white py-2 rounded-t-lg">
        <div className="mt-20 lg:grid lg:grid-cols-2">
          <div className="mx-10">
            <h1 className="text-5xl">
              Le logiciel qu'il vous faux pour la gestion de votre stock à la
              boutique
            </h1>
            <p className="text-base mt-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <div className="space-x-5 mt-3 py-5">
              <button className="bg-blue-800 hover:bg-pink-700 py-2 rounded-lg px-5">
                Demo
              </button>
              <button className="bg-blue-800 hover:bg-pink-700 py-2 rounded-lg px-5">
                Interessé
              </button>
            </div>
          </div>
          <div className="lg:mr-10 mx-4 lg:py-0 py-3 border-solid border-2 border-sky-500">
            <Image
              src={cover}
              width={700}
              height={500}
              layout="intrinsic"
              alt="cover"
            />
          </div>
        </div>
      </div>
      <div>
        <h1 className="flex justify-center mt-10">Quelques statistiques</h1>
        <div className="bg-gray-400 py-10">
          <div className="lg:space-x-10 lg:flex justify-center">
            <div className="-ml-44 flex items-center">
              Le meilleur outil pour votre gestion de stock
            </div>
            <div className="">
              <span className="flex justify-center text-3xl">+3</span>
              <p className="italic text-blue-600 text-lg">Clients satisfaits</p>
            </div>
            <div className="">
              <span className="flex justify-center text-3xl">+3</span>
              <p className="italic text-blue-600 text-lg">Installations</p>
            </div>
            <div className="">
              <span className="flex justify-center text-3xl">24/7</span>
              <p className="italic text-blue-600 text-lg">
                De service clientèle
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="text-blue-800">
          <h1 className="text-3xl mt-5">Fonctionnalités</h1>
        </div>
        <div className="lg:grid lg:grid-cols-2 ">
          <div className="lg:mx-40 mx-10 mt-2">
            <h1 className="font font-extrabold text-3xl">
              Gérer vos stocks en un clique
            </h1>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <div className="lg:flex md:flex flex mt-2 lg:ml-5 space-x-1">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-file-check text-blue-600"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                  <path d="M9 15l2 2l4 -4"></path>
                </svg>
              </div>
              <div className="font font-semibold">
                Lorem ipsum dolor sit amet
              </div>
            </div>
            <div className="lg:flex md:flex flex mt-2 lg:ml-10">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-file-check text-blue-600"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                  <path d="M9 15l2 2l4 -4"></path>
                </svg>
              </div>
              <div className="font font-semibold">
                Lorem ipsum dolor sit amet
              </div>
            </div>
            <div className="lg:flex md:flex flex mt-2 lg:ml-16">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-file-check text-blue-600"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                  <path d="M9 15l2 2l4 -4"></path>
                </svg>
              </div>
              <div className="font font-semibold">
                Lorem ipsum dolor sit amet
              </div>
            </div>
          </div>
          <div>
            <Image
              src={Toggle}
              width={400}
              height={350}
              alt="grid image"
              layout="intrinsic"
            />
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-2 ">
          <div className="lg:mx-40 mx-10">
            <Image
              src={Toggle}
              width={400}
              height={350}
              alt="grid image"
              layout="intrinsic"
            />
          </div>
          <div className="lg:mx-40 mx-10 mt-2">
            <h1 className="font font-extrabold text-3xl">
              Gérer vos ventes en un clique
            </h1>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <div className="lg:flex md:flex flex mt-2 lg:ml-5 space-x-1">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-file-check text-blue-600"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                  <path d="M9 15l2 2l4 -4"></path>
                </svg>
              </div>
              <div className="font font-semibold">
                Lorem ipsum dolor sit amet
              </div>
            </div>
            <div className="lg:flex md:flex flex mt-2 lg:ml-10">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-file-check text-blue-600"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                  <path d="M9 15l2 2l4 -4"></path>
                </svg>
              </div>
              <div className="font font-semibold">
                Lorem ipsum dolor sit amet
              </div>
            </div>
            <div className="lg:flex md:flex flex mt-2 lg:ml-16">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-file-check text-blue-600"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                  <path d="M9 15l2 2l4 -4"></path>
                </svg>
              </div>
              <div className="font font-semibold">
                Lorem ipsum dolor sit amet
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

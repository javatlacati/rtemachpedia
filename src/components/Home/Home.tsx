import {FC, useState} from 'react';
import {Card} from "primereact/card";
import {Button} from "primereact/button";
import {useNavigate} from "react-router-dom";
import {useTemachpediaStore} from "../../zustand/store.ts";
import {MissionWrapper} from "./Home.styled.ts";

const Home: FC = () => {
  const [activeQuest, setActiveQuest] = useState<string | null>(null);
  const futureWork = useTemachpediaStore((state) => state.futureWork);

  const navigate = useNavigate();
  const handleNavigateToURL = (url: string) => {
    navigate(url);
  };

  // Animation effect when hovering over quests
  const handleQuestHover = (questId: string) => {
    setActiveQuest(questId);
  };

  return (
    <div className="relative min-h-screen" style={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/peacuful male warrior.webp")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>

      <div className="relative z-10 pt-8 pb-16 px-4 md:px-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-yellow-400 mb-4 tracking-wider" style={{
            textShadow: '0 0 10px rgba(255, 215, 0, 0.5), 0 0 20px rgba(255, 215, 0, 0.3)'
          }}>LA JORNADA DEL HÉROE</h1>
          <p className="text-xl text-gray-300 italic">Elige tu camino, guerrero, y forja tu leyenda</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Main Quest Board */}
          <Card className="bg-neutral-900 bg-opacity-80 border-2 border-yellow-700 rounded-lg shadow-2xl transform transition-all duration-300 hover:scale-105">
            <div className="p-4">
              <h2 className="text-3xl font-bold text-yellow-500 mb-6 text-center border-b-2 border-yellow-700 pb-2">
                MISIONES PRINCIPALES
              </h2>

              <div className="grid grid-cols-1 gap-4">
                <MissionWrapper active={activeQuest === 'tribal'} basecolor="yellow"
                  onMouseEnter={() => handleQuestHover('tribal')}
                  onMouseLeave={() => setActiveQuest(null)}
                >
                  <div className="flex items-center">
                    <span className="text-yellow-500 text-2xl mr-3">⚔️</span>
                    <Button 
                      label="Registros de la tribu" 
                      className="flex-grow text-left font-bold text-yellow-200 p-button-text p-button-lg"
                      onClick={() => handleNavigateToURL('/faq')}
                      tooltip="Preguntas frecuentes" 
                      tooltipOptions={{showDelay: 1000, hideDelay: 300}}
                    />
                  </div>
                  <p className="text-gray-400 ml-10 mt-1">Consulta las leyendas y conocimientos ancestrales</p>
                </MissionWrapper>

                <MissionWrapper active={activeQuest === 'visions'} basecolor="yellow"
                  onMouseEnter={() => handleQuestHover('visions')}
                  onMouseLeave={() => setActiveQuest(null)}
                >
                  <div className="flex items-center">
                    <span className="text-yellow-500 text-2xl mr-3">🔮</span>
                    <Button 
                      label="Visiones del brujo" 
                      className="flex-grow text-left font-bold text-yellow-200 p-button-text p-button-lg"
                      onClick={() => handleNavigateToURL('/search')}
                      tooltip="Buscador" 
                      tooltipOptions={{showDelay: 1000, hideDelay: 300}}
                    />
                  </div>
                  <p className="text-gray-400 ml-10 mt-1">Busca respuestas en las profecías antiguas</p>
                </MissionWrapper>

                <MissionWrapper active={activeQuest === 'war'} basecolor="yellow"
                  onMouseEnter={() => handleQuestHover('war')}
                  onMouseLeave={() => setActiveQuest(null)}
                >
                  <div className="flex items-center">
                    <span className="text-yellow-500 text-2xl mr-3">📯</span>
                    <Button 
                      label="Silbatos de guerra" 
                      className="flex-grow text-left font-bold text-yellow-200 p-button-text p-button-lg"
                      onClick={() => handleNavigateToURL('/directory')}
                      tooltip="Directorio" 
                      tooltipOptions={{showDelay: 1000, hideDelay: 300}}
                    />
                  </div>
                  <p className="text-gray-400 ml-10 mt-1">Conoce a los guerreros de tu clan</p>
                </MissionWrapper>

                <MissionWrapper active={activeQuest === 'songs'} basecolor="yellow"
                  onMouseEnter={() => handleQuestHover('songs')}
                  onMouseLeave={() => setActiveQuest(null)}
                >
                  <div className="flex items-center">
                    <span className="text-yellow-500 text-2xl mr-3">🎵</span>
                    <Button 
                      label="Cantares de Gesta" 
                      className="flex-grow text-left font-bold text-yellow-200 p-button-text p-button-lg"
                      onClick={() => handleNavigateToURL('/lyrics')}
                      tooltip="Música" 
                      tooltipOptions={{showDelay: 1000, hideDelay: 300}}
                    />
                  </div>
                  <p className="text-gray-400 ml-10 mt-1">Escucha las baladas de grandes hazañas</p>
                </MissionWrapper>


                <MissionWrapper active={activeQuest === 'trophies'} basecolor="yellow"
                                onMouseEnter={() => handleQuestHover('trophies')}
                                onMouseLeave={() => setActiveQuest(null)}
                >
                  <div className="flex items-center">
                    <span className="text-yellow-500 text-2xl mr-3">🏆</span>
                    <Button
                      label="Salón de trofeos de caza"
                      className="flex-grow text-left font-bold text-yellow-200 p-button-text p-button-lg"
                      onClick={() => handleNavigateToURL('/achievements')}
                      tooltip="Logros de la comunidad"
                      tooltipOptions={{showDelay: 1000, hideDelay: 300}}
                    />
                  </div>
                  <p className="text-gray-400 ml-10 mt-1">Contempla los logros de los grandes guerreros</p>
                </MissionWrapper>

              </div>
            </div>
          </Card>

          {/* Side Quests and Future Quests */}
          <div className="flex flex-col gap-8">
            <Card className="bg-neutral-900 bg-opacity-80 border-2 border-blue-700 rounded-lg shadow-2xl transform transition-all duration-300 hover:scale-105">
              <div className="p-4">
                <h2 className="text-3xl font-bold text-blue-400 mb-6 text-center border-b-2 border-blue-700 pb-2">
                  MISIONES SECUNDARIAS
                </h2>

                <div className="grid grid-cols-1 gap-4">
                  <MissionWrapper active={activeQuest === 'rain'} basecolor="blue"
                    onMouseEnter={() => handleQuestHover('rain')}
                    onMouseLeave={() => setActiveQuest(null)}
                  >
                    <div className="flex items-center">
                      <span className="text-blue-400 text-2xl mr-3">🌧️</span>
                      <Button 
                        label="Danza de la lluvia" 
                        className="flex-grow text-left font-bold text-blue-200 p-button-text p-button-lg"
                        onClick={() => window.open('https://github.com/javatlacati/temachpedia/issues', '_blank')?.focus()}
                        tooltip="Reportar un problema o solicitar una nueva funcionalidad" 
                        tooltipOptions={{showDelay: 1000, hideDelay: 300}}
                      />
                    </div>
                    <p className="text-gray-400 ml-10 mt-1">Invoca nuevos poderes o reporta anomalías mágicas</p>
                  </MissionWrapper>

                  <MissionWrapper active={activeQuest === 'sanctuary'} basecolor="blue"
                    onMouseEnter={() => handleQuestHover('sanctuary')}
                    onMouseLeave={() => setActiveQuest(null)}
                  >
                    <div className="flex items-center">
                      <span className="text-blue-400 text-2xl mr-3">📚</span>
                      <Button 
                        label="El santuario del conocimiento" 
                        className="flex-grow text-left font-bold text-blue-200 p-button-text p-button-lg"
                        onClick={() => handleNavigateToURL('/library')}
                        tooltip="Biblioteca de los compas" 
                        tooltipOptions={{showDelay: 1000, hideDelay: 300}}
                      />
                    </div>
                    <p className="text-gray-400 ml-10 mt-1">Consulta los pergaminos sagrados</p>
                  </MissionWrapper>

                  <MissionWrapper active={activeQuest === 'trials'} basecolor="blue"
                    onMouseEnter={() => handleQuestHover('trials')}
                    onMouseLeave={() => setActiveQuest(null)}
                  >
                    <div className="flex items-center">
                      <span className="text-blue-400 text-2xl mr-3">⚔️</span>
                      <Button 
                        label="Pruebas de valor" 
                        className="flex-grow text-left font-bold text-blue-200 p-button-text p-button-lg"
                        onClick={() => handleNavigateToURL('/quiz')}
                        tooltip="Cuestionarios" 
                        tooltipOptions={{showDelay: 1000, hideDelay: 300}}
                      />
                    </div>
                    <p className="text-gray-400 ml-10 mt-1">Demuestra tu valía en los desafíos ancestrales</p>
                  </MissionWrapper>
                </div>
              </div>
            </Card>

            {futureWork && (
              <Card className="bg-neutral-900 bg-opacity-80 border-2 border-purple-700 rounded-lg shadow-2xl">
                <div className="p-4">
                  <h2 className="text-3xl font-bold text-zinc-300 mb-6 text-center border-b-2 border-purple-700 pb-2">
                    MISIONES FUTURAS
                  </h2>
                  <div className="grid grid-cols-1 gap-2">
                    {futureWork.map((work, index) => (
                      <div key={index} className="p-2 rounded-lg hover:bg-purple-900 hover:bg-opacity-30 transition-all duration-300">
                        <div className="flex items-center">
                          <span className="text-purple-400 text-xl mr-3">🔮</span>
                          <p className="text-gray-300">{work}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

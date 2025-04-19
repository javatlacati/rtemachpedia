import { FC, useState } from 'react';
import { 
  ChurchWrapper, 
  HeroSection, 
  SectionTitle, 
  SectionSubtitle, 
  CardContainer, 
  TemplarCard, 
  CardTitle, 
  MissionWrapper,
  ScriptureQuote
} from './Church.styled';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const Church: FC = () => {
  const [activeQuest, setActiveQuest] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleQuestHover = (questId: string) => {
    setActiveQuest(questId);
  };

  const handleNavigateToURL = (url: string) => {
    navigate(url);
  };

  return (
    <ChurchWrapper style={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/templar-knights.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>

      <HeroSection>
        <SectionTitle>LA ORDEN DEL TEMPLE</SectionTitle>
        <SectionSubtitle>Non nobis, Domine, non nobis, sed nomini tuo da gloriam</SectionSubtitle>

        <ScriptureQuote>
          "Vestios de toda la armadura de Dios paraque podays eſtar firmes contra las assechanças del diablo."
          <div className="text-right mt-2">— Efesios 6:11</div>
        </ScriptureQuote>

        <CardContainer>
          {/* The Call to Adventure */}
          <TemplarCard>
            <CardTitle>EL LLAMADO A LA AVENTURA</CardTitle>

            <MissionWrapper 
              active={activeQuest === 'call'} 
              basecolor="gold"
              onMouseEnter={() => handleQuestHover('call')}
              onMouseLeave={() => setActiveQuest(null)}
            >
              <div className="flex items-center">
                <span className="text-yellow-500 text-2xl mr-3">✝️</span>
                <Button 
                  label="La Vocación Divina" 
                  className="flex-grow text-left font-bold text-yellow-200 p-button-text p-button-lg"
                  onClick={() => handleNavigateToURL('/temple/vocation')}
                  tooltip="Descubre tu llamado" 
                  tooltipOptions={{showDelay: 1000, hideDelay: 300}}
                />
              </div>
              <p className="text-gray-400 ml-10 mt-1">Escucha el llamado de Dios a servir en Su nombre</p>
            </MissionWrapper>

            <MissionWrapper 
              active={activeQuest === 'mentor'} 
              basecolor="gold"
              onMouseEnter={() => handleQuestHover('mentor')}
              onMouseLeave={() => setActiveQuest(null)}
            >
              <div className="flex items-center">
                <span className="text-yellow-500 text-2xl mr-3">📜</span>
                <Button 
                  label="Las Escrituras Sagradas" 
                  className="flex-grow text-left font-bold text-yellow-200 p-button-text p-button-lg"
                  onClick={() => handleNavigateToURL('/temple/scriptures')}
                  tooltip="La Palabra de Dios" 
                  tooltipOptions={{showDelay: 1000, hideDelay: 300}}
                />
              </div>
              <p className="text-gray-400 ml-10 mt-1">Estudia las Sagradas Escrituras, tu guía en el camino</p>
            </MissionWrapper>

            <MissionWrapper 
              active={activeQuest === 'threshold'} 
              basecolor="gold"
              onMouseEnter={() => handleQuestHover('threshold')}
              onMouseLeave={() => setActiveQuest(null)}
            >
              <div className="flex items-center">
                <span className="text-yellow-500 text-2xl mr-3">🛡️</span>
                <Button 
                  label="El Juramento Templario" 
                  className="flex-grow text-left font-bold text-yellow-200 p-button-text p-button-lg"
                  onClick={() => handleNavigateToURL('/temple/oath')}
                  tooltip="El compromiso sagrado" 
                  tooltipOptions={{showDelay: 1000, hideDelay: 300}}
                />
              </div>
              <p className="text-gray-400 ml-10 mt-1">Cruza el umbral y toma los votos de la Orden</p>
            </MissionWrapper>
          </TemplarCard>

          {/* The Hero's Journey */}
          <TemplarCard>
            <CardTitle>LA SENDA DEL CABALLERO</CardTitle>

            <MissionWrapper 
              active={activeQuest === 'trials'} 
              basecolor="red"
              onMouseEnter={() => handleQuestHover('trials')}
              onMouseLeave={() => setActiveQuest(null)}
            >
              <div className="flex items-center">
                <span className="text-red-500 text-2xl mr-3">⚔️</span>
                <Button 
                  label="Las Pruebas de Fe" 
                  className="flex-grow text-left font-bold text-red-200 p-button-text p-button-lg"
                  onClick={() => handleNavigateToURL('/temple/trials')}
                  tooltip="Desafíos espirituales" 
                  tooltipOptions={{showDelay: 1000, hideDelay: 300}}
                />
              </div>
              <p className="text-gray-400 ml-10 mt-1">Enfrenta las pruebas que fortalecerán tu espíritu</p>
            </MissionWrapper>

            <MissionWrapper 
              active={activeQuest === 'allies'} 
              basecolor="red"
              onMouseEnter={() => handleQuestHover('allies')}
              onMouseLeave={() => setActiveQuest(null)}
            >
              <div className="flex items-center">
                <span className="text-red-500 text-2xl mr-3">👥</span>
                <Button 
                  label="La Hermandad Sagrada" 
                  className="flex-grow text-left font-bold text-red-200 p-button-text p-button-lg"
                  onClick={() => handleNavigateToURL('/temple/brotherhood')}
                  tooltip="Tus hermanos en Cristo" 
                  tooltipOptions={{showDelay: 1000, hideDelay: 300}}
                />
              </div>
              <p className="text-gray-400 ml-10 mt-1">Conoce a tus aliados en la batalla contra el mal</p>
            </MissionWrapper>

            <MissionWrapper 
              active={activeQuest === 'abyss'} 
              basecolor="red"
              onMouseEnter={() => handleQuestHover('abyss')}
              onMouseLeave={() => setActiveQuest(null)}
            >
              <div className="flex items-center">
                <span className="text-red-500 text-2xl mr-3">🔥</span>
                <Button 
                  label="El Valle de las Sombras" 
                  className="flex-grow text-left font-bold text-red-200 p-button-text p-button-lg"
                  onClick={() => handleNavigateToURL('/temple/darkness')}
                  tooltip="La noche oscura del alma" 
                  tooltipOptions={{showDelay: 1000, hideDelay: 300}}
                />
              </div>
              <p className="text-gray-400 ml-10 mt-1">Atraviesa el abismo de la duda y la tentación</p>
            </MissionWrapper>
          </TemplarCard>
        </CardContainer>

        <div className="mt-12">
          <CardContainer>
            {/* The Return */}
            <TemplarCard>
              <CardTitle>EL RETORNO DEL CABALLERO</CardTitle>

              <MissionWrapper 
                active={activeQuest === 'revelation'} 
                basecolor="gold"
                onMouseEnter={() => handleQuestHover('revelation')}
                onMouseLeave={() => setActiveQuest(null)}
              >
                <div className="flex items-center">
                  <span className="text-yellow-500 text-2xl mr-3">✨</span>
                  <Button 
                    label="La Revelación Divina" 
                    className="flex-grow text-left font-bold text-yellow-200 p-button-text p-button-lg"
                    onClick={() => handleNavigateToURL('/temple/revelation')}
                    tooltip="Iluminación espiritual" 
                    tooltipOptions={{showDelay: 1000, hideDelay: 300}}
                  />
                </div>
                <p className="text-gray-400 ml-10 mt-1">Recibe la sabiduría divina tras tus pruebas</p>
              </MissionWrapper>

              <MissionWrapper 
                active={activeQuest === 'return'} 
                basecolor="gold"
                onMouseEnter={() => handleQuestHover('return')}
                onMouseLeave={() => setActiveQuest(null)}
              >
                <div className="flex items-center">
                  <span className="text-yellow-500 text-2xl mr-3">🏰</span>
                  <Button 
                    label="El Regreso a Jerusalén" 
                    className="flex-grow text-left font-bold text-yellow-200 p-button-text p-button-lg"
                    onClick={() => handleNavigateToURL('/temple/jerusalem')}
                    tooltip="La Ciudad Santa" 
                    tooltipOptions={{showDelay: 1000, hideDelay: 300}}
                  />
                </div>
                <p className="text-gray-400 ml-10 mt-1">Vuelve transformado para servir a la Orden</p>
              </MissionWrapper>

              <MissionWrapper 
                active={activeQuest === 'legacy'} 
                basecolor="gold"
                onMouseEnter={() => handleQuestHover('legacy')}
                onMouseLeave={() => setActiveQuest(null)}
              >
                <div className="flex items-center">
                  <span className="text-yellow-500 text-2xl mr-3">📚</span>
                  <Button 
                    label="El Legado Templario" 
                    className="flex-grow text-left font-bold text-yellow-200 p-button-text p-button-lg"
                    onClick={() => handleNavigateToURL('/temple/legacy')}
                    tooltip="La herencia de la Orden" 
                    tooltipOptions={{showDelay: 1000, hideDelay: 300}}
                  />
                </div>
                <p className="text-gray-400 ml-10 mt-1">Preserva y comparte la sabiduría adquirida</p>
              </MissionWrapper>
            </TemplarCard>

            {/* Holy Relics */}
            <TemplarCard>
              <CardTitle>RELIQUIAS SAGRADAS</CardTitle>

              <MissionWrapper 
                active={activeQuest === 'grail'} 
                basecolor="red"
                onMouseEnter={() => handleQuestHover('grail')}
                onMouseLeave={() => setActiveQuest(null)}
              >
                <div className="flex items-center">
                  <span className="text-red-500 text-2xl mr-3">🏆</span>
                  <Button 
                    label="El Santo Grial" 
                    className="flex-grow text-left font-bold text-red-200 p-button-text p-button-lg"
                    onClick={() => handleNavigateToURL('/temple/grail')}
                    tooltip="La copa sagrada" 
                    tooltipOptions={{showDelay: 1000, hideDelay: 300}}
                  />
                </div>
                <p className="text-gray-400 ml-10 mt-1">Busca el cáliz de la Última Cena</p>
              </MissionWrapper>

              <MissionWrapper 
                active={activeQuest === 'ark'} 
                basecolor="red"
                onMouseEnter={() => handleQuestHover('ark')}
                onMouseLeave={() => setActiveQuest(null)}
              >
                <div className="flex items-center">
                  <span className="text-red-500 text-2xl mr-3">📦</span>
                  <Button 
                    label="El Arca de la Alianza" 
                    className="flex-grow text-left font-bold text-red-200 p-button-text p-button-lg"
                    onClick={() => handleNavigateToURL('/temple/ark')}
                    tooltip="El pacto con Dios" 
                    tooltipOptions={{showDelay: 1000, hideDelay: 300}}
                  />
                </div>
                <p className="text-gray-400 ml-10 mt-1">Protege el tesoro más sagrado de Israel</p>
              </MissionWrapper>

              <MissionWrapper 
                active={activeQuest === 'shroud'} 
                basecolor="red"
                onMouseEnter={() => handleQuestHover('shroud')}
                onMouseLeave={() => setActiveQuest(null)}
              >
                <div className="flex items-center">
                  <span className="text-red-500 text-2xl mr-3">🧵</span>
                  <Button 
                    label="El Sudario de Cristo" 
                    className="flex-grow text-left font-bold text-red-200 p-button-text p-button-lg"
                    onClick={() => handleNavigateToURL('/temple/shroud')}
                    tooltip="La imagen sagrada" 
                    tooltipOptions={{showDelay: 1000, hideDelay: 300}}
                  />
                </div>
                <p className="text-gray-400 ml-10 mt-1">Contempla el rostro del Salvador</p>
              </MissionWrapper>
            </TemplarCard>
          </CardContainer>
        </div>

        <ScriptureQuote>
          "Porque qualquiera que quisiere saluar ſu vida, la perderá: y qualquiera que perdiere ſu vida por cauſa de mi, la hallará."
          <div className="text-right mt-2">— Mateo 16:25</div>
        </ScriptureQuote>
      </HeroSection>
    </ChurchWrapper>
  );
};

export default Church;

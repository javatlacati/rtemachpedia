import {create} from "zustand";
import {Faq} from "./types/faq.ts";
import {MammothHead} from "./types/MammothHead.ts";
import {Transcription} from "./types/Transcription.ts";
import {Lyric} from "./types/Lyric.ts";
import {CellLocation} from "./types/CellLocation.ts";
import {SelectItemGroupThreeValues} from "./types/SelectItemGroupThreeValues.ts";
import {Book} from "./types/Book.ts";
import {MusicPlatform} from "./types/MusicPlatform.ts";

type TemachpediaState = {
  futureWork: string[],
  faqs: Faq[],
  heads: MammothHead[],
  matches: Transcription[],
  lyrics: Lyric[],
  auth: { name?: string, token?: string },
  locations: CellLocation[],
  groupedCities: SelectItemGroupThreeValues[],
  books: Book[],
  musicPlatforms: MusicPlatform[],
}

type TemachpediaActions = {
  setHeads: (heads: MammothHead[]) => void,
  matches: Transcription[],
  setMatches: (matches: Transcription[]) => void,
  setAuth: (name: string, token: string) => void,
  setLocations: (locations: CellLocation[]) => void,
  setGroupedCities: (groupedCities: SelectItemGroupThreeValues[]) => void,
  setBooks: (books: Book[]) => void,
}

export const useTemachpediaStore = create<TemachpediaState & TemachpediaActions>((set): TemachpediaState & TemachpediaActions => {
    return (
      {
        futureWork: ['Viaje del Héroe', 'Lista negra', 'Roomies de hierro', 'Bolsa de trabajo', 'Mercaderes de hierro'],
        faqs: [
          {
            enunciado: 'Si soy mujer, ¿Puedo ir a los compas de hierro?',
            respuesta: 'Sí',
            fuente: 'https://www.youtube.com/live/4zvABlShz5w?si=B9gtOrq6JM7ZDXX_&t=860',
          },
          {
            enunciado: '¿Cuanto cuesta ir a los compas de hierro?',
            respuesta: 'Nada, es gratis',
            fuente: 'https://www.youtube.com/live/4zvABlShz5w?si=B9gtOrq6JM7ZDXX_&t=860',
          },
        ],
        heads: [],
        setHeads: (heads: MammothHead[]) => {
          set((state) => ({...state, heads}))
        },
        matches: [],
        setMatches: (matches: Transcription[]) => {
          set((state) => ({...state, matches}))
        },
        lyrics: [
          {
            id: 1,
            title: 'Cuestión de Vida',
            authors: ['White Shit State'],
            video: {
              id: '9-7CgecHAq8',
            },
            paragraphs: [
              {
                verses: [
                  'Despierto con el cansancio del pasado',
                  'Los dolores del presente, del futuro ni hablamos',
                  'Con un peso en el pecho que no deja respirar, los',
                  'Problemas en la cabeza, y el celular sonando',
                ],
                chords: [
                  {
                    lines: [
                      {
                        chordName: 'Dm7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'Am7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'F',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'E7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                ],
              },
              {
                verses: [
                  'Y ya es normal, en ésta realidad',
                  'Donde el cielo es el infierno, y el infierno es de verdad',
                  'Despertar, sin poder anticipar',
                  'La ruleta de la vida que da vueltas sin parar,',
                ],
                chords: [
                  {
                    lines: [
                      {
                        chordName: 'Dm7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'Am7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'F',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'E7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                ],
              },
              {
                verses: [
                  'Inicia el día, hay cosas que no estoy entendiendo',
                  'Y cosas que no entendía pero entiendo día a día',
                  'El dolor y sufrimiento se van yendo',
                  'Pero queda la desidia',
                ],
                chords: [
                  {
                    lines: [
                      {
                        chordName: 'Dm7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'Am7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'F',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'E7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                ],
              },
              {
                verses: [
                  'Los planes son inciertos, las ansias van creciendo',
                  'Los motivos no motivan,',
                  'Y el tiempo no se olvida',
                  'De la esperanza a la deriva',
                ],
                chords: [
                  {
                    lines: [
                      {
                        chordName: 'Dm7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'Am7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'F',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'E7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                ],
              },
              {
                verses: [
                  'Las nuevas noticias no son buenas',
                  'Las buenas noticias brillan por su ausencia',
                  'Guerra lejos, guerra cerca',
                  'Dolor ajeno, frustración y mucha indiferencia',
                ],
                chords: [
                  {
                    lines: [
                      {
                        chordName: 'Dm7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'Am7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'F',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'E7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                ],
              },
              {
                verses: [
                  'Separaciones, uniones sin razones',
                  'Mucha violencia en sus normalizaciones',
                  'Un tren desbocado sin rumbo y sin estaciones',
                  'Es la humanidad que no entiende razones',
                ],
                chords: [
                  {
                    lines: [
                      {
                        chordName: 'Dm7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'Am7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'F',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'E7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                ],
              },
              {
                verses: [
                  'Respira,',
                  'el que se enoja pierde y al que pierde le olvidan',
                  'Después de la tormenta la cosa estará tranquila',
                  'Sigue caminando esta noche fría',
                ],
                chords: [
                  {
                    lines: [
                      {
                        chordName: 'Dm7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'Am7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'F',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'E7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                ],
              },
              {
                verses: [
                  'La luz de la mañana te dará la bienvenida',
                  'Y el destino habrá valido la partida',
                  'El alma cansada, pero no vacía',
                  'Estará llena de amor, de experiencia y alegrías',
                ],
                chords: [
                  {
                    lines: [
                      {
                        chordName: 'Dm7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'Am7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'F',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'E7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                ],
              },
              {
                verses: [
                  'Voy de noche a caminar',
                  'Un sendero mas tranquilo',
                  'Y al llegar a mi destino',
                  'Luz habrá, Luz habrá',
                ],
                chords: [
                  {
                    lines: [
                      {
                        chordName: 'Dm7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'Am7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'F',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'E7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                ],
              },
              {
                verses: [
                  'Cierra los ojos, descansa un momento',
                  'Se acerca el tiempo de dar el segundo aliento',
                  'Piensa en el presente, disfruta el sentimiento',
                  'Porque no es cuestión de suerte, es cuestión de intentos',
                ],
                chords: [
                  {
                    lines: [
                      {
                        chordName: 'Dm7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'Am7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'F',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'E7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                ],
              },
              {
                verses: [
                  'Es cuestión de avance constante,',
                  'Más de colocar los golpes, no nada más de pegarle',
                  'Cuestión de hacer camino como cualquier caminante',
                  'A base de caminarle',
                ],
                chords: [
                  {
                    lines: [
                      {
                        chordName: 'Dm7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'Am7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'F',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'E7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                ],
              },
              {
                verses: [
                  'Con la mirada siempre en busca de lunas perdidas',
                  'El alma llena, las bolsas casi vacías',
                  'Suela gastada, ropa sencilla',
                  'Sangre caliente y la mente fría',
                ],
                chords: [
                  {
                    lines: [
                      {
                        chordName: 'Dm7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'Am7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'F',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'E7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                ],
              },
              {
                verses: [
                  'Paso seguro en el camino de la vida',
                  'Para evitar los resbalones y caídas',
                  'Ten la voluntad libre y las ideas comprometidas',
                  'Mantén el corazón en paz y armonía',
                ],
                chords: [
                  {
                    lines: [
                      {
                        chordName: 'Dm7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'Am7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'F',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'E7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                ],
              },
              {
                verses: [
                  'El mundo intentará quebrarte y destrozarte',
                  'Pero solamente lograrán fortalecerte',
                  'Muchos querrán usarte y engañarte',
                  'Y cada día tendrás que defenderte',
                ],
                chords: [
                  {
                    lines: [
                      {
                        chordName: 'Dm7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'Am7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'F',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'E7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                ],
              },
              {
                verses: [
                  'Los planes como panes verás desmoronarse',
                  'La vida cambiará y no entenderás las realidades',
                  'El mundo trastocado no parecerá verdad',
                  'Y por cada paso dado terminarás tres atrás',
                ],
                chords: [
                  {
                    lines: [
                      {
                        chordName: 'Dm7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'Am7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'F',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'E7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                ],
              },
              {
                verses: [
                  'Respira otra vez',
                  'Aunque parezca que el mundo gira al revés',
                  'Afina la puntería, asienta bien los pies',
                  'Dispara primero y pregunta después',
                ],
                chords: [
                  {
                    lines: [
                      {
                        chordName: 'Dm7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'Am7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'F',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'E7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                ],
              },
              {
                verses: [
                  'No detengas tus pasos después de las caídas',
                  'Ni las batallas antes de tiempo des por vencidas',
                  'La llama en tu mirada estará más encendida',
                  'Si durante la noche resiste la llovizna',
                ],
                chords: [
                  {
                    lines: [
                      {
                        chordName: 'Dm7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'Am7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'F',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'E7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                ],
              },
              {
                verses: [
                  'Voy de noche a caminar',
                  'Un sendero más tranquilo',
                  'Y al llegar a mi destino',
                  'Luz habrá, luz habrá',
                ],
                chords: [
                  {
                    lines: [
                      {
                        chordName: 'Dm7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'Am7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'F',
                        spacesBefore: 2,
                      },
                    ],
                  },
                  {
                    lines: [
                      {
                        chordName: 'E7',
                        spacesBefore: 2,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
        auth: {name: '', token: ''},
        setAuth: (name: string, token: string) => {
          set((state) => ({...state, auth: {name, token}}));
        },
        locations: [],
        setLocations: (locations: CellLocation[]) => {
          set((state) => ({...state, locations}));
        },
        groupedCities: [],
        setGroupedCities: (groupedCities: SelectItemGroupThreeValues[]) => {
          set((state) => ({...state, groupedCities}))
        },
        books: [],
        setBooks: (books: Book[]) => {
          set((state) => ({...state, books}))
        },
        musicPlatforms: [
          {
            name: 'Spotify',
            icon: 'pi pi-spotify',
            artists: [
              {name: 'Temach', url: 'https://open.spotify.com/intl-es/artist/3Vk13C8zxcHqAqcTZhluj9'},
              {
                name: 'White Shit State',
                url: 'https://open.spotify.com/intl-es/artist/7xxj65R3e17WXuZTU67HxR',
              },
              {
                name: 'Ruga Kisin',
                url: 'https://open.spotify.com/intl-es/artist/2h9ZwNdMZcqHKqJisyf1LT',
              },
              {
                name: 'Elburguer',
                url: 'https://open.spotify.com/intl-es/artist/55sUDNma3qznDILZgydRHT',
              },
              {name: 'MC Monel', url: 'https://open.spotify.com/intl-es/artist/6DxT9fbm7M0sDGWrPoAzfw'},
              {name: 'Gacoh', url: 'https://open.spotify.com/intl-es/artist/6zLfG2qJyi6YbHwsadOXHx'},
              {
                name: 'Muro de Cráneos',
                url: 'https://open.spotify.com/intl-es/artist/02DvUfztcmjLdCFRysedNb',
              },
              {name: 'Mau Gree', url: 'https://open.spotify.com/intl-es/artist/7g8zxRXsQUdvHRanDbcH18'},
              {name: 'Frodiboy', url: 'https://open.spotify.com/intl-es/artist/0yqmgxiFONOUT7zc4wwP1y'},
              {name: 'MC FD', url: 'https://open.spotify.com/intl-es/artist/5onAhDbB92khYFxqCzZFSF'},
            ],
          },
          {
            name: 'Amazon Music',
            icon: 'pi pi-amazon',
            artists: [
              {name: 'Temach', url: 'https://music.amazon.com.mx/artists/B09DQ618F3/el-temach'},
              {
                name: 'White Shit State',
                url: 'https://music.amazon.com.mx/artists/B07W3WGK7R/white-shit-state',
              },
              {name: 'Ruga Kisin', url: 'https://music.amazon.com.mx/artists/B09XKW23RY/ruga-kisin'},
            ],
          },
          {
            name: 'YouTube',
            icon: 'pi pi-youtube',
            artists: [
              {name: 'Temach', url: 'https://music.youtube.com/channel/UCahshm4tJT0c9rJzb7eCKWA'},
              {
                name: 'White Shit State',
                url: 'https://music.youtube.com/channel/UCENkMpmeDiY-dnXDnopeimA',
              },
              {name: 'Ruga Kisin', url: 'https://music.youtube.com/channel/UCEzlsxrAMoRsvkNGPBO0CBg'},
            ],
          },
        ]
      }
    )
  }
)
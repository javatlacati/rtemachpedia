export interface MusicPlatform {
  name: string,
  icon: string,
  artists: MusicArtist[]
}

export interface MusicArtist {
  name: string,
  url: string,
}
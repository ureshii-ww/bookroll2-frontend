export interface ClubProfileInfo {
  clubname: string | null;
  master: {
    username: string,
    url: string
  } | null,
  bookToRead: {
    title: string,
    authors: string[]
  } | null,
  isMaster: boolean,
  isInClub: boolean
}
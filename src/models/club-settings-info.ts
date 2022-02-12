export interface ClubSettingsInfoMember {
  readonly username: string;
  readonly url: string;
}

export interface ClubSettingsInfo {
  readonly clubname: string;
  readonly description: string;
  readonly members: ClubSettingsInfoMember[];
}
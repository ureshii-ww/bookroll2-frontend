export interface ClubSettingsInfoMember {
  readonly username: string;
  readonly url: string;
}

export interface ClubSettingsInfo {
  readonly clubname: string;
  readonly rules: string;
  readonly members: ClubSettingsInfoMember[];
}
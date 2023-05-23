export type PersonalData = {
  name: string;
  lastname: string;
  birthdate: number;
  gender: "male" | "female" | "other" | "nonmentioned";
  email: string;
  newsletter: boolean;
};

export type PersonalData = {
  name: string;
  lastname: string;
  birthdate: string;
  gender: "male" | "female" | "other" | "nonmentioned";
  email: string;
  newsletter: boolean;
};

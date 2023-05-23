type PropsType = {
  children: JSX.Element;
};

export function Header({ children }: PropsType) {
  return (
    <>
      <header>
        <h1>React & Typescript Form</h1>
      </header>
      {children}
    </>
  );
}

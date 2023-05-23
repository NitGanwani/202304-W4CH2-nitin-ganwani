type PropsType = {
  children: JSX.Element;
};

export function Header({ children }: PropsType) {
  return (
    <header>
      <h1>React & Type Form</h1>
      {children}
    </header>
  );
}

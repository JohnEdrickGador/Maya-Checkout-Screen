interface DividerProps {
  dividerText?: string;
}

export default function Divider({ dividerText = "" }: DividerProps) {
  return (
    <div className={`divider ${dividerText ? "with-text" : "no-text"}`}>
      {dividerText && <span>{dividerText}</span>}
    </div>
  );
}

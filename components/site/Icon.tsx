type Props = {
  name: string;
  className?: string;
};

export function Icon({ name, className = "" }: Props) {
  return (
    <span className={`material-symbols-outlined ${className}`} aria-hidden="true">
      {name}
    </span>
  );
}

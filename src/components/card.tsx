type CardProps = {
  name: string;
  role: string;
};

function Card({ name, role }: CardProps) {
  return (
    <article className="card">
      <h2>{name}</h2>
      <p>{role}</p>
    </article>
  );
}

export default Card;

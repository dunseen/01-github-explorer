export default function RepositoryItem({ repository }) {
  return (
    <li>
      <strong>{repository?.name ?? "Default"}</strong>
      <p>{repository?.description ?? "Default"}</p>
      <a href={repository?.html_url ?? "#"}>Acess repository</a>
    </li>
  );
}

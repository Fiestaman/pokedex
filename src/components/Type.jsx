export default function Type({ type: { name } }) {
  // Capitalize name
  name = name[0].toUpperCase() + name.slice(1);

  return (
    <>
      <div className={`${name} type`}>{name}</div>
    </>
  );
}

export default function Card({ user }) {
  const { name, email, company, address, phone, website } = user;

  return (
    <div>
      <p>{name}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{company.name}</p>
      <p>{address.city}</p>
    </div>
  );
}

import { useState } from "react";

const ListRender = () => {
  const [list] = useState(['Brendon','Matheus','Fabricio']);
  const [users, setUsers] = useState([
    { id: 1, name: 'Brendon', age: 23 },
    { id: 2, name: 'Matheus', age: 26 },
    { id: 3, name: 'Fabricio', age: 25 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      {/*má pratica usar o index, depende muito do caso*/}
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
       {/*boa pratíca*/}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} anos
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender;
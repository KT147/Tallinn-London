import { useState } from "react";

function Kontakt() {
    const [aadress, m22raAadress] = useState("Tallinn");
  const [telefon, m22raTelefon] = useState("5512345");
  const [email, m22raEmail] = useState("eesti@gmail.com");
  const [ingliseKeelne, m22raIngliseks] = useState("ei");

  const ingliseks = () => {
    m22raAadress ('London');
    m22raTelefon ("12313131");
    m22raEmail ("london@gmail.com")
    m22raIngliseks ("jah");

  }

  return ( <>
  <br />
    { ingliseKeelne === "jah" && <div>Leht on inglise keeles</div>}
    <div>{ aadress }</div>
    <div>{ telefon }</div>
    <div>{ email }</div>
    <button onClick= {ingliseks}>Muuda inglise keelseks</button>
    </>
  )
}

export default Kontakt
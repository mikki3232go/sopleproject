function Card({ title, children }) {

  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h1>{title}</h1>
          {children}
        </div>
      </div>
    </div>
  );
}
function Card1() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h1>Photo</h1>
          <img
            className="avatar"
            src="https://i.imgur.com/OKS67lhm.jpg"
            alt="Aklilu Lemma"
            width={70}
            height={70}
          />
        </div>
      </div>
    </div>
  );
}
function Card2() {
  return (
    <div className="card">
      <div className="card-content">
        <h1>About</h1>
        <p>
          Aklilu Lemma was a distinguished Ethiopian scientist who discovered a
          natural treatment to schistosomiasis.
        </p>
      </div>
    </div>
  );
}
export default function Profile() {
  return (
    <div>
      <Card title ="사진">
        <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={70}
          height={70}
        />
      </Card>
      <Card title = "내맘대로">
        <p>
          Aklilu Lemma was a distinguished Ethiopian scientist who discovered a
          natural treatment to schistosomiasis.
        </p>
      </Card>
    </div>
  );
}

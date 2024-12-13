import Link from "next/link";

const Page = () => {
    return (
      <>
        <main className="container">
          <h1>Projetos</h1>
          <Link className="nav-link active" href="/projetos/criar">
            <button className="btn btn-primary">Criar</button>
          </Link>
        </main>
      </>
    );

    
}
 
export default Page;
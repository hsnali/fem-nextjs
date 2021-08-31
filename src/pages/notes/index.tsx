/** @jsxImportSource theme-ui */

import Link from "next/link";

const Notes = ({ notes }) => {
  return (
    <div sx={{ variant: "containers.page" }}>
      <h1>My Notes</h1>

      <div
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {notes.map((note) => (
          <div sx={{ width: "33%", p: 2 }} key={note.id}>
            <Link href="/notes/[id]" as={`/notes/${note.id}`} passHref>
              <a sx={{ textDecoration: "none", cursor: "pointer" }}>
                <div sx={{ variant: "containers.card" }}>
                  <strong>
                    {note.title} - {note.id}
                  </strong>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/notes`);
  const { data: notes } = await res.json();

  return {
    props: { notes },
  };
}

export default Notes;

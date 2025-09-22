import { Fragment } from "react/jsx-runtime";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { NotesCard } from "../../components/NotesCard";
import { useNotes } from "../../context/notes-context";

export const Archive = () => {
  const { archive } = useNotes();

  return (
    <Fragment>
      <Navbar />
      <main className="flex gap-3">
        <Sidebar />
        <div>
          <div className="flex flex-wrap gap-6 w-screen mt-7">
            {archive?.length > 0 &&
              archive.map(({ id, title, text, isPinned }) => (
                <NotesCard
                  key={id}
                  id={id}
                  title={title}
                  text={text} 
                  isPinned={isPinned}
                />
              ))}
          </div>
        </div>
      </main>
    </Fragment>
  );
};

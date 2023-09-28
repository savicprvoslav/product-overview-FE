import {useState} from 'react'
import '../globals.css'
import ProjectList from "@/pages/app/Components/ProjectList";
import {voteForProject} from "@/lib/api";
import MainSection from "@/pages/app/Components/MainSection";
import {Project} from "@/pages/website/components/Model";
import AppLayout from "@/pages/app/layout";
import NoItemsAdd from "@/pages/app/Components/NoItemsAdd";
import AddItemButton from "@/pages/app/Components/AddItemButton";
import ListError from "@/pages/app/Components/ListError";

const userNavigation = [
  {name: 'Your profile', href: '#'},
  {name: 'Sign out', href: '#'},
]

export default function Example({productId, projectsLoaded, hasError}: {
  productId: string,
  hasError: boolean,
  projectsLoaded: Project[]
}) {
  const [query, setQuery] = useState('')
  const [projects, setProjects] = useState<Project[]>(projectsLoaded);


  function updateProject(projects: Project[], project: Project, execute: (project: Project) => Project) {
    function updateAProjectInTheList(projects: Project[], project: Project): Project[] {
      return projects.map((item: Project) => {
        if (item.id == project.id) {
          return execute(item);
        }

        return item;
      });
    }

    // Vote with state update
    return updateAProjectInTheList(projects, project)
  }

  function upVote(project: Project) {
    voteForProject(project.id)
      .then(() => {
        setProjects(updateProject(projects, project, project => {
          project.voteCount = project.voteCount + 1;
          return project;
        }));
      }).catch((error) => {
        console.log(error)
      }
    );
  }

  const onClick = () => {
    alert("Add project");
  }

  let projectComponent
  if (hasError)
    projectComponent = <ListError message={"Ups could not load projects..."}/>
  else if (!projects || projects.length == 0)
    projectComponent = <NoItemsAdd onClick={onClick} noProjectsMessage={{
      title: "No Projects yet",
      description: "Use the action button to create project."
    }} actionName={"Add Project"}/>
  else
    projectComponent = <>
      <ProjectList query={query} projects={projects} upVote={upVote}/>
      <AddItemButton onClick={onClick} actionName={"Add Project"}/>
    </>

  return (
    <AppLayout>
      <MainSection
        userNavigation={userNavigation}
        query={query}
        setQuery={setQuery}
      >
        {projectComponent}
      </MainSection>
    </AppLayout>
  )
}

export async function getServerSideProps({params}: { params: { id: string } }) {
  const productId = params.id;

  const result: Response = await fetch(`${process.env.API}/projects/${productId}`);

  const hasError: boolean = !result.ok
  const data = await result.json()

  return {
    props: {
      productId,
      projectsLoaded: data,
      hasError: hasError
    }
  }
}

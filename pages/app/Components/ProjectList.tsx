import {Fragment, useState} from 'react'
import {Menu, Transition} from '@headlessui/react'
import {EllipsisVerticalIcon, HandThumbUpIcon} from '@heroicons/react/20/solid'
import {Project} from "@/pages/website/components/Model";

const statuses = {
  Complete: 'text-green-700 bg-green-50 ring-green-600/20',
  'In progress': 'text-gray-600 bg-gray-50 ring-gray-500/10',
  Archived: 'text-yellow-800 bg-yellow-50 ring-yellow-600/20',
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function ProjectContent(props: { project: Project }) {
  return <div className="min-w-0">
    <div className="flex items-start gap-x-3">
      <p className="text-sm font-semibold leading-6 text-gray-900">{props.project.name} ({props.project.voteCount})</p>
    </div>
    <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
      <p className="truncate">{props.project.description}</p>
    </div>
  </div>;
}

function ProjectActions(props: { onClick: () => void, project: Project }) {
  return <div className="flex flex-none items-center gap-x-4">
    <a
      href="#"
      className="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block"
      onClick={props.onClick}
    >
      <HandThumbUpIcon className="h-6 w-6" aria-hidden="true"/>
    </a>
    <ProjectMenu project={props.project}/>
  </div>;
}

function ProjectItem(props: { project: Project, onClick: () => void }) {
  return <li className="flex items-center justify-between gap-x-6 py-5">
    <ProjectContent project={props.project}/>
    <ProjectActions onClick={props.onClick} project={props.project}/>
  </li>;
}

function ProjectMenu({project}: { project: Project }) {
  return (
    <Menu as="div" className="relative flex-none">
      <Menu.Button className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
        <span className="sr-only">Open options</span>
        <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true"/>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
          <Menu.Item>
            {({active}) => (
              <a
                href="#"
                className={classNames(
                  active ? 'bg-gray-50' : '',
                  'block px-3 py-1 text-sm leading-6 text-gray-900'
                )}
              >
                Edit<span className="sr-only">, {project.name}</span>
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({active}) => (
              <a
                href="#"
                className={classNames(
                  active ? 'bg-gray-50' : '',
                  'block px-3 py-1 text-sm leading-6 text-gray-900'
                )}
              >
                Delete<span className="sr-only">, {project.name}</span>
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}


export default function ProjectList({query, projects, upVote}: { query: string, projects: Project[], upVote: (project: Project) => void }) {

  let projectItems = <>{projects
    .filter((project: Project) => project.name.toLowerCase().includes(query.toLowerCase()))
    .map((project: Project) => (
      <ProjectItem key={project.id} project={project} onClick={() => upVote(project)}/>
    ))}</>;

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {projectItems}
    </ul>
  )
}




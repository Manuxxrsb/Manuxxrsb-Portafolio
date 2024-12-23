import React, { useEffect, useState } from "react";

interface Repo {
  name: string;
  description: string;
  html_url: string;
}

const GitHubProjects: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/manuxxrsb/repos")
      .then((response) => response.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <section className="mt-36">
      <h2 className="text-7xl font-bold items-center text-center mb-12">
        <span className="text-orange-500">Proyectos</span> de{" "}
        <span className="text-orange-500">GitHub</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <div
            key={repo.name}
            className="bg-white m-6 rounded-lg shadow-md shadow-orange-200 hover:shadow-lg hover:shadow-orange-200 transition-shadow duration-300 p-4 "
          >
            <img
              src={`https://raw.githubusercontent.com/manuxxrsb/${repo.name}/main/image.png`}
              alt={`${repo.name}`}
              className="max-h-40 w-full object-cover object-center rounded-t-lg"
            />

            <h3 className="text-xl font-semibold m-6 mb-2">{repo.name}</h3>
            <p className="text-gray-700 m-6 mb-4">{repo.description}</p>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 m-6 hover:underline"
            >
              Ver en GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GitHubProjects;

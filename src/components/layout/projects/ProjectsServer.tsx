import ProjectsClient from "./ProjectsClient";
import type { Project } from "@/components/data/types";

export default async function ProjectsServer() {
  const res = await fetch(
    "https://api.github.com/users/klabruben3/repos?sort=pushed&direction=desc",
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github.mercy-preview+json",
      },
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) return null;

  const repos = await res.json();

  const projects: Project[] = [];

  for (const repo of repos) {
    if (
      repo.name == "SOS-Project" ||
      repo.name == "klabruben3" ||
      repo.name == "NextJs-Mosh-Tutorial" ||
      repo.name == "react-bits" ||
      projects.length == 5
    )
      continue;

      console.log(repo.name, repo.topics)

    const repoInfo: Project = {
      title: repo.name.toUpperCase(),
      description: repo.description,
      github: repo.html_url,
      stats: {
        Created: repo.created_at.slice(0, repo.created_at.indexOf("T")),
        Pushed: repo.pushed_at.slice(0, repo.pushed_at.indexOf("T")),
      },
      tech: repo.topics,
    };

    if (repo.has_pages && !repo.homepage) {
      repoInfo.demo = "https://klabruben3.github.io/" + repo.name;
    } else if (repo.homepage) {
      repoInfo.demo = repo.homepage;
    }

    projects.push(repoInfo);
  }

  return <ProjectsClient projects={projects} />;
}

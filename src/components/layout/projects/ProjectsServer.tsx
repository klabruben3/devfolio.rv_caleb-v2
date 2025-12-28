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
  if (!Array.isArray(repos)) return null;

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

    // Fetch the preview images from github
    const previewRes = await fetch(
      `https://api.github.com/repos/klabruben3/${repo.name}/contents/public`,
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          Accept: "application/vnd.github+json",
        },
        next: { revalidate: 3600 },
      }
    );
    const previews = await previewRes.json();

    if (Array.isArray(previews)) {
      for (const img of previews) {
        if (img.name == "preview.png") {
          repoInfo.preview = img.download_url;
          break;
        }
      }
    }

    projects.push(repoInfo);
  }

  return <ProjectsClient projects={projects} />;
}

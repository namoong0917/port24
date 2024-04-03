// import React from "react";
import projectsData from "../TabJSON/projects";

const Project = () => {
  return (
    <section>
      <ul className="project_list">
        {/* 반복되는 요소 */}
        {projectsData.map((project, index) => (
          <li
            key={index}
            style={{ backgroundImage: `url(${project.backgroundImage})` }}
          >
            <div className="txt_wrap">
              <h2>{project.title}</h2>
              <div className="tag_wrap">
                {/* 태그 목록 생성 */}
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <p>{project.description}</p>
              <p>{project.period}</p>
              <div className="btn_wrap">
                <a className="btn_more" href={project.siteUrl} target="_blank">
                  사이트 보기
                </a>
                <a
                  className="btn_more"
                  href={project.githubUrl}
                  target="_blank"
                >
                  상세 보기
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Project;

import React from "react";
import "./Team.css";
import {
  teamMembers,
  codingTeam,
  researchTeam,
  electronicsTeam,
  mechanicalTeam,
  managementTeam,
  // AdvisoryBoard,
} from "../../assets/teams.js";
import Header2 from "../Header/Header2";

const Team = () => {
  return (
    <div>
      <Header2 title="Meet Our Team" />
      <div className="team">
        <div className="heading">
          <h1>Board</h1>
        </div>
        <div className="team-members board-member">
          {teamMembers.map((member, index) => (
            <div className="member" key={index}>
              <div className="img-member">
                <img
                  src={member.imageUrl}
                  alt={`${member.firstName} ${member.lastName}`}
                />
                <div className="social_media">
                  <a href={member.linkedIn}>
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <h3>{member.firstName}</h3>
              <h3>{member.lastName}</h3>
              <h5>{member.position}</h5>
            </div>
          ))}
        </div>

        {/* <div className="heading advisory">
          <h1>Advisory Board</h1>
        </div>
        <div className="team-members advisory-board">
          {AdvisoryBoard.map((member, index) => (
            <div className="member" key={index}>
              <div className="img-member">
                <img
                  src={member.imageUrl}
                  alt={`${member.firstName} ${member.lastName}`}
                />
                <div className="social_media">
                  <a href={member.linkedIn}>
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <h3>{member.firstName}</h3>
              <h3>{member.lastName}</h3>
              <h5>{member.position}</h5>
            </div>
          ))}
        </div> */}
        <div className="team teams">
          <div className="heading">
            <h1>Team Members</h1>
          </div>
          <div className="teams-container">
            <div className="team-box">
              <h2>Coding & Simulation</h2>
              <ul>
                {codingTeam.map((name, index) => (
                  <li key={index}>{name}</li>
                ))}
              </ul>
            </div>
            <div className="team-box">
              <h2>Electronics</h2>
              <ul>
                {electronicsTeam.map((name, index) => (
                  <li key={index}>{name}</li>
                ))}
              </ul>
            </div>
            <div className="team-box">
              <h2>Research</h2>
              <ul>
                {researchTeam.map((name, index) => (
                  <li key={index}>{name}</li>
                ))}
              </ul>
            </div>
            <div className="team-box">
              <h2>Mechanical</h2>
              <ul>
                {mechanicalTeam.map((name, index) => (
                  <li key={index}>{name}</li>
                ))}
              </ul>
            </div>

            <div className="team-box">
              <h2>Management</h2>
              <ul>
                {managementTeam.map((name, index) => (
                  <li key={index}>{name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Team;

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  specialties: string[];
  education: string;
  imageUrl?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    researchGate?: string;
  };
}

export const TeamCard = ({ name, role, bio, specialties, education, imageUrl, socialLinks }: TeamCardProps) => {
  return (
    <div className="team-card">
      <div className="team-image-wrapper">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="team-image" />
        ) : (
          <div className="team-icon-wrapper">
            <i className="bi bi-person-circle team-icon"></i>
          </div>
        )}
      </div>
      <h5 className="mt-3">{name}</h5>
      <p className="role">{role}</p>
      <div className="team-details">
        <p className="bio">{bio}</p>
        <div className="specialties">
          <h6>Especialidades:</h6>
          <div className="specialty-tags">
            {specialties.map((specialty, index) => (
              <span key={index} className="specialty-tag">{specialty}</span>
            ))}
          </div>
        </div>
        <p className="education"><i className="bi bi-mortarboard-fill me-2"></i>{education}</p>
      </div>
      {socialLinks && (
        <div className="team-social">
          {socialLinks.linkedin && (
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
          )}
          {socialLinks.twitter && (
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-twitter"></i>
            </a>
          )}
          {socialLinks.researchGate && (
            <a href={socialLinks.researchGate} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-journal-text"></i>
            </a>
          )}
        </div>
      )}
    </div>
  );
}
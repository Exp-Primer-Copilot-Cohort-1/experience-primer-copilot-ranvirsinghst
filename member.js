function skillsMember() {
  return {
    skills: ['JavaScript', 'React', 'Node', 'MongoDB'],
    getSkills() {
      return this.skills;
    },
  };
}
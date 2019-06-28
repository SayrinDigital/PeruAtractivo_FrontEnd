export const state = () => ({
  experiences: null,
  contents: null
})

export const mutations = {
  setExperiences(state, experiences){
    state.experiences = experiences
  }
}

export const reducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const newPeople = [...state.people, action.payload]
        return { ...state, people: newPeople, isModalOpen: true, modalContent: 'Item Added' }
    }
    if (action.type === 'CLOSE_MODAL') {
        return { ...state, isModalOpen: false }
    }
    if (action.type === 'REMOVER') {
        const newPeople = state.people.filter(
          (person) => person.id !== action.payload
        );
        return { ...state, people: newPeople };
      }

    if (action.type === 'NO_VALUE') {
        return { ...state, isModalOpen: true, modalContent: 'Enter some input' }
    }
    throw new Error('No any matching dispatch found')

}